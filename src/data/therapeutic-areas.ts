import { TherapeuticArea } from '@/types';

export const therapeuticAreas: TherapeuticArea[] = [
  {
    id: 'ta-orthopaedics',
    slug: 'orthopaedics-pain-management',
    title: 'Orthopaedics & Pain Management',
    tagline: 'Restoring Mobility, Relieving Inflammation',
    shortDescription: 'Comprehensive oral formulations addressing inflammatory joint diseases, acute soft-tissue trauma, muscle spasms, and bone mineral restoration.',
    fullDescription: 'Our orthopaedic and pain portfolio focuses on evidence-based combinations that deliver targeted analgesic, anti-inflammatory, proteolytic, and muscle relaxation benefits. Formulated in alignment with WHO-GMP certified manufacturing partners, these medications prioritize steady-state bioavailability, high gastric tolerance, and rapid functional recovery for individuals facing osteoarthritis, rheumatoid conditions, muscular spasms, and acute physical strain.',
    iconName: 'Bone',
    colorAccent: '#2F6FA8',
    heroImage: '/images/therapeutic-areas/orthopaedics.jpg',
    productsCount: 6,
    keyConditions: [
      'Osteoarthritis, Rheumatoid Arthritis & Spondylitis',
      'Acute Muscle Spasms, Torticollis & Lumbago',
      'Post-Traumatic Swelling & Sports Injuries',
      'Osteopenia, Bone Loss & Muscular Fatigue'
    ]
  },
  {
    id: 'ta-antibiotics-antibacterial',
    slug: 'antibiotics-antibacterial',
    title: 'Antibiotics & Antibacterial',
    tagline: 'Targeted Antimicrobial Precision',
    shortDescription: 'Broad-spectrum oral cephalosporins, fluoroquinolones, and beta-lactamase inhibitor combinations engineered for reliable pathogen eradication.',
    fullDescription: 'In an era demanding responsible antibiotic stewardship, Opsus distributes high-potency antibiotic and antibacterial formulations designed to combat community-acquired and multidrug-resistant infections. Every batch is manufactured under rigorous cGMP protocols by certified partners, ensuring optimal stability, exact dissolution kinetics, and batch-to-batch therapeutic consistency.',
    iconName: 'ShieldAlert',
    colorAccent: '#C9A15E',
    heroImage: '/images/therapeutic-areas/anti-infectives.jpg',
    productsCount: 8,
    keyConditions: [
      'Upper and Lower Respiratory Tract Bacterial Infections',
      'Complicated & Uncomplicated Urinary Tract Infections',
      'Enteric Fever (Typhoid) & Mixed Gastrointestinal Sepsis',
      'Skin, Soft-Tissue, Bone & Dental Bacterial Infections'
    ]
  },
  {
    id: 'ta-gastroenterology',
    slug: 'gastroenterology',
    title: 'Gastroenterology & Digestive Health',
    tagline: 'Restoring Gastrointestinal Harmony',
    shortDescription: 'Enteric-coated proton pump inhibitors with prokinetic pellet technology and antacids for rapid acid suppression and motility coordination.',
    fullDescription: 'Gastric acid hypersecretion and delayed gastric emptying frequently co-exist in modern lifestyles. Opsus provides enteric-coated and sustained-release multi-pellet capsule delivery systems alongside sugar-free buffered suspensions that neutralize acid reflux and coordinate upper digestive motility without compromising gastric mucosal defense.',
    iconName: 'Flame',
    colorAccent: '#C9A15E',
    heroImage: '/images/therapeutic-areas/gastroenterology.jpg',
    productsCount: 6,
    keyConditions: [
      'Gastroesophageal Reflux Disease (GERD) & Acid Regurgitation',
      'Erosive Esophagitis, Peptic Ulcerations & Hyperacidity',
      'Functional Non-Ulcer Dyspepsia & Delayed Gastric Emptying',
      'Diabetic Gastroparesis & Gastrointestinal Motility Disorders'
    ]
  },
  {
    id: 'ta-respiratory',
    slug: 'respiratory-cough-care',
    title: 'Respiratory & Allergy Care',
    tagline: 'Clear Airway Pathways and Breathing Comfort',
    shortDescription: 'Sugar-free bronchodilator-mucolytic syrups, second-generation antihistamines, and anti-inflammatory corticosteroids for comprehensive airway management.',
    fullDescription: 'Addressing seasonal allergic bronchospasms, environmental pollution triggers, and chronic airway obstruction, our respiratory portfolio offers pleasant-tasting syrups and once-daily oral tablets formulated for round-the-clock comfort in both pediatric and adult demographics.',
    iconName: 'Wind',
    colorAccent: '#2F6FA8',
    heroImage: '/images/therapeutic-areas/respiratory.jpg',
    productsCount: 6,
    keyConditions: [
      'Productive Cough with Tenacious Phlegm & Bronchospasm',
      'Dry, Hacking, Non-Productive & Spasmodic Cough',
      'Seasonal & Perennial Allergic Rhinitis & Sneezing',
      'Severe Inflammatory Allergic Airway Disorders'
    ]
  },
  {
    id: 'ta-gynaecology',
    slug: 'gynaecology',
    title: 'Gynaecology',
    tagline: 'Dedicated Care Across Every Life Phase',
    shortDescription: 'Targeted antispasmodics for dysmenorrhea, specialized amino acid formulations, and comprehensive nutritional matrices for maternal-fetal and women’s health.',
    fullDescription: 'From managing acute menstrual colic to supporting optimal fetal circulation during high-risk pregnancies, our gynaecology division delivers evidence-based therapeutic solutions. Manufactured under stringent cleanroom parameters, our products provide targeted efficacy and high clinical acceptance.',
    iconName: 'HeartHandshake',
    colorAccent: '#A6317D',
    heroImage: '/images/therapeutic-areas/gynaecology.jpg',
    productsCount: 11,
    keyConditions: [
      'Primary & Secondary Spasmodic Dysmenorrhea (Menstrual Colic)',
      'Intrauterine Growth Restriction (IUGR) & Oligohydramnios',
      'Placental Perfusion Optimization in High-Risk Pregnancy',
      'Pregnancy & Lactation Micronutrient & Calcium Replenishment'
    ]
  },
  {
    id: 'ta-pediatric',
    slug: 'pediatric-care',
    title: 'Pediatric Care & Infantile Wellness',
    tagline: 'Gentle, Precise Formulations for Growing Children',
    shortDescription: 'Pediatric suspensions, carminative drops for infantile colic, calibrated growth drops, and broad-spectrum pediatric antimicrobials.',
    fullDescription: 'Pediatric medicine demands exceptional dosing accuracy, palatability, and gentle gastrointestinal tolerance. Opsus delivers specialized drops with calibrated droppers and great-tasting suspensions formulated specifically to comfort infants and support healthy developmental milestones.',
    iconName: 'Sparkles',
    colorAccent: '#2F6FA8',
    heroImage: '/images/therapeutic-areas/pediatric.jpg',
    productsCount: 7,
    keyConditions: [
      'Infantile Colic, Trapped Gas & Evening Inconsolable Crying',
      'Pediatric Pyrexia (Fever) & Inflammatory Pain',
      'Infant & Toddler Growth Faltering & Poor Appetite',
      'Pediatric Respiratory & Gastrointestinal Bacterial Infections'
    ]
  },
  {
    id: 'ta-neurology',
    slug: 'neurology',
    title: 'Neurology & Neuropathic Care',
    tagline: 'Precision Neuromodulation and Nerve Regeneration',
    shortDescription: 'Sustained-release neuromodulators with bioactive neurotrophic vitamins, adaptogens, and prokinetics for peripheral neuropathy, sciatica, and nerve health.',
    fullDescription: 'Chronic neuropathic pain requires continuous 24-hour neural stabilization combined with structural myelin sheath nourishment. Our neurology formulations combine sustained-release pregabalin with bioactive methylcobalamin to suppress aberrant ectopic pain discharges and promote peripheral axonal healing.',
    iconName: 'Activity',
    colorAccent: '#A6317D',
    heroImage: '/images/therapeutic-areas/neurology.jpg',
    productsCount: 10,
    keyConditions: [
      'Diabetic Peripheral Neuropathy & Burning Feet',
      'Lumbar & Cervical Radiculopathy (Sciatica / Pinched Nerve)',
      'Post-Herpetic Neuralgia & Fibromyalgia',
      'Axonal Demyelination & Peripheral Nerve Injuries'
    ]
  },
  {
    id: 'ta-dermatology',
    slug: 'dermatology',
    title: 'Dermatology & Skin Health',
    tagline: 'Advanced Cutaneous Therapy and Antimycotic Precision',
    shortDescription: 'Micro-pelletized broad-spectrum triazole antifungals, adaptogenic restorative capsules, and anti-allergic agents for resistant skin and nail conditions.',
    fullDescription: 'Cutaneous fungal, allergic, and inflammatory challenges require targeted systemic agents that achieve high concentrations in skin and nail matrices. Opsus distributes high-standard dermatological antimycotics and restorative nutrients designed for rapid clearance of recalcitrant dermatophytoses and cutaneous allergies.',
    iconName: 'ShieldCheck',
    colorAccent: '#A6317D',
    heroImage: '/images/therapeutic-areas/dermatology.jpg',
    productsCount: 4,
    keyConditions: [
      'Recalcitrant Tinea Corporis, Tinea Cruris & Tinea Pedis',
      'Onychomycosis (Fungal Nail Bed Infections)',
      'Cutaneous & Mucocutaneous Candidiasis',
      'Chronic Idiopathic Urticaria & Allergic Dermatoses'
    ]
  },
  {
    id: 'ta-nutraceuticals',
    slug: 'nutraceuticals',
    title: 'Nutraceuticals & Vitality',
    tagline: 'Cellular Vitality and Daily Physiological Defense',
    shortDescription: 'Standardized botanical adaptogens, lycopene antioxidants, high-protein supplements with DHA, and probiotic multi-vitamin matrices.',
    fullDescription: 'Nutritional wellness forms the cornerstone of preventative healthcare. Our nutraceutical range combines standardized ginseng extracts, potent carotenoid antioxidants, probiotics, and high-protein hydrolysates to assist convalescent recovery, enhance stamina, and fortify immune resilience.',
    iconName: 'Sparkles',
    colorAccent: '#C9A15E',
    heroImage: '/images/therapeutic-areas/nutraceuticals.jpg',
    productsCount: 7,
    keyConditions: [
      'General Debility, Chronic Fatigue & Convalescence',
      'Cellular Oxidative Stress & Free Radical Defense',
      'Dietary Protein Deficiencies, Sarcopenia & Maternal Recovery',
      'Gut Microbiome Balance & Daily Immune Modulation'
    ]
  }
];
