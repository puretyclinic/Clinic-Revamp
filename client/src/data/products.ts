export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  benefits?: string[];
  ingredients?: string[];
  usage?: string;
}

export const products: Product[] = [
  {
    id: "supreme-magnesium-neuro-powder",
    name: "Supreme Magnesium Neuro Powder",
    price: "$74.99",
    image: "https://puretyclinicshop.com/cdn/shop/files/Supreme_magnesium_neuro_berry.png?crop=center&height=1620&v=1751418840&width=1080",
    category: "Supplements",
    description: "Supreme Magnesium Neuro Powder is a brain-focused magnesium supplement designed to cross the blood-brain barrier and support cognitive health, memory, stress management, and sleep quality. This unique formula features Magnesium L-threonate, the only form of magnesium proven to significantly increase magnesium levels in the brain.",
    benefits: [
      "Supports healthy brain magnesium levels",
      "Promotes synapse number and function",
      "Enhances cognitive health and memory",
      "Supports stress management and mood",
      "Improves sleep quality"
    ],
    ingredients: [
      "Magnesium (as di-magnesium malate, magnesium L-threonate, and magnesium lysinate glycinate chelate)",
      "Magnesium L-threonate (1,000mg)"
    ],
    usage: "Mix 1 scoop (about 2.5g) daily with water or your favorite beverage, or as directed by your healthcare provider."
  },
  {
    id: "purety-d3k2-60-capsules",
    name: "Purety D3K2 60 Capsules",
    price: "$39.99",
    image: "https://puretyclinicshop.com/cdn/shop/files/Purety_D3_K2.png?crop=center&height=1620&v=1751419407&width=1080",
    category: "Vitamins",
    description: "A synergistic blend of Vitamin D3 and Vitamin K2 (as MK-7) to support optimal bone health, cardiovascular function, and immune system strength. Vitamin K2 ensures that calcium is directed to the bones rather than the arteries.",
    benefits: [
      "Supports strong bones and teeth",
      "Promotes healthy immune function",
      "Supports cardiovascular health",
      "Optimizes calcium absorption"
    ],
    usage: "Take 1 capsule daily with a meal containing fat, or as directed by your healthcare practitioner."
  },
  {
    id: "supreme-magnesium-240-capsules",
    name: "Supreme Magnesium 240 Capsules",
    price: "$54.99",
    image: "https://puretyclinicshop.com/cdn/shop/files/Supreme_Magnesium_240_caps.png?crop=center&height=1620&v=1751420423&width=1080",
    category: "Supplements",
    description: "A highly absorbable, chelated magnesium formula designed to support muscle relaxation, energy production, and nervous system health without causing digestive distress.",
    benefits: [
      "Supports muscle relaxation and reduces cramps",
      "Promotes energy production",
      "Supports healthy nervous system function",
      "Gentle on the stomach"
    ],
    usage: "Take 2 capsules twice daily, or as directed by your healthcare practitioner."
  },
  {
    id: "fish-oil",
    name: "Fish Oil",
    price: "$40.00",
    image: "https://puretyclinicshop.com/cdn/shop/files/purety-clinic-fish-oil.png?crop=center&height=1620&v=1752813256&width=1080",
    category: "Supplements",
    description: "High-potency Omega-3 fatty acids (EPA/DHA) sourced from wild-caught cold-water fish. Molecularly distilled for purity to remove heavy metals and contaminants.",
    benefits: [
      "Supports cardiovascular health",
      "Promotes brain function and mood",
      "Supports healthy inflammatory response",
      "Maintains healthy joints"
    ],
    usage: "Take 2 softgels daily with food."
  },
  {
    id: "2-step-superheal-anti-aging-system",
    name: "2-Step Superheal® Anti-Aging System",
    price: "$238.00",
    image: "https://puretyclinicshop.com/cdn/shop/files/Olive-Serum_bdae9a60-2502-4af3-a033-c170c9f15862.jpg?crop=center&height=900&v=1688966708&width=600",
    category: "Skincare",
    description: "The 2-Step Superheal® Anti-Aging System by Phyto-C is a clinically proven dual-product regimen combining a potent Vitamin C serum (Superheal® O-Live Serum) and a hyaluronic acid gel (Superheal® O-Live Gel) for comprehensive anti-aging results.",
    benefits: [
      "Visibly reduces fine lines and wrinkles",
      "Brightens and evens skin tone",
      "Hydrates and plumps skin immediately",
      "Provides powerful antioxidant protection"
    ],
    usage: "Morning & Evening: Apply 2 drops of O-Live Serum after cleansing. Follow with 1-2 drops of O-Live Gel."
  },
  {
    id: "supreme-daily-probiotic",
    name: "Supreme Daily Probiotic",
    price: "$71.99",
    image: "https://puretyclinicshop.com/cdn/shop/files/Supreme_Daily_Probiotic.png?crop=center&height=1620&v=1751422225&width=1080",
    category: "Digestion",
    description: "A high-potency, multi-strain probiotic formula designed to replenish beneficial gut bacteria, support digestive health, and enhance immune function. Features acid-resistant strains for maximum viability.",
    benefits: [
      "Supports healthy digestion",
      "Promotes a balanced gut microbiome",
      "Supports immune system health",
      "Helps relieve occasional bloating"
    ],
    usage: "Take 1 capsule daily, preferably with a meal."
  },
  {
    id: "terra-superfood",
    name: "Terra Superfood",
    price: "$59.97",
    image: "https://puretyclinicshop.com/cdn/shop/files/purety-clinic-terra.png?crop=center&height=1620&v=1756269937&width=1080",
    category: "Supplements",
    description: "Terra Superfood is an SBO (soil-based organism) supporting prebiotic supplement that promotes digestive health, energy, and nutrient balance. It combines digestive enzymes, fruits, vegetables, mushrooms, roots, and herbs.",
    benefits: [
      "Supports digestive health and nutrient absorption",
      "Maintains sustained energy levels",
      "Supports natural cleansing processes",
      "Provides broad-spectrum phytonutrients"
    ],
    ingredients: [
      "Prebiotic Fruit Blend (Pineapple, Noni, Dragon Fruit)",
      "Prebiotic Vegetable Blend (Spirulina, Wheat Grass, Black Radish)",
      "Herbal & Functional Blend (Dandelion, Ginger, Mushrooms)"
    ],
    usage: "Mix 1 scoop with water or juice daily."
  },
  {
    id: "optimal-prenatal",
    name: "Optimal Prenatal",
    price: "$65.00",
    image: "https://puretyclinicshop.com/cdn/shop/files/7.png?crop=center&height=1620&v=1749845410&width=1080",
    category: "Vitamins",
    description: "A comprehensive prenatal multivitamin formulated to support the health of both mother and baby during pregnancy and nursing. Contains active folate (L-5-MTHF) and chelated minerals for optimal absorption.",
    benefits: [
      "Supports healthy fetal development",
      "Provides essential nutrients for mother and baby",
      "Gentle on the stomach",
      "Contains active folate for methylation support"
    ]
  },
  {
    id: "multivitamin-one",
    name: "Multivitamin One",
    price: "$35.00",
    image: "https://puretyclinicshop.com/cdn/shop/files/35.png?crop=center&height=1620&v=1734684147&width=1080",
    category: "Vitamins",
    description: "A one-a-day multivitamin providing essential nutrients in their active, bioavailable forms. Perfect for those looking for basic daily support without taking multiple capsules.",
    benefits: [
      "Provides daily nutritional foundation",
      "Supports energy production",
      "Contains active B vitamins",
      "Convenient one-daily dose"
    ]
  },
  {
    id: "homocysteine-nutrients",
    name: "Homocysteine Nutrients",
    price: "$35.00",
    image: "https://puretyclinicshop.com/cdn/shop/files/Group_2085663849_4.jpg?crop=center&height=5418&v=1749760426&width=3612",
    category: "Supplements",
    description: "Targeted support for healthy homocysteine levels. Contains bioactive B vitamins (B6, B12, Folate) and betaine to support methylation and cardiovascular health.",
    benefits: [
      "Supports healthy homocysteine metabolism",
      "Promotes cardiovascular health",
      "Supports cognitive function",
      "Essential for methylation pathways"
    ]
  },
  {
    id: "optimal-multivitamin",
    name: "Optimal Multivitamin",
    price: "$76.00",
    image: "https://puretyclinicshop.com/cdn/shop/files/optimal-multivitamin.png?crop=center&height=1620&v=1749843015&width=1080",
    category: "Vitamins",
    description: "A premium, high-potency multivitamin complex with superior mineral chelates and activated vitamins. Designed for individuals with higher nutritional needs or compromised absorption.",
    benefits: [
      "Comprehensive nutritional support",
      "High antioxidant protection",
      "Supports detoxification pathways",
      "Maximum bioavailability"
    ]
  },
  {
    id: "supreme-minerals-120-capsules",
    name: "Supreme Minerals 120 Capsules",
    price: "$46.99",
    image: "https://puretyclinicshop.com/cdn/shop/files/Group_2085663849_5_0a0e1858-b409-4300-9176-0f928de7490b.jpg?crop=center&height=5418&v=1749765886&width=3612",
    category: "Minerals",
    description: "A complete multi-mineral formula containing essential macrominerals and trace elements in chelated forms for optimal utilization by the body.",
    benefits: [
      "Supports bone and skeletal health",
      "Essential for enzyme function",
      "Supports electrolyte balance",
      "Iron-free formula"
    ]
  },
  {
    id: "clean-whey-goat-protein",
    name: "Clean Whey Goat Protein (5lbs)",
    price: "$199.00",
    image: "https://puretyclinicshop.com/cdn/shop/files/5lb.png?crop=center&height=1620&v=1764154966&width=1080",
    category: "Supplements",
    description: "Premium goat whey protein concentrate. Easy to digest and hypoallergenic compared to cow's milk protein. Provides a complete amino acid profile for muscle recovery and immune support.",
    benefits: [
      "Easily digestible protein source",
      "Supports lean muscle mass",
      "Less allergenic than cow whey",
      "Rich in natural immunoglobulins"
    ]
  },
  {
    id: "roberts-formula",
    name: "Robert's Formula 2 oz.",
    price: "$40.00",
    image: "https://puretyclinicshop.com/cdn/shop/files/robert-s-formula-2-oz.png?crop=center&height=240&v=1741319566&width=240",
    category: "Herbal Formulas",
    description: "A classic herbal blend formulated to soothe and support the gastrointestinal tract. Traditionally used for ulcers, gastritis, and colitis.",
    benefits: [
      "Soots irritated mucous membranes",
      "Supports healthy digestion",
      "Promotes gut lining integrity",
      "Anti-inflammatory properties"
    ],
    ingredients: [
      "Marshmallow root",
      "Slippery Elm",
      "Echinacea",
      "Geranium"
    ]
  },
  {
    id: "urisept",
    name: "Urisept (Urinary Antiseptic)",
    price: "$40.00",
    image: "https://puretyclinicshop.com/cdn/shop/products/urisept-urinary-antiseptic-2-oz.png?crop=center&height=240&v=1679734335&width=240",
    category: "Herbal Formulas",
    description: "A specialized herbal tincture designed to support urinary tract health and maintain a healthy microbial balance in the urinary system.",
    benefits: [
      "Supports urinary tract health",
      "Natural antiseptic properties",
      "Promotes healthy fluid balance",
      "Soothing to urinary tissues"
    ]
  },
  {
    id: "bitters",
    name: "Bitters 2 oz.",
    price: "$40.00",
    image: "https://puretyclinicshop.com/cdn/shop/products/bitters.png?crop=center&height=379&v=1679734335&width=240",
    category: "Herbal Formulas",
    description: "Traditional digestive bitters to stimulate optimal digestion. Taking bitters before meals primes the digestive system by stimulating stomach acid, bile, and enzyme production.",
    benefits: [
      "Stimulates healthy digestion",
      "Reduces bloating and gas",
      "Supports liver function",
      "Helps regulate appetite"
    ]
  },
  {
    id: "active-advanced-serum",
    name: "Active Advanced Serum",
    price: "$139.00",
    image: "https://puretyclinicshop.com/cdn/shop/files/Untitleddesign_22.png?crop=center&height=240&v=1724312793&width=240",
    category: "Skincare",
    description: "A powerful acne treatment serum featuring Mandelic, Azelaic, Salicylic, Glycolic, and Lactic acids plus Retinol. Targets acne, acne scars, dark spots, and uneven skin tone.",
    benefits: [
      "Treats and prevents acne breakouts",
      "Fades dark spots and acne scars",
      "Exfoliates and refines skin texture",
      "Promotes cellular renewal"
    ]
  },
  {
    id: "bacteriology-culture-stool-test",
    name: "Bacteriology Culture Stool Test",
    price: "$140.00",
    image: "https://puretyclinicshop.com/cdn/shop/products/Cpx3_1e2689ea-0c82-4fb8-af09-def7489479db.png?crop=center&height=175&v=1679921176&width=240",
    category: "Medical Tests",
    description: "A comprehensive stool culture test by Doctor's Data to identify beneficial and pathogenic bacteria in the gut. Essential for understanding the root cause of digestive issues.",
    benefits: [
      "Identifies gut dysbiosis",
      "Detects pathogenic bacteria",
      "Guides targeted probiotic therapy",
      "Assesses digestive health"
    ]
  },
  {
    id: "berberine-dhb",
    name: "Berberine DHB",
    price: "$49.99",
    image: "https://puretyclinicshop.com/cdn/shop/files/1.png?crop=center&height=240&v=1724099216&width=240",
    category: "Supplements",
    description: "High-potency Berberine enhanced with Dihydroberberine (DHB) for superior absorption. Supports healthy blood sugar metabolism and cardiovascular health.",
    benefits: [
      "Supports healthy glucose metabolism",
      "Promotes insulin sensitivity",
      "Supports cardiovascular health",
      "Supports healthy weight management"
    ]
  },
  {
    id: "biocidin-liquid",
    name: "Biocidin® Liquid",
    price: "$63.97",
    image: "https://puretyclinicshop.com/cdn/shop/files/biocidin-facts.png?crop=center&height=240&v=1747270722&width=240",
    category: "Herbal Formulas",
    description: "A synergistic botanical combination of broad-spectrum herbs and essential oils. Targets the GI tract and supports microbiome balance for healthy digestion and elimination.",
    benefits: [
      "Broad-spectrum antimicrobial support",
      "Disrupts biofilms",
      "Supports healthy gut flora",
      "Systemic immune support"
    ]
  },
  {
    id: "biotics-dysbiocide",
    name: "Biotics Dysbiocide",
    price: "$36.60",
    image: "https://puretyclinicshop.com/cdn/shop/files/40_bccb23f8-6af0-425d-99e9-111ad1c242e2.png?crop=center&height=240&v=1741319566&width=240",
    category: "Herbal Formulas",
    description: "A proprietary herbal blend formulated to support a healthy balance of gut microbiota. Often used in protocols for SIBO (Small Intestinal Bacterial Overgrowth).",
    benefits: [
      "Supports healthy gut ecology",
      "Targets intestinal overgrowth",
      "Promotes digestive comfort",
      "Physician-formulated blend"
    ]
  },
  {
    id: "biotics-fc-cidal",
    name: "Biotics FC-Cidal™",
    price: "$39.60",
    image: "https://puretyclinicshop.com/cdn/shop/files/38.png?crop=center&height=240&v=1741264606&width=240",
    category: "Herbal Formulas",
    description: "A unique herbal combination supporting the body's natural defense mechanisms and maintaining a healthy environment in the gastrointestinal tract.",
    benefits: [
      "Supports GI immune defense",
      "Promotes microbial balance",
      "Antioxidant properties",
      "Synergistic with Dysbiocide"
    ]
  },
  {
    id: "biotics-pregnenolone-25",
    name: "Biotics Pregnenolone 25",
    price: "$26.50",
    image: "https://puretyclinicshop.com/cdn/shop/files/42_4f3354d3-7857-4ac5-9bac-60c403b4174f.png?crop=center&height=240&v=1741319763&width=240",
    category: "Supplements",
    description: "Pregnenolone is a precursor hormone that the body converts into other steroid hormones like DHEA, progesterone, and estrogen. Supports memory, mood, and stress resilience.",
    benefits: [
      "Supports hormone production",
      "Promotes memory and cognitive health",
      "Supports stress response",
      "Precursor to vital hormones"
    ]
  }
];