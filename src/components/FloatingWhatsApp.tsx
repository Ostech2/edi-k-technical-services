import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent("Hello EDI K Technical Services, I would like to inquire about your construction and engineering services in Uganda.");
    return `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 select-none">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-700 text-white text-xs py-2 px-3.5 rounded-xl shadow-2xl animate-fadeIn">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Chat with our engineers on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center ring-4 ring-emerald-500/20"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
