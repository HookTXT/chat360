# Topic card — Chat360 ad (30 s motion graphics)

- **Date:** 2026-10-01
- **Ask (Kevin):** "a 30 seconds motion graphics video that shows what's incredible about Chat360, like it's an ad."
- **Topic (one):** Chat360 answers and sells on your website while your team is home — and it does more than answer.
- **Lane:** Bottom (a real Chat360 capability → fixed keyword, demo booking).
- **Language:** FR (skill default, Québec register). EN twin rendered from the same build as a separate short (own keyword, own day).
- **Format deviation:** no face, no voice (motion graphics only, as asked). No word timestamps → timing locked to a 120 BPM music grid (1 beat = 0.5 s). No paid render → the script lock costs nothing to reopen.

## Source

chat360.ca — identical to this repo's `components/` (EN) and `components/fr/` (FR). Live page read via Firecrawl on 2026-10-01; direct fetch of chat360.ca and i.ibb.co is blocked by this session's egress policy. Logo: `public/chat360-logo.png` (same file the site hot-links).

## Numbers we may use (verbatim, with source)

| Number | Exact wording on site | Source |
|---|---|---|
| < 30 sec | "Average response time" | `components/Features.tsx` stats strip |
| 4+ hours | "(vs. 4+ hours industry average)" | `components/Features.tsx` stats strip |
| 34% | "Chat-to-appointment conversion rate" | `Features.tsx`, `Solution.tsx` |
| 47% | "Leads captured outside business hours" | `Features.tsx`, `Solution.tsx` |
| 50+ | "Based on aggregated data from 50+ Canadian dealerships using Chat360 (2024-2025)" | `Features.tsx` |
| 24/7 | "Online 24/7", "24/7/365 Always online" | `Hero.tsx`, `Features.tsx` |

Do **not** use: "up to 60% of after-hours leads lost" (no citation on the page); setup time (site says "Live in 1 Day", FAQ says "14 days", testimonial says "2 weeks" — inconsistent).

## Product claims we may show (site wording)

- Speaks first — "An AI that speaks first. Like your best salesperson." (`ProactiveFollowUp.tsx`)
- Voice — "Your customers talk. Your website answers." (`VoiceAI.tsx`)
- Site tour (Cowork, beta) — "It gives the tour of your website." Opens the vehicle page / pre-filtered inventory. (`SiteTour.tsx`)
- Bilingual — "Truly bilingual (English & French)", Québec French. (`Solution.tsx`, `Features.tsx`)
- Real inventory, vehicle cards with real photos, books appointments. (`Solution.tsx`, `Features.tsx`)

## Keyword

DÉMO (FR) / DEMO (EN) — permanent bottom-lane words in `../../keywords.md`.

## Hook options

Pending stage 3 research → `hook.md`.
