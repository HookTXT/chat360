# Cold read: Chat360 ad v1

Read cold, at phone size, using only `script.md` and rules 1–8 from the brief. When EN and FR share a problem they're in one row, EN first.

## Findings (worst first)

| Beat | Lang | Line | Problem | Suggested fix |
|---|---|---|---|---|
| 3 | EN<br>FR | **1 Answers in < 30 sec**<br>**1 Répond en < 30 sec** | Stronger claim than the source (rule 6). The source says "< 30 sec **average** response time". Without "average", this reads as a promise that every reply comes in under 30 s. "<" is math shorthand, and "under" reads faster. FR: "sec" isn't the unit symbol (OQLF uses "s"). | **1 Answers in under 30 sec\*** + small "\*average response time"<br>**1 Répond en moins de 30 s\*** + petit « \*temps de réponse moyen » |
| 2 | EN<br>FR | **4+ hours** · "industry average reply"<br>**4+ heures** · « en moyenne dans l'industrie » | This is a stat, not the problem (rule 2). The viewer has to work out that it means *their* leads are left waiting. "industry average reply" is a squeezed-down label. FR never says what takes 4 hours, and "4+ heures" reads like English. | Leads wait **4+ hours** · small "industry average"<br>Les clients attendent **plus de 4 heures** · petit « moyenne de l'industrie » |
| 3 | EN<br>FR | Bot bubble, 26 words ("Did you know this 2027 HR-V SPORT is all-wheel drive…")<br>Bulle bot, 26 mots (« Savais-tu que ce HR-V SPORT 2027… ») | Too long to skim (rule 5). It takes about 6 s to read, which is the whole beat, so it pulls the eye away from steps 1 and 2. | "It's AWD with only 12 km. Want a test drive?"<br>« Traction intégrale, seulement 12 km. Je te réserve un essai? » (keeps *tu*) |
| 4 | EN<br>FR | Whole beat, plus "3 SUVs match."<br>« 3 VUS correspondent. » | Over the reading limit (rule 5): 12 / 13 must-read words in 4 s (3.0 / 3.3 per s), on top of a request bubble, 4 chips and 3 car cards. The last caption ends on a verb (rule 4) and only repeats what the 3 cards already show. | Cut the caption and let the 3 cards land. The card text (year, km) is texture, not meant to be read. |
| 4 | EN<br>FR | **Chat360 opens the page.**<br>**Chat360 ouvre la page.** | Which page? (rule 1) A link opens a page too, so the contrast with the line before is lost and the twist falls flat. | **Chat360 does the search.** (the filters clicking on are the graphic)<br>**Chat360 fait la recherche.** |
| 7 | EN<br>FR | "The full demo is inside Chat360." · **Comment DEMO**<br>« La démo complète, c'est Chat360. » · **Commente DÉMO** | Locked, so not rewritten. Read cold, "inside Chat360" is vague (the app? the site?), and it doesn't explain why you'd comment. chat360.ca gives a third way out. FR says the demo *is* Chat360 while EN says it's *inside* it, so the two versions promise different things. Many people will type DEMO without the accent. | Keep the words and let the picture explain them: once DEMO is typed, a DM from Chat360 opens. Make chat360.ca small. The FR comment trigger must accept DÉMO / DEMO / démo / demo. |
| 5 | EN<br>FR | **It speaks first.**<br>**Il parle en premier.** | "It" has nothing to point at (rule 1). The last "Chat360" came before a hard cut and a tone flip. "Speaks" over a *text* greeting gets confused with item 2 (voice). Ends on "first" (rule 4). | **Chat360 starts the conversation.**<br>**Chat360 lance la conversation.** |
| 4 | EN<br>FR | **Other chats send a link.**<br>**Les autres chats envoient un lien.** | Claims *every* competitor does this, and nothing in the sources supports that (rule 6). FR: at a glance, plural « les chats » reads as "the cats". | **A typical chat sends a link.** (echoes the beat 2 tag)<br>**Le chat typique envoie un lien.** |
| 3 | EN<br>FR | "Test drive booked — Synced. Confirmed."<br>« Essai routier réservé — Synchronisé. Confirmé. » | Synced with what? Nothing on screen shows it (rule 1). Ends on "Confirmed" (rule 4). | "Test drive booked — added to calendar"<br>« Essai routier réservé — ajouté à l'agenda » |
| 6 | FR | **34%** · « des chats convertis en rendez-vous » | French needs a non-breaking space before %. « des chats » reads as "of the cats", and « convertis » is marketer French (rule 7). | **34 %** · « des conversations deviennent des rendez-vous » |
| 5 | EN | *But here's the best part:* | 5 filler words in a ~2 s slot that also holds 2 bubbles and 2 tags, and it ends on an abstract noun (rules 4, 5). FR « Mais le meilleur : » is fine. | *Best part:* |
| 5 | EN | **It answers out loud.** | Ends on an adverb (rule 4). FR already ends on « voix ». | **It answers by voice.** |
| 4 | EN<br>FR | Chip "AWD"<br>Chip « Intégrale » | The shopper never asked for AWD, so it looks like the AI made up a filter. « Intégrale » on its own is cryptic. It's also more to read. | Drop the chip. |
| 6 | EN<br>FR | Source line, 10 words | Too long to read in 2.5 s, so "50+ Canadian dealerships", the line that builds trust, gets lost (rule 5). "50+" reads like English in FR. | "Chat360 data · 50+ Canadian dealerships · 2024-2025"<br>« Données Chat360 · plus de 50 concessionnaires canadiens · 2024-2025 » |
| 5 | EN<br>FR | Jetta voice reply | The text isn't in the script, so I can't check its length or tu/vous. The car also jumps Civic → Jetta → Civic. | Keep it to 8 words or fewer, and use *tu* in FR like the beat 3 bot. Use the Civic if the mock allows it. |
| 5 | EN + FR | "Check le prix su'l Civic?" | « su'l » = *sur le* (masculine), but the greeting says « **la** Honda Civic ». Low priority, since real speakers vary. | "Check le prix s'a Civic?" |
| 4 | FR | 3 VUS (car cards) | If the cards are reused from EN: French writes 62 000 km, not 62,000 km. | Use French number format on the cards. |
| all | FR | Every line | Typesetting: use ’ rather than ', and non-breaking spaces inside « », before : and before % and $. No space before ? or ! is fine in Québec. | Apply when typesetting, CTA included (no word changes). |

