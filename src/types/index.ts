export interface ActiveIngredient {
  name: string;
  strength: string;
  unit?: string;
}

export interface ResearchSource {
  title: string;
  url?: string;
  sourceType: string;
  accessedDate?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brandName?: string;
  genericName: string;
  composition: string;
  activeIngredients?: ActiveIngredient[];
  dosageForm: string;
  route?: string;
  packaging: string;
  packSize?: string;
  category: string;
  categorySlug: string;
  secondaryCategories?: string[];
  tags?: string[];
  description: string;
  howItWorks?: string;
  therapeuticUse: string;
  uses?: string[];
  dosageInformation?: string;
  precautions?: string[];
  sideEffects?: string[];
  storage: string;
  howSupplied: string;
  prescriptionRequired?: boolean;
  rxSchedule?: string;
  featured?: boolean;
  image: string;
  images?: string[];
  partnerCertified: string;
  manufacturer?: string;
  marketer?: string;
  researchSources?: ResearchSource[];
  verificationStatus?: 'VERIFIED' | 'PARTIALLY VERIFIED' | 'NEEDS MANUAL VERIFICATION';
}

export interface TherapeuticArea {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  colorAccent: string;
  heroImage: string;
  productsCount: number;
  keyConditions: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Therapeutic Areas' | 'Quality & Compliance' | 'Industry Updates' | 'Healthcare News' | 'Expert Opinions';
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  heroImage: string;
  featured?: boolean;
  tags: string[];
}

export interface LicenceRecord {
  form: string;
  licenceNo: string;
  issueDate: string;
  validity: string;
  category: string;
  status: 'Verified' | 'Active';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export interface PcdEnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  state: string;
  district: string;
  experienceYears: string;
  investmentCapacity: string;
  message: string;
}
