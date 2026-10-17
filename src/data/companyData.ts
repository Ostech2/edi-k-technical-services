import { ServiceItem, ProjectItem, StatItem, ValuePillar, ProcessStep, TestimonialItem, ExecutiveLeader } from '../types';

/*
 * LEAD ENGINEER & CHIEF EXECUTIVE OFFICER (CEO)
 * Executive Profile for EDI K Technical Services.
 * You can replace photoUrl with your local image by putting it in public/engineer-ceo.jpg
 */
export const LEAD_ENGINEER_CEO: ExecutiveLeader = {
  name: "Eng. Edison Atuheire",
  role: "Lead Engineer & Chief Executive Officer (CEO)",
  qualifications: "Civil & Structural Engineer | Managing Director",
  photoUrl: "/engineer-edison.jpg",
  bio: "Providing hands-on engineering direction, structural supervision, and technical oversight on every residential, commercial, and civil infrastructure project undertaken by EDI K Technical Services.",
  executiveQuote: "True engineering excellence is founded on uncompromised structural integrity, precision in every measurement, and an enduring respect for our clients' investments. Every project we touch in Rukiga District and across Uganda is built to serve generations.",
  directPhone: "+256 774 563 099",
  directWhatsApp: "256774563099"
};

export const COMPANY_INFO = {
  name: "EDI K TECHNICAL SERVICES",
  legalName: "EDI K Technical Services Ltd.",
  tagline: "Building Your Vision. Engineering Your Future.",
  location: "Rukiga District, Uganda",
  country: "Uganda",
  defaultCurrency: "UGX",
  
  /* 
   * EDITABLE COMPANY CONTACT DETAILS 
   * Update these values with official verified contact information.
   */
  contact: {
    primaryPhone: "+256 774 563 099",        // Official phone
    secondaryPhone: "+256 774 563 099",      // Also reachable on this line
    whatsappNumber: "256774563099",          // Official WhatsApp format (0774563099)
    email: "info@ediktechnical.com",          // Placeholder: Official general inquiries email
    quotesEmail: "quotes@ediktechnical.com",  // Placeholder: Project estimation department
    physicalAddress: "Kiruhura Village, Kashekye Parish",
    addressLine2: "Kamwezi Subcounty, Rukiga District, Uganda",
    businessHoursWeekdays: "Monday – Saturday",
    businessHoursSaturday: "",
    emergencySupport: "24/7 Technical On-Call Emergency Response",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Kamwezi,Rukiga+District,Uganda&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },

  socials: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com"
  }
};

/*
 * EDITABLE COMPANY STATISTICS
 * Configurable placeholders representing technical capability and service capacity.
 * Update with verified records as projects are audited.
 */
export const STATS_DATA: StatItem[] = [
  {
    id: "projects",
    label: "Projects Completed",
    value: "50+",
    numericTarget: 50,
    suffix: "+",
    subtext: "Commercial, residential & technical delivery milestones",
    icon: "Building2"
  },
  {
    id: "experience",
    label: "Years of Experience",
    value: "12+",
    numericTarget: 12,
    suffix: "+",
    subtext: "Combined senior engineering & field management leadership",
    icon: "Briefcase"
  },
  {
    id: "satisfaction",
    label: "Client Satisfaction",
    value: "99%",
    numericTarget: 99,
    suffix: "%",
    subtext: "Dedication to high quality standards & structural integrity",
    icon: "ThumbsUp"
  },
  {
    id: "services",
    label: "Professional Services",
    value: "6+",
    numericTarget: 6,
    suffix: "+",
    subtext: "Multidisciplinary civil, structural & technical divisions",
    icon: "CheckCircle2"
  }
];

