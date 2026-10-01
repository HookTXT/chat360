# Lessons — mistakes we fixed (read before every run)

Seeded from the Shortify guide; append our own as they happen (date, short, what went wrong, the rule now).

- Hooks written from scratch underperform. Always adapt a ≥3× winner.
- A proven hook shape filled with inside-the-lesson detail fails the cold read. Shape is not enough.
- Script changes after the voice cost a render each (one short once took 8). Lock first.
- AI voices read "$5.70" digit by digit. Write money as words in the voice script.
- Captions drift if not snapped to word-level timestamps; a quarter second off feels broken.
- Cutting on every line feels busy. Hang one graphic and build on it while the idea runs.
- Shorts that are mostly one tone feel flat by the middle. Count the dark/light split.
- A graphics library without a "which graphic when" guide → the same two graphics every time.
- Pasting the Instagram caption on TikTok yields "comment WORD" replies nobody answers.
- Linking something not live yet. Check every link right before posting; skip the slot if one fails.
- Changing the look every video. Change it once, on purpose, after a side-by-side test.

## 2026-10-01 — chat360-ad (first short built by the skill)

- chat360.ca and i.ibb.co are blocked by the session's egress policy. The site's copy is the repo's `components/` (EN) and `components/fr/` (FR): read it there, or read the live page through Firecrawl.
- The video brand mark is the CHAT360 .AI wordmark Kevin supplied, not `public/chat360-logo.png`. Trace logos per colour; unmix each region with only the inks that occur there, or light edge pixels get mistaken for a third ink and the trace gets bitten.
- Text overflowed at first ("Chat360 opens the page." at 80 px, "Comment DEMO", FR rows). Measure every hand-set line with the real font before rendering, and lay out for the longer language.
- Glyphs outside Inter's latin subset (≤, ✓, emoji) fall back to another font. Use words or SVG icons.
- A white panel with nothing in it reads as broken. Let widgets grow with their content, and show a skeleton while a page "loads".
- YouTube `/shorts` tabs don't load through Firecrawl. Take a creator's median from the channel RSS feed (15 latest uploads, exact view counts).
