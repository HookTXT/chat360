export default function Problem() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              You're <span className="text-red-600">Losing Leads</span> Right Now
            </h2>
            <p className="text-xl text-gray-600">
              Every hour your website can't answer a customer's question, you lose money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-red-600 mb-4">47%</div>
              <p className="text-lg font-semibold mb-2">of leads</p>
              <p className="text-gray-600">come in outside business hours</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-red-600 mb-4">78%</div>
              <p className="text-lg font-semibold mb-2">of deals</p>
              <p className="text-gray-600">go to the first dealer who responds</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-red-600 mb-4">4+</div>
              <p className="text-lg font-semibold mb-2">hours</p>
              <p className="text-gray-600">average response time</p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
            <p className="text-lg font-semibold text-red-900">
              Your website visitors aren't waiting. They're clicking to your competitor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
