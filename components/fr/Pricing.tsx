export default function Pricing() {
  const plans = [
    {
      name: "Démarrage",
      tagline: "Pour les concessionnaires prêts à capturer plus de prospects",
      features: [
        "Widget de chat IA",
        "Recherche d'inventaire",
        "Capture de prospects et alertes",
        "Score de prospect basique",
        "Support par courriel"
      ],
      bestFor: "Concessionnaires mono-site voulant une couverture 24/7",
      cta: "Commencer",
      highlighted: false
    },
    {
      name: "Croissance",
      tagline: "Pour les concessionnaires prêts à transformer leur BDC",
      features: [
        "Tout dans Démarrage, plus :",
        "IA multi-agent avancée",
        "Intégration CRM complète",
        "Conversations SMS/texto",
        "Score et routage avancés des prospects",
        "Support prioritaire"
      ],
      bestFor: "Concessionnaires sérieux sur la conversion",
      cta: "Commencer",
      highlighted: true
    },
    {
      name: "Entreprise",
      tagline: "Pour les groupes de concessionnaires ambitieux",
      features: [
        "Tout dans Croissance, plus :",
        "Déploiement multi-sites",
        "Intégrations personnalisées",
        "Canal Slack dédié",
        "Rapports personnalisés",
        "Garantie SLA"
      ],
      bestFor: "Opérations multi-sites",
      cta: "Contacter les ventes",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tarification simple. <span className="text-primary">Résultats réels.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-primary text-white shadow-2xl scale-105 border-4 border-primary'
                  : 'bg-white border-2 border-gray-200 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-white text-primary text-sm font-bold px-4 py-2 rounded-full mb-4">
                  LE PLUS POPULAIRE
                </div>
              )}

              <h3 className={`text-3xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-8 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                {plan.tagline}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className={`w-6 h-6 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-primary'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={feature.startsWith('Tout') ? 'font-semibold' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`border-t ${plan.highlighted ? 'border-white/30' : 'border-gray-200'} pt-6 mb-6`}>
                <p className={`text-sm font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  Idéal pour :
                </p>
                <p className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.bestFor}
                </p>
              </div>

              <a
                href="#demo"
                className={`block text-center font-semibold px-6 py-4 rounded-lg transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100 shadow-lg'
                    : 'bg-primary text-white hover:bg-primary-800'
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-primary">
            <p className="text-lg font-semibold text-gray-900">
              Pas de contrat à long terme. Annulez quand vous voulez.
              <br />
              <span className="text-primary">ROI garanti ou on continue de travailler jusqu&apos;à ce que vous l&apos;obteniez.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
