import React from 'react';
import { Calendar, MapPin, Camera, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RECENT_EVENTS } from '../data/solarData';

export const RecentEventsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#080d0a] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-xs font-semibold text-[#10B981] mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Field Activity & Corporate Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              Recent Events <span className="text-[#F58220]">& Installations</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Explore our latest commercial project energizations, engineering symposiums, and industrial site handovers across Pakistan.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#F58220] hover:text-[#FFA033] transition-colors shrink-0"
          >
            <span>View Full Project Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Clean 3-Picture Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {RECENT_EVENTS.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl bg-black/70 border border-white/10 hover:border-[#F58220]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-[#F58220]/10"
            >
              {/* Picture Frame */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Event Category Tag */}
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-bold text-[#F58220] flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-[#F58220]" />
                  <span>{event.category}</span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#F58220] transition-colors mb-3 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#10B981] font-semibold">KyZee Solars EPC</span>
                  <Link
                    to="/projects?cat=media"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white group-hover:translate-x-1 transition-all"
                  >
                    <span>View Footage</span>
                    <ArrowRight className="w-3 h-3 text-[#F58220]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