/*
 * 8 CORE SERVICE CATEGORIES
 * Fully customizable. Descriptions and deliverables reflect standard Ugandan construction codes.
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "building-construction",
    title: "Building Construction",
    category: "construction",
    shortDesc: "Complete structural execution for modern residential developments, commercial complexes, and industrial warehouses.",
    fullDesc: "EDI K Technical Services undertakes full turnkey building construction services across Uganda. From sub-structure ground preparation, reinforced concrete foundations, and brickwork to multi-storey framing, roofing, and architectural finishes, our engineering teams ensure full compliance with UNBS and national building codes.",
    icon: "Building",
    image: "/team-bricklaying.png",
    deliverables: [
      "Residential houses, estates, and luxury villas",
      "Commercial office buildings & retail centers",
      "Industrial warehouses & steel structure fabrication",
      "Foundations, columns, and structural concrete framing",
      "Roofing systems, exterior plastering, and waterproofing"
    ],
    keyBenefits: [
      "Rigorous material testing (cement grade, aggregate, reinforcement steel)",
      "Strict on-site Occupational Health & Safety (OHS) protocols",
      "Milestone-based milestone contracts and transparent bill of quantities (BOQ)"
    ]
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering & Infrastructure",
    category: "engineering",
    shortDesc: "Comprehensive civil works including drainage systems, access roads, earthmoving, paving, and retaining walls.",
    fullDesc: "We provide heavy civil engineering and site infrastructure solutions designed to withstand tropical weather and environmental conditions. Our civil team handles earthworks, retaining structures, culverts, drainage channels, storm-water mitigation, paving, and foundation stabilization.",
    icon: "HardHat",
    image: "/project-stone-building.jpg",
    deliverables: [
      "Earthworks, excavation, grading, and site leveling",
      "Reinforced concrete retaining walls and slope stabilization",
      "Paved driveways, interlocking pavers, and access roads",
      "Stormwater drainage systems, culverts, and trenches",
      "Foundation soil testing and load-bearing preparation"
    ],
    keyBenefits: [
      "High-durability civil engineering standards for Uganda's soil profiles",
      "Modern compaction and grading machinery",
      "Proper hydrologic and topographic site analysis"
    ]
  },
  {
    id: "renovation-remodeling",
    title: "Renovation and Remodeling",
    category: "construction",
    shortDesc: "Transforming existing spaces into modern, functional, and visually striking commercial and residential properties.",
    fullDesc: "Give your building a fresh lease on life with our comprehensive renovation and retrofitting services. We handle structural modifications, interior office fit-outs, façade modernizations, tile work, ceiling installations, and space optimization tailored to modern living and working requirements.",
    icon: "Hammer",
    image: "/project-floor-tiling.jpg",
    deliverables: [
      "Corporate office fit-outs and space partitioning",
      "Residential revamps, modern kitchen, and bathroom upgrades",
      "Building façade rejuvenation and exterior rendering",
      "Acoustic ceilings, gypsum boards, and modern lighting niches",
      "Structural reinforcement and crack remediation"
    ],
    keyBenefits: [
      "Minimal disruption to occupied spaces during execution",
      "High-end contemporary finishings and materials",
      "Cost-effective alternatives to complete demolition"
    ]
  },
  {
    id: "architectural-structural",
    title: "Architectural & Structural Support",
    category: "engineering",
    shortDesc: "Professional architectural planning, structural analysis, CAD drafting, and regulatory approval support.",
    fullDesc: "Our technical design office pairs architectural elegance with engineering strength. We prepare detailed 2D architectural drawings, 3D renderings, structural calculations, and documentation required for municipal permits and physical planning board approvals across Uganda.",
    icon: "Ruler",
    image: "/project-architectural-plan.jpg",
    deliverables: [
      "Architectural design and conceptual 3D visualizations",
      "Structural engineering calculations and reinforcement bar schedules",
      "Council approval drawing packages and compliance filings",
      "Structural integrity audits of existing buildings",
      "As-built drawings and technical site surveys"
    ],
    keyBenefits: [
      "Optimized material usage saving client construction costs",
      "Modern energy-efficient and climate-adapted layouts",
      "Prompt handling of local municipal planning criteria"
    ]
  },

  {
    id: "project-management",
    title: "Project Management & Supervision",
    category: "management",
    shortDesc: "End-to-end site supervision, Bill of Quantities (BOQ) preparation, procurement, and quality assurance.",
    fullDesc: "Avoid delays, cost overruns, and subpar workmanship. EDI K Technical Services acts as your trusted technical representative on-site. We manage budgets, scrutinize materials, direct subcontractors, and maintain tight project delivery timelines from groundbreaking to handover.",
    icon: "ClipboardCheck",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    deliverables: [
      "Detailed Bills of Quantities (BOQ) and cost estimation",
      "Daily and weekly site technical progress reporting",
      "Contractor vetting and procurement quality control",
      "Occupational Health & Safety (OHS) site enforcement",
      "Project timeline scheduling and milestone sign-offs"
    ],
    keyBenefits: [
      "Protects project owner investment against site wastage and pilferage",
      "Independent technical verification of all construction stages",
      "Clear, transparent financial accounting"
    ]
  },
  {
    id: "general-maintenance",
    title: "General Maintenance & Repairs",
    category: "technical",
    shortDesc: "Routine facility maintenance, structural waterproofing, crack repairs, repainting, and emergency support.",
    fullDesc: "Protect your real estate assets through proactive preventative care and prompt emergency repairs. We offer scheduled facility maintenance contracts for commercial properties, schools, warehouses, and residential residences across Uganda.",
    icon: "Wrench",
    image: "/worker-wall-tiling.jpg",
    deliverables: [
      "Roof leak repair, membrane waterproofing, and gutter servicing",
      "Exterior and interior wall repainting with weather-guard coatings",
      "Floor tile repair, epoxy flooring, and terrazzo restoration",
      "Routine electrical panel servicing and plumbing cleanouts",
      "Door, window, lockset, and metal gate maintenance"
    ],
    keyBenefits: [
      "Extends the operational lifespan of your building",
      "Reduces costly emergency structural failures",
      "Rapid response team for technical breakdowns"
    ]
  }
];

/*
 * FEATURED PROJECTS (DEMONSTRATION PORTFOLIO)
 * Clearly identified as demonstration examples and portfolio models representing EDI K's scope.
 * Ready to be replaced by EDI K's verified client projects.
 */
