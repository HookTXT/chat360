export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold">Chat360</span>
                <span className="text-xs text-gray-400 block">by HookTXT</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI That Works. Systems That Scale.
              <br />
              24/7 AI sales agent for Quebec auto dealerships.
            </p>
            <div className="flex gap-4">
              <span className="inline-block bg-primary-900 text-primary-100 text-xs font-semibold px-3 py-2 rounded">
                Aucun contrat à long terme
              </span>
              <span className="inline-block bg-primary-900 text-primary-100 text-xs font-semibold px-3 py-2 rounded">
                Setup en 14 jours
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  Book Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:kevin@hooktxt.com" className="hover:text-white transition-colors">
                  kevin@hooktxt.com
                </a>
              </li>
              <li>
                <a href="https://calendly.com/hooktxt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Schedule a Call
                </a>
              </li>
              <li>
                <a href="https://hooktxt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  hooktxt.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
