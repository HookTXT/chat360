export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Your AI Knows Your Lot",
      subtitle: "Real Inventory Intelligence",
      description: "Chat360 doesn't just answer questions—it searches your entire inventory in real-time. When a customer asks \"Avez-vous un CR-V rouge automatique?\", your AI finds the exact matches, shows specs, and asks the right follow-up questions.",
      proof: "Vector search across 400+ vehicles. Match in under 2 seconds."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Du vrai français. Pas du Google Translate.",
      subtitle: "French That Sounds Human",
      description: "Your customers deserve better than robotic translations. Chat360 speaks the way Quebecers actually talk. Natural. Conversational. Real.\n\n\"Check le prix su'l Civic?\" → Your AI gets it.",
      proof: "40% higher engagement with French-native responses."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Know Who's Ready to Buy",
      subtitle: "Lead Scoring That Works",
      description: "Not all leads are equal. Chat360 scores every conversation based on buying signals—budget mentioned, timeline discussed, trade-in ready. Hot leads trigger instant alerts. Your salespeople talk to buyers, not browsers.",
      proof: "Qualified leads delivered with context, not just contact info."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "From Chat to Calendar",
      subtitle: "Appointments Booked Automatically",
      description: "The goal isn't conversation—it's conversion. Chat360 guides customers to book test drives, service appointments, or sales consultations. Synced with your calendar. Confirmation sent. Done.",
      proof: "34% of qualified chats convert to booked appointments."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Never Miss Another Lead",
      subtitle: "24/7/365 Coverage",
      description: "Saturday night at 11pm. Sunday morning. Holiday Monday. Your AI is always on. Always responsive. Always selling.",
      proof: "47% of leads captured outside business hours."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Leads Where You Need Them",
      subtitle: "CRM Integration",
      description: "Every conversation, every lead, every appointment—automatically synced to your CRM. No copy-paste. No missed follow-ups. Activix, eLeads, VinSolutions, and more.",
      proof: "2-way sync keeps your team in the loop."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything Your Chat Should Do{" "}
            <span className="text-gray-400">(But Doesn't)</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm font-semibold text-primary mb-4">{feature.subtitle}</p>
              <p className="text-gray-600 mb-6 whitespace-pre-line">{feature.description}</p>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-primary-900">{feature.proof}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
