"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="https://i.ibb.co/9mLfSBSQ/chat360-logo.png"
              alt="Chat360 Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl tracking-tight">
              <span className="text-gray-700 font-normal">CHAT</span>
              <span className="text-primary font-bold">360</span>
            </span>
          </a>


          {/* Right Side - CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://calendly.com/hooktxt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <a
                  href="https://calendly.com/hooktxt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-5 py-2.5 rounded-full font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Demo
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
