import React from "react";
import { C, FONT } from "../style/tokens";
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
    <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>{children}</div>
  </div>
);

export type ThreadItem = {
  key: string;
  at: number; // frame the item lands (relative to the thread's sequence)
  height: number; // px reserved for the item (keep in sync with its content)
  render: (p: number) => React.ReactNode;
};

/** Top-anchored thread; when content outgrows the viewport it scrolls up smoothly. */
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
  const target = (i: number) => Math.max(0, bottomOf(i) - viewport);
  let offset = 0;
  let prev = 0;
  items.forEach((it, i) => {
    const t = target(i);
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

/** Words of `lines` revealed up to fraction `reveal` (0..1); layout never shifts. */
const Words: React.FC<{ lines: string[]; reveal: number }> = ({ lines, reveal }) => {
  const total = lines.reduce((n, l) => n + l.split(" ").length, 0);
  const shown = reveal * total;
  let idx = 0;
  return (
    <>
      {lines.map((line, li) => (
        <div key={li} style={{ whiteSpace: "nowrap" }}>
          {line.split(" ").map((w, wi) => {
            const o = Math.max(0, Math.min(1, shown - idx));
            idx += 1;
            return (
              <span key={wi} style={{ opacity: o }}>
                {w}
                {wi < line.split(" ").length - 1 ? " " : ""}
              </span>
            );
          })}
        </div>
      ))}
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

export const TypingDots: React.FC<{ frame: number; p: number }> = ({ frame, p }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 18, ...popIn(p, 0.9), transformOrigin: "0% 0%" }}>
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 32,
        background: "#E7F8F2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BubbleMark size={38} style={{ marginTop: 3 }} />
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

/** Vehicle image placeholder in the site's style: gradient tile + car mark (we have no real photos). */
export const CarTile: React.FC<{ width: number | string; height: number; iconSize?: number; hue?: "blue" | "slate" | "teal" }> = ({
  width,
  height,
  iconSize = 110,
  hue = "blue",
}) => {
  const bg =
    hue === "blue"
      ? "linear-gradient(135deg, #38BDF8 0%, #2563EB 100%)"
      : hue === "teal"
        ? "linear-gradient(135deg, #34D399 0%, #0F766E 100%)"
        : "linear-gradient(135deg, #94A3B8 0%, #475569 100%)";
  return (
    <div style={{ width, height, borderRadius: 24, background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Icon name="car" size={iconSize} color="rgba(255,255,255,0.95)" />
    </div>
  );
};

export const VehicleCard: React.FC<{
  title: string;
  meta: string;
  cta: string;
  p: number;
  press?: number; // 0..1 button press
}> = ({ title, meta, cta, p, press = 0 }) => (
  <div
    style={{
      marginLeft: 82,
      width: 640,
      background: C.card,
      border: "2px solid #E5E7EB",
      borderRadius: 32,
      padding: 22,
      fontFamily: FONT,
      boxShadow: "0 16px 40px rgba(17,24,39,0.08)",
      ...popIn(p, 0.92),
      transformOrigin: "0% 0%",
    }}
  >
    <CarTile width="100%" height={190} />
    <div style={{ fontSize: 38, fontWeight: 800, color: C.text, marginTop: 18, letterSpacing: -0.5 }}>{title}</div>
    <div style={{ fontSize: 28, fontWeight: 600, color: C.textMuted, marginTop: 4 }}>{meta}</div>
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: 18,
        height: 84,
        borderRadius: 999,
        background: C.mintDeep,
        color: C.white,
        fontSize: 32,
        fontWeight: 800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${1 - 0.05 * Math.sin(Math.min(1, press) * Math.PI)})`,
      }}
    >
      <span
        style={{
          position: "absolute",
          width: 700 * press,
          height: 700 * press,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.22)",
          opacity: 1 - press,
        }}
      />
      {cta}
    </div>
  </div>
);

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
