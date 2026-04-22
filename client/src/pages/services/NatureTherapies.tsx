import React, { useEffect, useState } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, Sun, Droplets, Mountain, CheckCircle2, ChevronDown, ChevronUp, Wind, Flower } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "wouter";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-nature-${question.slice(0, 20).replace(/\s/g, '-')}`}
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
    question: "What is forest bathing (Shinrin-yoku) and does it have clinical evidence?",
    answer: "Shinrin-yoku (forest bathing) is the practice of immersive time in a forest environment with mindful attention to sensory experience. It originated in Japan in the 1980s and is now a formal component of Japanese public health policy. The clinical evidence is robust: studies consistently show reductions in cortisol, blood pressure, and sympathetic nervous system activity after forest bathing sessions. Natural killer (NK) cell activity — a key measure of immune function — has been shown to increase by 50% or more after a single day of forest exposure, with effects lasting up to 30 days. Phytoncides (antimicrobial compounds released by trees) inhaled during forest immersion are believed to be a key mechanism."
  },
  {
    question: "What is grounding therapy (earthing) and how does it work?",
    answer: "Grounding (earthing) refers to direct physical contact with the earth's surface — walking barefoot on grass, soil, sand, or stone. The earth carries a mild negative electrical charge, and contact transfers free electrons into the body. These electrons act as antioxidants, neutralizing free radicals and reducing oxidative stress. Published research has shown grounding to reduce chronic inflammation, improve sleep, reduce cortisol dysregulation, thin the blood (reducing clotting risk), and improve autonomic nervous system balance. Santa Barbara's beaches and parks provide ideal grounding environments year-round."
  },
  {
    question: "What is constitutional hydrotherapy and how is it used naturopathically?",
    answer: "Constitutional hydrotherapy is a naturopathic technique using alternating applications of hot and cold water towels to the chest and back. The thermal contrast stimulates circulation, enhances lymphatic flow, activates the immune system, and supports detoxification through the skin. It is used for chronic fatigue, immune deficiency, digestive disorders, and as a general vitality-building practice. Purety Clinic integrates hydrotherapy principles into treatment plans for appropriate patients."
  },
  {
    question: "Is botanical medicine (herbal medicine) evidence-based?",
    answer: "Many botanical medicines have substantial clinical evidence — though the evidence base varies considerably by herb and condition. Well-studied botanicals include St. John's Wort (mild-to-moderate depression), Echinacea (cold and flu duration reduction), Berberine (blood sugar and lipid regulation — comparable to metformin in some studies), Ashwagandha (cortisol and stress reduction), Milk Thistle (liver protection), and Turmeric/Curcumin (anti-inflammatory). Dr. Birch prescribes botanicals based on your specific condition, using professional-grade products with verified potency and purity."
  },
  {
    question: "Can nature therapies replace conventional medical treatment?",
    answer: "No — and we never position them that way. Nature therapies are foundational healing practices that enhance the body's capacity for self-regulation, resilience, and recovery. They work best as part of a comprehensive integrative protocol alongside appropriate conventional care, nutritional medicine, and targeted interventions. Think of nature therapies as lowering the overall physiological burden on your body — reducing inflammation, improving stress resilience, and supporting immune function — which makes everything else work better."
  },
  {
    question: "Are homeopathic remedies used at Purety Clinic?",
    answer: "Yes, homeopathy is part of the naturopathic toolkit, particularly for sensitive patients, children, and cases where conventional and herbal options are limited. Dr. Dena Birch uses classical homeopathy as part of pediatric and women's health care. We recognize that the evidence base for homeopathy is mixed and approach it as one tool among many — particularly valuable for patients who respond well to it or who cannot tolerate other interventions."
  },
];

const MODALITIES = [
  {
    icon: Mountain,
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-700 bg-green-100",
    title: "Forest Bathing (Shinrin-Yoku)",
    tagline: "Proven immune & stress benefits from forest immersion",
    evidence: "NK cell activity +50%, cortisol reduction, blood pressure improvement (published in multiple peer-reviewed studies)",
    howUsed: "Guided forest immersion sessions, mindful nature walks, and prescription of regular outdoor time as part of your treatment protocol.",
  },
  {
    icon: Leaf,
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-700 bg-amber-100",
    title: "Botanical Medicine",
    tagline: "Plants as precision medicine — from adaptogenic herbs to clinical-grade extracts",
    evidence: "Ashwagandha, berberine, St. John's Wort, milk thistle, and dozens more with clinical trial support.",
    howUsed: "Professional-grade herbal tinctures, capsules, or teas prescribed based on your condition and lab results.",
  },
  {
    icon: Sun,
    color: "bg-yellow-50 border-yellow-100",
    iconColor: "text-yellow-700 bg-yellow-100",
    title: "Hydrotherapy",
    tagline: "Alternating hot and cold to drive circulation and detoxification",
    evidence: "Increases white blood cell count, improves lymphatic flow, reduces pain and fatigue in chronic illness.",
    howUsed: "Constitutional hydrotherapy protocols integrated into treatment plans for chronic fatigue, immune deficiency, and digestive conditions.",
  },
  {
    icon: Droplets,
    color: "bg-sky-50 border-sky-100",
    iconColor: "text-sky-700 bg-sky-100",
    title: "Grounding / Earthing",
    tagline: "Direct earth contact reduces inflammation and restores autonomic balance",
    evidence: "Reduces cortisol dysregulation, improves sleep latency, reduces inflammatory markers (published in Journal of Inflammation Research).",
    howUsed: "Prescribed as part of a lifestyle protocol — barefoot walks on Santa Barbara's beaches and parks, grounding mats for indoor use.",
  },
  {
    icon: Flower,
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-700 bg-purple-100",
    title: "Homeopathy",
    tagline: "Energetic medicine for sensitive patients and children",
    evidence: "Most beneficial in sensitive patient populations including pediatrics; individualized prescribing is key.",
    howUsed: "Classical homeopathic case-taking and prescribing, particularly for Dr. Dena Birch's pediatric and women's health patients.",
  },
  {
    icon: Wind,
    color: "bg-stone-50 border-stone-100",
    iconColor: "text-stone-700 bg-stone-100",
    title: "Clinical Nutrition",
    tagline: "Therapeutic diets as medicine — FODMAP, AIP, ketogenic, and more",
    evidence: "Dietary interventions have among the strongest evidence bases in all of medicine across dozens of conditions.",
    howUsed: "Personalized therapeutic diet design based on your condition, stool analysis, food sensitivity testing, and metabolic goals.",
  },
];

export default function NatureTherapies() {
  usePageSEO({
    title: "Nature Therapies Santa Barbara | Forest Bathing, Hydrotherapy, Botanicals | Purety Clinic",
    description: "Nature-based therapies at Purety Clinic in Santa Barbara: forest bathing (Shinrin-yoku), grounding, hydrotherapy, botanical medicine, and clinical nutrition for whole-body healing.",
    canonicalPath: "/services/nature-therapies",
  });
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org", "@type": "MedicalTherapy",
      "name": "Nature Therapies",
      "alternateName": ["Forest Bathing", "Shinrin-Yoku", "Grounding Therapy", "Earthing", "Nature Immersion Therapy", "Botanical Medicine", "Hydrotherapy", "Constitutional Hydrotherapy"],
      "description": "Nature-based healing therapies at Purety Family Medical Clinic in Santa Barbara, CA. Forest bathing, grounding, hydrotherapy, botanical medicine, and clinical nutrition to reduce stress, lower cortisol, and support recovery.",
      "procedureType": "Therapeutic",
      "performer": { "@type": "Physician", "name": "Dr. Jonathan Birch", "worksFor": { "@type": "MedicalClinic", "name": "Purety Family Medical Clinic", "telephone": "+1-805-500-8300", "url": "https://puretyclinic.com" } }
    };
    const localSchema = {
      "@context": "https://schema.org", "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic", "url": "https://puretyclinic.com/services/nature-therapies",
      "telephone": "+1-805-500-8300", "description": "Nature therapy and forest bathing programs in Santa Barbara, CA. Serving Ventura, Los Angeles, Thousand Oaks, Goleta, and Southern California.",
      "address": { "@type": "PostalAddress", "streetAddress": "2323 Oak Park Ln, Suite 102", "addressLocality": "Santa Barbara", "addressRegion": "CA", "postalCode": "93105", "addressCountry": "US" },
      "medicalSpecialty": "IntegrativeMedicine", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "77", "bestRating": "5" }
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
      { id: "nature-therapy-schema", data: schema },
      { id: "nature-local-schema", data: localSchema },
      { id: "nature-faq-schema", data: faqSchema },
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <Leaf className="w-4 h-4" />
                <span>Foundational Naturopathic Modalities</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Nature <span className="italic text-accent">Therapies</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                The healing power of nature isn't a metaphor — it's measurable physiology. Forest bathing, grounding, hydrotherapy, and botanical medicine are evidence-informed practices that reduce inflammation, restore autonomic balance, and build long-term resilience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }} data-testid="button-nature-consult">
                  Book Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Nature Works */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Why Nature Heals</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Human beings evolved in natural environments. The chronic absence of nature exposure creates measurable physiological dysregulation — and its restoration produces equally measurable benefits.</p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: "50%+", label: "Increase in NK cell activity", sub: "After a single day of forest immersion (Qing Li, Nippon Medical School)" },
                { stat: "↓23%", label: "Cortisol reduction", sub: "Consistent across multiple forest bathing studies, equivalent to stress-reduction medication in some trials" },
                { stat: "↑13%", label: "Heart rate variability improvement", sub: "HRV is a key measure of autonomic nervous system health and cardiovascular resilience" },
              ].map(({ stat, label, sub }) => (
                <FadeIn key={stat} className="text-center p-6 bg-green-50 rounded-2xl border border-green-100">
                  <div className="font-serif text-4xl text-green-700 mb-2">{stat}</div>
                  <div className="font-bold text-foreground mb-2">{label}</div>
                  <div className="text-xs text-muted-foreground">{sub}</div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Modalities */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Nature Therapy Modalities</h2>
              <p className="text-muted-foreground">Each is prescribed individually based on your condition and treatment goals.</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {MODALITIES.map(({ icon: Icon, color, iconColor, title, tagline, evidence, howUsed }) => (
                <FadeIn key={title} className={`p-8 rounded-2xl border ${color}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{title}</h3>
                  <p className="text-xs font-semibold text-primary mb-3">{tagline}</p>
                  <p className="text-xs text-muted-foreground mb-2"><span className="font-semibold">Evidence:</span> {evidence}</p>
                  <p className="text-xs text-muted-foreground"><span className="font-semibold">How we use it:</span> {howUsed}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Santa Barbara advantage */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <FadeIn>
              <Mountain className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="font-serif text-4xl mb-6">Santa Barbara's Natural Advantage</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                Few cities offer what Santa Barbara does: year-round mild weather, mountains within 30 minutes, 30+ miles of Pacific coastline, and open hiking corridors through oak woodland and chaparral. Integrating nature into your healing protocol is not aspirational here — it's logistically easy. We prescribe specific nature practices as part of your treatment plan and provide guidance on how to use Santa Barbara's natural environment therapeutically.
              </p>
              <ul className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground max-w-2xl mx-auto">
                {[
                  "Mission Canyon & Botanic Garden — forest bathing",
                  "East Beach & Leadbetter Beach — grounding",
                  "Los Padres National Forest — extended immersion",
                ].map(s => (
                  <li key={s} className="flex items-start gap-2 text-left bg-muted/30 p-4 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{s}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Frequently Asked Questions</h2>
            </FadeIn>
            <FadeIn>
              <div className="divide-y divide-gray-200 bg-white rounded-2xl px-6">
                {FAQS.map(f => <FAQItem key={f.question} question={f.question} answer={f.answer} />)}
              </div>
            </FadeIn>
            <FadeIn className="mt-10 text-center">
              <Link href="/blog/healing-power-nature" className="text-primary font-semibold text-sm hover:underline">Read: The Healing Power of Nature — What the Research Shows →</Link>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Interested in Nature Therapies?" subheading="Contact us to learn how foundational naturopathic practices can be integrated into your treatment protocol." formSource="Nature Therapies Page" />
      </main>
      <Footer />
    </div>
  );
}
