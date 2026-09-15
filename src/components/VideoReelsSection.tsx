import React, { useState } from 'react';
import { Play, Eye, Clock, Film, Youtube, Instagram, ExternalLink, X } from 'lucide-react';
import { VIDEO_REELS, COMPANY_INFO } from '../data/solarData';
import { VideoReel } from '../types';

export const VideoReelsSection: React.FC = () => {
  const [activeReel, setActiveReel] = useState<VideoReel | null>(null);

  return (
    <section className="relative py-24 bg-[#070b09] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Visual Engineering In Action</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Video Reels & Field Walkthroughs
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Watch authentic drone footage of our rooftop solar commissioning, doorstep battery fleet dispatch, and live inverter stress tests.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_INFO.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600/20 hover:bg-red-600 border border-red-500/40 transition-all flex items-center gap-1.5"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>Official YouTube</span>
            </a>
            <a
              href={COMPANY_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-pink-600/20 hover:bg-pink-600 border border-pink-500/40 transition-all flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram Reels</span>
            </a>
          </div>
        </div>

        {/* 4-Column Reels Gallery (9:16 vertical ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[9/16] bg-black border border-white/10 shadow-2xl transition-all duration-300 hover:border-emerald-500/50 hover:shadow-emerald-500/10"
            >
              {/* Thumbnail Background */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />

              {/* Top Header Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/70 text-emerald-300 border border-white/10 backdrop-blur-md">
                  {reel.tag}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-slate-300 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md">
                  <Clock className="w-3 h-3" />
                  <span>{reel.duration}</span>
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#10B981] group-hover:text-black transition-all duration-300 shadow-xl">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Information */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="flex items-center gap-2 text-[11px] text-cyan-400 font-semibold mb-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{reel.views} Views</span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                  {reel.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {reel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REEL PREVIEW MODAL */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="glass-panel max-w-md w-full p-6 rounded-3xl border border-white/20 relative shadow-2xl bg-[#0c1410]">
            <button
              type="button"
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[9/16] max-h-[460px] w-full rounded-2xl overflow-hidden mb-4 bg-black">
              <img
                src={activeReel.thumbnail}
                alt={activeReel.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/90 text-black flex items-center justify-center mb-4 animate-bounce">
                  <Play className="w-7 h-7 fill-black ml-1" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{activeReel.title}</h4>
                <p className="text-xs text-slate-300 mb-6">{activeReel.description}</p>
                
                <a
                  href={COMPANY_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 shadow-lg"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Watch on Official YouTube</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>{activeReel.category}</span>
              <a
                href={COMPANY_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>View on Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