export const PROJECTS_DATA: ProjectItem[] = [

  {
    id: "proj-2",
    title: "Modern Executive Residential Villa",
    category: "Residential",
    location: "Mbarara, Uganda",
    completionYear: "Completed Project",
    clientType: "Private Residential Client",
    image: "/mbarara-residential-project.png",
    shortDesc: "Complete structural construction featuring premium hip-roof design, architectural colonnades, and durable masonry finishes.",
    fullDesc: "A complete turnkey residential build executed with precision structural engineering in Mbarara, Uganda. Features reinforced concrete foundations, expansive veranda with elegant structural pillars, quality masonry brickwork, and modern architectural roofing.",
    scope: [
      "Full turnkey civil and residential building execution",
      "Reinforced concrete foundations and structural columns",
      "Custom hip-roof timber framing and tile installation",
      "Exterior plastering, drainage, and architectural finishes"
    ],
    isDemonstrationPortfolio: false
  },
  {
    id: "proj-3",
    title: "Executive Residential Villa & Veranda Works",
    category: "Residential",
    location: "Rukungiri, Uganda",
    completionYear: "Completed Project",
    clientType: "Private Residential Client",
    image: "/rukungiri-residential-house.jpg",
    shortDesc: "Complete residential construction featuring stone-clad base masonry, reinforced veranda pillars, and dark profile tile roofing.",
    fullDesc: "A complete turnkey residential house constructed in Rukungiri, Uganda. Designed and executed with durable foundation work, stone-wall cladding, raised entry staircase, decorative column work, and modern roofing architecture.",
    scope: [
      "Substructure excavation, reinforced foundation, and floor slab",
      "Perimeter stone cladding masonry and exterior wall finishes",
      "Architectural porch pillars and terrace metal balustrades",
      "Complete roofing structure and gutter installation"
    ],
    isDemonstrationPortfolio: false
  },


];

/*
 * 6 CORE PILLARS: WHY CHOOSE EDI K TECHNICAL SERVICES
 */
export const WHY_CHOOSE_US: ValuePillar[] = [
  {
    id: "quality",
    title: "Commitment to Quality",
    description: "We use laboratory-verified construction materials, certified aggregates, and rigorous quality check inspections at every milestone.",
    icon: "Award",
    statBadge: "100% QA/QC Standards"
  },
  {
    id: "workmanship",
    title: "Professional & Skilled Workmanship",
    description: "Our teams comprise qualified engineers, certified electricians, master masons, and seasoned site managers with hands-on field experience.",
    icon: "Users",
    statBadge: "Certified Teams"
  },
  {
    id: "delivery",
    title: "Reliable Project Delivery",
    description: "We work with clear Gannt schedules, proactive procurement, and milestone tracking to deliver projects on time and within agreed budgets.",
    icon: "Clock",
    statBadge: "On-Time Milestones"
  },
  {
    id: "communication",
    title: "Transparent Communication",
    description: "No hidden charges or surprise invoices. You receive regular photographic progress updates, transparent BOQs, and direct engineer access.",
    icon: "MessageSquareCheck",
    statBadge: "Clear Reporting"
  },
  {
    id: "safety",
    title: "Safety-Conscious Practices",
    description: "Safety is non-negotiable. We maintain strict on-site Occupational Health & Safety (OHS) regulations, PPE compliance, and risk assessments.",
    icon: "ShieldCheck",
    statBadge: "Zero-Harm Culture"
  },
  {
    id: "customer",
    title: "Customer-Focused Solutions",
    description: "We listen to your specific operational, architectural, and budgetary needs to craft customized, cost-effective engineering solutions.",
    icon: "HeartHandshake",
    statBadge: "Client-First Focus"
  }
];

