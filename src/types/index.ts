export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'construction' | 'engineering' | 'technical' | 'management';
  icon: string;
  image: string;
  deliverables: string[];
  keyBenefits: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Commercial' | 'Residential' | 'Civil & Infrastructure' | 'Technical Works' | 'Renovation';
  location: string;
  image: string;
  completionYear?: string;
  clientType?: string;
  shortDesc: string;
  fullDesc: string;
  scope: string[];
  isDemonstrationPortfolio?: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  numericTarget: number;
  suffix?: string;
  prefix?: string;
  subtext: string;
  icon: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  statBadge?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  projectType: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  isSampleReview: boolean;
}

export interface QuoteFormState {
  fullName: string;
  email: string;
  phone: string;
  serviceId: string;
  projectLocation: string;
  estimatedBudget: string;
  projectTimeline: string;
  projectDescription: string;
}

export interface ExecutiveLeader {
  name: string;
  role: string;
  qualifications: string;
  photoUrl: string;
  bio: string;
  executiveQuote: string;
  directPhone: string;
  directWhatsApp: string;
}
