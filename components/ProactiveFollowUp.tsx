export default function ProactiveFollowUp() {
  return (
    <section id="proactive" className="section-padding bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-primary-100 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">New · Proactive Selling</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            An AI That Speaks First.{" "}
            <span className="text-primary">Like Your Best Salesperson.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-6 max-w-3xl mx-auto">
            On the lot, a great salesperson doesn&apos;t stand silently next to a customer looking at
            a vehicle&mdash;they point out the AWD, the low mileage, the black roof, and offer a test
            drive. Chat360 does exactly that on your website. When a customer opens a vehicle page,
            the chat follows them and the AI makes the first move&mdash;without the customer typing a
            single word.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — the scenario, step by step */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">The customer picks a vehicle</h3>
                <p className="text-gray-600 text-sm mt-1">
                  &ldquo;I&apos;m looking for an SUV&rdquo; &rarr; Chat360 shares a carousel of vehicle
                  cards with real photos. The customer taps the HR-V SPORT.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">The chat follows them to the vehicle page</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The vehicle detail page opens and the conversation reopens with it&mdash;full
                  context intact. No starting over, no repeating yourself.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">The AI makes the first move</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Without being asked, it highlights what makes <em>this</em> vehicle special&mdash;
                  drivetrain, mileage, trim details&mdash;and offers to book a test drive on the spot.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary-900 rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v4m0-4a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">In voice mode, it says it out loud</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Using the voice assistant? The same proactive hook is spoken aloud&mdash;just like a
                  salesperson walking the lot beside your customer.
                </p>
              </div>
            </div>
          </div>

          {/* Right — VDP + proactive chat mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Browser / VDP mockup */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500 border border-gray-200 truncate">
                    yourdealership.ca/2027-honda-hr-v-sport
                  </div>
                </div>
                {/* VDP content */}
                <div className="p-4">
                  <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl h-28 flex items-center justify-center mb-3">
                    <svg className="w-20 h-20 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-gray-900">2027 Honda HR-V SPORT</p>
                  <p className="text-xs text-gray-500 mb-2">12 km · AWD · Black roof</p>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-4/5"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>

              {/* Proactive chat bubble overlay */}
              <div className="relative -mt-10 ml-6 sm:ml-12">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      C
                    </div>
                    <span className="text-xs font-semibold text-gray-700">Chat360</span>
                    <span className="text-[10px] text-primary bg-primary-50 border border-primary-100 rounded-full px-2 py-0.5 font-medium">
                      Speaks first
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Did you know this 2027 HR-V SPORT is all-wheel drive with only 12 km on the
                    odometer? It also has the contrasting black roof. Want me to reserve it for a
                    test drive?
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-primary text-white text-xs px-3 py-1.5 rounded-full font-medium">
                      Book a test drive
                    </span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                      More details
                    </span>
                  </div>
                </div>
                {/* Voice indicator */}
                <div className="absolute -top-4 -right-2 bg-primary-900 text-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v4m0-4a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3z" />
                  </svg>
                  <span className="text-[10px] font-medium">Also spoken in voice mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
