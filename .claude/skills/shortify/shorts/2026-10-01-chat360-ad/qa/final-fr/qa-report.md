# QA report, round 3: final-fr.mp4 (French / Québec cut)

**What I reviewed:** `build/final-fr.mp4` (rendered 19:14), checked against `plan.md` and the FR column of `script.md` / `copy.json`.
- All 8 contact sheets, plus full-size frames from every scene.
- Exact 30 fps frames ±2 around every cut (4.0, 7.0, 13.0, 17.0, 23.0, 25.0) and both list swaps (19.0, 21.0).
- Frame-by-frame crops of the bot-reply build, the thread scroll, the URL typing, the comment typing and the 29 s pulse.

I also ran these checks with scripts:
- all 900 frames: safe-zone edges, one-frame outliers, count-up jitter, grain and banding
- the audio against the EN cut

I did not redo the checks in `auto.md`. In this report, "f" numbers are 30 fps frame indices.

**Verdict: ready for Kevin's review.** There are no highs. There is one medium, and it only affects French: the search URL overflows its field, and changing one string fixes it. Everything else is low: copy polish for a Québec ear, and two small render nits. All nine round-2 fixes are in this cut.

## Problems (worst first)

| # | Severity | Time (s) | Scene | Problem | Suggested fix |
|---|---|---|---|---|---|
| 1 | medium | 14.9–17.0 | twist | **The search URL overflows the address field.** « votreconcession.ca/inventaire/vus-usages-moins-30k » is cut off in the middle of the « 3 ». The caret runs off the edge at about 14.9 s, and the end of the URL never shows. The EN URL ends cleanly, so only the French cut has this, and it happens on the twist's "show it" moment, while the eye follows the typing. | Shorten the FR `twist.urlSearch` to « /vus-usages-30k » or « /vus-moins-30k ». Either fits with room for the caret. Or make `BrowserFrame` keep the caret in view once the text overflows, the way a real browser scrolls. |
| 2 | low | 20.93–23.0 | list 3 | « La Civic, est-tu encore dispo? » With the comma, the line reads as a dislocated phrase missing its pronoun. That invites the reading « Civic, es-tu… » with a typo, on the beat billed as the best part. Without the comma, it is the natural written form of the Québec « -tu » question. | « La Civic est-tu encore dispo? » The same line is in the EN cut. |
| 3 | low | 19.07–23.0 | list 2 → 3 | Items 2 and 3 ask the same question back to back: « Avez-vous la Civic en stock? », then « La Civic, est-tu encore dispo? ». « Le meilleur » plays like a rerun, and only the FR/EN pills carry the new point. | Optional, and it affects both cuts. Give item 3 a different question that the reply answers, e.g. « Je peux-tu l’essayer samedi? » → « Oui! Samedi 10 h, ça te va? » / "Can I test-drive it Saturday?" → "Sure! Saturday 10 AM?" |
| 4 | low | 8.80 (f264) | answer | **One blank frame.** The typing dots and the bot avatar disappear one frame before the reply bubble starts to fade in, because the bubble is at 0 % opacity on its first frame. The avatar blinks. The EN cut has the same blink. | In `Ad.tsx` (the Answer thread), start the bubble one frame earlier (`enter(f, b.bot - 1, 6)`), or keep `TypingDots` while `f <= b.bot`. |
| 5 | low | 20.5–23.0 | list | « Mais le meilleur : » "Mais" promises a contrast that isn't there. The kicker also breaks the « Chat360… [verb] » chain, so « est vraiment bilingue. » loses its subject. | « Et surtout… », which reads as « Chat360… et surtout, est vraiment bilingue ». Or « Et le plus beau : ». Keep it at 56 px or more. |
| 6 | low | 23.2–25.0 | proof | « des conversations sont devenues des prospects » is a calque of "chats turned into leads". In French a prospect is a person, so a conversation can't become one. | « 41 % des conversations ont généré un prospect », or « …se sont converties en prospects ». First confirm the 41 % definition (leads ÷ conversations), which `topic.md` still flags. |
| 7 | low | 17.33–19.0 | list 1 | The greeting breaks after the article: « Des questions sur la / Honda Civic 2022? ». | Break it as « Des questions sur / la Honda Civic 2022? » (`list.greet`). |
| 8 | low | 15.5–17.0 | twist | The results for « Moins de 30 000 $ » show the km but no price. This is round-2 #22, still open, and a dealer looks for the price first. | Add a price to each row, e.g. « 27 995 $ · 62 000 km ». |
| 9 | low | 4.9–7.0, 13.1–17.0, 23.0–25.0 | problem, twist, proof | The narrow no-break space (U+202F) in « 51 % », « 3 290 », « 30 000 $ », the km figures and « 41 % » is not in the shipped Inter latin subset. I checked all five weights. Chromium draws that space from a system fallback font. It renders today (about 0.2 em), but the result depends on the render machine, and STYLE allows only Inter latin glyphs. In « 71 500 km » the gap almost disappears. « 12 km » and « 62 000 km » also have a breaking space before the unit. | Use U+00A0, which Inter has, for these spaces, or ship an Inter build that includes U+202F. Put U+00A0 before « km ». |
| 10 | low | 25.4–30.0 | CTA | « La démo complète, c’est Chat360. » literally says the demo *is* Chat360. It doesn't tell the viewer where the demo is. It is the LANES.md bottom-lane line, word for word. | Kevin's call. For example, « La démo complète de Chat360 : » above « Commente DÉMO ». |
| 11 | low | 0–4.0; 17.0–19.0 | hook, list 1 | The URL slugs disagree on year order. The hook page is « /2027-honda-hr-v-sport » (year first, the EN order), but the Civic page is « /honda-civic-2022 », and the FR titles put the year last. | « votreconcession.ca/honda-hr-v-sport-2027 ». |

