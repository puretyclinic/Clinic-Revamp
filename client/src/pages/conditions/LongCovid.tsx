import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Activity, Droplet, Wind } from "lucide-react";
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
  { question: "What causes Long COVID symptoms?", answer: "Research points to several overlapping mechanisms: viral persistence (SARS-CoV-2 fragments remaining in tissue), immune dysregulation (chronic inflammation and abnormal antibody responses), microthrombi (microscopic clots in small blood vessels), mitochondrial dysfunction, and autonomic nervous system disruption (POTS). Different patients appear to have different dominant mechanisms, which is why one-size-fits-all protocols rarely work." },
  { question: "How does therapeutic plasma exchange help Long COVID?", answer: "Therapeutic plasma exchange (TPE) removes your plasma — which contains the inflammatory cytokines, autoantibodies (anti-GPCR antibodies), fibrinogen microclots, and immune complexes driving many Long COVID symptoms — and replaces it with albumin. Several clinical studies, particularly from German research groups, have shown improvement in Long COVID fatigue, brain fog, and post-exertional malaise following a series of TPE treatments." },
  { question: "How does EBO2 ozone therapy help Long COVID?", answer: "EBO2 (extracorporeal blood ozonation) circulates blood through an extracorporeal circuit where it is exposed to high-concentration medical ozone and UV light. This oxygenates the blood, stimulates mitochondrial function, modulates the immune system, and may address viral persistence. Many Long COVID patients report improvements in energy, cognitive function, and exercise tolerance following EBO2 protocols." },
  { question: "How many treatments will I need?", answer: "This varies significantly by patient. For TPE, we typically begin with 1 treatment per month for 5 months and reassess based on your response. EBO2 protocols vary as well — some patients see meaningful improvement after 4–6 sessions, others require longer protocols. We develop individualized treatment plans based on your symptom profile and response to initial treatments." },
  { question: "Is there a wait list to be seen?", answer: "We are currently accepting new Long COVID patients. Same-week appointments are often available for an initial telehealth or in-person consultation. Call (805) 500-8300 or submit a request online." },
  { question: "Do you offer remote consultations for Long COVID?", answer: "Yes. We offer telehealth consultations for initial Long COVID assessments. In-person visits are required for TPE and EBO2 procedures, but the initial consultation and ongoing care coordination can often be done remotely." },
  { question: "Do you treat Long COVID at your Santa Barbara clinic?", answer: "Yes. Purety Family Medical Clinic at 2323 Oak Park Ln, Suite 102 in Santa Barbara offers therapeutic plasma exchange (TPE) and EBO2 ozone therapy for Long COVID patients. We serve patients from Santa Barbara, Ventura, Los Angeles, Orange County, and throughout California." },
];

const SYMPTOMS = [
  "Debilitating fatigue that doesn't improve with rest",
  "Post-exertional malaise (PEM) — symptom flares after activity",
  "Brain fog — difficulty concentrating, word-finding, memory",
  "Breathlessness and reduced exercise capacity",
  "Chest pain and palpitations",
  "POTS — lightheadedness and rapid heart rate when standing",
  "Chronic headaches and sleep disruption",
  "Persistent immune activation and recurrent infections",
];

