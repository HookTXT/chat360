# Graphics library — which graphic when

The library lives with the render project (set `RENDER_TOOL` below). Each graphic takes text + timing as inputs. Start with the six below; add one every time a script needs something the library can't draw, then add its row here.

`RENDER_TOOL`: _not set yet — HyperFrames / Remotion / After Effects. Set on first build._

## Library

| ID | Graphic | Inputs |
|---|---|---|
| G1 | **Big number** — counts up, label under it, small source tag | value, label, source, start/end |
| G2 | **List build** — one row per spoken item, lands on its word | items[], word times[] |
| G3 | **Step ladder** — First / Then / Then, each lights on its word | steps[], word times[] |
| G4 | **Before / after** — both sides labelled, visible at once | before, after, labels |
| G5 | **Chat in action** — a customer message types in on the voice, Chat360 (or Claude) answers in the site widget | message, reply, language |
| G6 | **CTA end card** — keyword huge, "comment" line, dark | word, line |

## Line type → what to show

| Line does… | Show | Notes |
|---|---|---|
| Hook | Title (frame 0) + one object under it | No cuts until the sentence ends |
| Claim ("dealers lose X % of after-hours leads") | The real thing within 2 s (screenshot, stat source), then explain | Proof first. Crop to the word. |
| Number | G1 | Never just appears |
| List | G2 | "Best part" marker before the best item |
| Steps / how it works | G3, or a flow / before-after (G4) | Hang and build, don't cut |
| A prompt / what the AI does | G5 | App/widget, not a terminal |
| Opinion / payoff / "You don't." | Kevin's face, 1–2 s | Full frame |
| Problem line, twist line | Kevin's face, full frame | |
| Ending | G6 | Dark |

## Verb → motion

turns into = morph · pick = pick/highlight · one to all = zoom out · send to = show it being sent · you don't = hard cut to face · counts/grows = count up.

## Gaps (no graphic yet)

- Map / regional reach (e.g. Québec vs. rest of Canada).
- Timeline of a lead (11 p.m. message → instant reply → booked appointment).
