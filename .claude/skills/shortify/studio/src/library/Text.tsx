import React from "react";
import { FONT } from "../style/tokens";
import { fadeUp } from "./motion";

/** A headline line. `parts` lets one span carry the accent: ["Chat360 ", {accent: "opens the page."}]. */
export type Part = string | { accent: string };

export const Headline: React.FC<{
  parts: Part[];
  p: number;
  size?: number;
  color: string;
  accent: string;
  align?: "left" | "center";
  strike?: number; // 0..1 strike-through across the whole line
  dim?: number; // 0..1 fade toward 40 %
  width?: number;
}> = ({ parts, p, size = 84, color, accent, align = "center", strike = 0, dim = 0, width = 900 }) => (
  <div
    style={{
      width,
      textAlign: align,
      fontFamily: FONT,
      fontSize: size,
      fontWeight: 900,
      lineHeight: 1.08,
      letterSpacing: -size * 0.025,
      color,
      ...fadeUp(p, 30),
      opacity: p * (1 - 0.6 * dim),
    }}
  >
    <span style={{ position: "relative", display: "inline" }}>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} style={{ color: accent }}>
            {part.accent}
          </span>
        ),
      )}
      {strike > 0 ? (
        <span
          style={{
            position: "absolute",
            left: 0,
            top: "52%",
            height: Math.max(6, size * 0.08),
            width: `${strike * 100}%`,
            background: color,
            borderRadius: 4,
          }}
        />
      ) : null}
    </span>
  </div>
);
