export default function FinalCTA() {
  return (
    <section id="demo" className="section-padding bg-gradient-to-br from-primary to-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Stop Losing Leads to Silence
          </h2>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Every minute your website can't answer a question, you're sending customers
            to someone who can.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-3xl font-bold mb-2">30 sec</p>
                <p className="text-white/80">Response time</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">Real French</p>
                <p className="text-white/80">Native Quebec AI</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">Auto-books</p>
                <p className="text-white/80">Test drives & appointments</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left text-white/90">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>14 days to launch</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ROI in 30 days</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Knows your inventory</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 coverage</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="https://calendly.com/hooktxt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-bold text-xl px-12 py-5 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-2xl hover:shadow-xl"
            >
              Book Your Free Demo →
            </a>

            <p className="text-sm text-white/80">
              No commitment. No credit card. Just a conversation about what's possible.
            </p>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/70">
              Or contact us directly:{" "}
              <a href="mailto:kevin@hooktxt.com" className="text-white hover:underline font-semibold">
                kevin@hooktxt.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
