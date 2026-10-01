import React from "react";
import { FONT } from "../style/tokens";
import { countUp, enter, fadeUp } from "./motion";

/**
 * G1 — Big number. Counts up (numbers never just appear). Optional small lead-in
 * line above ("Only"), inline words before/after the number ("plus de" 4 "heures"),
 * a label under it, and a small source tag — every number on screen carries one.
 */
export const BigNumber: React.FC<{
  frame: number;
  start: number;
  dur?: number;
  value: number;
  locale: string;
  lead?: string;
  pre?: string;
  suffix?: string; // glued to the number: "%", " %" (narrow no-break space), "×"
  unit?: string; // word after the number: "hours", "heures"
  size?: number;
  color: string;
  label?: React.ReactNode;
  labelAt?: number;
  labelColor?: string;
  labelSize?: number;
  source?: string;
  sourceAt?: number;
  sourceColor?: string;
  muted?: string;
}> = ({
  frame,
  start,
  dur = 24,
  value,
  locale,
  lead,
  pre,
  suffix = "",
  unit,
  size = 300,
  color,
  label,
  labelAt,
  labelColor,
  labelSize = 58,
  source,
  sourceAt,
  sourceColor,
  muted,
}) => {
  const n = Math.round(countUp(frame, start, dur, value));
  const p = enter(frame, start, 8);
  const fmt = new Intl.NumberFormat(locale).format(n);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", fontFamily: FONT }}>
      {lead ? (
        <div style={{ fontSize: 60, fontWeight: 800, color: muted ?? labelColor, letterSpacing: -0.8, marginBottom: 6, ...fadeUp(enter(frame, start - 2), 20) }}>
          {lead}
        </div>
      ) : null}
      <div style={{ display: "flex", alignItems: "baseline", gap: size * 0.08, color, ...fadeUp(p, 30) }}>
        {pre ? <span style={{ fontSize: size * 0.23, fontWeight: 800, letterSpacing: -1 }}>{pre}</span> : null}
        <span style={{ fontSize: size, fontWeight: 900, lineHeight: 0.95, letterSpacing: -size * 0.012, fontVariantNumeric: "tabular-nums" }}>
          {fmt}
          {suffix}
        </span>
        {unit ? <span style={{ fontSize: size * 0.42, fontWeight: 900, letterSpacing: -size * 0.012 }}>{unit}</span> : null}
      </div>
      {label ? (
        <div
          style={{
            marginTop: 26,
            fontSize: labelSize,
            fontWeight: 800,
            lineHeight: 1.15,
            color: labelColor,
            letterSpacing: -0.8,
            ...fadeUp(enter(frame, labelAt ?? start + 8), 24),
          }}
        >
          {label}
        </div>
      ) : null}
      {source ? (
        <div
          style={{
            marginTop: 30,
            fontSize: 30,
            fontWeight: 600,
            lineHeight: 1.3,
            color: sourceColor,
            maxWidth: 820,
            ...fadeUp(enter(frame, sourceAt ?? start + 16), 16),
          }}
        >
          {source}
        </div>
      ) : null}
    </div>
  );
};