/*
 * 5-STEP WORKING PROCESS
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Consultation & Requirements",
    subtitle: "Understanding your vision and objectives",
    description: "We begin with an in-depth discussion about your project goals, architectural preferences, site location, timeline expectations, and budget parameters.",
    deliverables: ["Initial project brief", "Scope definition", "Needs assessment"],
    icon: "MessageCircle"
  },
  {
    stepNumber: "02",
    title: "Site Assessment & Planning",
    subtitle: "Technical site evaluation and analysis",
    description: "Our engineers conduct physical site inspections, soil tests, topographical assessments, and structural evaluations to identify feasibility and technical requirements.",
    deliverables: ["Site inspection report", "Feasibility analysis", "Technical preliminary notes"],
    icon: "MapPin"
  },
  {
    stepNumber: "03",
    title: "Proposal & Quotation",
    subtitle: "Transparent BOQ and clear schedule",
    description: "We provide an itemized Bill of Quantities (BOQ), detailed scope breakdown, transparent pricing, material specifications, and a realistic project schedule.",
    deliverables: ["Comprehensive BOQ", "Schedule of works", "Fixed milestone quote"],
    icon: "FileSpreadsheet"
  },
  {
    stepNumber: "04",
    title: "Execution & Supervision",
    subtitle: "Precision engineering on the ground",
    description: "Construction and technical work commence under the direct guidance of qualified site supervisors, enforcing safety protocols and strict quality checks.",
    deliverables: ["Quality controlled construction", "Weekly progress reports", "Material test verification"],
    icon: "HardHat"
  },
  {
    stepNumber: "05",
    title: "Quality Inspection & Handover",
    subtitle: "Final punch-list and client sign-off",
    description: "We conduct a rigorous multi-point quality audit, resolve any minor punch-list items, perform technical testing, and formally hand over the completed structure.",
    deliverables: ["Punch-list sign-off", "As-built documentation", "Warranty & maintenance guidance"],
    icon: "CheckCircle"
  }
];

/*
 * TESTIMONIALS (SAMPLE DEMONSTRATION CONTENT)
 * Identified as sample placeholder endorsements ready for official client testimonials.
 */
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Private Homeowner",
    clientRole: "Residential Property Owner",
    projectType: "Modern Executive Residential Villa",
    location: "Mbarara, Uganda",
    quote: "EDI K Technical Services delivered outstanding craftsmanship on our residential villa in Mbarara. From the reinforced foundations to the hip-roof framing and column finishes, Eng. Edison and his team demonstrated genuine dedication and professional standards throughout.",
    rating: 5,
    avatar: "",
    isSampleReview: true
  },
  {
    id: "test-2",
    clientName: "Residential Client",
    clientRole: "Homeowner & Client",
    projectType: "Executive Residential Villa & Veranda Works",
    location: "Rukungiri, Uganda",
    quote: "From initial site preparation to the final stone-clad finishes and veranda balustrades, EDI K Technical Services met every expectation. Honest pricing, quality materials, and structural work built to last generations in Rukungiri.",
    rating: 5,
    avatar: "",
    isSampleReview: true
  }
];

/*
 * FREQUENTLY ASKED QUESTIONS (UGANDA CONSTRUCTION CONTEXT)
 */
export const FAQ_DATA = [
  {
    question: "Where does EDI K Technical Services operate in Uganda?",
    answer: "Our physical headquarters are located in Kiruhura Village, Kashekye Parish, Kamwezi Subcounty, Rukiga District, Uganda. We execute building construction, civil engineering, electrical, plumbing, and technical services across Rukiga, Kabale, Kigezi sub-region, Western Uganda, as well as nationwide projects across Uganda."
  },
  {
    question: "How do I request a formal quotation or Bill of Quantities (BOQ)?",
    answer: "You can click any 'Request a Quote' button on this website, fill in your project details, or contact our engineering desk via phone or WhatsApp. We review your architectural drawings or schedule a site visit to generate an itemized, transparent quotation."
  },
  {
    question: "Can EDI K assist with architectural plans and municipal council approvals?",
    answer: "Yes. Our technical team works alongside licensed architects and structural engineers to prepare statutory submission drawings, structural calculations, and documentation required for municipal physical planning approvals."
  },
  {
    question: "Do you handle small renovation jobs as well as large builds?",
    answer: "Absolutely. We manage both comprehensive ground-up construction and specialized technical renovation, electrical overhauls, plumbing installations, and routine facility maintenance contracts."
  },
  {
    question: "What measures ensure quality and safety during construction?",
    answer: "We adhere strictly to Ugandan and East African building codes, conduct certified laboratory testing of concrete batches and steel reinforcement, and enforce on-site Personal Protective Equipment (PPE) and risk management at all times."
  }
];
