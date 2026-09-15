import React, { useState } from 'react';
import { ShieldCheck, Cpu, Battery, Wrench, CheckCircle2, ArrowRight, MessageCircle, Sparkles, ExternalLink, X } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/solarData';
import { ProductItem } from '../types';

export const ProductsGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const getBrandBadgeColor = (brand: string) => {
    switch (brand) {
      case 'NitroX':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'Inverex':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'Phoenix':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'KyZee Care':
        return 'bg-gradient-to-r from-emerald-500 to-cyan-400 text-black border-transparent font-extrabold';
      default:
        return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <section id="products" className="relative py-24 bg-[#070b09] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Certified Hardware & Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Products & Brands Showcase
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Engineered hardware tested for relentless performance under extreme desert heat and high grid instability, accompanied by our industry-exclusive doorstep service commitment.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => {
            const isHighlight = prod.isSpecialHighlight;

            return (
              <div
                key={prod.id}
                className={`rounded-3xl relative overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
                  isHighlight
                    ? 'p-[2px] bg-gradient-to-b from-[#10B981] via-[#00F0FF] to-[#10B981] shadow-2xl shadow-[#10B981]/25 lg:col-span-2'
                    : 'glass-panel glass-panel-hover border border-white/10'
                }`}
              >
                <div className={`h-full flex flex-col justify-between rounded-[22px] bg-[#0c1410] ${isHighlight ? 'p-6 sm:p-8' : 'p-6'}`}>
                  <div>
                    {/* Visual Image Header */}
                    <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-5 bg-black/50 border border-white/5">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                      {/* Brand Pill */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold border backdrop-blur-md ${getBrandBadgeColor(prod.brand)}`}>
                          {prod.brand}
                        </span>
                      </div>

                      {/* Status Tag */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-black/70 text-slate-200 border border-white/10 backdrop-blur-md">
                          {prod.badge}
                        </span>
                      </div>

                      {/* Category Label Bottom */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-xs font-medium text-cyan-300 truncate">
                          {prod.category}
                        </p>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                          {prod.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-amber-400 font-semibold mb-3">
                      {prod.tagline}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {prod.specs.slice(0, 4).map((spec, i) => (
                        <div key={i} className="p-2 rounded-xl bg-black/40 border border-white/5">
                          <span className="text-[10px] text-slate-400 block">{spec.label}</span>
                          <span className="text-xs font-bold text-white block truncate">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights list */}
                    <div className="space-y-1.5 mb-5">
                      {prod.highlights.slice(0, isHighlight ? 4 : 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bottom Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(prod)}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5"
                    >
                      <span>Full Specs</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    <a
                      href={`https://wa.me/923076559933?text=${encodeURIComponent(
                        `Hello KyZee Solars, I am interested in inquiring about pricing and availability for: ${prod.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#10B981] to-[#00F0FF] hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire Unit</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DETAILED SPECIFICATIONS MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="glass-panel max-w-xl w-full p-6 sm:p-8 rounded-3xl border border-white/20 relative shadow-2xl bg-[#0c1410]">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getBrandBadgeColor(selectedProduct.brand)}`}>
                {selectedProduct.brand}
              </span>
              <span className="text-xs text-slate-400">{selectedProduct.category}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              {selectedProduct.name}
            </h3>
            <p className="text-sm text-amber-400 font-semibold mb-6">
              {selectedProduct.tagline}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
                Technical Data Sheet
              </h4>
              <div className="divide-y divide-white/10 rounded-2xl bg-black/50 border border-white/10 overflow-hidden">
                {selectedProduct.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between p-3 text-xs">
                    <span className="text-slate-400 font-medium">{spec.label}</span>
                    <span className="text-white font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 pt-2">
                Engineering Benefits & Guarantees
              </h4>
              <div className="space-y-2">
                {selectedProduct.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:bg-white/5"
              >
                Close
              </button>
              <a
                href={`https://wa.me/923076559933?text=${encodeURIComponent(
                  `Assalam-o-Alaikum, I would like an official quotation for ${selectedProduct.name} from KyZee Solars.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#10B981] to-[#00F0FF] flex items-center gap-2 shadow-lg shadow-emerald-500/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Quotation on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
