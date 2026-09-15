import React, { useState } from 'react';
import {
  MessageCircle,
  Radio,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  ExternalLink,
  Zap,
  Building,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Hyderabad',
    propertyType: 'Commercial',
    systemInterest: 'Hybrid',
    monthlyBill: '150000',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20">
      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-xs font-semibold text-[#10B981] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Turnkey Engineering Consultations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Contact & <span className="text-[#F58220]">Inquiry Hub</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Get in touch with KyZee Solars senior engineering team for an on-site feasibility study, 3D shadow analysis, and turnkey Net Metering proposal.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* =========================================================================
              LEFT COLUMN: WhatsApp Channel Integration & Contact Details
          ========================================================================== */}
          <div className="lg:col-span-5 space-y-8">
            {/* 1. Official WhatsApp Channel Integration Card */}
            <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-black via-black/90 to-[#25D366]/10 border-2 border-[#25D366]/40 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-black flex items-center justify-center shadow-lg shadow-[#25D366]/30 group-hover:scale-105 transition-transform">
                  <Radio className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#25D366] block">
                    Official Broadcast Channel
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    KyZee Solars WhatsApp Channel
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Join our official verified WhatsApp Channel for real-time announcements, live drone commissioning reels, solar tariff regulatory updates, and exclusive EPC hardware promotions.
              </p>

              <a
                href={COMPANY_INFO.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#1EBE5D] transition-all duration-300 shadow-xl shadow-[#25D366]/25 flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Follow WhatsApp Channel</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Direct WhatsApp Quick Chat Card */}
            <div className="rounded-3xl p-6 bg-black/80 border border-white/15 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Direct Engineering Desk Chat</span>
              </h4>
              <p className="text-xs text-slate-300">
                Prefer immediate messaging? Chat directly with an EPC engineer on WhatsApp:
              </p>
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 transition-all w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Standard Contact Details List */}
            <div className="rounded-3xl p-6 sm:p-7 bg-black/80 border border-white/15 space-y-5">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
                Operational Information
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#F58220]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Headquarters:</span>
                    <span className="text-slate-300 leading-relaxed">
                      Auto Bahn Road / Main Commercial Zone, Hyderabad & DHA / Korangi Operations Karachi, Sindh, Pakistan
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#10B981]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Direct Telephone / Call:</span>
                    <a href={`tel:${COMPANY_INFO.whatsappNumber}`} className="text-slate-300 hover:text-white transition-colors">
                      {COMPANY_INFO.whatsappNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Official Inquiries Email:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Office Hours:</span>
                    <span className="text-slate-300">
                      Monday &ndash; Saturday: 9:00 AM &ndash; 7:00 PM PKT
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#10B981] font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Certified Tier-1 EPC Partner & Authorized Distributor</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: High-Converting Inquiry Form
          ========================================================================== */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-black/90 border border-white/15 shadow-2xl relative">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F58220] block mb-1">
                  Lead Capture Form
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  Request Free Engineering Proposal
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  Fill out the parameters below. Our engineering desk will prepare a computerized ROI payback study and equipment specification.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center mx-auto text-[#10B981]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. A KyZee Solars senior technical consultant has been assigned to your request and will contact you via {formData.phone} within 2 business hours.
                  </p>
                  <div className="pt-3">
                    <a
                      href={`https://wa.me/923076559933?text=Hi%20KyZee%20Solars,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.propertyType)}%20${encodeURIComponent(formData.systemInterest)}%20system.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-black bg-[#25D366] hover:bg-[#1EBE5D] transition-all shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F58220] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F58220] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F58220] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        City / Region *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F58220] transition-colors"
                      >
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Sukkur">Sukkur</option>
                        <option value="Nooriabad">Nooriabad Industrial</option>
                        <option value="Kotri">Kotri Industrial</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad">Islamabad / Rawalpindi</option>
                        <option value="Other">Other Region in Pakistan</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Sector Type *
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F58220] transition-colors"
                      >
                        <option value="Commercial">Commercial (Plaza / Hospital / School)</option>
                        <option value="Industrial">Industrial (Factory / Mill / Cold Storage)</option>
                        <option value="Residential">Residential (Villa / Bungalow / Apartment)</option>
                        <option value="Agricultural">Agricultural (Tube Well / Farmhouse)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        System Architecture *
                      </label>
                      <select
                        value={formData.systemInterest}
                        onChange={(e) => setFormData({ ...formData, systemInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F58220] transition-colors"
                      >
                        <option value="Hybrid">Hybrid (Solar + Lithium Storage + Net Metering)</option>
                        <option value="On-Grid">On-Grid (Direct Net Metering, Zero Batteries)</option>
                        <option value="Off-Grid / BESS">Off-Grid / MW-Scale BESS Container</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Approximate Monthly Electricity Bill (PKR):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min="20000"
                        step="10000"
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F58220] transition-colors"
                      />
                      <span className="text-xs text-slate-400 font-mono shrink-0">
                        PKR {Number(formData.monthlyBill || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Site Details / Special Instructions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. 3-Phase connected load, available rooftop area, daytime AC requirements..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F58220] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#F58220] via-[#FFA033] to-[#F58220] hover:brightness-110 transition-all duration-300 shadow-xl shadow-[#F58220]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Free Engineering Proposal Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
