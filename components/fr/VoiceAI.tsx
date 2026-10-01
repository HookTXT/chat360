export default function VoiceAI() {
  return (
    <section id="voice" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Nouveau · Chat vocal IA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Vos clients parlent.{" "}
            <span className="text-primary">Votre site répond.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-6 max-w-3xl mx-auto">
            Le premier assistant vocal IA pour concessionnaires. Vos visiteurs <em>parlent</em> à
            votre site et il leur répond de vive voix &mdash; il trouve le bon véhicule dans votre
            vrai inventaire et capture le lead. 24/7, en français et en anglais. Aucune app, aucun
            clavier, juste une conversation.
          </p>
        </div>

        {/* Main showcase — copy + orb visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — value copy */}
          <div className="space-y-6">
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v4m0-4a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Conversation mains libres</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Le visiteur clique l&apos;orbe et parle naturellement. L&apos;IA écoute, comprend et
                    répond de vive voix &mdash; puis se remet à écouter. Pas de clavier, pas de friction.
                    Parfait pour le mobile, où se trouve la majorité de votre trafic.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Branché sur VOTRE inventaire</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Pas une IA générique : l&apos;assistant vocal utilise le même cerveau que votre chat
                    texte &mdash; votre inventaire en temps réel et vos règles d&apos;affaires. Jamais de
                    prix ni de financement inventés.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Bilingue, dans la langue du client</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Le client choisit le français ou l&apos;anglais, et l&apos;IA s&apos;y tient pour toute
                    la conversation. Vos clients se font répondre dans leur langue, naturellement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — voice orb mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Gradient-bordered card, echoing the product UI */}
            <div className="relative w-full max-w-md rounded-[28px] p-[2px] bg-gradient-to-br from-fuchsia-400 via-primary-400 to-primary-800 shadow-2xl">
              <div className="rounded-[26px] bg-white p-6">
                {/* Status */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <p className="font-bold text-gray-900 text-lg">J&apos;écoute&hellip;</p>
                </div>

                <div className="flex gap-4 items-start">
                  {/* Orb */}
                  <div className="relative flex-shrink-0 w-24 h-24 flex items-center justify-center">
                    <span className="voice-pulse absolute inset-0 rounded-full bg-primary-400"></span>
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 via-primary-600 to-primary-800 flex items-center justify-center shadow-lg">
                      {/* Sound wave bars */}
                      <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none">
                        {[
                          { x: 6, h: 12 },
                          { x: 13, h: 22 },
                          { x: 20, h: 30 },
                          { x: 27, h: 22 },
                          { x: 34, h: 12 },
                        ].map((bar, i) => (
                          <rect
                            key={i}
                            className="voice-bar"
                            x={bar.x - 1.5}
                            y={20 - bar.h / 2}
                            width="3"
                            height={bar.h}
                            rx="1.5"
                            fill="white"
                          />
                        ))}
                      </svg>
                    </div>
                  </div>

                  {/* Transcript bubble */}
                  <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 max-h-40 overflow-hidden">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Parfait, tu regardes pour une Volkswagen Jetta, on en a justement deux en stock
                      en ce moment.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed mt-2">
                      2026 Volkswagen Jetta Trendline, disponible à&hellip;
                    </p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    aria-label="Pause"
                    className="w-12 h-12 rounded-full bg-primary-900 text-white flex items-center justify-center shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  </button>
                  <button
                    aria-label="Agrandir"
                    className="w-12 h-12 rounded-full border-2 border-gray-200 text-gray-500 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                  <button
                    aria-label="Fermer"
                    className="w-12 h-12 rounded-full border-2 border-gray-200 text-gray-500 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {/* Instant response */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Instantané, jamais de silence</h3>
            <p className="text-gray-600 text-sm">
              Un accueil parlé, un accusé immédiat («&nbsp;Je regarde ça pour vous&hellip;&nbsp;»)
              pendant la recherche, et une réponse qui commence à parler dès la première phrase prête.
            </p>
          </div>

          {/* Interrupt like a human */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Interrompez-le, ou dites «&nbsp;stop&nbsp;»</h3>
            <p className="text-gray-600 text-sm">
              Le client peut couper la parole simplement en parlant &mdash; l&apos;IA s&apos;arrête et
              écoute, avec filtre anti-écho intelligent. Un simple «&nbsp;stop&nbsp;» et il se tait.
            </p>
          </div>

          {/* Voice + screen */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z M8 21h8m-4-4v4" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">La voix + l&apos;écran</h3>
            <p className="text-gray-600 text-sm">
              Pendant que l&apos;IA parle, votre site ouvre la fiche du véhicule ou l&apos;inventaire
              filtré, et encadre le bloc dont elle parle. Le client entend <em>et</em> voit.
            </p>
          </div>

          {/* Relais humain */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Un conseiller prend le relais? Il l&apos;entend.</h3>
            <p className="text-gray-600 text-sm">
              Quand un humain reprend la conversation, ses réponses sont lues à voix haute. Le
              client n&apos;a pas à passer au clavier.
            </p>
          </div>

          {/* Courriel ou numéro dicté */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Courriel et numéro dictés, sans erreur</h3>
            <p className="text-gray-600 text-sm">
              «&nbsp;kevin arobase&hellip;&nbsp;» : l&apos;IA comprend le courriel ou le numéro dicté
              et l&apos;affiche à l&apos;écran pour que le client vérifie.
            </p>
          </div>

          {/* SM360 leads + dashboard */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Leads «&nbsp;Chat360 Voix&nbsp;» dans SM360</h3>
            <p className="text-gray-600 text-sm">
              Les leads du mode vocal arrivent dans SM360 identifiés «&nbsp;Chat360 Voix&nbsp;». Chaque
              conversation est aussi transcrite et sauvegardée dans votre tableau de bord.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
