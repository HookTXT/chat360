import React from "react";
import { random } from "remotion";
import { C, FONT } from "../style/tokens";
import { Icon } from "./icons";

/**
 * G8 — Voice. The orb the visitor taps: sound rings travel out, the bars move
 * with the (implied) voice. Deterministic noise so every render is identical.
 */
export const VoiceOrb: React.FC<{ frame: number; size: number; level?: number; onDark?: boolean }> = ({
  frame,
  size,
  level = 1,
  onDark,
}) => {
  const bars = 5;
  const ringPeriod = 42;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      {[0, 1, 2].map((i) => {
        const t = ((frame + i * (ringPeriod / 3)) % ringPeriod) / ringPeriod;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: `${6 - 3 * t}px solid ${onDark ? "rgba(42,211,163,0.55)" : "rgba(11,122,90,0.35)"}`,
              transform: `scale(${1 + 0.55 * t})`,
              opacity: (1 - t) * level,
            }}
          />
        );
      })}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "radial-gradient(circle at 34% 28%, #7FF0CE 0%, #2AD3A3 38%, #0B7A5A 100%)",
          boxShadow: "0 30px 80px rgba(11,122,90,0.45), inset 0 -12px 40px rgba(0,0,0,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: size * 0.045,
        }}
      >
        {Array.from({ length: bars }).map((_, i) => {
          const slow = 0.5 + 0.5 * Math.sin(frame / 4 + i * 1.7);
          const jitter = random(`bar-${i}-${Math.floor(frame / 2)}`);
          const shape = [0.45, 0.75, 1, 0.75, 0.45][i];
          const h = size * (0.12 + 0.36 * shape * (0.35 + 0.4 * slow + 0.25 * jitter) * level);
          return <div key={i} style={{ width: size * 0.055, height: h, borderRadius: size, background: C.white }} />;
        })}
      </div>
    </div>
  );
};

export const Listening: React.FC<{ frame: number; text: string; onDark?: boolean }> = ({ frame, text, onDark }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: FONT }}>
    <span
      style={{
        width: 22,
        height: 22,
        borderRadius: 11,
        background: "#22C55E",
        opacity: 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(frame / 4)),
      }}
    />
    <Icon name="mic" size={40} color={onDark ? C.white : C.text} />
    <span style={{ fontSize: 42, fontWeight: 800, color: onDark ? C.white : C.text, letterSpacing: -0.5 }}>{text}</span>
  </div>
);
