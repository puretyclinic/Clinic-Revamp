import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Activity, Zap, Microscope, Leaf } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button className="w-full flex items-center justify-between py-5 text-left" onClick={() => setOpen(!open)} data-testid={`faq-toggle-${question.slice(0, 20).replace(/\s/g, "-")}`}>
        <span className="font-bold text-foreground text-lg pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary shrink-0" />}
      </button>
      {open && <div className="pb-5 text-muted-foreground leading-relaxed">{answer}</div>}
    </div>
  );
}

const FAQS = [
  { question: "What is mold illness (CIRS)?", answer: "Mold illness — formally known as Chronic Inflammatory Response Syndrome (CIRS) — is a systemic, multi-symptom condition triggered by exposure to water-damaged buildings and the biotoxins produced by mold, bacteria, and actinomycetes. Unlike a simple mold allergy, CIRS involves a genetically mediated inability to clear biotoxins from the body, resulting in chronic, widespread inflammation that affects nearly every organ system." },
  { question: "What are the most common symptoms of mold illness?", answer: "CIRS symptoms are notoriously broad and often misattributed to other conditions. The most common include profound fatigue, brain fog (difficulty concentrating, word-finding problems, memory loss), sinus congestion and respiratory issues, joint and muscle pain, light and sound sensitivity, mood changes (anxiety, depression, irritability), sleep disruption, and skin sensitivity. Many patients have been dismissed or misdiagnosed with fibromyalgia, chronic fatigue syndrome, or depression before finding the correct answer." },
  { question: "How is mold illness diagnosed?", answer: "CIRS diagnosis involves a combination of history (known water-damaged building exposure), symptom cluster analysis (using the visual contrast sensitivity test and symptom count criteria), and lab testing — including TGF-beta-1, MMP-9, MSH, VEGF, VIP, C4a, and HLA-DR genotyping (which identifies whether a patient has the 'mold susceptibility' gene variants). Dr. Birch uses a comprehensive panel to confirm diagnosis and guide treatment." },
  { question: "Can EBO2 ozone therapy help mold illness or CIRS?", answer: "Yes. EBO2 (extracorporeal blood ozonation with UV irradiation) is one of the most powerful detoxification and immune-modulating tools available for CIRS patients. By passing blood through an extracorporeal circuit with high-concentration ozone and UV light, EBO2 supports immune regulation, reduces systemic inflammation, and supports the body's capacity to process and clear biotoxins. Many CIRS patients with significant inflammatory burden report meaningful improvements in fatigue, brain fog, and overall function following an EBO2 series." },
  { question: "How long does mold illness treatment take?", answer: "Treatment duration for CIRS is highly individual. Mild presentations with early identification may resolve in 3–6 months with consistent treatment and confirmed remediation of the source exposure. Long-standing or severe cases often require 12–24 months of active treatment, including biotoxin binders, targeted supplements, hormone support, and procedural therapies like EBO2. Critically, no treatment will succeed if the patient remains in an actively contaminated environment." },
  { question: "Does Dr. Birch treat mold illness in Santa Barbara?", answer: "Yes. Dr. Jonathan Birch, NMD at Purety Family Medical Clinic (2323 Oak Park Ln, Suite 102, Santa Barbara) evaluates and treats patients with mold illness and CIRS using an integrative, evidence-informed protocol. We serve patients from Santa Barbara, Ventura, Los Angeles, and throughout California. Telehealth consultations are available for initial assessment and follow-up care for patients who cannot travel." },
  { question: "What makes Purety Clinic's approach to mold illness different?", answer: "We combine the Shoemaker Protocol framework with advanced procedural therapies — particularly EBO2 ozone therapy — that most CIRS clinics do not offer. Rather than relying solely on binders and supplements, we address the systemic inflammation and immune dysregulation of CIRS with IV NAD+, EBO2, and individualized naturopathic support. Dr. Birch also orders the full CIRS biomarker panel and does not skip steps, ensuring treatment is properly sequenced and measurable." },
];

