import React from 'react';
import { STATS_DATA } from '../data/companyData';
import { Building2, Briefcase, ThumbsUp, CheckCircle2, Info } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-7 h-7 text-brand-orange" />;
      case 'Briefcase':
        return <Briefcase className="w-7 h-7 text-brand-orange" />;
      case 'ThumbsUp':
        return <ThumbsUp className="w-7 h-7 text-brand-orange" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-7 h-7 text-brand-orange" />;
    }
  };

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container Card */}
      <div className="bg-brand-navy rounded-2xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 md:p-10 backdrop-blur-xl relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS_DATA.map((item) => (
            <div 
              key={item.id}
              className="group relative p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-brand-orange/40 hover:bg-slate-800/60 transition-all duration-300"
            >
              {/* Top Row: Icon & Metric */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-brand-navyLight border border-slate-700/60 group-hover:scale-110 group-hover:border-brand-orange/40 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-heading font-black text-white group-hover:text-brand-orange transition-colors">
                    {item.value}
                  </div>
                </div>
              </div>

              {/* Label & Context */}
              <h3 className="text-base font-bold text-slate-100 mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Transparent Configurable Data Note */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Info className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
          <span>Configurable demonstration indicators representing operational capacity. Official verified audit figures updated on request.</span>
        </div>

      </div>
    </section>
  );
};
