import React from 'react';
import { WHY_CHOOSE_US } from '../data/companyData';
import { 
  Award, 
  Users, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-brand-orange" };
    switch (iconName) {
      case 'Award': return <Award {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'MessageSquareCheck':
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section className="py-24 bg-brand-dark text-slate-100 relative overflow-hidden">
      {/* Decorative Blueprint Background Element */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>The EDI K Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            Why Partner with <span className="text-brand-orange">EDI K Technical Services?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Construction in Uganda requires reliable contractors who respect your budget, enforce safety, and maintain the highest standard of structural integrity.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative p-7 rounded-2xl bg-brand-navy border border-slate-700/80 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Top Accent Indicator */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-brand-dark border border-slate-700/80 group-hover:border-brand-orange/40 group-hover:scale-110 transition-all">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  {pillar.statBadge && (
                    <span className="text-[11px] font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-md border border-brand-orange/20">
                      {pillar.statBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-orange transition-colors mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Guarantee */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified technical practice</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