const SYMPTOMS = [
  "Profound fatigue not improved by rest",
  "Brain fog — concentration difficulty, memory loss, word-finding",
  "Sinus congestion and respiratory issues",
  "Joint and muscle aches and pain",
  "Light and sound sensitivity",
  "Mood disturbances — anxiety, depression, irritability",
  "Chronic sleep disruption",
  "Skin rashes and heightened sensitivities",
  "Neurological symptoms — tingling, tremors, numbness",
  "Digestive issues — bloating, nausea, abdominal discomfort",
];

const TREATMENTS = [
  {
    icon: <Activity className="w-7 h-7 text-primary" />,
    title: "EBO2 Ozone Therapy",
    desc: "Extracorporeal blood ozonation delivers high-concentration ozone and UV irradiation directly to circulating blood — supporting immune modulation, reducing systemic inflammation, and enhancing biotoxin clearance.",
    href: "/ebo2-santa-barbara",
  },
  {
    icon: <Microscope className="w-7 h-7 text-primary" />,
    title: "NAD+ IV Therapy",
    desc: "Mold illness drives mitochondrial dysfunction and neurological stress. IV NAD+ replenishes depleted cellular energy stores, supporting cognitive function, neural repair, and overall resilience.",
    href: "/services/iv-therapy",
  },
  {
    icon: <Leaf className="w-7 h-7 text-primary" />,
    title: "Naturopathic Detox Protocol",
    desc: "Prescription-grade biotoxin binders (cholestyramine, Welchol), drainage support, anti-inflammatory herbals, and individualized supplementation — sequenced according to CIRS treatment protocols.",
    href: "/services/naturopathic",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    title: "Comprehensive CIRS Testing",
    desc: "Full CIRS biomarker panel including TGF-beta-1, MMP-9, MSH, C4a, VEGF, VIP, and HLA-DR genotyping — confirming diagnosis and guiding treatment sequencing at every stage.",
    href: "/services/naturopathic",
  },
];

