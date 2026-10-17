import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { QuoteFormState } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  ExternalLink,
  HardHat,
  Info
} from 'lucide-react';

interface ContactSectionProps {
  initialServiceId?: string;
  prefilledEstimate?: {
    service: string;
    budget: string;
    description: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceId = '',
  prefilledEstimate = null
}) => {
  const [formData, setFormData] = useState<QuoteFormState>({
    fullName: '',
    email: '',
    phone: '',
    serviceId: initialServiceId || '',
    projectLocation: '',
    estimatedBudget: '',
    projectTimeline: 'Within 1 - 3 months',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    referenceId: string;
    date: string;
    data: QuoteFormState;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync initialServiceId or prefilledEstimate changes
  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (prefilledEstimate) {
      setFormData(prev => ({
        ...prev,
        serviceId: prefilledEstimate.service,
        estimatedBudget: prefilledEstimate.budget,
        projectDescription: prefilledEstimate.description
      }));
    }
  }, [prefilledEstimate]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof QuoteFormState, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Full name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide a valid contact email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone or WhatsApp number.';
    } else if (formData.phone.trim().length < 9) {
      errs.phone = 'Please enter a valid phone number (e.g. +256 700 000 000).';
    }

    if (!formData.serviceId) {
      errs.serviceId = 'Please select the required engineering or construction service.';
    }

    if (!formData.projectLocation.trim()) {
      errs.projectLocation = 'Please state your site location (e.g. Kampala, Wakiso, Jinja).';
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe your project scope or architectural requirements.';
    } else if (formData.projectDescription.trim().length < 15) {
      errs.projectDescription = 'Please provide at least 15 characters describing the scope.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable ticket compilation
    setTimeout(() => {
      const refId = `EDIK-UG-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket({
        referenceId: refId,
        date: new Date().toLocaleDateString('en-UG', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        }),
        data: { ...formData }
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleCopyTicket = () => {
    if (!submittedTicket) return;
    const text = `EDI K TECHNICAL SERVICES - QUOTE REQUEST TICKET [${submittedTicket.referenceId}]
Client: ${submittedTicket.data.fullName}
Email: ${submittedTicket.data.email}
Phone: ${submittedTicket.data.phone}
Service: ${SERVICES_DATA.find(s => s.id === submittedTicket.data.serviceId)?.title || submittedTicket.data.serviceId}
Location: ${submittedTicket.data.projectLocation}
Estimated Budget: ${submittedTicket.data.estimatedBudget || 'Pending BOQ evaluation'}
Timeline: ${submittedTicket.data.projectTimeline}
Scope Details: ${submittedTicket.data.projectDescription}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getWhatsAppDispatchUrl = () => {
    if (!submittedTicket) return '#';
    const sTitle = SERVICES_DATA.find(s => s.id === submittedTicket.data.serviceId)?.title || submittedTicket.data.serviceId;
    const msg = `*Hello EDI K Technical Services,*%0A%0AI would like to submit a project inquiry:%0A*Ref:* ${submittedTicket.referenceId}%0A*Name:* ${submittedTicket.data.fullName}%0A*Phone:* ${submittedTicket.data.phone}%0A*Email:* ${submittedTicket.data.email}%0A*Service:* ${sTitle}%0A*Location:* ${submittedTicket.data.projectLocation}%0A*Budget:* ${submittedTicket.data.estimatedBudget || 'Pending assessment'}%0A*Timeline:* ${submittedTicket.data.projectTimeline}%0A*Scope Details:* ${submittedTicket.data.projectDescription}`;
    return `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(msg).replace(/%2520/g, '%20')}`;
  };

  const getMailtoUrl = () => {
    if (!submittedTicket) return '#';
    const sTitle = SERVICES_DATA.find(s => s.id === submittedTicket.data.serviceId)?.title || submittedTicket.data.serviceId;
    const subject = `Quote Request Ref: ${submittedTicket.referenceId} - ${sTitle}`;
    const body = `Dear EDI K Technical Services Team,\n\nI would like to request an official quotation:\n\nClient Name: ${submittedTicket.data.fullName}\nPhone: ${submittedTicket.data.phone}\nEmail: ${submittedTicket.data.email}\nService: ${sTitle}\nProject Location: ${submittedTicket.data.projectLocation}\nEstimated Budget: ${submittedTicket.data.estimatedBudget || 'Not specified'}\nTimeline: ${submittedTicket.data.projectTimeline}\n\nProject Scope:\n${submittedTicket.data.projectDescription}\n\nPlease review and advise on next steps / site visit.`;
    return `mailto:${COMPANY_INFO.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consult With Our Engineering Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            Request a Quote & <span className="text-brand-orange">Contact Our Team.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Ready to break ground or discuss architectural plans? Fill out the quote form below or reach us directly via our verified communication channels.
          </p>
        </div>

        {/* Main Grid: Form + Company Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-brand-navy rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative">
            
            {/* If Form is Already Submitted: Ticket Dispatch Screen */}
            {submittedTicket ? (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Quote Request Prepared Successfully!
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Your inquiry has been compiled with tracking reference <strong className="text-emerald-400 font-mono">{submittedTicket.referenceId}</strong>.
                    </p>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-medium">Tracking Ref:</span>
                    <span className="font-mono font-bold text-brand-orange">{submittedTicket.referenceId}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-medium">Client:</span>
                    <span className="font-semibold text-white">{submittedTicket.data.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-medium">Service:</span>
                    <span className="font-semibold text-white">
                      {SERVICES_DATA.find(s => s.id === submittedTicket.data.serviceId)?.title || submittedTicket.data.serviceId}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-medium">Site Location:</span>
                    <span className="font-semibold text-white">{submittedTicket.data.projectLocation}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-medium">Estimated Budget:</span>
                    <span className="font-semibold text-white">{submittedTicket.data.estimatedBudget || 'Not specified'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium block mb-1">Scope Description:</span>
                    <p className="text-slate-300 bg-brand-dark p-2.5 rounded border border-slate-800 leading-relaxed">
                      {submittedTicket.data.projectDescription}
                    </p>
                  </div>
                </div>

                {/* Direct Dispatch Buttons */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Choose Your Direct Transmission Method:
                  </div>

                  {/* 1. Send via WhatsApp (Instant to Uganda Desk) */}
                  <a
                    href={getWhatsAppDispatchUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-xl text-sm font-bold shadow-lg transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Directly to EDI K WhatsApp (+256)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* 2. Send via Email Client */}
                  <a
                    href={getMailtoUrl()}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 p-3.5 rounded-xl text-sm font-bold transition-all"
                  >
                    <Mail className="w-4 h-4 text-brand-orange" />
                    <span>Open in Email ({COMPANY_INFO.contact.email})</span>
                  </a>

                  {/* 3. Copy Details to Clipboard */}
                  <button
                    onClick={handleCopyTicket}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-navyLight hover:bg-slate-800 text-slate-300 p-3 rounded-xl text-xs font-semibold border border-slate-700 transition-all"
                  >
                    <Copy className="w-4 h-4 text-brand-orange" />
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Ticket to Clipboard'}</span>
                  </button>
                </div>

                {/* Reset button */}
                <div className="pt-2 text-center">
                  <button
                    onClick={() => setSubmittedTicket(null)}
                    className="text-xs text-slate-400 hover:text-brand-orange underline"
                  >
                    Submit Another Inquiry or Reset Form
                  </button>
                </div>

                {/* Backend Setup Instruction Note */}
                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                  <Info className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Deployment Note:</strong> To connect automated background emailing without opening mailto/WhatsApp, configure your Formspree ID or Vercel Serverless Resend API key in <code className="text-slate-200">src/data/companyData.ts</code>.
                  </span>
                </div>

              </div>
            ) : (
              /* Actual Interactive Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="border-b border-slate-800 pb-3 mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <HardHat className="w-5 h-5 text-brand-orange" />
                    Project Details & Quotation Request
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Please provide your site parameters. Our engineers respond within 24 business hours.
                  </p>
                </div>

                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Okello"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all ${
                        errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. okello@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all ${
                        errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Service Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number (WhatsApp Preferred) <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +256 772 123 456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all ${
                        errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Service Required <span className="text-brand-orange">*</span>
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all ${
                        errors.serviceId ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-700'
                      }`}
                    >
                      <option value="">-- Select Required Discipline --</option>
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="custom">Other / Integrated Multi-Discipline</option>
                    </select>
                    {errors.serviceId && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.serviceId}
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Location & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Site Location in Uganda <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kampala (Kololo), Wakiso, Entebbe, Upcountry"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all ${
                        errors.projectLocation ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-700'
                      }`}
                    />
                    {errors.projectLocation && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.projectLocation}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Estimated Budget (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. UGX 50M - 150M or $20,000 USD"
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                    />
                  </div>
                </div>

                {/* Project Timeline Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Target Project Timeline
                  </label>
                  <select
                    value={formData.projectTimeline}
                    onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    <option value="Immediate / Emergency (Within 2 weeks)">Immediate / Emergency (Within 2 weeks)</option>
                    <option value="Within 1 - 3 months">Within 1 - 3 months</option>
                    <option value="Within 3 - 6 months">Within 3 - 6 months</option>
                    <option value="Future Feasibility / Architectural Stage">Future Feasibility / Architectural Stage</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Description & Requirements <span className="text-brand-orange">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your site parameters, existing plans, required materials, or specific architectural goals..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all ${
                      errors.projectDescription ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.projectDescription}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover disabled:bg-slate-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-xl shadow-brand-orange/20 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Compiling Quotation Ticket...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Quotation Request</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 text-center">
                  By submitting, you consent to our engineering team contacting you regarding your project brief. No spam guaranteed.
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Verified Official Contact Information & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="bg-brand-navy rounded-2xl border border-slate-700/80 p-6 sm:p-7 shadow-xl space-y-6">
              
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Corporate Contact Desk
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Editable placeholder contact channels for EDI K Technical Services in Uganda.
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-brand-dark border border-slate-700 text-brand-orange flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Phone & Hotlines
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    <a href={`tel:${COMPANY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-brand-orange transition-colors">
                      {COMPANY_INFO.contact.primaryPhone}
                    </a>
                  </div>
                  <div className="text-xs text-slate-400">
                    <a href={`tel:${COMPANY_INFO.contact.secondaryPhone.replace(/\s+/g, '')}`} className="hover:text-brand-orange transition-colors">
                      {COMPANY_INFO.contact.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-brand-dark border border-slate-700 text-brand-orange flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Email Inquiries
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-brand-orange transition-colors">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                  <div className="text-xs text-slate-400">
                    <a href={`mailto:${COMPANY_INFO.contact.quotesEmail}`} className="hover:text-brand-orange transition-colors">
                      {COMPANY_INFO.contact.quotesEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-brand-dark border border-slate-700 text-brand-orange flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Physical Headquarters
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {COMPANY_INFO.contact.physicalAddress}
                  </div>
                  <div className="text-xs text-slate-400">
                    {COMPANY_INFO.contact.addressLine2}
                  </div>
                </div>
              </div>

              {/* Operating Days */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-brand-dark border border-slate-700 text-brand-orange flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Operating Days
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Monday – Saturday
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium mt-1">
                    &bull; {COMPANY_INFO.contact.emergencySupport}
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Embedded Google Maps Container */}
            <div className="bg-brand-navy rounded-2xl border border-slate-700/80 overflow-hidden shadow-xl">
              <div className="p-3 bg-brand-dark border-b border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Uganda Operations Map</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Kamwezi &bull; Rukiga District</span>
              </div>
              <div className="h-52 w-full relative bg-slate-900">
                <iframe
                  title="EDI K Technical Services Uganda Location"
                  src={COMPANY_INFO.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
