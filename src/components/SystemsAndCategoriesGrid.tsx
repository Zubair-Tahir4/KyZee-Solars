import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  BatteryCharging,
  ShieldAlert,
  Building2,
  Home as HomeIcon,
  Factory,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SOLAR_SYSTEMS, SECTORS } from '../data/solarData';

export const SystemsAndCategoriesGrid: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<string>('hybrid');

  const systemIconMap = {
    Zap: Zap,
    BatteryCharging: BatteryCharging,
    ShieldAlert: ShieldAlert,
  };

  const sectorIconMap = {
    Building2: Building2,
    Home: HomeIcon,
    Factory: Factory,
  };

  return (
    <section id="systems-grid" className="py-20 bg-[#080d0a] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            PART 1: 3 SYSTEM CARDS (On-Grid, Hybrid, Off-Grid)
        ========================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-xs font-semibold text-[#10B981] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Engineered Solar Topologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Smart Solar Systems by <span className="text-[#F58220]">Architecture</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Choose the ideal solar framework tailored to your utility tariff structure, grid stability, and energy storage objectives.
          </p>
        </div>

        {/* 3 System Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24 justify-items-center">
          {SOLAR_SYSTEMS.map((system, index) => {
            const Icon = systemIconMap[system.iconName as keyof typeof systemIconMap] || Zap;
            const isSelected = selectedSystem === system.id;
            const cardHeight = index === 1 ? 'h-[580px]' : 'h-[570px]';

            return (
              <div
                key={system.id}
                onClick={() => setSelectedSystem(system.id)}
                className={`w-[400px] max-w-full ${cardHeight} rounded-2xl p-6 sm:p-7 transition-all duration-300 border flex flex-col justify-between cursor-pointer relative group ${
                  isSelected
                    ? 'bg-black/90 border-[#F58220] shadow-xl shadow-[#F58220]/15'
                    : 'bg-black/50 border-white/10 hover:border-white/20 hover:bg-black/70'
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                        isSelected
                          ? 'bg-[#F58220]/20 border-[#F58220] text-[#F58220]'
                          : 'bg-white/5 border-white/10 text-slate-300 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F58220]">
                      {system.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-heading">
                    {system.name}
                  </h3>
                  <p className="text-xs font-medium text-[#10B981] mb-3">
                    {system.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {system.description}
                  </p>

                  {/* Specs Pill Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    {system.keySpecs.map((spec) => (
                      <div key={spec.label} className="text-left">
                        <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{spec.label}</span>
                        <span className="text-xs font-bold text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Features List */}
                  <ul className="space-y-2 mb-6">
                    {system.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">Best for: {system.bestFor.split(',')[0]}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F58220] hover:text-[#FFA033] group-hover:translate-x-1 transition-all"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            PART 2: 3 SECTOR CARDS (Commercial, Residential, Industrial)
        ========================================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-xs font-semibold text-[#F58220] mb-3">
            <Factory className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Target Market Applications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Solar Solutions by <span className="text-[#10B981]">Sector</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Custom engineered turnkey packages tailored to industrial production loads, commercial facilities, and modern luxury residences.
          </p>
        </div>

        {/* 3 Sector Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector) => {
            const Icon = sectorIconMap[sector.iconName as keyof typeof sectorIconMap] || Building2;

            return (
              <div
                key={sector.id}
                className="rounded-2xl bg-black/60 border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-[#F58220]/10"
              >
                {/* Sector Image Banner */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-bold text-[#F58220]">
                    Scale: {sector.targetScale}
                  </div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#F58220] text-black flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                        {sector.title}
                      </h3>
                      <p className="text-[11px] text-slate-300 font-medium">Turnkey EPC</p>
                    </div>
                  </div>
                </div>

                {/* Sector Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-3 italic">
                      {sector.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {sector.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] uppercase font-bold text-[#10B981] tracking-wider block">
                        Key Value Delivers:
                      </span>
                      {sector.keyBenefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to={`/projects?cat=${sector.id === 'commercial' ? 'industrial' : sector.id}`}
                      className="text-xs text-slate-300 hover:text-white underline underline-offset-4"
                    >
                      View Projects
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-[#F58220] hover:bg-[#FFA033] transition-all flex items-center gap-1.5 shadow-md"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
