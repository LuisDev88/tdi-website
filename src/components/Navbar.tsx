import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, PAGES } from '../types';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, Phone, Mail, ChevronRight } from 'lucide-react';

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
            {/* Logo with micro-interaction */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick('home')}
              className="group flex items-center text-left focus:outline-none focus:ring-2 focus:ring-[#FFA42D] rounded-lg p-1 cursor-pointer"
              aria-label="Tech-Dhab International Home"
            >
              <Logo variant="horizontal" size="md" />
            </motion.button>

            {/* Desktop Navigation Links with Animated Layout Indicator */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {mainNavPages.map((pageId) => {
                const page = PAGES[pageId];
                const isActive = currentPage === pageId;
                return (
                  <button
                    key={pageId}
                    onClick={() => handleNavClick(pageId)}
                    className={`relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors cursor-pointer select-none ${
                      isActive
                        ? 'text-[#0F172A] font-bold'
                        : 'text-gray-600 hover:text-[#0F172A]'
                    }`}
                  >
                    {/* Animated gliding background pill */}
                    {isActive && (
                      <motion.div
                        layoutId="active-desktop-pill"
                        className="absolute inset-0 bg-[#FFA42D]/15 rounded-xl border border-[#FFA42D]/35 -z-0"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center">
                      {page.title}
                    </span>

                    {/* Animated bottom highlight bar */}
                    {isActive && (
                      <motion.span
                        layoutId="active-desktop-indicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#FFA42D] rounded-full z-10"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Quick Consultation CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick('contact-us')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] hover:shadow-md hover:shadow-[#FFA42D]/35 transition-shadow shadow-sm shadow-[#FFA42D]/25 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile Hamburger Button with Three Dashes */}
            <div className="flex items-center lg:hidden">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-gray-800 hover:text-black rounded-xl hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFA42D] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close-icon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-6 h-6 stroke-[2.5]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu-icon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-6 h-6 stroke-[2.5]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                key="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 top-[65px] bg-black/40 backdrop-blur-xs z-40"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Animated Drawer */}
              <motion.div
                key="mobile-drawer"
                initial={{ opacity: 0, y: -16, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -16, height: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden relative z-50 bg-white border-b border-gray-200 shadow-2xl px-4 sm:px-6 py-5 overflow-hidden"
              >
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.04, delayChildren: 0.05 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.02, staggerDirection: -1 }
                    }
                  }}
                  className="flex flex-col gap-1.5"
                >
                  {mainNavPages.map((pageId) => {
                    const page = PAGES[pageId];
                    const isActive = currentPage === pageId;
                    return (
                      <motion.button
                        key={pageId}
                        variants={{
                          open: { opacity: 1, x: 0 },
                          closed: { opacity: 0, x: -16 }
                        }}
                        transition={{ duration: 0.2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavClick(pageId)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all text-left cursor-pointer ${
                          isActive
                            ? 'bg-orange-50 text-[#0F172A] font-bold border-l-4 border-[#FFA42D] shadow-2xs'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                        }`}
                      >
                        <span>{page.title}</span>
                        {isActive ? (
                          <span className="text-xs text-[#FFA42D] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FFA42D]/15">
                            Active
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                      </motion.button>
                    );
                  })}

                  <motion.div
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 10 }
                    }}
                    transition={{ duration: 0.2 }}
                    className="pt-4 border-t border-gray-100 mt-2 flex flex-col gap-3"
                  >
                    <button
                      onClick={() => handleNavClick('contact-us')}
                      className="w-full py-3 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <span>Get in Touch</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="text-xs text-gray-500 space-y-2 px-2 pt-1">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#FFA42D]" />
                        <a href="tel:+2349073888252" className="hover:text-black">+234 907 388 8252</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#FFA42D]" />
                        <a href="mailto:techdhabinternational@gmail.com" className="hover:text-black">techdhabinternational@gmail.com</a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

