// The screenshot check (visual.mjs runs it; README.md here says how). Both sides
// of a comparison render here, back to back, with the same browser, so only the
// fixed parts below matter: window size and scale. The browser is Playwright's
// own Chromium: Google Chrome drew some edges of a whole page a pixel off from
// one run to the next.
import { defineConfig } from "@playwright/test";
import { fileURLToPath } from "node:url";

const out = process.env.VISUAL_OUT ?? fileURLToPath(new URL("../../.visual", import.meta.url));

export default defineConfig({
  testDir: ".",
  testMatch: "screens.mjs",
  outputDir: `${out}/results`,
  snapshotPathTemplate: `${out}/baseline/{arg}{ext}`,
  reporter: [["list"], ["json", { outputFile: `${out}/results.json` }]],
  fullyParallel: true,
  retries: 0,
  use: {
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
  },
  expect: { toHaveScreenshot: { animations: "disabled", caret: "hide", scale: "css" } },
});
