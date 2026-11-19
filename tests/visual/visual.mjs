// The screenshot check (README.md here): builds the site on main and in this tree
// with GitHub Pages' own gem set, renders the key pages of both on this machine
// (screens.mjs) and lists every page that looks different. A changed page passes
// only once it was reviewed and accepted for exactly these sources
// (accepted.json); nothing is ever accepted on its own.
//
//   node tests/visual/visual.mjs [base]            compare with base (default: where this branch left origin/main)
//   node tests/visual/visual.mjs accept <page>...  accept pages the blind review labelled intended
//
// Exit 0: no change, or every change accepted. 1: changes to review or accept.
// 2: the check itself failed (a build, or a page that could not be rendered).

import { chromium } from "@playwright/test";
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");
const out = join(root, ".visual");
const review = join(out, "review");
const acceptedFile = join(here, "accepted.json");
const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8", maxBuffer: 64 << 20 }).trim();

// What the pages are made of: the site, and this folder's pages, sizes and
// builder. A later change to anything else (the skills, the README, workflows)
// leaves an accept standing; a change to these voids it.
const SOURCE = ["docs", "tests/visual"];
const NOT_SOURCE = ["tests/visual/accepted.json", "tests/visual/README.md"];
// A reviewer reads a long page in parts this many pixels high.
const PART = 1600;

/** A fingerprint of the sources at `commit`. */
function sourceOf(commit) {
  const files = git("ls-tree", "-r", commit, "--", ...SOURCE).split("\n").filter((l) => !NOT_SOURCE.includes(l.split("\t")[1]));
  return createHash("sha256").update(files.join("\n")).digest("hex").slice(0, 16);
}

if (process.argv[2] === "accept") accept(process.argv.slice(3));
else
  await compare(process.argv[2]).catch((err) => {
    console.error(`\nThe check itself failed: ${err instanceof Error ? err.message : String(err)}`);
    process.exit(2);
  });

