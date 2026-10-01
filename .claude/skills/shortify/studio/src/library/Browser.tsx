import React from "react";
import { C, FONT } from "../style/tokens";
import { CarTile } from "./Chat";
import { Icon } from "./icons";
import { popIn, slideIn } from "./motion";

/**
 * G7 — Site tour. A browser window on the dealer's site whose URL types itself,
 * filters land as chips and matching vehicles slide in: the website moving on
 * its own while the chat talks (Cowork).
 */
export const BrowserFrame: React.FC<{
  width: number;
  height: number;
  url: string;
  typedChars: number; // how many URL characters are visible
  caret?: boolean;
  onDark?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ width, height, url, typedChars, caret, onDark, children, style }) => (
  <div
    style={{
      width,
      height,
      borderRadius: 36,
      overflow: "hidden",
      background: C.card,
      fontFamily: FONT,
      display: "flex",
      flexDirection: "column",
      boxShadow: onDark
        ? "0 50px 140px rgba(0,0,0,0.55), 0 0 0 2px rgba(255,255,255,0.06)"
        : "0 40px 110px rgba(17,24,39,0.14), 0 0 0 2px rgba(17,24,39,0.04)",
      ...style,
    }}
  >
    <div style={{ height: 96, background: "#F3F4F6", display: "flex", alignItems: "center", gap: 14, padding: "0 26px", flexShrink: 0 }}>
      {["#F87171", "#FBBF24", "#34D399"].map((c) => (
        <span key={c} style={{ width: 20, height: 20, borderRadius: 10, background: c }} />
      ))}
      <div
        style={{
          marginLeft: 12,
          flex: 1,
          height: 60,
          borderRadius: 30,
          background: C.card,
          border: "2px solid #E5E7EB",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 22px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: 25,
          fontWeight: 600,
          color: "#374151",
        }}
      >
        <Icon name="lock" size={24} color="#9CA3AF" />
        <span>{url.slice(0, typedChars)}</span>
        {caret ? <span style={{ width: 3, height: 30, background: C.mintDeep, marginLeft: -6 }} /> : null}
      </div>
    </div>
    <div style={{ position: "relative", flex: 1 }}>{children}</div>
  </div>
);

export const FilterChip: React.FC<{ text: string; p: number }> = ({ text, p }) => (
  <div
    style={{
      padding: "14px 26px",
      borderRadius: 999,
      background: C.mintTint,
      color: C.mintDeep,
      border: `2px solid rgba(11,122,90,0.25)`,
      fontFamily: FONT,
      fontSize: 30,
      fontWeight: 800,
      whiteSpace: "nowrap",
      ...popIn(p, 0.8),
    }}
  >
    {text}
  </div>
);

export const ResultRow: React.FC<{ title: string; meta: string; p: number; highlight?: number; hue?: "blue" | "slate" | "teal" }> = ({
  title,
  meta,
  p,
  highlight = 0,
  hue = "blue",
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 26,
      padding: 18,
      borderRadius: 28,
      background: highlight > 0 ? `rgba(240,253,248,${highlight})` : C.card,
      border: `3px solid ${highlight > 0 ? `rgba(42,211,163,${highlight})` : "#EEF0F2"}`,
      fontFamily: FONT,
      ...slideIn(p, 0, 50),
    }}
  >
    <CarTile width={150} height={100} iconSize={64} hue={hue} />
    <div>
      <div style={{ fontSize: 36, fontWeight: 800, color: C.text, letterSpacing: -0.4 }}>{title}</div>
      <div style={{ fontSize: 28, fontWeight: 600, color: C.textMuted, marginTop: 4 }}>{meta}</div>
    </div>
  </div>
);
