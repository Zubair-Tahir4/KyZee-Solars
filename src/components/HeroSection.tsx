import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, BatteryCharging, Sparkles, Award } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/solarData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-black">
      {/* Background image with dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="KyZee Solars Commercial & Industrial Solar and BESS"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Dark gradient overlay per specification: bg-black/85 to bg-black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-black/90" />

        {/* Brand grid overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(245, 130, 32, 0.35) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Extracted Brand Color Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#F58220]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-[#162250]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#F58220]/30 text-xs font-semibold text-slate-200 mb-6 shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
          <span>KyZee Solars (Pvt) Ltd • Engineering Energy Independence Since 2016</span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-[#10B981] font-bold">Authorized Tier-1 EPC</span>
        </div>

        {/* Primary Headline per exact specification */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-5xl mx-auto leading-[1.1] mb-6">
          Powering the Future with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#00E599] to-[#10B981]">
            Smart Solar
          </span>{' '}
          &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-[#FFA033] to-[#F58220]">
            BESS Solutions
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Turnkey commercial rooftop solar, MW-scale High-Voltage Battery Energy Storage Systems (BESS), and smart 3-phase hybrid inverters. Backed by certified engineering standards and lifetime performance monitoring across Pakistan.
        </p>

        {/* Action Buttons: "Explore Systems" & "Request Consultation" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#systems-grid"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-black bg-gradient-to-r from-[#F58220] via-[#FFA033] to-[#F58220] hover:brightness-110 transition-all duration-300 shadow-xl shadow-[#F58220]/25 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Explore Systems</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-[#F58220]/40 hover:border-[#F58220] transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Request Consultation</span>
            <Zap className="w-4 h-4 text-[#F58220]" />
          </Link>

          <a
            href={COMPANY_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 transition-all flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-6 border-t border-white/10">
          <div className="glass-panel p-4 rounded-2xl text-left border border-white/10 bg-black/60 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[#10B981] mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Deployed</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {COMPANY_INFO.installedCapacity}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Commercial & Industrial Solar</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-left border border-white/10 bg-black/60 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[#F58220] mb-1">
              <BatteryCharging className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Storage</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F58220] font-heading">
              {COMPANY_INFO.bessDeployed}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">High-Voltage BESS Installed</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-left border border-white/10 bg-black/60 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[#10B981] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Track Record</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {COMPANY_INFO.experienceYears}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Engineering Since 2016</p>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-left border border-white/10 bg-black/60 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[#F58220] mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Completed</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {COMPANY_INFO.projectsCompleted}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Satisfied Turnkey Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};
