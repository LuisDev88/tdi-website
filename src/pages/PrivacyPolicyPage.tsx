import React from 'react';
import { PageId } from '../types';
import { Shield, Lock, Eye, FileText, Mail, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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

        {/* The WordPress Page Title - EXACTLY "Privacy Policy" */}
        <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-3xl border border-gray-200 shadow-sm space-y-10">
          
          <div className="border-b border-gray-100 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#D97706] text-xs font-bold mb-4">
              <Shield className="w-3.5 h-3.5 text-[#FFA42D]" />
              <span>Legal Documentation</span>
            </div>
            
            {/* Display the page title clearly at the top */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#0F172A] tracking-tight">
              Privacy Policy
            </h1>
            
            <p className="text-sm font-semibold text-gray-500 mt-2">
              Last Updated: <span className="text-[#0F172A] font-bold">July 2026</span>
            </p>
          </div>

          {/* Introduction */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA42D]" /> Introduction
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At Tech-Dhab International, we value your privacy and are committed to protecting your personal information.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA42D]" /> Information We Collect
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              We may collect:
            </p>
            <ul className="space-y-2 text-sm text-gray-700 pl-4 border-l-2 border-[#FFA42D]/40">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Full name</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Email address</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Phone number</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Business information</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Device information</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Usage analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Cookies and similar technologies</span>
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA42D]" /> How We Use Your Information
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Your information may be used to:
            </p>
            <ul className="space-y-2 text-sm text-gray-700 pl-4 border-l-2 border-[#FFA42D]/40">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Provide our services</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Improve user experience</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Respond to inquiries</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Process service requests</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Send important updates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Enhance website performance</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Prevent fraud and unauthorized access</span>
              </li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA42D]" /> Data Security
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We implement appropriate security measures designed to protect personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          {/* Third-Party Services */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA42D]" /> Third-Party Services
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We may use trusted third-party providers for services such as payment processing, analytics, cloud hosting, and communication.
            </p>
          </div>

          {/* Your Rights */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA42D]" /> Your Rights
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Where applicable, you may have rights to:
            </p>
            <ul className="space-y-2 text-sm text-gray-700 pl-4 border-l-2 border-[#FFA42D]/40">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Access personal information we hold about you</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Request correction of inaccurate information</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Request deletion where legally permitted</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                <span>Withdraw consent for marketing communications</span>
              </li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA42D]" /> Cookies
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our website may use cookies and similar technologies to improve functionality and analyze website traffic.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-display text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA42D]" /> Changes to This Policy
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be posted on this page with the revised effective date.
            </p>
          </div>

          {/* Contact for Privacy Questions */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
            <h2 className="text-lg font-bold font-display text-gray-900 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FFA42D]" />
              <span>Contact for Privacy Questions</span>
            </h2>
            <p className="text-sm text-gray-700">
              For privacy-related questions, contact:
            </p>
            <a
              href="mailto:techdhabinternational@gmail.com"
              className="text-sm font-bold text-[#FFA42D] hover:underline block"
            >
              techdhabinternational@gmail.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
