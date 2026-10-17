import React, { useState } from 'react';
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Building,
  HardHat,
  Award
} from 'lucide-react';
import { AboutModal } from './AboutModal';

export const AboutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const coreValues = [
    { title: "Quality", desc: "Rigorous material selection and uncompromised structural craftsmanship." },
    { title: "Integrity", desc: "Transparent billing, authentic reporting, and ethical contract fulfillment." },
    { title: "Reliability", desc: "Adherence to agreed milestones, reliable timelines, and steadfast delivery." },
    { title: "Innovation", desc: "Modern engineering methodologies, green energy, and efficient CAD design." },
    { title: "Customer Satisfaction", desc: "Tailoring every solution to the client's functional goals and investment value." },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            Built on Trust. <span className="text-brand-orange">Driven by Excellence.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            EDI K Technical Services is committed to delivering dependable construction and technical solutions through quality workmanship, professional engineering standards, strict attention to detail, and enduring customer satisfaction.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Imagery Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 group">
                <img
                  src="/project-house-construction.png"
                  alt="EDI K Technical Services - Active Building Construction Project in Uganda"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-brand-dark/90 border border-brand-orange/40 text-brand-orange px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-md shadow">
                  Live Construction Site
                </div>
              </div>

              {/* Overlapping Secondary Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-brand-navy p-5 rounded-xl border border-brand-orange/40 shadow-2xl max-w-[260px] backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-brand-orange text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">UNBS & Codes</div>
                    <div className="text-[11px] text-slate-400">Strict Compliance</div>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Every structure is engineered to Ugandan building control standards.
                </p>
              </div>

              {/* Floating HardHat Badge */}
              <div className="absolute -top-4 -left-4 bg-brand-navyLight border border-slate-700 text-slate-200 px-3.5 py-2 rounded-lg shadow-lg flex items-center gap-2 text-xs font-semibold">
                <HardHat className="w-4 h-4 text-brand-orange" />
                <span>Zero-Accident Safety Protocol</span>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Company Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-brand-orange" />
                Company Overview
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Operating out of Uganda, <strong className="text-white">EDI K TECHNICAL SERVICES</strong> was established to bridge the gap between architectural ambition and durable, on-the-ground engineering reality. We provide full-lifecycle construction services—from initial site assessment and foundation engineering to complete building erection, electrical infrastructure, plumbing installations, and long-term facility maintenance.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether executing commercial retail developments, executive private residences, or civil storm drainage, we combine seasoned technical oversight with transparent procurement to safeguard your capital investment.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-brand-navy/60 border border-slate-700/80">
                <div className="flex items-center gap-2.5 text-brand-orange font-bold text-base mb-2">
                  <Target className="w-5 h-5" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To deliver structurally sound, sustainable, and high-value construction and engineering services in Uganda through technical mastery, professional integrity, and customer-centered collaboration.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-navy/60 border border-slate-700/80">
                <div className="flex items-center gap-2.5 text-brand-orange font-bold text-base mb-2">
                  <Eye className="w-5 h-5" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To become Uganda's most respected and dependable indigenous construction and technical services partner, recognized for setting the benchmark in structural reliability and workmanship excellence.
                </p>
              </div>
            </div>

            {/* Core Values Strip */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span>Our Core Values</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {coreValues.map((val) => (
                  <div 
                    key={val.title}
                    className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 hover:border-brand-orange/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span>{val.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-brand-orange text-sm font-bold px-6 py-3 rounded-lg transition-colors group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* In-depth Modal */}
      {modalOpen && <AboutModal onClose={() => setModalOpen(false)} />}
    </section>
  );
};
