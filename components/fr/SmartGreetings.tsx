export default function SmartGreetings() {
  return (
    <section id="smart-greetings" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Nouveau · Accueils intelligents</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Un accueil différent sur chaque page.{" "}
            <span className="text-primary">Comme un bon vendeur en salle de montre.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-6 max-w-3xl mx-auto">
            Un visiteur sur la fiche d&apos;une Civic 2022 n&apos;a pas les mêmes intentions
            qu&apos;un visiteur sur votre page de financement. Pourquoi leur montrer le même message?
            Chat360 lit la page et adapte son approche&mdash;chaque accueil semble écrit pour ce
            moment précis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gauche — comment il s'adapte, point par point */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Il reconnaît le véhicule</h3>
                <p className="text-gray-600 text-sm mt-1">
                  &laquo; Des questions sur la Honda Civic 2022? &raquo; avec un bouton Essai routier
                  qui lance la demande en un clic.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Il s&apos;adapte à chaque section</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Service &rarr; &laquo; Je peux réserver votre rendez-vous en moins d&apos;une
                  minute. &raquo; Échange &rarr; &laquo; Curieux de la valeur de votre véhicule?
                  &raquo; Financement, offres, inventaire : chaque page a son approche.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Il se souvient des visiteurs</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Quelqu&apos;un revient trois jours plus tard? &laquo; Content de vous
                  revoir&mdash;toujours intéressé par la Civic? &raquo;
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Il relance au bon moment</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Un visiteur qui lit une fiche véhicule depuis 35 secondes reçoit une invitation
                  ciblée&mdash;une seule fois, jamais d&apos;insistance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-11 h-11 flex-shrink-0 bg-primary-900 rounded-xl flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Il s&apos;améliore tout seul</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Plusieurs formulations tournent en rotation et chaque conversation est attribuée à
                  son message d&apos;origine : vous gardez ce qui convertit.
                </p>
              </div>
            </div>

            {/* Note bilingue */}
            <div className="flex items-center gap-3 bg-primary-50 border border-primary-100 rounded-2xl p-4">
              <svg className="w-6 h-6 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Bilingue français-anglais, automatique, sans configuration :</span>{" "}
                le widget suit la langue et le contenu de chaque page.
              </p>
            </div>
          </div>

          {/* Droite — maquettes d'accueil selon le contexte de page */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md space-y-5">
              {/* Accueil fiche véhicule */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500 border border-gray-200 truncate">
                    votreconcession.ca/honda-civic-2022
                  </div>
                  <span className="text-[10px] text-primary bg-primary-50 border border-primary-100 rounded-full px-2 py-0.5 font-medium whitespace-nowrap">
                    Fiche véhicule
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      C
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Des questions sur la Honda Civic 2022?
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        <span className="bg-primary text-white text-xs px-3 py-1.5 rounded-full font-medium">
                          Essai routier
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                          Poser une question
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accueil page service */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden lg:-translate-x-8">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500 border border-gray-200 truncate">
                    votreconcession.ca/service
                  </div>
                  <span className="text-[10px] text-primary bg-primary-50 border border-primary-100 rounded-full px-2 py-0.5 font-medium whitespace-nowrap">
                    Page service
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                      C
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Je peux réserver votre rendez-vous en moins d&apos;une minute.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        <span className="bg-primary text-white text-xs px-3 py-1.5 rounded-full font-medium">
                          Prendre rendez-vous
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accueil visiteur qui revient */}
              <div className="bg-primary-900 rounded-2xl shadow-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-primary-800 border-b border-primary-700">
                  <div className="flex-1 bg-primary-900/60 rounded-full px-3 py-1 text-xs text-primary-200 border border-primary-700 truncate">
                    votreconcession.ca
                  </div>
                  <span className="text-[10px] text-white bg-white/10 border border-white/20 rounded-full px-2 py-0.5 font-medium whitespace-nowrap">
                    3 jours plus tard
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-primary text-xs font-bold">
                      C
                    </div>
                    <div>
                      <p className="text-sm text-white leading-relaxed">
                        Content de vous revoir&mdash;toujours intéressé par la Civic?
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2.5">
                        <span className="bg-white text-primary-900 text-xs px-3 py-1.5 rounded-full font-medium">
                          Oui, montre-moi
                        </span>
                        <span className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-full font-medium border border-white/20">
                          Voir les nouveautés
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
