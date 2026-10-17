import React from 'react';
import { X, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface PrivacyPolicyModalProps {
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-brand-navy border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-slate-700">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-orange mb-1">
            <Lock className="w-4 h-4" />
            <span>Client Data Protection</span>
          </div>
          <h3 className="text-2xl font-heading font-black text-white">
            Privacy Policy & Client Data Protection
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {COMPANY_INFO.name} &bull; Uganda Data Protection and Privacy Act Compliance
          </p>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            At <strong>{COMPANY_INFO.legalName}</strong>, we respect your privacy and are committed to safeguarding personal information shared with us through project inquiries, architectural consultations, and quotation requests.
          </p>

          <h4 className="font-bold text-white text-sm">1. Information We Collect</h4>
          <p>
            When you request a quotation or consultation, we collect your name, email address, phone/WhatsApp number, project site location, and relevant architectural or structural preferences. We only collect details necessary to evaluate your engineering requirements.
          </p>

          <h4 className="font-bold text-white text-sm">2. Use of Project Information</h4>
          <p>
            Your information is used strictly to prepare Bills of Quantities (BOQs), conduct site feasibility evaluations, communicate project milestones, and provide customer support. We never sell, lease, or distribute client contact information to third-party marketing companies.
          </p>

          <h4 className="font-bold text-white text-sm">3. Confidentiality of Architectural Plans</h4>
          <p>
            All architectural drawings, site surveys, structural calculations, and commercial budgets shared with EDI K Technical Services are treated with strict professional confidentiality.
          </p>

          <h4 className="font-bold text-white text-sm">4. Contact & Inquiries</h4>
          <p>
            For any questions regarding our data practices or to request modification/removal of your contact details, please email our administration desk at <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-brand-orange underline">{COMPANY_INFO.contact.email}</a>.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-xs sm:text-sm transition-colors"
          >
            I Understand & Close
          </button>
        </div>

      </div>
    </div>
  );
};
