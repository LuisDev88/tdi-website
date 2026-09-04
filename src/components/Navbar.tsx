import React, { useState, useEffect } from 'react';
import { PageId, PAGES } from '../types';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (pageId: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavPages: PageId[] = [
    'home',
    'about-us',
    'services',
    'products',
    'careers',
    'contact-us'
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar (Contact info & Global location) */}
      <div className="bg-[#0F172A] text-gray-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-gray-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+2349073888252"
              className="flex items-center gap-1.5 hover:text-[#FFA42D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFA42D]" />
              <span>+234 907 388 8252</span>
            </a>
            <a
              href="mailto:techdhabinternational@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#FFA42D] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FFA42D]" />
              <span>techdhabinternational@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Rivers State, Nigeria</span>
            <span className="w-1 h-1 rounded-full bg-[#FFA42D]" />
            <span className="text-[#FFA42D] font-medium">Serving Clients Globally</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
            : 'bg-white border-b border-gray-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center text-left focus:outline-none focus:ring-2 focus:ring-[#FFA42D] rounded-lg p-1 transition-transform active:scale-98"
              aria-label="Tech-Dhab International Home"
            >
              <Logo variant="horizontal" size="md" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {mainNavPages.map((pageId) => {
                const page = PAGES[pageId];
                const isActive = currentPage === pageId;
                return (
                  <button
                    key={pageId}
                    onClick={() => handleNavClick(pageId)}
                    className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#0F172A] bg-gray-100/70 font-bold'
                        : 'text-gray-600 hover:text-[#0F172A] hover:bg-gray-50'
                    }`}
                  >
                    {page.title}
                    {isActive && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#FFA42D] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Quick Consultation CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('contact-us')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] hover:shadow-md hover:shadow-[#FFA42D]/35 transition-all shadow-sm shadow-[#FFA42D]/25 active:scale-98 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button with Three Dashes */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-gray-800 hover:text-black rounded-xl hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFA42D] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2.5]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[2.5]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay for outside clicks */}
            <div 
              className="lg:hidden fixed inset-0 top-[73px] bg-black/40 backdrop-blur-xs z-40 animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
            />

            <div className="lg:hidden relative z-50 bg-white border-b border-gray-200 shadow-2xl px-4 sm:px-6 py-6 animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col gap-1.5">
                {mainNavPages.map((pageId) => {
                  const page = PAGES[pageId];
                  const isActive = currentPage === pageId;
                  return (
                    <button
                      key={pageId}
                      onClick={() => handleNavClick(pageId)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-orange-50 text-[#0F172A] font-bold border-l-4 border-[#FFA42D]'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                      }`}
                    >
                      <span>{page.title}</span>
                      {isActive && (
                        <span className="text-xs text-[#FFA42D] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FFA42D]/15">
                          Active
                        </span>
                      )}
                    </button>
                  );
                })}

                <div className="pt-4 border-t border-gray-100 mt-3 flex flex-col gap-3">
                  <div className="text-xs text-gray-500 space-y-2 px-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#FFA42D]" />
                      <a href="tel:+2349073888252" className="hover:text-black">+234 907 388 8252</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#FFA42D]" />
                      <a href="mailto:techdhabinternational@gmail.com" className="hover:text-black">techdhabinternational@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};
