import React from 'react';
import { Star, ShieldCheck, Quote, Building2, UserCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/solarData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0a0f0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Client Peace of Mind</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Endorsed by Industrial & Commercial Leaders
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Real feedback from commercial enterprises, cold storage operators, and luxury estate owners whose operations rely 24/7 on KyZee Solars.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative group"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {t.verified && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Client
                    </span>
                  )}
                </div>

                {/* Quote text */}
                <Quote className="w-6 h-6 text-emerald-400/40 mb-3" />
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{t.review}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                      {t.clientName}
                    </h4>
                    <p className="text-xs text-slate-400">{t.designation}</p>
                    <p className="text-xs text-slate-400 font-medium">{t.companyOrCity}</p>
                  </div>
                </div>

                <div className="mt-3 py-1.5 px-3 rounded-lg bg-black/40 text-[11px] font-semibold text-cyan-300 border border-white/5 truncate">
                  System: {t.systemType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
