import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  TrendingUp, 
  Smile, 
  GraduationCap, 
  Rocket, 
  X, 
  Send,
  Sparkles
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicantData, setApplicantData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    portfolioUrl: '',
    coverNote: ''
  });

  const handleOpenApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setApplicantData(prev => ({ ...prev, role: jobTitle }));
    setApplicationSubmitted(false);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s
      setSelectedJob(null);
      setApplicationSubmitted(false);
      setApplicantData({
        fullName: '',
        email: '',
        phone: '',
        role: '',
        portfolioUrl: '',
        coverNote: ''
      });
    }, 2800);
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFFBF6] to-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-[#FFA42D]/40 text-[#D97706] text-xs font-bold tracking-wide">
            <span>Careers at Tech-Dhab International</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#0F172A] tracking-tight">
            JOIN OUR TEAM
          </h1>

          <div className="space-y-3 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-gray-900">
              At Tech-Dhab International, we believe great technology is built by great people.
            </p>
            <p>
              We are always looking for passionate individuals who are ready to innovate and make an impact across mobile technology, software engineering, and digital growth.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
              Why You'll Love It Here
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-gray-900 mt-1">
              Team Benefits & Culture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-orange-100 flex items-center justify-center text-[#D97706]">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Competitive salary</h3>
              <p className="text-xs text-gray-600">Rewarding compensation aligned with talent & impact.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-slate-900 flex items-center justify-center text-[#FFA42D]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Career growth opportunities</h3>
              <p className="text-xs text-gray-600">Clear pathways to leadership and technical milestones.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-orange-100 flex items-center justify-center text-[#D97706]">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Friendly work environment</h3>
              <p className="text-xs text-gray-600">Collaborative, supportive, and inclusive culture.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-slate-900 flex items-center justify-center text-[#FFA42D]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Professional development</h3>
              <p className="text-xs text-gray-600">Learning stipends, certifications, and mentorship.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 text-center space-y-3 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 mx-auto rounded-xl bg-orange-100 flex items-center justify-center text-[#D97706]">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-gray-900">Opportunity to work on exciting projects</h3>
              <p className="text-xs text-gray-600">Build high-scale enterprise platforms and mobile systems from scratch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="py-20 bg-[#FAF8F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
              Opportunities
            </span>
            <h2 className="text-3xl font-black font-display text-gray-900 mt-1">
              Current Openings
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Explore open roles and join our journey of digital transformation across Africa and beyond.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* Opening 1: Digital Marketing Specialist */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-[#FFA42D] transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#D97706] text-xs font-bold mb-2">
                    <span>Marketing & Growth</span>
                  </div>
                  <h3 className="text-2xl font-black font-display text-gray-900">
                    Digital Marketing Specialist
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Full-Time • Rivers State / Hybrid</p>
                </div>

                <button
                  onClick={() => handleOpenApply('Digital Marketing Specialist')}
                  className="px-6 py-3 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Requirements */}
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFA42D]" /> Requirements:
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Minimum of 2 years experience in digital marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Strong understanding of SEO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Social media marketing experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Email marketing knowledge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Online advertising experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Experience with Facebook, Instagram, Google, and X advertising</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Strong communication and content creation skills</span>
                    </li>
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-black" /> Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFA42D] font-bold">•</span>
                      <span>Promote Tech-Dhab products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFA42D] font-bold">•</span>
                      <span>Increase brand awareness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFA42D] font-bold">•</span>
                      <span>Generate qualified leads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFA42D] font-bold">•</span>
                      <span>Develop digital marketing strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFA42D] font-bold">•</span>
                      <span>Manage online campaigns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Opening 2: Advertising Executive */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-[#FFA42D] transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-[#FFA42D] text-xs font-bold mb-2">
                    <span>Performance Advertising</span>
                  </div>
                  <h3 className="text-2xl font-black font-display text-gray-900">
                    Advertising Executive
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Full-Time • Rivers State / Hybrid</p>
                </div>

                <button
                  onClick={() => handleOpenApply('Advertising Executive')}
                  className="px-6 py-3 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Requirements */}
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFA42D]" /> Requirements:
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Experience in online advertising</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Knowledge of Meta Ads Manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Google Ads experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Excellent communication skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA42D] shrink-0 mt-0.5" />
                      <span>Creative mindset</span>
                    </li>
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-black" /> Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFA42D] font-bold">•</span>
                      <span>Plan advertising campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFA42D] font-bold">•</span>
                      <span>Promote company products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFA42D] font-bold">•</span>
                      <span>Increase customer acquisition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFA42D] font-bold">•</span>
                      <span>Manage advertising budgets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFA42D] font-bold">•</span>
                      <span>Produce campaign reports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {applicationSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900">Application Received!</h3>
                <p className="text-sm text-gray-600">
                  Thank you for applying for the <span className="font-bold text-gray-900">{selectedJob}</span> role at Tech-Dhab International. Our hiring team will review your qualifications and contact you.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-wider">Join Tech-Dhab</span>
                <h3 className="text-2xl font-black font-display text-gray-900 mt-1 mb-1">
                  Apply for Position
                </h3>
                <p className="text-sm font-semibold text-gray-600 mb-6">{selectedJob}</p>

                <form onSubmit={handleApplySubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Okon"
                      value={applicantData.fullName}
                      onChange={(e) => setApplicantData({...applicantData, fullName: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={applicantData.email}
                        onChange={(e) => setApplicantData({...applicantData, email: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+234 ..."
                        value={applicantData.phone}
                        onChange={(e) => setApplicantData({...applicantData, phone: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Portfolio or LinkedIn Profile</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/... or portfolio"
                      value={applicantData.portfolioUrl}
                      onChange={(e) => setApplicantData({...applicantData, portfolioUrl: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Brief Note / Experience Summary</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us briefly about your experience and why you're a great fit..."
                      value={applicantData.coverNote}
                      onChange={(e) => setApplicantData({...applicantData, coverNote: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black font-display">
            Don't see your specific role?
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            We are always happy to meet exceptional software engineers, designers, and growth specialists.
          </p>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-8 py-3.5 rounded-xl font-bold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] transition-all shadow-md cursor-pointer"
            >
              Send Us an Open Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
