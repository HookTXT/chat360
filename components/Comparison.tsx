export default function Comparison() {
  const comparisons = [
    { others: "Generic responses", chat360: "Inventory-aware answers" },
    { others: "Translated French", chat360: "Native French conversations" },
    { others: "Collect contact info", chat360: "Qualify, score, and book" },
    { others: "Platform templates", chat360: "Custom-built for YOUR dealership" },
    { others: "Support ticket queues", chat360: "Direct access to your builder" },
    { others: "Long-term contracts", chat360: "Month-to-month, cancel anytime" }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              What Makes Chat360 Different
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
            {/* Header */}
            <div className="grid grid-cols-2 bg-primary text-white">
              <div className="p-6 border-r border-primary-600">
                <h3 className="text-xl font-bold">What Others Do</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">What Chat360 Does</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 ${index !== comparisons.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="p-6 border-r border-gray-200 flex items-center gap-3">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-600">{item.others}</span>
                </div>
                <div className="p-6 bg-primary-50 flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold text-primary-900">{item.chat360}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
