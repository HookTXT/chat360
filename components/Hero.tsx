export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary-100 px-4 py-2 rounded-full">
                ✨ Powered by AI, built for Quebec dealers
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              AI That Closes Deals.{" "}
              <span className="text-primary">Not Just Chats.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Chat360 turns your website visitors into booked appointments—24/7, in real French, with full inventory intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="btn-primary text-center text-lg">
                Book Your Free Demo →
              </a>
              <a href="#features" className="btn-secondary text-center text-lg">
                See It In Action
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Trusted by Quebec dealerships</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>French-native AI</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Setup in 14 days</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-sm text-gray-700">Salut! Avez-vous un CR-V rouge automatique disponible?</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 justify-end">
                  <div className="flex-1">
                    <div className="bg-primary text-white rounded-lg p-4">
                      <p className="text-sm">Oui! J'ai trouvé 3 Honda CR-V rouges avec transmission automatique. Le modèle 2024 EX-L est disponible à partir de 42,995$. Voulez-vous planifier un essai routier?</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-pulse">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary-900">HOT LEAD DETECTED</p>
                    <p className="text-xs text-primary-700">Budget mentioned • Timeline discussed • Ready to book</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <p className="text-2xl font-bold text-primary">34%</p>
              <p className="text-xs text-gray-600">Conversion rate</p>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <p className="text-2xl font-bold text-primary">&lt;30s</p>
              <p className="text-xs text-gray-600">Response time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
