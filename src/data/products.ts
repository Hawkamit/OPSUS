import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'fensus-p',
    slug: 'fensus-p',
    name: 'Fensus-P Tab',
    brandName: 'Fensus-P Tab',
    genericName: 'Aceclofenac & Paracetamol Tablets IP',
    composition: 'Aceclofenac 100 mg + Paracetamol 325 mg',
    activeIngredients: [
      { name: 'Aceclofenac IP', strength: '100 mg' },
      { name: 'Paracetamol IP', strength: '325 mg' },
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Orthopaedics',
    categorySlug: 'orthopaedics-pain-management',
    secondaryCategories: ['Neurology', 'Pain Relief & Anti-Inflammatory'],
    tags: ['Aceclofenac', 'Paracetamol', 'Analgesic', 'Anti-inflammatory', 'Musculoskeletal Pain', 'Arthritis'],
    description: 'Fensus-P Tab is a synergistic fixed-dose oral formulation combining Aceclofenac, a potent phenylacetic acid-derived NSAID, with Paracetamol, a well-tolerated central analgesic and antipyretic. It provides rapid and sustained relief from moderate-to-severe musculoskeletal pain and inflammatory conditions.',
    howItWorks: 'Aceclofenac selectively inhibits cyclooxygenase (COX-2) enzymes to block prostaglandin synthesis at the site of inflammation. Paracetamol exerts central analgesic and antipyretic effects via inhibition of prostaglandin synthesis in the central nervous system, providing rapid dual-pathway symptomatic relief.',
    therapeuticUse: 'Indicated for the symptomatic management of acute and chronic painful inflammatory conditions including osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, low back pain, dental pain, and post-traumatic musculoskeletal injuries.',
    uses: [
      'Osteoarthritis & Rheumatoid Arthritis Pain',
      'Ankylosing Spondylitis & Spondylosis',
      'Acute Low Back Pain & Lumbago',
      'Post-operative & Post-traumatic Inflammation',
      'Dental Pain & Dental Extractions'
    ],
    dosageInformation: 'Dosage should be strictly determined by a registered medical practitioner. Usual adult dose is one tablet twice daily after meals.',
    precautions: [
      'Use with caution in patients with history of gastrointestinal ulceration or bleeding.',
      'Monitor renal and hepatic function during extended therapy.',
      'Avoid concurrent administration with other NSAIDs or paracetamol-containing preparations.',
      'Contraindicated in severe hepatic impairment or active peptic ulcer.'
    ],
    sideEffects: [
      'Nausea, dyspepsia, and mild abdominal discomfort',
      'Dizziness or mild headache',
      'Transient elevations in liver transaminases (rare)'
    ],
    storage: 'Store protected from light and moisture at a temperature not exceeding 30°C.',
    howSupplied: 'Packaged in moisture-impermeable ALU-ALU blister strips of 10 tablets, 10 strips per carton.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/fensus-p-box.png',
    images: [
      '/images/products/fensus-p-box.png',
      '/images/products/fensus-range-group.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP) Monograph', sourceType: 'Pharmacopoeia' },
      { title: 'CIMS / MIMS India Prescribing Directory', sourceType: 'Pharmaceutical Index' },
      { title: 'National Formulary of India (NFI)', sourceType: 'Regulatory' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'fensus-sp',
    slug: 'fensus-sp',
    name: 'Fensus-SP Tab',
    brandName: 'Fensus-SP Tab',
    genericName: 'Aceclofenac, Paracetamol & Serratiopeptidase Tablets',
    composition: 'Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 10 mg',
    activeIngredients: [
      { name: 'Aceclofenac IP', strength: '100 mg' },
      { name: 'Paracetamol IP', strength: '325 mg' },
      { name: 'Serratiopeptidase IP (as enteric coated granules)', strength: '10 mg' },
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Orthopaedics',
    categorySlug: 'orthopaedics-pain-management',
    secondaryCategories: ['Pain Relief & Anti-Inflammatory', 'Surgical Care'],
    tags: ['Aceclofenac', 'Paracetamol', 'Serratiopeptidase', 'Anti-edema', 'Proteolytic Enzyme', 'Post-Surgery'],
    description: 'Fensus-SP Tab is an advanced triple-action therapeutic formulation containing Aceclofenac, Paracetamol, and the proteolytic enzyme Serratiopeptidase (10 mg). It accelerates tissue healing by simultaneously relieving pain, reducing inflammation, and resolving localized edema and hematoma.',
    howItWorks: 'Aceclofenac and Paracetamol deliver dual-action inhibition of inflammatory prostaglandins. Serratiopeptidase hydrolyzes bradykinin, histamine, and serotonin, lyses dead tissue fibrin clots, and enhances microcirculation at the injured site to facilitate antibiotic penetration and edema resolution.',
    therapeuticUse: 'Indicated for moderate-to-severe post-operative and post-traumatic inflammation, sports injuries, fracture management, dental surgery, and exacerbations of arthritis with swelling.',
    uses: [
      'Post-operative Edema & Tissue Swelling',
      'Traumatic Injuries, Sprains & Fractures',
      'Dental Extractions, Maxillofacial Surgery & Gingivitis',
      'Acute Musculoskeletal Pain with Oedema',
      'ENT Inflammatory Conditions (Sinusitis, Tonsillitis)'
    ],
    dosageInformation: 'As directed by the prescribing physician. Standard adult dosing is one tablet twice daily taken after meals.',
    precautions: [
      'Enteric-coated tablets should be swallowed whole; do not crush or chew.',
      'Exercise caution in patients with coagulation disorders or anticoagulant therapy.',
      'Contraindicated in active peptic ulceration and severe renal/hepatic impairment.'
    ],
    sideEffects: [
      'Epigastric pain, nausea, and flatulence',
      'Transient loose stools or skin rash',
      'Dizziness (infrequent)'
    ],
    storage: 'Store in a cool, dry place below 25°C. Protect from direct sunlight and moisture.',
    howSupplied: 'Packaged in moisture-impermeable ALU-ALU blister strips of 10 tablets, 10 strips per carton.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/fensus-sp-box.png',
    images: [
      '/images/products/fensus-sp-box.png',
      '/images/products/fensus-sp-strip.png',
      '/images/products/fensus-range-group.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP) Monograph', sourceType: 'Pharmacopoeia' },
      { title: 'CIMS Drug Compendium', sourceType: 'Pharmaceutical Index' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'fensus-pth',
    slug: 'fensus-pth',
    name: 'Fensus-PTH Tab',
    brandName: 'Fensus-PTH Tab',
    genericName: 'Aceclofenac, Paracetamol & Thiocolchicoside Tablets',
    composition: 'Aceclofenac 100 mg + Thiocolchicoside 4 mg + Paracetamol 325 mg',
    activeIngredients: [
      { name: 'Aceclofenac IP', strength: '100 mg' },
      { name: 'Thiocolchicoside IP', strength: '4 mg' },
      { name: 'Paracetamol IP', strength: '325 mg' },
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Orthopaedics',
    categorySlug: 'orthopaedics-pain-management',
    secondaryCategories: ['Neurology', 'Muscle Relaxants', 'Pain Relief & Anti-Inflammatory'],
    tags: ['Aceclofenac', 'Thiocolchicoside', 'Paracetamol', 'Muscle Relaxant', 'Spasm', 'Spine Care'],
    description: 'Fensus-PTH Tab is a specialized triple-drug combination integrating a muscle relaxant with analgesic and anti-inflammatory agents to target severe muscular spasms, acute spinal pain, and hypertonic muscle contractures.',
    howItWorks: 'Thiocolchicoside acts selectively as a competitive GABAA and glycinergic receptor agonist, suppressing polysynaptic reflexes to relieve muscle hypertonicity without sedating motor reflexes. Aceclofenac and Paracetamol arrest peripheral inflammatory cascades and central pain signaling.',
    therapeuticUse: 'Indicated for acute painful spasms associated with vertebral static and degenerative disorders (torticollis, dorsalgia, lumbago), post-traumatic muscle contractures, and neurological spasticity.',
    uses: [
      'Acute Muscle Spasms & Painful Contractures',
      'Lumbago, Sciatica & Cervical Spondylosis',
      'Torticollis (Stiff Neck) & Whiplash Injuries',
      'Ankylosing Spondylitis Spasms',
      'Post-traumatic Muscular Stiffness'
    ],
    dosageInformation: 'Strictly as prescribed by a medical doctor. Usual adult dosage is one tablet twice daily after meals for a limited duration.',
    precautions: [
      'Not recommended during pregnancy, lactation, or in women of childbearing potential not using effective contraception.',
      'Do not exceed recommended dosage or duration of treatment.',
      'Caution in patients with history of seizures or epilepsy.'
    ],
    sideEffects: [
      'Mild somnolence, drowsiness, or vasovagal reactions',
      'Gastric irritation, nausea, or diarrhea',
      'Cutaneous allergic reactions (rare)'
    ],
    storage: 'Store below 25°C in a dry place. Protect from heat and direct sunlight.',
    howSupplied: 'Packaged in moisture-impermeable ALU-ALU blister strips of 10 tablets, 10 strips per carton.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/fensus-pth-box.png',
    images: [
      '/images/products/fensus-pth-box.png',
      '/images/products/fensus-pth-strip.png',
      '/images/products/fensus-range-group.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'European Medicines Agency (EMA) Thiocolchicoside Safety Review', sourceType: 'Regulatory' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'rexoflox-200',
    slug: 'rexoflox-200',
    name: 'Rexoflox-200 Tab',
    brandName: 'Rexoflox-200 Tab',
    genericName: 'Ofloxacin Tablets IP 200 mg',
    composition: 'Ofloxacin IP 200 mg',
    activeIngredients: [
      { name: 'Ofloxacin IP', strength: '200 mg' }
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Antibiotics & Antibacterial',
    categorySlug: 'antibiotics-antibacterial',
    secondaryCategories: ['Antibiotics & Antibacterial'],
    tags: ['Ofloxacin', 'Fluoroquinolone', 'Antibiotic', 'Bacterial Infections', 'UTI', 'Typhoid'],
    description: 'Rexoflox-200 Tab is a broad-spectrum second-generation fluoroquinolone antibiotic with high oral bioavailability and rapid bactericidal activity against a wide range of Gram-negative and Gram-positive clinical isolates.',
    howItWorks: 'Ofloxacin inhibits bacterial DNA gyrase (topoisomerase II) and topoisomerase IV enzymes required for bacterial DNA replication, transcription, repair, and recombination, resulting in rapid bacterial cell death.',
    therapeuticUse: 'Indicated for uncomplicated and complicated urinary tract infections, community-acquired lower respiratory tract infections, enteric fever (typhoid), prostatitis, pelvic inflammatory disease, and skin/soft-tissue infections caused by susceptible organisms.',
    uses: [
      'Urinary Tract Infections (Cystitis, Pyelonephritis)',
      'Enteric Fever (Typhoid & Paratyphoid Fever)',
      'Community-Acquired Pneumonia & Bronchitis',
      'Infectious Diarrhea & Dysentery',
      'Pelvic Inflammatory Disease & Prostatitis'
    ],
    dosageInformation: 'Prescription-only medicine. Take exactly as prescribed. Complete the full course of therapy even if symptoms improve early.',
    precautions: [
      'Maintain adequate hydration during treatment to prevent crystalluria.',
      'Avoid excessive exposure to direct sunlight (potential phototoxicity).',
      'Use with caution in elderly patients and those with central nervous system disorders.',
      'Contraindicated in patients with known hypersensitivity to fluoroquinolones.'
    ],
    sideEffects: [
      'Nausea, abdominal cramps, loss of appetite',
      'Headache, insomnia, or dizziness',
      'Mild photosensitivity or cutaneous reactions'
    ],
    storage: 'Store in a cool, dark, and dry place below 30°C.',
    howSupplied: 'ALU-ALU blister strips of 10 film-coated tablets in cartons of 10 strips.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H1',
    featured: true,
    image: '/images/products/rexoflox-200-box.png',
    images: [
      '/images/products/rexoflox-200-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'WHO Model List of Essential Medicines', sourceType: 'Global Health Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'rexoflox-m',
    slug: 'rexoflox-m',
    name: 'Rexoflox-M Syp',
    brandName: 'Rexoflox-M Syp',
    genericName: 'Ofloxacin & Metronidazole Oral Suspension',
    composition: 'Ofloxacin 50 mg + Metronidazole 120 mg / 5 ml',
    activeIngredients: [
      { name: 'Ofloxacin IP', strength: '50 mg / 5 ml' },
      { name: 'Metronidazole Benzoate IP (eq. to Metronidazole)', strength: '120 mg / 5 ml' },
    ],
    dosageForm: 'Oral Suspension',
    route: 'Oral',
    packaging: '30 ml PET Bottle with Measuring Cap',
    packSize: '30 ml Bottle',
    category: 'Antibiotics & Antibacterial',
    categorySlug: 'antibiotics-antibacterial',
    secondaryCategories: ['Pediatric Care', 'Gastroenterology'],
    tags: ['Ofloxacin', 'Metronidazole', 'Pediatric', 'Gastroenteritis', 'Amoebiasis', 'Diarrhea', 'Syrup'],
    description: 'Rexoflox-M Syp is a comprehensive oral suspension combining a fluoroquinolone antimicrobial with an antiprotozoal/anaerobic agent. It provides targeted pediatric and adult coverage against mixed bacterial, protozoal, and anaerobic gastrointestinal infections.',
    howItWorks: 'Ofloxacin targets aerobic Gram-negative and Gram-positive bacilli via DNA gyrase inhibition. Metronidazole interacts with microbial DNA to cause helical strand breakage in anaerobes and protozoa like Entamoeba histolytica and Giardia lamblia.',
    therapeuticUse: 'Indicated for acute bacterial diarrhea, amoebic dysentery, giardiasis, mixed intra-abdominal gastrointestinal infections, and dental/oral infections involving anaerobic flora.',
    uses: [
      'Acute Bacterial Gastroenteritis & Bacillary Dysentery',
      'Intestinal Amoebiasis & Giardiasis',
      'Mixed Aerobic-Anaerobic Abdominal Infections',
      'Pediatric Gastrointestinal Sepsis'
    ],
    dosageInformation: 'Shake well before use. Dosing is based on body weight and clinical evaluation by a healthcare professional.',
    precautions: [
      'Avoid consumption of alcohol or alcohol-containing medicines during and 48 hours after treatment.',
      'Use with caution in patients with hepatic disease or pre-existing central nervous system disorders.',
      'Complete the full prescribed duration.'
    ],
    sideEffects: [
      'Metallic taste in mouth, nausea, or epigastric discomfort',
      'Darkening of urine (harmless metabolic byproduct of metronidazole)',
      'Transient headache or mild dizziness'
    ],
    storage: 'Store below 25°C. Protect from light. Keep bottle tightly closed.',
    howSupplied: 'Bottle of 30 ml suspension with a graduated dosing cap.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H1',
    featured: false,
    image: '/images/products/rexoflox-m-bottle.png',
    images: [
      '/images/products/rexoflox-m-bottle.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'CIMS Gastroenterology Formulary', sourceType: 'Pharmaceutical Index' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'podsus-200',
    slug: 'podsus-200',
    name: 'Podsus-200 Tab',
    brandName: 'Podsus-200 Tab',
    genericName: 'Cefpodoxime Proxetil Tablets IP 200 mg',
    composition: 'Cefpodoxime Proxetil IP eq. to Cefpodoxime 200 mg',
    activeIngredients: [
      { name: 'Cefpodoxime Proxetil IP', strength: '200 mg (as Cefpodoxime)' }
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Antibiotics & Antibacterial',
    categorySlug: 'antibiotics-antibacterial',
    secondaryCategories: ['Respiratory & Allergy'],
    tags: ['Cefpodoxime', 'Cephalosporin', '3rd Generation', 'Pneumonia', 'Sinusitis', 'Antibiotic'],
    description: 'Podsus-200 Tab is an advanced third-generation oral cephalosporin prodrug. Following oral administration, it is rapidly de-esterified to active cefpodoxime, providing potent bactericidal action against key respiratory, cutaneous, and urinary pathogens.',
    howItWorks: 'Cefpodoxime binds to penicillin-binding proteins (PBPs) on the bacterial inner membrane, inhibiting transpeptidation during cell wall peptidoglycan synthesis, which triggers autolytic cell breakdown.',
    therapeuticUse: 'Indicated for upper and lower respiratory tract infections (community-acquired pneumonia, acute exacerbations of chronic bronchitis, sinusitis, tonsillitis), uncomplicated skin infections, and urinary tract infections.',
    uses: [
      'Community-Acquired Pneumonia & Bronchitis',
      'Acute Maxillary Sinusitis & Pharyngitis',
      'Acute Otitis Media',
      'Uncomplicated Skin & Soft Tissue Infections',
      'Uncomplicated Urinary Tract Infections'
    ],
    dosageInformation: 'Take with food to enhance gastrointestinal absorption. Use strictly as directed by the treating physician.',
    precautions: [
      'Inquire about prior hypersensitivity to cephalosporins or penicillins before use.',
      'Adjust dosage in patients with severe renal impairment.',
      'Do not discontinue treatment prematurely.'
    ],
    sideEffects: [
      'Diarrhea, loose stools, or mild nausea',
      'Abdominal pain or flatulence',
      'Skin rash or pruritus (infrequent)'
    ],
    storage: 'Store protected from moisture and direct light at a temperature below 25°C.',
    howSupplied: '10 blister strips of 10 film-coated tablets in ALU-ALU pack.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H1',
    featured: true,
    image: '/images/products/podsus-200-box.png',
    images: [
      '/images/products/podsus-200-box.png',
      '/images/products/podsus-200-strip.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'Clinical Pharmacokinetics of Cefpodoxime Proxetil', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'topod-50',
    slug: 'topod-50',
    name: 'Topod-50 Susp.',
    brandName: 'Topod-50 Susp.',
    genericName: 'Cefpodoxime Proxetil Oral Suspension IP 50 mg / 5 ml',
    composition: 'Each 5 ml of reconstituted suspension contains Cefpodoxime Proxetil IP eq. to Cefpodoxime 50 mg',
    activeIngredients: [
      { name: 'Cefpodoxime Proxetil IP', strength: '50 mg / 5 ml (as Cefpodoxime)' }
    ],
    dosageForm: 'Oral Suspension',
    route: 'Oral',
    packaging: '30 ml Bottle with Sterile Water for Reconstitution & Measuring Cap',
    packSize: '30 ml Bottle',
    category: 'Antibiotics & Antibacterial',
    categorySlug: 'antibiotics-antibacterial',
    secondaryCategories: ['Pediatric Care'],
    tags: ['Cefpodoxime', 'Topod', 'Pediatric Antibiotic', 'Oral Suspension', 'Otitis Media', 'Pneumonia'],
    description: 'Topod-50 Susp. is a third-generation pediatric oral cephalosporin suspension delivering broad-spectrum bactericidal efficacy against acute pediatric respiratory, middle ear, and urinary bacterial infections.',
    howItWorks: 'Cefpodoxime inhibits bacterial cell wall synthesis by binding to essential penicillin-binding proteins (PBPs), leading to bacterial cell wall lysis and eradication of resistant pathogens.',
    therapeuticUse: 'Indicated for acute otitis media, pharyngotonsillitis, community-acquired pediatric pneumonia, sinusitis, and urinary tract infections in children.',
    uses: [
      'Acute Pediatric Otitis Media (Middle Ear Infection)',
      'Pharyngitis & Tonsillitis',
      'Community-Acquired Pediatric Lower Respiratory Infections',
      'Acute Sinusitis & Skin/Soft Tissue Infections'
    ],
    dosageInformation: 'Reconstitute with the sterile water provided. Shake well before each dose. Dosing must follow body weight (mg/kg) under pediatric guidance.',
    precautions: [
      'Store reconstituted suspension in refrigerator or below 25°C and use within recommended duration.',
      'Check history of beta-lactam hypersensitivity.',
      'Complete the full course prescribed.'
    ],
    sideEffects: [
      'Loose stools or transient diarrhea',
      'Mild nausea or vomiting',
      'Mild rash (rare)'
    ],
    storage: 'Store dry powder below 25°C in a dry place. Store reconstituted suspension in a cool place.',
    howSupplied: '30 ml bottle with sterile water ampoule for reconstitution and calibrated measuring cap.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H1',
    featured: true,
    image: '/images/products/podsus-200-box.png',
    images: [
      '/images/products/podsus-200-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'Indian Academy of Pediatrics (IAP) Guidelines', sourceType: 'Pediatric Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'cefobest-200',
    slug: 'cefobest-200',
    name: 'Cefobest-200 Tab',
    brandName: 'Cefobest-200 Tab',
    genericName: 'Cefixime Dispersible Tablets IP 200 mg',
    composition: 'Cefixime IP (eq. to Anhydrous Cefixime 200 mg)',
    activeIngredients: [
      { name: 'Cefixime IP (eq. to Anhydrous Cefixime)', strength: '200 mg' }
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Antibiotics & Antibacterial',
    categorySlug: 'antibiotics-antibacterial',
    secondaryCategories: ['Pediatric Care', 'Respiratory & Allergy'],
    tags: ['Cefixime', 'Dispersible', 'Cephalosporin', 'Typhoid', 'Respiratory', 'UTI'],
    description: 'Cefobest-200 Tab is an orally active third-generation cephalosporin formulated as convenient dispersible tablets. It exhibits high stability against bacterial beta-lactamases and high potency against common community bacterial pathogens.',
    howItWorks: 'Cefixime exerts bactericidal action by inhibiting bacterial cell wall synthesis through binding to specific penicillin-binding proteins (PBPs), leading to bacterial lysis and death.',
    therapeuticUse: 'Indicated for uncomplicated urinary tract infections, otitis media, pharyngitis, tonsillitis, acute bronchitis, typhoid fever, and uncomplicated gonorrhea.',
    uses: [
      'Uncomplicated Urinary Tract Infections',
      'Acute Otitis Media & Tonsillopharyngitis',
      'Acute Exacerbation of Chronic Bronchitis',
      'Typhoid Fever (Enteric Fever)',
      'Uncomplicated Urogenital Gonorrhea'
    ],
    dosageInformation: 'May be dispersed in a small quantity of drinking water immediately prior to administration or swallowed whole with water as prescribed.',
    precautions: [
      'Verify patient allergy history for beta-lactam antibiotics.',
      'Prolonged use may lead to overgrowth of non-susceptible organisms.',
      'Dosage adjustment is advised in moderate-to-severe renal failure.'
    ],
    sideEffects: [
      'Mild gastrointestinal upset, diarrhea, or nausea',
      'Abdominal cramps or indigestion',
      'Transient elevations in liver or renal parameters'
    ],
    storage: 'Store in a dry place below 25°C. Protect from light.',
    howSupplied: 'ALU-ALU blister strips of 10 dispersible tablets packed in cartons of 10 strips.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H1',
    featured: true,
    image: '/images/products/cefobest-200-box.png',
    images: [
      '/images/products/cefobest-200-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'National Guidelines for Antimicrobial Stewardship', sourceType: 'Regulatory' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'cefobest-o',
    slug: 'cefobest-o',
    name: 'Cefobest-O Tab',
    brandName: 'Cefobest-O Tab',
    genericName: 'Cefixime & Ofloxacin Tablets IP',
    composition: 'Cefixime IP (eq. to Anhydrous Cefixime 200 mg) + Ofloxacin IP 200 mg',
    activeIngredients: [
      { name: 'Cefixime IP (eq. to Anhydrous Cefixime)', strength: '200 mg' },
      { name: 'Ofloxacin IP', strength: '200 mg' },
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Antibiotics & Antibacterial',
    categorySlug: 'antibiotics-antibacterial',
    secondaryCategories: ['Respiratory & Allergy'],
    tags: ['Cefixime', 'Ofloxacin', 'Dual Antibiotic', 'Typhoid', 'Resistant Infection', 'Broad Spectrum'],
    description: 'Cefobest-O Tab combines an oral 3rd-generation cephalosporin (Cefixime) with a broad-spectrum fluoroquinolone (Ofloxacin). This rational dual-mechanism combination provides synergistic bactericidal activity against multidrug-resistant pathogens.',
    howItWorks: 'Cefixime disrupts bacterial cell wall peptidoglycan synthesis, while Ofloxacin simultaneously inhibits topoisomerase II (DNA gyrase) and topoisomerase IV. The dual attack minimizes the emergence of bacterial resistance.',
    therapeuticUse: 'Indicated for multidrug-resistant typhoid fever, severe community-acquired respiratory tract infections, complicated urinary tract infections, and persistent mixed pelvic infections.',
    uses: [
      'Multidrug-Resistant Enteric Fever (Typhoid)',
      'Severe Community-Acquired Lower Respiratory Tract Infections',
      'Complicated & Recurrent Urinary Tract Infections',
      'Pelvic Inflammatory Disease & Gynecological Infections',
      'Intra-abdominal Sepsis & Bacterial Gastroenteritis'
    ],
    dosageInformation: 'Prescription-only medicine. Take one tablet twice daily or as determined by the physician. Complete full course.',
    precautions: [
      'Maintain adequate fluid intake throughout therapy.',
      'Avoid use in patients with known hypersensitivity to cephalosporins or fluoroquinolones.',
      'Exercise caution in patients with history of tendonitis or CNS disorders.'
    ],
    sideEffects: [
      'Nausea, diarrhea, vomiting, or abdominal colic',
      'Headache, insomnia, or dizziness',
      'Transient alteration in taste'
    ],
    storage: 'Store in a cool, dry place protected from light below 25°C.',
    howSupplied: 'ALU-ALU blister strips of 10 film-coated tablets in boxes of 100 tablets.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H1',
    featured: true,
    image: '/images/products/cefobest-o-box.png',
    images: [
      '/images/products/cefobest-o-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'CIMS Antimicrobial Guidelines', sourceType: 'Pharmaceutical Index' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'viaclav-625',
    slug: 'viaclav-625',
    name: 'Viaclav-625 Tab',
    brandName: 'Viaclav-625 Tab',
    genericName: 'Amoxycillin and Potassium Clavulanate Tablets IP 625 mg',
    composition: 'Amoxycillin Trihydrate IP eq. to Amoxycillin 500 mg + Potassium Clavulanate Diluted IP eq. to Clavulanic Acid 125 mg',
    activeIngredients: [
      { name: 'Amoxycillin Trihydrate IP', strength: '500 mg (as Amoxycillin)' },
      { name: 'Potassium Clavulanate IP', strength: '125 mg (as Clavulanic Acid)' },
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '1 x 6 x 10 Strip Pack',
    packSize: '1 x 6 x 10 Strip Pack',
    category: 'Antibiotics & Antibacterial',
    categorySlug: 'antibiotics-antibacterial',
    secondaryCategories: ['Orthopaedics', 'Respiratory & Allergy'],
    tags: ['Amoxycillin', 'Clavulanate', 'Augmentin', 'Beta-lactamase', 'Broad Spectrum', 'Dental Infection'],
    description: 'Viaclav-625 Tab is an established broad-spectrum bactericidal combination containing the aminopenicillin Amoxycillin protected by the irreversible beta-lactamase inhibitor Potassium Clavulanate. It effectively overcomes penicillin-resistant beta-lactamase producing organisms.',
    howItWorks: 'Amoxycillin inhibits bacterial cell wall synthesis. Clavulanic acid inactivates a broad spectrum of plasmid- and chromosome-mediated beta-lactamase enzymes, thereby shielding Amoxycillin from enzymatic degradation.',
    therapeuticUse: 'Indicated for severe infections of the upper and lower respiratory tract, ENT infections (sinusitis, otitis media), genitourinary tract infections, skin and soft tissue infections, bone and joint infections, and dental abscesses.',
    uses: [
      'Upper & Lower Respiratory Tract Infections (Pneumonia, Bronchitis)',
      'Acute Bacterial Sinusitis & Otitis Media',
      'Skin, Cellulitis & Soft Tissue Infections',
      'Bone & Joint Infections (Osteomyelitis)',
      'Severe Dental Abscesses & Post-Surgical Prophylaxis'
    ],
    dosageInformation: 'Take immediately before or with a meal to reduce potential gastrointestinal intolerance and optimize absorption.',
    precautions: [
      'Contraindicated in patients with a history of penicillin hypersensitivity or amoxicillin/clavulanate-associated jaundice/hepatic dysfunction.',
      'Periodic assessment of organ system functions is recommended during prolonged therapy.',
      'Complete the full course of treatment.'
    ],
    sideEffects: [
      'Diarrhea, nausea, vomiting, or loose stools',
      'Mucocutaneous candidiasis',
      'Mild urticaria or skin rashes'
    ],
    storage: 'Store protected from moisture at a temperature not exceeding 25°C.',
    howSupplied: 'Tamper-evident cartons containing individual moisture-sealed in strip packs.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H1',
    featured: true,
    image: '/images/products/viaclav-625-box.png',
    images: [
      '/images/products/viaclav-625-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'WHO Essential Medicines Compendium', sourceType: 'Global Health Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'dezy-6',
    slug: 'dezy-6',
    name: 'Dezy-6 Tab',
    brandName: 'Dezy-6 Tab',
    genericName: 'Deflazacort Tablets IP 6 mg',
    composition: 'Deflazacort IP 6 mg',
    activeIngredients: [
      { name: 'Deflazacort IP', strength: '6 mg' }
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Respiratory & Allergy',
    categorySlug: 'respiratory-cough-care',
    secondaryCategories: ['Neurology', 'Dermatology', 'Orthopaedics'],
    tags: ['Deflazacort', 'Corticosteroid', 'Anti-inflammatory', 'Immunosuppressive', 'Allergy', 'Asthma'],
    description: 'Dezy-6 Tab is an oxazoline derivative of prednisolone with potent anti-inflammatory and immunosuppressive properties. It offers a favorable metabolic and bone-sparing profile compared to traditional systemic corticosteroids.',
    howItWorks: 'Deflazacort suppresses the production and release of inflammatory cytokines, chemokines, and arachidonic acid metabolites. It inhibits the migration and activation of inflammatory leukocytes and downregulates cell-mediated immune responses.',
    therapeuticUse: 'Indicated for severe allergic and inflammatory disorders including bronchial asthma, rheumatoid arthritis, dermatological conditions (severe eczema, pemphigus), nephrotic syndrome, and immunosuppressive management.',
    uses: [
      'Severe Allergic Rhinitis & Bronchial Asthma',
      'Rheumatoid Arthritis, Juvenile Idiopathic Arthritis & Lupus',
      'Severe Cutaneous Dermatoses & Urticaria',
      'Nephrotic Syndrome & Glomerulonephritis',
      'Duchenne Muscular Dystrophy (DMD)'
    ],
    dosageInformation: 'Dosage must be individualized by a registered medical specialist. Discontinuation after prolonged therapy must be done by gradual tapering.',
    precautions: [
      'Do not stop medication abruptly after long-term use; gradual dose reduction is mandatory.',
      'Caution in patients with diabetes, hypertension, osteoporosis, or active infections.',
      'Monitor blood glucose and blood pressure periodically.'
    ],
    sideEffects: [
      'Weight gain, increased appetite, or fluid retention',
      'Facial fullness (cushingoid appearance) during prolonged use',
      'Mild gastrointestinal upset or dyspepsia',
      'Sleep disturbances or mood changes'
    ],
    storage: 'Store protected from light and moisture at a temperature below 25°C.',
    howSupplied: 'ALU-ALU blister strips containing 10 tablets each, 10 strips per box.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: false,
    image: '/images/products/dezy-6-box.png',
    images: [
      '/images/products/dezy-6-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'British National Formulary (BNF)', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'nipin-spas',
    slug: 'nipin-spas',
    name: 'Nipin-Spas Tab.',
    brandName: 'Nipin-Spas Tab.',
    genericName: 'Mefenamic Acid & Drotaverine Hydrochloride Tablets',
    composition: 'Mefenamic Acid IP 250 mg + Drotaverine Hydrochloride IP 80 mg',
    activeIngredients: [
      { name: 'Mefenamic Acid IP', strength: '250 mg' },
      { name: 'Drotaverine Hydrochloride IP', strength: '80 mg' },
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 Blister Pack',
    packSize: '10 x 10 Tablets',
    category: 'Gynaecology',
    categorySlug: 'gynaecology',
    secondaryCategories: ['Gastroenterology', 'Pain Relief & Anti-Inflammatory'],
    tags: ['Mefenamic Acid', 'Drotaverine', 'Antispasmodic', 'Dysmenorrhea', 'Abdominal Colic', 'Uterine Spasm'],
    description: 'Nipin-Spas Tab. is a targeted antispasmodic and analgesic formulation combining Drotaverine HCl, a selective phosphodiesterase-4 (PDE-4) inhibitor, with Mefenamic Acid, an anthranilic acid NSAID. It delivers swift relief from visceral smooth muscle spasm and colic.',
    howItWorks: 'Drotaverine selectively inhibits PDE-4 in smooth muscle cells, elevating intracellular cAMP and inducing prompt smooth muscle relaxation without anticholinergic side effects. Mefenamic Acid suppresses cyclooxygenase-mediated prostaglandin synthesis in uterine and visceral tissues.',
    therapeuticUse: 'Indicated for spasmodic dysmenorrhea (menstrual cramps), renal and ureteric colic, biliary colic, intestinal colic, and post-procedural gynecological or urological spasms.',
    uses: [
      'Primary & Secondary Spasmodic Dysmenorrhea (Menstrual Pain)',
      'Renal, Ureteric & Biliary Colic',
      'Irritable Bowel Syndrome & Intestinal Spasm',
      'Post-operative Gynecological Spasmodic Pain'
    ],
    dosageInformation: 'Take strictly according to physician advice. Standard adult dose is one tablet 2 to 3 times daily during acute pain episodes, preferably taken with food.',
    precautions: [
      'Contraindicated in severe hepatic, renal, or cardiac insufficiency.',
      'Exercise caution in patients with history of gastrointestinal ulceration or porphyria.',
      'Avoid during the third trimester of pregnancy.'
    ],
    sideEffects: [
      'Mild nausea, epigastric heartburn, or indigestion',
      'Transient dizziness, vertigo, or mild headache',
      'Palpitations or dry mouth (infrequent)'
    ],
    storage: 'Store in a cool, dry place below 25°C. Protect from moisture and direct sunlight.',
    howSupplied: 'Strip of 10 tablets in cartons of 10 strips.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/nipin-spas-box.png',
    images: [
      '/images/products/nipin-spas-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'MIMS India Gynecological Formulary', sourceType: 'Pharmaceutical Index' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'mefact-ds',
    slug: 'mefact-ds',
    name: 'Mefact-DS Syp.',
    brandName: 'Mefact-DS Syp.',
    genericName: 'Mefenamic Acid & Paracetamol Suspension',
    composition: 'Each 5 ml contains Mefenamic Acid IP 100 mg + Paracetamol IP 250 mg',
    activeIngredients: [
      { name: 'Mefenamic Acid IP', strength: '100 mg / 5 ml' },
      { name: 'Paracetamol IP', strength: '250 mg / 5 ml' },
    ],
    dosageForm: 'Oral Suspension',
    route: 'Oral',
    packaging: '60 ml PET Bottle with Measuring Cap',
    packSize: '60 ml Bottle',
    category: 'Pediatric Care',
    categorySlug: 'pediatric-care',
    secondaryCategories: ['Pain Relief & Anti-Inflammatory'],
    tags: ['Mefenamic Acid', 'Paracetamol', 'Pediatric', 'Fever', 'Pain Relief', 'Suspension'],
    description: 'Mefact-DS Syp. is a pediatric-friendly dual analgesic and antipyretic oral suspension designed for rapid defervescence and symptomatic pain control in acute childhood febrile episodes and inflammatory conditions.',
    howItWorks: 'Paracetamol rapidly resets elevated hypothalamic thermoregulatory set points to lower fever and diminish central pain impulses. Mefenamic Acid provides peripheral anti-inflammatory action by inhibiting prostaglandin synthesis at the site of tissue irritation.',
    therapeuticUse: 'Indicated for the reduction of high-grade fever and management of acute mild-to-moderate pediatric pain associated with immunization, teething, tonsillitis, otitis media, and viral respiratory infections.',
    uses: [
      'High-grade Pyrexia (Fever) in Pediatric Patients',
      'Post-immunization Pyrexia & Local Tenderness',
      'Pain associated with Otitis Media & Tonsillopharyngitis',
      'Dental Eruption Pain & Soft Tissue Sprains'
    ],
    dosageInformation: 'Pediatric dosing must be calculated strictly on the basis of body weight (mg/kg) under the direct supervision of a pediatrician. Shake bottle well before use.',
    precautions: [
      'Do not exceed recommended dose or administer more frequently than 4-6 hourly intervals.',
      'Avoid concurrent administration with other paracetamol or NSAID-containing syrups.',
      'Ensure the child stays adequately hydrated.'
    ],
    sideEffects: [
      'Mild gastrointestinal discomfort, nausea, or loose stools',
      'Rare skin rashes or urticaria (discontinue if observed)'
    ],
    storage: 'Store in a cool, dry place below 25°C. Protect from light. Keep out of reach of children.',
    howSupplied: 'High-density amber PET bottle containing 60 ml suspension with calibrated measuring cup.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: false,
    image: '/images/products/mefact-ds-bottle.png',
    images: [
      '/images/products/mefact-ds-bottle.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'Indian Academy of Pediatrics (IAP) Drug Formulary', sourceType: 'Pediatric Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'calsus-lc',
    slug: 'calsus-lc',
    name: 'Calsus-LC Tab',
    brandName: 'Calsus-LC Tab',
    genericName: 'Calcium Carbonate, Vitamin D3, Levocarnitine & Vitamin E Tablets',
    composition: 'Calcium Carbonate 500 mg + Vitamin D3 2000 IU + Levocarnitine 150 mg + Vitamin E 25 IU',
    activeIngredients: [
      { name: 'Calcium Carbonate IP', strength: '500 mg' },
      { name: 'Vitamin D3 IP (Cholecalciferol)', strength: '2000 IU' },
      { name: 'Levocarnitine Tartrate (eq. to Levocarnitine)', strength: '150 mg' },
      { name: 'Vitamin E Acetate IP', strength: '25 IU' },
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Orthopaedics',
    categorySlug: 'orthopaedics-pain-management',
    secondaryCategories: ['Gynaecology', 'Nutraceuticals'],
    tags: ['Calcium', 'Vitamin D3', 'Levocarnitine', 'Vitamin E', 'Bone Mineral', 'Osteopenia', 'Muscle Cramps'],
    description: 'Calsus-LC Tab is a comprehensive therapeutic formulation uniting high-potency elemental Calcium and physiological Vitamin D3 with Levocarnitine and Vitamin E. It addresses both bone mineral density depletion and muscular fatigue.',
    howItWorks: 'Calcium Carbonate provides bioavailable elemental calcium for bone matrix mineralization. Vitamin D3 enhances active intestinal calcium and phosphorus transport. Levocarnitine shuttles long-chain fatty acids into mitochondria to optimize cellular ATP production in skeletal muscles, while Vitamin E provides lipid antioxidant protection.',
    therapeuticUse: 'Indicated for the prevention and management of osteopenia, osteoporosis, senile bone loss, post-menopausal bone mass reduction, muscle cramps, and convalescent musculoskeletal replenishment.',
    uses: [
      'Osteopenia & Post-Menopausal Osteoporosis',
      'Nocturnal Leg Cramps & Muscular Fatigue',
      'Calcium & Vitamin D3 Deficiency Syndromes',
      'Fracture Healing & Orthopaedic Rehabilitation',
      'Pregnancy & Lactation Calcium Support'
    ],
    dosageInformation: 'Take one tablet daily after a main meal or as advised by the healthcare practitioner.',
    precautions: [
      'Contraindicated in hypercalcemia, hypervitaminosis D, or severe renal calculi.',
      'Maintain an interval of at least 2 hours between calcium intake and tetracyclines or bisphosphonates.'
    ],
    sideEffects: [
      'Mild constipation or flatulence in sensitive individuals',
      'Occasional abdominal bloating'
    ],
    storage: 'Store in a cool, dry place below 25°C. Protect from moisture and direct sunlight.',
    howSupplied: 'ALU-ALU moisture-barrier blister packs of 10 tablets, 10 strips per box.',
    prescriptionRequired: false,
    featured: true,
    image: '/images/products/calsus-lc-box.png',
    images: [
      '/images/products/calsus-lc-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'International Osteoporosis Foundation (IOF) Clinical Guidelines', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'proga-msr',
    slug: 'proga-msr',
    name: 'Proga-MSR Tab',
    brandName: 'Proga-MSR Tab',
    genericName: 'Pregabalin (SR) & Methylcobalamin Tablets',
    composition: 'Pregabalin IP 75 mg (in Sustained Release form) + Methylcobalamin IP 1500 mcg',
    activeIngredients: [
      { name: 'Pregabalin IP (Sustained Release)', strength: '75 mg' },
      { name: 'Methylcobalamin IP', strength: '1500 mcg' },
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Neurology',
    categorySlug: 'neurology',
    secondaryCategories: ['Orthopaedics'],
    tags: ['Pregabalin', 'Methylcobalamin', 'Neuropathic Pain', 'Sciatica', 'Diabetic Neuropathy', 'Nerve Health'],
    description: 'Proga-MSR Tab is a sustained-release neurotrophic and neuromodulating formulation combining Pregabalin SR with bioactive Methylcobalamin (Vitamin B12). It provides round-the-clock symptomatic relief from neuropathic pain while supporting myelin sheath regeneration.',
    howItWorks: 'Pregabalin binds selectively to alpha-2-delta auxiliary subunits of voltage-gated calcium channels in central neurons, reducing calcium influx and suppressing the release of excitatory neurotransmitters. Methylcobalamin stimulates neuronal transmethylation and protein synthesis to facilitate axonal remyelination.',
    therapeuticUse: 'Indicated for peripheral neuropathic pain, diabetic peripheral neuropathy, post-herpetic neuralgia, cervical/lumbar radiculopathy (sciatica), and fibromyalgia.',
    uses: [
      'Diabetic Peripheral Neuropathy (Burning Feet & Tingling)',
      'Lumbar & Cervical Radiculopathy (Sciatica / Pinched Nerve)',
      'Post-Herpetic Neuralgia (Post-Shingles Nerve Pain)',
      'Fibromyalgia & Chronic Neuromusculoskeletal Pain Syndromes',
      'Trigeminal Neuralgia & Peripheral Nerve Trauma'
    ],
    dosageInformation: 'Take once daily at bedtime or as directed by the prescribing physician. Swallow whole; do not crush or chew sustained-release tablets.',
    precautions: [
      'May cause dizziness and somnolence; avoid driving or operating heavy machinery initially.',
      'Do not discontinue abruptly; gradual tapering is required to minimize rebound symptoms.',
      'Caution in patients with renal impairment.'
    ],
    sideEffects: [
      'Dizziness, somnolence, and sedation',
      'Peripheral edema or mild weight gain',
      'Dry mouth or blurred vision (infrequent)'
    ],
    storage: 'Store below 25°C in a dry place. Protect from heat and moisture.',
    howSupplied: 'ALU-ALU strips of 10 sustained-release film-coated tablets in cartons of 10 strips.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/proga-msr-box.png',
    images: [
      '/images/products/proga-msr-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'Neuropathic Pain Special Interest Group (NeuPSIG) Clinical Guidelines', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'optra-100',
    slug: 'optra-100',
    name: 'Optra-100 Cap.',
    brandName: 'Optra-100 Cap.',
    genericName: 'Itraconazole Capsules IP 100 mg',
    composition: 'Itraconazole IP 100 mg (as Pellets)',
    activeIngredients: [
      { name: 'Itraconazole IP (as coated micro-pellets)', strength: '100 mg' }
    ],
    dosageForm: 'Capsules',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Capsules',
    category: 'Dermatology',
    categorySlug: 'dermatology',
    secondaryCategories: ['Gynaecology', 'Antibiotics & Antibacterial'],
    tags: ['Itraconazole', 'Antifungal', 'Dermatophytosis', 'Ringworm', 'Tinea', 'Onychomycosis'],
    description: 'Optra-100 Cap. contains high-purity micro-pelletized Itraconazole, a broad-spectrum triazole antifungal agent designed for high keratinophilic tissue accumulation and sustained therapeutic efficacy against superficial and systemic mycoses.',
    howItWorks: 'Itraconazole inhibits fungal cytochrome P450 14-alpha-demethylase, preventing the conversion of lanosterol into ergosterol. This disrupts fungal cell membrane permeability, arrests cell growth, and induces fungal cell death.',
    therapeuticUse: 'Indicated for widespread or recalcitrant dermatophytosis (Tinea corporis, Tinea cruris, Tinea pedis, Tinea capitis), fungal nail infections (onychomycosis), cutaneous candidiasis, and pityriasis versicolor.',
    uses: [
      'Recalcitrant Tinea Corporis & Tinea Cruris (Ringworm)',
      'Onychomycosis (Fungal Infection of Nails)',
      'Pityriasis Versicolor (Tinea Versicolor)',
      'Vulvovaginal & Cutaneous Candidiasis',
      'Systemic & Deep Fungal Mycoses'
    ],
    dosageInformation: 'Take immediately after a full meal for optimum gastrointestinal absorption. Swallow capsule whole with water.',
    precautions: [
      'Contraindicated in patients with evidence of ventricular dysfunction such as congestive heart failure.',
      'Monitor hepatic enzyme levels in patients receiving continuous therapy exceeding one month.',
      'Multiple drug interactions exist due to CYP3A4 inhibition; review concurrent medications.'
    ],
    sideEffects: [
      'Nausea, abdominal discomfort, or dyspepsia',
      'Mild headache or dizziness',
      'Transient elevations in liver transaminases (reversible)'
    ],
    storage: 'Store protected from light and moisture at a temperature not exceeding 25°C.',
    howSupplied: '10x10 ALU-ALU moisture-impermeable blister packs in protective outer cartons.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/optra-100-box.png',
    images: [
      '/images/products/optra-100-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'Indian Association of Dermatologists (IADVL) Tinea Guidelines', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'rabsus-dsr',
    slug: 'rabsus-dsr',
    name: 'Rabsus-DSR Cap',
    brandName: 'Rabsus-DSR Cap',
    genericName: 'Rabeprazole Sodium (EC) & Domperidone (SR) Capsules',
    composition: 'Rabeprazole Sodium IP 20 mg (EC) + Domperidone IP 30 mg (SR)',
    activeIngredients: [
      { name: 'Rabeprazole Sodium IP (as Enteric Coated Pellets)', strength: '20 mg' },
      { name: 'Domperidone IP (as Sustained Release Pellets)', strength: '30 mg' },
    ],
    dosageForm: 'Capsules',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Capsules',
    category: 'Gastroenterology',
    categorySlug: 'gastroenterology',
    secondaryCategories: ['Gynaecology', 'Neurology', 'Digestive Care'],
    tags: ['Rabeprazole', 'Domperidone', 'PPI', 'GERD', 'Acidity', 'Heartburn', 'Dyspepsia'],
    description: 'Rabsus-DSR Cap is a synchronized dual-action gastroprokinetic and proton pump inhibitor multi-pellet capsule formulation. It combines rapid-onset gastric acid suppression with sustained upper gastrointestinal motility control.',
    howItWorks: 'Rabeprazole covalently binds to and irreversibly inhibits the H+/K+ ATPase enzyme system (proton pump) at the gastric parietal cell secretory surface, providing potent 24-hour acid suppression. Domperidone blocks peripheral dopamine D2 receptors, accelerating gastric emptying and increasing lower esophageal sphincter tone.',
    therapeuticUse: 'Indicated for gastroesophageal reflux disease (GERD), reflux esophagitis, non-ulcer dyspepsia, hyperacidity associated with nausea, and peptic ulcer disease unresponsive to PPI monotherapy.',
    uses: [
      'Gastroesophageal Reflux Disease (GERD) & Acid Regurgitation',
      'Erosive & Ulcerative Esophagitis',
      'Functional Dyspepsia & Postprandial Fullness',
      'Gastric & Duodenal Peptic Ulcerations',
      'NSAID-Induced Gastric Irritation & Ulcer Prophylaxis'
    ],
    dosageInformation: 'Take one capsule once daily in the morning, at least 30 to 60 minutes before breakfast. Swallow whole with water.',
    precautions: [
      'Do not chew, crush, or open the pellets within the capsule.',
      'Exercise caution in patients with cardiac conduction disorders or severe hepatic impairment.',
      'Prolonged unmonitored use is not recommended.'
    ],
    sideEffects: [
      'Headache, mild dry mouth, or transient diarrhea',
      'Abdominal cramps or flatulence',
      'Drowsiness or dizziness (infrequent)'
    ],
    storage: 'Store in a cool, dry place below 25°C. Protect from light and moisture.',
    howSupplied: 'Box of 10 ALU-ALU blister strips of 10 capsules each.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/rabsus-dsr-box.png',
    images: [
      '/images/products/rabsus-dsr-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'Indian Society of Gastroenterology (ISG) GERD Consensus Guidelines', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'rabsus-ls',
    slug: 'rabsus-ls',
    name: 'Rabsus-LS Cap',
    brandName: 'Rabsus-LS Cap',
    genericName: 'Rabeprazole Sodium (EC) & Levosulpiride (SR) Capsules',
    composition: 'Rabeprazole Sodium IP 20 mg (EC) + Levosulpiride 75 mg (SR)',
    activeIngredients: [
      { name: 'Rabeprazole Sodium IP (as Enteric Coated Pellets)', strength: '20 mg' },
      { name: 'Levosulpiride (as Sustained Release Pellets)', strength: '75 mg' },
    ],
    dosageForm: 'Capsules',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Capsules',
    category: 'Gastroenterology',
    categorySlug: 'gastroenterology',
    secondaryCategories: ['Gynaecology', 'Neurology', 'Digestive Care'],
    tags: ['Rabeprazole', 'Levosulpiride', 'PPI', 'Prokinetic', 'GERD', 'Diabetic Gastroparesis', 'Dyspepsia'],
    description: 'Rabsus-LS Cap combines the proton pump inhibitor Rabeprazole with the advanced prokinetic and mood-modulating agent Levosulpiride in a sustained-release formulation. It targets refractory acid disorders complicated by significant visceral hypersensitivity or delayed gastric emptying.',
    howItWorks: 'Rabeprazole blocks the terminal step of gastric acid secretion. Levosulpiride acts as a selective dopamine D2 receptor antagonist in the gut and central trigger zones, enhancing acetylcholine release to stimulate gastrointestinal motility and normalize visceral sensorimotor dysfunction.',
    therapeuticUse: 'Indicated for refractory GERD, severe functional dyspepsia, diabetic gastroparesis, and psychosomatic gastrointestinal motility disorders.',
    uses: [
      'Refractory Gastroesophageal Reflux Disease (GERD)',
      'Severe Non-Ulcer Functional Dyspepsia',
      'Diabetic Gastroparesis & Gastric Atony',
      'Chronic Gastritis with Delayed Gastric Emptying',
      'Visceral Hypersensitivity & IBS-Related Upper Discomfort'
    ],
    dosageInformation: 'Take one capsule once daily in the morning, 30-60 minutes before food, or as prescribed by the gastroenterologist.',
    precautions: [
      'Contraindicated in pheochromocytoma, mechanical bowel obstruction, gastrointestinal bleeding, or epilepsy.',
      'Exercise caution in elderly patients; monitor for extrapyramidal symptoms.',
      'Swallow capsule whole without opening or crushing.'
    ],
    sideEffects: [
      'Somnolence, fatigue, or mild sedation',
      'Transient hyperprolactinemia (galactorrhea, gynecomastia - rare)',
      'Headache or mild abdominal cramps'
    ],
    storage: 'Store in a dry place below 25°C. Protect from heat and direct sunlight.',
    howSupplied: 'Boxes of 10 ALU-ALU blister strips of 10 capsules each.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/rabsus-ls-box.png',
    images: [
      '/images/products/rabsus-ls-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'Therapeutic Advances in Gastroenterology', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'remogel-suspension',
    slug: 'remogel-suspension',
    name: 'Remogel Susp.',
    brandName: 'Remogel Susp.',
    genericName: 'Magaldrate & Simethicone Oral Suspension IP',
    composition: 'Each 5 ml contains Magaldrate IP 480 mg + Simethicone IP 20 mg',
    activeIngredients: [
      { name: 'Magaldrate IP', strength: '480 mg / 5 ml' },
      { name: 'Simethicone IP', strength: '20 mg / 5 ml' },
    ],
    dosageForm: 'Oral Suspension',
    route: 'Oral',
    packaging: '170 ml PET Bottle (Sugar Free)',
    packSize: '170 ml Bottle',
    category: 'Gastroenterology',
    categorySlug: 'gastroenterology',
    secondaryCategories: ['Gynaecology', 'Neurology', 'Digestive Care'],
    tags: ['Magaldrate', 'Simethicone', 'Antacid', 'Antiflatulent', 'Heartburn', 'Acidity', 'Sugar Free'],
    description: 'Remogel Susp. is a balanced, fast-acting oral antacid and antiflatulent suspension formulated in a sugar-free, mint-flavored base. It contains Magaldrate IP 480 mg and Simethicone IP 20 mg per 5 ml for prompt neutralization of gastric acid without acid rebound.',
    howItWorks: 'Magaldrate dynamically buffers gastric acid to a physiological pH of 3.0 to 5.0 and binds bile acids and pepsin. Simethicone collapses gas bubbles within the stomach and intestines to ease bloating and flatulence.',
    therapeuticUse: 'Indicated for rapid symptomatic relief from hyperacidity, heartburn, acid indigestion, sour stomach, gastritis, and gas distress associated with peptic ulcer disease.',
    uses: [
      'Acute Heartburn & Acid Indigestion',
      'Hyperacidity, Sour Belching & Gastritis',
      'Bloating, Flatulence & Gaseous Abdominal Distension',
      'Adjunct in Peptic Ulcer & Reflux Esophagitis Relief'
    ],
    dosageInformation: 'Shake well before use. Adults: 1 to 2 teaspoonfuls (5-10 ml) taken 1 to 2 hours after meals and at bedtime, or as directed by the physician.',
    precautions: [
      'Maintain a 1-to-2 hour gap when taking other oral medications to avoid impaired absorption.',
      'Caution in patients with severe renal impairment.'
    ],
    sideEffects: [
      'Mild alteration in bowel habits (infrequent mild diarrhea or constipation)',
      'Well tolerated across broad patient profiles'
    ],
    storage: 'Store in a cool, dry place below 25°C. Do not freeze. Keep container tightly closed.',
    howSupplied: 'Supplied in 170 ml PET bottle with graduated measuring cup.',
    prescriptionRequired: false,
    featured: false,
    image: '/images/products/remogel-suspension-bottle.png',
    images: [
      '/images/products/remogel-suspension-bottle.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'Martindale: The Complete Drug Reference', sourceType: 'Pharmaceutical Index' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'remogel-spasmodic-drops',
    slug: 'remogel-spasmodic-drops',
    name: 'Remogel Drop',
    brandName: 'Remogel Drop',
    genericName: 'Dill Oil, Fennel Oil with Simethicone Drops',
    composition: 'Dill Oil 0.005 ml + Fennel Oil 0.0007 ml + Simethicone 40 mg / ml',
    activeIngredients: [
      { name: 'Simethicone Emulsion IP (eq. to Simethicone)', strength: '40 mg / ml' },
      { name: 'Dill Oil', strength: '0.005 ml / ml' },
      { name: 'Fennel Oil', strength: '0.0007 ml / ml' },
    ],
    dosageForm: 'Oral Drops',
    route: 'Oral',
    packaging: '30 ml Bottle with Calibrated Dropper',
    packSize: '30 ml Drops',
    category: 'Pediatric Care',
    categorySlug: 'pediatric-care',
    secondaryCategories: ['Gastroenterology'],
    tags: ['Simethicone', 'Dill Oil', 'Fennel Oil', 'Infantile Colic', 'Griping Pain', 'Pediatric Drops'],
    description: 'Remogel Drop is a gentle pediatric carminative and antiflatulent formulation combining high-purity Simethicone with natural Dill and Fennel essential oils. It delivers quick relief from infantile colic, trapped gas, and painful intestinal griping in infants and toddlers.',
    howItWorks: 'Simethicone coalesces tiny gas bubbles into larger pockets that are easily expelled through belching or flatus. Dill Oil and Fennel Oil provide natural carminative and smooth-muscle antispasmodic actions that soothe mucosal irritation and relax intestinal spasms.',
    therapeuticUse: 'Indicated for infantile colic, flatulence, abdominal distension, painful hiccoughs, and griping pain associated with feeding in infants and young children.',
    uses: [
      'Infantile Colic & Evening Inconsolable Crying',
      'Trapped Intestinal Gas & Abdominal Bloating',
      'Post-feeding Griping Pain & Dyspepsia',
      'Excessive Belching & Flatulence in Infants'
    ],
    dosageInformation: 'Administer drops with the calibrated dropper provided, 15 minutes before feeds or as directed by the pediatrician.',
    precautions: [
      'Shake well before each administration.',
      'Do not exceed recommended pediatric doses.',
      'Consult a pediatrician if symptoms persist.'
    ],
    sideEffects: [
      'Extremely safe and well-tolerated when used as directed',
      'No systemic adverse effects documented'
    ],
    storage: 'Store in a cool, dry place below 25°C. Protect from direct sunlight.',
    howSupplied: 'amber PET bottle of 30 ml with a sterile calibrated dropper and child-resistant cap.',
    prescriptionRequired: false,
    featured: false,
    image: '/images/products/remogel-drops-pack.png',
    images: [
      '/images/products/remogel-drops-pack.png',
      '/images/products/remogel-drops-bottle.png',
      '/images/products/remogel-drops-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'Indian Academy of Pediatrics (IAP) Guidelines on Infantile Colic', sourceType: 'Pediatric Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'fitop-l-100-ml-syp',
    slug: 'fitop-l-100-ml-syp',
    name: 'Fitop-L 100 ml Syp.',
    brandName: 'Fitop-L 100 ml Syp.',
    genericName: 'Lycopene with Multivitamins & Multiminerals Syrup',
    composition: 'Each 10 ml contains Lycopene 6% 2000 mcg + Nicotinamide 18 mg + Pyridoxine HCl 1.5 mg + Cyanocobalamin 1 mcg + Folic Acid 100 mcg + Manganese Gluconate 2 mg + Cupric Sulphate 500 mcg + Potassium Iodide 100 mcg + Zinc Gluconate 3 mg',
    activeIngredients: [
      { name: 'Lycopene (6%)', strength: '2000 mcg / 10 ml' },
      { name: 'Nicotinamide IP', strength: '18 mg / 10 ml' },
      { name: 'Pyridoxine HCl IP (Vitamin B6)', strength: '1.5 mg / 10 ml' },
      { name: 'Cyanocobalamin IP (Vitamin B12)', strength: '1 mcg / 10 ml' },
      { name: 'Folic Acid IP', strength: '100 mcg / 10 ml' },
      { name: 'Manganese Gluconate (eq. to Elemental Manganese)', strength: '2 mg / 10 ml' },
      { name: 'Cupric Sulphate (eq. to Elemental Copper)', strength: '500 mcg / 10 ml' },
      { name: 'Potassium Iodide (eq. to Elemental Iodine)', strength: '100 mcg / 10 ml' },
      { name: 'Zinc Gluconate (eq. to Elemental Zinc)', strength: '3 mg / 10 ml' },
    ],
    dosageForm: 'Syrup',
    route: 'Oral',
    packaging: '100 ml PET Bottle in Carton',
    packSize: '100 ml Bottle',
    category: 'Nutraceuticals',
    categorySlug: 'nutraceuticals',
    secondaryCategories: ['Gynaecology', 'Neurology', 'Cardiology'],
    tags: ['Lycopene', 'Multivitamin', 'Antioxidant', 'Immunity', 'Nutraceutical', 'Vitality'],
    description: 'Fitop-L 100 ml Syp. is a high-potency antioxidant and multivitamin tonic enriched with red tomato carotenoid Lycopene 6%, essential B-complex vitamins, Zinc, and essential trace minerals. It fortifies cellular defense against oxidative free-radical damage and revitalizes daily vitality.',
    howItWorks: 'Lycopene is a potent singlet-oxygen quenching carotenoid that protects lipid membranes and endothelial structures. B-complex vitamins act as essential enzymatic cofactors in cellular metabolism, while Zinc, Copper, and Manganese optimize immune resilience.',
    therapeuticUse: 'Indicated for general debility, convalescence following acute illnesses, chronic oxidative stress, cardiovascular health support, and daily nutritional supplementation.',
    uses: [
      'General Weakness, Fatigue & Convalescence',
      'Cellular Free-Radical & Oxidative Stress Defense',
      'Immune Function & Resistance Support',
      'Cardiovascular & Endothelial Vitality Support',
      'Nutritional Supplementation during Recovery'
    ],
    dosageInformation: 'Adults: 1 to 2 teaspoonfuls (5-10 ml) once or twice daily after meals, or as advised by the healthcare professional.',
    precautions: [
      'Not for medicinal use as a sole treatment for disease states.',
      'Do not exceed the recommended daily serving size.',
      'Shake well before use.'
    ],
    sideEffects: [
      'Well-tolerated with no significant adverse effects under recommended consumption'
    ],
    storage: 'Store in a cool, dry, and dark place below 25°C. Protect from direct light.',
    howSupplied: 'Supplied in 100 ml PET bottles in an individual monocarton.',
    prescriptionRequired: false,
    featured: true,
    image: '/images/products/fitop-l-box.png',
    images: [
      '/images/products/fitop-l-box.png',
      '/images/products/fitop-l-bottle.png',
      '/images/products/fitop-l-pack.png',
      '/images/products/fitop-l-front.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'FSSAI Standards for Nutraceuticals & Health Supplements', sourceType: 'Regulatory' },
      { title: 'Nutrients Journal: Clinical Efficacy of Lycopene & Micronutrients', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'fitop-l-200-ml-syp',
    slug: 'fitop-l-200-ml-syp',
    name: 'Fitop-L 200 ml Syp.',
    brandName: 'Fitop-L 200 ml Syp.',
    genericName: 'Lycopene with Multivitamins & Multiminerals Syrup',
    composition: 'Each 10 ml contains Lycopene 6% 2000 mcg + Nicotinamide 18 mg + Pyridoxine HCl 1.5 mg + Cyanocobalamin 1 mcg + Folic Acid 100 mcg + Manganese Gluconate 2 mg + Cupric Sulphate 500 mcg + Potassium Iodide 100 mcg + Zinc Gluconate 3 mg',
    activeIngredients: [
      { name: 'Lycopene (6%)', strength: '2000 mcg / 10 ml' },
      { name: 'Nicotinamide IP', strength: '18 mg / 10 ml' },
      { name: 'Pyridoxine HCl IP (Vitamin B6)', strength: '1.5 mg / 10 ml' },
      { name: 'Cyanocobalamin IP (Vitamin B12)', strength: '1 mcg / 10 ml' },
      { name: 'Folic Acid IP', strength: '100 mcg / 10 ml' },
      { name: 'Manganese Gluconate (eq. to Elemental Manganese)', strength: '2 mg / 10 ml' },
      { name: 'Cupric Sulphate (eq. to Elemental Copper)', strength: '500 mcg / 10 ml' },
      { name: 'Potassium Iodide (eq. to Elemental Iodine)', strength: '100 mcg / 10 ml' },
      { name: 'Zinc Gluconate (eq. to Elemental Zinc)', strength: '3 mg / 10 ml' },
    ],
    dosageForm: 'Syrup',
    route: 'Oral',
    packaging: '200 ml PET Bottle in Carton',
    packSize: '200 ml Bottle',
    category: 'Nutraceuticals',
    categorySlug: 'nutraceuticals',
    secondaryCategories: ['Gynaecology', 'Neurology', 'Cardiology'],
    tags: ['Lycopene', 'Multivitamin', 'Antioxidant', 'Immunity', 'Nutraceutical', 'Vitality'],
    description: 'Fitop-L 200 ml Syp. is a family-size high-potency antioxidant and multivitamin tonic enriched with red tomato carotenoid Lycopene 6%, essential B-complex vitamins, Zinc, and essential trace minerals in a flavoured sorbitol base.',
    howItWorks: 'Lycopene quenches singlet-oxygen free radicals and shields cellular lipids from peroxidation. B-complex vitamins support optimal neuronal, mitochondrial, and metabolic functions.',
    therapeuticUse: 'Indicated for general debility, convalescence following acute illnesses, chronic oxidative stress, cardiovascular health support, and daily nutritional supplementation.',
    uses: [
      'General Weakness, Fatigue & Convalescence',
      'Cellular Free-Radical & Oxidative Stress Defense',
      'Immune Function & Resistance Support',
      'Cardiovascular & Endothelial Vitality Support',
      'Nutritional Supplementation during Recovery'
    ],
    dosageInformation: 'Adults: 1 to 2 teaspoonfuls (5-10 ml) once or twice daily after meals, or as advised by the healthcare professional.',
    precautions: [
      'Not for medicinal use as a sole treatment for disease states.',
      'Do not exceed the recommended daily serving size.',
      'Shake well before use.'
    ],
    sideEffects: [
      'Well-tolerated with no significant adverse effects under recommended consumption'
    ],
    storage: 'Store in a cool, dry, and dark place below 25°C. Protect from direct light.',
    howSupplied: 'Supplied in 200 ml PET bottles in an individual monocarton.',
    prescriptionRequired: false,
    featured: true,
    image: '/images/products/fitop-l-pack.png',
    images: [
      '/images/products/fitop-l-pack.png',
      '/images/products/fitop-l-box.png',
      '/images/products/fitop-l-bottle.png',
      '/images/products/fitop-l-front.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'FSSAI Standards for Nutraceuticals & Health Supplements', sourceType: 'Regulatory' },
      { title: 'Nutrients Journal: Clinical Efficacy of Lycopene & Micronutrients', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'fitop-jr-drops',
    slug: 'fitop-jr-drops',
    name: 'Fitop-Jr Drop',
    brandName: 'Fitop-Jr Drop',
    genericName: 'Pediatric Multivitamins, Minerals & L-Lysine Drops',
    composition: 'Each ml contains Vitamin A 1298.1 IU + Vitamin E 2 IU + Vitamin D2 100 IU + Vitamin B1 700 mcg + Vitamin B2 900 mcg + Vitamin B6 500 mcg + Niacinamide 7 mg + Cyanocobalamin 1.2 mcg + Ascorbic Acid 15 mg + Zinc 3 mg + Calcium Pantothenate 2.5 mg + L-Lysine HCl 5.85 mg',
    activeIngredients: [
      { name: 'Vitamin A (as Palmitate)', strength: '1298.1 IU / ml' },
      { name: 'Vitamin E (as Acetate)', strength: '2 IU / ml' },
      { name: 'Vitamin D2', strength: '100 IU / ml' },
      { name: 'Vitamin B1 (Thiamine HCl)', strength: '700 mcg / ml' },
      { name: 'Vitamin B2 (Riboflavin)', strength: '900 mcg / ml' },
      { name: 'Vitamin B6 (Pyridoxine HCl)', strength: '500 mcg / ml' },
      { name: 'Niacinamide', strength: '7 mg / ml' },
      { name: 'Cyanocobalamin (Vitamin B12)', strength: '1.2 mcg / ml' },
      { name: 'Ascorbic Acid (Vitamin C)', strength: '15 mg / ml' },
      { name: 'Zinc Sulphate Monohydrate (eq. to elemental zinc)', strength: '3 mg / ml' },
      { name: 'Calcium Pantothenate', strength: '2.5 mg / ml' },
      { name: 'L-Lysine HCl', strength: '5.85 mg / ml' },
    ],
    dosageForm: 'Oral Drops',
    route: 'Oral',
    packaging: '30 ml Bottle with Calibrated Dropper',
    packSize: '30 ml Drops',
    category: 'Pediatric Care',
    categorySlug: 'pediatric-care',
    secondaryCategories: ['Nutraceuticals'],
    tags: ['Pediatric Drops', 'L-Lysine', 'Multivitamins', 'Infant Growth', 'Appetite', 'Immunity'],
    description: 'Fitop-Jr Drop is a carefully calibrated pediatric multivitamin and mineral formulation enriched with the essential growth amino acid L-Lysine HCl (5.85 mg/ml). It promotes healthy weight gain, appetite stimulation, and physical/cognitive development in infants and young children.',
    howItWorks: 'L-Lysine promotes protein synthesis, enhances calcium absorption, and stimulates natural appetite. Fat-soluble and water-soluble vitamins support ocular integrity, bone mineralization, neuronal myelin synthesis, and cellular metabolic pathways during rapid childhood growth.',
    therapeuticUse: 'Indicated for nutritional supplementation in infants and children with poor dietary intake, growth faltering, delayed milestone recovery after infection, and subclinical micronutrient deficiencies.',
    uses: [
      'Infant & Toddler Growth Optimization',
      'Appetite Stimulation & Weight Gain Support',
      'Post-illness Nutritional Recovery & Convalescence',
      'Prophylaxis against Pediatric Vitamin Deficiencies'
    ],
    dosageInformation: 'Administer 1 to 2 ml daily using the calibrated dropper provided, or as directed by the Dietician / Pediatrician.',
    precautions: [
      'Shake well before each use.',
      'Do not exceed the daily recommended drops without medical recommendation.',
      'Keep dropper clean and dry.'
    ],
    sideEffects: [
      'Generally well-tolerated with pleasant taste'
    ],
    storage: 'Store in a cool dry & dark place. Protect from light.',
    howSupplied: 'Bottle of 30 ml drops with calibrated dropper in a pediatric carton.',
    prescriptionRequired: false,
    featured: false,
    image: '/images/products/fitop-jr-drops-box.png',
    images: [
      '/images/products/fitop-jr-drops-box.png',
      '/images/products/fitop-jr-drops-bottle.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'FSSAI Pediatric Nutritional Guidelines', sourceType: 'Regulatory' },
      { title: 'IAP Micronutrient Guidelines in Infancy', sourceType: 'Pediatric Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'fitop-capsules',
    slug: 'fitop-capsules',
    name: 'Fitop Cap.',
    brandName: 'Fitop Cap.',
    genericName: 'Multivitamin, Multimineral & Ginseng Extract with Lactic Acid Bacillus Capsules',
    composition: 'Standardized Ginseng Extract 42.8 mg + Multivitamins + Multiminerals + Lactic Acid Bacillus 120 Million Spores',
    activeIngredients: [
      { name: 'Ginseng Extract (Standardized)', strength: '42.8 mg' },
      { name: 'Multivitamin Complex (A, B-Complex, C, D3, E)', strength: 'Therapeutic Range' },
      { name: 'Multimineral Complex (Zinc, Copper, Manganese, Selenium)', strength: 'Trace Mineral Matrix' },
      { name: 'Lactic Acid Bacillus (Probiotic Spores)', strength: '120 Million Spores' },
    ],
    dosageForm: 'Capsules',
    route: 'Oral',
    packaging: '10 x 10 Blister Pack (100 Capsules)',
    packSize: '10 x 10 Capsules',
    category: 'Nutraceuticals',
    categorySlug: 'nutraceuticals',
    secondaryCategories: ['Gynaecology', 'Neurology', 'Dermatology'],
    tags: ['Ginseng', 'Multivitamin', 'Probiotics', 'Lactic Acid Bacillus', 'Energy', 'Immunity', 'Capsules'],
    description: 'Fitop Cap. is a premium daily restorative nutraceutical uniting standardized Ginseng adaptogen extract (42.8 mg) with therapeutic multivitamins, trace minerals, and gut-friendly Lactic Acid Bacillus probiotic spores (120 Million Spores).',
    howItWorks: 'Ginsenosides from Panax ginseng enhance cellular ATP synthesis and improve physiological resistance to physical and mental fatigue. Essential micronutrients serve as enzymatic coenzymes, while Lactic Acid Bacillus repopulates beneficial gut flora and enhances micronutrient bio-absorption.',
    therapeuticUse: 'Indicated for general fatigue, chronic stress, mental exhaustion, convalescence after illness, nutritional deficiency states, and maintenance of healthy digestive flora.',
    uses: [
      'Chronic Fatigue, Weakness & Lethargy',
      'Physical Endurance & Mental Alertness Enhancement',
      'Post-illness & Post-antibiotic Gut Flora Restoration',
      'Daily Immune Modulation & Antioxidant Defense'
    ],
    dosageInformation: 'Take one capsule daily after breakfast or lunch with water, or as recommended by the physician.',
    precautions: [
      'Not recommended for children under 12 years unless advised by a doctor.',
      'Consult a physician if you are pregnant, nursing, or taking antihypertensive medication.'
    ],
    sideEffects: [
      'Rare mild insomnia if taken late in the evening due to adaptogenic energizing effects'
    ],
    storage: 'Store in a cool, dry place below 25°C. Protect from moisture and direct light.',
    howSupplied: 'Blister strips of 10 capsules packaged in cartons of 100 capsules.',
    prescriptionRequired: false,
    featured: true,
    image: '/images/products/fitop-capsules-box.png',
    images: [
      '/images/products/fitop-capsules-box.png',
      '/images/products/fitop-capsules-strip.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'FSSAI Health Supplements Guidelines', sourceType: 'Regulatory' },
      { title: 'Journal of Ginseng Research', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'fitop-sachet',
    slug: 'fitop-sachet',
    name: 'Fitop Gold Sachet',
    brandName: 'Fitop Gold Sachet',
    genericName: 'Lycopene, Co-Q10, L-Carnitine, L-Arginine, Folic Acid & Selenium Sachet',
    composition: 'Each 5 g sachet contains Lycopene 5000 mcg + Mecobalamin 1500 ng + Ubidecarenone (Co-Q10) 30 mg + L-Arginine 100 mg + Zinc 10 mg + Selenium 40 mcg + Folic Acid 300 mcg + Fructose 1 g + L-Carnitine Fumarate 1 g',
    activeIngredients: [
      { name: 'Lycopene (10% Powder Form)', strength: '5000 mcg / 5 g' },
      { name: 'Mecobalamin', strength: '1500 ng / 5 g' },
      { name: 'Ubidecarenone (Coenzyme Q-10)', strength: '30 mg / 5 g' },
      { name: 'L-Arginine', strength: '100 mg / 5 g' },
      { name: 'Zinc Sulphate Monohydrate (eq. to elemental Zinc)', strength: '10 mg / 5 g' },
      { name: 'Sodium Selenate (eq. to elemental Selenium)', strength: '40 mcg / 5 g' },
      { name: 'Folic Acid', strength: '300 mcg / 5 g' },
      { name: 'Fructose', strength: '1 g / 5 g' },
      { name: 'L-Carnitine Fumarate (eq. to L-Carnitine)', strength: '1 g / 5 g' },
    ],
    dosageForm: 'Sachet',
    route: 'Oral',
    packaging: '10 x 5 g Sachets per Box',
    packSize: '10 x 5 g Sachets',
    category: 'Gynaecology',
    categorySlug: 'gynaecology',
    secondaryCategories: ['Nutraceuticals'],
    tags: ['Lycopene', 'Co-Q10', 'L-Arginine', 'L-Carnitine', 'Pregnancy', 'Antioxidant', 'Oligohydramnios', 'IUGR'],
    description: 'Fitop Gold Sachet is an advanced nutraceutical matrix combining high-potency Lycopene (5000 mcg), Coenzyme Q-10 (30 mg), L-Carnitine (1 g), L-Arginine (100 mg), Mecobalamin (1500 ng), and Selenium. It supports optimal cellular energy production, mitochondrial health, and maternal-fetal vascular wellness.',
    howItWorks: 'L-Arginine acts as a nitric oxide donor to improve microvascular perfusion. Co-Q10 and L-Carnitine optimize mitochondrial ATP synthesis. Lycopene and Selenium provide profound antioxidant protection against lipid peroxidation.',
    therapeuticUse: 'Indicated for maternal-fetal wellness, intrauterine growth restriction (IUGR), oligohydramnios, mitochondrial energy support, male and female reproductive vitality, and convalescent cellular repair.',
    uses: [
      'Maternal & Fetal Perfusion Optimization',
      'Intrauterine Growth Restriction (IUGR) & Oligohydramnios',
      'Mitochondrial ATP Synthesis & Cellular Energy',
      'Reproductive Wellness & Antioxidant Defense'
    ],
    dosageInformation: 'One to two sachets daily after meals. Dissolve whole contents in half a glass of drinking water (100 ml) and consume immediately, or as directed by the Dietician.',
    precautions: [
      'Store in a cool, dry & dark place. Protect from direct sunlight & heat.',
      'Consult a healthcare specialist for individualized dosing during pregnancy.'
    ],
    sideEffects: [
      'Mild gastrointestinal fullness in sensitive patients'
    ],
    storage: 'Store in a cool, dry & dark place. Protect from direct sunlight & heat.',
    howSupplied: 'Carton containing 10 individually sealed foil sachets of 5 g each.',
    prescriptionRequired: false,
    featured: true,
    image: '/images/products/fitop-sachet-box.png',
    images: [
      '/images/products/fitop-sachet-box.png',
      '/images/products/fitop-sachet-pack.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'ICMR Guidelines for Dietary Supplements', sourceType: 'Regulatory' },
      { title: 'Obstetrics & Clinical Nutrition Studies on Co-Q10 and L-Carnitine', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'kuftus-dx',
    slug: 'kuftus-dx',
    name: 'Kuftus-DX Syp.',
    brandName: 'Kuftus-DX Syp.',
    genericName: 'Dextromethorphan HBr, Chlorpheniramine Maleate & Phenylephrine HCl Syrup',
    composition: 'Dextromethorphan HBr 10 mg + Chlorpheniramine Maleate 2 mg + Phenylephrine HCl 5 mg / 5 ml',
    activeIngredients: [
      { name: 'Dextromethorphan Hydrobromide IP', strength: '10 mg / 5 ml' },
      { name: 'Chlorpheniramine Maleate IP', strength: '2 mg / 5 ml' },
      { name: 'Phenylephrine Hydrochloride IP', strength: '5 mg / 5 ml' },
    ],
    dosageForm: 'Syrup',
    route: 'Oral',
    packaging: '100 ml Bottle with Graduated Dosing Cap',
    packSize: '100 ml Bottle',
    category: 'Respiratory & Allergy',
    categorySlug: 'respiratory-cough-care',
    secondaryCategories: ['Pediatric Care'],
    tags: ['Dextromethorphan', 'Chlorpheniramine', 'Phenylephrine', 'Dry Cough', 'Nasal Decongestant', 'Sugar Free'],
    description: 'Kuftus-DX Syp. is a sugar-free, triple-action cough formulation combining a centrally acting non-opioid antitussive, a first-generation antihistamine, and a selective alpha-1 adrenergic nasal decongestant. It brings swift relief from irritating dry, non-productive coughs.',
    howItWorks: 'Dextromethorphan acts centrally on the medullary cough center to suppress dry cough reflexes without narcotic sedation. Chlorpheniramine blocks peripheral H1 receptors to relieve allergic rhinorrhea, sneezing, and watery eyes. Phenylephrine constricts dilated nasal mucosal arterioles to reduce nasal congestion.',
    therapeuticUse: 'Indicated for symptomatic relief of dry, hacking, non-productive cough associated with upper respiratory tract infections, allergic rhinitis, pharyngitis, and environmental air pollutants.',
    uses: [
      'Dry, Non-Productive & Spasmodic Cough',
      'Allergic Rhinitis, Sneezing & Runny Nose',
      'Nasal & Sinus Congestion',
      'Throat Irritation & Post-Nasal Drip Cough'
    ],
    dosageInformation: 'Adults: 5 to 10 ml three to four times daily. Children (6-12 years): As directed by the doctor. Dosing cup provided.',
    precautions: [
      'May cause drowsiness; caution while driving or operating machinery.',
      'Contraindicated in patients taking Monoamine Oxidase Inhibitors (MAOIs) or with uncontrolled hypertension.',
      'Avoid concurrent alcohol consumption.'
    ],
    sideEffects: [
      'Drowsiness, dizziness, or mild dry mouth',
      'Nausea or mild epigastric upset'
    ],
    storage: 'Store in a cool, dry place below 30°C. Protect from light.',
    howSupplied: '100 ml bottle with graduated dosing cap.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/kuftus-dx-bottle.png',
    images: [
      '/images/products/kuftus-dx-bottle.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'Chest Guidelines on Cough Management', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'kuftus-expectorant',
    slug: 'kuftus-expectorant',
    name: 'Kuftus Syp.',
    brandName: 'Kuftus Syp.',
    genericName: 'Terbutaline Sulphate, Ambroxol HCl, Guaiphenesin & Menthol Syrup',
    composition: 'Terbutaline 1.25 mg + Ambroxol 15 mg + Guaiphenesin 50 mg + Menthol 1 mg / 5 ml',
    activeIngredients: [
      { name: 'Terbutaline Sulphate IP', strength: '1.25 mg / 5 ml' },
      { name: 'Ambroxol Hydrochloride IP', strength: '15 mg / 5 ml' },
      { name: 'Guaiphenesin IP', strength: '50 mg / 5 ml' },
      { name: 'Menthol IP', strength: '1 mg / 5 ml' },
    ],
    dosageForm: 'Syrup',
    route: 'Oral',
    packaging: '100 ml Bottle with Measuring Cup',
    packSize: '100 ml Bottle',
    category: 'Respiratory & Allergy',
    categorySlug: 'respiratory-cough-care',
    secondaryCategories: ['Pediatric Care'],
    tags: ['Terbutaline', 'Ambroxol', 'Guaiphenesin', 'Menthol', 'Wet Cough', 'Bronchodilator', 'Mucolytic'],
    description: 'Kuftus Syp. is a comprehensive sugar-free bronchodilator, mucolytic, and expectorant syrup. It thins tenacious bronchial mucus, facilitates airway clearance, and widens narrowed bronchospastic air passages for effortless breathing.',
    howItWorks: 'Terbutaline selectively stimulates beta-2 adrenergic receptors in bronchial smooth muscle to produce prompt bronchodilation. Ambroxol stimulates surfactant secretion and breaks acid mucopolysaccharide fibers to liquefy thick sputum. Guaiphenesin increases respiratory tract fluid volume to promote ciliary clearance. Menthol provides soothing topical airway cooling.',
    therapeuticUse: 'Indicated for productive wet cough associated with acute and chronic bronchitis, bronchial asthma, chronic obstructive pulmonary disease (COPD), bronchiectasis, and lower respiratory tract infections.',
    uses: [
      'Productive Cough with Tenacious Viscid Phlegm',
      'Acute & Chronic Bronchitis with Bronchospasm',
      'Asthmatic Bronchitis & COPD-Related Mucus Congestion',
      'Post-infectious Wet Cough'
    ],
    dosageInformation: 'Adults: 10 ml three times daily. Children (6-12 yrs): 5 ml three times daily, or as advised by the physician.',
    precautions: [
      'Use with caution in patients with hyperthyroidism, diabetes mellitus, hypertension, or ischemic heart disease.',
      'Do not exceed recommended doses to avoid potential beta-agonist tremors or tachycardia.'
    ],
    sideEffects: [
      'Mild fine skeletal muscle tremors or palpitations (transient)',
      'Nausea, gastrointestinal discomfort, or mild headache'
    ],
    storage: 'Store in a cool, dry place below 30°C. Do not freeze. Protect from light.',
    howSupplied: '100 ml bottle with graduated dosing cap.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/kuftus-expectorant-box.png',
    images: [
      '/images/products/kuftus-expectorant-box.png',
      '/images/products/kuftus-expectorant-bottle.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'British Thoracic Society (BTS) Respiratory Guidelines', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'opsus-protein-powder',
    slug: 'opsus-protein-powder',
    name: 'Fitop Pro Protein Powder',
    brandName: 'Fitop Pro Protein Powder',
    genericName: 'High Protein Dietary Supplement with DHA, Vitamins & Minerals',
    composition: 'Protein Hydrolysate 20% + DHA 100 mg / 100 g + Fortified Essential Vitamins & Minerals',
    activeIngredients: [
      { name: 'Protein Hydrolysate', strength: '20% / 100 g' },
      { name: 'Docosahexaenoic Acid (DHA 10%)', strength: '100 mg / 100 g' },
      { name: 'Essential Vitamin Complex (A, B1, B2, B6, B12, C, D3, E, Niacinamide, Folic Acid)', strength: 'Fortified' },
      { name: 'Essential Minerals (Calcium, Phosphorus, Iron, Zinc, Magnesium, Iodine)', strength: 'Macromineral Matrix' },
    ],
    dosageForm: 'Protein Powder',
    route: 'Oral',
    packaging: '200 g / 400 g HDPE Jar',
    packSize: '200 g / 400 g Jar',
    category: 'Nutraceuticals',
    categorySlug: 'nutraceuticals',
    secondaryCategories: ['Gynaecology', 'Neurology', 'Orthopaedics'],
    tags: ['Protein Powder', 'DHA', 'Vitamins', 'Nutritional Supplement', 'Convalescence', 'Strength'],
    description: 'Fitop Pro Protein Powder is a balanced high-protein nutritional supplement fortified with brain-nourishing DHA (100 mg/100 g), comprehensive vitamins, and bone-strengthening minerals in a delicious chocolate/vanilla base. It bridges daily macronutrient gaps and accelerates convalescent recovery.',
    howItWorks: 'High-quality Protein Hydrolysate (20%) provides essential amino acids for muscle tissue repair and cellular synthesis. DHA supports neuronal membrane fluidity and cognitive/retinal health. Calcium, Vitamin D3, and Phosphorus support bone mineralization, while B-complex vitamins optimize cellular energy metabolism.',
    therapeuticUse: 'Indicated for general convalescence, post-operative recovery, pregnancy and lactation nutritional support, age-related sarcopenia, and physical strength replenishment.',
    uses: [
      'Convalescent Nutritional Recovery after Illness or Surgery',
      'Pregnancy & Lactation Protein & Micronutrient Supplementation',
      'Age-Related Muscle Wasting (Sarcopenia) & General Weakness',
      'Daily Dietary Protein Supplement for Active Individuals'
    ],
    dosageInformation: 'Add 2 heaped tablespoonfuls (approx. 30 g) into a glass of lukewarm milk or water. Stir briskly until dissolved. Consume 1 to 2 times daily.',
    precautions: [
      'Not for medicinal use. Nutritional dietary supplement only.',
      'Close container lid tightly after each use to prevent moisture absorption.'
    ],
    sideEffects: [
      'Well-tolerated with no known adverse effects under recommended usage'
    ],
    storage: 'Store in a cool, dry place. Keep container tightly closed. Consume within 30 days of opening.',
    howSupplied: 'Sealed Jar of 200 g / 400 g with tamper-evident inner seal.',
    prescriptionRequired: false,
    featured: true,
    image: '/images/products/opsus-protein-powder-jar.png',
    images: [
      '/images/products/opsus-protein-powder-jar.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'FSSAI Regulations for Protein Supplements', sourceType: 'Regulatory' },
      { title: 'ICMR Dietary Guidelines for Indians', sourceType: 'Government Reference' }
    ],
    verificationStatus: 'VERIFIED'
  },
  {
    id: 'fexofast-m',
    slug: 'fexofast-m',
    name: 'Fexus-M Tab',
    brandName: 'Fexus-M Tab',
    genericName: 'Fexofenadine HCl & Montelukast Sodium Tablets IP',
    composition: 'Fexofenadine HCl IP 120 mg + Montelukast Sodium IP eq. to Montelukast 10 mg',
    activeIngredients: [
      { name: 'Fexofenadine Hydrochloride IP', strength: '120 mg' },
      { name: 'Montelukast Sodium IP', strength: '10 mg (as Montelukast)' },
    ],
    dosageForm: 'Tablets',
    route: 'Oral',
    packaging: '10 x 10 ALU-ALU Pack',
    packSize: '10 x 10 Tablets',
    category: 'Respiratory & Allergy',
    categorySlug: 'respiratory-cough-care',
    secondaryCategories: ['Dermatology'],
    tags: ['Fexofenadine', 'Montelukast', 'Allergic Rhinitis', 'Asthma', 'Antihistamine', 'Non-sedating'],
    description: 'Fexus-M Tab unites the non-sedating, second-generation selective H1-antihistamine Fexofenadine with the leukotriene receptor antagonist Montelukast in an ALU-ALU blister pack. It provides comprehensive 24-hour dual-pathway relief from allergic rhinitis and concurrent mild asthma without causing drowsiness.',
    howItWorks: 'Fexofenadine selectively inhibits peripheral H1 histamine receptors to block histamine-induced sneezing, pruritus, and watery rhinorrhea without crossing the blood-brain barrier. Montelukast selectively antagonizes the cysteinyl leukotriene CysLT1 receptor, suppressing leukotriene-mediated airway edema, smooth muscle bronchoconstriction, and mucosal inflammation.',
    therapeuticUse: 'Indicated for seasonal and perennial allergic rhinitis, chronic allergic rhinoconjunctivitis, chronic idiopathic urticaria, and allergic rhinitis associated with mild asthma.',
    uses: [
      'Seasonal & Perennial Allergic Rhinitis',
      'Allergic Sneezing, Watery Rhinorrhea & Nasal Itching',
      'Allergic Eye Symptoms (Itchy, Red, Watery Eyes)',
      'Chronic Idiopathic Urticaria & Allergic Skin Pruritus',
      'Concurrent Mild Allergic Asthma & Airway Hyperreactivity'
    ],
    dosageInformation: 'Take one tablet once daily in the evening or as directed by the prescribing physician. Swallow whole with a glass of water.',
    precautions: [
      'Avoid taking with fruit juices within 4 hours as they significantly decrease fexofenadine bioavailability.',
      'Exercise caution in patients with neuropsychiatric history.'
    ],
    sideEffects: [
      'Mild headache or nausea (infrequent)',
      'Drowsiness is rare due to high peripheral H1 selectivity',
      'Transient dyspepsia'
    ],
    storage: 'Store protected from moisture and light at a temperature below 25°C.',
    howSupplied: 'ALU-ALU moisture-impermeable blister strips of 10 tablets in cartons of 10 strips.',
    prescriptionRequired: true,
    rxSchedule: 'Schedule H',
    featured: true,
    image: '/images/products/fexofast-m-box.png',
    images: [
      '/images/products/fexofast-m-box.png'
    ],
    partnerCertified: 'Manufactured in WHO-GMP Certified Facilities',
    manufacturer: 'Opsus Healthcare Partner Facility (WHO-GMP Certified)',
    marketer: 'Opsus Pharmaceuticals',
    researchSources: [
      { title: 'Indian Pharmacopoeia (IP)', sourceType: 'Pharmacopoeia' },
      { title: 'ARIA (Allergic Rhinitis and its Impact on Asthma) Guidelines', sourceType: 'Medical Reference' }
    ],
    verificationStatus: 'VERIFIED'
  }
];

export const productCategories = [
  { id: 'all', label: 'All Formulations', slug: 'all' },
  { id: 'orthopaedics', label: 'Orthopaedics & Pain', slug: 'orthopaedics-pain-management' },
  { id: 'antibiotics', label: 'Antibiotics & Antibacterial', slug: 'antibiotics-antibacterial' },
  { id: 'gastroenterology', label: 'Gastroenterology', slug: 'gastroenterology' },
  { id: 'respiratory', label: 'Respiratory & Allergy', slug: 'respiratory-cough-care' },
  { id: 'gynaecology', label: 'Gynaecology', slug: 'gynaecology' },
  { id: 'pediatric', label: 'Pediatric Care', slug: 'pediatric-care' },
  { id: 'neurology', label: 'Neurology', slug: 'neurology' },
  { id: 'dermatology', label: 'Dermatology', slug: 'dermatology' },
  { id: 'nutraceuticals', label: 'Nutraceuticals & Vitality', slug: 'nutraceuticals' },
];
