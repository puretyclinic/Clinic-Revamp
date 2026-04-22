import React, { useState, useEffect } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Activity, Zap, Microscope } from "lucide-react";
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
  { question: "What is chronic Lyme disease?", answer: "Chronic Lyme disease (also called Post-Treatment Lyme Disease Syndrome or PTLDS) refers to persistent symptoms — fatigue, joint pain, cognitive difficulties, and neurological problems — that continue for months or years after standard antibiotic treatment. Whether this reflects ongoing infection, immune dysregulation, or residual tissue damage is still debated, but the suffering is real and requires a comprehensive integrative approach." },
  { question: "How does EBO2 ozone therapy help Lyme disease?", answer: "EBO2 (extracorporeal blood ozonation with UV irradiation) circulates blood through an extracorporeal circuit where high-concentration medical ozone and UV light are applied. Ozone has demonstrated direct antimicrobial activity, immune modulation, and mitochondrial support. Many patients with Lyme-related fatigue, brain fog, and systemic inflammation report meaningful improvement following an EBO2 protocol." },
  { question: "Does PRP help with Lyme-related joint and nerve damage?", answer: "Platelet-rich plasma (PRP) can help address the musculoskeletal consequences of Lyme disease — including joint inflammation, ligament laxity, and peripheral nerve involvement. Ultrasound-guided PRP injections target the specific joints or nerves affected, supporting tissue repair and reducing inflammation locally." },
  { question: "How does NAD+ IV therapy help Lyme patients?", answer: "Lyme disease and its co-infections are associated with significant mitochondrial dysfunction and neurological stress. NAD+ (nicotinamide adenine dinucleotide) is a critical coenzyme for cellular energy production. IV NAD+ therapy replenishes depleted NAD+ levels, supporting mitochondrial function, neurological repair, and cognitive clarity — areas frequently impacted in chronic Lyme." },
  { question: "Do you treat Lyme disease in Santa Barbara?", answer: "Yes. Purety Family Medical Clinic at 2323 Oak Park Ln, Suite 102 in Santa Barbara offers an integrative approach to chronic Lyme and co-infections. We serve patients from Santa Barbara, Ventura, Los Angeles, and throughout California. Telehealth consultations are available for initial assessments." },
  { question: "Do you test for Lyme and co-infections?", answer: "Yes. Dr. Birch orders comprehensive Lyme and co-infection panels through specialty labs experienced in tick-borne illness. Standard Lyme testing (ELISA/Western Blot) is often inadequate for chronic presentations, and we utilize expanded testing to identify Babesia, Bartonella, Ehrlichia, Anaplasma, and other relevant pathogens." },
  { question: "Is there a telehealth option for Lyme patients?", answer: "Yes. We offer remote consultations for patients with chronic Lyme disease throughout California and nationwide. In-person visits are required for EBO2, PRP procedures, and IV therapies, but the initial consultation and care coordination can often be completed via telehealth." },
];

const SYMPTOMS = [
  "Debilitating fatigue not relieved by rest",
  "Joint pain and inflammation — knees, hips, wrists",
  "Muscle aches and widespread pain (fibromyalgia-like)",
  "Brain fog — memory problems, word-finding difficulties",
  "Peripheral neuropathy — tingling, numbness, burning",
  "Headaches and light/sound sensitivity",
  "Sleep disturbances — insomnia or excessive sleep",
  "Cardiac symptoms — palpitations, irregular rhythms",
  "Mood disturbances — anxiety, depression, irritability",
  "Skin symptoms — recurring rashes, hypersensitivity",
];

const TREATMENTS = [
  {
    icon: <Activity className="w-7 h-7 text-primary" />,
    title: "EBO2 Ozone Therapy",
    desc: "Extracorporeal blood ozonation delivers medical ozone and UV irradiation directly to circulating blood — supporting immune modulation, antimicrobial activity, and mitochondrial energy production.",
    href: "/ebo2-santa-barbara",
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "PRP — Regenerative Injections",
    desc: "Ultrasound-guided platelet-rich plasma injections address Lyme-related joint damage, ligament laxity, and peripheral nerve involvement. 4,000+ procedures performed by Dr. Birch.",
    href: "/prp-santa-barbara",
  },
  {
    icon: <Microscope className="w-7 h-7 text-primary" />,
    title: "NAD+ IV Therapy",
    desc: "High-dose IV NAD+ directly supports mitochondrial function, neurological repair, and cellular energy — addressing the core metabolic dysfunction driving Lyme fatigue and brain fog.",
    href: "/services/iv-therapy",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    title: "Naturopathic Integrative Care",
    desc: "Comprehensive testing for co-infections, herbal antimicrobials, detoxification support, and individualized protocols — treating the whole patient, not just the pathogen.",
    href: "/services/naturopathic",
  },
];

