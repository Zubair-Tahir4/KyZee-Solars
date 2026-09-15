import React, { useState } from 'react';
import { Sun, BatteryCharging, Zap, CheckCircle2, ArrowRight, ShieldCheck, Gauge, TrendingUp, Layers } from 'lucide-react';
import { SOLAR_SYSTEMS } from '../data/solarData';

export const SystemsShowcase: React.FC = () => {
  const [selectedSystemId, setSelectedSystemId] = useState<string>('hybrid');

  const getSystemIcon = (id: string) => {
    switch (id) {
      case 'on-grid':
        return <Sun className="w-6 h-6 text-amber-400" />;
      case 'hybrid':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'bess-offgrid':
        return <BatteryCharging className="w-6 h-6 text-cyan-400" />;
      default:
        return <Zap className="w-6 h-6 text-emerald-400" />;
    }
  };

  const getDiagramBadge = (type: string) => {
    switch (type) {
      case 'on-grid':
        return { label: 'Solar + Grid Net Metering', color: 'border-amber-500/40 text-amber-300' };
      case 'hybrid':
        return { label: 'Solar + Inverter + BESS + Grid', color: 'border-emerald-500/40 text-emerald-300' };
      case 'off-grid':
        return { label: 'Solar + Multi-MWh BESS Vault', color: 'border-cyan-500/40 text-cyan-300' };
      default:
        return { label: 'Complete Smart Solution', color: 'border-white/20 text-white' };
    }
  };

  return (
    <section id="systems" className="relative py-24 bg-[#0a0f0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Turnkey Engineering Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Solar & Energy Systems Showcase
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Engineered to perfection for Pakistan’s climate and grid dynamics. Choose the ideal energy topology to match your operational and financial objectives.
          </p>
        </div>

        {/* 3 Visual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SOLAR_SYSTEMS.map((sys) => {
            const isSelected = selectedSystemId === sys.id;
            const badge = getDiagramBadge(sys.diagramType);

            return (
              <div
                key={sys.id}
                onClick={() => setSelectedSystemId(sys.id)}
                className={`glass-panel p-6 sm:p-8 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between relative group ${
                  isSelected
                    ? 'border-emerald-500/60 shadow-[0_12px_40px_rgba(16,185,129,0.18)] bg-[#101c16]'
                    : 'border-white/10 hover:border-white/25 hover:bg-[#0e1814]'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSystemIcon(sys.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 text-emerald-400 border border-white/10">
                    {sys.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                    {sys.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold mb-4">
                    {sys.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {sys.description}
                  </p>

                  {/* Visual Topology Diagram Bar */}
                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 mb-6">
                    <div className="flex items-center justify-between text-[11px] font-semibold mb-2">
                      <span className="text-slate-400">Power Architecture:</span>
                      <span className={`px-2 py-0.5 rounded border ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>

                    {/* Visual icons route */}
                    <div className="flex items-center justify-between px-2 pt-2 text-xs text-slate-300">
                      <span className="flex flex-col items-center gap-1">
                        <Sun className="w-4 h-4 text-amber-400" />
                        <span className="text-[10px]">PV Array</span>
                      </span>
                      <span className="text-slate-600">&rarr;</span>
                      <span className="flex flex-col items-center gap-1">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        <span className="text-[10px]">Inverter</span>
                      </span>
                      <span className="text-slate-600">&rarr;</span>
                      <span className="flex flex-col items-center gap-1">
                        {sys.id === 'on-grid' ? (
                          <span className="text-[10px] text-cyan-400 font-mono">Net Meter</span>
                        ) : (
                          <BatteryCharging className="w-4 h-4 text-cyan-400" />
                        )}
                        <span className="text-[10px]">{sys.id === 'on-grid' ? 'Grid' : 'BESS'}</span>
                      </span>
                      <span className="text-slate-600">&rarr;</span>
                      <span className="flex flex-col items-center gap-1">
                        <span className="text-[10px] text-emerald-300 font-semibold">Loads</span>
                        <span className="text-[10px]">24/7</span>
                      </span>
                    </div>
                  </div>

                  {/* Core Metrics Pill Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-1 text-[10px] text-slate-400">
                        <Gauge className="w-3 h-3 text-cyan-400" />
                        <span>Efficiency</span>
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">{sys.efficiency}</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-1 text-[10px] text-slate-400">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span>Est. Payback</span>
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">{sys.roiPeriod}</div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {sys.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 truncate max-w-[170px]">
                    {sys.bestFor}
                  </span>
                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#10B981] to-[#00F0FF] hover:opacity-90 transition-opacity"
                  >
                    <span>Estimate</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
