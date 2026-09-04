import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, ArrowUp, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp click handler
  const whatsappUrl = "https://wa.me/2349073888252?text=Hello%20Tech-Dhab%20International,%20I%20would%20like%20to%20inquire%20about%20your%20software%20services.";

  return (
    <footer className="bg-[#0B0F19] text-gray-300 border-t border-gray-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-gray-800/80">
          
          {/* Column 1 — Company */}
          <div className="space-y-4">
            <button
              onClick={() => handleLink('home')}
              className="group text-left focus:outline-none"
              aria-label="Tech-Dhab International"
            >
              <Logo variant="horizontal" theme="dark" size="md" />
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative mobile solutions for businesses. We design, engineer, and deploy digital products that automate operations and elevate customer experience.
            </p>
            <div className="pt-2 text-xs text-gray-500">
              <span className="font-semibold text-gray-400">Founded:</span> 2010 • African Software Engineering Excellence
            </div>
            
            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-[#FFA42D] hover:text-black flex items-center justify-center text-gray-300 transition-colors"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-[#FFA42D] hover:text-black flex items-center justify-center text-gray-300 transition-colors"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-[#FFA42D] hover:text-black flex items-center justify-center text-gray-300 transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* X (formerly Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-[#FFA42D] hover:text-black flex items-center justify-center text-gray-300 transition-colors"
                title="X"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-[#FFA42D] hover:text-black flex items-center justify-center text-gray-300 transition-colors"
                title="YouTube"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-base tracking-wide mb-4 uppercase text-xs">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('home')}
                  className="hover:text-[#FFA42D] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about-us')}
                  className="hover:text-[#FFA42D] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('services')}
                  className="hover:text-[#FFA42D] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('products')}
                  className="hover:text-[#FFA42D] transition-colors cursor-pointer"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('careers')}
                  className="hover:text-[#FFA42D] transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact-us')}
                  className="hover:text-[#FFA42D] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 — Legal */}
          <div>
            <h3 className="text-white font-display font-bold text-base tracking-wide mb-4 uppercase text-xs">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('privacy-policy')}
                  className="hover:text-[#FFA42D] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('terms-conditions')}
                  className="hover:text-[#FFA42D] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Terms & Conditions</span>
                </button>
              </li>
            </ul>
            <div className="mt-6 p-3 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-400">
              <span className="text-[#FFA42D] font-semibold">Data Protection:</span> Compliant with standard global digital privacy and security protocols.
            </div>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-white font-display font-bold text-base tracking-wide mb-4 uppercase text-xs">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFA42D] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  No. 28 Odani Greencity Estate<br />
                  Elelenwo, Rivers State, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFA42D] shrink-0" />
                <a
                  href="tel:+2349073888252"
                  className="hover:text-[#FFA42D] transition-colors"
                >
                  +234 907 388 8252
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFA42D] shrink-0" />
                <a
                  href="mailto:techdhabinternational@gmail.com"
                  className="hover:text-[#FFA42D] transition-colors break-all"
                >
                  techdhabinternational@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Tech-Dhab International. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Crafted for high performance & scalability</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-gray-800/80 hover:bg-[#FFA42D] hover:text-black transition-colors flex items-center gap-1.5"
              title="Back to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
