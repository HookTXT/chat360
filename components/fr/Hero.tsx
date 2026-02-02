"use client";

import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="pt-24 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 9.5L22 7L19.5 14.5L27 17L19.5 19.5L22 27L14.5 24.5L12 32L9.5 24.5L2 27L4.5 19.5L-3 17L4.5 14.5L2 7L9.5 9.5L12 2Z" />
              </svg>
              <span className="text-sm font-medium text-primary">Agent de vente IA pour concessionnaires</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-gray-900">
              Transformez vos visiteurs en rendez-vous avec{" "}
              <span className="text-primary">Chat360 AI</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              Chat360 engage chaque prospect sur votre site web 24/7, en français et en anglais, pour que vous puissiez vous concentrer sur la conclusion de ventes et la croissance de votre concession.
            </p>

            {/* CTA and Social Proof */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-medium hover:bg-primary-700 transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Voir la vidéo
              </button>

              {/* Avatar Stack + Rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">JD</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">MC</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-white text-xs font-semibold">PL</div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-yellow-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm font-semibold text-gray-900 ml-1">4.9</span>
                  </div>
                  <span className="text-sm text-gray-500">50+ concessionnaires</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:h-[520px]">
            {/* Background Shape */}
            <div className="absolute right-0 top-0 w-[400px] h-[400px] lg:w-[480px] lg:h-[480px] bg-gradient-to-br from-primary-100 to-primary-200 rounded-full -z-10 translate-x-12"></div>

            {/* Main Chat Window */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 max-w-md ml-auto mt-8">
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Chat360 AI</p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    En ligne 24/7
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[240px]">
                    <p className="text-sm text-gray-700">Bonjour! Avez-vous des VUS hybrides en stock?</p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-primary text-white rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[260px]">
                    <p className="text-sm">Oui! Nous avons 8 VUS hybrides disponibles. Le RAV4 Hybride 2024 est notre plus populaire. Voulez-vous planifier un essai?</p>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1">
                    <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full inline-block"></span>
                    <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full inline-block"></span>
                    <span className="typing-dot w-2 h-2 bg-gray-400 rounded-full inline-block"></span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 bg-primary-50 rounded-xl p-3">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-primary-700 font-medium">Qualification du prospect</span>
                  <span className="text-primary-600">85%</span>
                </div>
                <div className="w-full bg-primary-100 rounded-full h-1.5">
                  <div className="bg-primary rounded-full h-1.5 w-[85%]"></div>
                </div>
              </div>
            </div>

            {/* Floating Card - Top */}
            <div className="absolute top-4 left-0 lg:-left-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇨🇦</span>
                <span className="text-lg">🇫🇷</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Support bilingue</span>
            </div>

            {/* Floating Card - Left */}
            <div className="absolute bottom-24 -left-4 lg:-left-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 7L19.5 14.5L27 17L19.5 19.5L22 27L14.5 24.5L12 32L9.5 24.5L2 27L4.5 19.5L-3 17L4.5 14.5L2 7L9.5 9.5L12 2Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Propulsé par l&apos;IA</p>
                  <p className="text-sm font-semibold text-gray-900">Qualification des prospects</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Logo Strip */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-center text-sm text-gray-400 mb-6">Fait confiance par les concessionnaires à travers le Canada</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale">
            <div className="text-2xl font-bold text-gray-400">Honda</div>
            <div className="text-2xl font-bold text-gray-400">Toyota</div>
            <div className="text-2xl font-bold text-gray-400">Ford</div>
            <div className="text-2xl font-bold text-gray-400">Hyundai</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Fermer la vidéo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* YouTube Embed */}
            <iframe
              className="w-full h-full rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/Wy3WkukiDIE?autoplay=1&rel=0"
              title="Vidéo Chat360"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
