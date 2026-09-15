import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Camera,
  Image as ImageIcon,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Award,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/solarData';

export const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20">
      {/* Page Header */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-xs font-semibold text-[#F58220] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engineering Heritage Since 2016</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
            About <span className="text-[#F58220]">KyZee Solars</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Delivering high-reliability commercial rooftop solar, MW-scale High-Voltage Battery Energy Storage Systems (BESS), and smart 3-phase hybrid engineering across Pakistan.
          </p>
        </div>
      </section>

      {/* =========================================================================
          1. COMPANY INTRO: Half-page introduction paired with styled modern shape
      ========================================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Introduction Paragraph: covering half the page width (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#10B981]/10 border border-[#10B981]/25 text-xs font-bold text-[#10B981] uppercase tracking-wider">
              <span>Corporate Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
              Pioneering Clean Energy & BESS Engineering in <span className="text-[#10B981]">Pakistan</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Founded in 2016 under the visionary leadership of <strong>CEO Muhammad Talha Tahir Khanzada</strong>, KyZee Solars (Pvt) Ltd has emerged as one of the nation&apos;s premier Engineering, Procurement, and Construction (EPC) enterprises for industrial, commercial, and luxury residential solar transitions. Headquartered on Auto Bahn Road, Hyderabad with extensive operational reach across Karachi and Sindh, we have commissioned over <strong>18.5+ Megawatts</strong> of high-yield solar capacity and more than <strong>6.2+ MWh</strong> of High-Voltage Battery Energy Storage Systems (BESS).
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Unlike generic retail suppliers, KyZee Solars operates under a rigorous engineering-first doctrine. We execute computerized 3D shadow analysis, structural load stress calculations, high-voltage switchgear synchronization, and complete turnkey NEPRA Net Metering licensing. Every installation is backed by official Tier-1 OEM partnerships with Phoenix Battery, Inverex, and Aston Energy, guaranteeing 100% genuine equipment, transparent performance warranties, and proactive post-energization technical support.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-2xl font-extrabold text-[#F58220] font-heading block">{COMPANY_INFO.installedCapacity}</span>
                <span className="text-xs text-slate-400">Total Solar PV Deployed</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-2xl font-extrabold text-[#10B981] font-heading block">{COMPANY_INFO.bessDeployed}</span>
                <span className="text-xs text-slate-400">High-Voltage BESS Storage</span>
              </div>
            </div>
          </div>

          {/* Styled Modern Image Shape / Placeholder (lg:col-span-6) */}
          <div className="lg:col-span-6 relative">
            {/* Geometric decorative backdrop glows */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#F58220]/20 to-[#10B981]/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/15 to-white/5 border border-white/20 shadow-2xl backdrop-blur-xl">
              {/* Modern polygonal clipped container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/5] bg-black">
                <img
                  src={COMPANY_INFO.leadership.image}
                  alt={`${COMPANY_INFO.leadership.name} - CEO KyZee Solars`}
                  referrerPolicy="no-referrer"
                 className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Floating Modern Information Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-white font-heading">
                        {COMPANY_INFO.leadership.name}
                      </h4>
                      <p className="text-xs text-[#F58220] font-medium">
                        {COMPANY_INFO.leadership.title}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#F58220]/20 border border-[#F58220]/40 flex items-center justify-center text-[#F58220]">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MISSION & VISION: Scroll-Reveal Detailed Sections
      ========================================================================== */}
      <section className="py-20 bg-[#080d0a] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-xs font-semibold text-[#10B981] mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>Guiding Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              Our <span className="text-[#F58220]">Mission</span> & <span className="text-[#10B981]">Vision</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              The core principles driving our nationwide deployment of sustainable, high-voltage renewable infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* OUR MISSION */}
            <div className="rounded-3xl p-8 sm:p-10 bg-black/80 border border-white/15 hover:border-[#F58220]/50 transition-all duration-300 relative group shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-[#F58220]/15 border border-[#F58220]/30 text-[#F58220] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Target className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#F58220] block mb-2">
                Action-Driven Commitment
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">
                Our Mission
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                To engineer and construct uncompromising renewable energy systems and intelligent storage microgrids that liberate businesses and residences from escalating tariffs, diesel generator dependency, and erratic utility blackouts. We commit to delivering authentic Tier-1 equipment, mathematically optimized solar architectures, and transparent performance telemetry so every kilowatt-hour generated delivers maximum economic return.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>Turnkey engineering with zero technical compromises</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>Elimination of diesel generator fuel consumption during grid outages</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>Proactive lifecycle telemetry and responsive after-sales support</span>
                </div>
              </div>
            </div>

            {/* OUR VISION */}
            <div className="rounded-3xl p-8 sm:p-10 bg-black/80 border border-white/15 hover:border-[#10B981]/50 transition-all duration-300 relative group shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Eye className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] block mb-2">
                Long-Term Aspiration
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">
                Our Vision
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                To be recognized as Pakistan&apos;s most technologically capable, trusted, and innovative EPC leader in commercial rooftop solar and containerized Battery Energy Storage Systems (BESS). We envision a future where Pakistan&apos;s industrial fabric operates on 100% stable, self-generated clean power, fostering economic resilience, industrial competitiveness, and sustainable decarbonization for generations to come.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Nationwide leadership in MW-scale containerized BESS installations</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Accelerating Pakistan&apos;s industrial clean energy transition</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Setting benchmark standards in safety, efficiency, and ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PHOTO PLACEHOLDERS: Two stylized empty photo frames/shapes at bottom
      ========================================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 mb-3">
            <Camera className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Corporate Gallery & Team Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Team & Operations <span className="text-[#F58220]">Frames</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Dedicated stylized frames reserved for upcoming team portraits, field engineering staff, and operational facility photography.
          </p>
        </div>

        {/* Two Stylized Empty Photo Frames / Shapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frame 1 */}
          <div className="relative rounded-3xl border-2 border-dashed border-[#F58220]/40 bg-black/60 p-8 flex flex-col items-center justify-center text-center group hover:border-[#F58220] transition-colors duration-300 min-h-[340px] overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute inset-0 bg-radial-at-c from-[#F58220]/5 via-transparent to-transparent pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-slate-400 group-hover:text-[#F58220] group-hover:scale-110 transition-all mb-4">
              <ImageIcon className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F58220] mb-1">
              Stylized Photo Frame 01
            </span>
            <h3 className="text-xl font-bold text-white font-heading mb-2">
              Engineering & Field Operations Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed mb-4">
              Reserved for high-resolution group photography of KyZee Solars certified EPC electrical engineers, inverter specialists, and field commissioning technicians.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              <Camera className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Photo Slot: 1920 &times; 1080 Landscape</span>
            </div>
          </div>

          {/* Frame 2 */}
          <div className="relative rounded-3xl border-2 border-dashed border-[#10B981]/40 bg-black/60 p-8 flex flex-col items-center justify-center text-center group hover:border-[#10B981] transition-colors duration-300 min-h-[340px] overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute inset-0 bg-radial-at-c from-[#10B981]/5 via-transparent to-transparent pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-slate-400 group-hover:text-[#10B981] group-hover:scale-110 transition-all mb-4">
              <ImageIcon className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-[#10B981] mb-1">
              Stylized Photo Frame 02
            </span>
            <h3 className="text-xl font-bold text-white font-heading mb-2">
              Corporate Headquarters & Testing Lab
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed mb-4">
              Reserved for upcoming photography of our Auto Bahn Road, Hyderabad headquarters, SCADA telemetry monitoring room, and certified hardware testing benches.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              <Camera className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Photo Slot: 1920 &times; 1080 Landscape</span>
            </div>
          </div>
        </div>

        {/* Action Link to Contact */}
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-black bg-[#F58220] hover:bg-[#FFA033] transition-all shadow-xl shadow-[#F58220]/25"
          >
            <span>Discuss Your Solar Energy Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};
