export default function HowItWorks() {
  const steps = [
    {
      days: "Days 1-2",
      title: "Discovery",
      description: "We audit your current lead flow. What's working, what's leaking, what your team actually needs. We map your inventory feed and CRM setup.",
      deliverable: "Custom implementation plan"
    },
    {
      days: "Days 3-10",
      title: "Build",
      description: "Your Chat360 system takes shape. Trained on your inventory. Tuned to your brand voice. Integrated with your tools. We handle everything.",
      deliverable: "Fully configured AI ready for launch"
    },
    {
      days: "Days 11-14",
      title: "Launch & Optimize",
      description: "We go live. Monitor every conversation. Tune responses based on real interactions. You're closing deals by day one.",
      deliverable: "Live system + ongoing optimization"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Live in <span className="text-primary">1 Day</span>.
            <br />
            Closing Deals by Day 1.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 -translate-y-1/2 -z-10" />

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                    <div className="inline-block bg-primary-100 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
                      {step.days}
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>

                    <div className="bg-primary-50 border-l-4 border-primary rounded p-4">
                      <p className="text-sm font-semibold text-primary-900">
                        <span className="text-primary">Deliverable:</span> {step.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
