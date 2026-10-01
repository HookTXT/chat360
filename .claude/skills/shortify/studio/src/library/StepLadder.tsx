import React from "react";
import { FONT, tone as toneOf, type Tone } from "../style/tokens";
import { Icon } from "./icons";
import { enter, fadeUp } from "./motion";

/** G3 — Step ladder. Numbered steps joined by a rail; each lights on its beat, done steps get a check. */
export const StepLadder: React.FC<{
  frame: number;
  steps: { text: string; at: number }[];
  tone: Tone;
  width?: number;
  size?: number; // text px; circle scales with it
}> = ({ frame, steps, tone, width = 860, size = 64 }) => {
  const dot = Math.round(size * 1.42);
  const t = toneOf(tone);
  return (
    <div style={{ width, fontFamily: FONT, display: "flex", flexDirection: "column", gap: Math.round(size * 0.4) }}>
      {steps.map((s, i) => {
        const p = enter(frame, s.at);
        const next = steps[i + 1];
        const done = next ? enter(frame, next.at) : 0;
        return (
          <div key={s.text} style={{ display: "flex", alignItems: "center", gap: 28, ...fadeUp(p, 24) }}>
            <div
              style={{
                width: dot,
                height: dot,
                borderRadius: dot / 2,
                flexShrink: 0,
                background: t.accent,
                color: tone === "dark" ? "#0B1716" : "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: Math.round(size * 0.75),
                fontWeight: 900,
              }}
            >
              {done > 0.5 ? <Icon name="check" size={Math.round(size * 0.78)} color={tone === "dark" ? "#0B1716" : "#FFFFFF"} stroke={3} /> : i + 1}
            </div>
            <div style={{ fontSize: size, fontWeight: 900, color: t.text, letterSpacing: -size * 0.024, opacity: 1 - 0.45 * done, whiteSpace: "nowrap" }}>
              {s.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};
