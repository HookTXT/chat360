import React, { useId } from "react";

/**
 * Side-profile vehicles in a clean flat-illustration style, on a studio
 * backdrop — they stand in for listing photos (we never fake a real photo).
 * Two bodies: a compact SUV / crossover (HR-V, CR-V, RAV4, CX-5…) and a sedan
 * (Civic…). Paint and roof colour are props.
 */
export type Paint = "blue" | "silver" | "teal" | "black" | "red";
export type Body = "suv" | "sedan";

const PAINT: Record<Paint, { body: string; shade: string; light: string }> = {
  blue: { body: "#2563EB", shade: "#1D4ED8", light: "#60A5FA" },
  silver: { body: "#A3AAB5", shade: "#7B8492", light: "#D7DCE3" },
  teal: { body: "#0F8F74", shade: "#0B6E59", light: "#34D3A8" },
  black: { body: "#1F2937", shade: "#111827", light: "#4B5563" },
  red: { body: "#DC2626", shade: "#B91C1C", light: "#F87171" },
};

const Wheel: React.FC<{ cx: number; cy: number; r: number }> = ({ cx, cy, r }) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill="#111827" />
    <circle cx={cx} cy={cy} r={r * 0.6} fill="#9CA3AF" />
    <circle cx={cx} cy={cy} r={r * 0.6} fill="none" stroke="#6B7280" strokeWidth={2} />
    {[0, 72, 144, 216, 288].map((a) => (
      <rect key={a} x={cx - 2} y={cy - r * 0.56} width={4} height={r * 0.48} rx={2} fill="#6B7280" transform={`rotate(${a} ${cx} ${cy})`} />
    ))}
    <circle cx={cx} cy={cy} r={r * 0.19} fill="#374151" />
  </g>
);

/** Compact SUV: tall roof, near-vertical hatch, short hood, ground clearance, black arch cladding. */
const Suv: React.FC<{ id: string; p: (typeof PAINT)[Paint]; roof?: string }> = ({ id, p, roof }) => (
  <g>
    <path
      d="M34 120 C34 98 36 70 44 54 C48 44 56 38 70 36 L250 32 C270 32 282 40 296 54 L318 74 L352 80 C368 83 374 92 374 104 L374 120 C374 127 369 130 362 130 L334 130 A35 35 0 0 0 264 130 L138 130 A35 35 0 0 0 68 130 L44 130 C38 130 34 126 34 120 Z"
      fill={`url(#b${id})`}
    />
    {/* roof panel (two-tone when roof is set) */}
    <path d="M70 36 L250 32 C270 32 282 40 296 54 L284 60 C272 48 262 42 248 42 L80 45 C66 46 60 56 58 72 L50 72 C52 52 58 40 70 36 Z" fill={roof ?? p.body} />
    {/* windows */}
    <path d="M58 76 C60 58 66 48 80 47 L248 44 C262 44 272 50 284 62 L302 78 Z" fill={`url(#g${id})`} />
    <rect x={128} y={44} width={9} height={34} fill={roof ?? p.shade} />
    <rect x={214} y={43} width={8} height={36} fill={roof ?? p.shade} />
    <path d="M150 74 L172 48 L186 48 L164 74 Z" fill="#FFFFFF" opacity={0.12} />
    <path d="M236 74 L254 49 L262 49 L246 74 Z" fill="#FFFFFF" opacity={0.1} />
    {/* roof rails */}
    <path d="M86 30 L240 27" stroke="#111827" strokeOpacity={0.6} strokeWidth={4} strokeLinecap="round" />
    {/* shoulder line, door seams, handles */}
    <path d="M44 92 L362 90" stroke={p.light} strokeOpacity={0.55} strokeWidth={2.5} fill="none" />
    <path d="M138 80 L140 124 M218 80 L220 124" stroke={p.shade} strokeOpacity={0.8} strokeWidth={2} fill="none" />
    <rect x={176} y={97} width={20} height={4} rx={2} fill={p.shade} />
    <rect x={258} y={96} width={20} height={4} rx={2} fill={p.shade} />
    {/* lights */}
    <path d="M354 86 L373 92 L373 101 L356 99 Z" fill="#FDE68A" />
    <path d="M35 70 L44 68 L44 92 L35 92 Z" fill="#EF4444" />
    {/* black wheel-arch + rocker cladding (crossover look) */}
    <path d="M60 130 A43 43 0 0 1 146 130 M256 130 A43 43 0 0 1 342 130" stroke="#111827" strokeOpacity={0.75} strokeWidth={9} fill="none" />
    <path d="M146 124 L256 124" stroke="#111827" strokeOpacity={0.6} strokeWidth={10} strokeLinecap="round" />
    <Wheel cx={103} cy={134} r={28} />
    <Wheel cx={299} cy={134} r={28} />
  </g>
);

