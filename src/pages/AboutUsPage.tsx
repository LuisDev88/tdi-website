import React from 'react';
import { PageId } from '../types';
import { 
  Lightbulb, 
  Award, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Target, 
  Compass, 
  ArrowRight,
  Code,
  Smartphone,
  Cpu,
  Layers
} from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFFBF6] to-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-[#FFA42D]/40 text-[#D97706] text-xs font-bold tracking-wide">
                <span>About Tech-Dhab International</span>
              </div>

              {/* Exact WordPress Title and Requested Hero Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#0F172A] tracking-tight">
                Technology That <span className="text-[#FFA42D]">Solves Real Problems</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                We are an African software development company delivering world-class mobile engineering, digital automation, and technology consulting for forward-thinking enterprises.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] transition-all shadow-md shadow-[#FFA42D]/25 cursor-pointer flex items-center gap-2"
                >
                  <span>Work With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 transition-colors shadow-xs cursor-pointer"
                >
                  Our Capabilities
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-slate-900 text-white p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFA42D] text-black font-black flex items-center justify-center text-xl font-display">
                    TDI
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Tech-Dhab International</h3>
                    <p className="text-xs text-[#FFA42D] font-medium">Software Engineering Hub</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-sm text-gray-300">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Smartphone className="w-5 h-5 text-[#FFA42D]" />
                    <span>Mobile Application Development</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Code className="w-5 h-5 text-[#FFA42D]" />
                    <span>Software Engineering & Architecture</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <Cpu className="w-5 h-5 text-[#FFA42D]" />
                    <span>Digital Transformation & Automation</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-800 flex justify-between text-xs text-gray-400">
                  <span>Headquarters: Rivers State, Nigeria</span>
                  <span className="text-emerald-400 font-bold">● Active Operations</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
                Company Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0F172A]">
                Who We Are
              </h2>
              
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Founded in 2021, Tech-Dhab International is a technology company committed to building innovative digital solutions that simplify everyday life and improve business operations.
                </p>
                <p>
                  We specialize in:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-gray-200 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFA42D]" />
                    <span className="font-bold text-sm text-gray-900">Mobile application development</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-gray-200 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFA42D]" />
                    <span className="font-bold text-sm text-gray-900">Software engineering</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-gray-200 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFA42D]" />
                    <span className="font-bold text-sm text-gray-900">Digital transformation</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-gray-200 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFA42D]" />
                    <span className="font-bold text-sm text-gray-900">Technology consulting</span>
                  </div>
                </div>
                <p className="pt-2 font-medium text-gray-800">
                  Since our inception, we have focused on solving practical challenges through technology while helping businesses embrace digital innovation.
                </p>
              </div>
            </div>

            {/* OUR STORY */}
            <div className="lg:col-span-6 bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-gray-200 space-y-6">
              <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
                Our Heritage & Evolution
              </span>
              <h2 className="text-3xl font-black font-display text-[#0F172A]">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p className="text-lg font-bold text-gray-900 border-l-4 border-[#FFA42D] pl-4 py-1">
                  Tech-Dhab International began with a simple mission: To create technology that solves real problems.
                </p>
                <p>
                  From custom software projects to enterprise mobile applications, our journey has been driven by innovation, excellence, and customer success.
                </p>
                <p>
                  Today, we continue to develop solutions that empower businesses across different industries, bridging complex technical engineering with smooth, accessible user interfaces.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-gradient-to-b from-[#FAF8F5] to-white border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* OUR MISSION */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-[#D97706] mb-6 group-hover:bg-[#FFA42D] group-hover:text-black transition-colors">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
                Purpose Driven
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-gray-900 mt-1 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                Our mission is to develop innovative, reliable, and user-friendly software solutions that improve businesses, simplify everyday activities, and create lasting value for our clients through technology.
              </p>
            </div>

            {/* OUR VISION */}
            <div className="bg-[#0F172A] text-white p-8 sm:p-10 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFA42D] text-black flex items-center justify-center mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
                Future Horizon
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-1 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
                To become one of Africa’s leading software development companies, recognized globally for innovation, quality, integrity, and excellence in delivering digital solutions that positively impact businesses and communities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES (5 Attractive Cards) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
              What Guides Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#0F172A] mt-2">
              Core Values
            </h2>
            <p className="text-gray-600 text-base mt-3">
              The foundational principles that drive our engineering decisions, client partnerships, and team culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            
            {/* Card 1: Innovation */}
            <div className="bg-[#FAF8F5] p-7 rounded-2xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-md transition-all text-left group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#D97706] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-5 transition-colors">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                We embrace creativity and continuously seek better ways to solve problems.
              </p>
            </div>

            {/* Card 2: Excellence */}
            <div className="bg-[#FAF8F5] p-7 rounded-2xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-md transition-all text-left group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#FFA42D] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-5 transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                We strive for excellence in everything we build.
              </p>
            </div>

            {/* Card 3: Integrity */}
            <div className="bg-[#FAF8F5] p-7 rounded-2xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-md transition-all text-left group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#D97706] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-5 transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-gray-900 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Honesty, transparency, and accountability define how we work.
              </p>
            </div>

            {/* Card 4: Customer First */}
            <div className="bg-[#FAF8F5] p-7 rounded-2xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-md transition-all text-left group">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#FFA42D] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-5 transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-gray-900 mb-2">
                Customer First
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Our clients’ success is our success.
              </p>
            </div>

            {/* Card 5: Continuous Learning */}
            <div className="bg-[#FAF8F5] p-7 rounded-2xl border border-gray-200 hover:border-[#FFA42D] hover:shadow-md transition-all text-left group md:col-span-2 lg:col-span-1 xl:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#D97706] group-hover:bg-[#FFA42D] group-hover:text-black flex items-center justify-center mb-5 transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-gray-900 mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Technology evolves every day, and so do we.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black font-display">
            Partner with Tech-Dhab International
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Ready to embark on digital transformation or launch your next mobile app? Let's discuss your project goals.
          </p>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-8 py-3.5 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] transition-all shadow-md cursor-pointer"
            >
              Contact Our Development Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
