import React from 'react';
import { ShieldCheck, Award, Wrench, Quote, CheckCircle, Clock, Users, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/solarData';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#0a0f0d] overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Heritage & Executive Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Energy Independence Since 2016
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Founded with a singular engineering mission: delivering uncompromising solar power and high-voltage BESS solutions backed by Pakistan’s most proactive doorstep service network.
          </p>
        </div>

        {/* 2-Column Grid: Leadership Showcase + Company Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: CEO Profile Showcase */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-white/15 shadow-2xl relative overflow-hidden">
            {/* Top decorative glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#F59E0B]/15 rounded-full blur-2xl" />

            <div>
              {/* Professional Square Image of CEO */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto rounded-2xl overflow-hidden mb-6 border-2 border-emerald-500/40 shadow-xl group">
                <img
                  src={IMAGES.ceo}
                  alt={COMPANY_INFO.leadership.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-center">
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                    Executive Leadership
                  </span>
                </div>
              </div>

              {/* CEO Identity & Titles */}
              <div className="text-center">
                <h3 className="text-2xl font-black text-white font-heading tracking-tight">
                  {COMPANY_INFO.leadership.name}
                </h3>
                <p className="text-sm font-semibold text-[#00F0FF] mt-1">
                  {COMPANY_INFO.leadership.title}
                </p>
                <p className="text-xs text-slate-400">
                  {COMPANY_INFO.leadership.company}
                </p>
              </div>

              {/* CEO Welcome Message / Direct Quote */}
              <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/10 relative">
                <Quote className="w-5 h-5 text-[#F59E0B] mb-2 opacity-80" />
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{COMPANY_INFO.leadership.quote}"
                </p>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Direct Consultation:</span>
              <a
                href={COMPANY_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10B981] hover:text-[#00F0FF] transition-colors"
              >
                <span>Connect with Executive Office</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Company Story, Pillars, Pedigree */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#F59E0B]" />
                <span>Our Engineering Pedigree & Vision</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {COMPANY_INFO.leadership.visionText}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Over the past 9+ years, KyZee Solars has engineered and energized over 18.5 Megawatts of commercial and residential solar across Pakistan. While traditional installers treat installation as the end, we treat it as the start of an ongoing relationship with 24/7 telemetry monitoring and preventative cell optimization.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0e1612] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-3">
                  <Wrench className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Doorstep Battery Maintenance
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated mobile vans equipped with certified testing instruments to test, equalize, or replace warranty batteries at your doorstep without downtime.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0e1612] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Sub-24h Response SLA
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Priority dispatch protocols for high-capacity commercial setups, ensuring your inverters and storage banks maintain 99.8% operational uptime.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0e1612] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Tier-1 Brand Authorized
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Official distributor status for Phoenix Batteries, Inverex Solar Energy, and NitroX Power guarantees genuine hardware and manufacturer honors.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0e1612] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Client Peace of Mind
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Over 450 completed projects with a 99.4% client retention rate across textile, cold storage, agricultural estates, and private residences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