## Reading load

Must-read words divided by beat length. Chat bubbles and UI count as skimmable and are left out. The limit is about 3 words/s.

| Beat | Window | EN before → after | FR before → after | Note |
|---|---|---|---|---|
| 1 | 4.0 s | 7 (1.8/s) | 6 (1.5/s) | OK |
| 2 | 3.0 s | 7 (2.3/s) → 6 (2.0/s) | 8 (2.7/s) → 8 (2.7/s) | Bubble skimmable; "industry average" read as a footnote |
| 3 | 6.0 s | 13 (2.2/s) → 15 (2.5/s) | 12 (2.0/s) → 15 (2.5/s) | Bot bubble 26 → 10 words |
| 4 | 4.0 s | **12 (3.0/s)** → 10 (2.5/s) | **13 (3.3/s)** → 10 (2.5/s) | Plus request bubble, chips 4 → 3, cards as texture |
| 5 | 6.5 s | 14 (2.2/s) → 12 (1.8/s) | 14 (2.2/s) → 14 (2.2/s) | 3rd slot was crowded (EN) |
| 6 | 2.5 s | 7 (2.8/s) | 6 (2.4/s) | Tight; source line 10 → 6–8 words |
| 7 | 4.0 s | 9 (2.3/s) | 8 (2.0/s) | OK |

**What passes:**
- Beat 1 hook reads cold: "this car" points at the visible page.
- Beat 3 steps read as an order: 1 answers, then 2 books.
- Every other number is either on the allowed list or illustrative car/chat content.
- tu/vous is consistent for each speaker: visitor *tu*, typical chat *vous*, Chat360 bot *tu*, ad voice *tu*.
- The CTA words match the locked lines.
- "Truly bilingual." / « Vraiment bilingue. » ends on an adjective, but I kept it: the "French/English detected" tags put the nouns on screen right after.

