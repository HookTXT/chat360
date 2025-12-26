export default function Problem() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-[#1e1b4b] rounded-2xl flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Stop Losing Leads to Silence
            </h2>
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Start Converting 24/7
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <a
              href="https://calendly.com/hooktxt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 text-xl font-semibold rounded-full hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book Discovery Call
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* Feature Points */}
          <div className="flex flex-wrap justify-center gap-8 pt-6">
            <div className="flex items-center gap-2 text-white text-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No upfront payment</span>
            </div>
            <div className="flex items-center gap-2 text-white text-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Easy cancellation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
