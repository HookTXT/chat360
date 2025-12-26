export default function FinalCTA() {
  return (
    <section id="demo" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 rounded-3xl px-8 py-16 md:px-16 md:py-20 overflow-hidden">
            {/* Subtle background shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-800/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center space-y-8">
              {/* Logo Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>

              {/* Headline with Inline CTA */}
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Stop Losing Leads to Silence
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                  <span className="text-3xl md:text-5xl font-bold text-white">
                    Start Closing
                  </span>
                  <a
                    href="https://calendly.com/hooktxt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-indigo-900 font-semibold text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    Book Discovery Call
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Trust Pills */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-white/90">
                  <div className="w-5 h-5 bg-indigo-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">43% Lead ratio</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <div className="w-5 h-5 bg-indigo-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">Sync with CRM</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <div className="w-5 h-5 bg-indigo-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">Custom build possible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
