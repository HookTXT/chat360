"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Combien de temps prend l'installation?",
      answer: "14 jours du démarrage à la mise en ligne. Nous nous occupons de tout : intégration de l'inventaire, synchronisation CRM, entraînement de l'IA. Vous n'avez qu'à réviser et approuver."
    },
    {
      question: "Est-ce que le français est vraiment bon?",
      answer: "Français de niveau natif, pas des traductions. Nous entraînons l'IA spécifiquement sur le français québécois. Vos clients ne sauront pas qu'ils parlent à une IA."
    },
    {
      question: "Et si un client pose une question que l'IA ne peut pas gérer?",
      answer: "Escalade fluide. L'IA reconnaît quand passer le relais et alerte votre équipe avec tout le contexte de la conversation. Aucune balle échappée."
    },
    {
      question: "Comment connaît-elle mon inventaire?",
      answer: "Nous synchronisons directement avec votre flux d'inventaire. Chaque véhicule, chaque prix, chaque spécification — mis à jour en temps réel. Quand quelque chose est vendu, l'IA le sait."
    },
    {
      question: "Avec quels CRM êtes-vous compatibles?",
      answer: "Activix, eLeads, VinSolutions, DealerSocket, et plus encore. Si vous l'utilisez, on peut probablement s'y connecter."
    },
    {
      question: "Y a-t-il un contrat à long terme?",
      answer: "Non. Mois par mois. On gagne votre confiance chaque mois. Si vous n'êtes pas satisfait, vous pouvez annuler quand vous voulez."
    },
    {
      question: "Et si ça ne fonctionne pas pour nous?",
      answer: "Nous garantissons le ROI. Si vous ne voyez pas de résultats en 60 jours, nous continuons à optimiser sans frais supplémentaires jusqu'à ce que vous les voyiez."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Questions? <span className="text-primary">Réponses.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
