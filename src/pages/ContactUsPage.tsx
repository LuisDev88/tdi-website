import React, { useState, useEffect } from 'react';
import { PageId, ContactFormData } from '../types';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ContactUsPageProps {
  onNavigate: (pageId: PageId) => void;
  prefilledService?: string;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate, prefilledService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceRequired: prefilledService || 'Mobile App Development',
    message: ''
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate professional processing
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  const whatsappUrl = `https://wa.me/2349073888252?text=Hello%20Tech-Dhab%20International,%20my%20name%20is%20${encodeURIComponent(formData.fullName || 'Client')}.%20I%20am%20interested%20in%20${encodeURIComponent(formData.serviceRequired || 'software services')}.`;

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFFBF6] to-white py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-[#FFA42D]/40 text-[#D97706] text-xs font-bold tracking-wide">
            <span>Get in Touch</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#0F172A] tracking-tight">
            Let’s Build Something <span className="text-[#FFA42D]">Great Together</span>
          </h1>

          <div className="space-y-2 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-gray-900">We would love to hear from you.</p>
            <p>
              Whether you need a mobile application, software solution, business consultation, or partnership, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT DETAILS & FORM */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Information & Business Hours */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* CONTACT INFORMATION */}
              <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-gray-200 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-widest">
                    Direct Reach
                  </span>
                  <h3 className="text-2xl font-black font-display text-gray-900 mt-1">
                    Contact Information
                  </h3>
                  <p className="text-xs font-bold text-gray-500 mt-0.5">Tech-Dhab International</p>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#D97706] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider">Address</h4>
                      <p className="text-gray-700 leading-relaxed mt-0.5">
                        No. 28 Odani Greencity Estate<br />
                        Elelenwo, Rivers State<br />
                        Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-[#FFA42D] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider">Phone</h4>
                      <a 
                        href="tel:+2349073888252"
                        className="text-gray-700 hover:text-[#FFA42D] transition-colors font-medium mt-0.5 block"
                      >
                        +234 907 388 8252
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#D97706] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider">Email</h4>
                      <a 
                        href="mailto:techdhabinternational@gmail.com"
                        className="text-gray-700 hover:text-[#FFA42D] transition-colors font-medium mt-0.5 block break-all"
                      >
                        techdhabinternational@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Chat */}
                <div className="pt-2 border-t border-gray-200">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat With Our Team on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* BUSINESS HOURS */}
              <div className="bg-[#0F172A] text-white p-8 rounded-3xl border border-gray-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFA42D] text-black flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-display">Business Hours</h3>
                    <p className="text-xs text-gray-400">West Africa Time (WAT)</p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 text-xs divide-y divide-gray-800">
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-400 font-medium">Monday – Friday</span>
                    <span className="font-bold text-white">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-400 font-medium">Saturday</span>
                    <span className="font-bold text-[#FFA42D]">10:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-400 font-medium">Sunday</span>
                    <span className="font-semibold text-gray-500">Closed</span>
                  </div>
                </div>

                <div className="pt-3 text-[11px] text-gray-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFA42D]" />
                  <span>24/7 Monitoring for deployed client infrastructure</span>
                </div>
              </div>

            </div>

            {/* Right Column: CONTACT FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm relative">
                
                {status === 'success' ? (
                  <div className="py-16 text-center space-y-5">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-black font-display text-gray-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Tech-Dhab International. Our technical lead will review your message regarding <span className="font-bold text-gray-900">{formData.serviceRequired}</span> and respond within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          companyName: '',
                          serviceRequired: 'Mobile App Development',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-800 transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-bold text-[#FFA42D] uppercase tracking-wider">
                        Project Consultation
                      </span>
                      <h3 className="text-2xl font-black font-display text-gray-900 mt-1">
                        Send Us a Message
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Fill out the form below and our team will get back to you promptly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Eze"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+234 ..."
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Company Name & Service Required */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Acme Enterprise"
                            value={formData.companyName}
                            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                            Service Required <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.serviceRequired}
                            onChange={(e) => setFormData({...formData, serviceRequired: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent transition-all"
                          >
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Custom Software Development">Custom Software Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Business Automation">Business Automation</option>
                            <option value="Software Maintenance">Software Maintenance</option>
                            <option value="Technology Consulting">Technology Consulting</option>
                            <option value="Enterprise Platform Inquiry">Enterprise Platform Inquiry</option>
                            <option value="Other Partnership">Other Partnership</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell us about your project requirements, goals, or timeline..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA42D] focus:border-transparent transition-all resize-none"
                        />
                      </div>

                      {/* Button: Send Message */}
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full py-4 rounded-xl font-extrabold text-sm text-black bg-[#FFA42D] hover:bg-[#F2941E] transition-all shadow-md shadow-[#FFA42D]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-98"
                      >
                        {status === 'submitting' ? (
                          <span>Sending Message...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-gray-500 text-center pt-2">
                        We value your privacy. Your information is securely handled in accordance with our Privacy Policy.
                      </p>
                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OFFICE LOCATION MAP CARD */}
      <section className="py-12 bg-[#FAF8F5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FFA42D] flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-gray-900">Tech-Dhab International Headquarters</h4>
                <p className="text-xs text-gray-600">No. 28 Odani Greencity Estate, Elelenwo, Rivers State, Nigeria</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://maps.google.com/?q=Elelenwo+Rivers+State+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-colors flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FFA42D]" />
                <span>Open in Maps</span>
              </a>
              <a
                href="tel:+2349073888252"
                className="px-5 py-2.5 rounded-xl bg-[#FFA42D] hover:bg-[#F2941E] text-black text-xs font-bold transition-colors"
              >
                Call Office
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
