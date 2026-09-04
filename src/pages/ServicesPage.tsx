import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Smartphone, 
  Code2, 
  Palette, 
  Workflow, 
  Wrench, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  Zap
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (pageId: PageId, prefilledService?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | null>(null);

  const handleSelectService = (serviceName: string) => {
    onNavigate('contact-us', serviceName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFFBF6] to-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-[#FFA42D]/40 text-[#D97706] text-xs font-bold tracking-wide mb-4">
            <span>Engineering & Consulting Services</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#0F172A] tracking-tight">
            Comprehensive <span className="text-[#FFA42D]">Software Solutions</span> For Scalable Growth
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4">
            Tech-Dhab International provides end-to-end software engineering, mobile development, intuitive UI/UX design, and business automation tailored for ambitious startups and established enterprises.
          </p>
        </div>
      </section>

      {/* 6 PROFESSIONAL SERVICE CARDS */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1: Mobile App Development */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#D97706] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-6 transition-colors">
                  <Smartphone className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                  Mobile App Development
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  We build Android and cross-platform applications that are fast, scalable, secure, and user-friendly.
                </p>
                
                <div className="space-y-2 border-t border-gray-200/80 pt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Native Android & High-Performance Cross-Platform</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Offline-First Architectures & Real-Time Sync</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Intuitive App Store & Play Store Deployment</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectService('Mobile App Development')}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#FFA42D] text-gray-900 hover:text-black font-bold text-xs border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>Request Mobile Development</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 2: Custom Software Development */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-[#FFA42D] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-6 transition-colors">
                  <Code2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                  Custom Software Development
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  We build software solutions tailored specifically to each business and its operational needs.
                </p>

                <div className="space-y-2 border-t border-gray-200/80 pt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Bespoke Web & Cloud Platforms</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Scalable Microservices & REST/GraphQL APIs</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Robust Enterprise Security & Compliance</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectService('Custom Software Development')}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#FFA42D] text-gray-900 hover:text-black font-bold text-xs border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>Request Custom Software</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 3: UI/UX Design */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#D97706] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-6 transition-colors">
                  <Palette className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                  UI/UX Design
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  We create beautiful, intuitive interfaces designed to provide exceptional user experiences.
                </p>

                <div className="space-y-2 border-t border-gray-200/80 pt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>User Journey Mapping & Wireframing</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>High-Fidelity Interactive Prototypes</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Design Systems & Component Libraries</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectService('UI/UX Design')}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#FFA42D] text-gray-900 hover:text-black font-bold text-xs border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>Request UI/UX Design</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 4: Business Automation */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-[#FFA42D] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-6 transition-colors">
                  <Workflow className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                  Business Automation
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  We digitize manual processes and help businesses improve productivity through modern software.
                </p>

                <div className="space-y-2 border-t border-gray-200/80 pt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Automated Operations & Workflow Orchestration</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Digital Inventory & Booking Systems</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Reduced Human Error & Faster Turnaround</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectService('Business Automation')}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#FFA42D] text-gray-900 hover:text-black font-bold text-xs border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>Request Business Automation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 5: Software Maintenance */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#D97706] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-6 transition-colors">
                  <Wrench className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                  Software Maintenance
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  We provide ongoing maintenance, updates, and optimization to ensure your systems run flawlessly.
                </p>

                <div className="space-y-2 border-t border-gray-200/80 pt-4 text-xs text-gray-700 font-medium">
                  <p className="font-bold text-gray-900 uppercase text-[11px] tracking-wider text-[#FFA42D]">We provide:</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Bug fixes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Feature upgrades</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Performance improvements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Security updates</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectService('Software Maintenance')}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#FFA42D] text-gray-900 hover:text-black font-bold text-xs border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>Request Maintenance Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 6: Technology Consulting */}
            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-[#FFA42D] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-6 transition-colors">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                  Technology Consulting
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  We help businesses choose appropriate technology strategies and solutions for growth and digital transformation.
                </p>

                <div className="space-y-2 border-t border-gray-200/80 pt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Architecture Audits & Technical Roadmaps</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Cloud Migration & Infrastructure Sizing</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA42D]" />
                    <span>Tech Stack Assessment for Scalability</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => handleSelectService('Technology Consulting')}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#FFA42D] text-gray-900 hover:text-black font-bold text-xs border border-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <span>Request Advisory Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR DEVELOPMENT LIFECYCLE */}
      <section className="py-20 bg-[#FAF8F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
              Proven Methodology
            </span>
            <h2 className="text-3xl font-black font-display text-gray-900 mt-1">
              How We Deliver Software
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              From requirement discovery to deployment and continuous SLA support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs">
              <span className="text-xs font-black text-[#FFA42D]">STEP 01</span>
              <h4 className="text-lg font-bold font-display text-gray-900 mt-2 mb-2">Discovery & Strategy</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We analyze your business workflow, technical specifications, target user personas, and success metrics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs">
              <span className="text-xs font-black text-[#FFA42D]">STEP 02</span>
              <h4 className="text-lg font-bold font-display text-gray-900 mt-2 mb-2">Design & Architecture</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Interactive Figma prototypes, database modeling, cloud architecture design, and technical security blueprints.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs">
              <span className="text-xs font-black text-[#FFA42D]">STEP 03</span>
              <h4 className="text-lg font-bold font-display text-gray-900 mt-2 mb-2">Agile Engineering</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sprint-based coding with continuous integration, unit testing, device lab benchmarking, and weekly demonstrations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs">
              <span className="text-xs font-black text-[#FFA42D]">STEP 04</span>
              <h4 className="text-lg font-bold font-display text-gray-900 mt-2 mb-2">Deploy & Maintain</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cloud container deployment, app store release, employee training, and ongoing 24/7 telemetry monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black font-display">
            Need a Custom Software Solution?
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Schedule a free discovery consultation with our technical team today.
          </p>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-8 py-3.5 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] transition-all shadow-md cursor-pointer"
            >
              Get in Touch with Tech-Dhab
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
