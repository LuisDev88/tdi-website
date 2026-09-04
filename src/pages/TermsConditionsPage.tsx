import React from 'react';
import { PageId } from '../types';
import { ShieldAlert, ArrowLeft, Mail } from 'lucide-react';

interface TermsConditionsPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FAF8F5] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back link */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-[#FFA42D] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-3xl border border-gray-200 shadow-sm space-y-10">
          
          <div className="border-b border-gray-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#D97706] text-xs font-bold mb-4">
              <ShieldAlert className="w-3.5 h-3.5 text-[#FFA42D]" />
              <span>Terms of Service</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#0F172A] tracking-tight">
              Terms & Conditions
            </h1>
            
            <p className="text-sm font-semibold text-gray-500 mt-2">
              Effective Date: <span className="text-[#0F172A] font-bold">July 2026</span>
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              By accessing our website or engaging Tech-Dhab International for software development, mobile application engineering, digital products, or technology consulting, you agree to be bound by these terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900">2. Professional Services & Intellectual Property</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Custom software solutions and client deliverables are governed by specific project statements of work. All proprietary platforms, codebases, frameworks, brand assets, and designs developed by Tech-Dhab International remain the protected property of Tech-Dhab International unless expressly transferred under contractual agreements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900">3. Limitation of Liability</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Tech-Dhab International strives to build reliable, high-performance software. We do not make unsupported or guaranteed claims regarding business growth, revenue generation, or specific financial outcomes. Software is provided with industry-standard warranties as outlined in service-level agreements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900">4. Contact & Inquiries</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              For any legal or contractual inquiries, please reach out directly:
            </p>
            <a
              href="mailto:techdhabinternational@gmail.com"
              className="text-sm font-bold text-[#FFA42D] hover:underline"
            >
              techdhabinternational@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
