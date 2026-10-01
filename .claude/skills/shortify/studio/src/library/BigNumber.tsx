import React from "react";
import { FONT } from "../style/tokens";
import { countUp, enter, fadeUp } from "./motion";

/**
 * G1 — Big number. Counts up (numbers never just appear), label lands under it,
 * a small source tag sits below. Size the number so it reads in half a second.
 */
export const BigNumber: React.FC<{
  frame: number;
  start: number;
  dur?: number;
  value: number;
  locale: string;
  prefix?: string;
  suffix?: string;
  size?: number;
  color: string;
  label?: React.ReactNode;
  labelAt?: number;
  labelColor?: string;
  source?: string;
  sourceAt?: number;
  sourceColor?: string;
}> = ({
  frame,
  start,
  dur = 24,
  value,
  locale,
  prefix = "",
  suffix = "",
  size = 300,
  color,
  label,
  labelAt,
  labelColor,
  source,
  sourceAt,
  sourceColor,
}) => {
  const n = Math.round(countUp(frame, start, dur, value));
  const p = enter(frame, start, 8);
  const fmt = new Intl.NumberFormat(locale).format(n);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", fontFamily: FONT }}>
      <div
        style={{
          fontSize: size,
          fontWeight: 900,
          color,
          lineHeight: 0.95,
          letterSpacing: -size * 0.04,
          fontVariantNumeric: "tabular-nums",
          ...fadeUp(p, 30),
        }}
      >
        {prefix}
        {fmt}
        {suffix}
      </div>
      {label ? (
        <div
          style={{
            marginTop: 26,
            fontSize: 60,
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
