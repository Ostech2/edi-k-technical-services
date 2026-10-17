# EDI K TECHNICAL SERVICES — Official Corporate Website

> **Building Your Vision. Engineering Your Future.**  
> A premium, modern web platform engineered for **EDI K TECHNICAL SERVICES**, a premier construction and technical engineering company in Uganda.

---

## 🏗️ Overview

This platform has been designed and built from the ground up to reflect international agency-level design standards while maintaining strict contextual authenticity for Uganda's construction and engineering sector.

- **Client**: EDI K TECHNICAL SERVICES
- **Location**: Kampala, Uganda
- **Disciplines**: Building Construction, Civil Infrastructure, Renovation, Structural CAD Support, Electrical & Solar Installations, Sanitary Plumbing, Project Supervision, and Facility Maintenance.
- **Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons.

---

## 🎨 Visual Identity & Architecture

- **Primary Colors**: Deep Navy Blue (`#0B1325`, `#0F1A2E`), Slate Charcoal (`#1E293B`).
- **Accent Colors**: Construction Safety Orange (`#FF5E14`, `#EA580C`), Architectural Amber Gold (`#F59E0B`).
- **Backgrounds**: Crisp Clean Off-White (`#F8FAFC`) and Architectural Grid Dark Mode.
- **Typography**: Inter & Plus Jakarta Sans with bold geometric hierarchy.
- **Components**: Reusable, accessible, and responsive across mobile, tablet, and ultra-wide screens.

---

## 🚀 Key Features

1. **Sticky Modern Navigation**:
   - Custom SVG geometric logo badge with animated pulse indicator.
   - Smooth scroll anchor links (Home, About Us, Services, Projects, Our Process, Contact).
   - Uganda Hotline Bar with active site team indicators and WhatsApp direct link.
   - Interactive Uganda Project Cost Estimator trigger button.
   - Fully responsive mobile drawer.

2. **Hero Section**:
   - High-impact architectural photography background with dark gradient overlays.
   - Headline: *"BUILDING YOUR VISION. ENGINEERING YOUR FUTURE."*
   - Supporting narrative and dual CTA buttons ("Explore Our Services" and "Request a Quote").
   - Trust pills highlighting UNBS compliance, itemized BOQs, and zero-accident safety culture.

3. **Trust & Statistics Section**:
   - 4 configurable counters: *50+ Projects Completed*, *12+ Years Experience*, *99% Client Satisfaction*, *8+ Professional Services*.
   - Clear disclosure badge indicating configurable metrics for verified company records.

4. **About Us Section**:
   - Heading: *"Built on Trust. Driven by Excellence."*
   - Split layout with site imagery and Ugandan compliance indicators.
   - Company Overview, Mission, Vision, and 5 Core Values: Quality, Integrity, Reliability, Innovation, Customer Satisfaction.
   - Interactive "Learn More About Us" modal detailing HSE and local workforce empowerment.

5. **8 Editable Core Services**:
   - 1. Building Construction (Residential, commercial, industrial).
   - 2. Civil Engineering & Infrastructure (Drainage, paving, retaining walls).
   - 3. Renovation and Remodeling (Interior fit-outs, structural retrofitting).
   - 4. Architectural & Structural Support (CAD drawings, council permits).
   - 5. Electrical & Technical Installations (Three-phase power, solar PV).
   - 6. Plumbing & Water Systems (Pressure pumping, elevated tanks, septic).
   - 7. Project Management & Supervision (BOQ audits, QA/QC).
   - 8. General Maintenance & Repairs (Facility care, waterproofing).
   - Filterable categories and detailed modal popups with specific deliverables.

6. **Interactive Uganda Project Cost Estimator**:
   - Allows prospective clients in Uganda or the diaspora to select project type, scope in square meters, and finish grade (Standard, Premium, Executive).
   - Outputs estimated UGX and USD investment brackets and projected duration.
   - 1-click button to inject the calculated scope into an official quote request!

7. **Featured Projects Showcase**:
   - Category filtering (Commercial, Residential, Civil & Infrastructure, Renovation, Technical Works).
   - Image cards with location tags (Kampala, Entebbe, Jinja, Namanve, Wakiso).
   - Clear disclosure noting demonstration portfolio models ready for verified project case studies.
   - Detailed modal displaying full execution scope and technical specs.

8. **5-Step Working Process**:
   - `01` Consultation & Requirements &rarr; `02` Site Assessment & Planning &rarr; `03` Proposal & Quotation &rarr; `04` Execution & Supervision &rarr; `05` Quality Inspection & Handover.

9. **Interactive Quote & Contact Desk**:
   - Validated form for Name, Email, Uganda Phone/WhatsApp, Service, Location, Budget, Timeline, and Scope.
   - Form submission generates an official ticket reference (`EDIK-UG-XXXXXX`).
   - Direct transmission options: **WhatsApp Dispatch** (opens with pre-filled ticket message), **Direct Email**, or **Clipboard Copy**.
   - Company contact cards with editable phone numbers, emails, physical address, and embedded Uganda Google Map.

10. **Floating WhatsApp Widget**:
    - Always accessible quick-contact button with online status pulse.

---

## 🛠️ Configuration & Customization Guide

All company contact details, statistics, phone numbers, and portfolio items are centralized in a single configuration file:

📁 **`src/data/companyData.ts`**

### Updating Contact Information:
```typescript
export const COMPANY_INFO = {
  name: "EDI K TECHNICAL SERVICES",
  contact: {
    primaryPhone: "+256 700 000 000",       // Replace with official phone
    secondaryPhone: "+256 770 000 000",     // Replace with secondary phone
    whatsappNumber: "256700000000",         // Replace with verified WhatsApp
    email: "info@ediktechnical.com",         // Replace with official email
    physicalAddress: "Kampala, Uganda",      // Replace with official physical office
    // ...
  }
};
```

### Connecting Background Automated Email Delivery:
If you want form submissions to arrive directly in your inbox without using WhatsApp or Mailto, you can connect any standard form service (e.g., [Formspree](https://formspree.io) or [Resend](https://resend.com)) in `src/components/ContactSection.tsx`.

---

## 💻 Development & Deployment Commands

```bash
# 1. Run development server (live reload)
npm run dev

# 2. Build for production (outputs optimized static bundle to /dist)
npm run build

# 3. Preview production build locally
npm run preview
```

### Deploying to Vercel or Netlify:
1. Push the code repository to GitHub, GitLab, or Bitbucket.
2. In Vercel or Netlify, select **New Project** and pick this repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

---

© 2026 EDI K TECHNICAL SERVICES LTD. All rights reserved.
