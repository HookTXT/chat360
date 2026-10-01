import React, { useId } from "react";

/**
 * Side-profile compact SUV in a clean flat-illustration style, on a studio
 * backdrop — stands in for a listing photo (we never fake a real photo).
 * Paint is a prop so each vehicle in a scene can differ.
 */
export type Paint = "blue" | "silver" | "teal" | "black" | "red";

const PAINT: Record<Paint, { body: string; shade: string; light: string }> = {
  blue: { body: "#2563EB", shade: "#1D4ED8", light: "#60A5FA" },
  silver: { body: "#A3AAB5", shade: "#7B8492", light: "#D7DCE3" },
  teal: { body: "#0F8F74", shade: "#0B6E59", light: "#34D3A8" },
  black: { body: "#1F2937", shade: "#111827", light: "#4B5563" },
  red: { body: "#DC2626", shade: "#B91C1C", light: "#F87171" },
};

const Wheel: React.FC<{ cx: number }> = ({ cx }) => (
  <g>
    <circle cx={cx} cy={134} r={27} fill="#111827" />
    <circle cx={cx} cy={134} r={16} fill="#9CA3AF" />
    <circle cx={cx} cy={134} r={16} fill="none" stroke="#6B7280" strokeWidth={2} />
    {[0, 72, 144, 216, 288].map((a) => (
      <rect key={a} x={cx - 2} y={134 - 15} width={4} height={13} rx={2} fill="#6B7280" transform={`rotate(${a} ${cx} 134)`} />
    ))}
    <circle cx={cx} cy={134} r={5} fill="#374151" />
  </g>
);

export const CarArt: React.FC<{ width: number | string; paint?: Paint; night?: boolean }> = ({ width, paint = "blue", night }) => {
  const id = useId().replace(/:/g, "");
  const p = PAINT[paint];
  return (
    <svg viewBox="0 0 400 175" width={width} style={{ display: "block" }}>
      <defs>
        <linearGradient id={`b${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.light} />
          <stop offset="0.38" stopColor={p.body} />
          <stop offset="1" stopColor={p.shade} />
        </linearGradient>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={night ? "#1F2A37" : "#334155"} />
          <stop offset="1" stopColor={night ? "#0B1220" : "#0F172A"} />
        </linearGradient>
        <radialGradient id={`s${id}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#000" stopOpacity="0.35" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* ground shadow */}
      <ellipse cx={200} cy={160} rx={178} ry={13} fill={`url(#s${id})`} />
      {/* body */}
      <path
        d="M30 122 C30 104 40 95 62 92 L112 87 C124 63 146 49 180 47 L254 47 C280 48 300 62 320 84 L352 89 C370 92 378 102 378 116 L378 124 C378 131 373 136 365 136 L330 136 A32 32 0 0 0 266 136 L134 136 A32 32 0 0 0 70 136 L41 136 C34 136 30 131 30 124 Z"
        fill={`url(#b${id})`}
      />
      {/* greenhouse */}
      <path d="M124 86 C134 66 150 56 180 55 L250 55 C270 56 286 66 302 84 Z" fill={`url(#g${id})`} />
      <rect x={209} y={53} width={7} height={34} fill={p.shade} />
      {/* window glare */}
      <path d="M150 82 L176 58 L190 58 L164 82 Z" fill="#FFFFFF" opacity={0.12} />
      <path d="M236 82 L256 58 L264 58 L244 82 Z" fill="#FFFFFF" opacity={0.1} />
      {/* shoulder line + door seam */}
      <path d="M58 100 L360 100" stroke={p.light} strokeOpacity={0.55} strokeWidth={2.5} fill="none" />
      <path d="M210 88 L212 132" stroke={p.shade} strokeOpacity={0.8} strokeWidth={2} fill="none" />
      <rect x={176} y={104} width={20} height={4} rx={2} fill={p.shade} />
      <rect x={250} y={104} width={20} height={4} rx={2} fill={p.shade} />
      {/* lights */}
      <path d="M356 95 L375 99 L375 107 L358 106 Z" fill="#FDE68A" />
      <path d="M31 98 L46 97 L46 108 L31 108 Z" fill="#EF4444" />
      {/* lower cladding */}
      <path d="M41 128 L70 128 M134 128 L266 128 M330 128 L370 128" stroke="#111827" strokeOpacity={0.45} strokeWidth={6} strokeLinecap="round" />
      <Wheel cx={102} />
      <Wheel cx={298} />
    </svg>
  );
};

/** Listing-photo stand-in: soft studio backdrop with the car centred on its floor. */
export const CarPhoto: React.FC<{ width: number | string; height: number; paint?: Paint; night?: boolean; radius?: number }> = ({
  width,
  height,
  paint = "blue",
  night,
  radius = 24,
}) => (
  <div
    style={{
      width,
      height,
      borderRadius: radius,
      overflow: "hidden",
      position: "relative",
      background: night
        ? "linear-gradient(180deg, #1E293B 0%, #273449 62%, #1A2333 62%, #141B27 100%)"
        : "linear-gradient(180deg, #EEF2F6 0%, #F8FAFC 62%, #E2E8F0 62%, #D9E0E8 100%)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    }}
  >
    <div style={{ width: "86%", marginBottom: height * 0.06 }}>
      <CarArt width="100%" paint={paint} night={night} />
    </div>
  </div>
);
