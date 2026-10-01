export default function SiteTour() {
  return (
    <section id="cowork" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">New · Cowork (beta)</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The bot doesn&apos;t just answer.{" "}
            <span className="text-primary">It gives the tour of your website.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-6 max-w-3xl mx-auto">
            When Chat360 presents a vehicle, your website opens its detail page on its own. When the
            customer searches, it opens your inventory already filtered. Like a salesperson walking
            the customer through the showroom&mdash;in text and in voice.
          </p>
        </div>

        {/* Cowork — copy + browser mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — what it does */}
          <div className="space-y-6 min-w-0">
            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">It opens the vehicle page</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The bot presents a CR-V? That CR-V&apos;s page opens on screen. The customer never has
                  to hunt for the link.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">It opens pre-filtered inventory</h3>
                <p className="text-gray-600 text-sm mt-1">
                  &ldquo;A used SUV under $30,000&rdquo; &rarr; the listing opens with the right filters:
                  price, year, body style, drivetrain, fuel type, mileage.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">It opens the configurator</h3>
                <p className="text-gray-600 text-sm mt-1">
                  On an in-stock unit, the bot can launch the SM360 configurator directly so the
                  customer keeps moving toward a purchase.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-14 0m7 7v4m0-4a3 3 0 003-3V6a3 3 0 00-6 0v6a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Works in voice, on SM360 and D2C Media</h3>
                <p className="text-gray-600 text-sm mt-1">
                  The customer talks, the website moves. Works on SM360 and D2C Media websites.
                </p>
              </div>
            </div>
          </div>

          {/* Right — browser mockup */}
          <div className="relative min-w-0">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                </div>
                <div className="flex-1 min-w-0 bg-white rounded-full px-3 py-1 text-xs text-gray-500 border border-gray-200 truncate">
                  yourdealership.ca/inventory/used?body=suv&amp;max-price=30000
                </div>
              </div>

              {/* Applied filters */}
              <div className="px-4 pt-4 flex flex-wrap gap-2">
                {["Used", "SUV", "≤ $30,000", "AWD", "< 80,000 km"].map((chip) => (
                  <span
                    key={chip}
                    className="bg-primary-50 text-primary text-xs px-3 py-1 rounded-full font-medium border border-primary-100"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-3 p-4">
                {[
                  { name: "Honda CR-V 2021", km: "62,000 km" },
                  { name: "Toyota RAV4 2020", km: "71,500 km" },
                  { name: "Mazda CX-5 2021", km: "48,200 km" },
                ].map((car, i) => (
                  <div
                    key={car.name}
                    className={`rounded-xl border p-2 ${i === 0 ? "border-primary ring-2 ring-primary-200" : "border-gray-100"}`}
                  >
                    <div className="h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 mb-2"></div>
                    <p className="text-[11px] font-bold text-gray-900 leading-tight">{car.name}</p>
                    <p className="text-[10px] text-gray-500">{car.km}</p>
                  </div>
                ))}
              </div>

              {/* Chat bubbles */}
              <div className="px-4 pb-5 space-y-2.5">
                <div className="flex justify-end">
                  <p className="bg-primary text-white text-sm px-3.5 py-2 rounded-2xl rounded-br-sm max-w-[80%]">
                    A used SUV under $30,000
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    C
                  </div>
                  <p className="bg-gray-100 text-gray-700 text-sm px-3.5 py-2 rounded-2xl rounded-tl-sm">
                    I opened our filtered inventory for you: 3 SUVs match. The 2021 CR-V is a popular
                    one&mdash;want me to open its page?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guided tour, comparison, page awareness */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {/* Guided tour */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">A guided tour of the page</h3>
            <p className="text-gray-600 text-sm">
              The vehicle page follows the conversation. When the bot mentions the price, the Carfax,
              the test drive or the backup camera, that block is highlighted and the page scrolls to
              it. The customer sees what&apos;s being discussed.
            </p>
            <div className="mt-5 bg-gray-50 rounded-2xl border border-gray-100 p-3 space-y-2">
              <div className="h-3 rounded bg-gray-200 w-2/3"></div>
              <div className="rounded-lg border-2 border-primary ring-4 ring-primary-100 px-3 py-2 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">Carfax report</span>
                <span className="text-[10px] text-primary font-medium">No reported accidents</span>
              </div>
              <div className="h-3 rounded bg-gray-200 w-1/2"></div>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Side-by-side comparison</h3>
            <p className="text-gray-600 text-sm">
              The customer views a RAV4, then a CR-V? The chat offers to compare them. With the chat
              closed, the greeting becomes &ldquo;Torn between two vehicles?&rdquo; Then the bot helps
              them choose based on their criteria and offers a test drive of both.
            </p>
            <div className="mt-5 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden text-[11px]">
              <div className="grid grid-cols-3 bg-gray-100 font-bold text-gray-900">
                <span className="px-2 py-1.5"></span>
                <span className="px-2 py-1.5">RAV4</span>
                <span className="px-2 py-1.5">CR-V</span>
              </div>
              {[
                ["Year", "2020", "2021"],
                ["Km", "71,500", "62,000"],
                ["Version", "XLE", "EX-L"],
                ["Drivetrain", "AWD", "AWD"],
              ].map(([label, a, b]) => (
                <div key={label} className="grid grid-cols-3 border-t border-gray-100 text-gray-700">
                  <span className="px-2 py-1.5 text-gray-500">{label}</span>
                  <span className="px-2 py-1.5">{a}</span>
                  <span className="px-2 py-1.5">{b}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Based only on what both listings say: never prices, never opinions on a model.
            </p>
          </div>

          {/* Page awareness */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col">
            <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">It knows the page on screen</h3>
            <p className="text-gray-600 text-sm">
              Mileage, trim, equipment: the bot answers from the vehicle page the customer is looking
              at, instead of saying it doesn&apos;t have the information.
            </p>
            <div className="mt-5 space-y-2">
              <div className="flex justify-end">
                <p className="bg-primary text-white text-xs px-3 py-1.5 rounded-2xl rounded-br-sm">
                  Does it have heated seats?
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                  C
                </div>
                <p className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-2xl rounded-tl-sm">
                  Yes! This CR-V EX-L has heated front seats and a heated steering wheel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
