# Script — stage 4 (on-screen only: no voice, no face)

Motion-graphics ad, 30.0 s, 1080×1920, 30 fps, 120 BPM grid. Every line is **on-screen text**; chat bubbles are illustrative UI copied from the site's own mocks (`components/`). Skill rules that only apply to a voice (105–125 spoken words, money as words) don't apply here.

Status: **v1 — awaiting cold read**.

| # | Beat | Time | Tone | EN on screen | FR on screen | Source |
|---|---|---|---|---|---|---|
| 1 | Hook | 0.0–4.0 | dark | Visitor bubble: **"Quick, AI, sell me this car."** on a vehicle page (2027 Honda HR-V SPORT), night, "Closed" | Bulle visiteur : **« Vite, l'IA, vends-moi cette auto. »** sur une fiche (Honda HR-V SPORT 2027), nuit, « Fermé » | hook.md |
| 2 | Problem | 4.0–7.0 | dark | Tag "Typical chat" · bubble "Someone will get back to you." · **4+ hours** · "industry average reply" | Tag « Chat typique » · bulle « Nous vous répondrons bientôt. » · **4+ heures** · « en moyenne dans l'industrie » | Solution.tsx, Features.tsx |
| 3 | Steps | 7.0–13.0 | paper | Logo · **1 Answers in < 30 sec** · bot: "Did you know this 2027 HR-V SPORT is all-wheel drive with only 12 km on the odometer? Want me to reserve it for a test drive?" · **2 Books the test drive** · "Test drive booked — Synced. Confirmed." | Logo · **1 Répond en < 30 sec** · bot : « Savais-tu que ce HR-V SPORT 2027 est à traction intégrale avec seulement 12 km au compteur? Tu veux que je te le réserve pour un essai? » · **2 Réserve l'essai routier** · « Essai routier réservé — Synchronisé. Confirmé. » | Features.tsx (<30 sec avg), ProactiveFollowUp.tsx, Features.tsx (chat to calendar) |
| 4 | Twist | 13.0–17.0 | dark | **Other chats send a link.** (link chip crossed out) · **Chat360 opens the page.** · browser: "A used SUV under $30,000" → filters Used · SUV · Under $30,000 · AWD → 3 SUVs (CR-V 2021 62,000 km · RAV4 2020 71,500 km · CX-5 2021 48,200 km) · "3 SUVs match." | **Les autres chats envoient un lien.** · **Chat360 ouvre la page.** · « Un VUS usagé sous 30 000 $ » → Usagé · VUS · Moins de 30 000 $ · Intégrale → 3 VUS · « 3 VUS correspondent. » | Solution.tsx (bare links), SiteTour.tsx |
| 5 | List of 3 | 17.0–23.5 | paper | **It speaks first.** (Civic page: "Any questions about the 2022 Honda Civic?") · **It answers out loud.** (orb, "Listening…", Jetta reply) · *But here's the best part:* **Truly bilingual.** ("Check le prix su'l Civic?" → French detected · "What's the price on the Civic?" → English detected) | **Il parle en premier.** (« Des questions sur la Honda Civic 2022? ») · **Il répond de vive voix.** (orbe, « J'écoute… », réponse Jetta) · *Mais le meilleur :* **Vraiment bilingue.** (« Check le prix su'l Civic? » → Français détecté · « What's the price on the Civic? » → Anglais détecté) | SmartGreetings.tsx, VoiceAI.tsx, Features.tsx, Solution.tsx |
| 6 | Proof | 23.5–26.0 | paper | **34%** · "of chats convert to booked appointments" · source: "Aggregated data from 50+ Canadian dealerships using Chat360 (2024-2025)" | **34%** · « des chats convertis en rendez-vous » · source : « Données agrégées de 50+ concessionnaires canadiens utilisant Chat360 (2024-2025) » | Features.tsx (EN footnote; FR page has none → faithful translation) |
| 7 | CTA | 26.0–30.0 | dark | Logo · "The full demo is inside Chat360." · **Comment DEMO** (comment box types DEMO) · chat360.ca | Logo · « La démo complète, c'est Chat360. » · **Commente DÉMO** · chat360.ca | LANES.md (bottom-lane CTA, word for word) |

## Tone split

Dark 0–7, 13–17, 26–30 = 15 s · Paper 7–13, 17–26 = 15 s → 50 / 50. Hook and ending dark. Flips only on hard cuts at idea changes.
