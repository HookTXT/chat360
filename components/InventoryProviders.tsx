const providers = [
  { name: "360.agency", logo: "/logos/360-agency.svg" },
  { name: "D2C Media", logo: "/logos/d2c-media.svg" },
  { name: "Power Go", logo: "/logos/power-go.svg" },
  { name: "eDealer", logo: "/logos/edealer.svg" },
  { name: "T-Advantage", logo: "/logos/t-advantage.svg" },
];

export default function InventoryProviders() {
  return (
    <section id="inventory" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Connected To <span className="text-primary">Your Inventory</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Chat360 pulls live inventory straight from the website platforms Canadian
            dealerships already run on. Real prices, real photos, real availability—no
            manual updates, no stale listings.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {providers.map((provider) => (
            <li
              key={provider.name}
              className="bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex items-center justify-center h-28 px-6"
            >
              <img
                src={provider.logo}
                alt={`${provider.name} logo`}
                className="max-h-10 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </li>
          ))}
        </ul>

        <p className="text-center text-gray-600 mt-10">
          Using a different provider?{" "}
          <a
            href="https://calendly.com/hooktxt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Talk to us
          </a>
          —we add new inventory feeds in days, not months.
        </p>
      </div>
    </section>
  );
}
