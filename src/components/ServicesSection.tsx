import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';
import { 
  Building, 
  HardHat, 
  Hammer, 
  Ruler, 
  Zap, 
  Droplets, 
  ClipboardCheck, 
  Wrench, 
  ArrowRight, 
  Check, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForQuote 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-brand-orange" };
    switch (iconName) {
      case 'Building': return <Building {...props} />;
      case 'HardHat': return <HardHat {...props} />;
      case 'Hammer': return <Hammer {...props} />;
      case 'Ruler': return <Ruler {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Droplets': return <Droplets {...props} />;
      case 'ClipboardCheck': return <ClipboardCheck {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      default: return <Building {...props} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services (6)' },
    { id: 'construction', label: 'Building & Structural' },
    { id: 'engineering', label: 'Civil & Architectural' },
    { id: 'management', label: 'Supervision & Management' },
    { id: 'technical', label: 'Maintenance & Repairs' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => {
        if (selectedCategory === 'construction') return s.category === 'construction';
        if (selectedCategory === 'engineering') return s.category === 'engineering';
        if (selectedCategory === 'technical') return s.category === 'technical';
        if (selectedCategory === 'management') return s.category === 'management';
        return true;
      });

  return (
    <section id="services" className="py-24 bg-brand-dark text-slate-100 relative">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Technical Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
              Our Professional <span className="text-brand-orange">Services.</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              From heavy civil infrastructure and multi-storey builds to certified electrical installations, we deliver turnkey engineering excellence tailored to Uganda's climate and terrain.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <span className="text-xs text-slate-400 bg-slate-800/80 border border-slate-700 px-3.5 py-1.5 rounded-full inline-block">
              Editable service matrix &bull; Modular scope
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                  : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-brand-navy rounded-2xl border border-slate-700/80 overflow-hidden hover:border-brand-orange/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Card Image Banner */}
              <div className="relative h-44 overflow-hidden">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-navy via-slate-800 to-brand-dark flex items-center justify-center">
                    <div className="p-5 rounded-2xl bg-brand-dark/60 border border-slate-700/60">
                      {React.cloneElement(getServiceIcon(service.icon) as React.ReactElement, { className: "w-10 h-10 text-brand-orange" })}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
                
                {/* Floating Service Icon */}
                <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-brand-dark/90 border border-slate-700/80 shadow-md backdrop-blur-md group-hover:border-brand-orange/50 transition-colors">
                  {getServiceIcon(service.icon)}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800 mb-5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-800">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-3 h-3 text-brand-orange" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.id)}
                    className="inline-flex items-center gap-1 bg-brand-orange/20 hover:bg-brand-orange text-brand-orange hover:text-white px-3 py-1.5 rounded-md text-xs font-bold transition-all"
                  >
                    <span>Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-navy border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-white">Need a specialized technical service not listed above?</h4>
            <p className="text-xs text-slate-400 mt-1">Our engineering team accommodates custom structural audits, mechanical piping, and specialized site works across Uganda.</p>
          </div>
          <button
            onClick={() => onSelectServiceForQuote('custom')}
            className="flex-shrink-0 bg-brand-orange hover:bg-brand-orangeHover text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-colors"
          >
            Inquire About Custom Services
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <ServiceDetailModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onRequestQuoteForService={(serviceId) => {
            setActiveModalService(null);
            onSelectServiceForQuote(serviceId);
          }}
        />
      )}
    </section>
  );
};
