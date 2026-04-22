import React, { useState, useEffect } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";
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
  { question: "What autoimmune conditions do you treat?", answer: "We work with patients across a broad spectrum of autoimmune conditions including rheumatoid arthritis, lupus (SLE), multiple sclerosis, Sjögren's syndrome, inflammatory bowel disease, psoriatic arthritis, ankylosing spondylitis, myasthenia gravis, autoimmune thyroid disease (Hashimoto's and Graves'), and many others. Our approach focuses on modulating the immune system rather than suppressing it broadly." },
  { question: "How does therapeutic plasma exchange help autoimmune disease?", answer: "Autoimmune diseases are driven by pathological autoantibodies, immune complexes, and inflammatory cytokines circulating in the plasma. Therapeutic plasma exchange (TPE) physically removes this pathological load — replacing diseased plasma with albumin — and can provide rapid reduction in the circulating drivers of autoimmune disease. TPE is an established treatment for several autoimmune conditions and is being studied for many others." },
  { question: "How does EBO2 ozone therapy help autoimmune patients?", answer: "EBO2 (extracorporeal blood ozonation) modulates the immune system by influencing the balance between pro-inflammatory and anti-inflammatory cytokines. It activates the body's antioxidant defense systems through the Nrf2 pathway, reduces systemic oxidative stress, and improves tissue oxygenation. Many autoimmune patients experience reductions in pain, fatigue, and inflammatory markers following EBO2 protocols." },
  { question: "Can you help patients who haven't responded to conventional immunosuppressants?", answer: "Yes. Many of our patients come to us after conventional treatments — methotrexate, biologics, prednisone — have provided inadequate relief or caused intolerable side effects. Our integrative approach doesn't replace conventional care but adds evidence-informed tools like TPE, ozone therapy, and nutritional optimization that address mechanisms conventional therapy doesn't target." },
  { question: "What is the naturopathic approach to autoimmune disease?", answer: "Naturopathic medicine addresses autoimmune disease through a root-cause lens: identifying and resolving triggers (gut dysbiosis, infections, environmental toxins, nutrient deficiencies), supporting regulatory T-cell function, optimizing the gut microbiome, reducing inflammatory dietary exposures, and using targeted botanicals and nutraceuticals with immunomodulatory properties. This is complementary to — not a replacement for — conventional care." },
  { question: "Do you treat autoimmune disease in Santa Barbara?", answer: "Yes. Purety Family Medical Clinic at 2323 Oak Park Ln, Suite 102 in Santa Barbara offers integrative autoimmune disease treatment including therapeutic plasma exchange, EBO2 ozone therapy, and comprehensive naturopathic care. We serve patients from Santa Barbara, Ventura, Los Angeles, and throughout California. Telehealth consultations are available." },
  { question: "Is there a telehealth option for autoimmune patients?", answer: "Yes. We offer remote consultations for patients with autoimmune disease throughout California and nationwide. In-person visits are required for TPE and EBO2 procedures, but the initial consultation, lab review, and ongoing naturopathic management can often be completed via telehealth." },
];

const SYMPTOMS = [
  "Chronic joint pain, swelling, and stiffness",
  "Systemic fatigue — profound and unrelenting",
  "Neurological symptoms — brain fog, neuropathy",
  "Skin manifestations — rashes, photosensitivity",
  "Recurrent infections from immune dysregulation",
  "Gastrointestinal symptoms — bloating, pain, urgency",
  "Dry eyes and dry mouth (Sjögren's features)",
  "Muscle weakness and pain (myositis)",
  "Organ involvement — kidneys, lungs, heart",
  "Flares triggered by stress, infection, or dietary factors",
];

const TREATMENTS = [
  {
    icon: <Droplet className="w-7 h-7 text-primary" />,
    title: "Therapeutic Plasma Exchange (TPE)",
    desc: "TPE removes the pathological autoantibodies, immune complexes, and cytokines driving autoimmune disease directly from the bloodstream — providing a reset that can be profoundly effective for antibody-mediated conditions.",
    href: "/services/plasma-exchange",
  },
  {
    icon: <Activity className="w-7 h-7 text-primary" />,
    title: "EBO2 Ozone Therapy",
    desc: "Extracorporeal blood ozonation modulates immune function through cytokine regulation, activates the Nrf2 antioxidant pathway, and reduces systemic inflammation — without the broad immunosuppression of conventional drugs.",
    href: "/ebo2-santa-barbara",
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "NAD+ IV Therapy",
    desc: "Autoimmune disease and its treatments deplete NAD+, impairing cellular energy production and DNA repair. IV NAD+ restores these processes, supporting mitochondrial health, reducing fatigue, and supporting neurological function.",
    href: "/services/iv-therapy",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    title: "Naturopathic Integrative Care",
    desc: "Root-cause investigation including gut microbiome assessment, food sensitivity testing, toxic burden evaluation, and targeted protocols using evidence-based botanicals and nutraceuticals to modulate immune function.",
    href: "/services/naturopathic",
  },
];

