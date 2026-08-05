export default function SmartGreetings() {
  return (
    <section id="smart-greetings" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">New · Smart Greetings</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            A Different Welcome on Every Page.{" "}
            <span className="text-primary">Like a Great Salesperson on the Showroom Floor.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-6 max-w-3xl mx-auto">
            A visitor on a 2022 Civic listing doesn&apos;t have the same intent as a visitor on your
            financing page. Why show them the same message? Chat360 reads the page and adapts its
            approach&mdash;so every greeting feels like it was written for that exact moment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — how it adapts, point by point */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">It recognizes the vehicle</h3>
                <p className="text-gray-600 text-sm mt-1">
                  &ldquo;Any questions about the 2022 Honda Civic?&rdquo; with a Test Drive button
                  that starts the request in one click.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">It adapts to every section</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Service &rarr; &ldquo;I can book your appointment in under a minute.&rdquo;
                  Trade-in &rarr; &ldquo;Curious what your vehicle is worth?&rdquo; Financing,
                  offers, inventory: every page gets its own approach.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">It remembers visitors</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Someone comes back three days later? &ldquo;Welcome back&mdash;still interested in
                  the Civic?&rdquo;
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">It re-engages at the right moment</h3>
                <p className="text-gray-600 text-sm mt-1">
                  A visitor reading a vehicle page for 35 seconds gets a targeted invitation. Someone
                  bouncing between three Civics? Chat360 offers to compare them side by
                  side&mdash;once, never pushy.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary-900 rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">It improves on its own</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Multiple phrasings rotate and every conversation is attributed to the message that
                  started it: you keep what converts.
                </p>
              </div>
            </div>

            {/* Bilingual note */}
            <div className="flex items-center gap-3 bg-primary-50 border border-primary-100 rounded-2xl p-4">
              <svg className="w-6 h-6 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Bilingual French-English, automatic, zero configuration:</span>{" "}
                the widget follows each page&apos;s language and content.
              </p>
            </div>
          </div>

          {/* Right — greeting mockups per page context */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md space-y-5">
              {/* Vehicle page greeting */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500 border border-gray-200 truncate">
                    yourdealership.ca/2022-honda-civic
                  </div>
                  <span className="text-[10px] text-primary bg-primary-50 border border-primary-100 rounded-full px-2 py-0.5 font-medium whitespace-nowrap">
                    Vehicle page
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      C
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Any questions about the 2022 Honda Civic?
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        <span className="bg-primary text-white text-xs px-3 py-1.5 rounded-full font-medium">
                          Test Drive
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                          Ask a question
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hesitation teaser — comparing several of the same model */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden lg:-translate-x-8">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500 border border-gray-200 truncate">
                    yourdealership.ca/2023-honda-civic-touring
                  </div>
                  <span className="text-[10px] text-primary bg-primary-50 border border-primary-100 rounded-full px-2 py-0.5 font-medium whitespace-nowrap">
                    3rd Civic viewed
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      C
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Hesitating between Civics? I can compare trims, mileage and price side by
                        side.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        <span className="bg-primary text-white text-xs px-3 py-1.5 rounded-full font-medium">
                          Compare them
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                          Keep browsing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service page greeting */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500 border border-gray-200 truncate">
                    yourdealership.ca/service
                  </div>
                  <span className="text-[10px] text-primary bg-primary-50 border border-primary-100 rounded-full px-2 py-0.5 font-medium whitespace-nowrap">
                    Service page
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      C
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        I can book your appointment in under a minute.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        <span className="bg-primary text-white text-xs px-3 py-1.5 rounded-full font-medium">
                          Book service
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Returning visitor greeting */}
              <div className="bg-primary-900 rounded-2xl shadow-xl overflow-hidden lg:-translate-x-8">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-primary-800 border-b border-primary-700">
                  <div className="flex-1 bg-primary-900/60 rounded-full px-3 py-1 text-xs text-primary-200 border border-primary-700 truncate">
                    yourdealership.ca
                  </div>
                  <span className="text-[10px] text-white bg-white/10 border border-white/20 rounded-full px-2 py-0.5 font-medium whitespace-nowrap">
                    3 days later
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-primary text-xs font-bold">
                      C
                    </div>
                    <div>
                      <p className="text-sm text-white leading-relaxed">
                        Welcome back&mdash;still interested in the Civic?
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        <span className="bg-white text-primary-900 text-xs px-3 py-1.5 rounded-full font-medium">
                          Yes, show me
                        </span>
                        <span className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-full font-medium border border-white/20">
                          See what&apos;s new
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
