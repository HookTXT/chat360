import React from "react";
import { C, FONT } from "../style/tokens";
import { CarPhoto, type Body, type Paint } from "./CarArt";
import { BubbleMark } from "./Logo";
import { Icon, type IconName } from "./icons";
import { easeInOut, enter, popIn } from "./motion";

/**
 * G5 — Chat in action. A Chat360-style site widget: header, a thread that scrolls
 * like a real chat as items land, bubbles whose words appear in time, a vehicle
 * card, and a booked confirmation. Copy comes in as explicit lines so the layout
 * is identical on every frame and in both languages.
 */

export const ChatPanel: React.FC<{
  width: number;
  height: number;
  title: string;
  status: string;
  onDark?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ width, height, title, status, onDark, children, style }) => (
  <div
    style={{
      width,
      height,
      background: C.card,
      borderRadius: 44,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      fontFamily: FONT,
      boxShadow: onDark
        ? "0 50px 140px rgba(0,0,0,0.55), 0 0 0 2px rgba(255,255,255,0.06)"
        : "0 40px 110px rgba(17,24,39,0.14), 0 0 0 2px rgba(17,24,39,0.04)",
      ...style,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 22, padding: "26px 36px", borderBottom: "2px solid #EEF0F2" }}>
      <div
        style={{
          width: 76,
          height: 76,
          borderRadius: 38,
          background: "#E7F8F2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BubbleMark size={46} style={{ marginTop: 4 }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontSize: 36, fontWeight: 800, color: C.text, letterSpacing: -0.5 }}>{title}</div>
        <div style={{ fontSize: 26, fontWeight: 600, color: "#15803D", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 14, height: 14, borderRadius: 7, background: "#22C55E" }} />
          {status}
        </div>
      </div>
    </div>
    <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
      {children}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 34, background: "linear-gradient(#FFFFFF, rgba(255,255,255,0))" }} />
    </div>
  </div>
);

export type ThreadItem = {
  key: string;
  at: number; // frame the item lands (relative to the thread's sequence)
  height: number; // px reserved for the item (keep in sync with its content)
  render: (p: number) => React.ReactNode;
};

/**
 * Top-anchored thread. When content outgrows the viewport it scrolls up smoothly,
 * snapping to item boundaries so no message is ever left half-cut at the top.
 */
export const Thread: React.FC<{
  items: ThreadItem[];
  frame: number;
  viewport: number;
  gap?: number;
  pad?: number;
  scrollDur?: number;
}> = ({ items, frame, viewport, gap = 22, pad = 30, scrollDur = 10 }) => {
  const tops: number[] = [];
  let y = pad;
  for (const it of items) {
    tops.push(y);
    y += it.height + gap;
  }
  const bottomOf = (i: number) => tops[i] + items[i].height + pad;
  // Smallest scroll that both shows item i fully and starts exactly at an item's top.
  const target = (i: number) => {
    const need = bottomOf(i) - viewport;
    if (need <= 0) return 0;
    const snap = tops.map((t) => t - pad).find((t) => t >= need);
    return snap ?? need;
  };
  let offset = 0;
  let prev = 0;
  items.forEach((it, i) => {
    const t = Math.max(prev, target(i));
    offset += (t - prev) * enter(frame, it.at, scrollDur, easeInOut);
    prev = t;
  });
  return (
    <div style={{ position: "absolute", inset: 0, transform: `translateY(${-offset}px)` }}>
      {items.map((it, i) =>
        frame >= it.at ? (
          <div key={it.key} style={{ position: "absolute", left: 30, right: 30, top: tops[i], height: it.height }}>
            {it.render(enter(frame, it.at))}
          </div>
        ) : null,
      )}
    </div>
  );
};

/**
 * Words of `lines` revealed up to fraction `reveal` (0..1). The bubble grows a line
 * at a time with the text (no big empty box), and words never reflow.
 */