## Fixed script (v1.1, only flagged lines changed)

| # | Beat | Time | Tone | EN on screen | FR on screen | Source |
|---|---|---|---|---|---|---|
| 1 | Hook | 0.0–4.0 | dark | Visitor bubble: **"Quick, AI, sell me this car."** on a vehicle page (2027 Honda HR-V SPORT), night, "Closed" | Bulle visiteur : **« Vite, l'IA, vends-moi cette auto. »** sur une fiche (Honda HR-V SPORT 2027), nuit, « Fermé » | hook.md |
| 2 | Problem | 4.0–7.0 | dark | Tag "Typical chat" · bubble "Someone will get back to you." · Leads wait **4+ hours** · small "industry average" | Tag « Chat typique » · bulle « Nous vous répondrons bientôt. » · Les clients attendent **plus de 4 heures** · petit « moyenne de l'industrie » | Solution.tsx, Features.tsx |
| 3 | Steps | 7.0–13.0 | paper | Logo · **1 Answers in under 30 sec\*** · bot: "It's AWD with only 12 km. Want a test drive?" · **2 Books the test drive** · "Test drive booked — added to calendar" · small "\*average response time" | Logo · **1 Répond en moins de 30 s\*** · bot : « Traction intégrale, seulement 12 km. Je te réserve un essai? » · **2 Réserve l'essai routier** · « Essai routier réservé — ajouté à l'agenda » · petit « \*temps de réponse moyen » | Features.tsx (<30 sec avg), ProactiveFollowUp.tsx, Features.tsx (chat to calendar) |
| 4 | Twist | 13.0–17.0 | dark | **A typical chat sends a link.** (link chip crossed out) · **Chat360 does the search.** · browser: "A used SUV under $30,000" → filters Used · SUV · Under $30,000 → 3 SUVs (CR-V 2021 62,000 km · RAV4 2020 71,500 km · CX-5 2021 48,200 km; texture, not meant to be read) | **Le chat typique envoie un lien.** · **Chat360 fait la recherche.** · « Un VUS usagé sous 30 000 $ » → Usagé · VUS · Moins de 30 000 $ → 3 VUS (fiches au format FR : 62 000 km) | Solution.tsx (bare links), SiteTour.tsx |
| 5 | List of 3 | 17.0–23.5 | paper | **Chat360 starts the conversation.** (Civic page: "Any questions about the 2022 Honda Civic?") · **It answers by voice.** (orb, "Listening…", Jetta reply of 8 words max) · *Best part:* **Truly bilingual.** ("Check le prix s'a Civic?" → French detected · "What's the price on the Civic?" → English detected) | **Chat360 lance la conversation.** (« Des questions sur la Honda Civic 2022? ») · **Il répond de vive voix.** (orbe, « J'écoute… », réponse Jetta de 8 mots max, au *tu*) · *Mais le meilleur :* **Vraiment bilingue.** (« Check le prix s'a Civic? » → Français détecté · « What's the price on the Civic? » → Anglais détecté) | SmartGreetings.tsx, VoiceAI.tsx, Features.tsx, Solution.tsx |
| 6 | Proof | 23.5–26.0 | paper | **34%** · "of chats convert to booked appointments" · source: "Chat360 data · 50+ Canadian dealerships · 2024-2025" | **34 %** · « des conversations deviennent des rendez-vous » · source : « Données Chat360 · plus de 50 concessionnaires canadiens · 2024-2025 » | Features.tsx (EN footnote; FR page has none → faithful translation) |
| 7 | CTA | 26.0–30.0 | dark | Logo · "The full demo is inside Chat360." · **Comment DEMO** (comment box types DEMO → DM from Chat360 opens) · chat360.ca (small) | Logo · « La démo complète, c'est Chat360. » · **Commente DÉMO** (la boîte tape DÉMO → DM de Chat360 s'ouvre) · chat360.ca (petit) | LANES.md (bottom-lane CTA, word for word) |

FR typesetting for every beat: use ’ for apostrophes, and non-breaking spaces inside « », before : and before % and $.
