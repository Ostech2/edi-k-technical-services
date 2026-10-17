import React from 'react';
import { TESTIMONIALS_DATA } from '../data/companyData';
import { Star, Quote, MessageSquare, Info, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Client Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
              What Our <span className="text-brand-orange">Clients Say.</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              Read feedback from commercial developers, corporate directors, and residential homeowners on their experience partnering with EDI K Technical Services.
            </p>
          </div>

          {/* Sample Content Disclosure */}
          <div className="mt-6 md:mt-0 p-3 rounded-xl bg-brand-navy border border-slate-700 text-xs text-slate-300 flex items-start gap-2 max-w-sm">
            <Info className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <span>
              Sample testimonial placeholders for demonstration purposes during platform development. Easy to replace with verified client statements.
            </span>
          </div>
        </div>

        {/* Testimonials Grid (2 centered cards matching our 2 real projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl bg-brand-navy border border-slate-700/80 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-800">
                <Quote className="w-10 h-10 opacity-30" />
              </div>

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange/50"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-amber-600 flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
                    {t.clientName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.clientName}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                  </h4>
                  <p className="text-xs text-brand-orange font-medium">
                    {t.clientRole}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {t.location} &bull; {t.projectType}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
