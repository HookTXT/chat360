import React from "react";
import { C, FONT } from "../style/tokens";
import { fadeUp } from "./motion";

/** G4 — Before / after. Both sides labelled and visible at once; the "after" side carries the accent. */
export const BeforeAfter: React.FC<{
  before: { label: string; value: string };
  after: { label: string; value: string };
  pBefore: number;
  pAfter: number;
  onDark?: boolean;
}> = ({ before, after, pBefore, pAfter, onDark }) => {
  const card = (side: "before" | "after", d: { label: string; value: string }, p: number) => (
    <div
      style={{
        flex: 1,
        padding: "40px 30px",
        borderRadius: 36,
        textAlign: "center",
        background: side === "after" ? (onDark ? "rgba(42,211,163,0.14)" : C.mintTint) : onDark ? "rgba(255,255,255,0.06)" : "#EEF0F2",
        border: side === "after" ? `4px solid ${onDark ? C.mint : C.mintDeep}` : "4px solid transparent",
        ...fadeUp(p, 30),
      }}
    >
      <div style={{ fontSize: 36, fontWeight: 800, color: onDark ? C.whiteMuted : C.textMuted }}>{d.label}</div>
      <div
        style={{
          fontSize: 92,
          fontWeight: 900,
          letterSpacing: -2,
          marginTop: 10,
          color: side === "after" ? (onDark ? C.mint : C.mintDeep) : onDark ? C.white : C.text,
        }}
      >
        {d.value}
      </div>
    </div>
  );
  return (
    <div style={{ display: "flex", gap: 24, width: 860, fontFamily: FONT }}>
      {card("before", before, pBefore)}
      {card("after", after, pAfter)}
    </div>
  );
};