## Round-2 fixes: status in this cut

| Fix | Status | Evidence |
|---|---|---|
| SUV and sedan bodies | Fixed | The HR-V (hook and card) is an SUV with a black roof, matching « Toit noir ». The CR-V, RAV4 and CX-5 are SUVs (blue, grey and red). The Civic stays a sedan. |
| Bilingual pair asks « La Civic, est-tu encore dispo? » | Fixed | « Oui! Je t’ouvre sa fiche. » follows, then the EN pair. Both replies answer the question (20.93–22.3). See #2 and #3. |
| Bubbles grow line by line | Fixed | The bot reply grows from 1 to 3 lines (8.8–9.4 s). The voice transcript grows from 1 to 2 lines (19.87–20.27 s). |
| Twist question comes first | Fixed | The headline is on screen at the cut (13.0). Then the question (13.1), the link chip (13.3), the strike (about 14.0) and « Chat360 fait la recherche. » (14.23). |
| Step 2 checks off | Fixed | At 12.0 s (f360). |
| List swaps start early | Fixed | The next row starts appearing at 18.93 and 20.93. f570 and f630 open with the new row and its visual drawn. There is no blank frame. |
| Kicker 56 px | Fixed | « Mais le meilleur : » has a 42 px cap height, about 58 px Inter. |
| DM text | Fixed | « Choisis l’heure de ta démo. » with [Réserver ma démo], from 27.63 to 30.0 s. |
| Grain against banding | Fixed | The high-pass σ is about 1.16 in every dark glow (0.38 in round 2). No rings show, even at 6× contrast. |

**Other checks (all pass):**
- **Safe zones:** clean on all 900 frames. The highest edge is at y 236 and the lowest at y 1519. Nothing in the lower half goes past x 927.
- **Cuts:** every cut opens on drawn content.
- **Count-ups:** they don't jitter.
- **Audio:** sample-identical to the EN cut, with onsets on every cut and on the 29 s pulse.
- **Thread scroll:** the 2-frame sliver at 10.97–11.03 s is unchanged from round 2 and can't be seen at full speed.
- **No unintended English:** « Chat360 AI · En ligne 24/7 » matches the French site's hero.

## What works

- **It sounds Québécois, not translated.** VUS, usagé, essai routier, concession, « on a deux Civic », « dispo », « Je te réserve un essai? ».
- **Tu and vous are consistent for each speaker.** The bot always uses tu. The generic chat's « Nous vous répondrons bientôt. » makes a good stiff contrast. The visitor uses vous with the dealership, and the CTA uses tu with the viewer.
- **Careful typography.** Curly ’ everywhere, no-break spaces before « : », « % » and « $ », spaced thousands, « févr. 2026 » kept together, and « (É.-U.) ».
- **The longer French fits everywhere except the URL.** The 3-line hook bubble, the 3-line problem label, « Réserver un essai routier » and « est vraiment bilingue. » all fit with margin.
- **Clean render.** Every cut and swap opens on content, the hits land on the beat, and the glows no longer band.

## Status after the v4 re-render (2026-10-01, 19:49)

Checked on the v4 `final-fr.mp4` / `final-en.mp4` with exact frames from the mp4 (not stills). Automatic checks: `../final-fr-v4/auto.md`, `../final-en-v4/auto.md`.

| # | Status |
|---|---|
| 1 | Fixed: « …/inventaire/vus-usages-30k » ends inside the field, with the caret in view. |
| 2 | Fixed in both cuts: « La Civic est-tu encore dispo? » |
| 3 | Open. This is Kevin's call (optional rewrite above). |
| 4 | Fixed in both cuts. At f264 the reply bubble is already drawn, and the avatar stays still through the swap (`Bubble steadyAvatar`). |
| 5 | Fixed: « Et surtout… » |
| 6 | Fixed: « des conversations ont généré un prospect ». The 41 % definition still needs Kevin's confirmation. |
| 7 | Fixed: « Des questions sur / la Honda Civic 2022? » |
| 8 | Fixed in both cuts. The rows show price · km (28 495 $ · 62 000 km, 27 995 $ · 71 500 km, 26 995 $ · 48 200 km). These listings are illustrative. |
| 9 | Fixed. U+00A0 is used everywhere and no U+202F is left; there is a no-break space before « km ». |
| 10 | Open. Kevin's call: it is the lane's CTA line word for word. |
| 11 | Fixed: « votreconcession.ca/honda-hr-v-sport-2027 », on the cover too. |
