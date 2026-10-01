# Topic card — Chat360 ad (30 s motion graphics)

- **Date:** 2026-10-01
- **Ask (Kevin):** "a 30 seconds motion graphics video that shows what's incredible about Chat360, like it's an ad."
- **Topic (one):** Chat360 answers and sells on your website while your team is home — and it does more than answer.
- **Lane:** Bottom (a real Chat360 capability → fixed keyword, demo booking).
- **Language:** FR (skill default, Québec register). EN twin rendered from the same build as a separate short (own keyword, own day).
- **Format deviation:** no face, no voice (motion graphics only, as asked). No word timestamps → timing locked to a 120 BPM music grid (1 beat = 0.5 s). No paid render → the script lock costs nothing to reopen.

## Source

chat360.ca — identical to this repo's `components/` (EN) and `components/fr/` (FR). Live page read via Firecrawl on 2026-10-01; direct fetch of chat360.ca and i.ibb.co is blocked by this session's egress policy. Logo: `public/chat360-logo.png` (same file the site hot-links).

## Numbers on screen (v1.2 — Kevin: "find good source, not chat360 as a source")

| Number | Exact wording at the source | Source (checked 2026-10-01) |
|---|---|---|
| 51% | "Dealers answer a web customer's 'typical' inquiry within 24 hours 78% of the time on average, often through automated AI messages. However, that rate drops to just 51% when customers ask more complex questions requiring thoughtful human engagement." | Pied Piper PSI, *Internet Lead Effectiveness Auto Industry Study*, press release Feb. 23, 2026 — 3,290 U.S. dealership websites, inquiries sent during business hours. https://www.piedpiperpsi.com/press/press-release-infiniti-dealers-rank-highest-in-2026-web-lead-response-study-ai-and-automation-drive-industry-improvement-512.htm |
| 41% | Chats that turned into leads, last month | Kevin, 2026-10-01 ("je suis à 41% le dernier mois de lead gen") — first-party, labelled "Chat360 data · September 2026" on screen. Confirm the definition (leads ÷ conversations) before go. |

Dropped from the video (self-sourced from chat360.ca): "< 30 sec average response", "4+ hours industry average", "34% chat-to-appointment", "47% after hours".

### Verified reserve stats (not used in this cut)

- Harvard Business Review, Oldroyd, McElheran & Elkington, "The Short Life of Online Sales Leads" (March 2011): firms that tried to contact potential customers within an hour "were nearly seven times as likely to qualify the lead … as those that tried to contact the customer even an hour later — and more than 60 times as likely as companies that waited 24 hours or longer" (1.25 million leads, 42 U.S. companies). Same article: of 2,241 U.S. companies audited, "the average response time, among companies that responded within 30 days, was 42 hours"; 23% never responded. Cross-industry, 2011.
- Pied Piper 2026 (same release): dealers answer a *typical* web inquiry within 24 h 78% of the time.

## Product claims we may show (site wording)

- Speaks first — "An AI that speaks first. Like your best salesperson." (`ProactiveFollowUp.tsx`)
- Voice — "Your customers talk. Your website answers." (`VoiceAI.tsx`)
- Site tour (Cowork, beta) — "It gives the tour of your website." Opens the vehicle page / pre-filtered inventory. (`SiteTour.tsx`)
- Bilingual — "Truly bilingual (English & French)", Québec French. (`Solution.tsx`, `Features.tsx`)
- Real inventory, vehicle cards with real photos, books appointments. (`Solution.tsx`, `Features.tsx`)

## Keyword

DÉMO (FR) / DEMO (EN) — permanent bottom-lane words in `../../keywords.md`.

## Hook

"Quick, AI, sell me this car." — adapted from a 270× outlier (`hook.md`).
