import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { CareersPage } from './pages/CareersPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync with URL Hash for natural browser navigation and bookmarks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 
        'about-us', 
        'services', 
        'products', 
        'careers', 
        'contact-us', 
        'privacy-policy', 
        'terms-conditions'
      ];

      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (pageId: PageId, service?: string) => {
    setCurrentPage(pageId);
    if (service) {
      setPrefilledService(service);
    }
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#0F172A] font-sans antialiased selection:bg-[#FFA42D] selection:text-black">
      {/* Sticky Header & Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Routed Page Content */}
      <main className="flex-1 w-full flex flex-col">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about-us' && <AboutUsPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'products' && <ProductsPage onNavigate={handleNavigate} />}
        {currentPage === 'careers' && <CareersPage onNavigate={handleNavigate} />}
        {currentPage === 'contact-us' && (
          <ContactUsPage 
            onNavigate={handleNavigate} 
            prefilledService={prefilledService} 
          />
        )}
        {currentPage === 'privacy-policy' && <PrivacyPolicyPage onNavigate={handleNavigate} />}
        {currentPage === 'terms-conditions' && <TermsConditionsPage onNavigate={handleNavigate} />}
      </main>

      {/* Persistent Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Buttons: WhatsApp & Back-To-Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Scroll To Top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white/90 border border-gray-300 text-gray-700 hover:text-black hover:bg-white shadow-md flex items-center justify-center transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Quick Inquiries Float */}
        <a
          href="https://wa.me/2349073888252?text=Hello%20Tech-Dhab%20International,%20I%20would%20like%20to%20inquire%20about%20your%20software%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Chat</span>
        </a>
      </div>
    </div>
  );
}
