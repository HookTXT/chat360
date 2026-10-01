import type { CSSProperties } from "react";
import { Easing, interpolate } from "remotion";

// STYLE.md → Motion: ease-out in (200–300 ms), ease-in out, no bounces, no spins.
export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
export const easeIn = Easing.bezier(0.7, 0, 0.84, 0);
export const easeInOut = Easing.bezier(0.65, 0, 0.35, 1);

export const IN = 8; // frames (~270 ms at 30 fps)
export const OUT = 6;

/** 0→1 progress of an entrance that starts at `start` (frames, relative). */
export const enter = (frame: number, start: number, dur: number = IN, ease = easeOut) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

/** 1→0 progress of an exit that starts at `start`. */
export const exit = (frame: number, start: number, dur: number = OUT) =>
  1 - enter(frame, start, dur, easeIn);

export const fadeUp = (p: number, dist = 36): CSSProperties => ({
  opacity: p,
  transform: `translateY(${(1 - p) * dist}px)`,
});

export const popIn = (p: number, from = 0.88): CSSProperties => ({
  opacity: p,
  transform: `scale(${from + (1 - from) * p})`,
});

export const slideIn = (p: number, dx = 0, dy = 80): CSSProperties => ({
  opacity: p,
  transform: `translate(${(1 - p) * dx}px, ${(1 - p) * dy}px)`,
});

/** Characters of `text` visible at `frame` when typing from `start` at `cps` chars/sec. */
export const typed = (text: string, frame: number, start: number, cps = 40, fps = 30) => {
  const n = Math.max(0, Math.floor(((frame - start) / fps) * cps));
  return text.slice(0, Math.min(text.length, n));
};

/** Frames needed to type `text` at `cps`. */
export const typeFrames = (text: string, cps = 40, fps = 30) => Math.ceil((text.length / cps) * fps);

/** Eased count from 0 to `to` between `start` and `start + dur`. */
export const countUp = (frame: number, start: number, dur: number, to: number) =>
  to * enter(frame, start, dur, Easing.bezier(0.22, 1, 0.36, 1));
