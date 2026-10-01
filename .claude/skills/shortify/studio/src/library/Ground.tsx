import React, { useId } from "react";
import { AbsoluteFill } from "remotion";
import { C, type Tone } from "../style/tokens";

/**
 * Scene background. Depth comes from one soft glow behind the focal object
 * (STYLE.md: light and depth, never more stuff).
 */
export const Ground: React.FC<{ tone: Tone; glowX?: number; glowY?: number; glow?: number }> = ({
  tone,
  glowX = 540,
  glowY = 900,
  glow = 1,
}) => {
  const base = tone === "dark" ? C.ink : C.paper;
  const halo =
    tone === "dark"
      ? `radial-gradient(900px 900px at ${glowX}px ${glowY}px, rgba(42,211,163,${0.17 * glow}), rgba(42,211,163,0) 70%)`
      : `radial-gradient(900px 900px at ${glowX}px ${glowY}px, rgba(255,255,255,${0.9 * glow}), rgba(255,255,255,0) 70%)`;
  const vignette =
    tone === "dark"
      ? "radial-gradient(1400px 1800px at 50% 45%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)"
      : "radial-gradient(1400px 1800px at 50% 45%, rgba(0,0,0,0) 60%, rgba(60,50,30,0.08) 100%)";
  const id = useId().replace(/:/g, "");
  return (
    <AbsoluteFill style={{ backgroundColor: base, backgroundImage: `${halo}, ${vignette}` }}>
      {/* 1–2 % static grain: dithers the gradient so it doesn't band on OLED phones */}
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: tone === "dark" ? 0.07 : 0.045, mixBlendMode: "overlay" }}>
        <filter id={`n${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#n${id})`} />
      </svg>
    </AbsoluteFill>
  );
};
