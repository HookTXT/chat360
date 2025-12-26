export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Everything Your Chat Should Do{" "}
            <span className="text-primary">(But Doesn't)</span>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Your AI Knows Your Lot</h3>
            <p className="text-gray-600 text-sm mb-6">
              Chat360 searches your entire inventory in real-time. Match customers to the exact vehicle they want.
            </p>
            {/* Decorative search result cards */}
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-xs text-gray-700">2024 Honda CR-V</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-gray-700">2023 Toyota RAV4</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span className="text-xs text-gray-700">2024 Ford Escape</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Dark - Bilingual - Larger Card */}
          <div className="bg-primary-900 rounded-3xl p-8 relative overflow-hidden lg:col-span-2">
            <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Truly Bilingual.<br />Not Google Translate.
            </h3>
            <p className="text-primary-200 mb-8 max-w-md">
              Your customers deserve better than robotic translations. Chat360 speaks naturally in both English and French—the way Canadians actually talk.
            </p>
            {/* Decorative chat bubbles */}
            <div className="flex gap-4 flex-wrap">
              <div className="bg-white/10 backdrop-blur rounded-2xl px-4 py-3 border border-white/20">
                <p className="text-white text-sm font-medium">&ldquo;Check le prix su&apos;l Civic?&rdquo;</p>
                <p className="text-primary-300 text-xs mt-1">Understood instantly</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl px-4 py-3 border border-white/20">
                <p className="text-white text-sm font-medium">&ldquo;What&apos;s the price on the Civic?&rdquo;</p>
                <p className="text-primary-300 text-xs mt-1">Same smart response</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Know Who&apos;s Ready to Buy</h3>
            <p className="text-gray-600 text-sm mb-6">
              Lead scoring based on buying signals—budget, timeline, trade-in ready. Hot leads trigger instant alerts.
            </p>
            {/* Decorative score indicator */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-500 uppercase">Lead Score</span>
                <span className="text-sm font-bold text-primary">HOT</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-emerald-400 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">92/100 - Ready to buy</p>
            </div>
          </div>

          {/* Card 4 - Dark - Appointments */}
          <div className="bg-primary-900 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">From Chat to Calendar</h3>
            <p className="text-primary-200 text-sm mb-4">
              Chat360 guides customers to book test drives and appointments. Synced. Confirmed. Done.
            </p>
            {/* Stat highlight */}
            <div className="mt-auto">
              <p className="text-4xl font-bold text-white">34%</p>
              <p className="text-primary-300 text-sm">of chats convert to booked appointments</p>
            </div>
          </div>

          {/* Card 5 - Light - 24/7 Coverage */}
          <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Never Miss Another Lead</h3>
            <p className="text-gray-600 text-sm mb-4">
              Saturday night. Sunday morning. Holiday Monday. Your AI is always on. Always responsive.
            </p>
            {/* 24/7 visual */}
            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">24/7/365</p>
                <p className="text-xs text-gray-500">Always online</p>
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
            <h3 className="text-xl font-bold text-white mb-2">Leads Where You Need Them</h3>
            <p className="text-primary-200 text-sm mb-6">
              Every conversation synced to your CRM. No copy-paste. No missed follow-ups.
            </p>
            {/* CRM logos indicator */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">Activix</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">eLeads</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">VinSolutions</span>
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">+more</span>
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
              Live in 1 Day.<br />Closing Deals by Day 1.
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              No lengthy setup. No weeks of training. Your AI goes live fast and starts converting immediately.
            </p>
            {/* Timeline visual */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                <span className="text-xs text-gray-600">Day to launch</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <span className="text-xs text-gray-600">Closing deals immediately</span>
              </div>
            </div>
          </div>

          {/* Card 8 - Dark - Effective Client Follow-ups */}
          <div className="bg-primary-900 rounded-3xl p-8 relative overflow-hidden lg:col-span-2">
            <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Effective Client Follow-ups</h3>
            <p className="text-primary-200 text-sm mb-6">
              Ensure impeccable client follow-up with 360 CRM synchronization.
            </p>
            {/* Sync visual */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Auto-synced to CRM</p>
                <p className="text-xs text-primary-300">Every interaction tracked</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom stat bar */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-6 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">40%</p>
            <p className="text-sm text-gray-600">Higher engagement</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">47%</p>
            <p className="text-sm text-gray-600">Leads captured after hours</p>
          </div>
        </div>

      </div>
    </section>
  );
}
