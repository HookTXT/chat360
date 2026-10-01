import React from "react";
import { FONT, tone as toneOf, type Tone } from "../style/tokens";
import { Icon, type IconName } from "./icons";
import { fadeUp } from "./motion";

/**
 * G2 — List build. One row per item, landing on its beat. The current row is
 * full strength; earlier rows step back so the eye goes to the new one.
 */
export const ListRow: React.FC<{
  icon: IconName;
  text: string;
  p: number;
  active: boolean;
  tone: Tone;
  best?: boolean;
  kicker?: string;
  kickerP?: number;
  size?: number;
}> = ({ icon, text, p, active, tone, best, kicker, kickerP = 0, size = 76 }) => {
  const t = toneOf(tone);
  return (
    <div style={{ fontFamily: FONT, ...fadeUp(p, 28), opacity: p * (active ? 1 : 0.42) }}>
      {kicker ? (
        <div style={{ fontSize: 40, fontWeight: 800, color: t.accent, letterSpacing: -0.4, marginBottom: 6, ...fadeUp(kickerP, 16) }}>
          {kicker}
        </div>
      ) : null}
      <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: 42,
            flexShrink: 0,
            background: best ? t.accent : "transparent",
            border: best ? "none" : `5px solid ${t.accent}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name={icon} size={46} color={best ? (tone === "dark" ? "#0B1716" : "#FFFFFF") : t.accent} stroke={2.8} />
        </div>
        <div style={{ fontSize: size, fontWeight: 900, color: t.text, letterSpacing: -size * 0.026, lineHeight: 1.05, whiteSpace: "nowrap" }}>{text}</div>
      </div>
    </div>
  );
};
