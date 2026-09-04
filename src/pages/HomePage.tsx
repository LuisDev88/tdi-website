import React from 'react';
import { PageId } from '../types';
import { PhoneMockup } from '../components/PhoneMockup';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Shield, 
  Smartphone, 
  Clock, 
  CreditCard, 
  Users, 
  TrendingUp, 
  MapPin, 
  ChevronRight, 
  Calendar,
  Layers,
  Code2,
  HeartHandshake,
  HeadphonesIcon
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFFBF6] to-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-gray-100">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#FFA42D_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.12] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-[#FFA42D]/40 text-[#D97706] text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#FFA42D] animate-pulse" />
                <span>Premier Software Engineering & Mobile Solutions</span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-display text-[#0F172A] tracking-tight leading-[1.12]">
                Building Mobile Solutions That <span className="text-[#FFA42D] underline decoration-[#FFA42D]/40 underline-offset-8">Transform Businesses</span>
              </h1>

              {/* Exact Requested Description */}
              <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                <p>
                  Tech-Dhab International is a software development company specializing in designing, developing, and deploying high-quality mobile applications that solve real-world problems.
                </p>
                <p>
                  We create innovative digital products that help businesses automate operations, improve customer experiences, increase efficiency, and stay competitive in today’s technology-driven world.
                </p>
                <p className="font-medium text-gray-800">
                  Whether you’re a startup with a brilliant idea or an established business seeking digital transformation, Tech-Dhab International brings your vision to life.
                </p>
              </div>

              {/* Exact Requested Buttons: Get Started, Contact Us, View Our Products */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="px-7 py-3.5 rounded-xl font-extrabold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] transition-all shadow-md shadow-[#FFA42D]/25 hover:shadow-lg hover:shadow-[#FFA42D]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact-us')}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 transition-colors shadow-xs cursor-pointer"
                >
                  Contact Us
                </button>

                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-gray-800 bg-orange-50/80 hover:bg-orange-100/80 text-orange-950 border border-orange-200 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>View Our Products</span>
                  <ChevronRight className="w-4 h-4 text-[#FFA42D]" />
                </button>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-6 border-t border-gray-200/70 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black font-display text-[#0F172A]">Founded 2010</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Software Engineering</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-display text-[#FFA42D]">Enterprise</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Mobile & Automation</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-display text-[#0F172A]">Cross-Platform</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Android & Scalable Cloud</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual / Interactive Showcase */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="w-full max-w-md lg:max-w-none">
                <div className="relative">
                  <PhoneMockup interactive={true} />
                  
                  {/* Floating Tech Badge 1 */}
                  <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-8 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 hidden sm:flex">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FFA42D]">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Custom Mobile Apps</p>
                      <p className="text-[11px] text-gray-500">Fast, Scalable, Secure</p>
                    </div>
                  </div>

                  {/* Floating Tech Badge 2 */}
                  <div className="absolute top-8 -right-4 sm:-right-6 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 hidden sm:flex">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-[#FFA42D]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Enterprise Apps</p>
                      <p className="text-[11px] text-emerald-600 font-semibold">Scalable, Fast & Secure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE TECH-DHAB? (4 Visually Attractive Cards) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
              Why Tech-Dhab International
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0F172A] mt-2">
              Why Choose Tech-Dhab?
            </h2>
            <p className="text-gray-600 text-base mt-3">
              We combine deep technical capabilities with strategic business understanding to build software that drives measurable real-world outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#FAF8F5] hover:bg-white p-7 rounded-2xl border border-gray-200/80 hover:border-[#FFA42D]/60 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#FFA42D]/15 text-[#D97706] flex items-center justify-center mb-5 group-hover:bg-[#FFA42D] group-hover:text-black transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-2.5">
                Innovative Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don’t just build applications—we create solutions that solve real business challenges.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF8F5] hover:bg-white p-7 rounded-2xl border border-gray-200/80 hover:border-[#FFA42D]/60 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#FFA42D] flex items-center justify-center mb-5 group-hover:bg-[#FFA42D] group-hover:text-black transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-2.5">
                Professional Development
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our developers use modern technologies to build scalable, secure, and high-performance applications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF8F5] hover:bg-white p-7 rounded-2xl border border-gray-200/80 hover:border-[#FFA42D]/60 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#FFA42D]/15 text-[#D97706] flex items-center justify-center mb-5 group-hover:bg-[#FFA42D] group-hover:text-black transition-colors">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-2.5">
                Client Satisfaction
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every project is built around the client’s business goals and the needs of their users.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FAF8F5] hover:bg-white p-7 rounded-2xl border border-gray-200/80 hover:border-[#FFA42D]/60 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#FFA42D] flex items-center justify-center mb-5 group-hover:bg-[#FFA42D] group-hover:text-black transition-colors">
                <HeadphonesIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-gray-900 mb-2.5">
                Continuous Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We provide ongoing maintenance, updates, improvements, and technical support after deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SHOWCASE */}
      <section className="py-20 bg-[#FAF8F5] border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0F172A] mt-2">
              Our Core Software Services
            </h2>
            <p className="text-gray-600 text-base mt-3">
              We design, engineer, and support robust digital solutions tailored to accelerate your organization’s operational efficiency and market reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#FFA42D]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#D97706] flex items-center justify-center mb-5">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                  Mobile Application Development
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Native and cross-platform mobile apps for iOS and Android, built with fluid interfaces, rock-solid security, and offline support.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFA42D] hover:text-[#D97706] mt-2 cursor-pointer"
              >
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#FFA42D]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#FFA42D] flex items-center justify-center mb-5">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                  Custom Software Development
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Tailored web platforms, internal tools, and enterprise cloud solutions designed around your exact business logic and workflows.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFA42D] hover:text-[#D97706] mt-2 cursor-pointer"
              >
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#FFA42D]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#D97706] flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Intuitive, modern, and human-centered design systems, interactive prototypes, and wireframes that delight users and increase conversions.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFA42D] hover:text-[#D97706] mt-2 cursor-pointer"
              >
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#FFA42D]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#FFA42D] flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                  Business Automation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Automate repetitive processes, eliminate data entry bottlenecks, and integrate diverse platforms to increase business throughput.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFA42D] hover:text-[#D97706] mt-2 cursor-pointer"
              >
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#FFA42D]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#D97706] flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                  Software Maintenance & Support
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Continuous performance monitoring, security patching, cloud infrastructure updates, and dedicated technical help desk support.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFA42D] hover:text-[#D97706] mt-2 cursor-pointer"
              >
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#FFA42D]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#FFA42D] flex items-center justify-center mb-5">
                  <HeadphonesIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                  Technology Consulting
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Architecture advisement, digital roadmap planning, security audits, and cloud modernization strategies for fast-growing businesses.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFA42D] hover:text-[#D97706] mt-2 cursor-pointer"
              >
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="py-16 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight">
            Ready to Build Digital Solutions for Your Business?
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            From custom mobile applications to bespoke enterprise software and automation, Tech-Dhab International transforms your vision into high-performing reality.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-8 py-3.5 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] transition-all shadow-lg shadow-[#FFA42D]/25 cursor-pointer"
            >
              Contact Our Engineers
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors cursor-pointer"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
