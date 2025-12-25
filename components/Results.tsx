export default function Results() {
  const stats = [
    {
      value: "34%",
      label: "Chat-to-appointment conversion rate"
    },
    {
      value: "<30 sec",
      label: "Average response time",
      subtext: "(vs. 4+ hours industry average)"
    },
    {
      value: "47%",
      label: "Leads captured outside business hours"
    },
    {
      value: "14 days",
      label: "From kickoff to live system"
    }
  ];

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            The Numbers That Matter
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">
                {stat.value}
              </div>
              <p className="text-lg font-semibold mb-2">
                {stat.label}
              </p>
              {stat.subtext && (
                <p className="text-sm text-white/80">
                  {stat.subtext}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
