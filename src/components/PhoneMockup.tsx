import React, { useState } from 'react';
import { 
  Car, 
  Droplets, 
  Calendar, 
  Clock, 
  Star, 
  CheckCircle, 
  CreditCard, 
  User, 
  Sparkles, 
  ShieldCheck, 
  MapPin,
  Gauge
} from 'lucide-react';

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
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFA42D] to-[#F06A14] flex items-center justify-center text-black shadow-sm">
                <Car className="w-4 h-4 text-black" />
              </div>
              <div>
                <span className="font-extrabold text-sm tracking-tight text-black flex items-center gap-1">
                  TechDhab <span className="text-[10px] font-bold px-1.5 py-0.2 bg-[#FFA42D]/20 text-[#D97706] rounded-full">AutoWash</span>
                </span>
                <p className="text-[10px] text-gray-500">Car Wash & Detailing App</p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-[#FFA42D] border border-orange-200">
              <Droplets className="w-3.5 h-3.5" />
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
                Wash Booking
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors cursor-pointer ${
                  activeTab === 'dashboard'
                    ? 'bg-[#FFA42D] text-black shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Bay Hub
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
            
            {/* VIEW 1: CAR WASH BOOKING FLOW */}
            {activeTab === 'booking' && (
              <>
                {/* Station Info Card */}
                <div className="bg-white p-3.5 rounded-2xl shadow-xs border border-gray-100">
                  <div className="flex justify-between items-start mb-1.5">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#FFA42D] tracking-wider flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Premier Auto Spa & Wash Bay
                      </span>
                      <h4 className="font-bold text-slate-900 text-xs mt-0.5">CrystalClean Auto Spa</h4>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 px-1.5 py-0.5 rounded text-[10px] text-amber-700 font-bold">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                      <span>4.9 (342)</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500">Peter Odili Road, Port Harcourt • 1.2 km away</p>

                  {/* Vehicle Type Pills */}
                  <div className="pt-2 flex items-center gap-1.5">
                    <span className="text-[9px] font-semibold text-gray-400">Vehicle:</span>
                    <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium text-[9px]">Sedan</span>
                    <span className="px-2 py-0.5 rounded bg-[#0F172A] text-white font-bold text-[9px] shadow-2xs">SUV / Jeep ✓</span>
                    <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium text-[9px]">Pickup</span>
                  </div>
                </div>

                {/* Wash Package Selection */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-gray-700 flex items-center justify-between">
                    <span>Select Wash Package</span>
                    <span className="text-[9px] text-[#D97706] font-semibold">High-Gloss Foam Tech</span>
                  </span>
                  
                  {/* Selected Package */}
                  <div className="p-2.5 rounded-xl bg-white border border-[#FFA42D] shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-orange-700">
                        <Droplets className="w-4 h-4 text-[#D97706]" />
                      </div>
                      <div>
                        <p className="font-bold text-[11px] text-gray-900">Supreme Foam & Interior Detail</p>
                        <p className="text-[10px] text-gray-500">45 mins • Underbody spray + wax polish</p>
                      </div>
                    </div>
                    <span className="font-bold text-[11px] text-[#D97706]">₦ 8,500</span>
                  </div>

                  {/* Alternative Package */}
                  <div className="p-2.5 rounded-xl bg-white border border-gray-200 flex items-center justify-between opacity-80">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[11px] text-gray-800">Express Body Wash & Vacuum</p>
                        <p className="text-[10px] text-gray-500">25 mins • Touchless shampoo & tire shine</p>
                      </div>
                    </div>
                    <span className="font-semibold text-[11px] text-gray-700">₦ 4,500</span>
                  </div>
                </div>

                {/* Wash Bay Slot Selector */}
                <div className="bg-white p-3 rounded-2xl border border-gray-100 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-gray-800">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FFA42D]" /> Dedicated Wash Bay
                    </span>
                    <span className="text-emerald-600 font-semibold text-[10px]">No Queue Waiting</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    <div className="p-1.5 text-center bg-gray-50 rounded-lg border border-gray-200 text-gray-500 text-[10px]">
                      Bay 1 • 11:30 AM
                    </div>
                    <div className="p-1.5 text-center bg-[#FFA42D] text-black font-bold rounded-lg shadow-2xs text-[10px]">
                      Bay 2 • 02:00 PM ✓
                    </div>
                    <div className="p-1.5 text-center bg-gray-50 rounded-lg border border-gray-200 text-gray-500 text-[10px]">
                      Bay 3 • 03:30 PM
                    </div>
                  </div>
                </div>

                {/* Instant Book Action */}
                <div className="pt-1">
                  <div className="w-full py-2.5 rounded-xl bg-[#0F172A] text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-[#FFA42D]" />
                    <span>Reserve Wash Bay (Instant Ticket)</span>
                  </div>
                </div>
              </>
            )}

            {/* VIEW 2: CAR WASH OPERATOR / BAY DASHBOARD */}
            {activeTab === 'dashboard' && (
              <>
                <div className="p-3 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl space-y-2 shadow-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-300 font-medium">Today's Car Wash Revenue</span>
                    <span className="text-[9px] bg-[#FFA42D] text-black font-bold px-2 py-0.5 rounded-full">Live Synced</span>
                  </div>
                  <div className="text-lg font-black text-[#FFA42D] font-display">
                    ₦ 318,500
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-gray-700/60 text-[10px]">
                    <div>
                      <span className="text-gray-400">Total Washes:</span>
                      <p className="font-bold text-white">42 Vehicles Today</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Average Bay Time:</span>
                      <p className="font-bold text-[#FFA42D]">26 Mins / Car</p>
                    </div>
                  </div>
                </div>

                {/* Real-time wash bay status */}
                <div className="bg-white p-3 rounded-2xl border border-gray-100 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[11px] text-gray-900 flex items-center gap-1">
                      <Gauge className="w-3.5 h-3.5 text-[#FFA42D]" /> Live Wash Bay Queue
                    </span>
                    <span className="text-[10px] text-gray-500">4 Active Bays</span>
                  </div>

                  <div className="space-y-1.5">
                    {/* Active Car 1 */}
                    <div className="p-2 rounded-lg bg-orange-50/70 border border-orange-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#FFA42D] text-black font-bold flex items-center justify-center text-[10px]">
                          <Car className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-[10px]">Range Rover Velar (PH-921)</p>
                          <p className="text-[9px] text-gray-500">Bay 1 • Interior Steam & Polish</p>
                        </div>
                      </div>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Washing (80%)</span>
                    </div>

                    {/* Active Car 2 */}
                    <div className="p-2 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-[10px]">
                          <Car className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-[10px]">Toyota Camry (ABJ-304)</p>
                          <p className="text-[9px] text-gray-500">Bay 2 • Next in Line (02:00 PM)</p>
                        </div>
                      </div>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">Arrived</span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Smart Automated Scheduling: Zero bay congestion</span>
                </div>
              </>
            )}

            {/* VIEW 3: DIGITAL PAYMENT & TRACKING */}
            {activeTab === 'payment' && (
              <>
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <CreditCard className="w-4 h-4 text-[#FFA42D]" />
                    <span>Payment & Automated Bay Pass</span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    Pay online to get an automated gate QR code pass or settle via POS/cash on arrival at the auto spa.
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="p-2.5 rounded-xl border-2 border-[#FFA42D] bg-orange-50/50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#FFA42D] text-black flex items-center justify-center font-bold text-[10px]">
                          ✓
                        </div>
                        <div>
                          <p className="font-bold text-[11px] text-gray-900">Pay Online (Card / Instant Transfer)</p>
                          <p className="text-[9px] text-gray-500">Instant Bay QR code & priority entry</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-[10px]">
                          •
                        </div>
                        <div>
                          <p className="font-medium text-[11px] text-gray-800">Pay at Wash Bay Counter (Cash / POS)</p>
                          <p className="text-[9px] text-gray-500">Logged digitally to operator system</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0F172A] text-white p-3 rounded-2xl space-y-2">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-400">Total Wash Fee (SUV Package)</span>
                    <span className="font-bold text-white text-xs">₦ 8,500</span>
                  </div>
                  <div className="w-full py-2 bg-[#FFA42D] text-black font-bold text-center rounded-lg text-[11px] cursor-pointer">
                    Authorize & Generate Bay Ticket
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
              <Car className="w-4 h-4" />
              <span className="text-[8px] font-bold">Wash Bays</span>
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
              <span className="text-[8px]">Profile</span>
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

