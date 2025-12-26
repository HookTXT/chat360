export default function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-[#0d6d66]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-10">
            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight">
                You're Losing Leads<br />Right Now
              </h2>
              <p className="text-lg text-white/70 max-w-lg">
                Every hour your website can't answer a customer's question, you lose money. Your visitors aren't waiting—they're clicking to your competitor.
              </p>
            </div>

            {/* Statistics Row */}
            <div className="flex flex-wrap gap-8 md:gap-12">
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white">47%</div>
                <p className="text-white/70 mt-1">Leads after hours</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white">78%</div>
                <p className="text-white/70 mt-1">First responder wins</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold text-white">4+</div>
                <p className="text-white/70 mt-1">Hours avg response</p>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 - After Hours */}
              <div className="text-center space-y-4 p-4">
                <div className="flex justify-center">
                  <div className="relative">
                    <svg className="w-16 h-16 text-[#0d6d66]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" />
                      <path d="M32 20V32L40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="32" cy="32" r="3" fill="currentColor" />
                    </svg>
                    <span className="absolute -top-1 -right-1 text-[#0d6d66] text-lg">+</span>
                    <span className="absolute -bottom-1 -left-2 text-[#0d6d66] text-lg">+</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">After Hours<br />Inquiries</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Nearly half of all leads come in when your team is off the clock, leaving money on the table.
                </p>
                <div className="flex justify-center gap-1.5 pt-2">
                  <span className="w-2 h-2 rounded-full bg-[#0d6d66]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#0d6d66]/30"></span>
                </div>
              </div>

              {/* Card 2 - Speed Matters */}
              <div className="text-center space-y-4 p-4">
                <div className="flex justify-center">
                  <div className="relative">
                    <svg className="w-16 h-16 text-[#0d6d66]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="36" r="20" stroke="currentColor" strokeWidth="2" />
                      <path d="M32 24V36H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M24 12L32 8L40 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="32" cy="36" r="3" fill="currentColor" />
                    </svg>
                    <span className="absolute -top-1 -right-1 text-[#0d6d66] text-lg">+</span>
                    <span className="absolute top-4 -right-3 text-[#0d6d66] text-lg">+</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Speed<br />Matters</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The first dealer to respond wins the deal. Your competitors are getting faster every day.
                </p>
                <div className="flex justify-center gap-1.5 pt-2">
                  <span className="w-2 h-2 rounded-full bg-[#0d6d66]/30"></span>
                  <span className="w-2 h-2 rounded-full bg-[#0d6d66]"></span>
                </div>
              </div>

              {/* Card 3 - Slow Response */}
              <div className="text-center space-y-4 p-4">
                <div className="flex justify-center">
                  <div className="relative">
                    <svg className="w-16 h-16 text-[#0d6d66]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="28" r="8" stroke="currentColor" strokeWidth="2" />
                      <circle cx="44" cy="28" r="8" stroke="currentColor" strokeWidth="2" />
                      <circle cx="32" cy="44" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M26 32L28 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M38 32L36 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M28 28H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="absolute -top-1 -right-1 text-[#0d6d66] text-lg">+</span>
                    <span className="absolute top-8 -right-3 text-[#0d6d66] text-lg">+</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Slow<br />Response</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Average dealership response time is over 4 hours. By then, your lead has moved on.
                </p>
                <div className="flex justify-center gap-1.5 pt-2">
                  <span className="w-2 h-2 rounded-full bg-[#0d6d66]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#0d6d66]/30"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
