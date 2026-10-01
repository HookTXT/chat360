# Chat360 short-video style sheet

Four words: **simple, bold, big, clean.** Every frame reads in about one second for a dealer who has never seen us. Premium comes from light, depth and smooth motion — never from adding more stuff. If a polish pass makes a frame slower to read, undo it.

Change this sheet only on purpose, after a side-by-side test. Log the change in `LESSONS.md`.

## Brand mark

The **CHAT360 .AI** wordmark Kevin supplied (2026-10-01): `studio/public/brand/chat360-ai-logo.png`, traced to vector by `studio/scripts/trace-logo.py` (never redrawn).

- On paper: as supplied — mint "CHAT", gray `#575756` "360", mint bubble with white ".AI".
- On dark: reversed — "360" turns white; nothing else changes.
- The ".AI" bubble alone is the bot's avatar in chat mocks.
- It replaces the old chat-bubble icon (`public/chat360-logo.png`) in videos.

## Colour (taken from the brand mark)

| Token | Dark look (home) | Light "paper" look |
|---|---|---|
| Ground | `#0B1716` near-black teal | `#F7F5F0` warm paper |
| Text | `#FFFFFF` | `#111827` |
| Muted text | white at 62 % | `#6B7280` |
| Accent | `#2AD3A3` (logo mint) | `#0B7A5A` (same hue, 4.9:1 on paper — use for text and fills with white on top) |
| Proof highlight | `#FACC15` underline/box, sparingly | same |

One accent per frame. No gradients across the whole frame; a soft radial glow behind the focal object is fine. White text on `#2AD3A3` fails contrast — put dark ink (`#0B1716`) on mint fills.

## Type

- Inter (OFL, shipped in `studio/public/fonts`) — the closest open match to the site's system stack. Heavy (800–900) for titles and numbers; 600 for labels.
- Only glyphs in Inter's latin subset: no `≤`, `✓` or emoji — use words ("Under $30,000") or SVG icons.
- Title at frame 0: 3–8 words, leads with what the viewer gets, poses the question the short answers. It becomes the cover.
- Minimum on-canvas size (1080×1920): body labels 56 px, numbers 220 px+.

## Captions

- 1–2 words at a time, cut exactly on the spoken word (word-level timestamps).
- 900 weight, white with a 6 px dark stroke on dark; `#111827` on paper. Current word in accent.
- One line, centred, just above the face card. Never over a graphic; hidden when the graphic already shows the same words.

## Layout & safe zones (1080×1920)

- Top strip (0–220 px): no text.
- Bottom fifth (1536–1920 px): no important text.
- Right edge, lower half: keep text ≥140 px in.
- Home layout: graphic in the top two thirds, one caption line, Kevin's face as a cutout in a rounded card at the bottom centre. Centre everything.
- Problem line and "But here's the trick" line: full-frame face.

## Motion

- Ease-out in (200–300 ms), ease-in out. No bounces, no spins.
- Numbers always count up. Lists add one row per spoken item.
- Something new lands about every second; the whole graphic changes only when the idea changes.
- Hook holds: no cuts until the first sentence ends.

## Dark / light pacing

- Designed graphics split ~40–60 % each tone; flip in runs on a hard cut when the idea changes (a chapter change).
- Hook and ending always dark. Real screenshots keep their own tone.
- Never fade between tones; never flip every beat.

## Sound

- Whoosh on a cut, tick on a build step, quiet.
- One energetic music bed well below the voice (target −14 LUFS integrated for the mix, voice clearly on top). Never the same bed as the post the day before or after.

## Never

1. Text in the safe zones.
2. A screenshot that doesn't read at phone size in a second — rebuild it as our own graphic with a small source label.
3. Redrawn logos — use the real one.
4. A graphic hugging one side with empty space on the other.
5. A cut for anything spoken in under half a second — make it a step on the current graphic.
6. Terminal windows for "what Claude/Chat360 does" — show the app/chat widget the dealer's customers actually see.
