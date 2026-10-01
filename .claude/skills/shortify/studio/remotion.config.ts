import { existsSync } from "node:fs";
import { Config } from "@remotion/cli/config";

// In Claude Code cloud sessions Chromium is pre-installed; elsewhere Remotion
// downloads its own headless shell, so only point at this one when it exists.
const PRESET_BROWSER = "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";
const browser = process.env.REMOTION_BROWSER ?? (existsSync(PRESET_BROWSER) ? PRESET_BROWSER : null);
if (browser) Config.setBrowserExecutable(browser);

Config.setVideoImageFormat("jpeg");
Config.setJpegQuality(95);
Config.setOverwriteOutput(true);
Config.setCodec("h264");
Config.setCrf(16);
Config.setPixelFormat("yuv420p");
Config.setChromiumOpenGlRenderer("swangle");
