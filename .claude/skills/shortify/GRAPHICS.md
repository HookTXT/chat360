# Graphics library — which graphic when

The library lives in the render project: `studio/src/library/` (Remotion 4, React). Each graphic takes text + timing as props. Add one every time a script needs something the library can't draw, then add its row here.

`RENDER_TOOL`: **Remotion 4** — `studio/` (set 2026-10-01). Stills: `node scripts/stills.mjs`. Renders: `node scripts/render.mjs`. See SKILL.md → Studio.

3-second test of every graphic: composition `Library` (`src/library/Preview.tsx`) — `node scripts/stills.mjs Library <outDir> 70,160,250,340,430,520,610,700 0.5` gives one still per graphic.

## Library

| ID | Graphic | File | Inputs |
|---|---|---|---|
| G1 | **Big number** — counts up, label under it, small source tag | `BigNumber.tsx` | value, locale, prefix/suffix, label, source, start/dur |
| G2 | **List build** — one row per item, lands on its beat; earlier rows step back | `ListBuild.tsx` | icon, text, best, active, p |
| G3 | **Step ladder** — numbered steps on a rail, done steps get a check | `StepLadder.tsx` | steps[{text, at}] |
| G4 | **Before / after** — both sides labelled, visible at once | `BeforeAfter.tsx` | before, after |
| G5 | **Chat in action** — Chat360-style widget: panel that grows with the thread, bubbles whose words land in time, typing dots, step tags, vehicle card, booked confirmation, quick replies | `Chat.tsx` | lines[], at frames, heights |
| G6 | **CTA end card** — logo, lane CTA line, keyword huge, comment box that types the keyword, URL | `CtaEndCard.tsx` | line, verb, word, placeholder, url, at{} |
| G7 | **Site tour** — browser whose URL types itself, filter chips, result rows (the site moving on its own) | `Browser.tsx` | url, typedChars, chips, rows |
| G8 | **Voice orb** — rings travel out, bars move with the voice, "Listening…" | `Voice.tsx` | frame, size, level |
| — | Brand mark (traced, never redrawn), reversed on dark; bubble mark for the bot avatar | `Logo.tsx` | width, tone, word/bubble reveal |
| — | Ground (tone + one soft glow), Headline (accent span, strike, dim), icons (SVG, no glyph fallbacks) | `Ground.tsx`, `Text.tsx`, `icons.tsx` | — |

## Line type → what to show

| Line does… | Show | Notes |
|---|---|---|
| Hook | Title (frame 0) + one object under it | No cuts until the sentence ends. No voice → the title *is* the hook line (e.g. a chat bubble). |
| Problem | Full-frame face; no face → the bad version of the thing (G5 generic bubble) + G1 | Plain words |
| Claim | The real thing within 2 s, then explain | Proof first. Crop to the word. |
| Number | G1 | Never just appears |
| List | G2 + one visual per item | "Best part" kicker before the best item |
| Steps / how it works | G5 tags inside the chat, or G3 | Hang and build, don't cut |
| A prompt / what the AI does | G5 (site widget) or G7 | App/widget, not a terminal |
| The website moving | G7 | URL types, filters land, rows slide in |
| Voice | G8 + G5 transcript | |
| Opinion / payoff / "You don't." | Face 1–2 s | Full frame |
| Ending | G6 | Dark |

## Verb → motion

turns into = morph · pick = pick/highlight · one to all = zoom out · send to = show it being sent · you don't = hard cut to face · counts/grows = count up · opens = URL types + page fills.

## Gaps (no graphic yet)

- Map / regional reach (e.g. Québec vs. rest of Canada).
- Timeline of a lead (late-night message → instant reply → booked appointment).
- Real vehicle photos: `CarTile` is a placeholder in the site's own style; swap in real inventory shots when available.
