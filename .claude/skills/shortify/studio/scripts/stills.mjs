// Render chosen frames of a composition as PNGs (bundles once, reuses one browser).
// usage: node scripts/stills.mjs <compositionId> <outDir> <frame,frame,...> [scale] [propsJSON]
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { bundle } from "@remotion/bundler";
import { openBrowser, renderStill, selectComposition } from "@remotion/renderer";

const [id, outDir, framesArg, scaleArg = "1", propsArg] = process.argv.slice(2);
if (!id || !outDir || !framesArg) {
  console.error("usage: node scripts/stills.mjs <compositionId> <outDir> <frames> [scale] [propsJSON]");
  process.exit(1);
}
const PRESET = "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";
const browserExecutable = process.env.REMOTION_BROWSER ?? (existsSync(PRESET) ? PRESET : null);
const inputProps = propsArg ? JSON.parse(propsArg) : {};
const frames = framesArg.split(",").map((s) => Number(s.trim()));
mkdirSync(outDir, { recursive: true });

const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts"), publicDir: path.resolve("public") });
const browser = await openBrowser("chrome", { browserExecutable, chromiumOptions: { gl: "swangle" } });
const composition = await selectComposition({ serveUrl, id, inputProps, puppeteerInstance: browser });
for (const frame of frames) {
  const output = path.join(outDir, `${id}-${String(frame).padStart(4, "0")}.png`);
  await renderStill({ composition, serveUrl, output, frame, inputProps, puppeteerInstance: browser, scale: Number(scaleArg) });
  console.log(output);
}
await browser.close({ silent: true });
