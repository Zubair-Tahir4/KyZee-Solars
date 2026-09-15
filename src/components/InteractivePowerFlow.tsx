import React, { useState, useEffect } from 'react';
import { Sun, Battery, Building2, Home, Zap, Radio, CheckCircle, RefreshCw, Eye } from 'lucide-react';

export const InteractivePowerFlow: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'day' | 'night' | 'blackout'>('day');
  const [isSimulating, setIsSimulating] = useState(true);
  const [tick, setTick] = useState(0);

  // Dynamic simulation tick for live readings
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setTick((prev) => (prev + 1) % 1000);
    }, 1500);
    return () => clearInterval(interval);
  }, [isSimulating]);

  // Mode based telemetry data
  const modeData = {
    day: {
      title: 'Peak Sunlight Generation & Battery Charging',
      solarKw: (28.4 + Math.sin(tick) * 1.2).toFixed(1),
      batteryKw: (8.6 + Math.cos(tick) * 0.4).toFixed(1),
      batteryState: 'Charging at 8.6 kW',
      facilityLoadKw: (14.2 + Math.sin(tick * 0.5) * 0.8).toFixed(1),
      gridExportKw: (5.6 + Math.cos(tick * 0.5) * 0.5).toFixed(1),
      gridStatus: 'Exporting Green Power (Net Metering)',
      description:
        'Live photons strike the rooftop array, generating high-voltage DC power. The NitroX hybrid inverter powers the facility while concurrently charging the Phoenix BESS and exporting surplus to the utility grid.',
    },
    night: {
      title: 'Nighttime Intelligent Battery Discharge (Peak Shaving)',
      solarKw: '0.0',
      batteryKw: '-12.8',
      batteryState: 'Discharging at 12.8 kW',
      facilityLoadKw: (12.8 + Math.sin(tick) * 0.5).toFixed(1),
      gridExportKw: '0.0',
      gridStatus: 'Zero Grid Consumption (Peak Tariff Avoided)',
      description:
        'Sun has set. The high-capacity BESS automatically discharges clean stored energy into the facility loads, avoiding expensive peak-hour grid tariffs without needing utility power.',
    },
    blackout: {
      title: 'Emergency Grid Blackout: Sub-10ms Islanding Mode',
      solarKw: (18.2 + Math.sin(tick) * 0.8).toFixed(1),
      batteryKw: (6.5 + Math.cos(tick) * 0.5).toFixed(1),
      batteryState: 'Buffering & Stabilizing Load',
      facilityLoadKw: '16.5',
      gridExportKw: '0.0 (ISOLATED)',
      gridStatus: 'National Grid Down — 100% Zero Interruption',
      description:
        'Grid failure detected. The hybrid inverter isolates from the grid in under 10ms with zero flicker. Solar panels and Phoenix BESS sustain essential commercial loads continuously.',
    },
  };

  const current = modeData[activeMode];

  return (
    <section className="relative py-24 bg-[#070b09] border-y border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/25 text-xs font-semibold text-[#F58220] mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Power Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Solar & BESS Energy Flow Sequence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Witness how sunlight is captured, converted through 3-phase hybrid inverters, stored in high-voltage BESS, and distributed with zero interruption.
          </p>

          {/* Interactive Mode Switcher Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 p-1.5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md max-w-2xl mx-auto">
            <button
              type="button"
              onClick={() => setActiveMode('day')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'day'
                  ? 'bg-gradient-to-r from-[#F58220] to-[#FFA033] text-black shadow-lg shadow-[#F58220]/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sun className="w-4 h-4 text-black" />
              <span>Day: Solar + BESS Charging</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMode('night')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'night'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Battery className="w-4 h-4" />
              <span>Night: BESS Peak Shaving</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMode('blackout')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeMode === 'blackout'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Grid Blackout: Islanding Mode</span>
            </button>
          </div>
        </div>

        {/* Live Power Flow Visual Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl">
          {/* Top Status Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <h3 className="text-lg font-bold text-white">
                  {current.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                {current.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10">
                <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Telemetry Active (1.5s refresh)</span>
              </span>
            </div>
          </div>

          {/* REALISTIC ANIMATED VECTOR POWER FLOW DIAGRAM */}
          <div className="relative w-full overflow-x-auto pb-4">
            <div className="min-w-[760px] grid grid-cols-5 gap-4 items-center relative py-8 px-4">
              {/* NODE 1: THE SUN & RAYS */}
              <div className="flex flex-col items-center text-center relative group">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 relative ${
                    activeMode === 'night'
                      ? 'bg-slate-800/40 border border-slate-700 text-slate-500'
                      : 'bg-gradient-to-tr from-amber-500 to-orange-400 text-black shadow-[0_0_40px_rgba(245,158,11,0.5)] animate-pulse'
                  }`}
                >
                  <Sun className={`w-10 h-10 ${activeMode !== 'night' ? 'animate-spin' : ''}`} style={{ animationDuration: '24s' }} />
                  {activeMode !== 'night' && (
                    <span className="absolute -inset-2 rounded-full border border-amber-400/40 animate-ping" />
                  )}
                </div>
                <h4 className="text-sm font-bold text-white mt-4">Solar Irradiance</h4>
                <p className="text-xs text-amber-400 font-semibold">
                  {activeMode === 'night' ? 'Dusk / Night' : '1,020 W/m²'}
                </p>
                <span className="text-[10px] text-slate-400">High UV Index</span>
              </div>

              {/* ARROW 1 -> 2 (Sun to Panels) */}
              <div className="relative flex flex-col items-center justify-center">
                <div className="w-full h-1 bg-slate-800 rounded relative overflow-hidden">
                  {activeMode !== 'night' && (
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-energy-flow" />
                  )}
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-400/80 mt-1">
                  Photons
                </span>
              </div>

              {/* NODE 2: ROOFTOP SOLAR ARRAYS */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0c1829] to-[#040810] border-2 border-cyan-500/40 p-2 flex flex-col items-center justify-center shadow-xl relative overflow-hidden">
                  {/* Solar cell grid pattern */}
                  <div className="grid grid-cols-3 gap-1 w-full h-full opacity-70">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-sm transition-colors duration-500 ${
                          activeMode !== 'night'
                            ? 'bg-blue-900 border border-cyan-400/50'
                            : 'bg-slate-900 border border-slate-800'
                        }`}
                      />
                    ))}
                  </div>
                  {activeMode !== 'night' && (
                    <div className="absolute inset-0 bg-cyan-400/10 animate-pulse-glow pointer-events-none" />
                  )}
                </div>
                <h4 className="text-sm font-bold text-white mt-3">Tier-1 Bifacial PV</h4>
                <p className="text-xs font-mono font-bold text-cyan-400">
                  {current.solarKw} kW DC
                </p>
                <span className="text-[10px] text-slate-400">580W TOPCon Modules</span>
              </div>

              {/* ARROW 2 -> 3 (Panels to Inverter) */}
              <div className="relative flex flex-col items-center justify-center">
                <div className="w-full h-1.5 bg-slate-800 rounded relative overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent ${
                      activeMode !== 'night' ? 'animate-energy-flow' : 'opacity-0'
                    }`}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-cyan-400/80 mt-1 font-mono">
                  High-Voltage DC
                </span>
              </div>

              {/* NODE 3: NITROX / INVEREX HYBRID INVERTER */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#0f1f17] to-[#08120c] border-2 border-emerald-500/50 p-2.5 flex flex-col justify-between shadow-2xl relative">
                  {/* Digital screen */}
                  <div className="w-full bg-black/80 rounded-lg p-1.5 border border-emerald-500/30 text-left">
                    <div className="flex items-center justify-between text-[9px] text-slate-400">
                      <span>NitroX 3P</span>
                      <span className="text-emerald-400 font-bold">98.4%</span>
                    </div>
                    <div className="text-[11px] font-mono font-black text-emerald-400 truncate">
                      {activeMode === 'night' ? 'BAT -> AC' : 'DC -> 3P AC'}
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-slate-300">
                    <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-semibold">Tri-Phase Pure Sine</span>
                  </div>

                  <div className="w-full flex justify-between items-center px-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>
                </div>
                <h4 className="text-sm font-bold text-white mt-3">NitroX Smart Inverter</h4>
                <p className="text-xs font-mono font-bold text-emerald-400">
                  {current.facilityLoadKw} kW Load
                </p>
                <span className="text-[10px] text-slate-400">Dual MPPT Sync</span>
              </div>
            </div>

            {/* LOWER INTERCONNECTED TIER: BESS STORAGE + FACILITY + GRID */}
            <div className="min-w-[760px] grid grid-cols-3 gap-6 pt-6 mt-4 border-t border-white/10">
              {/* COMPONENT A: PHOENIX & INVEREX BESS STORAGE */}
              <div className="p-5 rounded-2xl bg-[#0b1410] border border-white/10 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Battery className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-white">Phoenix / Inverex BESS</h5>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300">
                      94% SOC
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">High-Voltage LiFePO4</p>
                  <div className="mt-2 text-xs font-mono text-cyan-300 font-semibold">
                    {current.batteryState}
                  </div>
                  {/* Progress battery bar */}
                  <div className="w-full h-2 rounded-full bg-black/60 border border-white/10 mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 w-[94%]" />
                  </div>
                </div>
              </div>

              {/* COMPONENT B: COMMERCIAL & RESIDENTIAL LOADS */}
              <div className="p-5 rounded-2xl bg-[#0b1410] border border-white/10 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-white">Industrial & Residential Loads</h5>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                      100% Online
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">HVAC, Machinery & Lighting</p>
                  <div className="mt-2 text-xs font-mono text-emerald-400 font-bold">
                    Active Consumption: {current.facilityLoadKw} kW
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Zero harmonic distortion</p>
                </div>
              </div>

              {/* COMPONENT C: UTILITY GRID & NET METERING */}
              <div className="p-5 rounded-2xl bg-[#0b1410] border border-white/10 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Zap className="w-7 h-7 text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-white">Utility Grid & Net Meter</h5>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        activeMode === 'blackout'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}
                    >
                      {activeMode === 'blackout' ? 'Disconnected' : 'Synchronized'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">3-Phase Bi-Directional</p>
                  <div className="mt-2 text-xs font-mono text-amber-300 font-semibold truncate">
                    {current.gridStatus}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Export: {current.gridExportKw} kW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom engineering note */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              Sub-10ms UPS grade transfer prevents industrial machinery reboot during grid trips
            </span>
            <a
              href="#contact"
              className="text-[#00F0FF] hover:underline font-semibold shrink-0"
            >
              Configure Custom System Architecture &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
