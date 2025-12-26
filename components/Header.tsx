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
            <svg
              className="h-10 w-auto"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Chat bubble background */}
              <path
                d="M4 8C4 5.79086 5.79086 4 8 4H40C42.2091 4 44 5.79086 44 8V32C44 34.2091 42.2091 36 40 36H28L18 44V36H8C5.79086 36 4 34.2091 4 32V8Z"
                fill="#0D9488"
              />
              {/* Person silhouette - head */}
              <circle cx="24" cy="15" r="5" fill="white" />
              {/* Person silhouette - body */}
              <path
                d="M14 30C14 24.4772 18.4772 20 24 20C29.5228 20 34 24.4772 34 30V32H14V30Z"
                fill="white"
              />
              {/* Chat lines */}
              <rect x="36" y="10" width="4" height="2" rx="1" fill="white" />
              <rect x="36" y="14" width="4" height="2" rx="1" fill="white" />
              <rect x="36" y="18" width="4" height="2" rx="1" fill="white" />
            </svg>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gray-700">CHAT</span>
              <span className="text-primary">360</span>
            </span>
          </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-primary font-medium">
              Home
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Solutions
            </a>
          </nav>

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
              <a
                href="#"
                className="text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
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
