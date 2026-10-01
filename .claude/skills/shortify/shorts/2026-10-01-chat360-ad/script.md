# Script — stage 4 (on-screen only: no voice, no face)

Motion-graphics ad, 30.0 s, 1080×1920, 30 fps, 120 BPM grid. Every line is **on-screen text**; chat bubbles are illustrative UI in the site's style. Skill rules that only apply to a voice (105–125 spoken words, money as words) don't apply here.

Status: **v1.3 — locked for render** (QA round 2: bilingual pair now asks what the bot answers; DM says what it delivers) (v1 → cold read `cold-read.md` → v1.1 → Kevin: third-party sources + his 41% → v1.2). Copy of record: `studio/src/shorts/chat360-ad/copy.json`.

| # | Beat | Time | Tone | EN on screen | FR on screen | Source |
|---|---|---|---|---|---|---|
| 1 | Hook | 0.0–4.0 | dark | Visitor bubble **"Quick, AI, sell me this car."** on a vehicle page at night, "CLOSED" | **« Vite, l’IA, vends-moi cette auto. »**, « FERMÉ » | hook.md (270× outlier) |
| 2 | Problem | 4.0–7.0 | dark | "Typical chat" · "Someone will get back to you." · **Only 51%** of complex questions get an answer within 24 hours | « Chat typique » · « Nous vous répondrons bientôt. » · **Seulement 51 %** des questions complexes obtiennent une réponse en 24 heures | Pied Piper PSI ILE Auto Industry Study, Feb. 2026 (3,290 U.S. dealer websites) — on screen |
| 3 | Steps | 7.0–13.0 | paper | Logo · **1 Answers right away, 24/7** · bot: "It’s AWD with only 12 km. Want a test drive?" · vehicle card · **2 Books the test drive** · "Test drive booked — Added to calendar" | Logo · **1 Répond tout de suite, 24/7** · « Traction intégrale, seulement 12 km. Je te réserve un essai? » · **2 Réserve l’essai routier** · « Essai routier réservé — Ajouté à l’agenda » | product behaviour (site); no number |
| 4 | Twist | 13.0–17.0 | dark | **A typical chat sends a link.** (struck) · **Chat360 does the search.** · "A used SUV under $30,000" → URL search types → Used · SUV · Under $30,000 → 3 SUVs, first highlighted | **Le chat typique envoie un lien.** · **Chat360 fait la recherche.** · « Un VUS usagé sous 30 000 $ » → Usagé · VUS · Moins de 30 000 $ | SiteTour.tsx (Cowork) |
| 5 | List of 3 | 17.0–23.0 | paper | **Chat360… speaks first.** (Civic page greets) · **answers by voice.** ("Do you have the Civic in stock?" → Speaking… "Yes — two Civics in stock right now.") · *Best part:* **is truly bilingual.** (« La Civic, est-tu encore dispo? » → « Oui! Je t’ouvre sa fiche. » · "Is the Civic still available?" → "Yes! Opening its page now.") | **Chat360… parle en premier.** · **répond de vive voix.** (« Avez-vous la Civic en stock? » → Je réponds… « Oui, on a deux Civic en stock en ce moment. ») · *Mais le meilleur :* **est vraiment bilingue.** | SmartGreetings.tsx, VoiceAI.tsx, Features.tsx |
| 6 | Proof | 23.0–25.0 | paper | **41%** of chats turned into leads · "Chat360 data · September 2026" | **41 %** des conversations sont devenues des prospects · « Données Chat360 · septembre 2026 » | Kevin, 2026-10-01 (first-party) |
| 7 | CTA | 25.0–30.0 | dark | Logo · "The full demo is inside Chat360." · **Comment DEMO** · comment box types DEMO → DM "Pick a time for your demo." [Book my demo] | « La démo complète, c’est Chat360. » · **Commente DÉMO** → DM « Choisis l’heure de ta démo. » [Réserver ma démo] | LANES.md (bottom-lane CTA, word for word) |

## Tone split

Dark 0–7, 13–17, 25–30 = 16 s · Paper 7–13, 17–25 = 14 s → 53 / 47. Hook and ending dark. Flips only on hard cuts at idea changes.

## Cold-read fixes applied (v1.1)

Accuracy ("on average" → claim dropped with the self-sourced number), problem stated as a problem, bot reply 26 → 10 words, "3 SUVs match" cut, "does the search", "A typical chat" (no claim about every competitor), AWD chip dropped, list given a subject ("Chat360…"), "answers by voice", "Best part:", "added to calendar", Civic kept through the list, FR typesetting (no-break spaces, ’). Kept as the site writes it: « su’l Civic ».
