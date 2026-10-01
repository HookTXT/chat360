# Hook research: Chat360 ad (stage 3 input)

Scouted 2026-10-01. Rules followed: `../../prompts/01-steal-hook.md`, `../../LANES.md`. The only numbers used in adaptations come from `topic.md`.

## Result: 4 hooks qualify (all YouTube Shorts)

| # | Hook, word for word | Creator | Date | Views | Creator median | Ratio |
|---|---|---|---|---|---|---|
| 1 | Title "Did she sell you?🤣" · first line "Quick, Ezra, sell me this car." | Bakersfield Hyundai (dealership) | 2025-04-17 | 502,737 | 1,858 | **270.58×** |
| 2 | "HOW TO SELL MORE CARS" | Andy Elliott (car-sales trainer) | 2024-06-14 | 170,212 | 6,120 | **27.81×** |
| 3 | Title "Le métier des vendeurs 👟" · first line "la première fois que j'ai fait vendeur" (FR) | Yomi Denzel | 2023-06-18 | 402,849 | 13,041 | **30.89×** |
| 4 | "How Do I Get 10X More Referrals?" | Alex Hormozi | 2026-09-28 | 144,418 | 15,456 | **9.34×** |

**Top pick for the frame-0 title:** EN **"Quick, AI, sell me this car."** / FR **"Vite, l'IA, vends-moi cette auto."** (6 words each, from #1).

- It has the highest ratio and comes from a dealership.
- It sets a challenge, and the next 29 s answer it: the AI sells on the website while the team is home.
- It needs no number.
- Frame 0 must show the line typed into the chat on a dealership website, or it reads like a ChatGPT prompt. Show night through the scene (dark showroom, "closed" sign). Don't put a clock time on screen, because `topic.md` gives no time.

## Method

- **Platform:** YouTube only. Firecrawl refuses TikTok ("we do not support this site") for both profiles and videos. I didn't try Instagram or LinkedIn because of the budget.
- **Outlier views:** exact count from each video's watch page, fetched 2026-10-01.
- **Creator median:** YouTube channel `/shorts` tabs return an empty 401 shell through Firecrawl. Instead I used each channel's public RSS feed (`youtube.com/feeds/videos.xml?channel_id=…`). It lists the **15 most recent uploads** with exact `media:statistics views`. That is the low end of the 15–20 posts asked for. Median = 8th of 15 sorted values.
- **First lines:** YouTube auto-transcripts. They have no punctuation, and names can be misheard: the same transcript later says "Esper", not "Ezra". I couldn't see any on-screen text inside the videos, so "title" means the YouTube title.

### Caveats on the ratios

- **Old winners vs. recent medians.** Three of the four winners are old (2023–2025), while their medians come from recent posts. Hormozi's #4 is the only same-week comparison.
- **Medians are understated for three channels.** Andy Elliott's, Yomi Denzel's and Hormozi's recent posts are 0–7 days old and still gaining views. I re-ran their medians without posts dated 2026-10-01; every hook still clears 3× (see each section).
- **Bakersfield is clean.** Its feed posts are 8–11 weeks old, so their views have mostly stopped climbing.

## 1. Bakersfield Hyundai: "Did she sell you?" (270.58×)

- **Link:** https://www.youtube.com/shorts/g-WrSPiJsTQ (channel @bakersfieldhyundai661, `UCEZlo2ZR_GWBjmZo851GEJA`)
- **Full title, verbatim:** "Did she sell you?🤣 #youtubeshorts #sales #carsales #dealership #fypyoutube #carbuying #bakersfield"
- **First spoken sentence (auto-transcript):** "Quick, Ezra, sell me this car."
- **Video stats:** 17 s, 502,737 views, 4,384 likes, uploaded 2025-04-17.
- **Median:** 15 feed uploads, all Shorts, dated 2026-07-16 → 2026-08-07: 374, 412, 444, 1,352, 1,533, 1,577, 1,695, **1,858**, 1,878, 1,992, 2,133, 2,136, 2,179, 2,260, 2,837 → median 1,858.
- **Ratio:** 502,737 ÷ 1,858 = **270.58×**

**Adaptation, from the first line** (6 words: Quick · Ezra · sell · me · this · car)

| Lang | Line | Kept | Swapped |
|---|---|---|---|
| EN | "Quick, AI, sell me this car." | 5/6 = **83%** | name slot: Ezra → AI |
| FR | "Vite, l'IA, vends-moi cette auto." | same structure and swap (translation) | — |

- Casual Québec option: "ce char".
- **Cold read:** no jargon and no number. It lands only if the chat bubble on the dealer's site is visible on frame 0.

**Title variant:** "Did she sell you?" → "Did the AI sell you?" keeps 3/4 = **75%** (she → the AI). FR: "L'IA t'a convaincu ?"

- **Flag:** on frame 0, "the AI" points at nothing yet. Use it as the end card or comment bait instead.

## 2. Andy Elliott: "HOW TO SELL MORE CARS" (27.81×)

- **Link:** https://www.youtube.com/shorts/5TrPwSBjkEQ (@AndyElliottOfficial, `UCIP99i3azLdyYRxnUkSLJ7g`)
- **Full title, verbatim:** "HOW TO SELL MORE CARS // ANDY ELLIOTT // text “GAME” to 918-210-0254 //"
- **First spoken line:** "you're my customer I say let's go inside". Not usable.
- **Video stats:** 57 s, 170,212 views, uploaded 2024-06-14.
- **Median:** the feed has 15 uploads, but 2 are long-form (7,497 and 5,670), so I used the 13 Shorts, dated 2026-09-24 → 2026-10-01: 367, 1,932, 2,289, 4,242, 4,276, 4,839, **6,120**, 6,932, 8,458, 11,407, 12,001, 17,543, 32,295 → median 6,120. All 15 uploads give the same 6,120.
- **Ratio:** 170,212 ÷ 6,120 = **27.81×**. Without the post under 1 day old, the median is 6,526 and the ratio **26.08×**.

**Adaptation** (5 words)

| Lang | Line | Kept | Swapped |
|---|---|---|---|
| EN | "How to sell more cars 24/7" | 5/5 = **100%** | nothing swapped; "24/7" added (allowed: `topic.md` "Online 24/7") |
| FR | "Comment vendre plus d'autos 24/7" | translation | — |

- **Flag:** "24/7" is an added slot, not a swap. The strict version is the title unchanged, with the night visual saying "after hours".
- **Cold read:** clear in 1 s but generic (every vendor promises it). It creates less curiosity than #1.

## 3. Yomi Denzel: "Le métier des vendeurs" (30.89×, French)

- **Link:** https://www.youtube.com/shorts/5TEDD3TRo9Y (@YomiDenzel, `UChgE6R4QauGAJAlYiJOcCGw`)
- **Full title, verbatim:** "Le métier des vendeurs 👟 #yomidenzel #entrepreneur #argent"
- **First spoken words (auto-transcript):** "la première fois que j'ai fait vendeur" (continues "premier taf d'été…")
- **Video stats:** 27 s, 402,849 views, uploaded 2023-06-18.
- **Median:** 15 feed uploads, all Shorts, dated 2026-09-28 → 2026-10-01: 433, 1,038, 2,780, 4,712, 5,908, 8,809, 9,073, **13,041**, 15,550, 16,690, 19,767, 33,962, 37,781, 46,519, 133,519 → median 13,041.
- **Ratio:** 402,849 ÷ 13,041 = **30.89×**. Without the 3 posts dated 2026-10-01, the median is 16,120 and the ratio **24.99×**.

**Adaptation, from the first line** (7 words: la · première · fois · que · j'ai · fait · vendeur)

| Lang | Line | Kept | Swapped |
|---|---|---|---|
| FR | "La première fois que ton site a fait vendeur…" | 6/7 = **86%** | subject slot: j'ai → ton site a |
| EN | "The first time your website played salesman…" | translation | — |

- **Flag 1:** "faire vendeur" is France/Swiss slang and may sound off to a Québec ear. Alternative: "La première fois que ton site a joué au vendeur…" keeps 5/7 = **71%**.
- **Flag 2:** at 9 words it is too long for the frame-0 title (3–8 words). Use it as line 2 or a caption.
- The title "Le métier des vendeurs" has no slot that maps to our topic without adding words, so I didn't adapt it.

## 4. Alex Hormozi: "How Do I Get 10X More Referrals?" (9.34×)

- **Link:** https://www.youtube.com/shorts/fX46y0tF1C8 (@AlexHormozi, `UCUyDOdBWhC1MCxEjC46d-zw`)
- **Full title, verbatim:** "\"How Do I Get 10X More Referrals?\""
- **First spoken sentence:** "Almost all problems in business can be solved by more people finding out about your stuff, either to work for you or to buy from you." (I removed a "[music]" tag the transcript has between "in" and "business".)
- **Video stats:** 72 s, 144,418 views, uploaded 2026-09-28. The feed showed 144,278 minutes earlier.
- **Median:** 15 feed uploads, all Shorts, dated 2026-09-28 → 2026-10-01: 4,155, 6,521, 6,803, 9,559, 10,242, 10,576, 15,381, **15,456**, 17,710, 18,135, 20,765, 23,668, 25,257, 25,633, 144,278 → median 15,456. The winner itself is in this set.
- **Ratio:** 144,418 ÷ 15,456 = **9.34×**. Without the 4 posts dated 2026-10-01, the median is 18,135 and the ratio **7.96×**.

**Adaptation** (7 words: How · Do · I · Get · 10X · More · Referrals)

| Lang | Line | Kept | Swapped |
|---|---|---|---|
| EN | "How Do I Get More After-Hours Leads?" | 5/7 = **71%** | number slot "10X" dropped (no matching number in `topic.md`); topic slot: Referrals → After-Hours Leads |
| FR | "Comment avoir plus de leads après la fermeture ?" | translation | — |

- **Cold read:** plain to GMs and BDC managers.
- **Risk:** Hormozi's name and a referral story probably drive the 9.34×, so the topic fit is weaker than #1 and #2.

## Did not qualify, or unverified (fallbacks only, not for use as proven hooks)

- **Below 3×.** Hormozi, "She Makes 3 Calls a Day and Brings In Millions" (https://www.youtube.com/shorts/Z6S5x3oGC_Y, 2026-09-29). Its description is about speed to lead: "gets to 100% of leads within 60 seconds". 25,633 ÷ 15,456 = **1.66×**, so it fails.
- **Unverified.** "Dealer Sleeps Through the Night…and Still Closes Deals?! 😳 #cardealership #ai" (https://www.youtube.com/shorts/6vFw6nVzh1c). YouTube's search page shows "1.2K views" (YouTube's own rounding). I didn't check the creator's median. It is the closest topic match I found.
- **Unverified.** "Car Sales Training: HOW TO GET 50+ LEADS A DAY STRAIGHT TO YOUR CELL PHONE! THE SECRET NICHE!!" (https://www.youtube.com/shorts/ADpCEeM2mWM). The search page shows "9.9K views". I didn't check the median.
- **Unverified (TikTok).** @graceautogroup, "Dealership Managers Meeting: Fixing Lost Online Credit …", a skit about online credit applications submitted overnight getting lost (https://www.tiktok.com/@graceautogroup/video/7643097319226805518). Firecrawl can't read TikTok, so views and median are unknown.
- **Unverified (TikTok).** The same applies to BDC creators @spittinbarssellincars, @mikey_montrose and @carolinecargirl, and to the Québec FR car-sales coach @mbcoachingacademy.com.
- **No French AI-agent winner.** A French search for an AI answering clients at night ("IA qui répond à tes clients la nuit") on 2026-10-01 returned only tiny accounts (≤8.6K views).

## Next step (stage 3, `hook.md`)

Run the full `01-steal-hook.md` pass (3 versions, cold read) on the chosen source. #1 is recommended.
