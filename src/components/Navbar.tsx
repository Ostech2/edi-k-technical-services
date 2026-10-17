import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Calculator,
  HardHat
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenEstimatorModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenQuoteModal, 
  onOpenEstimatorModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['home', 'about', 'services', 'projects', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Our Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification / Hotline Bar */}
      <div className="bg-brand-dark text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>{COMPANY_INFO.contact.physicalAddress}, Rukiga</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>{COMPANY_INFO.contact.businessHoursWeekdays}</span>
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
              Site Teams Active
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span className="font-medium">{COMPANY_INFO.contact.primaryPhone}</span>
            </a>
            <button
              onClick={onOpenEstimatorModal}
              className="flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors text-[11px] font-medium border border-slate-700"
            >
              <Calculator className="w-3 h-3 text-brand-orange" />
              Cost Estimator
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-navy/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-700/50' 
            : 'bg-brand-navy/90 backdrop-blur-sm py-4 border-b border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="focus:outline-none"
            >
              <Logo variant="light" size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                      isActive 
                        ? 'text-brand-orange font-semibold bg-brand-orange/10' 
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-orange rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Desktop CTA Action */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenEstimatorModal}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white py-2 px-3 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors"
                title="Calculate preliminary project budget"
              >
                <Calculator className="w-3.5 h-3.5 text-brand-orange" />
                <span>Estimate Cost</span>
              </button>

              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/30 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="text-xs bg-brand-orange text-white font-bold px-3 py-1.5 rounded-md sm:inline-flex hidden"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-dark/98 border-t border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-xl animate-fadeIn">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive 
                        ? 'bg-brand-orange/15 text-brand-orange font-bold' 
                        : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-brand-orange" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimatorModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-slate-700 text-slate-200 font-medium text-sm hover:bg-slate-800 transition-colors"
              >
                <Calculator className="w-4 h-4 text-brand-orange" />
                <span>Uganda Project Cost Estimator</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white py-3.5 rounded-lg text-sm font-bold shadow-lg shadow-brand-orange/20 transition-colors"
              >
                <HardHat className="w-4 h-4" />
                <span>Request a Free Quote</span>
              </button>

              <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
                <a 
                  href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-brand-orange"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call: {COMPANY_INFO.contact.primaryPhone}</span>
                </a>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
