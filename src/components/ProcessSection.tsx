import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/companyData';
import { 
  MessageCircle, 
  MapPin, 
  FileSpreadsheet, 
  HardHat, 
  CheckCircle, 
  ArrowRight,
  GitBranch,
  Check
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-brand-orange" };
    switch (iconName) {
      case 'MessageCircle': return <MessageCircle {...props} />;
      case 'MapPin': return <MapPin {...props} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} />;
      case 'HardHat': return <HardHat {...props} />;
      case 'CheckCircle': return <CheckCircle {...props} />;
      default: return <CheckCircle {...props} />;
    }
  };

  return (
    <section id="process" className="py-24 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            Our Working <span className="text-brand-orange">Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From initial site consultation to official handover, our 5-phase execution framework eliminates surprises and guarantees construction quality.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={step.stepNumber}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-brand-navy border-brand-orange shadow-2xl scale-[1.02] ring-2 ring-brand-orange/20'
                    : 'bg-brand-navy/60 border-slate-700/80 hover:border-slate-500 hover:bg-brand-navy'
                }`}
              >
                {/* Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl sm:text-3xl font-heading font-black ${
                      isSelected ? 'text-brand-orange' : 'text-slate-500'
                    }`}>
                      {step.stepNumber}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700">
                      {getStepIcon(step.icon)}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs text-brand-orange font-medium mb-3">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-3 border-t border-slate-800 space-y-1.5">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Phase Milestones:
                  </div>
                  {step.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <Check className="w-3 h-3 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        {/* Process Guarantee Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-navy border border-slate-700/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-brand-orange text-white flex-shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Full Regulatory & Architectural Compliance</div>
              <div className="text-xs text-slate-300">Every phase is signed off by a certified site engineer before progressing to the next stage.</div>
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
