"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does setup take?",
      answer: "14 days from kickoff to live. We handle everything—inventory integration, CRM sync, AI training. You just review and approve."
    },
    {
      question: "Does it really speak good French?",
      answer: "Native-level French, not translations. We train the AI on Quebec French specifically. Your customers won't know they're talking to AI."
    },
    {
      question: "What if a customer asks something the AI can't handle?",
      answer: "Seamless escalation. The AI recognizes when to hand off and alerts your team with full conversation context. No dropped balls."
    },
    {
      question: "How does it know my inventory?",
      answer: "We sync directly with your inventory feed. Every vehicle, every price, every spec—updated in real-time. When something sells, the AI knows."
    },
    {
      question: "What CRMs do you integrate with?",
      answer: "Activix, eLeads, VinSolutions, DealerSocket, and more. If you use it, we can probably connect to it."
    },
    {
      question: "Is there a long-term contract?",
      answer: "No. Month-to-month. We earn your business every month. If you're not happy, you can cancel anytime."
    },
    {
      question: "What if it doesn't work for us?",
      answer: "We guarantee ROI. If you don't see results in 60 days, we keep optimizing at no extra cost until you do."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Questions? <span className="text-primary">Answers.</span>
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