export default function LongCovid() {
  useEffect(() => {
    document.title = "Long COVID Treatment Santa Barbara, CA | TPE & EBO2 Ozone | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Purety Clinic in Santa Barbara offers evidence-informed Long COVID treatment including therapeutic plasma exchange (TPE) and EBO2 ozone therapy. Dr. Jonathan Birch NMD. Serving Los Angeles, Ventura, and all of California. Call (805) 500-8300.");

    const conditionSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Long COVID",
      "alternateName": ["Post-COVID condition", "Post-acute sequelae of SARS-CoV-2", "PASC", "Long-haul COVID"],
      "description": "Long COVID (post-acute sequelae of SARS-CoV-2) is a multi-system condition causing persistent symptoms including fatigue, brain fog, post-exertional malaise, breathlessness, and autonomic dysfunction following SARS-CoV-2 infection.",
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
      "description": "Santa Barbara integrative medicine clinic offering Long COVID treatment including therapeutic plasma exchange (TPE) and EBO2 ozone therapy.",
      "url": "https://puretyclinic.com/conditions/long-covid",
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
        { "@type": "ListItem", "position": 3, "name": "Long COVID Treatment", "item": "https://puretyclinic.com/conditions/long-covid" }
      ]
    };

    const schemas = [
      { id: "longcovid-condition-schema", data: conditionSchema },
      { id: "longcovid-local-schema", data: localSchema },
      { id: "longcovid-faq-schema", data: faqSchema },
      { id: "longcovid-breadcrumb-schema", data: breadcrumbSchema },
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
                Long COVID Treatment in<br /><span className="italic text-accent">Santa Barbara, CA</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
                When symptoms persist months after COVID — fatigue, brain fog, breathlessness, POTS — the underlying drivers are often still present in the blood. We target them directly.
              </p>
              <p className="text-sm text-white/60 mb-8">
                Therapeutic Plasma Exchange · EBO2 Ozone Therapy · NAD+ IV · Naturopathic Support<br />
                Serving Los Angeles, Ventura, Orange County, and all of California
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={scrollToForm} data-testid="button-longcovid-hero-cta">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300" data-testid="link-longcovid-hero-call">Call (805) 500-8300</a>
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

        {/* What is Long COVID */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">What Is Long COVID?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Long COVID — also called post-acute sequelae of SARS-CoV-2 (PASC) — refers to symptoms that persist or emerge weeks to months after the initial COVID-19 infection has resolved. Estimates suggest 10–30% of COVID-19 patients develop some form of Long COVID, with symptoms that can last years.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Research now points to several overlapping biological mechanisms: <strong>viral persistence</strong> (SARS-CoV-2 fragments remaining in tissues), <strong>immune dysregulation</strong> (autoantibody production and chronic inflammation), <strong>microthrombi</strong> (microscopic fibrin clots obstructing small blood vessels), and <strong>mitochondrial dysfunction</strong> leading to cellular energy deficits.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Conventional medicine has few approved treatments. Our approach targets these mechanisms directly — removing the circulating immune complexes and inflammatory load through therapeutic plasma exchange (TPE), and supporting oxygenation and immune modulation through EBO2 ozone therapy.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl mb-5">Common Long COVID Symptoms</h3>
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3 text-center">Our Long COVID Protocols</h2>
              <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">We don't offer a single protocol. Each patient's program is built around their dominant symptom pattern and the biological mechanisms most likely driving their condition.</p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* TPE */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Droplet className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-xl">Therapeutic Plasma Exchange (TPE)</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Therapeutic plasma exchange removes your blood plasma — which carries inflammatory cytokines, autoantibodies (including anti-GPCR antibodies implicated in Long COVID), fibrinogen microclots, and immune complexes — and replaces it with clean albumin. This directly reduces the circulating burden driving many Long COVID symptoms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    German researchers, including the group led by Dr. Beate Jaeger, published early positive data on TPE for Long COVID in 2022. Multiple clinical observations since have supported meaningful improvements in fatigue, brain fog, and exercise capacity.
                  </p>
                  <Link href="/services/plasma-exchange" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline" data-testid="link-tpe-from-longcovid">
                    Learn about TPE at Purety Clinic <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* EBO2 */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Wind className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-xl">EBO2 / EBOO Ozone Therapy</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    EBO2 (extracorporeal blood ozonation) continuously circulates blood through an external circuit, exposing it to high-concentration medical ozone and UV light before returning it to the body. This process oxygenates the blood, modulates immune activity, and may directly address viral persistence — all mechanisms relevant to Long COVID pathology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    Dr. Birch has performed over 2,500 ozone treatments including EBO2. Many Long COVID patients travel from Los Angeles, Ventura, and throughout California specifically for this therapy, which is not widely available in an outpatient setting.
                  </p>
                  <Link href="/ebo2-santa-barbara" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline" data-testid="link-ebo2-from-longcovid">
                    Learn about EBO2 at Purety Clinic <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* NAD+ */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-xl">NAD+ IV Therapy</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Mitochondrial dysfunction — the inability of cells to produce adequate energy — is a central feature of Long COVID, particularly in patients with post-exertional malaise (PEM). NAD+ is a critical coenzyme for mitochondrial function. IV administration delivers far higher levels than oral supplementation can achieve, providing direct support for cellular energy production.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    We commonly combine NAD+ infusions with other nutrients including glutathione, magnesium, and B vitamins as part of a broader IV protocol for Long COVID patients.
                  </p>
                </div>

                {/* Naturopathic */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-xl">Naturopathic Integrative Support</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Alongside procedural treatments, we build a naturopathic foundation: comprehensive lab evaluation (inflammatory markers, autoantibody panels, coagulation studies, microbiome assessment), anti-inflammatory nutritional protocols, targeted supplementation, and autonomic nervous system support for POTS and dysautonomia symptoms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    This whole-person approach allows us to identify and address contributing factors — including gut dysbiosis, hormonal disruption, and nutrient deficiencies — that compound Long COVID symptoms.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Dr. Birch card */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="bg-primary/5 border border-primary/15 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                <img src="/images/dr-jonathan-birch.png" alt="Dr. Jonathan Birch NMD RMSK" className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md shrink-0 mx-auto md:mx-0" />
                <div>
                  <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">Your Provider</p>
                  <h3 className="font-serif text-2xl text-foreground mb-1">Dr. Jonathan Birch, NMD, RMSK</h3>
                  <p className="text-sm text-muted-foreground mb-4">Naturopathic Medical Doctor · Founder, Purety Family Medical Clinic</p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Dr. Birch has been working with Long COVID patients since 2020 — among the first naturopathic physicians in California to offer therapeutic plasma exchange and EBO2 ozone therapy specifically for Long COVID. He holds a doctorate in naturopathic medicine from Southwest College of Naturopathic Medicine and is board-registered in musculoskeletal sonography (RMSK).
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["NMD — Southwest College of Naturopathic Medicine", "RMSK — Registered in Musculoskeletal Sonography", "2,500+ Ozone Treatments", "TPE Specialist", "5.0 ★ · 77 Google Reviews"].map((c, i) => (
                      <span key={i} className="inline-block text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">Common Questions About Long COVID Treatment</h2>
              <div>
                {FAQS.map((f, i) => <FAQItem key={i} question={f.question} answer={f.answer} />)}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Serving area */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <FadeIn>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Serving Long COVID Patients Across California</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Our Santa Barbara clinic is accessible from across Southern and Central California. We offer telehealth consultations for initial assessments — in-person visits are required for TPE and EBO2 procedures.</p>
              <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-muted-foreground mb-8">
                {["Santa Barbara", "Los Angeles", "Ventura", "Orange County", "Ojai", "Oxnard", "Thousand Oaks", "San Luis Obispo", "Santa Maria"].map(city => (
                  <span key={city} className="bg-muted/50 rounded-full px-4 py-1.5">{city}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8" onClick={scrollToForm} data-testid="button-longcovid-bottom-cta">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 font-bold rounded-full px-8" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Ready to Address Your Long COVID?" subheading="Book an initial consultation — in-person in Santa Barbara or by telehealth. We'll review your history, discuss treatment options, and determine which protocols are most appropriate for your symptom profile." formSource="Long COVID Condition Page" />
      </main>
      <Footer />
    </div>
  );
}
