#!/usr/bin/env node
/**
 * Renders public/linkedin-cover.html at 1584×396 and writes public/linkedin-cover.png
 * Requires Google Chrome or Chromium. Set CHROME_PATH to override.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "public", "linkedin-cover.html");
const outPath = path.join(root, "public", "linkedin-cover.png");
const fileUrl = `file://${htmlPath}`;

const candidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

let chrome = candidates.find((p) => {
  try {
    return fs.existsSync(p);
  } catch {
    return false;
  }
});

if (!chrome) {
  console.error(
    "Could not find Chrome/Chromium. Open public/linkedin-cover.html in a browser and screenshot the 1584×396 banner, or set CHROME_PATH.",
  );
  process.exit(1);
}

const args = [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--window-size=1584,396",
  `--screenshot=${outPath}`,
  fileUrl,
];

const r = spawnSync(chrome, args, { stdio: "inherit" });
if (r.status !== 0) {
  process.exit(r.status ?? 1);
}

console.log(`Wrote ${outPath}`);
