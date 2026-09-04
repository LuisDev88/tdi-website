import React, { useState } from 'react';
import { Calendar, Clock, Star, CheckCircle, CreditCard, User, Sparkles, Scissors, ShieldCheck, ChevronRight } from 'lucide-react';

export const PhoneMockup: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const [activeTab, setActiveTab] = useState<'booking' | 'dashboard' | 'payment'>('booking');

  return (
    <div className="relative mx-auto max-w-[320px] sm:max-w-[340px] w-full">
      {/* Subtle Glow Behind Phone */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFA42D]/20 via-[#FFA42D]/10 to-transparent rounded-[50px] blur-2xl -z-10" />

      {/* Realistic Mobile Device Container */}
      <div className="relative bg-[#0F172A] p-3 sm:p-3.5 rounded-[44px] shadow-2xl border-4 border-gray-800 ring-1 ring-white/10">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1E293B]" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>

        {/* Mobile Screen */}
        <div className="bg-[#FAF8F5] rounded-[36px] overflow-hidden text-slate-800 min-h-[580px] flex flex-col font-sans text-xs">
          
          {/* Top Status Bar */}
          <div className="pt-3 px-6 pb-2 flex justify-between items-center text-[10px] font-semibold text-slate-500">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <div className="w-5 h-2.5 border border-slate-400 rounded-sm p-0.5">
                <div className="h-full w-3/4 bg-slate-700 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="px-5 pt-3 pb-3 bg-white border-b border-orange-100 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFA42D] to-[#F06A14] flex items-center justify-center text-white shadow-sm">
                <Scissors className="w-4 h-4 text-black" />
              </div>
              <div>
                <span className="font-extrabold text-sm tracking-tight text-black flex items-center gap-1">
                  TechDhab <span className="text-[10px] font-bold px-1.5 py-0.2 bg-[#FFA42D]/20 text-[#D97706] rounded-full">App</span>
                </span>
                <p className="text-[10px] text-gray-500">Business & Bookings</p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-[#FFA42D] border border-orange-200">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Interactive Screen Selector Tabs */}
          {interactive && (
            <div className="px-4 py-2 bg-white/70 border-b border-gray-100 flex gap-1 justify-center">
              <button
                onClick={() => setActiveTab('booking')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors cursor-pointer ${
                  activeTab === 'booking'
                    ? 'bg-[#FFA42D] text-black shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Booking Flow
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors cursor-pointer ${
                  activeTab === 'dashboard'
                    ? 'bg-[#FFA42D] text-black shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Owner Dashboard
              </button>
              <button
                onClick={() => setActiveTab('payment')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors cursor-pointer ${
                  activeTab === 'payment'
                    ? 'bg-[#FFA42D] text-black shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Digital Pay
              </button>
            </div>
          )}

          {/* Screen Content Body */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3">
            
            {/* VIEW 1: BOOKING FLOW */}
            {activeTab === 'booking' && (
              <>
                <div className="bg-white p-3.5 rounded-2xl shadow-xs border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#FFA42D] tracking-wider">Nearby Premier Salon</span>
                      <h4 className="font-bold text-slate-900 text-xs mt-0.5">Elegance Barbershop & Spa</h4>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 px-1.5 py-0.5 rounded text-[10px] text-amber-700 font-bold">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                      <span>4.9 (184)</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500">Elelenwo, Port Harcourt • 0.8 km</p>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-gray-700">Choose Service</span>
                  
                  <div className="p-2.5 rounded-xl bg-white border border-[#FFA42D] shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700">
                        <Scissors className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-bold text-[11px] text-gray-900">Executive Haircut & Beard Grooming</p>
                        <p className="text-[10px] text-gray-500">45 mins • Includes steam treatment</p>
                      </div>
                    </div>
                    <span className="font-bold text-[11px] text-[#D97706]">₦ 7,500</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-gray-200 flex items-center justify-between opacity-80">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[11px] text-gray-800">Luxury Facial Care & Scrub</p>
                        <p className="text-[10px] text-gray-500">30 mins</p>
                      </div>
                    </div>
                    <span className="font-semibold text-[11px] text-gray-700">₦ 12,000</span>
                  </div>
                </div>

                {/* Date & Time Selector */}
                <div className="bg-white p-3 rounded-2xl border border-gray-100 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-gray-800">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#FFA42D]" /> Selected Slot</span>
                    <span className="text-emerald-600 font-semibold text-[10px]">No Waiting Queue</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    <div className="p-1.5 text-center bg-gray-50 rounded-lg border border-gray-200 text-gray-500 text-[10px]">
                      11:00 AM
                    </div>
                    <div className="p-1.5 text-center bg-[#FFA42D] text-black font-bold rounded-lg shadow-2xs text-[10px]">
                      01:30 PM ✓
                    </div>
                    <div className="p-1.5 text-center bg-gray-50 rounded-lg border border-gray-200 text-gray-500 text-[10px]">
                      03:00 PM
                    </div>
                  </div>
                </div>

                {/* Instant Book Action */}
                <div className="pt-1">
                  <div className="w-full py-2.5 rounded-xl bg-[#0F172A] text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-[#FFA42D]" />
                    <span>Confirm Booking (Instant Alert)</span>
                  </div>
                </div>
              </>
            )}

            {/* VIEW 2: SALON OWNER DASHBOARD */}
            {activeTab === 'dashboard' && (
              <>
                <div className="p-3 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl space-y-2 shadow-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-300 font-medium">Today's Salon Revenue</span>
                    <span className="text-[9px] bg-[#FFA42D] text-black font-bold px-2 py-0.5 rounded-full">Live Synced</span>
                  </div>
                  <div className="text-lg font-black text-[#FFA42D] font-display">
                    ₦ 248,500
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-gray-700/60 text-[10px]">
                    <div>
                      <span className="text-gray-400">Total Bookings:</span>
                      <p className="font-bold text-white">28 Clients</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Walk-in vs App:</span>
                      <p className="font-bold text-[#FFA42D]">85% App Reserved</p>
                    </div>
                  </div>
                </div>

                {/* Real-time schedule queue */}
                <div className="bg-white p-3 rounded-2xl border border-gray-100 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[11px] text-gray-900 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FFA42D]" /> Upcoming Today
                    </span>
                    <span className="text-[10px] text-gray-500">4 Stylists Active</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="p-2 rounded-lg bg-orange-50/70 border border-orange-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#FFA42D] text-black font-bold flex items-center justify-center text-[10px]">
                          TJ
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-[10px]">Taribo Johnson</p>
                          <p className="text-[9px] text-gray-500">1:30 PM • Stylist: Chidi</p>
                        </div>
                      </div>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Online Paid</span>
                    </div>

                    <div className="p-2 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-[10px]">
                          AM
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-[10px]">Amaka Madu</p>
                          <p className="text-[9px] text-gray-500">2:15 PM • Stylist: Blessing</p>
                        </div>
                      </div>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">Cash at Salon</span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Overcrowding: All time slots strictly paced</span>
                </div>
              </>
            )}

            {/* VIEW 3: DIGITAL PAYMENT */}
            {activeTab === 'payment' && (
              <>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <CreditCard className="w-4 h-4 text-[#FFA42D]" />
                    <span>Payment Flexibility</span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    Pay securely online before the appointment or pay with cash at the salon. Every transaction is digitally logged.
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="p-2.5 rounded-xl border-2 border-[#FFA42D] bg-orange-50/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#FFA42D] text-black flex items-center justify-center font-bold text-[10px]">
                          ✓
                        </div>
                        <div>
                          <p className="font-bold text-[11px] text-gray-900">Pay Online (Card / Transfer / USSD)</p>
                          <p className="text-[9px] text-gray-500">Instant verification & reserved seat</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-[10px]">
                          •
                        </div>
                        <div>
                          <p className="font-medium text-[11px] text-gray-800">Pay With Cash At Salon</p>
                          <p className="text-[9px] text-gray-500">Recorded digitally in salon books</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0F172A] text-white p-3 rounded-2xl space-y-2">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-400">Total Due</span>
                    <span className="font-bold text-white text-xs">₦ 7,500</span>
                  </div>
                  <div className="w-full py-2 bg-[#FFA42D] text-black font-bold text-center rounded-lg text-[11px]">
                    Authorize & Secure Slot
                  </div>
                  <div className="text-[9px] text-center text-gray-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#FFA42D]" /> 256-Bit Bank Grade Encryption
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Bottom App Navigation */}
          <div className="bg-white border-t border-gray-100 px-6 py-2.5 flex justify-between items-center text-gray-400">
            <div className="flex flex-col items-center gap-0.5 text-[#FFA42D]">
              <Scissors className="w-4 h-4" />
              <span className="text-[8px] font-bold">Salons</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Calendar className="w-4 h-4" />
              <span className="text-[8px]">Bookings</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <CreditCard className="w-4 h-4" />
              <span className="text-[8px]">Wallet</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <User className="w-4 h-4" />
              <span className="text-[8px]">Account</span>
            </div>
          </div>

          {/* Home Bar Indicator */}
          <div className="pb-1.5 pt-1 bg-white flex justify-center">
            <div className="w-24 h-1 bg-gray-300 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};
