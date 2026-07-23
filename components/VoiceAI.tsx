export default function VoiceAI() {
  return (
    <section id="voice" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">New · Voice AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Your Customers Talk.{" "}
            <span className="text-primary">Your Website Answers.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-6 max-w-3xl mx-auto">
            The first voice AI assistant for dealerships. Your visitors <em>speak</em> to your
            website and it answers out loud &mdash; finding the right vehicle in your real inventory
            and capturing the lead. 24/7, in English and French. No app, no keyboard, just a
            conversation.
          </p>
        </div>

        {/* Main showcase — copy + orb visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — value copy */}
          <div className="space-y-6">
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v4m0-4a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Hands-free conversation</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Your visitor taps the orb and speaks naturally. The AI listens, understands and
                    replies out loud &mdash; then listens again. No typing, zero friction. Perfect for
                    mobile, where most of your traffic lives.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Wired to YOUR inventory</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Not a generic AI: the voice assistant uses the same engine as your text chat &mdash;
                    your real-time inventory and your business rules. It never invents prices or
                    financing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Bilingual, local accent</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    French on your French pages, English on your English pages &mdash; automatically.
                    Your customers get answers in their own language, naturally.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://calendly.com/hooktxt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-medium hover:bg-primary-700 transition-colors text-base"
            >
              See it live in a demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* Right — voice orb mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Gradient-bordered card, echoing the product UI */}
            <div className="relative w-full max-w-md rounded-[28px] p-[2px] bg-gradient-to-br from-fuchsia-400 via-primary-400 to-primary-800 shadow-2xl">
              <div className="rounded-[26px] bg-white p-6">
                {/* Status */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <p className="font-bold text-gray-900 text-lg">Listening&hellip;</p>
                </div>

                <div className="flex gap-4 items-start">
                  {/* Orb */}
                  <div className="relative flex-shrink-0 w-24 h-24 flex items-center justify-center">
                    <span className="voice-pulse absolute inset-0 rounded-full bg-primary-400"></span>
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 via-primary-600 to-primary-800 flex items-center justify-center shadow-lg">
                      {/* Sound wave bars */}
                      <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none">
                        {[
                          { x: 6, h: 12 },
                          { x: 13, h: 22 },
                          { x: 20, h: 30 },
                          { x: 27, h: 22 },
                          { x: 34, h: 12 },
                        ].map((bar, i) => (
                          <rect
                            key={i}
                            className="voice-bar"
                            x={bar.x - 1.5}
                            y={20 - bar.h / 2}
                            width="3"
                            height={bar.h}
                            rx="1.5"
                            fill="white"
                          />
                        ))}
                      </svg>
                    </div>
                  </div>

                  {/* Transcript bubble */}
                  <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3 max-h-40 overflow-hidden">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Perfect, you&apos;re looking for a Volkswagen Jetta &mdash; we happen to have two in
                      stock right now.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed mt-2">
                      2026 Volkswagen Jetta Trendline, available at&hellip;
                    </p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    aria-label="Pause"
                    className="w-12 h-12 rounded-full bg-primary-900 text-white flex items-center justify-center shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  </button>
                  <button
                    aria-label="Expand"
                    className="w-12 h-12 rounded-full border-2 border-gray-200 text-gray-500 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                  <button
                    aria-label="Close"
                    className="w-12 h-12 rounded-full border-2 border-gray-200 text-gray-500 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {/* Instant response */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Instant, never dead air</h3>
            <p className="text-gray-600 text-sm">
              A spoken welcome, an immediate &ldquo;let me check that for you&rdquo; while it searches, and
              a reply that starts talking the moment the first sentence is ready.
            </p>
          </div>

          {/* Interrupt like a human */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Interrupt it, like a human</h3>
            <p className="text-gray-600 text-sm">
              The customer can cut in just by speaking &mdash; the AI stops and listens, with smart
              echo cancellation. A conversation, not a monologue.
            </p>
          </div>

          {/* Voice + screen */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z M8 21h8m-4-4v4" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Voice + the screen</h3>
            <p className="text-gray-600 text-sm">
              While the AI speaks, vehicle cards, links and photos appear on screen &mdash; clickable.
              The customer hears <em>and</em> sees.
            </p>
          </div>

          {/* Dashboard */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">All in your dashboard</h3>
            <p className="text-gray-600 text-sm">
              Every voice conversation is transcribed, saved and tagged &ldquo;Voice chat&rdquo; &mdash;
              filterable and lead-scored, just like your text chats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