export default function MoldIllness() {
  useEffect(() => {
    document.title = "Mold Illness Treatment Santa Barbara, CA | CIRS Doctor | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Purety Clinic in Santa Barbara specializes in mold illness and CIRS treatment — EBO2 ozone therapy, NAD+ IV, and naturopathic detox protocols. Dr. Jonathan Birch NMD. Serving Los Angeles, Ventura, and all of California. Call (805) 500-8300.");

    const conditionSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Mold Illness",
      "alternateName": ["CIRS", "Chronic Inflammatory Response Syndrome", "Mycotoxin Illness", "Mold Toxicity", "Biotoxin Illness"],
      "description": "Mold illness (CIRS — Chronic Inflammatory Response Syndrome) is a systemic multi-symptom condition caused by exposure to water-damaged buildings. Genetically susceptible individuals cannot clear biotoxins, resulting in chronic inflammation affecting the neurological, immune, endocrine, and respiratory systems.",
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalTherapy", "name": "NAD+ IV Therapy", "url": "https://puretyclinic.com/services/iv-therapy" },
        { "@type": "MedicalTherapy", "name": "Naturopathic Detox Protocol (Shoemaker Protocol)", "url": "https://puretyclinic.com/services/naturopathic" },
        { "@type": "MedicalTherapy", "name": "Comprehensive CIRS Biomarker Testing", "url": "https://puretyclinic.com/services/naturopathic" }
      ]
    };

    const localSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Santa Barbara integrative medicine clinic specializing in mold illness and CIRS treatment including EBO2 ozone therapy, NAD+ IV, and naturopathic detox protocols.",
      "url": "https://puretyclinic.com/conditions/mold-illness",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "77", "bestRating": "5" }
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

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://puretyclinic.com/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://puretyclinic.com/conditions" },
        { "@type": "ListItem", "position": 3, "name": "Mold Illness / CIRS Treatment", "item": "https://puretyclinic.com/conditions/mold-illness" }
      ]
    };

    const schemas = [
      { id: "mold-condition-schema", data: conditionSchema },
      { id: "mold-local-schema", data: localSchema },
      { id: "mold-faq-schema", data: faqSchema },
      { id: "mold-breadcrumb-schema", data: breadcrumbSchema },
    ];
    schemas.forEach(({ id, data }) => {
      const s = document.createElement("script");
      s.type = "application/ld+json"; s.id = id;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    });
    return () => schemas.forEach(({ id }) => document.getElementById(id)?.remove());
  }, []);

  function scrollToForm() {
    const el = document.getElementById("contact-form");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow">

        {/* Hero */}
        <section className="relative pt-32 pb-24 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <FadeIn>
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-white/20">
                Santa Barbara, CA
              </span>
              <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
                Mold Illness &amp; CIRS Treatment in<br /><span className="italic text-accent">Santa Barbara, CA</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
                Chronic Inflammatory Response Syndrome (CIRS) is one of the most under-diagnosed and misunderstood conditions in medicine. We offer comprehensive biotoxin illness evaluation and integrative treatment — including EBO2 ozone therapy, NAD+ IV, and naturopathic detox protocols.
              </p>
              <p className="text-sm text-white/60 mb-8">
                EBO2 Ozone Therapy · NAD+ IV Therapy · Naturopathic Detox · CIRS Lab Testing<br />
                Serving Los Angeles, Ventura, Orange County, and all of California
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={scrollToForm} data-testid="button-mold-hero-cta">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300" data-testid="link-mold-hero-call">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Trust bar */}
        <div className="bg-white border-b border-gray-100 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> EBO2 &amp; CIRS Specialist</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Naturopathic Medical Doctor (NMD)</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 5.0 ★ — 77 Google Reviews</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Remote Consultations Available</div>
            </div>
          </div>
        </div>

        {/* What is mold illness */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Why Mold Illness Is So Often Missed</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Mold illness — or Chronic Inflammatory Response Syndrome (CIRS) — is not a simple mold allergy. It is a complex, genetically driven condition in which roughly 25% of the population lacks the HLA-DR immune variants needed to properly process and excrete biotoxins produced in water-damaged buildings.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For these individuals, biotoxin exposure triggers a cascade of systemic inflammation that disrupts <strong>hormone regulation</strong>, <strong>neurological function</strong>, <strong>immune signaling</strong>, and <strong>cellular energy production</strong>. Symptoms are broad — fatigue, brain fog, joint pain, respiratory issues, mood changes — which is why patients are so frequently misdiagnosed.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Effective treatment requires identifying and removing the source exposure, supporting biotoxin clearance with binders, and addressing the systemic inflammatory burden with targeted therapies including EBO2 ozone therapy and IV NAD+.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl mb-5">Common Mold Illness Symptoms</h3>
                  <ul className="space-y-3">
                    {SYMPTOMS.map((s, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Integrative Mold Illness Treatments
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Each protocol is sequenced to address the root mechanisms of CIRS — not just manage symptoms.
                </p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {TREATMENTS.map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/5 rounded-xl">{t.icon}</div>
                      <h3 className="font-bold text-foreground text-lg">{t.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{t.desc}</p>
                    <Link href={t.href}>
                      <a className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-5 hover:underline" data-testid={`link-mold-treatment-${i}`}>
                        Learn more <ArrowRight className="w-4 h-4" />
                      </a>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* About Dr. Birch */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Dr. Jonathan Birch, NMD, RMSK
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dr. Birch has been practicing integrative and naturopathic medicine since 2014, with extensive experience in complex, multi-system chronic illness — including biotoxin illness and CIRS. He combines the evidence-based Shoemaker Protocol framework with advanced procedural therapies not available at most CIRS clinics, including EBO2 extracorporeal ozone therapy and high-dose IV NAD+.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With 2,500+ ozone therapy sessions performed and a 5.0-star rating from 77 Google reviews, Dr. Birch brings deep procedural experience to the systemic inflammation and mitochondrial dysfunction central to mold illness.
                </p>
                <Link href="/dr-jonathan-birch">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" data-testid="button-mold-drbirth-link">
                    View Full Bio <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Mold Illness &amp; CIRS FAQ
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                {FAQS.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
