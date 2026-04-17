import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Activity, Droplet, Zap } from "lucide-react";
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
  { question: "What is POTS?", answer: "Postural Orthostatic Tachycardia Syndrome (POTS) is a form of dysautonomia — a dysfunction of the autonomic nervous system — characterized by an abnormal increase in heart rate (typically ≥30 bpm) upon standing, accompanied by symptoms like lightheadedness, fatigue, brain fog, and near-fainting. POTS is increasingly recognized as a common complication of Long COVID, autoimmune conditions, viral infections, and connective tissue disorders." },
  { question: "How does therapeutic plasma exchange help POTS?", answer: "Research has identified autoantibodies against G-protein coupled receptors (GPCRs) — particularly adrenergic and muscarinic receptors — in a significant subset of POTS patients. These autoantibodies dysregulate autonomic signaling. Therapeutic plasma exchange (TPE) removes the plasma containing these autoantibodies and replaces it with albumin, potentially resetting the autoimmune component driving symptoms. Several case series and small studies have demonstrated improvement in POTS symptoms following TPE." },
  { question: "How does EBO2 help with dysautonomia?", answer: "EBO2 ozone therapy improves microvascular circulation, reduces systemic inflammation, and supports mitochondrial function — all areas disrupted in POTS. Many patients with dysautonomia report improvements in energy, exercise tolerance, and cognitive function following EBO2 sessions. It also addresses the oxidative stress that commonly accompanies autonomic dysfunction." },
  { question: "Can POTS be caused by Long COVID?", answer: "Yes. Post-COVID POTS is one of the most common Long COVID presentations, estimated to affect a substantial proportion of Long COVID patients. The same mechanisms — autoantibody production, autonomic nerve damage, and immune dysregulation — are thought to underlie both Long COVID and new-onset POTS. Our protocols address these mechanisms directly." },
  { question: "Do you treat POTS in Santa Barbara?", answer: "Yes. Purety Family Medical Clinic at 2323 Oak Park Ln, Suite 102 in Santa Barbara offers therapeutic plasma exchange, EBO2 ozone therapy, and NAD+ IV therapy for POTS and dysautonomia. We serve patients from Santa Barbara, Ventura, Los Angeles, and throughout California. Telehealth consultations are available for initial assessments." },
  { question: "Is POTS an autoimmune condition?", answer: "Research increasingly supports an autoimmune component in a significant subset of POTS patients, particularly those with elevated GPCR autoantibodies. However, POTS is heterogeneous — different patients have different underlying mechanisms including hyperadrenergic POTS, neuropathic POTS, and hypovolemic POTS. A thorough workup helps identify the dominant mechanism and guides treatment selection." },
  { question: "Do you offer telehealth for POTS patients?", answer: "Yes. We offer remote consultations for patients with POTS and dysautonomia throughout California and nationwide. In-person visits are required for TPE and EBO2 procedures, but initial evaluation, lab interpretation, and care coordination can often be completed via telehealth." },
];

const SYMPTOMS = [
  "Heart rate increase ≥30 bpm upon standing",
  "Lightheadedness or near-fainting when upright",
  "Debilitating fatigue — not relieved by sleep",
  "Brain fog — difficulty concentrating and memory issues",
  "Headaches — especially positional or upon standing",
  "Exercise intolerance and post-exertional crashes",
  "Nausea and gastrointestinal disturbances",
  "Temperature dysregulation — heat intolerance",
  "Heart palpitations and chest discomfort",
  "Tremors and shakiness when upright",
];

const TREATMENTS = [
  {
    icon: <Droplet className="w-7 h-7 text-primary" />,
    title: "Therapeutic Plasma Exchange (TPE)",
    desc: "TPE removes GPCR autoantibodies and inflammatory mediators from the plasma that drive autonomic dysfunction in autoimmune POTS — potentially resetting the immune system's dysregulated response.",
    href: "/services/plasma-exchange",
  },
  {
    icon: <Activity className="w-7 h-7 text-primary" />,
    title: "EBO2 Ozone Therapy",
    desc: "Extracorporeal blood ozonation improves microcirculation, reduces systemic inflammation, and supports mitochondrial energy production — addressing the vascular and oxidative drivers of dysautonomia.",
    href: "/ebo2-santa-barbara",
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "NAD+ IV Therapy",
    desc: "IV NAD+ restores cellular energy production at the mitochondrial level, supporting neurological function and reducing the fatigue and cognitive impairment that dominate POTS and dysautonomia.",
    href: "/services/iv-therapy",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    title: "Naturopathic Integrative Care",
    desc: "Comprehensive autonomic testing, nutritional optimization, adrenal and hormonal support, and individualized protocols addressing the root causes of your POTS — not just the symptoms.",
    href: "/services/naturopathic",
  },
];

