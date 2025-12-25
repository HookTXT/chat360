export default function UseCases() {
  const useCases = [
    {
      title: "The After-Hours Buyer",
      time: "10:47 PM, Tuesday",
      scenario: "Customer browses your used CR-V inventory. Has questions about financing.",
      without: "Form submission. Maybe they hear back tomorrow. Probably already talking to another dealer.",
      with: "AI engages immediately. Answers financing questions. Shows 3 matching vehicles. Books a test drive for Thursday at 6pm. Lead scored as HOT. Salesperson alerted."
    },
    {
      title: "The Tire Kicker vs. Ready Buyer",
      scenario: "Your BDC wastes hours on people \"just looking.\"",
      without: "Every lead treated the same. Salespeople frustrated. Hot buyers wait behind browsers.",
      with: "AI asks qualifying questions naturally. Scores intent in real-time. Hot leads get instant alerts. Warm leads get nurtured automatically. Your team focuses on closers."
    },
    {
      title: "The French-First Customer",
      scenario: "Customer asks: \"Coudon, le Pilot 2024, c'est quoi le prix avec les taxes?\"",
      without: "Robotic response. Customer feels like they're talking to a machine. Engagement drops.",
      with: "Natural French response with exact pricing, tax included, and available colors. Customer feels understood. Conversation continues. Appointment booked."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for How Dealers <span className="text-primary">Actually Sell</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border-2 border-gray-100 hover:border-primary transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                  {useCase.time && (
                    <p className="text-sm text-gray-500 italic">{useCase.time}</p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700">{useCase.scenario}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <h4 className="font-bold text-red-900">Without Chat360</h4>
                    </div>
                    <p className="text-gray-700">{useCase.without}</p>
                  </div>

                  <div className="bg-primary-50 border-l-4 border-primary rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h4 className="font-bold text-primary-900">With Chat360</h4>
                    </div>
                    <p className="text-gray-700">{useCase.with}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
