import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { CeoEngineerSpotlight } from './components/CeoEngineerSpotlight';

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>('');
  const [estimatorModalOpen, setEstimatorModalOpen] = useState(false);
  const [appliedEstimate, setAppliedEstimate] = useState<{
    service: string;
    budget: string;
    description: string;
  } | null>(null);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedQuoteService(serviceId || '');
    setQuoteModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedQuoteService(serviceId);
    handleScrollToContact();
  };

  const handleQuoteFromProject = (_category: string) => {
    handleOpenQuoteModal();
  };

  const handleApplyEstimate = (details: { service: string; budget: string; description: string }) => {
    setAppliedEstimate(details);
    setSelectedQuoteService(details.service);
    handleScrollToContact();
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 flex flex-col font-sans selection:bg-brand-orange selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenEstimatorModal={() => setEstimatorModalOpen(true)}
      />

      <main className="flex-1">
        {/* Full-width Hero Section */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreServices={handleExploreServices}
        />

        {/* Trust & Statistics Section */}
        <StatsSection />

        {/* About Us Section */}
        <AboutSection />

        {/* Lead Engineer & CEO Executive Spotlight */}
        <CeoEngineerSpotlight
          onScheduleAssessment={handleScrollToContact}
        />

        {/* 8 Core Services Section */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* 6 Core Pillars: Why Choose Us */}
        <WhyChooseUsSection />

        {/* Featured Projects Portfolio Grid */}
        <ProjectsSection
          onQuoteFromProject={handleQuoteFromProject}
        />

        {/* 5-Step Working Process Timeline */}
        <ProcessSection />

        {/* Testimonials / Client Endorsements */}
        <TestimonialsSection />

        {/* High-Impact Call to Action Banner */}
        <CtaSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onScrollToContact={handleScrollToContact}
        />

        {/* Interactive Quote Request & Contact Section */}
        <ContactSection
          initialServiceId={selectedQuoteService}
          prefilledEstimate={appliedEstimate}
        />

        {/* Ugandan Construction FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuoteModal={handleOpenQuoteModal}
        onSelectService={(sId) => {
          setSelectedQuoteService(sId);
          handleScrollToContact();
        }}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Fast-Track Quote Modal */}
      {quoteModalOpen && (
        <QuoteModal
          initialServiceId={selectedQuoteService}
          onClose={() => setQuoteModalOpen(false)}
        />
      )}

      {/* Uganda Project Cost Estimator Modal */}
      {estimatorModalOpen && (
        <CostEstimatorModal
          onClose={() => setEstimatorModalOpen(false)}
          onApplyEstimateToQuote={handleApplyEstimate}
        />
      )}
    </div>
  );
};

export default App;
