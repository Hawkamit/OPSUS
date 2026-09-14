export interface Product {
  id: string;
  slug: string;
  name: string;
  genericName: string;
  composition: string;
  dosageForm: 'Tablets' | 'Capsules' | 'Softgel Capsules' | 'Oral Suspension' | 'Syrup' | 'Injectable';
  packaging: string;
  category: string;
  categorySlug: string;
  description: string;
  therapeuticUse: string;
  storage: string;
  howSupplied: string;
  featured?: boolean;
  image: string;
  partnerCertified: string;
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