async function compare(baseArg) {
  const base = git("rev-parse", "--verify", `${baseArg ?? git("merge-base", "origin/main", "HEAD")}^{commit}`);
  // In CI the tree is the PR merged into main; the accept belongs to the PR's own head.
  const dirty = !process.env.VISUAL_SOURCE && git("status", "--porcelain", "--untracked-files=all", "--", ...SOURCE, ...NOT_SOURCE.map((f) => `:!${f}`)) !== "";
  const source = dirty ? null : sourceOf(process.env.VISUAL_SOURCE ?? "HEAD");

  rmSync(out, { recursive: true, force: true });
  mkdirSync(out);
  // Main's files into .visual/base-src, through an index of its own: the work tree and its index stay as they are.
  const index = { cwd: root, env: { ...process.env, GIT_INDEX_FILE: join(out, "base.index") } };
  execFileSync("git", ["read-tree", base], index);
  execFileSync("git", ["checkout-index", "--all", "--prefix=.visual/base-src/"], index);

  // Both sides with this tree's gem set, under the path Pages serves the site at, in UTF-8 as Pages builds.
  // -rgithub-pages brings Pages' own settings and plugins: Jekyll loads them itself only from a Gemfile in the working folder.
  const jekyll = ["-rbundler/setup", "-rgithub-pages", "-e", 'load Gem.bin_path("jekyll", "jekyll")', "--", "build", "--quiet", "--baseurl", "/free-ai-kit"];
  const env = { ...process.env, BUNDLE_GEMFILE: join(here, "Gemfile"), LC_ALL: "C.UTF-8" };
  for (const [side, dir] of [["head", root], ["base", join(out, "base-src")]]) {
    execFileSync("ruby", [...jekyll, "--source", join(dir, "docs"), "--destination", join(out, side)], { cwd: root, stdio: "inherit", env });
  }

  const playwright = (side, ...flags) =>
    spawnSync(process.execPath, [join(here, "node_modules", "@playwright", "test", "cli.js"), "test", "-c", here, ...flags], {
      cwd: root,
      stdio: "inherit",
      env: { ...process.env, VISUAL_OUT: out, VISUAL_DIST: join(out, side) },
    });
  // Main's pages first, as the baseline, then this tree's against them; `only` limits both to some pages.
  const render = (only) => {
    const grep = only ? ["-g", `(^| )(${only.join("|")})$`] : [];
    if (playwright("base", "--update-snapshots=all", "--reporter=dot", ...grep).status !== 0) throw new Error("main's pages could not be rendered (above).");
    playwright("head", "--update-snapshots=none", ...grep);
    const report = JSON.parse(readFileSync(join(out, "results.json"), "utf8"));
    const changed = [];
    const broken = [];
    const walk = (suite) => {
      for (const s of suite.suites ?? []) walk(s);
      for (const spec of suite.specs ?? []) {
        const result = spec.tests[0]?.results.at(-1);
        if (!result || result.status === "passed") continue;
        const file = (name) => result.attachments.find((a) => a.name === `${spec.title}-${name}.png`)?.path;
        const message = result.errors.map((e) => e.message ?? "").join("\n") || result.status;
        // A page that never held still is the check's problem, not a change.
        if (file("actual") && !/stable screenshots/i.test(message)) changed.push({ screen: spec.title, before: file("expected"), after: file("actual"), diff: file("diff") });
        else broken.push(`${spec.title}: ${message.replace(/\u001b\[[0-9;]*m/g, "").split("\n").find((l) => l.trim() && !l.startsWith("Error: expect")) ?? message}`);
      }
    };
    for (const s of report.suites) walk(s);
    return { changed, broken };
  };
  let { changed, broken } = render();
  // Chromium doesn't always draw a long page exactly the same way (a pixel here and there),
  // so a page counts as changed only if fresh renders of both sides differ again.
  if (changed.length && !broken.length) {
    console.log(`\nRendering ${changed.map((c) => c.screen).join(", ")} again on both sides, to tell a change from a pixel drawn differently.`);
    ({ changed, broken } = render(changed.map((c) => c.screen)));
  }

  await writeReview(changed);
  const accepted = existsSync(acceptedFile) ? JSON.parse(readFileSync(acceptedFile, "utf8")) : { source: null, screens: {} };
  const open = changed.filter((c) => !(accepted.source === source && source && c.screen in accepted.screens));
  writeFileSync(join(out, "run.json"), `${JSON.stringify({ base, source, changed: changed.map((c) => c.screen) }, null, 2)}\n`);

  console.log(`\nPages against ${base.slice(0, 7)}: ${changed.length} changed, ${open.length} not accepted.`);
  for (const c of changed) console.log(`  ${open.includes(c) ? "changed " : "accepted"}  ${c.screen}`);
  if (broken.length) {
    console.log(`\nThe check could not render ${broken.length} page(s):\n  ${broken.join("\n  ")}`);
    process.exit(2);
  }
  if (open.length) {
    console.log(
      dirty
        ? "\nCommit the changes first: an accept belongs to committed sources."
        : `\nEach change needs a blind review, then an explicit accept (tests/visual/README.md):\n` +
            `  1. a fresh reviewer that sees only .visual/review/ writes .visual/review/labels.json\n` +
            `  2. node tests/visual/visual.mjs accept <page>...   (only pages labelled intended)\n` +
            `  3. commit tests/visual/accepted.json`,
    );
    process.exit(1);
  }
}

