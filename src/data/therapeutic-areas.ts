import { TherapeuticArea } from '@/types';

export const therapeuticAreas: TherapeuticArea[] = [
  {
    id: 'ta-1',
    slug: 'orthopaedics-pain-management',
    title: 'Orthopaedics & Pain Management',
    tagline: 'Restoring Mobility, Relieving Inflammation',
    shortDescription: 'Comprehensive oral formulations addressing inflammatory joint diseases, acute soft-tissue trauma, and degenerative musculoskeletal disorders.',
    fullDescription: 'Our orthopaedic and pain portfolio focuses on evidence-based combinations that deliver targeted analgesic, anti-inflammatory, and muscle relaxation benefits. Developed in alignment with WHO-GMP certified manufacturing partners, these formulations prioritize patient tolerability, steady-state bioavailability, and rapid functional recovery for individuals facing osteoarthritis, rheumatoid conditions, and acute physical strain.',
    iconName: 'Bone',
    colorAccent: '#2F6FA8',
    heroImage: '/images/therapeutic-areas/orthopaedics.jpg',
    productsCount: 4,
    keyConditions: [
      'Osteoarthritis and Joint Degeneration',
      'Rheumatoid Arthritis and Ankylosing Spondylitis',
      'Acute Sprains, Strains, and Muscular Spasms',
      'Post-Surgical Oedema and Inflammation Management'
    ]
  },
  {
    id: 'ta-2',
    slug: 'antibiotics-anti-infectives',
    title: 'Antibiotics & Anti-Infectives',
    tagline: 'Targeted Antimicrobial Precision',
    shortDescription: 'Broad-spectrum oral cephalosporins, macrolides, and beta-lactamase inhibitor combinations engineered for reliable pathogen control.',
    fullDescription: 'In an era demanding responsible antibiotic stewardship, Opsus distributes high-potency anti-infective formulations designed to combat community-acquired infections. Every batch is manufactured under rigorous cGMP protocols by certified partners, ensuring optimal stability, exact dissolution kinetics, and batch-to-batch consistency.',
    iconName: 'ShieldAlert',
    colorAccent: '#C9A15E',
    heroImage: '/images/therapeutic-areas/anti-infectives.jpg',
    productsCount: 4,
    keyConditions: [
      'Lower and Upper Respiratory Tract Bacterial Infections',
      'Uncomplicated Urinary Tract Pathologies',
      'Skin, Soft-Tissue, and Dental Bacterial Manifestations',
      'Pediatric and Adolescent Infectious Episodes'
    ]
  },
  {
    id: 'ta-3',
    slug: 'cardiology-diabetes',
    title: 'Cardiology & Diabetes',
    tagline: 'Comprehensive Cardio-Metabolic Stability',
    shortDescription: 'Advanced vascular protection, sustained-release glycaemic regulators, and long-acting antihypertensive regimens.',
    fullDescription: 'Cardiovascular and metabolic disorders require disciplined, uninterrupted therapy with uncompromised tablet integrity. Opsus collaborates with specialist WHO-GMP partners producing sustained-release bilayered formulations that simplify daily regimens and support long-term vascular health across pan-India patient cohorts.',
    iconName: 'Activity',
    colorAccent: '#A6317D',
    heroImage: '/images/therapeutic-areas/cardiology.jpg',
    productsCount: 3,
    keyConditions: [
      'Essential Hypertension and Microvascular Protection',
      'Type 2 Diabetes Mellitus Glycaemic Stabilization',
      'Chronic Stable Angina Pectoris Hemodynamic Support',
      'Combined Metabolic Syndrome Regimens'
    ]
  },
  {
    id: 'ta-4',
    slug: 'gynaecology-womens-health',
    title: "Gynaecology & Women's Health",
    tagline: 'Dedicated Care Across Every Life Phase',
    shortDescription: 'Nutritional haematinics, natural micronized progesterone, and targeted formulations for maternal well-being.',
    fullDescription: "From adolescent nutritional optimization to prenatal support and mature hormonal balance, our women's healthcare division delivers high-absorption oral haematological and endocrine support. Manufactured under stringent cleanroom parameters, our products provide gentle gastrointestinal tolerability and high therapeutic acceptance.",
    iconName: 'HeartHandshake',
    colorAccent: '#2F6FA8',
    heroImage: '/images/therapeutic-areas/gynaecology.jpg',
    productsCount: 2,
    keyConditions: [
      'Nutritional and Pregnancy-Related Iron Deficiency Anaemia',
      'Luteal Phase Support and Endocrine Maintenance',
      'Perinatal Multivitamin and Mineral Prophylaxis',
      'Post-Partum Convalescent Rehabilitation'
    ]
  },
  {
    id: 'ta-5',
    slug: 'gastroenterology',
    title: 'Gastroenterology & Digestive Health',
    tagline: 'Restoring Gastrointestinal Harmony',
    shortDescription: 'Proton pump inhibitors with prokinetic pellet technology for rapid symptomatic acid suppression and motility coordination.',
    fullDescription: 'Gastric acid hypersecretion and delayed gastric emptying frequently co-exist in modern lifestyles. Opsus provides enteric-coated and sustained-release multi-pellet capsule delivery systems that neutralize acid reflux and coordinate upper digestive motility without compromising gastric mucosal defense.',
    iconName: 'Flame',
    colorAccent: '#C9A15E',
    heroImage: '/images/therapeutic-areas/gastroenterology.jpg',
    productsCount: 2,
    keyConditions: [
      'Gastroesophageal Reflux Disease (GERD)',
      'Erosive Esophagitis and Peptic Ulcerations',
      'Functional Dyspepsia and Delayed Gastric Emptying',
      'Non-Ulcer Gastric Motility Imbalances'
    ]
  },
  {
    id: 'ta-6',
    slug: 'respiratory-cough-care',
    title: 'Respiratory & Cough Care',
    tagline: 'Clear Airway Pathways and Breathing Comfort',
    shortDescription: 'Sugar-free bronchodilator-mucolytic syrups and dual-action anti-leukotriene antihistamines for chronic airway care.',
    fullDescription: 'Addressing seasonal allergic bronchospasms, environmental pollution triggers, and chronic airway obstruction, our respiratory portfolio offers pleasant-tasting syrups and once-daily oral tablets formulated for round-the-clock comfort in both pediatric and adult demographics.',
    iconName: 'Wind',
    colorAccent: '#2F6FA8',
    heroImage: '/images/therapeutic-areas/respiratory.jpg',
    productsCount: 2,
    keyConditions: [
      'Productive Cough with Bronchial Spasm',
      'Seasonal and Perennial Allergic Rhinitis',
      'Chronic Obstructive Airway Management',
      'Bronchial Hyperresponsiveness and Nocturnal Cough'
    ]
  },
  {
    id: 'ta-7',
    slug: 'nutraceuticals',
    title: 'Nutraceuticals & Vitality',
    tagline: 'Cellular Vitality and Daily Physiological Defense',
    shortDescription: 'Standardized botanical adaptogens, micronutrient antioxidants, and immune-supportive daily complexes.',
    fullDescription: 'Nutritional wellness forms the cornerstone of preventative healthcare. Our nutraceutical range combines standardized ginseng extracts with clinical-grade vitamin and trace mineral matrices to assist natural recovery, enhance physical endurance, and fortify immune resilience.',
    iconName: 'Sparkles',
    colorAccent: '#C9A15E',
    heroImage: '/images/therapeutic-areas/nutraceuticals.jpg',
    productsCount: 1,
    keyConditions: [
      'General Fatigue, Convalescence, and Debility',
      'Cellular Oxidative Stress and Free Radical Defense',
      'Age-Related Micronutrient Replenishment',
      'Daily Immune Modulation and Energy Metabolism'
    ]
  },
  {
    id: 'ta-8',
    slug: 'dermatology',
    title: 'Dermatology & Skin Health',
    tagline: 'Advanced Cutaneous Care and Barrier Integrity',
    shortDescription: 'Therapeutic dermatological formulations supporting barrier repair, fungal infection clearance, and inflammatory skin relief.',
    fullDescription: 'Skin health requires gentle, scientifically verified topicals and oral agents that soothe erythema and eliminate cutaneous dermatophytes. Opsus partners with high-standard dermatological formulators to deliver stable, cosmetically elegant solutions for chronic and acute dermal challenges.',
    iconName: 'ShieldCheck',
    colorAccent: '#A6317D',
    heroImage: '/images/therapeutic-areas/dermatology.jpg',
    productsCount: 1,
    keyConditions: [
      'Superficial Cutaneous Fungal and Yeast Infections',
      'Atopic Dermatitis and Dry Skin Barrier Breakdown',
      'Allergic Contact Dermatitis and Pruritus',
      'Acneiform Inflammatory Lesions'
    ]
  }
];
