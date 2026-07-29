export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Tout ce que votre chat devrait faire{" "}
            <span className="text-primary">(mais ne fait pas)</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 - Light - Real Inventory Intelligence */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Votre IA connaît votre inventaire</h3>
            <p className="text-gray-600 text-sm mb-6">
              Chat360 recherche dans tout votre inventaire en temps réel. Associez les clients au véhicule exact qu&apos;ils recherchent.
            </p>
            {/* Decorative search result cards */}
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-xs text-gray-700">Honda CR-V 2024</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-gray-700">Toyota RAV4 2023</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-xs text-gray-700">Ford Escape 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Dark - Multilingual - Larger Card */}
          <div className="bg-primary-900 rounded-3xl p-8 relative overflow-hidden lg:col-span-2">
            <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Détection intelligente des langues.<br />Pas Google Translate.
            </h3>
            <p className="text-primary-200 mb-8 max-w-md">
              Chat360 détecte automatiquement la langue de votre client et répond naturellement. Français, anglais, mandarin, espagnol et plus — votre IA s&apos;adapte instantanément pour servir chaque client.
            </p>
            {/* Decorative chat bubbles */}
            <div className="flex gap-4 flex-wrap">
              <div className="bg-white/10 backdrop-blur rounded-2xl px-4 py-3 border border-white/20">
                <p className="text-white text-sm font-medium">&ldquo;Check le prix su&apos;l Civic?&rdquo;</p>
                <p className="text-primary-300 text-xs mt-1">Français détecté</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl px-4 py-3 border border-white/20">
                <p className="text-white text-sm font-medium">&ldquo;What&apos;s the price on the Civic?&rdquo;</p>
                <p className="text-primary-300 text-xs mt-1">Anglais détecté</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl px-4 py-3 border border-white/20">
                <p className="text-white text-sm font-medium">&ldquo;Civic 多少钱？&rdquo;</p>
                <p className="text-primary-300 text-xs mt-1">Mandarin détecté</p>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary-800 rounded-full opacity-50"></div>
            <div className="absolute right-20 bottom-20 w-32 h-32 bg-primary-700 rounded-full opacity-30"></div>
          </div>

          {/* Card 3 - Light - Lead Scoring */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Identifiez qui est prêt à acheter</h3>
            <p className="text-gray-600 text-sm mb-6">
              Score des prospects basé sur les signaux d&apos;achat — budget, délai, échange prêt. Les prospects chauds déclenchent des alertes instantanées.
            </p>
            {/* Decorative score indicator */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-500 uppercase">Score du prospect</span>
                <span className="text-sm font-bold text-primary">CHAUD</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-emerald-400 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">92/100 - Prêt à acheter</p>
            </div>
          </div>

          {/* Card 4 - Dark - Appointments */}
          <div className="bg-primary-900 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Du chat au calendrier</h3>
            <p className="text-primary-200 text-sm mb-4">
              Chat360 guide les clients pour réserver des essais routiers et des rendez-vous. Synchronisé. Confirmé. Fait.
            </p>
            {/* Stat highlight */}
            <div className="mt-auto">
              <p className="text-4xl font-bold text-white">34%</p>
              <p className="text-primary-300 text-sm">des chats convertis en rendez-vous</p>
            </div>
          </div>

          {/* Card 5 - Light - 24/7 Coverage */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ne manquez plus jamais un prospect</h3>
            <p className="text-gray-600 text-sm mb-4">
              Samedi soir. Dimanche matin. Lundi férié. Votre IA est toujours active. Toujours réactive.
            </p>
            {/* 24/7 visual */}
            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">24/7/365</p>
                <p className="text-xs text-gray-500">Toujours en ligne</p>
              </div>
            </div>
          </div>

          {/* Card 6 - Dark - CRM Integration */}
          <div className="bg-primary-900 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Prospects là où vous en avez besoin</h3>
            <p className="text-primary-200 text-sm mb-6">
              Chaque conversation synchronisée avec votre CRM. Pas de copier-coller. Pas de suivis manqués.
            </p>
            {/* CRM logos indicator */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">Activix</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">eLeads</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">VinSolutions</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">+autres</span>
            </div>
          </div>

          {/* Card 7 - Light - Fast Deployment */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              En ligne en 1 jour.<br />Ventes conclues dès le jour 1.
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Pas de configuration longue. Pas de semaines de formation. Votre IA est opérationnelle rapidement et convertit immédiatement.
            </p>
            {/* Timeline visual */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                <span className="text-xs text-gray-600">Jour de lancement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <span className="text-xs text-gray-600">Ventes conclues immédiatement</span>
              </div>
            </div>
          </div>

          {/* Card 8 - Light - Brand Customization */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Votre marque, votre style</h3>
            <p className="text-gray-600 text-sm mb-6">
              Personnalisez l&apos;apparence du chat pour correspondre parfaitement à l&apos;identité de votre concession.
            </p>
            {/* Customization visual */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                </div>
                <span className="text-xs text-gray-600">Couleurs de marque</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">Logo personnalisé</span>
              </div>
            </div>
          </div>

          {/* Card 9 - Dark - Effective Client Follow-ups */}
          <div className="bg-primary-900 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Suivis clients efficaces</h3>
            <p className="text-primary-200 text-sm mb-6">
              Assurez un suivi client impeccable avec la synchronisation CRM 360.
            </p>
            {/* Sync visual */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Synchronisation CRM auto</p>
                <p className="text-xs text-primary-300">Chaque interaction suivie</p>
              </div>
            </div>
          </div>

          {/* Card 10 - Light - GA4 & Shift Digital Compliance */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Conforme aux normes OEM</h3>
            <p className="text-gray-600 text-sm mb-6">
              Conçu pour répondre aux standards des manufacturiers. Conforme GA4 et Shift Digital dès le départ.
            </p>
            {/* Compliance badges */}
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Conforme GA4</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Certifié Shift Digital</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 11 - Light - Human Takeover */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Prise de contrôle humaine</h3>
            <p className="text-gray-600 text-sm mb-6">
              Rejoignez n&apos;importe quelle conversation quand vous le souhaitez. Prenez le contrôle d&apos;un chat en un clic lorsqu&apos;une touche humaine est nécessaire.
            </p>
            {/* Takeover visual */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600">Chat en cours</span>
                </div>
                <button className="bg-primary text-white text-xs px-3 py-1.5 rounded-lg font-medium">
                  Prendre le contrôle
                </button>
              </div>
              <p className="text-xs text-gray-500">Passez facilement de l&apos;IA à l&apos;humain</p>
            </div>
          </div>

          {/* Card 12 - Dark - Dashboard - Larger Card */}
          <div className="bg-primary-900 rounded-3xl p-8 relative overflow-hidden lg:col-span-2">
            <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Votre centre de commande.<br />Contrôle total.
            </h3>
            <p className="text-primary-200 mb-8 max-w-md">
              Analysez les conversations, consultez les rapports, prenez le contrôle des chats et améliorez continuellement votre IA. Tout ce dont votre équipe a besoin pour construire la meilleure IA pour votre entreprise.
            </p>
            {/* Dashboard features */}
            <div className="flex gap-4 flex-wrap">
              <div className="bg-white/10 backdrop-blur rounded-2xl px-4 py-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-white text-sm font-medium">Analytiques</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl px-4 py-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-white text-sm font-medium">Rapports</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl px-4 py-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-white text-sm font-medium">Prise de contrôle</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl px-4 py-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <span className="text-white text-sm font-medium">Entraînement IA</span>
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary-800 rounded-full opacity-50"></div>
            <div className="absolute right-20 bottom-20 w-32 h-32 bg-primary-700 rounded-full opacity-30"></div>
          </div>

          {/* Card 13 - Light - AI Tone & Approach */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ajustez votre IA</h3>
            <p className="text-gray-600 text-sm mb-6">
              Ajustez le ton et l&apos;approche de l&apos;IA selon le score du prospect. Les prospects chauds reçoivent de l&apos;urgence, les curieux reçoivent du nurturing.
            </p>
            {/* Tone adjustment visual */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Convivialité</span>
                  <span className="text-xs font-medium text-primary">Élevé</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Urgence</span>
                  <span className="text-xs font-medium text-amber-600">Moyen</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Niveau de détail</span>
                  <span className="text-xs font-medium text-emerald-600">Équilibré</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 14 - Dark - Cartes véhicules dynamiques - Pleine largeur */}
          <div className="bg-primary-900 rounded-3xl p-8 relative overflow-hidden md:col-span-2 lg:col-span-3">
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex-1">
                <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Des cartes véhicules dynamiques.<br />Pas de simples liens.
                </h3>
                <p className="text-primary-200 mb-6 max-w-md">
                  Chat360 n&apos;envoie jamais un simple lien à cliquer. Il partage des cartes véhicules
                  riches et interactives directement dans la conversation—avec de vraies photos tirées en
                  temps réel de votre inventaire, un carrousel d&apos;images, les détails clés et un bouton
                  pour voir la voiture en un clic.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">Photos d&apos;inventaire en direct</span>
                  <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">Carrousel d&apos;images</span>
                  <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">Un clic vers la fiche véhicule</span>
                </div>
              </div>
              {/* Maquette de carte véhicule (comme dans la démo) */}
              <div className="w-full max-w-xs mx-auto md:mx-0">
                <div className="bg-white rounded-2xl p-3 shadow-xl">
                  <div className="relative bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl h-40 flex items-center justify-center overflow-hidden">
                    {/* Silhouette de voiture */}
                    <svg className="w-28 h-28 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                    </svg>
                    {/* Badge ouvrir */}
                    <div className="absolute top-2 right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H9m8 0v8" />
                      </svg>
                    </div>
                    {/* Flèches du carrousel */}
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="px-1 pt-3 pb-1">
                    <div className="inline-flex items-center gap-1.5 bg-gray-100 rounded-full px-3 py-1 mb-2">
                      <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span className="text-xs text-gray-600 font-medium">votreconcession.ca</span>
                    </div>
                    <p className="text-base font-bold text-gray-900">2027 Honda HR-V SPORT</p>
                    <p className="text-xs text-gray-500 mb-3">12 km</p>
                    <div className="bg-gray-900 text-white text-sm font-medium rounded-xl py-2.5 flex items-center justify-center gap-1.5">
                      Voir la voiture
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H9m8 0v8" />
                      </svg>
                    </div>
                    {/* Points de pagination */}
                    <div className="flex items-center justify-center gap-1.5 mt-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                      <div className="w-5 h-1.5 rounded-full bg-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Décoration d'arrière-plan */}
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-primary-800 rounded-full opacity-50"></div>
          </div>

          {/* Carte 15 - Claire - Accueils intelligents - Pleine largeur */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden md:col-span-2 lg:col-span-3">
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="flex-1">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Accueils intelligents.<br />La bonne approche sur chaque page.
                </h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Votre chat lit la page et adapte son approche. Sur une fiche véhicule, il nomme le
                  véhicule et propose l&apos;essai routier. Sur la page service, il offre un
                  rendez-vous. À un visiteur qui revient, il dit &laquo; Content de vous revoir
                  &raquo;. Chaque message est testé en continu pour garder ce qui convertit.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">Lit chaque page</span>
                  <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">Se souvient des visiteurs</span>
                  <span className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200">Testé en continu</span>
                </div>
              </div>
              {/* Maquette d'accueil contextuel (comme dans la démo) */}
              <div className="w-full max-w-xs mx-auto md:mx-0">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                    <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500 border border-gray-200 truncate">
                      votreconcession.ca/jeep-compass-2022
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                        C
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Le Jeep Compass 2022 vous plaît?
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2.5">
                          <span className="bg-primary text-white text-xs px-3 py-1.5 rounded-full font-medium">
                            Essai routier
                          </span>
                          <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                            Poser une question
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom stat bar */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-gray-300">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">34%</p>
            <p className="text-sm text-gray-600">Taux de conversion chat-vers-rendez-vous</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">&lt;30 sec</p>
            <p className="text-sm text-gray-600 mb-1">Temps de réponse moyen</p>
            <p className="text-xs text-gray-500">(vs. 4+ heures en moyenne dans l&apos;industrie)</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">47%</p>
            <p className="text-sm text-gray-600">Prospects capturés hors heures d&apos;ouverture</p>
          </div>
        </div>

      </div>
    </section>
  );
}
