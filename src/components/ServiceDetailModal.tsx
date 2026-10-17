import React from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, HardHat } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuoteForService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ 
  service, 
  onClose,
  onRequestQuoteForService 
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-brand-navy border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image for service */}
        <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden mb-6 border border-slate-700">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 rounded-md bg-brand-orange text-white text-xs font-bold uppercase tracking-wider mb-2">
              EDI K Technical Scope
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content body */}
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h4 className="text-base font-bold text-white mb-2">
              Comprehensive Service Overview
            </h4>
            <p className="leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Deliverables / Scope of Work */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800">
            <h4 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-orange" />
              <span>Key Deliverables & Execution Scope</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Quality Assurances */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Engineering Assurances</span>
            </h4>
            <div className="space-y-2">
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <HardHat className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-8 pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Need custom BOQ pricing or site visit for this service?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-medium transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuoteForService(service.id);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all"
            >
              <span>Get Quote for This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
