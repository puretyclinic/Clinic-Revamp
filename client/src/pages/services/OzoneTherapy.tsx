import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Wind, Activity, Zap, CheckCircle2, ShieldCheck, Star, ChevronDown, ChevronUp, MapPin, Phone } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { RelatedBlogPosts } from "@/components/RelatedBlogPosts";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-ozone-${question.slice(0, 20).replace(/\s/g, '-')}`}
      >
        <span className="font-bold text-foreground text-base pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary shrink-0" />}
      </button>
      {open && <div className="pb-5 text-muted-foreground leading-relaxed text-sm">{answer}</div>}
    </div>
  );
}

const GEO_VARIANTS_OZONE: Record<string, { title: string; metaDescription: string; h1: React.ReactNode; subtitle: string; breadcrumbName: string; breadcrumbUrl: string }> = {
  "/ebo2-santa-barbara": {
    title: "EBO2 Santa Barbara, CA | Extracorporeal Blood Ozone Therapy | Purety Clinic",
    metaDescription: "EBO2 ozone therapy in Santa Barbara, CA. Dr. Jonathan Birch has performed over 2,500 ozone treatments including EBO2 (extracorporeal blood ozonation). One of California's most experienced EBO2 providers. Call (805) 500-8300.",
    h1: <>EBO2 Ozone Therapy in <span className="italic text-accent">Santa Barbara, CA</span></>,
    subtitle: "Extracorporeal blood ozonation (EBO2) — the most advanced ozone therapy available — performed at our Santa Barbara clinic by one of California's most experienced providers.",
    breadcrumbName: "EBO2 Ozone Therapy Santa Barbara",
    breadcrumbUrl: "https://puretyclinic.com/ebo2-santa-barbara",
  },
  "/eboo-santa-barbara": {
    title: "EBOO Santa Barbara, CA | Ozone Dialysis | Extracorporeal Ozone | Purety Clinic",
    metaDescription: "EBOO (extracorporeal blood ozone) therapy in Santa Barbara, CA. Also known as EBO2 or ozone dialysis. Over 2,500 treatments performed by Dr. Jonathan Birch. Call (805) 500-8300.",
    h1: <>EBOO Ozone Therapy in <span className="italic text-accent">Santa Barbara, CA</span></>,
    subtitle: "EBOO (Extracorporeal Blood Oxygenation and Ozonation) — also called EBO2 or ozone dialysis — available in Santa Barbara at Purety Family Medical Clinic.",
    breadcrumbName: "EBOO Ozone Therapy Santa Barbara",
    breadcrumbUrl: "https://puretyclinic.com/eboo-santa-barbara",
  },
};

const DEFAULT_OZONE_VARIANT = {
  title: "Ozone Therapy Santa Barbara | EBO2 | EBOO | Ozone Dialysis | Purety Clinic",
  metaDescription: "Santa Barbara's most experienced ozone therapy clinic. Dr. Jonathan Birch has performed over 2,500 ozone treatments including EBO2 (EBOO / ozone dialysis), Multipass OHT / 10-Pass, and Prolozone injections. Call (805) 500-8300.",
  h1: <>Ozone <span className="italic text-accent">Therapies</span></>,
  subtitle: "Medical ozone therapy uses high-concentration ozone gas to oxygenate the blood, modulate the immune system, and eliminate chronic pathogens — delivered through several evidence-informed protocols depending on your condition and goals.",
  breadcrumbName: "Ozone Therapy Santa Barbara — EBO2 & EBOO",
  breadcrumbUrl: "https://puretyclinic.com/services/ozone-therapy",
};

export default function OzoneTherapy() {
  const [location] = useLocation();
  const variant = GEO_VARIANTS_OZONE[location] ?? DEFAULT_OZONE_VARIANT;

  useEffect(() => {
    document.title = variant.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", variant.metaDescription);

    const localSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic — Ozone Therapy & EBO2",
      "description": "Santa Barbara's most experienced ozone therapy clinic. Dr. Jonathan Birch has performed over 2,500 ozone treatments including EBO2 (also known as EBOO or ozone dialysis), Multipass OHT / 10-Pass, and Prolozone injections.",
      "url": "https://puretyclinic.com/services/ozone-therapy",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.4483,
        "longitude": -119.7148
      },
      "areaServed": [
        { "@type": "City", "name": "Santa Barbara", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Goleta", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Montecito", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Carpinteria", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Ventura", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Ojai", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Oxnard", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Thousand Oaks", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Santa Ynez", "containedInPlace": { "@type": "State", "name": "California" } }
      ],
      "medicalSpecialty": ["IntegrativeMedicine", "OxygenTherapy"],
      "hasMap": "https://maps.google.com/?q=Purety+Family+Medical+Clinic+Santa+Barbara+CA",
      "availableService": [
        { "@type": "MedicalProcedure", "name": "EBO2 (EBOO / Ozone Dialysis)", "description": "Extracorporeal Blood Oxygenation and Ozonation — the most comprehensive ozone therapy available. Blood is continuously circulated through an extracorporeal circuit, exposed to high-concentration medical ozone and UV light, and returned. Also known as EBOO or ozone dialysis." },
        { "@type": "MedicalProcedure", "name": "Multipass OHT / 10-Pass", "description": "Hyperbaric high-dose ozone autohemotherapy. Blood is drawn, ozonated under pressure, and returned — repeated 10 times in a single session." },
        { "@type": "MedicalProcedure", "name": "Prolozone Injections", "description": "Ozone injected directly into joints and soft tissue to reduce pain and stimulate healing." }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      }
    };

    const ebo2Schema = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "EBO2 — Extracorporeal Blood Oxygenation and Ozonation",
      "alternateName": ["EBOO", "Ozone Dialysis", "Extracorporeal ozone therapy", "Blood ozone dialysis"],
      "description": "EBO2 (also called EBOO or ozone dialysis) is the most advanced ozone therapy available. Blood is drawn continuously through an extracorporeal circuit, exposed to high-concentration medical ozone and UV light, and returned to the body — treating a much larger volume of blood than standard autohemotherapy. Dr. Jonathan Birch at Purety Family Medical Clinic in Santa Barbara, CA is one of the most experienced EBO2 providers in California with over 2,500 ozone treatments performed.",
      "procedureType": "Therapeutic",
      "bodyLocation": "Blood / Systemic",
      "preparation": "Avoid blood thinners 24 hours prior. Stay well hydrated. Eat a light meal beforehand. Wear comfortable, loose-fitting clothing.",
      "followUp": "Rest recommended for the remainder of the day. Most patients feel increased energy and clarity within 24–48 hours. Protocol typically involves 4–8 sessions.",
      "howPerformed": "Blood is drawn through IV access into an extracorporeal circuit where it is continuously exposed to high-concentration medical-grade ozone and UV light before being returned to the patient. The process treats a significantly larger volume of blood than standard autohemotherapy.",
      "performer": {
        "@type": "Physician",
        "name": "Dr. Jonathan Birch",
        "worksFor": {
          "@type": "MedicalClinic",
          "name": "Purety Family Medical Clinic",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2323 Oak Park Ln, Suite 102",
            "addressLocality": "Santa Barbara",
            "addressRegion": "CA",
            "postalCode": "93105"
          },
          "telephone": "+1-805-500-8300"
        }
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is EBO2 and how is it different from regular ozone therapy?", "acceptedAnswer": { "@type": "Answer", "text": "EBO2 (also called EBOO or ozone dialysis) is the most advanced form of ozone therapy. Unlike standard ozone IV therapy, EBO2 continuously circulates blood through an extracorporeal circuit where it is exposed to high-concentration medical ozone and UV light — treating a significantly larger volume of blood per session. It's a more comprehensive and intensive treatment." } },
        { "@type": "Question", "name": "Is EBO2 the same as EBOO or ozone dialysis?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — EBO2, EBOO, and ozone dialysis all refer to the same procedure: Extracorporeal Blood Oxygenation and Ozonation. The different names reflect how different clinics and manufacturers market the technology. At Purety Clinic we use the term EBO2, but the procedure is identical to what others call EBOO or ozone dialysis." } },
        { "@type": "Question", "name": "What conditions does ozone therapy treat?", "acceptedAnswer": { "@type": "Answer", "text": "Ozone therapy is used for a wide range of conditions including chronic infections (Lyme disease, EBV, mold toxicity), autoimmune disorders, Long COVID, inflammatory conditions, cardiovascular disease, chronic fatigue, and as a general immune system modulator. EBO2 is particularly effective for conditions with a heavy toxic or inflammatory burden." } },
        { "@type": "Question", "name": "How many EBO2 sessions will I need?", "acceptedAnswer": { "@type": "Answer", "text": "Most protocols involve 4–8 sessions, spaced 1–2 weeks apart. Patients with more chronic or complex conditions may benefit from a longer course. Dr. Birch will recommend a protocol based on your specific diagnosis, lab work, and treatment goals during your initial consultation." } },
        { "@type": "Question", "name": "Is ozone therapy safe?", "acceptedAnswer": { "@type": "Answer", "text": "Medical ozone therapy has an excellent safety record when performed by experienced practitioners using proper protocols and pharmaceutical-grade ozone generators. Dr. Birch has performed over 2,500 ozone treatments and uses only medical-grade equipment. Side effects are generally mild and may include temporary fatigue or mild flu-like symptoms as the body detoxifies." } },
        { "@type": "Question", "name": "What is Multipass OHT / 10-Pass ozone and how does it differ from EBO2?", "acceptedAnswer": { "@type": "Answer", "text": "Multipass OHT (also called 10-Pass) is a high-dose hyperbaric ozone autohemotherapy. Blood is drawn into a pressurized bottle, ozonated, and returned — repeated 10 times in one sitting for a high dose. EBO2 is more comprehensive because it continuously circulates blood through an extracorporeal circuit, treating a much larger total blood volume. Both are powerful treatments; Dr. Birch will recommend which is appropriate for your situation." } },
        { "@type": "Question", "name": "How long does an EBO2 session take?", "acceptedAnswer": { "@type": "Answer", "text": "An EBO2 session typically takes 60–90 minutes from start to finish, including setup, the procedure itself, and a short recovery period. You can drive yourself home afterward, though many patients prefer to rest for the remainder of the day." } },
        { "@type": "Question", "name": "Do you offer ozone therapy near Ventura or Los Angeles?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our clinic is located in Santa Barbara and is easily accessible from Ventura (45 min), Ojai (50 min), Oxnard (55 min), Thousand Oaks (70 min), and Los Angeles (about 1 hr 45 min). Many patients make the drive specifically for our level of experience with EBO2 and 10-Pass ozone." } }
      ]
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://puretyclinic.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://puretyclinic.com/services" },
        { "@type": "ListItem", "position": 3, "name": variant.breadcrumbName, "item": variant.breadcrumbUrl }
      ]
    };

    const schemas = [
      { id: "ozone-local-schema", data: localSchema },
      { id: "ozone-ebo2-schema", data: ebo2Schema },
      { id: "ozone-faq-schema", data: faqSchema },
      { id: "ozone-breadcrumb-schema", data: breadcrumbSchema },
    ];

    schemas.forEach(({ id, data }) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = id;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    });

    return () => schemas.forEach(({ id }) => document.getElementById(id)?.remove());
  }, [variant.title]);

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
              <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
                {variant.h1}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
                {variant.subtitle}
              </p>
              <p className="text-sm text-white/60 mb-3">
                EBOO · EBO2 · Ozone Dialysis · Multipass OHT / 10-Pass · Prolozone
              </p>
              <p className="text-sm text-white/60 mb-8">
                2,500+ treatments performed in Santa Barbara · Serving the Central Coast & Southern California
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={scrollToForm} data-testid="button-ozone-hero-cta">
                  Book a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300" data-testid="link-ozone-hero-call">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Trust bar */}
        <div className="bg-white border-b border-gray-100 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> EBO2 / EBOO Specialist</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 2,500+ Ozone Treatments</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Medical-Grade Equipment</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Licensed Medical Clinic</div>
            </div>
          </div>
        </div>

        {/* EBO2 Feature Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/20">
                  Our Specialty
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  EBO2 — The Most Advanced Ozone Therapy Available
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  EBO2 (also known as EBOO or ozone dialysis) is Extracorporeal Blood Oxygenation and Ozonation — a procedure that continuously circulates blood through an extracorporeal circuit where it is exposed to high-concentration medical ozone and UV light before being returned to the body. Unlike standard ozone IV therapy, EBO2 treats a significantly larger volume of blood per session.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  The result is a far more comprehensive treatment than standard ozone IV therapy. Patients with chronic infections, mold toxicity, autoimmune conditions, Long COVID, and heavy metal burden often experience dramatic improvement with a course of EBO2 that they haven't found with other treatments.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Dr. Birch has performed over 2,500 ozone treatments at Purety Clinic — making this one of the highest-volume ozone practices on the Central Coast of California.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "High-concentration ozone exposure",
                    "UV-irradiates blood in circuit",
                    "Larger blood volume than standard ozone IV",
                    "Treats systemic infections",
                    "Autoimmune modulation",
                    "No hospital stay required",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                    <img
                      src="/images/ebo2-machine.jpeg"
                      alt="EBO2 extracorporeal ozone therapy circuit running at Purety Family Medical Clinic in Santa Barbara, CA"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {[
                      { label: "Ozone Treatments Performed", value: "2,500+" },
                      { label: "Years in Practice", value: "10+" },
                    ].map((s, i) => (
                      <div key={i} className="bg-[#f8fafb] rounded-2xl p-4 border border-gray-100 flex flex-col items-center text-center gap-1">
                        <div className="text-2xl font-bold font-serif text-primary leading-tight">{s.value}</div>
                        <div className="font-medium text-foreground text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Ozone Therapy Protocols</h2>
                <p className="text-muted-foreground text-lg">From the most advanced EBO2 to targeted local treatments — we offer every major ozone modality</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FadeIn delay={0.05}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border-2 border-accent/20 h-full flex flex-col">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 border border-accent/20 w-fit">
                    Our Specialty
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">EBO2 / EBOO / Ozone Dialysis</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                    Extracorporeal Blood Oxygenation and Ozonation — the most comprehensive ozone therapy. Blood continuously circulates through an extracorporeal circuit, where it is exposed to high-concentration ozone and UV light before being returned. Also called EBOO or ozone dialysis.
                  </p>
                  <h4 className="font-bold text-xs text-foreground uppercase tracking-wider mb-2">Best for:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {[
                      { label: "Chronic Lyme disease", href: "/conditions/lyme-disease" },
                      { label: "Mold / mycotoxin illness", href: "/conditions/mold-illness" },
                      { label: "Long COVID", href: "/conditions/long-covid" },
                      { label: "Heavy metal burden", href: null },
                      { label: "Autoimmune conditions", href: "/conditions/autoimmune" },
                      { label: "Chronic EBV / viral infections", href: null },
                      { label: "Longevity & healthy aging", href: "/conditions/longevity" },
                    ].map((c, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        {c.href ? <Link href={c.href} className="hover:text-primary hover:underline transition-colors">{c.label}</Link> : c.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Multipass OHT / 10-Pass</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                    Hyperbaric ozone autohemotherapy — blood is drawn, ozonated under pressure, and returned to the body, repeated 10 times in one session for maximum ozone saturation.
                  </p>
                  <h4 className="font-bold text-xs text-foreground uppercase tracking-wider mb-2">Best for:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {["Viral infections", "Immune system support", "Cancer support", "Fatigue & brain fog", "Chronic inflammation"].map((c, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" /> {c}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Wind className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Prolozone Injections</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                    Ozone injected directly into joints and soft tissue, combined with nutrients and proliferants to reduce pain, decrease inflammation, and stimulate tissue repair.
                  </p>
                  <h4 className="font-bold text-xs text-foreground uppercase tracking-wider mb-2">Best for:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {["Joint pain & arthritis", "Back & neck pain", "Tendon injuries", "Sports injuries"].map((c, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" /> {c}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Conditions We Treat with Ozone</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Ozone therapy works by restoring oxygen metabolism, modulating the immune system, and eliminating pathogens — making it effective across a broad range of conditions.</p>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: "Chronic Lyme Disease", href: "/conditions/lyme-disease" },
                { label: "Long COVID & Post-viral Fatigue", href: "/conditions/long-covid" },
                { label: "Mold / Mycotoxin Illness", href: "/conditions/mold-illness" },
                { label: "Epstein-Barr Virus (EBV)", href: null },
                { label: "Autoimmune Conditions", href: "/conditions/autoimmune" },
                { label: "POTS & Dysautonomia", href: "/conditions/pots" },
                { label: "Chronic Fatigue Syndrome (ME/CFS)", href: null },
                { label: "Fibromyalgia", href: null },
                { label: "Heavy Metal Toxicity", href: null },
                { label: "Cardiovascular Disease", href: null },
                { label: "Diabetes & Metabolic Syndrome", href: null },
                { label: "Inflammatory Bowel Disease", href: null },
                { label: "Cancer Support (adjunct)", href: null },
                { label: "Chronic Infections", href: null },
                { label: "Joint Pain & Arthritis", href: "/conditions/arthritis" },
                { label: "Brain Fog & Cognitive Decline", href: null },
                { label: "Chronic Sinusitis", href: null },
                { label: "Skin Conditions", href: null },
                { label: "Longevity & Healthy Aging", href: "/conditions/longevity" },
              ].map((condition, i) => (
                <FadeIn key={i} delay={i * 0.02}>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#f8fafb] border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {condition.href
                      ? <Link href={condition.href} className="text-sm font-medium text-primary hover:underline">{condition.label}</Link>
                      : <span className="text-sm font-medium text-foreground">{condition.label}</span>
                    }
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Patient Results</h2>
                <p className="text-muted-foreground text-lg">Real patients from Santa Barbara, Ventura, and beyond</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { initials: "L.F.", type: "EBO2 Patient · Long COVID", quote: "I'd been dealing with Long COVID for over a year — debilitating fatigue, brain fog, I couldn't work. After a course of EBO2 with Dr. Birch, my energy came back. I wish I'd found him sooner." },
                { initials: "J.M.", type: "Multipass OHT Patient · Ojai", quote: "Chronic Lyme for four years. After everything else failed, I drove up from Ojai to try Dr. Birch's ozone protocol. The improvement was significant. He's one of the most knowledgeable practitioners I've encountered." },
                { initials: "P.C.", type: "EBO2 Patient · Santa Barbara", quote: "I had very high inflammatory markers from mold exposure. Dr. Birch recommended a series of EBO2 treatments. My labs are dramatically improved and I feel like myself again for the first time in two years." },
              ].map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
                    <div className="flex text-accent mb-3">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow italic">"{t.quote}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">{t.initials[0]}{t.initials[2]}</div>
                      <div>
                        <div className="font-bold text-sm text-foreground">{t.initials}</div>
                        <div className="text-xs text-muted-foreground">{t.type}</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <div className="mt-10 text-center">
                <a
                  href="https://share.google/c7xr79PiAXp0GYVnp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 group"
                  data-testid="link-ozone-google-reviews"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <div>
                    <div className="flex text-[#FBBC05]">
                      {[...Array(5)].map((_, i) => <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                    </div>
                    <div className="text-sm text-gray-600 font-bold group-hover:text-primary transition-colors">5.0 from 70+ reviews</div>
                  </div>
                  <span className="text-xs text-primary font-medium ml-2">Read Reviews on Google</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Serving the Central Coast &amp; Beyond</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Patients come from across the region — and sometimes across the state — for EBO2 and advanced ozone therapy at our Santa Barbara clinic.
                </p>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { city: "Goleta", dist: "10 min" },
                { city: "Montecito", dist: "10 min" },
                { city: "Carpinteria", dist: "20 min" },
                { city: "Ventura", dist: "45 min" },
                { city: "Ojai", dist: "50 min" },
                { city: "Oxnard", dist: "55 min" },
                { city: "Santa Ynez Valley", dist: "45 min" },
                { city: "Thousand Oaks", dist: "1 hr 10 min" },
                { city: "Los Angeles", dist: "1 hr 45 min" },
              ].map((loc, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafb] border border-gray-100">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="font-bold text-sm text-foreground">EBO2 near {loc.city}</div>
                      <div className="text-xs text-muted-foreground">~{loc.dist} from our clinic</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <div className="mt-8 text-center">
                <a
                  href="https://maps.google.com/?q=Purety+Family+Medical+Clinic+2323+Oak+Park+Ln+Suite+102+Santa+Barbara+CA+93105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
                  data-testid="link-ozone-directions"
                >
                  <MapPin className="w-4 h-4" /> Get Directions — 2323 Oak Park Ln, Suite 102, Santa Barbara, CA 93105
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-lg">Common questions about EBO2, EBOO, and ozone therapy in Santa Barbara</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
                <FAQItem
                  question="What is EBO2 and how is it different from regular ozone therapy?"
                  answer="EBO2 (also called EBOO or ozone dialysis) is the most advanced form of ozone therapy. Unlike standard ozone IV therapy, EBO2 continuously circulates blood through an extracorporeal circuit where it is exposed to high-concentration medical ozone and UV light — treating a significantly larger volume of blood per session. It's a more comprehensive and intensive treatment."
                />
                <FAQItem
                  question="Is EBO2 the same as EBOO or ozone dialysis?"
                  answer="Yes — EBO2, EBOO, and ozone dialysis all refer to the same procedure: Extracorporeal Blood Oxygenation and Ozonation. The different names reflect how different clinics and manufacturers market the technology. At Purety Clinic we use the term EBO2, but the procedure is identical to what others call EBOO or ozone dialysis."
                />
                <FAQItem
                  question="What conditions does ozone therapy treat?"
                  answer="Ozone therapy is used for a wide range of conditions including chronic infections (Lyme disease, EBV, mold toxicity), autoimmune disorders, Long COVID, inflammatory conditions, cardiovascular disease, chronic fatigue, and as a general immune system modulator. EBO2 is particularly effective for conditions with a heavy toxic or inflammatory burden."
                />
                <FAQItem
                  question="How many EBO2 sessions will I need?"
                  answer="Most protocols involve 4–8 sessions, spaced 1–2 weeks apart. Patients with more chronic or complex conditions may benefit from a longer course. Dr. Birch will recommend a protocol based on your specific diagnosis, lab work, and treatment goals during your initial consultation."
                />
                <FAQItem
                  question="Is ozone therapy safe?"
                  answer="Medical ozone therapy has an excellent safety record when performed by experienced practitioners using proper protocols and pharmaceutical-grade ozone generators. Dr. Birch has performed over 2,500 ozone treatments and uses only medical-grade equipment. Side effects are generally mild and may include temporary fatigue or mild flu-like symptoms as the body detoxifies."
                />
                <FAQItem
                  question="What is Multipass OHT / 10-Pass ozone and how does it differ from EBO2?"
                  answer="Multipass OHT (also called 10-Pass) is a high-dose hyperbaric ozone autohemotherapy. Blood is drawn into a pressurized bottle, ozonated, and returned — repeated 10 times in one sitting for a high dose. EBO2 is more comprehensive because it continuously circulates blood through an extracorporeal circuit, treating a much larger total blood volume. Both are powerful treatments; Dr. Birch will recommend which is appropriate for your situation."
                />
                <FAQItem
                  question="How long does an EBO2 session take?"
                  answer="An EBO2 session typically takes 60–90 minutes from start to finish, including setup, the procedure itself, and a short recovery period. You can drive yourself home afterward, though many patients prefer to rest for the remainder of the day."
                />
                <FAQItem
                  question="Do you offer ozone therapy near Ventura or Los Angeles?"
                  answer="Yes. Our clinic is located in Santa Barbara and is easily accessible from Ventura (45 min), Ojai (50 min), Oxnard (55 min), Thousand Oaks (70 min), and Los Angeles (about 1 hr 45 min). Many patients make the drive specifically for our level of experience with EBO2 and Multipass OHT."
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Experience EBO2?</h2>
              <p className="text-white/80 text-lg mb-8">Schedule a consultation to find out if ozone therapy is right for your condition. Dr. Birch has performed over 2,500 ozone treatments and will build a protocol tailored to you.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-lg px-8" onClick={scrollToForm} data-testid="button-ozone-bottom-cta">
                  Book Your Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold rounded-lg px-8" asChild>
                  <a href="tel:+18055008300" data-testid="link-ozone-bottom-call"><Phone className="w-4 h-4 mr-2" /> Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <RelatedBlogPosts
          heading="Learn More About Ozone Therapy"
          postIds={["eboo-ozone-therapy-guide"]}
        />
        <ContactCTA heading="Questions About EBO2 or Ozone Therapy?" subheading="Contact us to learn which ozone protocol is right for your condition." formSource="Ozone Therapy Page" />
      </main>

      <Footer />
    </div>
  );
}
