import React, { useEffect, useState } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Baby, Flower, Heart, CheckCircle2, ChevronDown, ChevronUp, Stethoscope, Microscope, Leaf } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { usePageSEO } from "@/hooks/usePageSEO";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-natmed-${question.slice(0, 20).replace(/\s/g, '-')}`}
      >
        <span className="font-bold text-foreground text-base pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary shrink-0" />}
      </button>
      {open && <div className="pb-5 text-muted-foreground leading-relaxed text-sm">{answer}</div>}
    </div>
  );
}

const FAQS = [
  {
    question: "What is a Naturopathic Medical Doctor (NMD) and how do they differ from an MD?",
    answer: "A Naturopathic Medical Doctor (NMD or ND) completes a 4-year graduate medical program accredited by the Council on Naturopathic Medical Education, covering the same foundational sciences as conventional medicine (anatomy, physiology, biochemistry, pharmacology, pathology) plus extensive training in nutrition, botanical medicine, homeopathy, physical medicine, and counseling. In California, licensed NMDs can diagnose, treat, and prescribe medications. The key difference is philosophy: NMDs are trained to identify and remove the root causes of illness rather than primarily managing symptoms. Dr. Jonathan Birch also trained extensively in regenerative medicine and advanced interventional procedures (PRP, ozone, plasma exchange, FMT) that go well beyond the typical scope of either naturopathic or conventional primary care."
  },
  {
    question: "What conditions does naturopathic medicine treat well?",
    answer: "Naturopathic medicine excels at chronic, complex conditions that don't respond well to conventional symptom management: gut disorders (IBS, SIBO, IBD), autoimmune disease, hormonal imbalances (thyroid, adrenal, sex hormones), chronic fatigue, long COVID, recurrent infections, allergies, skin conditions (eczema, psoriasis), metabolic syndrome, and mood disorders. It is also effective for healthy people seeking optimization — improving energy, body composition, immune resilience, and longevity."
  },
  {
    question: "Does Purety Clinic practice functional medicine?",
    answer: "Yes. Dr. Birch integrates functional medicine principles — the use of advanced laboratory testing to identify upstream dysfunction in metabolic pathways, immune function, gut microbiome, nutrient status, and hormones. Rather than diagnosing based solely on symptoms and treating with a single drug, functional medicine asks 'why is this system failing?' and addresses it through nutrition, targeted supplementation, lifestyle modification, and where appropriate, botanical or bioidentical hormone protocols."
  },
  {
    question: "Can I use naturopathic medicine alongside my conventional care?",
    answer: "Absolutely — and this is how most of our patients use it. Integrative medicine means working alongside your oncologist, cardiologist, or primary care physician, not replacing them. We communicate with your other providers when relevant and can coordinate care. Many patients come to us specifically because their conventional workup was normal but they still feel unwell — a situation where functional medicine testing often reveals underlying drivers that standard labs miss."
  },
  {
    question: "What does a first visit look like?",
    answer: "New patient appointments are 60–90 minutes. Dr. Birch takes a detailed history covering your symptoms, diet, sleep, stress, medical background, and previous treatments. Based on this, he orders a targeted lab panel — which often includes functional tests not available through conventional labs, such as comprehensive stool analysis, organic acids, DUTCH hormone testing, or food sensitivity panels. A follow-up visit reviews your results and establishes your treatment plan. We don't rush, and we don't use cookie-cutter protocols."
  },
  {
    question: "Does Dr. Dena Birch see patients for women's health and pediatrics?",
    answer: "Yes. Dr. Dena Birch specializes in women's health (PCOS, menstrual irregularities, perimenopause, thyroid disease, fertility support) and holistic pediatrics (well-child care, immune support, ADHD, eczema, gut health in children). She combines naturopathic medicine with lifestyle medicine to support patients at every stage of life."
  },
];

const CONDITIONS = [
  { category: "Digestive", items: ["IBS & SIBO", "Leaky gut / intestinal permeability", "IBD (Crohn's, ulcerative colitis)", "GERD / acid reflux", "Constipation & bloating"] },
  { category: "Hormonal", items: ["Hypothyroidism & Hashimoto's", "Adrenal fatigue / HPA dysregulation", "PCOS", "Perimenopause & menopause", "Low testosterone (men)"] },
  { category: "Immune & Infections", items: ["Long COVID / post-viral syndrome", "Lyme disease & co-infections", "Recurrent infections", "Autoimmune disease", "CIRS / mold illness"] },
  { category: "Metabolic & Energy", items: ["Chronic fatigue syndrome", "Metabolic syndrome / insulin resistance", "Mitochondrial dysfunction", "Weight optimization", "Nutrient deficiencies"] },
];

export default function NaturopathicMedicine() {
  usePageSEO({
    title: "Naturopathic Medicine Santa Barbara | Root-Cause Care | Purety Clinic",
    description: "Naturopathic and functional medicine with Dr. Jonathan Birch NMD in Santa Barbara. Root-cause care for chronic illness, hormones, gut health, and longevity. Call (805) 500-8300.",
    canonicalPath: "/services/naturopathic",
  });
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org", "@type": "Physician",
      "name": "Dr. Jonathan Birch, NMD, RMSK",
      "medicalSpecialty": ["NaturopathicMedicine", "IntegrativeMedicine", "FunctionalMedicine"],
      "description": "Dr. Jonathan Birch is a Naturopathic Medical Doctor (NMD) offering holistic, root-cause medicine at Purety Family Medical Clinic in Santa Barbara, CA.",
      "worksFor": { "@type": "MedicalClinic", "name": "Purety Family Medical Clinic", "url": "https://puretyclinic.com", "telephone": "+1-805-500-8300", "address": { "@type": "PostalAddress", "streetAddress": "2323 Oak Park Ln, Suite 102", "addressLocality": "Santa Barbara", "addressRegion": "CA", "postalCode": "93105" } },
      "hasCredential": [{ "@type": "EducationalOccupationalCredential", "credentialCategory": "NMD" }, { "@type": "EducationalOccupationalCredential", "credentialCategory": "RMSK" }]
    };
    const localSchema = {
      "@context": "https://schema.org", "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic", "url": "https://puretyclinic.com/services/naturopathic",
      "telephone": "+1-805-500-8300", "description": "Naturopathic and functional medicine in Santa Barbara, CA. Root-cause care serving Ventura, Los Angeles, Thousand Oaks, and Southern California.",
      "address": { "@type": "PostalAddress", "streetAddress": "2323 Oak Park Ln, Suite 102", "addressLocality": "Santa Barbara", "addressRegion": "CA", "postalCode": "93105", "addressCountry": "US" },
      "medicalSpecialty": "NaturopathicMedicine", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "77", "bestRating": "5" }
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    };
    const schemas = [
      { id: "natmed-physician-schema", data: schema },
      { id: "natmed-local-schema", data: localSchema },
      { id: "natmed-faq-schema", data: faqSchema },
    ];
    schemas.forEach(({ id, data }) => {
      const s = document.createElement("script");
      s.type = "application/ld+json"; s.id = id;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    });
    return () => schemas.forEach(({ id }) => document.getElementById(id)?.remove());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-white/20">
                Root Cause Resolution
              </span>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Naturopathic & <span className="italic text-accent">Functional Medicine</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Finding and fixing the underlying causes of illness — not just managing symptoms. Comprehensive care for the whole family from licensed NMDs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" asChild data-testid="button-natmed-consult">
                  <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                    Book New Patient Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* NMD vs MD */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">The Naturopathic Difference</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Same medical training as an MD in foundational sciences. Different philosophy for what to do with that knowledge.</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn className="bg-muted/20 rounded-2xl p-8">
                <Stethoscope className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-4">Conventional Medicine Asks:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "What drug suppresses this symptom?",
                    "Are your labs within normal range?",
                    "Which specialist manages this?",
                    "What's the standard protocol for this diagnosis?",
                  ].map(q => <li key={q} className="flex items-start gap-2"><span className="text-gray-400">→</span>{q}</li>)}
                </ul>
              </FadeIn>
              <FadeIn delay={0.1} className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                <Microscope className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-4">Naturopathic Medicine Asks:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Why is this symptom happening in the first place?",
                    "Are your labs optimal — not just normal?",
                    "How are all of your body systems interacting?",
                    "What is the least invasive intervention that addresses the root cause?",
                  ].map(q => <li key={q} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{q}</li>)}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Conditions We Treat</h2>
              <p className="text-muted-foreground">Naturopathic medicine is especially effective for complex, chronic conditions — but works alongside conventional care for acute illness too.</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONDITIONS.map(({ category, items }) => (
                <FadeIn key={category} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-foreground mb-4 border-b border-gray-100 pb-2">{category}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {items.map(i => <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-1" />{i}</li>)}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Women's & Pediatrics */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn className="bg-pink-50 rounded-3xl p-10 border border-pink-100">
                <Flower className="w-10 h-10 text-pink-600 mb-6" />
                <h2 className="font-serif text-3xl mb-4 text-pink-900">Women's Health & Hormones</h2>
                <p className="text-pink-800/80 leading-relaxed mb-6 text-sm">
                  Dr. Dena Birch specializes in hormonal health for women at every life stage — from adolescence through menopause. Her approach combines comprehensive hormone testing (DUTCH), bioidentical hormone therapy when indicated, botanical medicine, and lifestyle protocols.
                </p>
                <ul className="space-y-2 text-sm text-pink-800/80">
                  {["PCOS & irregular cycles", "PMS & PMDD", "Perimenopause & menopause", "Thyroid disorders (Hashimoto's)", "Adrenal fatigue", "Fertility support", "Endometriosis"].map(s => (
                    <li key={s} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" />{s}</li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.1} className="bg-sky-50 rounded-3xl p-10 border border-sky-100">
                <Baby className="w-10 h-10 text-sky-600 mb-6" />
                <h2 className="font-serif text-3xl mb-4 text-sky-900">Holistic Pediatrics</h2>
                <p className="text-sky-800/80 leading-relaxed mb-6 text-sm">
                  Gentle, safe, effective care for infants, children, and adolescents. We support healthy development without over-reliance on antibiotics and provide parents with natural tools for common childhood health challenges.
                </p>
                <ul className="space-y-2 text-sm text-sky-800/80">
                  {["Well-child exams & developmental milestones", "Immune support & recurrent infections", "ADHD & behavioral challenges (holistic)", "Eczema, asthma & food sensitivities", "Gut health & digestive problems", "Vaccine counseling & scheduling guidance"].map(s => (
                    <li key={s} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" />{s}</li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn className="text-center mb-12">
              <Leaf className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-4xl mb-4">Our Therapeutic Toolkit</h2>
              <p className="text-muted-foreground">We combine the best of evidence-based natural medicine with advanced interventional therapies most naturopathic clinics don't offer.</p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Functional Lab Testing", items: ["Comprehensive stool analysis (GI-MAP)", "DUTCH hormone panel", "Organic acids testing", "Food sensitivity panels", "Heavy metal testing"] },
                { title: "Natural Therapies", items: ["Clinical nutrition & therapeutic diets", "Botanical medicine (herbs)", "Nutritional supplementation", "Homeopathy", "Mind-body medicine"] },
                { title: "Advanced Interventions", items: ["FMT (fecal microbiota transplant)", "Ozone therapy (EBO2, Prolozone)", "PRP & regenerative injections", "Bioidentical hormone therapy", "IV nutrient therapy"] },
              ].map(({ title, items }) => (
                <FadeIn key={title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-foreground mb-4">{title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {items.map(i => <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-1" />{i}</li>)}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Frequently Asked Questions</h2>
            </FadeIn>
            <FadeIn>
              <div className="divide-y divide-gray-100">
                {FAQS.map(f => <FAQItem key={f.question} question={f.question} answer={f.answer} />)}
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Interested in Naturopathic Medicine?" subheading="New patient appointments are 60–90 minutes. We take the time to understand your full health picture." formSource="Naturopathic Medicine Page" />
      </main>

      <Footer />
    </div>
  );
}
