export default function Solution() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet Your <span className="text-primary">24/7 Sales Team</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Chat360 is AI that <strong>actually sells</strong>. Not a glorified FAQ bot.
            Not a "we'll get back to you" message. A real sales conversation that knows
            your inventory, speaks your customer's language, and books appointments while you sleep.
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="bg-gray-50 rounded-xl p-6 text-left space-y-3">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Typical Chat Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Generic FAQ responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>"We'll get back to you"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>No inventory knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Robotic translations</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 border-2 border-primary rounded-xl p-6 text-left space-y-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900">Chat360</h3>
              <ul className="space-y-2 text-primary-900">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Real-time inventory search</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Books appointments automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Knows your entire lot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Truly bilingual (English & French)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