export default function LymeDisease() {
  usePageSEO({
    title: "Lyme Disease Treatment Santa Barbara | Purety Clinic",
    description: "Integrative Lyme disease treatment at Purety Clinic in Santa Barbara. EBO2 ozone, PRP, and naturopathic care. Call (805) 500-8300.",
    canonicalPath: "/conditions/lyme-disease",
  });
  useEffect(() => {
    const conditionSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Lyme Disease",
      "alternateName": ["Chronic Lyme Disease", "Post-Treatment Lyme Disease Syndrome", "PTLDS", "Borrelia infection"],
      "description": "Lyme disease is a tick-borne illness caused by Borrelia burgdorferi. Chronic or post-treatment Lyme disease involves persistent symptoms including fatigue, joint pain, neurological issues, and brain fog that continue after standard antibiotic therapy.",
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalTherapy", "name": "Platelet-Rich Plasma (PRP) Injections", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalTherapy", "name": "NAD+ IV Therapy", "url": "https://puretyclinic.com/services/iv-therapy" },
        { "@type": "MedicalTherapy", "name": "Naturopathic Integrative Care", "url": "https://puretyclinic.com/services/naturopathic" }
      ]
    };

    const localSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Santa Barbara integrative medicine clinic offering Lyme disease treatment including EBO2 ozone therapy, PRP injections, and NAD+ IV therapy.",
      "url": "https://puretyclinic.com/conditions/lyme-disease",
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
        { "@type": "ListItem", "position": 3, "name": "Lyme Disease Treatment", "item": "https://puretyclinic.com/conditions/lyme-disease" }
      ]
    };

    const schemas = [
      { id: "lyme-condition-schema", data: conditionSchema },
      { id: "lyme-local-schema", data: localSchema },
      { id: "lyme-faq-schema", data: faqSchema },
      { id: "lyme-breadcrumb-schema", data: breadcrumbSchema },
    ];
    schemas.forEach(({ id, data }) => {
      const s = document.createElement("script");
      s.type = "application/ld+json"; s.id = id;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    });
    return () => {
      schemas.forEach(({ id }) => document.getElementById(id)?.remove());
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
                Lyme Disease Treatment in<br /><span className="italic text-accent">Santa Barbara, CA</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
                Chronic Lyme and tick-borne co-infections require more than antibiotics. We address the immune dysregulation, mitochondrial dysfunction, and tissue damage that keep patients sick long after standard treatment.
              </p>
              <p className="text-sm text-white/60 mb-8">
                EBO2 Ozone Therapy · PRP Regenerative Injections · NAD+ IV Therapy · Naturopathic Care<br />
                Serving Los Angeles, Ventura, Orange County, and all of California
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={scrollToForm} data-testid="button-lyme-hero-cta">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300" data-testid="link-lyme-hero-call">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Trust bar */}
        <div className="bg-white border-b border-gray-100 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> EBO2 & PRP Specialist</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Naturopathic Medical Doctor (NMD)</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 5.0 ★ — 77 Google Reviews</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Remote Consultations Available</div>
            </div>
          </div>
        </div>

        {/* What is Lyme */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Why Chronic Lyme Is So Difficult to Treat</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lyme disease, caused by <em>Borrelia burgdorferi</em> transmitted through tick bites, is straightforward to treat when caught early. But when diagnosis is delayed — or when co-infections like Babesia, Bartonella, or Ehrlichia are present — the illness becomes far more complex.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Post-treatment Lyme disease syndrome (PTLDS) affects a significant subset of patients who complete standard antibiotic courses yet continue to suffer. Current research implicates <strong>immune dysregulation</strong>, <strong>mitochondrial dysfunction</strong>, <strong>autoantibody production</strong>, and <strong>neuroinflammation</strong> as key perpetuating mechanisms — none of which are addressed by antibiotics alone.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our integrative approach combines therapies that directly target these mechanisms: ozone to modulate immunity and support mitochondria, PRP to address joint and nerve damage, and NAD+ to restore cellular energy production.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl mb-5">Common Chronic Lyme Symptoms</h3>
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
                  Integrative Lyme Disease Treatments
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Each protocol is designed to address the mechanisms driving chronic Lyme — not just manage symptoms.
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
                      <a className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-5 hover:underline" data-testid={`link-lyme-treatment-${i}`}>
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
                  Dr. Birch has been practicing integrative and naturopathic medicine since 2014, with deep expertise in complex chronic illness including tick-borne disease. He holds credentials in musculoskeletal sonography (RMSK), allowing him to perform precision ultrasound-guided PRP injections for Lyme-related joint and nerve involvement — a capability rare in naturopathic practice.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 4,000 regenerative injections, 2,500+ ozone therapy sessions, and a 5.0-star rating from 77 Google reviews, Dr. Birch brings an unmatched combination of procedural experience and holistic clinical reasoning to patients with chronic Lyme disease.
                </p>
                <Link href="/dr-jonathan-birch">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" data-testid="button-lyme-drbirth-link">
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
                Lyme Disease Treatment FAQ
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
