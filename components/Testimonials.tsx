export default function Testimonials() {
  const testimonials = [
    {
      quote: "We were losing leads every evening and weekend. Now, the AI responds in 30 seconds, no matter the time. Last month, we had 12 sales that started with the chat.",
      author: "Sales Director",
      company: "Honda Terrebonne"
    },
    {
      quote: "The French is perfect. Customers think they're talking to a real person. And when it's a hot lead, I get the alert directly on my phone.",
      author: "Owner",
      company: "Arnold GM"
    },
    {
      quote: "We tried other solutions. Too expensive, too complicated, poor French. Chat360 is exactly what we needed. Setup in 2 weeks, ROI in 30 days.",
      author: "General Manager",
      company: "Independent Dealership"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Dealers Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border-2 border-gray-100"
            >
              <div className="mb-6">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="font-semibold text-gray-900">— {testimonial.author}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
