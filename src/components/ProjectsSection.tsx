import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem } from '../types';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  Eye, 
  Info,
  FolderOpen
} from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsSectionProps {
  onQuoteFromProject: (category: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  onQuoteFromProject 
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filterTabs = [
    'All',
    'Residential',
    'Renovation'
  ];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
              Our Work <span className="text-brand-orange">Speaks for Itself.</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl leading-relaxed">
              Explore our model execution capabilities across commercial complexes, residential villas, civil grading, and technical installations in Uganda.
            </p>
          </div>

          {/* Configurable Demonstration Note Badge */}
          <div className="mt-6 md:mt-0 max-w-sm p-3 rounded-xl bg-brand-navy border border-slate-700 text-xs text-slate-300 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
            <span>
              Demonstration portfolio models representing EDI K's structural benchmarks. Editable placeholder details ready for verified case studies.
            </span>
          </div>
        </div>

        {/* Category Filters (only shown if multiple categories exist) */}
        {filterTabs.length > 2 && (
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveFilter(tab);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tab
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                    : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-brand-navy rounded-2xl border border-slate-700/80 overflow-hidden hover:border-brand-orange/50 transition-all duration-300 hover:shadow-2xl flex flex-col"
            >
              {/* Project Image Container */}
              <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-brand-dark/90 backdrop-blur-md text-brand-orange border border-brand-orange/40 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Hover Eye Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>View Project Details</span>
                  </span>
                </div>
              </div>

              {/* Project Info Card */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Location & Title */}
                  <div className="flex items-center gap-1.5 text-xs text-brand-orange font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors cursor-pointer mb-2.5"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 group/btn"
                  >
                    <span>Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                    Verified Build
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button (only shown if more than displayed) */}
        {filteredProjects.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-brand-orange px-8 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-all"
            >
              <Building2 className="w-4 h-4 text-brand-orange" />
              <span>{showAll ? 'Show Fewer Projects' : 'View All Projects & Disciplines'}</span>
            </button>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquireSimilarProject={(cat) => {
            setSelectedProject(null);
            onQuoteFromProject(cat);
          }}
        />
      )}
    </section>
  );
};
