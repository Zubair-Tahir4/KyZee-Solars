import React from 'react';

interface KyZeeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const KyZeeLogo: React.FC<KyZeeLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Prominent and crisp height settings so the logo is clearly visible
  const heightClasses = {
    sm: 'h-10 sm:h-11',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-22 sm:h-28',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* 
        CRITICAL BRANDING & LOGO RULE:
        Exact official logo image asset usage via <img> tag.
        Not drawn, simulated, or re-styled by code.
      */}
      <img
        src="/kyzee-logo.png"
        alt="KyZee Solars (Pvt) Ltd - Your Smart Energy Partner"
        className={`${heightClasses[size]} w-auto max-w-[280px] sm:max-w-[340px] object-contain transition-transform duration-200 hover:scale-[1.02]`}
        loading="eager"
      />
    </div>
  );
};
