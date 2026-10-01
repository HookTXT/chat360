---
name: shortify
description: Turn one topic into one vertical short (9:16, ~30-34 s) for Chat360 — face, captions, motion graphics, and a comment-to-DM ending. Use when Kevin says "shortify", "make a short about…", "fais un short sur…", hands over a topic card, or asks for a reel/TikTok/YouTube Short. One topic → one short → one keyword → one DM. Never posts or schedules anything without an explicit "go" in the chat.
---

# Shortify — one topic, one short

A short has one job: get the right dealer (GM, BDC manager, dealer principal, digital marketing lead) to raise their hand. Not go viral. Not teach everything. Every short gives a real payoff in ~30 s, leaves one question open, and ends with one ask:

> If you want [the thing], comment [WORD].
> Si tu veux [la chose], commente [MOT].

## Hard rules

1. **Nothing posts without Kevin watching it first.** Stop at stage 10 and wait for "go" in this chat. Never schedule, post, or switch on a DM automation before that.
2. **One topic, one short, one lane, one keyword.** Never batch-cut several shorts from one source.
3. **Script locks before voice.** After Kevin says "locked", do not change a word. Goal: one avatar render per short.
4. **Never invent or round a number.** Every number carries a source. Chat360 product claims must match what the landing page (`components/`) says.
5. **Point, don't copy.** Read `STYLE.md`, `GRAPHICS.md`, `LANES.md`, `keywords.md`, `LESSONS.md` from this folder each run; don't paste them into briefs — give subagents the paths.
6. **Read `LESSONS.md` before stage 1** and append to it whenever a mistake gets fixed.

## Language

Chat360 sells to a bilingual market. Each short is produced in **one** language (default: French, Québec register; English when the topic card says so). Captions and post text match the short's language. Keywords must be sayable in that language. A topic can get a second short in the other language on another day — that's a new short with its own keyword.

## Working folder

Each short lives in `shorts/YYYY-MM-DD-<slug>/` (git-ignored media; text files are fine to commit):

```
topic.md        # topic card (stage 1)
keyword.md      # reserved word + check result (stage 2)
hook.md         # source hook, ratio, 3 versions, pick (stage 3)
script.md       # locked script + cold-read changes (stage 4)
voice/          # audio/avatar render + word timestamps (stage 5)
plan.md         # visual-moment table (stage 6)
build/          # graphics project + render (stage 7)
qa/             # contact sheets + defect list (stage 8)
captions.md     # one block per platform (stage 9)
cover.png       # stage 9
cost.md         # what this short spent
```

## The ten stages

Run in order. Stages marked **STOP** wait for Kevin.

| # | Stage | Do | Brief |
|---|---|---|---|
| 1 | Topic card | Source link, real numbers (views vs. creator median), lane (see `LANES.md`), 2–3 proven hook options, keyword idea. If no topic was given, run the topic scout. | `prompts/00-topic-scout.md` |
| 2 | Keyword | Pick the comment word first; check it against `keywords.md`, every DM automation, and recent captions; reserve it with topic + date. | `prompts/08-keyword-check.md` |
| 3 | Hook | Adapt a proven hook (≥3× creator median, ≥70 % words kept, slots only). Reads cold. | `prompts/01-steal-hook.md` |
| 4 | Script lock | Write script on the structure below, run the cold-read subagent, show fixes. **STOP** until "locked". | `prompts/02-cold-read.md` |
| 5 | Voice + face | Kevin's recording or AI twin. Trim pauses before render. Get word-level timestamps. Log render seconds + cost. | — |
| 6 | Dissect | Split every line into visual moments; the verb picks the motion. Show the table. | `prompts/07-dissect.md` |
| 7 | Build | Graphics from `GRAPHICS.md` in the `STYLE.md` look, real proof, captions snapped to word timestamps, music bed + SFX. Render locally. | `prompts/05-graphics-library.md` (only when a new graphic is needed) |
| 8 | QA | Subagent pulls frames, reads every one, lists defects worst-first. Fix → re-render → repeat until empty. | `prompts/06-qa.md` |
| 9 | Captions + cover | Post text per platform; one cover (Instagram + YouTube). | `prompts/09-captions.md`, `prompts/10-cover.md` |
| 10 | Review | Show: final video path, cover, captions, keyword, QA report, cost. **STOP.** Schedule one post (morning slot, no same music bed as the neighbouring days) and switch on the DM only after "go". | — |

After stage 4 is locked, stages 5, the guide page (top lane), 9-captions, and the stage-6 plan can run as parallel subagents. Only stage 7 waits on the voice.

## Script structure (105–125 words)

1. **Hook** — the adapted hook.
2. **Problem** — the dealer's real problem, plain words (e.g. leads that land at 11 p.m. and get answered at 9 a.m.). Full frame on face.
3. **Steps** — said out loud: "First…" / "Then…" ("D'abord…" / "Ensuite…").
4. **Twist** — "But here's the trick if you want [bigger outcome]. Don't [obvious move]. Instead, [better move]." Full frame on face.
5. **List of 3** — three things a graphic can show. "But here's the best part" goes before the best one, not the first.
6. **Pre-CTA + CTA** — what only the link gives; then the lane's CTA line word for word.

Voice script writes money and numbers the voice must say as words ("cinq dollars soixante-dix"); captions and graphics keep numerals. No hype word without a number next to it. Every line ends on a noun or number a graphic can show.

## Subagents

One helper per job (scout, creator study, cold reader, graphics builder, dissector, QA). Each brief stands alone: files to read, goal, rules, budget, where to save, and a report under 150 words. Kevin reviews every report before the next stage — the helper finds, builds and checks; Kevin decides what's good.

## Cost log

Append to `cost.md` per short: avatar seconds × rate, image gen, research calls, scheduler share (monthly ÷ posts), Claude usage if on API. Reference point from the source guide (Sept 2026): ~$8.34 cash per short on a Claude plan, more than half of it the AI twin. Cut it with one render per short, trimmed pauses, or Kevin's own camera.

## Pre-post checklist (stage 10)

- [ ] One topic, one lane; CTA line matches the lane word for word.
- [ ] Hook from a ≥3× winner, ≥70 % original words, source logged.
- [ ] A stranger gets every line first listen; every number has a source.
- [ ] Money as words in the voice script; script locked before the render.
- [ ] Hook holds with no cut until the first sentence ends.
- [ ] Every claim shows proof within 2 s; every screenshot reads in 1 s at phone size.
- [ ] Nothing readable in the top strip, bottom fifth, or right-edge buttons.
- [ ] Captions 1–2 words, on the spoken word, never over a graphic.
- [ ] Dark/light split counted (each 40–60 %); hook and ending dark.
- [ ] Keyword passed the check; no other automation uses it.
- [ ] DM tested from a second account, follow gate included.
- [ ] IG/FB captions open with the comment line; others carry the link.
- [ ] Cover survives the 3:4 grid crop.
- [ ] Every link is live right now.
- [ ] Kevin watched it on a phone, with sound, and said **go**.
