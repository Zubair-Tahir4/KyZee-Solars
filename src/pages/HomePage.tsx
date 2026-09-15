import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { SystemsAndCategoriesGrid } from '../components/SystemsAndCategoriesGrid';
import { AuthorizedBrands } from '../components/AuthorizedBrands';
import { RecentEventsSection } from '../components/RecentEventsSection';
import { InteractivePowerFlow } from '../components/InteractivePowerFlow';
import { Link } from 'react-router-dom';
import { Zap, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* 1. Hero Section: Background image with dark gradient overlay, headline, and CTAs */}
      <HeroSection />

      {/* 2. Systems & Categories Grid: 
             - 3 system cards with icons/logos: On-Grid, Hybrid, Off-Grid
             - 3 sector cards with icons/logos: Commercial, Residential, Industrial */}
      <SystemsAndCategoriesGrid />

      {/* Interactive Power Flow Simulation */}
      <InteractivePowerFlow />

      {/* 3. Authorized Dealer Brands Section:
             - Tier 1 logos: Phoenix Battery, Inverex, Aston Energy
             - Tier 2/Partner companies: CHINT, MINT, NitroX */}
      <AuthorizedBrands />

      {/* 4. Recent Events Section: A clean 3-picture layout showcasing recent company events/installations before ending the page */}
      <RecentEventsSection />

      {/* High-Impact Bottom Consultation Teaser Banner */}
      <section className="py-16 bg-gradient-to-b from-[#080d0a] to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-black via-black/90 to-[#162250]/40 border border-[#F58220]/30 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/30 text-xs font-bold text-[#F58220] mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Electricity Bill Transition</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-heading">
                Ready to Slash Utility Costs with <span className="text-[#F58220]">KyZee Solars</span>?
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly with our senior power engineers for a computerized site irradiance audit, NEPRA Net Metering feasibility study, and commercial payback calculation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-black bg-gradient-to-r from-[#F58220] via-[#FFA033] to-[#F58220] hover:brightness-110 transition-all shadow-xl shadow-[#F58220]/25 flex items-center justify-center gap-2"
              >
                <span>Request Engineering Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
