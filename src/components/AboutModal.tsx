import React from 'react';
import { X, ShieldCheck, HardHat, Award, CheckCircle2, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-brand-navy border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b border-slate-700">
          <div className="text-xs uppercase tracking-widest font-bold text-brand-orange mb-1">
            Corporate Profile & Standards
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
            About {COMPANY_INFO.name}
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Delivering precision engineering, structural durability, and ethical construction contracting in Uganda.
          </p>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          
          <div>
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-orange" />
              Our Technical Heritage & Standards
            </h4>
            <p>
              EDI K Technical Services was founded by a cadre of experienced engineering practitioners committed to raising the standard of building craftsmanship in Uganda. We combine technical rigor with practical site leadership to tackle both urban high-density builds and rural infrastructure developments.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Our 4 Pillars of Project Delivery
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span><strong>Accredited Materials:</strong> Batch testing of steel rebar, high-grade cement, and clean sand.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span><strong>Statutory Approvals:</strong> Full compliance with physical planning and municipal building authorities.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span><strong>Transparent BOQ:</strong> Itemized costs down to unit rates with zero hidden charges.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span><strong>Continuous Supervision:</strong> On-site resident engineer oversight at every critical structural phase.</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <HardHat className="w-4 h-4 text-brand-orange" />
              Occupational Health, Safety & Environment (HSE)
            </h4>
            <p>
              We operate under a strict zero-harm culture. Every site is designated with clear safety zones, mandatory PPE enforcement (helmets, high-vis vests, steel-toe boots), scaffolding load testing, and daily morning toolbox talks before work begins.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-orange" />
              Ugandan Community & Local Workforce Development
            </h4>
            <p>
              We take pride in training and employing local skilled artisans, plumbers, steel fixers, and equipment operators across Uganda, upskilling communities while enforcing international construction standards.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
