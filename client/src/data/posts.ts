export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage?: string;
  authorTitle?: string;
  image: string;
  category: string;
  hidden?: boolean;
  content?: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "healing-power-nature",
    title: "The Healing Power of Nature: Understanding Naturopathy",
    excerpt: "Naturopathic medicine is a distinct primary health care profession, emphasizing prevention, treatment, and optimal health through the use of therapeutic methods and substances that encourage individuals' inherent self-healing process.",
    date: "October 12, 2023",
    author: "Dr. Dena Birch",
    authorImage: "https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612849682752-20P4409HYPXT6ALS0FF3/Holistic+Dr.+Dena+Birch",
    authorTitle: "Naturopathic Doctor",
    image: "/images/blog-naturopathy.jpg",
    category: "Naturopathy",
    tags: ["Holistic", "NaturalMedicine", "Naturopathy"],
    content: `<p class="lead text-xl text-muted-foreground mb-8">
  Naturopathic medicine is a distinct primary health care profession that emphasizes prevention, treatment, and optimal health through therapeutic methods and substances that encourage your body's inherent self-healing process. At Purety Family Medical Clinic, naturopathic principles are woven into everything we do.
</p>

<h2>The Six Principles of Naturopathy</h2>
<p>
  The practice of naturopathic medicine is built on six foundational principles of healing. These principles are rooted in the objective observation of how health and disease work in the body, and they continue to be validated by modern scientific research.
</p>

<ul>
  <li><strong>The Healing Power of Nature (Vis Medicatrix Naturae):</strong> Your body possesses an inherent ability to heal itself. Naturopathic medicine works to support and restore this natural process rather than override it with synthetic interventions.</li>
  <li><strong>Identify and Treat the Causes (Tolle Causam):</strong> Rather than simply masking symptoms, naturopathic physicians seek to identify and address the root causes of illness — whether they stem from diet, lifestyle, emotional stress, or environmental factors.</li>
  <li><strong>First Do No Harm (Primum Non Nocere):</strong> We use the least invasive therapies first, choosing treatments that minimize the risk of harmful side effects. This means starting with nutrition, botanicals, and lifestyle changes before turning to more aggressive interventions.</li>
  <li><strong>Doctor as Teacher (Docere):</strong> Education is a cornerstone of naturopathic care. We believe that when patients understand why they feel the way they do, they become active participants in their own healing journey.</li>
  <li><strong>Treat the Whole Person:</strong> Health is more than just the absence of disease. We consider the physical, mental, emotional, genetic, environmental, and social factors that influence each patient's well-being.</li>
  <li><strong>Prevention:</strong> The best medicine is the kind you never need. By identifying risk factors and making proactive lifestyle changes, many chronic diseases can be prevented entirely.</li>
</ul>

<h2>What Does a Naturopathic Visit Look Like?</h2>
<p>
  If you've never visited a naturopathic doctor, you might be surprised by how different the experience feels from a conventional medical appointment. Your first visit at Purety Clinic typically lasts 60 to 90 minutes. We take a thorough health history that goes far beyond your current symptoms — we want to understand your diet, sleep patterns, stress levels, relationships, work environment, and health goals.
</p>
<p>
  Based on this comprehensive assessment, we develop a personalized treatment plan that may include dietary recommendations, herbal medicine, nutritional supplementation, hydrotherapy, lifestyle counseling, or other natural therapies. The goal is always to support your body's own healing mechanisms rather than simply suppressing symptoms.
</p>

<h2>Naturopathy and Conventional Medicine: Better Together</h2>
<p>
  At Purety Clinic, we don't see naturopathic and conventional medicine as opposing forces. Dr. Dena Birch integrates both approaches, using the best of what each has to offer. Sometimes a patient needs pharmaceutical support alongside natural therapies. Other times, natural medicine alone is sufficient. The key is having a practitioner who understands both worlds and can guide you to the right combination for your unique situation.
</p>

<blockquote>
  "The doctor of the future will give no medicine, but will interest his patient in the care of the human frame, in diet and in the cause and prevention of disease." — Thomas Edison
</blockquote>

<h2>Common Conditions We Treat Naturopathically</h2>
<p>
  Naturopathic medicine is effective for a wide range of health concerns, including:
</p>
<ul>
  <li>Digestive disorders such as IBS, SIBO, and chronic bloating</li>
  <li>Hormonal imbalances including thyroid dysfunction and adrenal fatigue</li>
  <li>Autoimmune conditions like Hashimoto's, rheumatoid arthritis, and lupus</li>
  <li>Chronic fatigue and fibromyalgia</li>
  <li>Anxiety, depression, and stress-related conditions</li>
  <li>Skin conditions such as eczema, acne, and psoriasis</li>
  <li>Allergies and environmental sensitivities</li>
</ul>

<h2>Start Your Natural Healing Journey</h2>
<p>
  Whether you're dealing with a chronic condition that hasn't responded to conventional treatment, or you simply want to optimize your health and prevent disease, naturopathic medicine offers a path forward. At Purety Family Medical Clinic in Santa Barbara, we're here to help you discover what true wellness feels like.
</p>`
  },
  {
    id: "regenerative-medicine",
    title: "Regenerative Medicine: Beyond Pain Management",
    excerpt: "Regenerative injection therapies like PRP and stem cells offer a viable alternative to surgery for chronic joint pain. Learn how we use your body's own healing factors to repair tissue.",
    date: "September 28, 2023",
    author: "Dr. Jonathan Birch",
    authorImage: "https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612849607964-HHKKT71DKVC2FOBPIQCM/Jonathan+Birch+MD",
    authorTitle: "Medical Director",
    image: "/images/blog-regenerative.jpg",
    category: "Regenerative Medicine",
    tags: ["PRP", "StemCells", "JointPain", "RegenerativeMedicine"],
    content: `<p class="lead text-xl text-muted-foreground mb-8">
  For decades, the standard approach to chronic joint pain has been a predictable cycle: anti-inflammatory medications, cortisone injections, physical therapy, and eventually surgery. But what if your body already contains everything it needs to repair damaged tissue? That's the promise of regenerative injection therapy — and at Purety Family Medical Clinic, we've seen it transform the lives of hundreds of patients.
</p>

<h2>What Is Regenerative Injection Therapy?</h2>
<p>
  Regenerative medicine is a branch of medicine focused on repairing, replacing, or regenerating human cells, tissues, or organs to restore normal function. Unlike conventional pain management, which focuses on masking symptoms, regenerative therapies address the underlying tissue damage that causes pain in the first place.
</p>
<p>
  At Purety Clinic, we offer several regenerative injection therapies, each suited to different types of injuries and conditions:
</p>

<h2>Platelet-Rich Plasma (PRP) Therapy</h2>
<p>
  PRP therapy uses a concentrated preparation of your own blood platelets to accelerate healing. Here's how it works: we draw a small amount of your blood, spin it in a centrifuge to concentrate the platelets and growth factors, and then inject this concentrated solution directly into the injured area.
</p>
<p>
  Platelets contain hundreds of proteins called growth factors that are essential for tissue repair. By delivering a concentrated dose of these growth factors directly to the site of injury, PRP can stimulate and accelerate your body's natural healing response. Research has shown PRP to be effective for:
</p>
<ul>
  <li>Tendon injuries such as tennis elbow, Achilles tendinitis, and rotator cuff tears</li>
  <li>Osteoarthritis of the knee, hip, and shoulder</li>
  <li>Ligament sprains and partial tears</li>
  <li>Muscle strains and chronic muscle pain</li>
  <li>Meniscus tears and cartilage damage</li>
</ul>

<h2>Stem Cell Therapy</h2>
<p>
  Stem cells are your body's master cells — they have the unique ability to develop into many different cell types, from muscle cells to cartilage cells to bone cells. When injected into a damaged joint or tissue, stem cells can differentiate into the specific cell types needed for repair.
</p>
<p>
  We use mesenchymal stem cells (MSCs) derived from your own body or from carefully sourced donor tissue. These cells have powerful anti-inflammatory properties and can stimulate the regeneration of cartilage, tendons, ligaments, and bone.
</p>

<h2>Prolotherapy</h2>
<p>
  Prolotherapy, short for "proliferative therapy," involves injecting a natural irritant solution (typically dextrose) into damaged ligaments and tendons. This controlled irritation triggers your body's healing cascade, strengthening weakened connective tissue and stabilizing joints. Prolotherapy has been used for over 80 years and has a strong track record for treating chronic joint instability and pain.
</p>

<h2>Who Is a Good Candidate?</h2>
<p>
  Regenerative injection therapy may be right for you if:
</p>
<ul>
  <li>You have chronic joint, tendon, or ligament pain that hasn't responded to conventional treatment</li>
  <li>You want to avoid or delay surgery</li>
  <li>You're an active person who wants to return to your sport or activities</li>
  <li>You've been told you need a joint replacement but aren't ready for that step</li>
  <li>Cortisone injections have provided only temporary relief</li>
</ul>

<h2>What to Expect During Treatment</h2>
<p>
  Most regenerative injection procedures take 30 to 60 minutes and are performed in our Santa Barbara office. Dr. Jonathan Birch uses ultrasound guidance to ensure precise placement of the injection. You may experience some soreness at the injection site for a few days, which is actually a sign that the healing process has been activated.
</p>
<p>
  Most patients begin to notice improvement within 4 to 6 weeks, with continued healing over the following months. Some conditions may require a series of 2 to 3 treatments spaced several weeks apart for optimal results.
</p>

<h2>A Different Approach to Pain</h2>
<p>
  At Purety Clinic, we believe that your body is remarkably capable of healing itself when given the right support. Regenerative injection therapy represents a fundamental shift in how we think about pain and injury — moving from merely managing symptoms to actually repairing the damage. If you're tired of living with chronic pain and want to explore a treatment that works with your body rather than against it, we'd love to talk with you.
</p>`
  },
  {
    id: "gut-health-microbiome",
    title: "Gut Health & The Microbiome Connection",
    excerpt: "Your gut health influences everything from your immune system to your mood. Discover how restoring your microbiome can lead to profound improvements in your overall vitality.",
    date: "August 15, 2023",
    author: "Dr. Jonathan Birch",
    authorImage: "https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612849607964-HHKKT71DKVC2FOBPIQCM/Jonathan+Birch+MD",
    authorTitle: "Medical Director",
    image: "/images/blog-gut-health.jpg",
    category: "Gut Health",
    tags: ["GutHealth", "Microbiome", "FMT", "Digestion"],
    content: `<p class="lead text-xl text-muted-foreground mb-8">
  Inside your digestive tract lives a complex ecosystem of trillions of microorganisms — bacteria, fungi, viruses, and other microbes — collectively known as the gut microbiome. This hidden world has a profound influence on nearly every aspect of your health, from digestion and immunity to mood and energy levels. At Purety Family Medical Clinic, gut health is one of our core specialties.
</p>

<h2>Your Gut: The Second Brain</h2>
<p>
  Scientists often refer to the gut as the "second brain" because it contains over 500 million neurons and produces more than 90% of your body's serotonin — the neurotransmitter responsible for feelings of happiness and well-being. This gut-brain connection, known as the gut-brain axis, explains why digestive problems so often go hand-in-hand with anxiety, depression, and brain fog.
</p>
<p>
  When your microbiome is balanced and diverse, it supports healthy digestion, robust immunity, clear thinking, and stable moods. But when that balance is disrupted — a condition called dysbiosis — the effects ripple throughout your entire body.
</p>

<h2>What Causes Microbiome Disruption?</h2>
<p>
  Modern life is extraordinarily hard on your microbiome. Some of the most common disruptors include:
</p>
<ul>
  <li><strong>Antibiotics:</strong> While sometimes necessary, antibiotics don't discriminate between harmful and beneficial bacteria. A single course of antibiotics can alter your microbiome for months or even years.</li>
  <li><strong>Processed foods:</strong> The standard American diet, high in sugar, refined carbohydrates, and artificial additives, starves beneficial bacteria while feeding harmful ones.</li>
  <li><strong>Chronic stress:</strong> Stress hormones directly alter the composition of your gut bacteria and can increase intestinal permeability (commonly called "leaky gut").</li>
  <li><strong>Environmental toxins:</strong> Pesticides, herbicides, heavy metals, and other environmental chemicals can damage the delicate gut lining and disrupt microbial balance.</li>
  <li><strong>Lack of dietary diversity:</strong> A varied diet rich in different plant foods supports microbial diversity. Eating the same foods day after day narrows your microbiome.</li>
</ul>

<h2>Signs Your Gut Needs Attention</h2>
<p>
  Many people don't realize that their symptoms are connected to gut health. Beyond obvious digestive complaints like bloating, gas, and irregular bowel movements, microbiome imbalance can manifest as:
</p>
<ul>
  <li>Persistent fatigue and low energy</li>
  <li>Skin conditions like eczema, acne, or rosacea</li>
  <li>Food sensitivities or intolerances</li>
  <li>Frequent colds and infections</li>
  <li>Joint pain and inflammation</li>
  <li>Difficulty losing weight</li>
  <li>Mood disorders including anxiety and depression</li>
  <li>Autoimmune conditions</li>
</ul>

<h2>Our Approach to Gut Restoration</h2>
<p>
  At Purety Clinic, we take a comprehensive, multi-step approach to restoring gut health:
</p>
<p>
  <strong>1. Testing:</strong> We start with advanced stool analysis and other functional testing to understand exactly what's happening in your gut. This tells us which bacteria are present, which are missing, whether there's inflammation, and how well you're digesting and absorbing nutrients.
</p>
<p>
  <strong>2. Remove:</strong> We identify and remove the triggers that are causing harm — whether that's a pathogenic infection, food sensitivities, or environmental exposures.
</p>
<p>
  <strong>3. Replace:</strong> We support healthy digestion with enzymes, hydrochloric acid, or bile acids as needed.
</p>
<p>
  <strong>4. Reinoculate:</strong> We repopulate the gut with beneficial bacteria through targeted probiotics, prebiotics, and in some cases, Fecal Microbiota Transplant (FMT) — a treatment Dr. Birch has extensive experience with.
</p>
<p>
  <strong>5. Repair:</strong> We heal the gut lining with nutrients like L-glutamine, zinc carnosine, and other mucosal-support supplements.
</p>

<h2>Fecal Microbiota Transplant (FMT)</h2>
<p>
  For patients with severely disrupted microbiomes — particularly those with recurrent C. difficile infections — FMT offers a powerful solution. This treatment involves transplanting healthy donor microbiota to restore a balanced gut ecosystem. Dr. Jonathan Birch has performed over 1,000 FMT procedures and is one of the most experienced practitioners in the country. You can learn more on our dedicated <a href="/fecal-transplant">FMT page</a>.
</p>

<h2>Feeding Your Microbiome</h2>
<p>
  One of the simplest things you can do for your gut health is to eat a diverse, plant-rich diet. Aim for 30 or more different plant foods per week — this includes vegetables, fruits, whole grains, legumes, nuts, seeds, herbs, and spices. Each type of plant fiber feeds different species of beneficial bacteria, promoting the microbial diversity that's associated with good health.
</p>
<p>
  Fermented foods like sauerkraut, kimchi, kefir, and yogurt also introduce beneficial bacteria directly into your gut. Try to include a small serving of fermented food with at least one meal each day.
</p>

<h2>Take the First Step</h2>
<p>
  If you suspect your gut health may be at the root of your symptoms, we encourage you to schedule a consultation. Understanding your microbiome is the first step toward reclaiming your vitality, and our team at Purety Clinic has the expertise to guide you through the process.
</p>`
  },
  {
    id: "hormonal-balance",
    title: "Holistic Approaches to Hormonal Balance",
    excerpt: "Feeling fatigued? Hormonal imbalances are often the culprit. We explore bioidentical hormone replacement therapy (BHRT) and natural strategies for restoring equilibrium.",
    date: "July 30, 2023",
    author: "Dr. Dena Birch",
    authorImage: "https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612849682752-20P4409HYPXT6ALS0FF3/Holistic+Dr.+Dena+Birch",
    authorTitle: "Naturopathic Doctor",
    image: "/images/blog-hormones.jpg",
    category: "Women's Health",
    tags: ["Hormones", "BHRT", "WomensHealth", "Fatigue"],
    content: `<p class="lead text-xl text-muted-foreground mb-8">
  Hormones are your body's chemical messengers, orchestrating everything from your energy levels and metabolism to your mood, sleep quality, and reproductive health. When these messengers fall out of balance — even slightly — the effects can be felt throughout your entire body. At Purety Family Medical Clinic, Dr. Dena Birch specializes in identifying and correcting hormonal imbalances using a combination of bioidentical hormones and natural therapies.
</p>

<h2>Understanding Hormonal Imbalance</h2>
<p>
  Hormonal imbalances can affect anyone at any age, though they become increasingly common during major life transitions: puberty, pregnancy, perimenopause, menopause, and andropause (male menopause). But hormonal disruption isn't limited to reproductive hormones. Your thyroid, adrenals, insulin, and cortisol all play critical roles in how you feel day to day.
</p>
<p>
  Common symptoms of hormonal imbalance include:
</p>
<ul>
  <li>Persistent fatigue that doesn't improve with rest</li>
  <li>Unexplained weight gain, especially around the midsection</li>
  <li>Difficulty sleeping or waking unrefreshed</li>
  <li>Brain fog, poor concentration, and memory lapses</li>
  <li>Mood swings, irritability, anxiety, or depression</li>
  <li>Low libido or sexual dysfunction</li>
  <li>Hair thinning or loss</li>
  <li>Hot flashes and night sweats</li>
  <li>Irregular or painful periods</li>
  <li>Dry skin, brittle nails, or premature aging</li>
</ul>

<h2>Why Conventional Approaches Often Fall Short</h2>
<p>
  In conventional medicine, hormonal symptoms are often treated in isolation. You might receive a prescription for an antidepressant for mood changes, a sleep aid for insomnia, and a separate medication for hot flashes — without anyone looking at the hormonal picture as a whole. Additionally, conventional hormone replacement therapy (HRT) typically uses synthetic hormones that are structurally different from the hormones your body naturally produces, which can lead to unwanted side effects.
</p>

<h2>Bioidentical Hormone Replacement Therapy (BHRT)</h2>
<p>
  Bioidentical hormones are derived from plant sources and are molecularly identical to the hormones your body produces naturally. Because they match your body's own hormones perfectly, they tend to be better tolerated with fewer side effects than their synthetic counterparts.
</p>
<p>
  At Purety Clinic, we use BHRT as part of a comprehensive approach to hormonal balance. Before prescribing any hormones, Dr. Birch conducts thorough testing — including blood work, saliva testing, and sometimes urine hormone panels — to get a precise picture of your hormonal landscape. Treatment is then customized to your individual needs, with careful monitoring and dose adjustments over time.
</p>
<p>
  BHRT can be administered in several forms depending on your needs and preferences:
</p>
<ul>
  <li>Topical creams and gels</li>
  <li>Sublingual drops or troches</li>
  <li>Pellet therapy (slow-release hormone pellets placed under the skin)</li>
  <li>Oral capsules</li>
</ul>

<h2>Beyond Hormones: A Whole-Body Approach</h2>
<p>
  While BHRT can be transformative, hormones don't exist in a vacuum. At Purety Clinic, we address the full picture of factors that influence hormonal health:
</p>
<p>
  <strong>Nutrition:</strong> Certain nutrients are essential for hormone production and metabolism. We may recommend specific dietary changes or supplements like vitamin D, magnesium, B vitamins, zinc, or adaptogenic herbs to support your hormonal system.
</p>
<p>
  <strong>Stress management:</strong> Chronic stress drives cortisol production, which can suppress thyroid function, deplete progesterone, and disrupt insulin sensitivity. We work with patients to develop sustainable stress-reduction practices.
</p>
<p>
  <strong>Gut health:</strong> Your gut plays a crucial role in hormone metabolism. An imbalanced microbiome can interfere with estrogen detoxification and contribute to estrogen dominance. Healing the gut is often an essential step in restoring hormonal balance.
</p>
<p>
  <strong>Toxin exposure:</strong> Many common environmental chemicals — found in plastics, personal care products, pesticides, and household cleaners — act as endocrine disruptors, mimicking or blocking your natural hormones. We help patients identify and reduce their toxic burden.
</p>
<p>
  <strong>Sleep optimization:</strong> Quality sleep is when your body does much of its hormonal repair work. We address sleep disturbances as a priority in any hormonal health plan.
</p>

<h2>Hormonal Health at Every Stage of Life</h2>
<p>
  Whether you're a woman navigating the challenges of perimenopause, a man experiencing the gradual decline of testosterone, or a younger person dealing with thyroid or adrenal dysfunction, hormonal balance is achievable. The key is working with a practitioner who understands the intricate interplay between your hormones and is willing to take the time to find the right solution for you.
</p>
<p>
  At Purety Family Medical Clinic, we've helped hundreds of patients reclaim their energy, clarity, and vitality through thoughtful hormonal support. If you're ready to stop struggling and start feeling like yourself again, we're here to help.
</p>`
  },

  // --- Hidden Posts ---
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
