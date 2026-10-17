import React from 'react';
import { ArrowRight, PhoneCall, HardHat, FileSpreadsheet } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CtaSectionProps {
  onOpenQuoteModal: () => void;
  onScrollToContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenQuoteModal,
  onScrollToContact
}) => {
  return (
    <section className="relative py-20 bg-brand-navy overflow-hidden">
      {/* Background Architectural Construction Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?q=80&w=2000&auto=format&fit=crop"
          alt="Construction site Uganda"
          className="w-full h-full object-cover filter brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-navy/95 to-brand-dark/90" />
        <div className="absolute inset-0 architectural-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-bold uppercase tracking-wider mb-6">
          <HardHat className="w-4 h-4" />
          <span>Start Your Next Project With Confidence</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          READY TO BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange">SOMETHING GREAT?</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Let&apos;s discuss your next construction or technical project and turn your plans into reality with engineering precision and transparent pricing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orangeHover text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-brand-orange/25 hover:shadow-brand-orange/40 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <FileSpreadsheet className="w-5 h-5" />
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-600 hover:border-brand-orange/50 px-8 py-4 rounded-xl text-base font-bold transition-all"
          >
            <PhoneCall className="w-4 h-4 text-brand-orange" />
            <span>Contact Our Team</span>
          </button>
        </div>

        {/* Direct Phone Assistance */}
        <div className="mt-8 text-xs text-slate-400">
          Prefer speaking directly with an engineer? Call{' '}
          <a
            href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
            className="text-white font-bold underline decoration-brand-orange hover:text-brand-orange"
          >
            {COMPANY_INFO.contact.primaryPhone}
          </a>{' '}
          or chat on WhatsApp anytime.
        </div>

      </div>
    </section>
  );
};