export default function AutoimmuneDisease() {
  usePageSEO({
    title: "Autoimmune Treatment Santa Barbara | Purety Clinic",
    description: "Integrative autoimmune treatment at Purety Clinic in Santa Barbara. TPE, EBO2, and functional medicine for lupus, MS, and more. Call (805) 500-8300.",
    canonicalPath: "/conditions/autoimmune",
  });
  useEffect(() => {
    const conditionSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Autoimmune Disease",
      "alternateName": ["Rheumatoid Arthritis", "Lupus", "Multiple Sclerosis", "Sjögren's Syndrome", "Hashimoto's Thyroiditis", "Inflammatory Bowel Disease", "Autoimmune Conditions"],
      "description": "Autoimmune diseases occur when the immune system mistakenly attacks the body's own tissues, driven by pathological autoantibodies and chronic inflammation. Conditions include rheumatoid arthritis, lupus, multiple sclerosis, and many others.",
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
      "description": "Santa Barbara integrative medicine clinic offering autoimmune disease treatment including therapeutic plasma exchange, EBO2 ozone therapy, and naturopathic care.",
      "url": "https://puretyclinic.com/conditions/autoimmune",
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
        { "@type": "ListItem", "position": 3, "name": "Autoimmune Disease Treatment", "item": "https://puretyclinic.com/conditions/autoimmune" }
      ]
    };

    const schemas = [
      { id: "autoimmune-condition-schema", data: conditionSchema },
      { id: "autoimmune-local-schema", data: localSchema },
      { id: "autoimmune-faq-schema", data: faqSchema },
      { id: "autoimmune-breadcrumb-schema", data: breadcrumbSchema },
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
                Autoimmune Disease Treatment<br /><span className="italic text-accent">Santa Barbara, CA</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
                When the immune system turns against the body, the root drivers — autoantibodies, cytokine storms, gut dysbiosis — need to be addressed directly. We go beyond symptom management.
              </p>
              <p className="text-sm text-white/60 mb-8">
                Therapeutic Plasma Exchange · EBO2 Ozone Therapy · NAD+ IV · Naturopathic Integrative Care<br />
                Serving Los Angeles, Ventura, Orange County, and all of California
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={scrollToForm} data-testid="button-autoimmune-hero-cta">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300" data-testid="link-autoimmune-hero-call">Call (805) 500-8300</a>
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

        {/* What is autoimmune disease */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">A Different Approach to Autoimmune Disease</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Autoimmune disease occurs when the immune system loses its ability to distinguish self from non-self, producing pathological autoantibodies that attack the body's own tissues. The result can range from joint destruction in rheumatoid arthritis to nerve demyelination in multiple sclerosis to systemic inflammation in lupus.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Conventional medicine primarily manages autoimmune disease through <strong>broad immunosuppression</strong> — reducing immune activity across the board. This approach controls symptoms but carries significant risks, doesn't address the root cause, and leaves many patients with inadequate relief.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our integrative approach uses tools that <strong>modulate</strong> the immune system rather than suppress it: therapeutic plasma exchange to remove pathological autoantibodies, EBO2 ozone therapy to regulate cytokine balance, and comprehensive naturopathic care to address the gut, toxin, and nutritional factors that drive immune dysregulation.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl mb-5">Common Autoimmune Symptoms</h3>
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
                  Integrative Autoimmune Disease Treatments
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Each therapy addresses a distinct mechanism of autoimmune disease — from pathological antibody removal to immune modulation to mitochondrial support.
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
                      <a className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-5 hover:underline" data-testid={`link-autoimmune-treatment-${i}`}>
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
                  Dr. Birch trained at Southwest College of Naturopathic Medicine and has built one of the most comprehensive integrative practices in Southern California, offering therapeutic plasma exchange and EBO2 ozone therapy — advanced procedures that most naturopathic and integrative clinics do not provide.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  His approach to autoimmune disease integrates the latest evidence from immunology, functional medicine, and clinical nutrition. With a 5.0-star rating from 77 Google reviews, patients travel from throughout California and beyond for his care.
                </p>
                <Link href="/dr-jonathan-birch">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" data-testid="button-autoimmune-drbirth-link">
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
                Autoimmune Disease Treatment FAQ
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
