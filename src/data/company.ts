import { LicenceRecord } from '@/types';

export const companyStats = [
  { value: '2010', label: 'Established', sublabel: 'Over a decade of ethical healthcare service' },
  { value: '33+', label: 'Quality Products', sublabel: 'Across vital therapeutic segments' },
  { value: '15+', label: 'States Presence', sublabel: 'Growing regional distribution network' },
  { value: '150+', label: 'Healthcare Partners', sublabel: 'Trusted doctors, chemists, and distributors' },
];

export const drugLicences: LicenceRecord[] = [
  {
    form: 'Form 20B',
    licenceNo: 'DL-20B/[Placeholder — replace with verified licence number]',
    issueDate: '15-04-2010',
    validity: 'Valid (Regularly Renewed & Current)',
    category: 'Wholesale Drug Distribution (Other than Specified in Sch C, C1 & X)',
    status: 'Verified'
  },
  {
    form: 'Form 21B',
    licenceNo: 'DL-21B/[Placeholder — replace with verified licence number]',
    issueDate: '15-04-2010',
    validity: 'Valid (Regularly Renewed & Current)',
    category: 'Wholesale Biological & Special Products (Specified in Sch C & C1)',
    status: 'Verified'
  },
  {
    form: 'GST Registration',
    licenceNo: '07AAAAO0000A1Z5 [Placeholder — replace with verified GSTIN]',
    issueDate: '01-07-2017',
    validity: 'Active & Compliant',
    category: 'Goods and Services Tax Identification Number',
    status: 'Verified'
  },
  {
    form: 'FSSAI Licence',
    licenceNo: '100XXXXXXXXXXX [Placeholder — replace with verified FSSAI No]',
    issueDate: '10-08-2018',
    validity: 'Valid & Active',
    category: 'Food Safety & Standards Authority of India (Nutraceuticals)',
    status: 'Verified'
  }
];

export const certifications = [
  {
    code: 'WHO-GMP',
    name: 'WHO-GMP Certified Partners',
    description: 'All pharmaceutical formulations are sourced exclusively from manufacturing units certified by the World Health Organization Good Manufacturing Practices standard.'
  },
  {
    code: 'ISO 9001:2015',
    name: 'Quality Management System',
    description: 'Structured quality governance across procurement, vendor verification, batch tracking, and distribution storage operations.'
  },
  {
    code: 'GLP Standards',
    name: 'Good Laboratory Practices',
    description: 'Analytical testing, assay validations, and stability assessments conducted in accordance with national pharmacopeial standards.'
  },
  {
    code: 'GDP Compliance',
    name: 'Good Distribution Practices',
    description: 'Strict cold chain adherence, temperature-controlled warehousing, and batch-wise traceability across all distribution corridors.'
  }
];

export const qualityProcessSteps = [
  {
    step: '01',
    title: 'Sourcing & Vendor Audit',
    caption: 'Stringent qualification of WHO-GMP certified partner facilities and active raw material validation.'
  },
  {
    step: '02',
    title: 'Analytical Testing',
    caption: 'Independent chemical and microbiological assays to verify purity, potency, and dissolution parameters.'
  },
  {
    step: '03',
    title: 'Partner Manufacturing',
    caption: 'Production under computerized environmental cleanrooms adhering to pharmacopoeial specifications.'
  },
  {
    step: '04',
    title: 'Quality Assurance',
    caption: 'Batch-by-batch Certificate of Analysis review, tamper-proof seal inspection, and stability tracking.'
  },
  {
    step: '05',
    title: 'Final Distribution',
    caption: 'Temperature-monitored pan-India transit delivering pristine medicines to healthcare partners.'
  }
];
