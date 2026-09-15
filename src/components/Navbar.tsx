import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageCircle,
  Factory,
  Home as HomeIcon,
  Video,
  Star,
  Zap,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
  }, [location.pathname, location.search]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setProjectsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProjectsDropdownOpen(false);
    }, 200);
  };

  const projectCategories = [
    {
      name: 'Industrial Projects',
      desc: 'MW-Scale Solar & High-Voltage BESS',
      to: '/projects?cat=industrial',
      icon: Factory,
      color: 'text-[#F58220]',
    },
    {
      name: 'Residential Projects',
      desc: 'Luxury Villas & Net Metering Systems',
      to: '/projects?cat=residential',
      icon: HomeIcon,
      color: 'text-[#10B981]',
    },
    {
      name: 'Projects Pictures & Reels',
      desc: 'Drone Walkthroughs & Field Installations',
      to: '/projects?cat=media',
      icon: Video,
      color: 'text-[#00F0FF]',
    },
    {
      name: 'Client Reviews',
      desc: 'Industrialists & Homeowners Feedback',
      to: '/projects?cat=reviews',
      icon: Star,
      color: 'text-amber-400',
    },
  ];

  const isCurrent = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-[#F58220]/25 shadow-2xl shadow-black/80 py-2.5'
          : 'bg-black/80 backdrop-blur-sm border-b border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo with EXACT asset usage */}
          <Link
            to="/"
            className="flex items-center group shrink-0"
            aria-label="KyZee Solars Home"
          >
            {/* 
              CRITICAL BRANDING & LOGO RULE:
              Exact official logo image asset via <img> tag.
              Prominent, crisp, and clearly visible.
            */}
            <img
              src="/kyzee-logo.png"
              alt="KyZee Solars (Pvt) Ltd - Your Smart Energy Partner"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[240px] sm:max-w-[320px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isCurrent('/')
                  ? 'text-[#F58220] bg-white/5 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {/* Interactive Projects Dropdown (Hover/Click) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/projects"
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5 transition-colors ${
                  isCurrent('/projects')
                    ? 'text-[#F58220] bg-white/5 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Projects</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    projectsDropdownOpen ? 'rotate-180 text-[#F58220]' : ''
                  }`}
                />
              </Link>

              {/* Hover Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-1 w-80 rounded-2xl bg-black/95 backdrop-blur-xl border border-[#F58220]/30 shadow-2xl p-2 transition-all duration-200 origin-top-left ${
                  projectsDropdownOpen
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="px-3 py-2 border-b border-white/10 mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F58220]">
                    Portfolio & Experiences
                  </span>
                </div>
                <div className="space-y-1">
                  {projectCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <Link
                        key={cat.name}
                        to={cat.to}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#F58220]/40">
                          <Icon className={`w-4 h-4 ${cat.color}`} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#F58220] transition-colors">
                            {cat.name}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {cat.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isCurrent('/about')
                  ? 'text-[#F58220] bg-white/5 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isCurrent('/contact')
                  ? 'text-[#F58220] bg-white/5 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#F58220] via-[#FFA033] to-[#F58220] hover:brightness-110 transition-all duration-300 shadow-lg shadow-[#F58220]/25 active:scale-95 flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-black" />
              <span>Get Free Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-black bg-[#F58220]"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-white/15 px-4 pt-4 pb-6 space-y-3 animate-fade-in">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isCurrent('/') ? 'text-[#F58220] bg-white/5' : 'text-slate-200'
            }`}
          >
            Home
          </Link>

          {/* Projects expandable */}
          <div className="space-y-1 pl-2 border-l-2 border-[#F58220]/40">
            <Link
              to="/projects"
              className="block px-3 py-1 text-sm font-bold text-white uppercase tracking-wider"
            >
              All Projects & Portfolio
            </Link>
            {projectCategories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.to}
                className="block px-3 py-1 text-xs text-slate-400 hover:text-[#F58220]"
              >
                • {cat.name}
              </Link>
            ))}
          </div>

          <Link
            to="/about"
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isCurrent('/about') ? 'text-[#F58220] bg-white/5' : 'text-slate-200'
            }`}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className={`block px-3 py-2 rounded-lg text-base font-semibold ${
              isCurrent('/contact') ? 'text-[#F58220] bg-white/5' : 'text-slate-200'
            }`}
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#F58220]"
            >
              <span>Request Solar Consultation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
