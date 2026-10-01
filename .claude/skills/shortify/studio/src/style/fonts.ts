import { continueRender, delayRender, staticFile } from "remotion";

// Inter (OFL) shipped locally in public/fonts so renders never hit the network.
const WEIGHTS = [500, 600, 700, 800, 900] as const;
let started = false;

export const loadFonts = () => {
  if (started || typeof document === "undefined") return;
  started = true;
  const handle = delayRender("Loading Inter");
  Promise.all(
    WEIGHTS.map((w) =>
      new FontFace("Inter", `url(${staticFile(`fonts/inter-latin-${w}-normal.woff2`)}) format("woff2")`, {
        weight: String(w),
        style: "normal",
      })
        .load()
        .then((face) => document.fonts.add(face)),
    ),
  )
    .then(() => continueRender(handle))
    .catch((err) => {
      console.error("Font load failed", err);
      continueRender(handle);
    });
};
