// The key pages: home, the money page, the tutorial list, one tutorial and the
// guide to paid offers, each whole (a change can sit anywhere on it), on a
// desktop window and on a phone. A new key page goes in PAGES.
import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const PAGES = {
  home: "",
  money: "money.html",
  tutorials: "tutorials/",
  tutorial: "tutorials/01-first-useful-conversation/",
  "where-money": "where-money-is-well-spent.html",
};

// The built site (visual.mjs builds one per side), served without a server under the path Pages gives it.
const dist = process.env.VISUAL_DIST;
const ORIGIN = "http://site.test";
const BASE = "/free-ai-kit/";
const TYPES = { ".html": "text/html", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp" };

async function serve(route) {
  const { pathname } = new URL(route.request().url());
  const path = decodeURIComponent(pathname.slice(BASE.length)).replace(/(^|\/)$/, "$1index.html");
  const body = pathname.startsWith(BASE) && (await readFile(join(dist, path)).catch(() => null));
  await route.fulfill(body ? { body, contentType: TYPES[extname(path)] ?? "application/octet-stream" } : { status: 404, body: "" });
}

async function shoot(page, path, name) {
  // The font comes from Google Fonts on both sides; a page that could not get it is the check's problem, not a change.
  const failed = [];
  page.on("requestfailed", (request) => failed.push(request.url()));
  await page.route(`${ORIGIN}/**`, serve);
  await page.goto(ORIGIN + BASE + path);
  await page.waitForLoadState("networkidle");
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  expect(failed, `These did not load: ${failed.join(", ")}`).toEqual([]);
  // A scroll box (a wide code block or table) is sometimes drawn on a layer of its own, its
  // bottom edge a pixel off; fixed in place, it draws the same way every time.
  await page.evaluate(() => {
    for (const el of document.querySelectorAll("*")) if (/auto|scroll/.test(getComputedStyle(el).overflow)) el.style.overflow = "hidden";
  });
  await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
}

for (const [id, path] of Object.entries(PAGES)) test(id, ({ page }) => shoot(page, path, id));

test.describe("phone", () => {
  test.use({ viewport: { width: 390, height: 844 } });
  for (const [id, path] of Object.entries(PAGES)) test(`${id}-phone`, ({ page }) => shoot(page, path, `${id}-phone`));
});