const Words: React.FC<{ lines: string[]; reveal: number }> = ({ lines, reveal }) => {
  const counts = lines.map((l) => l.split(" ").length);
  const total = counts.reduce((a, b) => a + b, 0);
  const shown = reveal * total;
  let lastLine = 0;
  for (let i = 0, acc = 0; i < lines.length; i++) {
    if (shown > acc) lastLine = i;
    acc += counts[i];
  }
  let idx = 0;
  return (
    <>
      {lines.map((line, li) => {
        const words = line.split(" ");
        const start = idx;
        idx += words.length;
        if (li > lastLine) return null;
        return (
          <div key={li} style={{ whiteSpace: "nowrap" }}>
            {words.map((w, wi) => (
              <span key={wi} style={{ opacity: Math.max(0, Math.min(1, shown - (start + wi))) }}>
                {w}
                {wi < words.length - 1 ? " " : ""}
              </span>
            ))}
          </div>
        );
      })}
    </>
  );
};

export const Bubble: React.FC<{
  from: "user" | "bot" | "generic";
  lines: string[];
  p: number;
  size?: number;
  reveal?: number;
  avatar?: boolean;
  weight?: number;
  pad?: [number, number];
  style?: React.CSSProperties;
}> = ({ from, lines, p, size = 40, reveal = 1, avatar = true, weight, pad, style }) => {
  const user = from === "user";
  const bubble: React.CSSProperties = user
    ? { background: C.mintDeep, color: C.white, borderRadius: "38px 38px 12px 38px" }
    : from === "bot"
      ? { background: C.bubbleBot, color: C.text, borderRadius: "12px 38px 38px 38px" }
      : { background: "#E5E7EB", color: "#4B5563", borderRadius: "12px 38px 38px 38px" };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: user ? "flex-end" : "flex-start",
        alignItems: "flex-start",
        gap: 18,
        fontFamily: FONT,
        ...popIn(p, 0.9),
        transformOrigin: user ? "100% 100%" : "0% 0%",
        ...style,
      }}
    >
      {!user && avatar ? (
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            flexShrink: 0,
            background: from === "bot" ? "#E7F8F2" : "#D1D5DB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {from === "bot" ? <BubbleMark size={38} style={{ marginTop: 3 }} /> : <Icon name="comment" size={34} color="#6B7280" />}
        </div>
      ) : null}
      <div
        style={{
          ...bubble,
          padding: pad ? `${pad[0]}px ${pad[1]}px` : `${Math.round(size * 0.55)}px ${Math.round(size * 0.8)}px`,
          fontSize: size,
          lineHeight: 1.28,
          fontWeight: weight ?? (user ? 700 : 600),
          letterSpacing: -0.2,
        }}
      >
        <Words lines={lines} reveal={reveal} />
      </div>
    </div>
  );
};

export const TypingDots: React.FC<{ frame: number; p: number; neutral?: boolean }> = ({ frame, p, neutral }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 18, ...popIn(p, 0.9), transformOrigin: "0% 0%" }}>
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 32,
        background: neutral ? "#D1D5DB" : "#E7F8F2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {neutral ? <Icon name="comment" size={34} color="#6B7280" /> : <BubbleMark size={38} style={{ marginTop: 3 }} />}
    </div>
    <div style={{ background: C.bubbleBot, borderRadius: "12px 38px 38px 38px", padding: "26px 34px", display: "flex", gap: 12 }}>
      {[0, 1, 2].map((i) => {
        const phase = ((frame + i * 5) % 18) / 18;
        const o = 0.35 + 0.65 * Math.max(0, Math.sin(phase * Math.PI));
        return <span key={i} style={{ width: 18, height: 18, borderRadius: 9, background: "#6B7280", opacity: o }} />;
      })}
    </div>
  </div>
);

/** Small annotation pill that labels what the AI just did ("1 · Answers in < 30 sec"). */
export const Tag: React.FC<{ n?: number; icon?: IconName; text: string; p: number; onDark?: boolean }> = ({
  n,
  icon,
  text,
  p,
  onDark,
}) => (
  <div style={{ display: "flex", justifyContent: "center", ...popIn(p, 0.85) }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "12px 28px 12px 14px",
        borderRadius: 999,
        background: onDark ? "rgba(42,211,163,0.16)" : C.mintTint,
        color: onDark ? C.mint : C.mintDeep,
        fontFamily: FONT,
        fontSize: 32,
        fontWeight: 800,
        letterSpacing: -0.3,
      }}
    >
      <span
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          background: onDark ? C.mint : C.mintDeep,
          color: onDark ? C.ink : C.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          fontWeight: 900,
        }}
      >
        {n !== undefined ? n : icon ? <Icon name={icon} size={28} color={onDark ? C.ink : C.white} stroke={2.6} /> : null}
      </span>
      {text}
    </div>
  </div>
);