export default function POTS() {
  useEffect(() => {
    document.title = "POTS & Dysautonomia Treatment Santa Barbara, CA | TPE & EBO2 | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Purety Clinic in Santa Barbara offers integrative POTS and dysautonomia treatment including therapeutic plasma exchange (TPE) and EBO2 ozone therapy. Dr. Jonathan Birch NMD. Serving Los Angeles, Ventura, and all of California. Call (805) 500-8300.");

    const conditionSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Postural Orthostatic Tachycardia Syndrome",
      "alternateName": ["POTS", "Dysautonomia", "Orthostatic Intolerance", "Autonomic Dysfunction"],
      "description": "Postural Orthostatic Tachycardia Syndrome (POTS) is a form of dysautonomia characterized by an abnormal heart rate increase upon standing, causing lightheadedness, fatigue, brain fog, and exercise intolerance. POTS has a significant autoimmune component in many patients.",
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Therapeutic Plasma Exchange (TPE)", "url": "https://puretyclinic.com/services/plasma-exchange" },
        { "@type": "MedicalTherapy", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalTherapy", "name": "NAD+ IV Therapy", "url": "https://puretyclinic.com/services/iv-therapy" },
        { "@type": "MedicalTherapy", "name": "Naturopathic Integrative Care", "url": "https://puretyclinic.com/services/naturopathic" }
      ]
    };

    const localSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Santa Barbara integrative medicine clinic offering POTS and dysautonomia treatment including therapeutic plasma exchange (TPE) and EBO2 ozone therapy.",
      "url": "https://puretyclinic.com/conditions/pots",
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
        { "@type": "ListItem", "position": 3, "name": "POTS & Dysautonomia Treatment", "item": "https://puretyclinic.com/conditions/pots" }
      ]
    };

    const schemas = [
      { id: "pots-condition-schema", data: conditionSchema },
      { id: "pots-local-schema", data: localSchema },
      { id: "pots-faq-schema", data: faqSchema },
      { id: "pots-breadcrumb-schema", data: breadcrumbSchema },
    ];
    schemas.forEach(({ id, data }) => {
      const s = document.createElement("script");
      s.type = "application/ld+json"; s.id = id;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    });
    let canonical = document.getElementById("pots-canonical") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.id = "pots-canonical";
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://puretyclinic.com/conditions/pots";

    return () => {
      schemas.forEach(({ id }) => document.getElementById(id)?.remove());
      document.getElementById("pots-canonical")?.remove();
    };
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
                POTS & Dysautonomia Treatment<br /><span className="italic text-accent">Santa Barbara, CA</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
                Autonomic dysfunction — including POTS — is increasingly linked to autoantibodies and immune dysregulation. We target the root cause, not just the symptoms.
              </p>
              <p className="text-sm text-white/60 mb-8">
                Therapeutic Plasma Exchange · EBO2 Ozone Therapy · NAD+ IV · Naturopathic Support<br />
                Serving Los Angeles, Ventura, Orange County, and all of California
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={scrollToForm} data-testid="button-pots-hero-cta">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300" data-testid="link-pots-hero-call">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Trust bar */}
        <div className="bg-white border-b border-gray-100 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> TPE & EBO2 Specialist</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Naturopathic Medical Doctor (NMD)</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 5.0 ★ — 77 Google Reviews</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Remote Consultations Available</div>
            </div>
          </div>
        </div>

        {/* What is POTS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Understanding POTS & Dysautonomia</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Postural Orthostatic Tachycardia Syndrome (POTS) is a dysfunction of the autonomic nervous system — the system that regulates heart rate, blood pressure, digestion, and dozens of other involuntary functions. In POTS, standing upright triggers an abnormal surge in heart rate, causing dizziness, fatigue, and a cascade of debilitating symptoms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Research increasingly implicates <strong>autoantibodies against G-protein coupled receptors (GPCRs)</strong> in a significant subset of POTS patients — particularly adrenergic and muscarinic receptor antibodies that disrupt autonomic signaling. This places POTS firmly in the autoimmune spectrum for many patients, making immune-modulating therapies a rational approach.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    POTS is also a hallmark feature of Long COVID, connective tissue disorders (like hEDS), and other autoimmune conditions. Our approach identifies the underlying mechanism driving your POTS and targets it directly.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl mb-5">Common POTS & Dysautonomia Symptoms</h3>
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
                  Integrative POTS & Dysautonomia Treatments
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Protocols designed to address autonomic dysfunction at its root — immune, vascular, and mitochondrial.
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
                      <a className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-5 hover:underline" data-testid={`link-pots-treatment-${i}`}>
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
                  Dr. Birch has extensive experience treating complex autonomic conditions including POTS, Long COVID-related dysautonomia, and autoimmune-driven nervous system dysfunction. His training in therapeutic plasma exchange and EBO2 ozone therapy gives him tools that few integrative physicians offer.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With a 5.0-star rating from 77 Google reviews and over 2,500 ozone therapy sessions performed, Dr. Birch brings both the clinical experience and the procedural expertise required to treat the most challenging cases.
                </p>
                <Link href="/dr-jonathan-birch">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" data-testid="button-pots-drbirth-link">
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
                POTS & Dysautonomia FAQ
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
