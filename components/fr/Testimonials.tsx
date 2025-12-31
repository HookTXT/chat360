export default function Testimonials() {
  const testimonials = [
    {
      quote: "On perdait des prospects chaque soir et fin de semaine. Maintenant, l'IA répond en 30 secondes, peu importe l'heure. Le mois dernier, on a eu 12 ventes qui ont commencé par le chat.",
      author: "Directeur des ventes",
      company: "Honda Terrebonne"
    },
    {
      quote: "Le français est parfait. Les clients pensent qu'ils parlent à une vraie personne. Et quand c'est un prospect chaud, je reçois l'alerte directement sur mon téléphone.",
      author: "Propriétaire",
      company: "Arnold GM"
    },
    {
      quote: "On a essayé d'autres solutions. Trop cher, trop compliqué, mauvais français. Chat360, c'est exactement ce qu'il nous fallait. Installation en 2 semaines, ROI en 30 jours.",
      author: "Directeur général",
      company: "Concessionnaire indépendant"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ce que disent les concessionnaires
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border-2 border-gray-100"
            >
              <div className="mb-6">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                « {testimonial.quote} »
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="font-semibold text-gray-900">— {testimonial.author}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
