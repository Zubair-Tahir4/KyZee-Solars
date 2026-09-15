import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Battery, Zap, Cpu, Flame, Compass } from 'lucide-react';
import { AUTHORIZED_BRANDS } from '../data/solarData';

export const AuthorizedBrands: React.FC = () => {
  const tier1Brands = AUTHORIZED_BRANDS.filter((b) => b.tier === 1);
  const tier2Brands = AUTHORIZED_BRANDS.filter((b) => b.tier === 2);

  const getBrandIcon = (name: string) => {
    switch (name) {
      case 'Phoenix Battery':
        return <Battery className="w-6 h-6 text-[#F58220]" />;
      case 'Inverex Solar Energy':
        return <Zap className="w-6 h-6 text-[#00F0FF]" />;
      case 'Aston Energy':
        return <Flame className="w-6 h-6 text-[#10B981]" />;
      case 'CHINT Global':
        return <Compass className="w-5 h-5 text-[#3B82F6]" />;
      case 'MINT Solar':
        return <Award className="w-5 h-5 text-[#EAB308]" />;
      case 'NitroX Power':
        return <Cpu className="w-5 h-5 text-[#EC4899]" />;
      default:
        return <Zap className="w-5 h-5 text-[#F58220]" />;
    }
  };

  return (
    <section id="authorized-brands" className="relative py-20 bg-[#000000] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-xs font-semibold text-[#F58220] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Certified OEM Technology Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Authorized Dealer <span className="text-[#10B981]">& Partner Ecosystem</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Direct factory integration with verified manufacturer warranties, serialized hardware verification, and priority firmware updates.
          </p>
        </div>

        {/* =========================================================================
            TIER 1 AUTHORIZED DEALER BRANDS (Phoenix Battery, Inverex, Aston Energy)
        ========================================================================== */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-lg bg-[#F58220]/20 border border-[#F58220]/40 text-xs font-bold uppercase tracking-wider text-[#F58220]">
              Tier 1 Authorized Dealer Brands
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#F58220]/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tier1Brands.map((brand) => (
              <div
                key={brand.name}
                className="rounded-2xl p-6 sm:p-7 bg-black/80 border border-white/15 hover:border-[#F58220]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-[#F58220]/10"
              >
                {/* Top Verified Ribbon */}
                <div className="absolute top-0 right-0">
                  <div className="px-3 py-1 bg-gradient-to-l from-[#10B981]/25 to-black/80 text-[10px] font-bold uppercase tracking-wider text-[#10B981] rounded-bl-xl border-l border-b border-[#10B981]/30 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{brand.badgeText}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getBrandIcon(brand.name)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#F58220] transition-colors font-heading">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-[#F58220] font-medium">
                        {brand.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="my-3 py-1.5 px-3 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300 flex items-center justify-between">
                    <span className="text-slate-400">Technology Focus:</span>
                    <span className="font-semibold text-white">{brand.category}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#10B981]" />
                    <span className="font-semibold">{brand.warranty}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Direct Factory Support</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            TIER 2 / PARTNER COMPANIES (CHINT, MINT, NitroX)
        ========================================================================== */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-blue-400">
              Tier 2 / Technical Partner Companies
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tier2Brands.map((brand) => (
              <div
                key={brand.name}
                className="rounded-2xl p-5 sm:p-6 bg-black/60 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {getBrandIcon(brand.name)}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white font-heading">
                          {brand.name}
                        </h4>
                        <span className="text-[11px] text-slate-400">{brand.tagline}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      Partner
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>{brand.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Serial Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-black/80 border border-[#F58220]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-heading">
                100% Genuine Serialized Equipment Guarantee
              </h4>
              <p className="text-xs text-slate-300">
                Every solar module, NitroX inverter, and Phoenix / Inverex battery delivered carries verified serials and direct manufacturer warranty.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/923076559933?text=Hi%20KyZee%20Solars,%20I%20want%20to%20verify%20equipment%20specifications%20for%20my%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-[#F58220] hover:bg-[#FFA033] transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Verify Hardware Specs</span>
          </a>
        </div>
      </div>
    </section>
  );
};