/** Vehicle image: studio-backdrop illustration in place of a listing photo (we have no real photos). */
export const CarTile: React.FC<{
  width: number | string;
  height: number;
  iconSize?: number;
  hue?: "blue" | "slate" | "teal";
  paint?: Paint;
  body?: Body;
  roof?: string;
  night?: boolean;
}> = ({ width, height, hue = "blue", paint, body, roof, night }) => (
  <CarPhoto width={width} height={height} paint={paint ?? (hue === "slate" ? "silver" : hue)} body={body} roof={roof} night={night} />
);

export const VehicleCard: React.FC<{
  title: string;
  meta: string;
  cta: string;
  p: number;
  press?: number; // 0..1 button press
  paint?: Paint;
  roof?: string;
}> = ({ title, meta, cta, p, press = 0, paint = "blue", roof }) => {
  const down = Math.sin(Math.min(1, press) * Math.PI);
  return (
    <div
      style={{
        marginLeft: 82,
        width: 600,
        background: C.card,
        border: "2px solid #E5E7EB",
        borderRadius: 32,
        padding: 20,
        fontFamily: FONT,
        boxShadow: "0 16px 40px rgba(17,24,39,0.08)",
        ...popIn(p, 0.92),
        transformOrigin: "0% 0%",
      }}
    >
      <CarTile width="100%" height={150} paint={paint} roof={roof} />
      <div style={{ fontSize: 36, fontWeight: 800, color: C.text, marginTop: 14, letterSpacing: -0.5 }}>{title}</div>
      <div style={{ fontSize: 28, fontWeight: 600, color: C.textMuted, marginTop: 2 }}>{meta}</div>
      <div
        style={{
          position: "relative",
          marginTop: 14,
          height: 78,
          borderRadius: 999,
          clipPath: "inset(0 round 999px)",
          background: C.mintDeep,
          color: C.white,
          fontSize: 31,
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${1 - 0.04 * down})`,
          filter: `brightness(${1 - 0.18 * down})`,
        }}
      >
        {cta}
        {press > 0 && press < 1 ? (
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 56,
              height: 56,
              marginLeft: -28,
              marginTop: -28,
              borderRadius: 28,
              background: "rgba(255,255,255,0.55)",
              transform: `scale(${0.5 + press})`,
              opacity: 1 - press,
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export const Booked: React.FC<{ title: string; sub: string; p: number }> = ({ title, sub, p }) => (
  <div
    style={{
      marginLeft: 82,
      width: 640,
      display: "flex",
      alignItems: "center",
      gap: 22,
      padding: "22px 26px",
      borderRadius: 30,
      background: "#F0FDF8",
      border: `3px solid ${C.mint}`,
      fontFamily: FONT,
      ...popIn(p, 0.85),
      transformOrigin: "0% 50%",
    }}
  >
    <div
      style={{
        width: 76,
        height: 76,
        borderRadius: 38,
        background: C.mintDeep,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Icon name="calendar" size={42} color={C.white} stroke={2.2} />
    </div>
    <div>
      <div style={{ fontSize: 36, fontWeight: 800, color: C.text, letterSpacing: -0.4 }}>{title}</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: C.mintDeep, marginTop: 2 }}>{sub}</div>
    </div>
  </div>
);

export const QuickReplies: React.FC<{ labels: string[]; p: number }> = ({ labels, p }) => (
  <div style={{ display: "flex", gap: 16, marginLeft: 82, fontFamily: FONT, ...popIn(p, 0.9), transformOrigin: "0% 0%" }}>
    {labels.map((l, i) => (
      <div
        key={l}
        style={{
          padding: "18px 30px",
          borderRadius: 999,
          fontSize: 30,
          fontWeight: 800,
          background: i === 0 ? C.mintDeep : "#EEF0F2",
          color: i === 0 ? C.white : "#374151",
        }}
      >
        {l}
      </div>
    ))}
  </div>
);
