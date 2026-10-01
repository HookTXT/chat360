import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
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
  return (
    <AbsoluteFill style={{ backgroundColor: base, backgroundImage: `${halo}, ${vignette}` }}>
      {/* Fine static grain (pre-made texture, <Img> so the render waits for it): dithers the gradient against banding. */}
      <Img
        src={staticFile("textures/grain.jpg")}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", mixBlendMode: "overlay", opacity: tone === "dark" ? 0.09 : 0.05 }}
      />
    </AbsoluteFill>
  );
};
