import React from 'react';
import { X, HardHat } from 'lucide-react';
import { ContactSection } from './ContactSection';

interface QuoteModalProps {
  initialServiceId?: string;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  initialServiceId = '',
  onClose
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-brand-navy border border-slate-700 rounded-2xl shadow-2xl p-4 sm:p-8 max-h-[95vh] overflow-y-auto text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Inner Header */}
        <div className="mb-6 pb-4 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">
            <HardHat className="w-4 h-4" />
            <span>Fast-Track Quotation Desk</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-white">
            Request an Official Quotation
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Specify your project site and structural requirements to receive an itemized Bill of Quantities (BOQ).
          </p>
        </div>

        {/* Embedded Contact / Quote Form */}
        <ContactSection initialServiceId={initialServiceId} />

      </div>
    </div>
  );
};
