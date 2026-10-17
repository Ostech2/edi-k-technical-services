import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  HardHat, 
  Award, 
  ChevronDown, 
  Phone, 
  MessageSquare, 
  MapPin, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { LEAD_ENGINEER_CEO, COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenQuoteModal, 
  onExploreServices 
}) => {
  const [photoSrc, setPhotoSrc] = useState<string>(LEAD_ENGINEER_CEO.photoUrl);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-dark"
    >
      {/* Background Photography with Dark Dramatic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/team-bricklaying.png"
          alt="EDI K Technical Services team on site - Rukiga District Uganda"
          className="w-full h-full object-cover object-center filter brightness-[0.42] scale-105 transform motion-safe:animate-pulse duration-[10000ms]"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-navy/85 to-brand-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-brand-dark/50" />
        <div className="absolute inset-0 architectural-grid opacity-30" />
      </div>

      {/* Floating Blueprint Accent Lines */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container: Two Column Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 max-w-2xl">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navyLight/80 border border-brand-orange/40 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <HardHat className="w-3.5 h-3.5" />
              <span>Premier Construction & Technical Engineering &bull; Uganda</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight leading-[1.08] mb-6">
              BUILDING YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-brand-orange">VISION.</span><br />
              ENGINEERING YOUR <span className="underline decoration-brand-orange decoration-4 underline-offset-8">FUTURE.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 border-l-2 border-brand-orange/60 pl-4 bg-brand-dark/40 py-1.5 rounded-r">
              At <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong>, we turn ideas into lasting structures through quality construction, technical expertise, and an unwavering commitment to engineering excellence.
            </p>

            {/* Prominent Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold shadow-xl shadow-brand-orange/25 hover:shadow-brand-orange/40 transform hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/90 text-white border border-slate-600 hover:border-brand-orange/50 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold backdrop-blur-md transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Assurance Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-5 border-t border-slate-700/60">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Certified Quality</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Award className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Transparent BOQs</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <HardHat className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Safety-First (OHS)</span>
              </div>
            </div>

          </div>

          {/* Right Column: CEO & LEAD ENGINEER HERO SPOTLIGHT (5 cols) - Pointed by user! */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-orange via-amber-500 to-blue-500 rounded-3xl blur-md opacity-40 animate-pulse duration-3000" />

              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden bg-brand-navy border-2 border-brand-orange/60 shadow-2xl backdrop-blur-xl">
                
                {/* Photo Container */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900 group">
                  <img
                    src={photoSrc}
                    alt={`${LEAD_ENGINEER_CEO.name} - ${LEAD_ENGINEER_CEO.role}`}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    onError={() => {
                      setPhotoSrc("/project-modern-residence.jpg");
                    }}
                  />

                  {/* Gradient mask on photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-dark/30" />

                  {/* Top Badge: Founder & CEO Seal */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-dark/90 backdrop-blur-md border border-brand-orange/50 text-white text-xs font-bold shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Founder &amp; Lead Engineer</span>
                  </div>

                  {/* Bottom Photo Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 bg-brand-dark/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Direct Site Supervision
                    </span>
                    <span className="text-[10px] text-slate-400">Rukiga &bull; Uganda</span>
                  </div>
                </div>

                {/* Card Information Body */}
                <div className="p-5 space-y-4">
                  
                  {/* Title & Role */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-heading font-black text-white flex items-center gap-2">
                        <span>{LEAD_ENGINEER_CEO.name}</span>
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                      </h3>
                      <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/15 px-2 py-0.5 rounded border border-brand-orange/30">
                        CEO
                      </span>
                    </div>
                    <p className="text-xs font-bold text-brand-orange uppercase tracking-wider mt-0.5">
                      {LEAD_ENGINEER_CEO.role}
                    </p>
                    <p className="text-xs text-slate-300 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-brand-orange" />
                      <span>Kashekye, Kamwezi &bull; Rukiga District</span>
                    </p>
                  </div>

                  {/* Executive Quote Snippet */}
                  <p className="text-xs text-slate-300 italic border-l-2 border-brand-orange pl-3 py-0.5 leading-relaxed bg-brand-dark/40 rounded-r">
                    &ldquo;Personal engineering oversight on every foundation, concrete pour, and structural installation across Uganda.&rdquo;
                  </p>

                  {/* Direct Contact Action Row */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={`tel:${LEAD_ENGINEER_CEO.directPhone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center justify-center gap-1.5 bg-brand-orange hover:bg-brand-orangeHover text-white py-2.5 px-3 rounded-lg text-xs font-bold shadow-md transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Eng. Edison</span>
                    </a>

                    <a
                      href={`https://wa.me/${LEAD_ENGINEER_CEO.directWhatsApp}?text=${encodeURIComponent("Hello Eng. Edison Atuheire, I would like to consult with you directly regarding a construction project with EDI K Technical Services.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-3 rounded-lg text-xs font-bold shadow-md transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Eng. Edison</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-400 hover:text-white transition-colors cursor-pointer hidden md:flex">
        <span className="text-[10px] uppercase font-bold tracking-widest mb-1 text-slate-400">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-brand-orange" />
      </div>
    </section>
  );
};