/** One folder per changed page, holding the parts of it that differ, and the brief: all a blind reviewer gets. */
async function writeReview(changed) {
  mkdirSync(review, { recursive: true });
  if (changed.length) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const png = (file) => readFileSync(file).toString("base64");
    for (const c of changed) {
      const parts = await page.evaluate(cut, { part: PART, before: png(c.before), after: png(c.after), diff: png(c.diff) });
      mkdirSync(join(review, c.screen));
      for (const [name, data] of Object.entries(parts)) writeFileSync(join(review, c.screen, name), Buffer.from(data, "base64"));
    }
    await browser.close();
  }
  const pr = process.env.VISUAL_PR_TITLE ? `# ${process.env.VISUAL_PR_TITLE}\n\n${process.env.VISUAL_PR_BODY ?? ""}` : "(Put the pull request's title and description here before the review.)";
  writeFileSync(
    join(review, "README.md"),
    `# Pages that changed\n\n` +
      `Each folder is one page of the free AI kit site, on a desktop window or, where the name ends in \`-phone\`, on a phone. ` +
      `The pages are long, so each one is cut into parts from the top, and only the parts that differ are here: \`before-2.png\` is the second part of the page on main, \`after-2.png\` the same part in the pull request, \`diff-2.png\` marks the pixels that differ in red. ` +
      `A part with no before or no after is where one side is longer; a blank before is a page main does not have yet.\n\n` +
      `For each page, decide from the pictures and the pull request below:\n\n` +
      `- **intended**: the pull request says it changes this, and the after pictures look right (nothing cut off, overlapping, unreadable, missing or off-colour).\n` +
      `- **regression**: the pull request does not explain the change, or the after pictures look broken.\n\n` +
      `Write \`labels.json\` in this folder, one entry per page, and nothing else:\n\n` +
      "```json\n" +
      `{\n${changed.map((c) => `  "${c.screen}": { "label": "intended", "why": "one line" }`).join(",\n") || '  "page": { "label": "intended", "why": "one line" }'}\n}\n` +
      "```\n\n" +
      `## The pull request\n\n${pr}\n`,
  );
}

/** In the browser: the pictures cut into parts `part` pixels high, keeping the parts where the diff shows red. */
async function cut({ part, before, after, diff }) {
  const [b, a, d] = await Promise.all(
    [before, after, diff].map(async (png) => {
      const img = new Image();
      img.src = `data:image/png;base64,${png}`;
      await img.decode();
      return img;
    }),
  );
  const slice = (img, y) => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = Math.min(part, img.height - y);
    canvas.getContext("2d", { willReadFrequently: true }).drawImage(img, 0, -y);
    return canvas;
  };
  const red = (canvas) => {
    const px = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
    for (let i = 0; i < px.length; i += 4) if (px[i] === 255 && px[i + 1] === 0 && px[i + 2] === 0) return true;
    return false;
  };
  const parts = {};
  // The diff is as high as the taller side.
  for (let y = 0, n = 1; y < d.height; y += part, n++) {
    const marked = slice(d, y);
    if (!red(marked)) continue;
    parts[`diff-${n}.png`] = marked.toDataURL().split(",")[1];
    if (y < b.height) parts[`before-${n}.png`] = slice(b, y).toDataURL().split(",")[1];
    if (y < a.height) parts[`after-${n}.png`] = slice(a, y).toDataURL().split(",")[1];
  }
  return parts;
}

function accept(pages) {
  const run = existsSync(join(out, "run.json")) ? JSON.parse(readFileSync(join(out, "run.json"), "utf8")) : null;
  const labels = existsSync(join(review, "labels.json")) ? JSON.parse(readFileSync(join(review, "labels.json"), "utf8")) : {};
  const fail = (why) => {
    console.error(why);
    process.exit(1);
  };
  if (!run) fail("No check to accept from: run node tests/visual/visual.mjs first.");
  if (!run.source) fail("The check ran on uncommitted changes. Commit them, run the check again, review, then accept.");
  if (run.source !== sourceOf("HEAD")) fail("The sources changed since the check ran. Run it again, review, then accept.");
  if (!pages.length) fail(`Name the pages to accept: ${run.changed.join(" ") || "(none changed)"}`);
  const prev = existsSync(acceptedFile) ? JSON.parse(readFileSync(acceptedFile, "utf8")) : null;
  const kept = prev?.source === run.source ? prev.screens : {};
  for (const s of pages) {
    if (!run.changed.includes(s)) fail(`${s} did not change in the last check (changed: ${run.changed.join(", ") || "none"}).`);
    const l = labels[s];
    if (!l) fail(`${s} has no label in .visual/review/labels.json: a blind reviewer labels it first.`);
    if (l.label !== "intended") fail(`${s} was labelled ${l.label}: ${String(l.why).replace(/\.$/, "")}. Fix it, or run the check and the review again.`);
    kept[s] = l.why;
  }
  writeFileSync(acceptedFile, `${JSON.stringify({ source: run.source, screens: kept }, null, 2)}\n`);
  console.log(`Accepted ${pages.join(", ")} for sources ${run.source}. Commit tests/visual/accepted.json.`);
}
