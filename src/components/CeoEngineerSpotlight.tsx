import React, { useState } from 'react';
import { LEAD_ENGINEER_CEO, COMPANY_INFO } from '../data/companyData';
import { 
  HardHat, 
  Award, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Quote, 
  CheckCircle2, 
  MapPin,
  Camera,
  ArrowRight
} from 'lucide-react';

interface CeoEngineerSpotlightProps {
  onScheduleAssessment: () => void;
}

export const CeoEngineerSpotlight: React.FC<CeoEngineerSpotlightProps> = ({
  onScheduleAssessment
}) => {
  const [photoSrc, setPhotoSrc] = useState<string>(LEAD_ENGINEER_CEO.photoUrl);
  const [customPhotoActive, setCustomPhotoActive] = useState<boolean>(false);

  // Allow user to preview their personal photo on the live page
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPhotoSrc(previewUrl);
      setCustomPhotoActive(true);
    }
  };

  return (
    <section className="py-20 bg-brand-navy border-y border-slate-800 text-slate-100 relative overflow-hidden">
      {/* Blueprint Grid & Glow Accents */}
      <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header Pill */}
        <div className="text-center md:text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <HardHat className="w-3.5 h-3.5" />
            <span>Executive Leadership & Engineering Direction</span>
          </div>
        </div>

        {/* Main Grid: Photo Column + Executive Narrative Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: CEO & Engineer Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-orange via-amber-500 to-slate-700 rounded-3xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-700/80 shadow-2xl">
                <img
                  src={photoSrc}
                  alt={`${LEAD_ENGINEER_CEO.name} - ${LEAD_ENGINEER_CEO.role}`}
                  className="w-full h-[460px] object-cover object-center filter brightness-95 contrast-105"
                  onError={() => {
                    // Fallback to high quality civil engineering portrait if local file not yet dropped
                    setPhotoSrc("https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?q=80&w=1000&auto=format&fit=crop");
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-brand-dark/20" />

                {/* Top Badge: Founder & CEO Seal */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-dark/90 backdrop-blur-md border border-brand-orange/50 text-white text-xs font-bold shadow-lg">
                  <Award className="w-4 h-4 text-brand-orange" />
                  <span>Founder & Lead Engineer</span>
                </div>

                {/* Photo Preview Upload Pill */}
                <label 
                  className="absolute top-4 right-4 cursor-pointer p-2 rounded-lg bg-slate-900/80 hover:bg-brand-orange text-slate-300 hover:text-white transition-all border border-slate-700 flex items-center gap-1.5 text-xs backdrop-blur-md shadow"
                  title="Upload / Preview Your Personal Photo"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px] font-semibold">
                    {customPhotoActive ? 'Change Photo' : 'Upload Photo'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-brand-navy/95 border border-slate-700 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-heading font-black text-white flex items-center gap-2">
                        <span>{LEAD_ENGINEER_CEO.name}</span>
                        <ShieldCheck className="w-4 h-4 text-brand-orange" />
                      </h4>
                      <p className="text-xs text-brand-orange font-bold uppercase tracking-wider">
                        {LEAD_ENGINEER_CEO.role}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {COMPANY_INFO.name} &bull; Rukiga District
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Verified Seal */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-brand-dark border-2 border-brand-orange/60 p-3 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="p-2 rounded-xl bg-brand-orange text-white">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Direct Site Supervision</div>
                  <div className="text-[10px] text-slate-400">Personal Engineering Oversight</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Executive Narrative & Direct Access */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight leading-tight mb-2">
                Direct Engineering Leadership. <br />
                <span className="text-brand-orange">Personal Accountability on Every Build.</span>
              </h2>
              <p className="text-sm font-semibold text-slate-300">
                A Message from our Lead Engineer & Chief Executive Officer
              </p>
            </div>

            {/* Executive Statement Box */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 relative">
              <Quote className="w-10 h-10 text-brand-orange/20 absolute top-4 right-4" />
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic relative z-10">
                &ldquo;{LEAD_ENGINEER_CEO.executiveQuote}&rdquo;
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{LEAD_ENGINEER_CEO.name}</div>
                  <div className="text-xs text-brand-orange font-medium">{LEAD_ENGINEER_CEO.qualifications}</div>
                </div>
                <div className="text-right text-[11px] text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Kamwezi, Rukiga District</span>
                </div>
              </div>
            </div>

            {/* Leadership Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  <strong>Strict Bill of Quantities (BOQ):</strong> Calculated with precision to prevent budget inflation.
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">
                  <strong>Quality Material Verification:</strong> Personal inspection of cement grades, aggregates, and steel rebar.
                </span>
              </div>
            </div>

            {/* Direct Executive Contact Actions */}
            <div className="pt-3 border-t border-slate-800">
              <div className="text-xs text-slate-400 mb-3">
                Speak directly with the Lead Engineer & CEO regarding your site assessment or construction brief:
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${LEAD_ENGINEER_CEO.directPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Eng. Edison ({LEAD_ENGINEER_CEO.directPhone})</span>
                </a>

                <a
                  href={`https://wa.me/${LEAD_ENGINEER_CEO.directWhatsApp}?text=${encodeURIComponent("Hello Eng. Edison Atuheire, I would like to consult with you directly regarding a construction project with EDI K Technical Services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Eng. Edison</span>
                </a>

                <button
                  onClick={onScheduleAssessment}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-slate-700 hover:border-brand-orange text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Request Site Assessment</span>
                  <ArrowRight className="w-4 h-4 text-brand-orange" />
                </button>
              </div>

              {/* Note on how to replace permanent image */}
              <div className="mt-4 text-[11px] text-slate-500">
                Tip: You can use the button on the photo to preview your picture live, or save your permanent photo file as <code className="text-slate-400 bg-slate-900 px-1 py-0.5 rounded">public/engineer-ceo.jpg</code>.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
