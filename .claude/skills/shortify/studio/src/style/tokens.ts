// Mirrors STYLE.md. Change the sheet first, then these values.
export const W = 1080;
export const H = 1920;
export const FPS = 30;

export type Tone = "dark" | "paper";

export const C = {
  ink: "#0B1716", // dark ground
  inkRaised: "#13231F", // cards on dark
  inkLine: "rgba(255,255,255,0.10)",
  paper: "#F7F5F0", // light "paper" ground
  card: "#FFFFFF",
  paperLine: "rgba(17,24,39,0.08)",
  text: "#111827",
  textMuted: "#6B7280",
  white: "#FFFFFF",
  whiteMuted: "rgba(255,255,255,0.62)",
  mint: "#2AD3A3", // brand-mark green (CHAT360 .AI logo)
  mintDeep: "#0B7A5A", // mint for text/fills on paper (4.9:1 on paper)
  mintTint: "#DDF7EF",
  logoGray: "#575756",
  bubbleBot: "#EEF2F1",
  alert: "#F59E0B",
  proof: "#FACC15",
} as const;

export const FONT = "Inter, system-ui, sans-serif";

/** Safe zones on the 1080x1920 canvas (STYLE.md → Layout & safe zones). */
export const SAFE = {
  top: 220, // no text above
  bottom: 1536, // nothing important below
  side: 80,
  rightInsetLowerHalf: 140,
} as const;

/** Readable column: centred, clear of the right-edge buttons in the lower half. */
export const COLUMN = { left: 110, width: 860 } as const;

export const tone = (t: Tone) =>
  t === "dark"
    ? { ground: C.ink, text: C.white, muted: C.whiteMuted, accent: C.mint, card: C.inkRaised, line: C.inkLine }
    : { ground: C.paper, text: C.text, muted: C.textMuted, accent: C.mintDeep, card: C.card, line: C.paperLine };
