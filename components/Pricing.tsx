export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      tagline: "For dealers ready to capture more leads",
      features: [
        "AI chat widget",
        "Inventory search",
        "Lead capture & alerts",
        "Basic lead scoring",
        "Email support"
      ],
      bestFor: "Single-rooftop dealers wanting 24/7 coverage",
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Growth",
      tagline: "For dealers ready to transform their BDC",
      features: [
        "Everything in Starter, plus:",
        "Advanced multi-agent AI",
        "Full CRM integration",
        "SMS/text conversations",
        "Advanced lead scoring & routing",
        "Priority support"
      ],
      bestFor: "Dealers serious about conversion",
      cta: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      tagline: "For dealer groups with big ambitions",
      features: [
        "Everything in Growth, plus:",
        "Multi-rooftop deployment",
        "Custom integrations",
        "Dedicated Slack channel",
        "Custom reporting",
        "SLA guarantee"
      ],
      bestFor: "Multi-location operations",
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple Pricing. <span className="text-primary">Real Results.</span>
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
                  MOST POPULAR
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
                    <span className={feature.startsWith('Everything') ? 'font-semibold' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={`border-t ${plan.highlighted ? 'border-white/30' : 'border-gray-200'} pt-6 mb-6`}>
                <p className={`text-sm font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  Best for:
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
              No long-term contracts. Cancel anytime.
              <br />
              <span className="text-primary">ROI guaranteed or we keep working until you see it.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
