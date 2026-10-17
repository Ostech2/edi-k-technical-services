import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md',
  showSubtitle = true 
}) => {
  const isLight = variant === 'light';
  
  const iconSizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Monogram Architectural Badge */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center font-heading font-black rounded-lg bg-gradient-to-br from-brand-navy to-brand-dark border border-brand-orange/40 shadow-md transition-transform duration-300 group-hover:scale-105`}>
        <div className="absolute inset-0 rounded-lg bg-brand-orange/10 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Geometric Crane / Compass Grid Accent */}
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
        
        <span className="relative text-brand-orange font-black tracking-tighter">
          E<span className="text-white">K</span>
        </span>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`font-heading font-black tracking-tight leading-none ${textSizes[size]} ${isLight ? 'text-white' : 'text-slate-900'}`}>
          EDI K <span className="text-brand-orange">TECHNICAL</span>
        </span>
        {showSubtitle && (
          <span className={`text-[10px] uppercase font-bold tracking-widest mt-1 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
            Services Ltd &bull; Uganda
          </span>
        )}
      </div>
    </div>
  );
};
