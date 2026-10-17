import React, { useState } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowUp, 
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';

interface FooterProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenQuoteModal,
  onSelectService
}) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects Showcase', href: '#projects' },
    { label: 'Our Process', href: '#process' },
    { label: 'Request a Quote', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-dark text-slate-400 border-t border-slate-800 text-xs sm:text-sm relative overflow-hidden">
      {/* Decorative accent top line */}
      <div className="h-1 bg-gradient-to-r from-brand-navy via-brand-orange to-brand-navy" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />
            
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm pr-4">
              {COMPANY_INFO.name} is a premier Ugandan engineering and building construction company delivering turnkey structural projects, civil infrastructure, and integrated technical services with uncompromising quality.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-orange hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-orange hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-orange hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-600/30 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-400">
              <span className="font-semibold text-white">Uganda Registration:</span> Licensed Engineering & Building Construction Contractors.
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-brand-orange transition-colors block text-xs py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Technical Services
            </h4>
            <ul className="space-y-2">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="hover:text-brand-orange text-left transition-colors text-xs py-0.5"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Office & Helpdesk
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.physicalAddress}, {COMPANY_INFO.contact.addressLine2}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {COMPANY_INFO.contact.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>{COMPANY_INFO.contact.businessHoursWeekdays}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-2 px-3 rounded-lg text-xs shadow transition-colors"
              >
                Request Quotation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="text-slate-400 text-center sm:text-left">
            &copy; {currentYear} <strong>{COMPANY_INFO.name}</strong>. All rights reserved. Registered in Uganda.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Engagement
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-brand-orange hover:text-white text-slate-300 transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px] font-semibold">Top</span>
            </button>
          </div>

        </div>

      </div>

      {/* Privacy Modal */}
      {privacyOpen && <PrivacyPolicyModal onClose={() => setPrivacyOpen(false)} />}
    </footer>
  );
};
