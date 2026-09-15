import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/solarData';

export const FloatingSocialBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hidden initially when landing on page top.
      // As user scrolls down past 120px, smoothly reveals and pins on right side.
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll in case user reloads mid-page
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: COMPANY_INFO.socialLinks.whatsapp,
      color: 'bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-[#25D366]/30',
      label: 'Chat on WhatsApp',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: COMPANY_INFO.socialLinks.facebook,
      color: 'bg-[#1877F2] text-white hover:bg-[#1465cc] shadow-[#1877F2]/30',
      label: 'Official Facebook',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: COMPANY_INFO.socialLinks.instagram,
      color: 'bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] text-white hover:opacity-90 shadow-pink-500/30',
      label: 'Instagram Reels',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: COMPANY_INFO.socialLinks.youtube,
      color: 'bg-[#FF0000] text-white hover:bg-[#cc0000] shadow-red-500/30',
      label: 'YouTube Channel',
    },
  ];

  return (
    <aside
      aria-label="Quick Social and Contact Channels"
      className={`fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-x-0 pointer-events-auto'
          : 'opacity-0 translate-x-12 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-2.5 p-2 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-md ${item.color} group relative`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              {/* Tooltip on hover pointing left */}
              <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white bg-black/90 border border-white/15 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};
