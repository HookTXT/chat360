import React from "react";
import { C, FONT } from "../style/tokens";
import { Icon } from "./icons";
import { BubbleMark, Logo } from "./Logo";
import { enter, fadeUp, popIn } from "./motion";

/**
 * G6 — CTA end card (always dark). Logo, the lane's CTA line word for word, the
 * keyword huge, a comment box that types the keyword, then (optionally) the DM
 * that comment triggers — the ask is shown, not just said.
 */
export const CtaEndCard: React.FC<{
  frame: number;
  line: string; // e.g. "The full demo is inside Chat360."
  verb: string; // "Comment" / "Commente"
  word: string; // "DEMO" / "DÉMO"
  placeholder: string; // "Add a comment…"
  url?: string;
  dm?: { from: string; text: string; button: string };
  at: { logo: number; line: number; word: number; box: number; type: number; send: number; url?: number; dm?: number; pulse?: number };
}> = ({ frame, line, verb, word, placeholder, url, dm, at }) => {
  const typedN = Math.max(0, Math.min(word.length, Math.floor((frame - at.type) / 3)));
  const sent = enter(frame, at.send, 6);
  const glow = 0.5 + 0.5 * Math.sin(Math.max(0, frame - at.word) / 7);
  const pulse = at.pulse !== undefined ? Math.sin(Math.min(1, Math.max(0, (frame - at.pulse) / 10)) * Math.PI) : 0;
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
      <div style={{ marginTop: 38, display: "flex", alignItems: "center", gap: 26, ...popIn(enter(frame, at.word), 0.8), scale: String(1 + 0.07 * pulse) }}>
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
          background: "#1A2A27",
          border: "2px solid #2E413D",
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
      {dm && at.dm !== undefined ? (
        <div
          style={{
            marginTop: 34,
            width: 760,
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "20px 22px",
            borderRadius: 34,
            background: "#1A2A27",
            border: "2px solid rgba(42,211,163,0.55)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
            ...fadeUp(enter(frame, at.dm, 8), 40),
          }}
        >
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 38,
              flexShrink: 0,
              background: "#E7F8F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BubbleMark size={46} style={{ marginTop: 4 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: C.whiteMuted }}>{dm.from}</div>
            <div style={{ fontSize: 38, fontWeight: 800, color: C.white, letterSpacing: -0.5 }}>{dm.text}</div>
          </div>
          <div
            style={{
              padding: "16px 24px",
              borderRadius: 999,
              background: C.mint,
              color: C.ink,
              fontSize: 28,
              fontWeight: 900,
              whiteSpace: "nowrap",
            }}
          >
            {dm.button}
          </div>
        </div>
      ) : null}
      {url && at.url !== undefined ? (
        <div style={{ marginTop: 44, fontSize: 38, fontWeight: 700, color: C.whiteMuted, letterSpacing: 0.5, ...fadeUp(enter(frame, at.url), 16) }}>
          {url}
        </div>
      ) : null}
    </div>
  );
};
