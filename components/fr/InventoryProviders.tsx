const providers = [
  { name: "360.agency", logo: "/logos/360-agency.svg" },
  { name: "D2C Media", logo: "/logos/d2c-media.svg" },
  { name: "Power Go", logo: "/logos/power-go.svg" },
  { name: "eDealer", logo: "/logos/edealer.svg" },
  { name: "T-Advantage", logo: "/logos/t-advantage.svg" },
  { name: "NabThat", logo: "/logos/nabthat.svg" },
];

export default function InventoryProviders() {
  return (
    <section id="inventaire" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Connecté à <span className="text-primary">votre inventaire</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Chat360 se branche directement aux plateformes web utilisées par les
            concessionnaires canadiens. Vrais prix, vraies photos, vraie disponibilité —
            aucune mise à jour manuelle, aucune annonce périmée.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {providers.map((provider) => (
            <li
              key={provider.name}
              className="bg-white rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex items-center justify-center h-28 px-6"
            >
              <img
                src={provider.logo}
                alt={`Logo ${provider.name}`}
                className="max-h-10 w-auto max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </li>
          ))}
        </ul>

        <p className="text-center text-gray-600 mt-10">
          Vous utilisez un autre fournisseur ?{" "}
          <a
            href="https://calendly.com/hooktxt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Parlez-nous
          </a>{" "}
          — on ajoute de nouveaux flux d&apos;inventaire en quelques jours, pas en quelques mois.
        </p>
      </div>
    </section>
  );
}
