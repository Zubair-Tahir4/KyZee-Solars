import React, { useState } from 'react';
import { Briefcase, MapPin, Zap, Battery, Calendar, ArrowRight, ShieldCheck, Filter, X } from 'lucide-react';
import { PROJECTS } from '../data/solarData';
import { ProjectItem } from '../types';

export const ProjectsPortfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Commercial' | 'Industrial' | 'BESS' | 'Residential'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.clientType === activeFilter);

  return (
    <section id="projects" className="relative py-24 bg-[#0a0f0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Major Projects & Milestone Portfolio
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              From MW-scale containerized BESS installations to massive industrial textile rooftops, explore how KyZee Solars powers premier enterprises.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-black/50 border border-white/10 shrink-0">
            {(['All', 'Industrial', 'BESS', 'Commercial', 'Residential'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter === 'All' ? 'All Milestones' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between border border-white/10 group relative"
            >
              <div>
                {/* Project Image */}
                <div className="relative w-full h-56 overflow-hidden bg-black/60">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-lg text-[11px] font-bold bg-black/70 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {proj.capacity}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white/10 text-slate-200 border border-white/10 backdrop-blur-md">
                      {proj.year}
                    </span>
                  </div>

                  {/* Location bottom overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span className="truncate font-medium">{proj.location}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Specs Quick Strip */}
                  <div className="space-y-1.5 py-3 border-y border-white/5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Inverter Tech:</span>
                      <span className="text-white font-medium truncate max-w-[170px]">{proj.inverterUsed}</span>
                    </div>
                    {proj.bessCapacity && (
                      <div className="flex justify-between text-cyan-400">
                        <span className="text-slate-400">Storage Unit:</span>
                        <span className="font-semibold">{proj.bessCapacity}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-emerald-400">
                      <span className="text-slate-400">Est. Savings:</span>
                      <span className="font-bold">{proj.annualSavingsPKR}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 pb-5 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-emerald-300 transition-colors">
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="glass-panel max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-white/20 relative shadow-2xl bg-[#0c1410] max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/30 text-emerald-300 border border-emerald-500/40">
                  {selectedProject.capacity}
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              {selectedProject.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>{selectedProject.location}</span>
              <span>•</span>
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Energized: {selectedProject.year}</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-[11px] text-slate-400 block">Photovoltaic Modules</span>
                <span className="text-xs font-bold text-white block mt-0.5">{selectedProject.panelsUsed}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-[11px] text-slate-400 block">Power Conversion Inverters</span>
                <span className="text-xs font-bold text-white block mt-0.5">{selectedProject.inverterUsed}</span>
              </div>
              {selectedProject.storageUsed && (
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-[11px] text-slate-400 block">BESS Energy Storage</span>
                  <span className="text-xs font-bold text-cyan-300 block mt-0.5">{selectedProject.storageUsed}</span>
                </div>
              )}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                <span className="text-[11px] text-slate-400 block">Annual Financial Savings</span>
                <span className="text-xs font-bold text-emerald-400 block mt-0.5">{selectedProject.annualSavingsPKR}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs text-slate-400">
                Carbon Offset: <strong className="text-white">{selectedProject.co2OffsetTons}</strong>
              </span>
              <a
                href={`https://wa.me/923076559933?text=${encodeURIComponent(
                  `I am interested in a solar project similar to: ${selectedProject.title} (${selectedProject.capacity})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-emerald-500 to-cyan-400"
              >
                Inquire Similar Solution
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
