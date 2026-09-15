import React, { useState, useId } from 'react';
import { Calculator, Send, MessageCircle, CheckCircle2, Zap, BatteryCharging, TrendingUp, Sparkles, PhoneCall, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export const ConsultationCalculator: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Hyderabad');
  const [propertyType, setPropertyType] = useState<'Residential' | 'Commercial' | 'Industrial' | 'Agricultural'>('Commercial');
  const [monthlyBill, setMonthlyBill] = useState<number>(120000);
  const [systemInterest, setSystemInterest] = useState<'Hybrid' | 'On-Grid' | 'BESS' | 'Battery Service'>('Hybrid');
  const [submitted, setSubmitted] = useState(false);

  const formId = useId();

  // Calculation formulas for Pakistan tariff dynamics (approx average PKR 65/unit commercial/residential slab)
  const averageTariffPerKwh = propertyType === 'Industrial' ? 58 : propertyType === 'Commercial' ? 68 : 62;
  const estimatedMonthlyUnits = Math.round(monthlyBill / averageTariffPerKwh);
  
  // Recommended solar kW capacity (approx 120 units per month per 1 kW in Sindh sunshine)
  const recommendedKw = Math.max(5, Math.round(estimatedMonthlyUnits / 115));
  
  // Recommended battery storage capacity
  const batteryKwh =
    systemInterest === 'On-Grid'
      ? 0
      : systemInterest === 'BESS'
      ? Math.round(recommendedKw * 2.2)
      : Math.round(recommendedKw * 1.2);

  // Financial returns
  const estimatedMonthlySavings = Math.round(monthlyBill * 0.85);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const estimatedSystemCost = Math.round(recommendedKw * 135000 + batteryKwh * 55000);
  const paybackYears = (estimatedSystemCost / estimatedAnnualSavings).toFixed(1);
  const co2OffsetYearly = (recommendedKw * 1.15).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Assalam-o-Alaikum KyZee Solars,\n\nI would like to request a customized Solar & BESS proposal.\n\n` +
      `*Client Details:*\n` +
      `• Name: ${name || 'Prospective Client'}\n` +
      `• Phone: ${phone || 'Not specified'}\n` +
      `• City / Location: ${city}\n` +
      `• Property Type: ${propertyType}\n` +
      `• Monthly Electricity Bill: PKR ${monthlyBill.toLocaleString()}\n` +
      `• System Interest: ${systemInterest}\n\n` +
      `*Structured Estimation:*\n` +
      `• Recommended Capacity: ~${recommendedKw} kW\n` +
      `• Battery Storage: ~${batteryKwh} kWh\n` +
      `• Est. Monthly Savings: PKR ${estimatedMonthlySavings.toLocaleString()}\n\n` +
      `Please provide an official engineer-reviewed quotation and site survey details.`
    );
  };

  return (
    <section id="contact" className="relative py-24 bg-[#070b09] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Custom Estimate & Fast Lead Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Structure Your Solar & BESS Estimate
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Input your monthly electricity bill to calculate required PV capacity, lithium storage sizing, and immediate PKR financial returns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Instant Dynamic ROI Estimator Panel */}
          <div id="calculator" className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Dynamic Sizing Estimator</h3>
                  <p className="text-xs text-slate-400">Based on Sindh & Pakistan Grid Tariffs</p>
                </div>
              </div>
              <span className="text-xs font-bold text-cyan-300 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                Live Sizing
              </span>
            </div>

            {/* Bill Slider & Quick Presets */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor={`${formId}-bill-range`} className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Average Monthly Electricity Bill:
                  </label>
                  <span className="text-lg font-black text-[#F58220] font-mono">
                    PKR {monthlyBill.toLocaleString()}
                  </span>
                </div>

                <input
                  id={`${formId}-bill-range`}
                  type="range"
                  min="25000"
                  max="1500000"
                  step="10000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#F58220]"
                />

                {/* Quick bill preset buttons */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[50000, 120000, 250000, 500000, 1000000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setMonthlyBill(preset)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all ${
                        monthlyBill === preset
                          ? 'bg-[#F58220]/20 border-[#F58220] text-[#F58220]'
                          : 'bg-black/40 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {preset >= 1000000 ? 'PKR 1M+' : `PKR ${preset / 1000}k`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Sizing Output Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#0c1612] border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Recommended PV</span>
                  <div className="text-xl font-black text-white font-mono mt-1">
                    ~{recommendedKw} <span className="text-xs text-emerald-400">kW</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Tier-1 Bifacial</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0c1612] border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Recommended BESS</span>
                  <div className="text-xl font-black text-cyan-300 font-mono mt-1">
                    ~{batteryKwh} <span className="text-xs text-cyan-400">kWh</span>
                  </div>
                  <span className="text-[10px] text-slate-500">LiFePO4 Storage</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#0c1612] border border-white/10 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Payback Period</span>
                  <div className="text-xl font-black text-amber-400 font-mono mt-1">
                    ~{paybackYears} <span className="text-xs text-amber-300">Yrs</span>
                  </div>
                  <span className="text-[10px] text-slate-500">High ROI</span>
                </div>
              </div>

              {/* Financial Returns Highlight */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/20 to-black border border-emerald-500/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-300">Est. Monthly Bill Reduction:</span>
                  <span className="text-base font-black text-emerald-400 font-mono">
                    - PKR {estimatedMonthlySavings.toLocaleString()} / mo
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">Annual Financial Savings:</span>
                  <span className="text-sm font-bold text-cyan-300 font-mono">
                    PKR {estimatedAnnualSavings.toLocaleString()} / yr
                  </span>
                </div>
              </div>

              {/* Environmental Impact Note */}
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Prevents approximately <strong className="text-white">{co2OffsetYearly} tons</strong> of carbon emissions every year.</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Minimalist Lead Capture Form */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Dispatched!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-white">{name}</strong>. Our senior EPC engineer in Hyderabad / Karachi will review your ~{recommendedKw} kW proposal and contact you at <strong className="text-white">{phone}</strong> within 3 business hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/923076559933?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20ba5a] flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open Instant Chat on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 rounded-xl text-xs text-slate-400 hover:text-white"
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Request Consultation & Quote</h3>
                    <p className="text-xs text-slate-400">Zero-obligation turnkey engineering quote</p>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Fast Response
                  </span>
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor={`${formId}-client-name`} className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name / Company Name *
                  </label>
                  <input
                    id={`${formId}-client-name`}
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Muhammad Zubair / Sindh Agro Mills"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor={`${formId}-client-phone`} className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    id={`${formId}-client-phone`}
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 3XX XXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                {/* 2-Column: Property Type & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${formId}-property-type`} className="block text-xs font-semibold text-slate-300 mb-1">
                      Property Category
                    </label>
                    <select
                      id={`${formId}-property-type`}
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value as any)}
                      className="w-full px-3 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400"
                    >
                      <option value="Commercial">Commercial / Plaza</option>
                      <option value="Industrial">Industrial / Factory</option>
                      <option value="Residential">Residential Estate / Villa</option>
                      <option value="Agricultural">Agricultural / Solar Tube Well</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor={`${formId}-city`} className="block text-xs font-semibold text-slate-300 mb-1">
                      City / Region
                    </label>
                    <input
                      id={`${formId}-city`}
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Hyderabad / Karachi / Interior Sindh"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                {/* System Interest Preference */}
                <div>
                  <label htmlFor={`${formId}-system-interest`} className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Energy Solution Interest
                  </label>
                  <select
                    id={`${formId}-system-interest`}
                    value={systemInterest}
                    onChange={(e) => setSystemInterest(e.target.value as any)}
                    className="w-full px-3 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Hybrid">Hybrid Solar + High-Voltage BESS (Blackout Immune)</option>
                    <option value="On-Grid">On-Grid Solar System (Maximum Net Metering ROI)</option>
                    <option value="BESS">Utility / Commercial BESS Mega Storage</option>
                    <option value="Battery Service">Doorstep Battery Maintenance & Replacement</option>
                  </select>
                </div>

                {/* Action Buttons: Web submit AND Direct WhatsApp Dispatch */}
                <div className="pt-3 space-y-2.5">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#F58220] via-[#FFA033] to-[#F58220] hover:brightness-110 transition-all duration-300 shadow-xl shadow-[#F58220]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Free Engineering Proposal Request</span>
                  </button>

                  <a
                    href={`https://wa.me/923076559933?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl font-bold text-xs tracking-wider text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Or Instant WhatsApp Quote to {COMPANY_INFO.whatsappNumber}</span>
                  </a>
                </div>

                <p className="text-[11px] text-center text-slate-500 pt-1">
                  Protected by KyZee Solars Privacy Policy. Zero spam guaranteed.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
