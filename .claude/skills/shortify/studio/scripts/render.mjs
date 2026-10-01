// Render a short's FR + EN cuts and covers into its folder (audio is rebuilt first).
// usage: node scripts/render.mjs <compositionPrefix> <shortFolder> [en|fr ...]
// e.g.   node scripts/render.mjs Chat360Ad 2026-10-01-chat360-ad
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import path from "node:path";

const [prefix, folder, ...langsArg] = process.argv.slice(2);
if (!prefix || !folder) {
  console.error("usage: node scripts/render.mjs <compositionPrefix> <shortFolder> [en|fr ...]");
  process.exit(1);
}
const langs = langsArg.length ? langsArg : ["fr", "en"];
const shortDir = path.resolve("..", "shorts", folder);
const build = path.join(shortDir, "build");
mkdirSync(build, { recursive: true });

const sh = (args) => execFileSync("npx", args, { stdio: "inherit" });
execFileSync("node", ["scripts/audio.mjs"], { stdio: "inherit" });
for (const lang of langs) {
  const L = lang.toUpperCase();
  sh(["remotion", "render", "src/index.ts", `${prefix}-${L}`, path.join(build, `final-${lang}.mp4`), `--props=${JSON.stringify({ lang })}`, "--log=error"]);
  sh(["remotion", "still", "src/index.ts", `Cover-${L}`, path.join(shortDir, `cover-${lang}.png`), `--props=${JSON.stringify({ lang })}`, "--log=error"]);
}
console.log(`done → ${build}`);