/** Sedan: long low glasshouse, trunk, lower stance. */
const Sedan: React.FC<{ id: string; p: (typeof PAINT)[Paint] }> = ({ id, p }) => (
  <g>
    <path
      d="M24 124 C24 110 32 102 50 100 L104 94 C122 72 144 60 178 58 L246 58 C272 59 292 72 314 90 L356 96 C372 99 380 108 380 120 L380 126 C380 132 375 136 367 136 L334 136 A31 31 0 0 0 272 136 L132 136 A31 31 0 0 0 70 136 L34 136 C28 136 24 132 24 126 Z"
      fill={`url(#b${id})`}
    />
    <path d="M118 92 C130 76 148 66 178 65 L244 65 C264 66 282 76 298 91 Z" fill={`url(#g${id})`} />
    <rect x={204} y={64} width={7} height={29} fill={p.shade} />
    <path d="M146 89 L168 68 L182 68 L160 89 Z" fill="#FFFFFF" opacity={0.12} />
    <path d="M24 112 L376 110" stroke={p.light} strokeOpacity={0.5} strokeWidth={2.5} fill="none" />
    <path d="M206 93 L208 132" stroke={p.shade} strokeOpacity={0.8} strokeWidth={2} fill="none" />
    <path d="M360 101 L379 106 L379 113 L362 112 Z" fill="#FDE68A" />
    <path d="M25 104 L40 102 L40 113 L25 113 Z" fill="#EF4444" />
    <Wheel cx={101} cy={136} r={25} />
    <Wheel cx={303} cy={136} r={25} />
  </g>
);

export const CarArt: React.FC<{
  width?: number | string;
  height?: number | string;
  paint?: Paint;
  body?: Body;
  roof?: string;
  night?: boolean;
}> = ({ width, height, paint = "blue", body = "suv", roof, night }) => {
  const id = useId().replace(/:/g, "");
  const p = PAINT[paint];
  return (
    <svg viewBox="0 0 400 175" width={width} height={height} style={{ display: "block" }}>
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
      <ellipse cx={200} cy={162} rx={178} ry={12} fill={`url(#s${id})`} />
      {body === "suv" ? <Suv id={id} p={p} roof={roof} /> : <Sedan id={id} p={p} />}
    </svg>
  );
};

/** Listing-photo stand-in: soft studio backdrop with the car centred on its floor. */
export const CarPhoto: React.FC<{
  width: number | string;
  height: number;
  paint?: Paint;
  body?: Body;
  roof?: string;
  night?: boolean;
  radius?: number;
}> = ({ width, height, paint = "blue", body = "suv", roof, night, radius = 24 }) => (
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
    {/* Sized by height so the roof never clips, whatever the tile's aspect ratio. */}
    <div style={{ height: Math.round(height * 0.84), maxWidth: "90%", marginBottom: Math.round(height * 0.03), display: "flex", justifyContent: "center" }}>
      <CarArt height="100%" paint={paint} body={body} roof={roof} night={night} />
    </div>
  </div>
);
