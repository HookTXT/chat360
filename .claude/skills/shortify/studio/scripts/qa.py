"""Stage 8 automatic checks + contact sheets for a rendered short.

usage: python3 scripts/qa.py <video.mp4> <qaDir> [--hook 4.0] [--target 30] [--fps 3]

Writes <qaDir>/frames/*.png, <qaDir>/sheet-NN.png (safe zones tinted red) and
<qaDir>/auto.md with: length, loudness, cuts (none allowed inside the hook),
dark/paper split. The frame-by-frame read is the QA subagent's job.
Needs: ffmpeg, ffprobe, pillow, numpy.
"""
import argparse
import json
import re
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ap = argparse.ArgumentParser()
ap.add_argument("video")
ap.add_argument("qa_dir")
ap.add_argument("--hook", type=float, default=4.0)
ap.add_argument("--target", type=float, default=30.0)
ap.add_argument("--fps", type=float, default=3.0)
a = ap.parse_args()

qa = Path(a.qa_dir)
frames = qa / "frames"
frames.mkdir(parents=True, exist_ok=True)
for old in frames.glob("*.png"):
    old.unlink()


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True)


# 1 · container facts
probe = json.loads(run(["ffprobe", "-v", "error", "-show_streams", "-show_format", "-of", "json", a.video]).stdout)
v = next(s for s in probe["streams"] if s["codec_type"] == "video")
au = next((s for s in probe["streams"] if s["codec_type"] == "audio"), None)
duration = float(probe["format"]["duration"])

# 2 · loudness (integrated + true peak)
err = run(["ffmpeg", "-hide_banner", "-i", a.video, "-af", "loudnorm=I=-14:TP=-1:print_format=json", "-f", "null", "-"]).stderr
ln = json.loads(err[err.rfind("{") : err.rfind("}") + 1]) if au else {}

# 3 · cuts (scene changes)
err = run(["ffmpeg", "-hide_banner", "-i", a.video, "-vf", "select='gt(scene,0.25)',showinfo", "-f", "null", "-"]).stderr
cuts = [float(m) for m in re.findall(r"pts_time:([0-9.]+)", err)]
cuts_in_hook = [t for t in cuts if 0.05 < t < a.hook - 0.05]

# 4 · frames at N fps + tone classification
run(["ffmpeg", "-loglevel", "error", "-i", a.video, "-vf", f"fps={a.fps}", str(frames / "%04d.png")])
files = sorted(frames.glob("*.png"))
lum = []
for f in files:
    g = np.asarray(Image.open(f).convert("L").resize((108, 192)), dtype=np.float64) / 255
    lum.append(g.mean())
dark = sum(1 for x in lum if x < 0.4)
paper = len(lum) - dark

# 5 · contact sheets with safe zones tinted
W, H = 1080, 1920
TOP, BOTTOM, RIGHT = 220, 1536, 140


def tinted(im):
    im = im.convert("RGBA")
    ov = Image.new("RGBA", im.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)
    sx, sy = im.width / W, im.height / H
    red = (255, 40, 40, 70)
    d.rectangle([0, 0, im.width, TOP * sy], fill=red)
    d.rectangle([0, BOTTOM * sy, im.width, im.height], fill=red)
    d.rectangle([(W - RIGHT) * sx, (H / 2) * sy, im.width, BOTTOM * sy], fill=red)
    return Image.alpha_composite(im, ov).convert("RGB")


try:
    font = ImageFont.truetype("DejaVuSans-Bold.ttf", 22)
except OSError:
    font = ImageFont.load_default()
per, cols, tw = 12, 6, 300
th = int(tw * H / W)
for s in range(0, len(files), per):
    chunk = files[s : s + per]
    rows = (len(chunk) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * (tw + 10) + 10, rows * (th + 40) + 10), (30, 30, 30))
    d = ImageDraw.Draw(sheet)
    for i, f in enumerate(chunk):
        r, c = divmod(i, cols)
        x, y = 10 + c * (tw + 10), 10 + r * (th + 40)
        t = (s + i) / a.fps
        d.text((x, y + 4), f"{t:5.2f}s", fill=(255, 255, 255), font=font)
        sheet.paste(tinted(Image.open(f)).resize((tw, th), Image.LANCZOS), (x, y + 34))
    sheet.save(qa / f"sheet-{s // per + 1:02d}.png")

report = f"""# Automatic checks — {Path(a.video).name}

| Check | Result | Target | Pass |
|---|---|---|---|
| Size / fps | {v['width']}×{v['height']} @ {v.get('r_frame_rate')} | 1080×1920 @ 30 | {'✅' if (v['width'], v['height']) == (1080, 1920) else '❌'} |
| Length | {duration:.3f} s | {a.target:.0f} s (±0.1) | {'✅' if abs(duration - a.target) <= 0.1 else '❌'} |
| Loudness | {ln.get('input_i', 'n/a')} LUFS | −14 ±1 | {'✅' if ln and abs(float(ln['input_i']) + 14) <= 1 else '❌'} |
| True peak | {ln.get('input_tp', 'n/a')} dBTP | ≤ −1.0 | {'✅' if ln and float(ln['input_tp']) <= -1.0 else '⚠️'} |
| Cuts inside hook (0–{a.hook:.1f} s) | {', '.join(f'{t:.2f}' for t in cuts_in_hook) or 'none'} | none | {'✅' if not cuts_in_hook else '❌'} |
| All cuts | {', '.join(f'{t:.2f}' for t in cuts)} | at idea changes | — |
| Dark / paper | {100 * dark / len(lum):.0f} % / {100 * paper / len(lum):.0f} % | each 40–60 % | {'✅' if 0.4 <= dark / len(lum) <= 0.6 else '❌'} |
| First / last frame tone | {'dark' if lum[0] < 0.4 else 'paper'} / {'dark' if lum[-1] < 0.4 else 'paper'} | dark / dark | {'✅' if lum[0] < 0.4 and lum[-1] < 0.4 else '❌'} |

Contact sheets: `sheet-*.png` ({a.fps:g} fps, safe zones tinted red). Frames: `frames/`.
"""
(qa / "auto.md").write_text(report)
print(report)
