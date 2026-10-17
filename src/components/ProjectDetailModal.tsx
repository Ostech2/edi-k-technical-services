import React from 'react';
import { X, MapPin, CheckCircle2, ArrowRight, HardHat, Info } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilarProject: (category: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquireSimilarProject
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-brand-navy border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image */}
        <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden mb-6 border border-slate-700">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 text-slate-300 text-[11px] font-medium flex items-center gap-1 border border-slate-700">
                <MapPin className="w-3 h-3 text-brand-orange" />
                {project.location}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Portfolio Notice Pill */}
        <div className="p-3 rounded-lg bg-slate-900/90 border border-brand-orange/30 flex items-center gap-2 text-xs text-brand-orange mb-6">
          <Info className="w-4 h-4 flex-shrink-0" />
          <span>
            Demonstration Portfolio Showcase: This case study model demonstrates EDI K's execution standard and scope for {project.category.toLowerCase()} contracts in Uganda.
          </span>
        </div>

        {/* Project Scope & Details */}
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h4 className="text-base font-bold text-white mb-2">
              Project Description & Specifications
            </h4>
            <p className="leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <HardHat className="w-4 h-4 text-brand-orange" />
              <span>Technical Scope Executed</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Planning a similar project in Uganda?
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
                onInquireSimilarProject(project.category);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all"
            >
              <span>Inquire for Similar Build</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
