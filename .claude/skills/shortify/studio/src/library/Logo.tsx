import React, { useId } from "react";
import type { Tone } from "../style/tokens";
import { LOGO_INKS, LOGO_PATHS } from "./logoPaths";

// Tight content boxes measured on chat360-ai-logo.png (see scripts/trace-logo.py).
const BOX = { x: 2, y: 8, w: 396, h: 157 };
const BUBBLE = { x: 308, y: 8, w: 90, h: 93 };
const SPLIT_X = 306; // left of this: CHAT360 wordmark; right: the .AI bubble
const TAIL = { x: 322, y: 100 }; // bubble scales out of its tail

const Inks: React.FC<{ tone: Tone }> = ({ tone }) => (
  <>
    <path d={LOGO_PATHS.mint} fill={LOGO_INKS.mint} fillRule="evenodd" />
    {/* Reversed logo on dark: the gray "360" turns white. */}
    <path d={LOGO_PATHS.gray} fill={tone === "dark" ? "#FFFFFF" : LOGO_INKS.gray} fillRule="evenodd" />
    <path d={LOGO_PATHS.white} fill="#FFFFFF" fillRule="evenodd" />
  </>
);

/**
 * The CHAT360 .AI brand mark (traced from Kevin's file, never redrawn).
 * `word` wipes the wordmark in left→right, `bubble` pops the .AI bubble out of its tail (0→1 each).
 */
export const Logo: React.FC<{
  width: number;
  tone: Tone;
  word?: number;
  bubble?: number;
  shine?: number; // 0..1: a band of light crosses the mark (clipped to its shapes)
  style?: React.CSSProperties;
}> = ({ width, tone, word = 1, bubble = 1, shine, style }) => {
  const id = useId().replace(/:/g, "");
  const height = (width / BOX.w) * BOX.h;
  const s = 0.6 + 0.4 * bubble;
  return (
    <svg viewBox={`${BOX.x} ${BOX.y} ${BOX.w} ${BOX.h}`} width={width} height={height} style={style}>
      <defs>
        <clipPath id={`w${id}`}>
          <rect x={0} y={0} width={SPLIT_X * word} height={200} />
        </clipPath>
        <clipPath id={`b${id}`}>
          <rect x={SPLIT_X} y={0} width={120} height={200} />
        </clipPath>
        <clipPath id={`s${id}`}>
          <path d={LOGO_PATHS.mint} />
          <path d={LOGO_PATHS.gray} />
        </clipPath>
        <linearGradient id={`g${id}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity={tone === "dark" ? 0.75 : 0.6} />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#w${id})`}>
        <Inks tone={tone} />
      </g>
      <g
        clipPath={`url(#b${id})`}
        opacity={Math.min(1, bubble * 1.4)}
        transform={`translate(${TAIL.x} ${TAIL.y}) scale(${s}) translate(${-TAIL.x} ${-TAIL.y})`}
      >
        <Inks tone={tone} />
      </g>
      {shine !== undefined && shine > 0 && shine < 1 ? (
        <g clipPath={`url(#s${id})`}>
          <rect
            x={-80 + shine * 560}
            y={-20}
            width={70}
            height={220}
            fill={`url(#g${id})`}
            transform={`skewX(-18)`}
          />
        </g>
      ) : null}
    </svg>
  );
};

/** Just the .AI speech bubble — used as the bot's avatar in chat mocks. */
export const BubbleMark: React.FC<{ size: number; style?: React.CSSProperties }> = ({ size, style }) => (
  <svg
    viewBox={`${BUBBLE.x} ${BUBBLE.y} ${BUBBLE.w} ${BUBBLE.h}`}
    width={size}
    height={(size / BUBBLE.w) * BUBBLE.h}
    style={style}
  >
    <path d={LOGO_PATHS.mint} fill={LOGO_INKS.mint} fillRule="evenodd" />
    <path d={LOGO_PATHS.white} fill="#FFFFFF" fillRule="evenodd" />
  </svg>
);
