# QA report, round 2: final-en.mp4 (visual pass)

**What I reviewed:** `build/final-en.mp4` (rendered 18:49) against the current `plan.md`. I read all 8 contact sheets and opened about 20 full-size frames, at least one per scene. I extracted exact 30 fps frames ±2 around every cut (4.0, 7.0, 13.0, 17.0, 23.0, 25.0), around the list swaps (19.0, 21.0), the thread scroll (10.5–11.2) and every frame from 25.7 to 27.0 at full size. I judged phone legibility at 390 px wide.

I also ran four scripted checks on all 900 frames:
- edges in the safe zones
- one-frame outliers
- grain and banding in the dark glows
- audio onsets against the cuts and the 29 s hit

I did not redo the checks in `auto.md`. In this report, "f" numbers are 30 fps frame indices.

**Verdict:** ready for Kevin's review. Every round-1 high is fixed, and there are no new highs and no render glitches. Two medium content problems (N1, N2) should be fixed before posting. Each is a small change.

## 1. Round-1 findings: status

| # | Status | Note |
|---|---|---|
| 1 | Fixed | The "3 SUVs match" bubble was cut. The 3rd row lands at 15.9 s, the first row is highlighted at 16.1 s, and it holds about 0.9 s. |
| 2 | Fixed | The comment box fades and slides in cleanly at 26.30 s. I checked every frame from 25.7 to 27.0 at full size: no double box and no seam. |
| 3 | Fixed | The logo finishes its glide at about 8.0 s, and the panel rises below it at 8.1 s. There is no overlap. |
| 4 | Fixed | Both claims are now ladder rows (about 58 px), each timed to its step. The reply is 10 words. The panel's UI text is still 26–38 px, but it is now only supporting detail. |
| 5 | Fixed | Nothing is clipped at rest, and the scene ends clean. A green sliver of the scrolled-away bubble shows under the header for 2 frames (10.97–11.03), which you can't see at full speed. |
| 6 | Fixed | All six chapter cuts open with the first element already drawn. The list's internal swaps don't; see N3. |
| 7 | Fixed | Each skeleton row stays until a real row replaces it. |
| 8 | Fixed | The question shows with the mic and "Listening…", then the 7-word Civic answer shows with the speaker and "Speaking…". The finished reply holds 0.7 s, short of the 1 s asked for. |
| 9 | Fixed | The list items no longer overlap. Each swap is now a hard cut, but it has a blank frame; see N3. |
| 10 | Partly fixed | The frame is no longer empty, because the browser is on screen from the cut. The chip holds about 0.65 s before the strike. Its text is still about 36 px (48 px or more was asked for), and it is not the focal element. |
| 11 | No longer applicable | The "4+ hours" count-up is gone. The new 10 → 51 % count-up is clean, with no layout jumps. |
| 12 | Partly fixed | The cars are now a proper illustration with one consistent treatment. But every model uses the same sedan body; see N1. |
| 13 | Fixed | The bot replies in French to the French question and in English to the English one. FR and EN are pills, and the exchange sits in the same column as the other visuals. |
| 14 | Partly fixed | CLOSED is now a white pill of about 50 px and reads on a phone. The URL is still 24 px, and the group still sits high, with 1260–1536 px empty. |
| 15 | Fixed | The tag and the bubble are centred. |
| 16 | Fixed | The source is now third-party, with the study name, date and sample size (Pied Piper PSI, Feb. 2026, 3,290 U.S. dealer websites). |
| 17 | Fixed / no longer applicable | The digits of "41%" are clearly separated, and there is no date range on the proof. |
| 18 | Fixed | Both steps are numbered, and step 1 turns into a check when step 2 lands. |
| 19 | Still present (smaller) | The bubble is 2 lines now, but it is still drawn at full size while the words appear. The same thing happens in list item 2; see N4. |
| 20 | Fixed | The tap is now a scale-down plus darken with a tap dot, clipped to the pill. |
| 21 | Fixed for the search | The URL starts typing 0.2 s after the question. But the question now arrives after both headlines; see N5. |
| 22 | Mostly fixed | AWD is gone, the year comes first, and the URL ends cleanly. The rows still show no prices on an "under $30,000" search. |
| 23 | Fixed | The avatar and greeting sit fully below the page. |
| 24 | Partly fixed | The hook now uses one accent. The twist still mixes a deep-green bubble, a mint headline and highlight, and a red strike. |
| 25 | Fixed | The hook's typing dots have a neutral grey avatar. |
| 26 | Partly fixed | DEMO pulses on the 29.06 s hit (the audio onset matches), the DM shows what the viewer gets, and the block sits lower. "The full demo is inside Chat360." is unchanged. It is the LANES.md lane line, so changing it is Kevin's call. See also N7. |
| 27 | Still present | The dark glows still step in rings one brightness level apart. Measured grain is the same as in the draft (high-pass σ 0.38 vs 0.34). |
| 28 | Fixed | Nothing in the lower half crosses x = 940 (the furthest is 934). The top strip and bottom fifth are clean on all 900 frames. |

