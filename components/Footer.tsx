export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom space-y-6">
        <div className="border-b border-gray-800 pb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold text-lg">KM</span>
            </div>
            <div>
              <p className="text-white font-semibold">Kevin Michaud</p>
              <p className="text-gray-400 text-sm">Founder & CEO, HookTXT</p>
              <p className="text-gray-500 text-sm mt-1">
                Expert in automotive technology and conversational AI. Building AI-powered sales solutions for Canadian dealerships since 2023.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <a
            href="https://www.hooktxt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Powered by HookTXT</span>
          </a>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} HookTXT. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <span>TCPA Compliant</span>
            <span>•</span>
            <span>Quebec Privacy Law Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
