import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Factory,
  Home as HomeIcon,
  Video,
  Star,
  MapPin,
  Zap,
  BatteryCharging,
  TrendingUp,
  ShieldCheck,
  Play,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { PROJECTS, VIDEO_REELS, TESTIMONIALS, COMPANY_INFO } from '../data/solarData';

export const ProjectsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'industrial';
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat && ['industrial', 'residential', 'media', 'reviews'].includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setSearchParams({ cat });
  };

  const categories = [
    {
      id: 'industrial',
      label: 'Industrial Projects',
      desc: 'MW-Scale Solar & High-Voltage BESS',
      icon: Factory,
      count: '4+ Projects',
      color: 'text-[#F58220]',
      activeBg: 'bg-[#F58220] text-black shadow-[#F58220]/25',
    },
    {
      id: 'residential',
      label: 'Residential Projects',
      desc: 'Luxury Villas & Net Metering Estates',
      icon: HomeIcon,
      count: '3+ Projects',
      color: 'text-[#10B981]',
      activeBg: 'bg-[#10B981] text-black shadow-[#10B981]/25',
    },
    {
      id: 'media',
      label: 'Projects Pictures & Reels',
      desc: 'Aerial Drone Walkthroughs & Tests',
      icon: Video,
      count: '4 Reels',
      color: 'text-[#00F0FF]',
      activeBg: 'bg-[#00F0FF] text-black shadow-[#00F0FF]/25',
    },
    {
      id: 'reviews',
      label: 'Client Reviews',
      desc: 'Verified Client & Industrialist Feedback',
      icon: Star,
      count: '5.0 ★ Rating',
      color: 'text-amber-400',
      activeBg: 'bg-amber-400 text-black shadow-amber-400/25',
    },
  ];

  const industrialProjects = PROJECTS.filter((p) => p.category === 'industrial');
  const residentialProjects = PROJECTS.filter((p) => p.category === 'residential');

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20">
      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-xs font-semibold text-[#F58220] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey EPC Execution Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Projects & <span className="text-[#F58220]">Showcase</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore our engineering track record across multi-megawatt industrial complexes, luxury residential villas, aerial drone reels, and authenticated client reviews.
          </p>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE 4-CATEGORY TABS (Accessible via Hover / Click & Navbar)
      ========================================================================== */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-2 rounded-2xl bg-black/80 border border-white/15">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`p-4 rounded-xl text-left transition-all duration-300 flex items-start gap-3 relative group cursor-pointer ${
                  isActive
                    ? `${cat.activeBg} shadow-lg font-bold`
                    : 'bg-white/[0.02] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                    isActive ? 'bg-black/20 text-current' : 'bg-white/5 border border-white/10 ' + cat.color
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-[10px] uppercase tracking-wider block font-semibold ${isActive ? 'opacity-80' : 'text-slate-400'}`}>
                    {cat.count}
                  </span>
                  <div className="text-sm font-bold font-heading leading-tight mt-0.5">
                    {cat.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          CATEGORY 1: INDUSTRIAL PROJECTS
      ========================================================================== */}
      {activeCategory === 'industrial' && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F58220]">
                Category 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Industrial Projects & High-Voltage BESS
              </h2>
            </div>
            <span className="text-xs text-slate-400">{industrialProjects.length} Deployed Installations</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrialProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-black/80 border border-white/15 hover:border-[#F58220]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-xs font-bold text-[#F58220]">
                    {project.capacity} {project.bessCapacity ? `+ ${project.bessCapacity}` : ''}
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-[#10B981]/20 backdrop-blur-md border border-[#10B981]/40 text-xs font-bold text-[#10B981]">
                    Year {project.year}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#F58220]" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Technical Specs Pill */}
                    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs mb-4">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Inverter Array:</span>
                        <span className="font-semibold text-white">{project.inverterUsed}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">PV Module Type:</span>
                        <span className="font-semibold text-white">{project.panelsUsed}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className="w-4 h-4 text-[#10B981]" />
                      <span className="text-[#10B981] font-bold">Annual Savings: {project.annualSavingsPKR}</span>
                    </div>
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
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          CATEGORY 2: RESIDENTIAL PROJECTS
      ========================================================================== */}
      {activeCategory === 'residential' && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
                Category 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Residential Projects & Luxury Estates
              </h2>
            </div>
            <span className="text-xs text-slate-400">{residentialProjects.length} High-Yield Residences</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {residentialProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-black/80 border border-white/15 hover:border-[#10B981]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-xs font-bold text-[#10B981]">
                    {project.capacity}
                  </div>

                  <div className="absolute bottom-3 left-3 text-xs text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Storage Unit:</span>
                        <span className="font-semibold text-white">{project.storageUsed || 'Grid-Tie Only'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Inverter:</span>
                        <span className="font-semibold text-white">{project.inverterUsed}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#10B981] font-bold">Saved: {project.annualSavingsPKR}</span>
                    <Link
                      to="/contact"
                      className="text-xs text-[#F58220] hover:underline font-bold flex items-center gap-1"
                    >
                      <span>Get Plan</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          CATEGORY 3: PROJECTS PICTURES & REELS
      ========================================================================== */}
      {activeCategory === 'media' && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00F0FF]">
                Category 03
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Projects Pictures & Drone Reels
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Field documentation, aerial surveys, and stress test clips captured by our technical engineers.
              </p>
            </div>

            <a
              href={COMPANY_INFO.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF0000] hover:bg-[#cc0000] transition-colors shrink-0"
            >
              <span>KyZee YouTube Channel</span>
              <Play className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEO_REELS.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setSelectedVideo(reel.id)}
                className="rounded-2xl bg-black/80 border border-white/15 hover:border-[#00F0FF]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer shadow-xl"
              >
                <div className="relative aspect-[9/16] overflow-hidden bg-neutral-950">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#00F0FF]/20 backdrop-blur-md border border-[#00F0FF]/50 flex items-center justify-center text-[#00F0FF] group-hover:scale-115 transition-transform shadow-xl">
                      <Play className="w-6 h-6 fill-[#00F0FF]" />
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-bold text-[#00F0FF]">
                    {reel.tag}
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-[10px] text-white">
                    {reel.duration}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-sm font-bold text-white font-heading line-clamp-2 mb-1">
                      {reel.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>{reel.category}</span>
                      <span>{reel.views} Views</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-black/90 border-t border-white/10">
                  <p className="text-[11px] text-slate-300 line-clamp-2">
                    {reel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reel Modal preview */}
          {selectedVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
              <div className="max-w-lg w-full bg-neutral-900 rounded-3xl p-6 border border-white/20 relative space-y-4">
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
                >
                  &times;
                </button>
                <h3 className="text-lg font-bold text-white">
                  Field Drone Footage Reel
                </h3>
                <p className="text-xs text-slate-300">
                  Click below to watch the authentic high-definition video on the official KyZee Solars social media channels:
                </p>
                <div className="flex gap-3">
                  <a
                    href={COMPANY_INFO.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-[#FF0000] text-white text-xs font-bold text-center"
                  >
                    Watch on YouTube
                  </a>
                  <a
                    href={COMPANY_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-bold text-center"
                  >
                    Watch on Instagram
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* =========================================================================
          CATEGORY 4: CLIENT REVIEWS
      ========================================================================== */}
      {activeCategory === 'reviews' && (
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Category 04
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Client Reviews & Testimonials
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Direct feedback from industrial enterprise directors and residential estate owners across Sindh and Pakistan.
              </p>
            </div>
            <div className="flex items-center gap-1 text-amber-400 text-sm font-bold bg-amber-400/10 border border-amber-400/30 px-3 py-1.5 rounded-xl">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>5.0 / 5.0 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="rounded-3xl p-7 bg-black/80 border border-white/15 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#10B981]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Verified Client</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {t.clientName}
                    </h4>
                    <span className="text-[11px] text-slate-400 block">
                      {t.designation} &bull; {t.companyOrCity}
                    </span>
                    <span className="text-[10px] text-[#F58220] font-semibold mt-0.5 block">
                      System: {t.systemType}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-500 font-medium">
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA to Contact */}
      <section className="mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-black/60 border border-[#F58220]/30 inline-block max-w-2xl">
          <h3 className="text-xl font-bold text-white font-heading mb-2">
            Want Similar Results for Your Facility or Residence?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            Our engineers provide computerized bill analysis and a custom 3-Phase Solar or BESS solution within 24 hours.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#F58220] hover:bg-[#FFA033] transition-all shadow-lg"
          >
            <span>Request Your Custom Feasibility</span>
          </Link>
        </div>
      </section>
    </main>
  );
};