## 2. New problems (worst first)

| # | Severity | Timestamp | Scene | Problem | Suggested fix |
|---|---|---|---|---|---|
| N1 | medium | 0–4.0 (cover), 9.6–13.0, 15.5–17.0 | hook, answer, twist | **Every vehicle is the same 4-door sedan.** The car on the `…/2027-honda-hr-v-sport` page is a sedan, and so is the card labelled "2027 Honda HR-V SPORT · Black roof", whose roof is blue. The "used SUV" search returns a CR-V, a RAV4 and a CX-5 drawn as recoloured sedans. A dealer sees at a glance that these aren't SUVs, and the twist's payoff ("it found the SUVs") shows three sedans. | Draw one compact-SUV body (taller roof, hatch rear, more ground clearance). Use it for the HR-V, CR-V, RAV4 and CX-5, and keep the sedan for the Civic. Give the HR-V a black roof, or drop "Black roof". |
| N2 | medium | 21.1–23.0 | list 3 ("Best part") | **Both replies dodge a price question.** "Check le prix su'l Civic?" gets "Bien sûr! Voici la Civic.", and "What's the price on the Civic?" gets "Sure! Here's the Civic." No price is given. On the beat labelled the best part, a dealer reads a bot that won't answer a price question. That is the chatbot behaviour dealers distrust, and it undercuts "Answers right away". | Put a price in both replies (e.g. "Sure! It's $24,995 — here it is." and the FR equivalent). Or change the question to one the reply does answer ("Can I see the Civic?"). |
| N3 | low | 19.00 (f570); 21.00 (f630), visual area empty until about 21.10 | list | Each item swap opens on a blank frame. The old visual is gone, the new row and visual aren't drawn yet, and every row is dimmed, so the ladder blinks on the beat. This is round-1 #6, now inside the list. | Start the new row and visual 1–2 frames early, or keep the old visual through the swap frame. |
| N4 | low | 8.83–9.2; 19.73–20.27 | answer, list 2 | The bot bubbles are drawn at their final 2-line size while the words appear. "It's" and then "Perfect" each sit alone in a large grey box for 0.4–0.5 s (round-1 #19, smaller). | Grow the bubble with the text, or size it to the current line. |
| N5 | low | 13.0–14.3 | twist | The visitor's question ("A used SUV under $30,000") arrives at 14.3 s, after "A typical chat sends a link." (13.0) and after "Chat360 does the search." (14.1). The link answers a question the viewer hasn't seen yet. | Bring the question bubble in on the cut (13.0–13.2 s), then the link and strike, then "Chat360 does the search." |
| N6 | low | 10.93–13.0 | answer | After "Test drive booked" lands, nothing new happens for 2.1 s. STYLE asks for something new about every second. Step 2 also never gets its check mark. | On the 11.9 s beat, check off step 2, or land a time on the booking ("Sat 10:00 AM · Added to calendar"). |
| N7 | low | 27.6–30.0 | CTA | The DM says "Here's your demo." but its button says "Book my demo", and per keyword.md the DM sends a Calendly booking link. A viewer expecting a demo gets a booking link. | Make the DM say what it delivers, e.g. "Pick a time for your demo." with [Book my demo]. |
| N8 | low | 19.8–21.0 | list 2 | "Perfect — two Civics in stock right now." answers a yes/no question with "Perfect". It reads like a literal translation of « Parfait ». | "Yes — two Civics in stock right now." |
| N9 | low | 20.6–23.0 | list 3 | The "Best part:" kicker is about 40 px. That is under the 56 px label minimum and smaller than the rows it sets up, so on a phone it reads as a caption, not a build-up. | Set it at 56 px or more, or fold it into the row ("Best part: is truly bilingual."). |
| N10 | low | 5.6–7.0 | problem | The source line breaks the date across lines: "…study, Feb." / "2026 · 3,290 U.S. dealer websites". | Keep "Feb. 2026" together (no-break space), or break after "study,". |

**Not a visual issue, but on screen:** `topic.md` still says to confirm the definition of the 41 % (leads ÷ conversations) before posting.

## What works now

- **Clean render.** There are no glitches, every chapter cut opens on content, the safe zones are clean on every frame, and audio hits land within 50 ms of the cuts and of the 29 s pulse.
- **Big, legible claims.** The hook line, "Only 51%", the ladder rows, "Chat360 does the search.", the list rows, "41%" and "Comment DEMO" all read in about a second at phone width.
- **Clearer story.** The twist payoff lands with time to read it. List item 2 now shows a spoken question and a spoken answer, and list item 3 shows the bot replying in each language.
- **Credible sources.** The problem stat now names a third-party study with its date and sample size.
