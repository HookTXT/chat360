export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
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
            <span>Propulsé par HookTXT</span>
          </a>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} HookTXT. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <span>Conforme TCPA</span>
            <span>•</span>
            <span>Conforme Loi 25 Québec</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
