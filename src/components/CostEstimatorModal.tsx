import React, { useState } from 'react';
import { X, Calculator, ArrowRight, Info } from 'lucide-react';

interface CostEstimatorModalProps {
  onClose: () => void;
  onApplyEstimateToQuote: (details: { service: string; budget: string; description: string }) => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  onClose,
  onApplyEstimateToQuote
}) => {
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'renovation' | 'civil' | 'electrical'>('residential');
  const [areaSqm, setAreaSqm] = useState<number>(180);
  const [finishGrade, setFinishGrade] = useState<'standard' | 'premium' | 'executive'>('premium');

  // Rates in UGX per square meter (Uganda construction ballpark standards)
  const rateMatrix: Record<string, Record<string, { min: number; max: number; timeMonths: string }>> = {
    residential: {
      standard: { min: 1400000, max: 1800000, timeMonths: "4 - 6 months" },
      premium: { min: 1900000, max: 2500000, timeMonths: "6 - 9 months" },
      executive: { min: 2600000, max: 3500000, timeMonths: "8 - 14 months" },
    },
    commercial: {
      standard: { min: 1600000, max: 2100000, timeMonths: "6 - 10 months" },
      premium: { min: 2200000, max: 2900000, timeMonths: "9 - 14 months" },
      executive: { min: 3000000, max: 4200000, timeMonths: "12 - 18 months" },
    },
    renovation: {
      standard: { min: 450000, max: 750000, timeMonths: "1 - 2 months" },
      premium: { min: 800000, max: 1300000, timeMonths: "2 - 4 months" },
      executive: { min: 1400000, max: 2200000, timeMonths: "3 - 6 months" },
    },
    civil: {
      standard: { min: 350000, max: 600000, timeMonths: "1 - 3 months" },
      premium: { min: 650000, max: 1100000, timeMonths: "2 - 5 months" },
      executive: { min: 1200000, max: 1900000, timeMonths: "4 - 8 months" },
    },
    electrical: {
      standard: { min: 250000, max: 450000, timeMonths: "2 - 4 weeks" },
      premium: { min: 500000, max: 850000, timeMonths: "1 - 2 months" },
      executive: { min: 900000, max: 1500000, timeMonths: "2 - 3 months" },
    }
  };

  const currentRate = rateMatrix[projectType][finishGrade];
  const minUgx = areaSqm * currentRate.min;
  const maxUgx = areaSqm * currentRate.max;
  
  // Convert approximate UGX to USD (assume ~3,800 UGX = 1 USD)
  const minUsd = Math.round(minUgx / 3800);
  const maxUsd = Math.round(maxUgx / 3800);

  const formatUgx = (val: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      maximumFractionDigits: 0
    }).format(val);
  };

  const formatUsd = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  const projectLabels: Record<string, string> = {
    residential: "Residential Villa / Housing",
    commercial: "Commercial Complex / Office",
    renovation: "Renovation & Remodeling",
    civil: "Civil Infrastructure & Paving",
    electrical: "Electrical & Solar Technical"
  };

  const handleApply = () => {
    const serviceName = projectLabels[projectType];
    const budgetRange = `${formatUgx(minUgx)} - ${formatUgx(maxUgx)} (~${formatUsd(minUsd)} - ${formatUsd(maxUsd)})`;
    const desc = `Preliminary estimate generated via Uganda Cost Estimator: ${serviceName}, approximately ${areaSqm} sqm, with ${finishGrade.toUpperCase()} finish specification. Estimated build duration: ${currentRate.timeMonths}.`;
    
    onApplyEstimateToQuote({
      service: projectType === 'electrical' ? 'electrical-installations' : projectType === 'civil' ? 'civil-engineering' : projectType === 'renovation' ? 'renovation-remodeling' : 'building-construction',
      budget: budgetRange,
      description: desc
    });
    onClose();
  };

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

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b border-slate-700">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-orange mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
            Uganda Construction Cost Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Quick preliminary budgeting guide based on prevailing Ugandan market material and labor rates.
          </p>
        </div>

        {/* Form Controls */}
        <div className="space-y-6">
          
          {/* Project Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              1. Select Project Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(['residential', 'commercial', 'renovation', 'civil', 'electrical'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProjectType(type)}
                  className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-all ${
                    projectType === type
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {projectLabels[type]}
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                2. Estimated Floor Area / Scope:
              </label>
              <span className="text-base font-bold text-brand-orange bg-brand-dark px-3 py-1 rounded-md border border-slate-700">
                {areaSqm} m² ({Math.round(areaSqm * 10.764)} sq ft)
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="800"
              step="10"
              value={areaSqm}
              onChange={(e) => setAreaSqm(Number(e.target.value))}
              className="w-full accent-brand-orange h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>30 m² (Compact)</span>
              <span>250 m² (Standard)</span>
              <span>800 m² (Large Estate)</span>
            </div>
          </div>

          {/* Finish Grade */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              3. Architectural & Finish Grade
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'standard', title: 'Standard', desc: 'Durable quality finishes, local tiles, standard fixtures' },
                { id: 'premium', title: 'Premium', desc: 'High-spec imported tiles, modern gypsum, custom joinery' },
                { id: 'executive', title: 'Executive Luxury', desc: 'Granite/hardwood, smart lighting, high-end sanitary' },
              ].map((grade) => (
                <button
                  key={grade.id}
                  type="button"
                  onClick={() => setFinishGrade(grade.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    finishGrade === grade.id
                      ? 'border-brand-orange bg-brand-orange/15 shadow-md'
                      : 'border-slate-700 bg-slate-900/60 hover:bg-slate-800'
                  }`}
                >
                  <div className={`text-xs font-bold ${finishGrade === grade.id ? 'text-brand-orange' : 'text-white'}`}>
                    {grade.title}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 leading-snug">
                    {grade.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Calculated Output Box */}
          <div className="p-5 rounded-2xl bg-brand-dark border-2 border-brand-orange/50 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                Estimated Investment Range (UGX):
              </span>
              <span className="text-xs font-semibold text-brand-orange">
                Est. Duration: {currentRate.timeMonths}
              </span>
            </div>

            <div className="text-2xl sm:text-3xl font-heading font-black text-white">
              {formatUgx(minUgx)} &ndash; {formatUgx(maxUgx)}
            </div>

            <div className="text-xs text-slate-400 flex items-center justify-between">
              <span>Equivalent in USD: <strong className="text-slate-200">{formatUsd(minUsd)} &ndash; {formatUsd(maxUsd)}</strong></span>
              <span className="text-[11px] text-slate-500">Excl. site land acquisition</span>
            </div>
          </div>

          {/* Disclaimer Note */}
          <div className="flex items-start gap-2 text-xs text-slate-400 bg-slate-900/40 p-3 rounded-lg border border-slate-800">
            <Info className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <span>
              Disclaimer: This estimator provides indicative figures for feasibility planning in Uganda. Actual site costs depend on soil bearing tests, architectural drawings, and detailed Bills of Quantities (BOQ).
            </span>
          </div>

        </div>

        {/* Modal Action Buttons */}
        <div className="mt-8 pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all"
          >
            <span>Lock in This Scope & Request Official BOQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
