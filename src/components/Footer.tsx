import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin, ShieldCheck, ArrowUp, Radio } from 'lucide-react';
import { KyZeeLogo } from './KyZeeLogo';
import { COMPANY_INFO } from '../data/solarData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSocials = [
    {
      name: 'Facebook',
      href: COMPANY_INFO.socialLinks.facebook,
      icon: Facebook,
      color: 'hover:text-[#1877F2] hover:bg-[#1877F2]/10 border-[#1877F2]/30',
    },
    {
      name: 'Instagram',
      href: COMPANY_INFO.socialLinks.instagram,
      icon: Instagram,
      color: 'hover:text-[#E4405F] hover:bg-[#E4405F]/10 border-[#E4405F]/30',
    },
    {
      name: 'YouTube',
      href: COMPANY_INFO.socialLinks.youtube,
      icon: Youtube,
      color: 'hover:text-[#FF0000] hover:bg-[#FF0000]/10 border-[#FF0000]/30',
    },
    {
      name: 'WhatsApp Direct',
      href: COMPANY_INFO.socialLinks.whatsapp,
      icon: MessageCircle,
      color: 'hover:text-[#25D366] hover:bg-[#25D366]/10 border-[#25D366]/30',
    },
  ];

  return (
    <footer className="relative bg-[#000000] border-t border-[#F58220]/20 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col with official KyZeeLogo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="KyZee Solars Homepage">
              <KyZeeLogo size="md" />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Premier EPC enterprise engineering turnkey on-grid, hybrid solar architectures, and high-voltage Battery Energy Storage Systems (BESS) across Pakistan since 2016.
            </p>

            <div className="pt-1 flex items-center gap-2 text-[11px] text-[#F58220] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Authorized Dealer: Phoenix • Inverex • Aston Energy • CHINT</span>
            </div>

            {/* Official WhatsApp Channel Callout */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/40 text-[11px] font-bold text-[#25D366] hover:bg-[#25D366]/20 transition-all"
              >
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>Join Official WhatsApp Channel for Live Updates</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {footerSocials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`KyZee Solars on ${s.name}`}
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-200 ${s.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="hover:text-[#F58220] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F58220] transition-colors">About Us & Leadership</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#F58220] transition-colors">All Projects</Link>
              </li>
              <li>
                <Link to="/projects?cat=industrial" className="hover:text-[#F58220] transition-colors">Industrial & BESS</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F58220] transition-colors">Get a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Project Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Projects & Media
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/projects?cat=industrial" className="hover:text-[#F58220] transition-colors">Industrial Projects</Link>
              </li>
              <li>
                <Link to="/projects?cat=residential" className="hover:text-[#F58220] transition-colors">Residential Projects</Link>
              </li>
              <li>
                <Link to="/projects?cat=media" className="hover:text-[#F58220] transition-colors">Projects Pictures & Reels</Link>
              </li>
              <li>
                <Link to="/projects?cat=reviews" className="hover:text-[#F58220] transition-colors">Client Reviews</Link>
              </li>
              <li>
                <a href={COMPANY_INFO.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">
                  YouTube Field Drone Logs
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-heading">
              Direct Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                <span>Auto Bahn Road, Hyderabad & DHA/Korangi Operations Karachi, Sindh</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F58220] shrink-0" />
                <a href={`tel:${COMPANY_INFO.whatsappNumber}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.whatsappNumber}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={COMPANY_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: +92 307 6559933
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2016 &ndash; 2026 {COMPANY_INFO.name}. All Rights Reserved. CEO & Co-Founder: {COMPANY_INFO.leadership.name}.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#F58220] font-medium">{COMPANY_INFO.tagline}</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#F58220] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
