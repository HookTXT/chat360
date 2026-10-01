import React from "react";
import { C, FONT } from "../style/tokens";
import { Icon } from "./icons";
import { Logo } from "./Logo";
import { enter, fadeUp, popIn } from "./motion";

/**
 * G6 — CTA end card (always dark). Logo, the lane's CTA line word for word, the
 * keyword huge, and a comment box that types the keyword so the ask is shown,
 * not just said.
 */
export const CtaEndCard: React.FC<{
  frame: number;
  line: string; // e.g. "The full demo is inside Chat360."
  verb: string; // "Comment" / "Commente"
  word: string; // "DEMO" / "DÉMO"
  placeholder: string; // "Add a comment…"
  url: string;
  at: { logo: number; line: number; word: number; box: number; type: number; send: number; url: number };
}> = ({ frame, line, verb, word, placeholder, url, at }) => {
  const typedN = Math.max(0, Math.min(word.length, Math.floor((frame - at.type) / 3)));
  const sent = enter(frame, at.send, 6);
  const glow = 0.5 + 0.5 * Math.sin(Math.max(0, frame - at.word) / 7);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: FONT, width: 860 }}>
      <Logo
        width={520}
        tone="dark"
        word={enter(frame, at.logo, 14)}
        bubble={enter(frame, at.logo + 8, 10)}
        shine={Math.max(0, Math.min(1, (frame - at.logo - 14) / 18))}
      />
      <div
        style={{
          marginTop: 70,
          fontSize: 50,
          fontWeight: 800,
          color: C.white,
          whiteSpace: "nowrap",
          textAlign: "center",
          letterSpacing: -0.8,
          lineHeight: 1.2,
          ...fadeUp(enter(frame, at.line), 24),
        }}
      >
        {line}
      </div>
      <div style={{ marginTop: 38, display: "flex", alignItems: "center", gap: 26, ...popIn(enter(frame, at.word), 0.8) }}>
        <span style={{ fontSize: 88, fontWeight: 900, color: C.white, letterSpacing: -3 }}>{verb}</span>
        <span
          style={{
            fontSize: 88,
            fontWeight: 900,
            letterSpacing: -2,
            color: C.ink,
            background: C.mint,
            padding: "6px 34px 10px",
            borderRadius: 30,
            boxShadow: `0 0 ${40 + 40 * glow}px rgba(42,211,163,${0.35 + 0.25 * glow})`,
          }}
        >
          {word}
        </span>
      </div>
      <div
        style={{
          marginTop: 60,
          width: 760,
          height: 112,
          borderRadius: 56,
          background: "rgba(255,255,255,0.08)",
          border: "2px solid rgba(255,255,255,0.16)",
          display: "flex",
          alignItems: "center",
          gap: 20,
          padding: "0 18px 0 34px",
          ...fadeUp(enter(frame, at.box), 24),
        }}
      >
        <Icon name="comment" size={46} color={C.whiteMuted} />
        <div style={{ flex: 1, fontSize: 40, fontWeight: 700, color: typedN > 0 ? C.white : "rgba(255,255,255,0.45)" }}>
          {typedN > 0 ? word.slice(0, typedN) : placeholder}
          {typedN > 0 && typedN < word.length ? <span style={{ color: C.mint }}>|</span> : null}
        </div>
        <div
          style={{
            width: 78,
            height: 78,
            borderRadius: 39,
            background: typedN >= word.length ? C.mint : "rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${1 - 0.12 * Math.sin(sent * Math.PI)})`,
          }}
        >
          <Icon name="send" size={40} color={typedN >= word.length ? C.ink : C.whiteMuted} stroke={2.4} />
        </div>
      </div>
      <div style={{ marginTop: 44, fontSize: 38, fontWeight: 700, color: C.whiteMuted, letterSpacing: 0.5, ...fadeUp(enter(frame, at.url), 16) }}>
        {url}
      </div>
    </div>
  );
};
