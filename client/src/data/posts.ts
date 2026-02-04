export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  hidden?: boolean;
}

export const blogPosts: BlogPost[] = [
  // --- Live Posts ---
  {
    id: "healing-power-nature",
    title: "The Healing Power of Nature: Understanding Naturopathy",
    excerpt: "Naturopathic medicine is a distinct primary health care profession, emphasizing prevention, treatment, and optimal health through the use of therapeutic methods and substances that encourage individuals’ inherent self-healing process.",
    date: "October 12, 2023",
    author: "Dr. Dena Birch",
    image: "https://images.unsplash.com/photo-1544367563-12123d89a5cd?auto=format&fit=crop&q=80&w=800",
    category: "Naturopathy"
  },
  {
    id: "regenerative-medicine",
    title: "Regenerative Medicine: Beyond Pain Management",
    excerpt: "Regenerative injection therapies like PRP and stem cells offer a viable alternative to surgery for chronic joint pain. Learn how we use your body's own healing factors to repair tissue.",
    date: "September 28, 2023",
    author: "Dr. Jonathan Birch",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    category: "Regenerative Medicine"
  },
  {
    id: "gut-health-microbiome",
    title: "Gut Health & The Microbiome Connection",
    excerpt: "Your gut health influences everything from your immune system to your mood. Discover how restoring your microbiome can lead to profound improvements in your overall vitality.",
    date: "August 15, 2023",
    author: "Dr. Jonathan Birch",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800",
    category: "Gut Health"
  },
  {
    id: "hormonal-balance",
    title: "Holistic Approaches to Hormonal Balance",
    excerpt: "Feeling fatigued? Hormonal imbalances are often the culprit. We explore bioidentical hormone replacement therapy (BHRT) and natural strategies for restoring equilibrium.",
    date: "July 30, 2023",
    author: "Dr. Dena Birch",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    category: "Women's Health"
  },

  // --- Stored in Database (Hidden) ---
  {
    id: "olivirex-olive-leaf",
    title: "Olivirex: Biocidin's High Potency Olive Leaf Formula",
    excerpt: "A deep dive into the immune-boosting properties of olive leaf extract and how Olivirex stands out for targeted support.",
    date: "June 15, 2023",
    author: "Dr. Jonathan Birch",
    image: "https://images.unsplash.com/photo-1564518063859-99bb57209772?auto=format&fit=crop&q=80&w=800",
    category: "Supplements",
    hidden: true
  },
  {
    id: "klaire-labs-probiotic",
    title: "Klaire Labs: Benefits of Probiotic in Supporting Optimal Gut Health",
    excerpt: "Why we choose Klaire Labs for our patients: clinical strength probiotics that actually survive digestion to restore your microbiome.",
    date: "May 22, 2023",
    author: "Dr. Jonathan Birch",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=800",
    category: "Gut Health",
    hidden: true
  },
  {
    id: "xymogen-cogniquil",
    title: "Xymogen Cogniquil: A Comprehensive Guide to Clarity and Motivation",
    excerpt: "Struggling with brain fog? Learn how Cogniquil supports healthy neurotransmitter function for better focus and mental energy.",
    date: "April 10, 2023",
    author: "Dr. Dena Birch",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    category: "Brain Health",
    hidden: true
  },
  {
    id: "thorne-berberine",
    title: "Thorne Berberine: Metabolic Health and Wellness Benefits",
    excerpt: "Berberine is a powerful botanical for blood sugar regulation and metabolic support. Here's why we recommend Thorne's formulation.",
    date: "March 05, 2023",
    author: "Dr. Jonathan Birch",
    image: "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?auto=format&fit=crop&q=80&w=800",
    category: "Metabolic Health",
    hidden: true
  },
  {
    id: "metagenics-sinuplex",
    title: "Metagenics Sinuplex: Effective Support for Respiratory Function",
    excerpt: "Natural relief for sinus congestion and respiratory health without the side effects of conventional antihistamines.",
    date: "February 18, 2023",
    author: "Dr. Dena Birch",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800",
    category: "Respiratory Health",
    hidden: true
  },
  {
    id: "ortho-molecular-iron",
    title: "Ortho Molecular Reacted Iron: Supporting Optimal Iron Levels",
    excerpt: "Iron deficiency is common, but many supplements cause digestive distress. Reacted Iron offers superior absorption with better tolerance.",
    date: "January 30, 2023",
    author: "Dr. Dena Birch",
    image: "https://images.unsplash.com/photo-1551241655-2665a929f271?auto=format&fit=crop&q=80&w=800",
    category: "Nutrient Therapy",
    hidden: true
  },
  {
    id: "roberts-formula",
    title: "Robert's Formula: A Natural Remedy for Digestive Health",
    excerpt: "A time-tested naturopathic formula for soothing the gut lining and reducing inflammation in the digestive tract.",
    date: "December 12, 2022",
    author: "Dr. Jonathan Birch",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&q=80&w=800",
    category: "Gut Health",
    hidden: true
  },
  {
    id: "pectasol-c",
    title: "Pectasol C: A Revolutionary Supplement for Cellular Health",
    excerpt: "Understanding Modified Citrus Pectin (MCP) and its role in cellular health, detoxification, and immune support.",
    date: "November 08, 2022",
    author: "Dr. Jonathan Birch",
    image: "https://images.unsplash.com/photo-1616671276445-169d9e2465cc?auto=format&fit=crop&q=80&w=800",
    category: "Integrative Oncology",
    hidden: true
  }
];
