import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Activity, Zap, Microscope, Target } from "lucide-react";
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
  { question: "What orthopedic conditions can be treated with PRP?", answer: "PRP (platelet-rich plasma) is effective for a wide range of musculoskeletal conditions including osteoarthritis of the knee, hip, and shoulder; rotator cuff tears and tendinopathy; tennis elbow (lateral epicondylitis) and golfer's elbow; Achilles tendinopathy and plantar fasciitis; patellar tendinopathy (jumper's knee); meniscus tears; labral tears; and lumbar/cervical facet joint pain. The concentrated growth factors in PRP stimulate tissue repair, reduce inflammation, and support collagen remodeling in damaged structures." },
  { question: "How does ultrasound guidance improve PRP outcomes?", answer: "Ultrasound guidance allows Dr. Birch to visualize the target structure in real time and confirm needle placement with precision — ensuring PRP is deposited exactly where it is needed. Without imaging guidance, injections are done by anatomical landmarks alone, which significantly increases the risk of missing the target or injecting into non-therapeutic tissue. Dr. Birch holds the RMSK (Registered in Musculoskeletal Sonography) credential, confirming advanced training in diagnostic and procedural musculoskeletal ultrasound." },
  { question: "How many PRP sessions are needed for sports injuries?", answer: "Most acute sports injuries — partial tendon tears, ligament sprains, mild osteoarthritis — respond well to 1–3 PRP sessions spaced 4–6 weeks apart. Chronic or more severe injuries such as significant osteoarthritis, rotator cuff pathology, or longstanding tendinopathy may require 3–5 sessions over several months. The number of sessions is determined by injury severity, tissue vascularity, and patient response, which Dr. Birch evaluates with follow-up ultrasound when appropriate." },
  { question: "Is PRP better than surgery for knee or shoulder injuries?", answer: "For many patients, PRP represents a genuine alternative to surgery — particularly for rotator cuff tendinopathy, knee osteoarthritis, and partial ligament tears. Multiple peer-reviewed trials show PRP produces equivalent or superior outcomes to surgery and cortisone injections for these conditions, with dramatically lower risk, no recovery time, and no anesthesia. Surgery remains necessary for complete structural tears (full-thickness rotator cuff, ACL rupture), but PRP is often the right first step before committing to an operation." },
  { question: "Does insurance cover PRP for orthopedic injuries?", answer: "PRP injections are not currently covered by most insurance plans, as they are considered investigational despite substantial clinical evidence. At Purety Clinic, we provide transparent, all-inclusive pricing for PRP procedures. Many patients find that a single PRP series costs far less than a surgical co-pay, physical therapy co-pays over 6 months, and the lost income from surgical recovery." },
  { question: "Does Dr. Birch treat sports injuries in Santa Barbara?", answer: "Yes. Dr. Jonathan Birch, NMD, RMSK performs ultrasound-guided PRP injections and regenerative treatments at Purety Family Medical Clinic, 2323 Oak Park Ln, Suite 102, Santa Barbara, CA. With over 4,000 regenerative injections performed, he has extensive procedural experience across the full spectrum of musculoskeletal conditions. We serve patients from Santa Barbara, Ventura, Los Angeles, and throughout California." },
  { question: "What is Dr. Birch's RMSK credential and why does it matter?", answer: "RMSK stands for Registered in Musculoskeletal Sonography — a nationally recognized credential issued by the Alliance for Physician Certification and Advancement (APCA) that certifies advanced proficiency in musculoskeletal ultrasound. For patients receiving PRP injections, this means every needle is placed under real-time imaging guidance by a physician who has demonstrated competency in both the diagnostic interpretation and procedural application of musculoskeletal ultrasound. This level of precision is the standard of care and meaningfully improves outcomes." },
];

const CONDITIONS = [
  "Knee osteoarthritis — medial, lateral, patellofemoral",
  "Shoulder injuries — rotator cuff tendinopathy, labral tears",
  "Tennis elbow &amp; golfer's elbow (epicondylitis)",
  "Achilles tendinopathy and plantar fasciitis",
  "Hip osteoarthritis and labral tears",
  "Patellar tendinopathy (jumper's knee)",
  "Lumbar and cervical facet joint pain",
  "Sports performance recovery and injury prevention",
  "Partial ligament and meniscus tears",
  "Back pain and sacroiliac joint dysfunction",
];

const TREATMENTS = [
  {
    icon: <Target className="w-7 h-7 text-primary" />,
    title: "Ultrasound-Guided PRP Injections",
    desc: "Platelet-rich plasma is processed from your own blood and injected under real-time ultrasound guidance to the exact site of injury. Dr. Birch's RMSK credential ensures every injection is placed with diagnostic precision.",
    href: "/prp-santa-barbara",
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "Regenerative Medicine",
    desc: "Beyond PRP, we offer regenerative biologics and growth-factor therapies tailored to injury type and severity — supporting the body's natural repair capacity without surgery or cortisone.",
    href: "/services/regenerative",
  },
  {
    icon: <Microscope className="w-7 h-7 text-primary" />,
    title: "NAD+ IV for Recovery",
    desc: "High-dose IV NAD+ supports mitochondrial energy production and cellular repair — accelerating recovery from injuries and procedures and reducing post-injection fatigue.",
    href: "/services/iv-therapy",
  },
  {
    icon: <Activity className="w-7 h-7 text-primary" />,
    title: "Prolotherapy",
    desc: "Dextrose-based prolotherapy injections stimulate ligament and tendon healing, particularly effective for hypermobility, chronic sprains, and back/sacroiliac joint instability.",
    href: "/services/regenerative",
  },
];

export default function OrthopedicInjuries() {
  useEffect(() => {
    document.title = "Orthopedic & Sports Injury PRP Treatment Santa Barbara | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Ultrasound-guided PRP injections for sports injuries and orthopedic conditions in Santa Barbara, CA. Dr. Jonathan Birch NMD, RMSK — 4,000+ procedures. Serving Los Angeles, Ventura, and all of California. Call (805) 500-8300.");

    const conditionSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Orthopedic & Sports Injuries",
      "alternateName": ["Sports Injuries", "Musculoskeletal Injuries", "Joint Pain", "Tendinopathy", "Osteoarthritis", "Rotator Cuff Injury"],
      "description": "Orthopedic and sports injuries encompass a range of musculoskeletal conditions including osteoarthritis, tendinopathies, ligament tears, and joint pain. Regenerative treatments including ultrasound-guided PRP offer effective non-surgical options for many patients.",
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Ultrasound-Guided PRP Injections", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalTherapy", "name": "Regenerative Medicine", "url": "https://puretyclinic.com/services/regenerative" },
        { "@type": "MedicalTherapy", "name": "NAD+ IV Therapy", "url": "https://puretyclinic.com/services/iv-therapy" },
        { "@type": "MedicalTherapy", "name": "Prolotherapy", "url": "https://puretyclinic.com/services/regenerative" }
      ]
    };

    const localSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Santa Barbara clinic specializing in ultrasound-guided PRP injections and regenerative medicine for sports injuries and orthopedic conditions. Dr. Jonathan Birch NMD, RMSK.",
      "url": "https://puretyclinic.com/conditions/orthopedic-injuries",
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
        { "@type": "ListItem", "position": 3, "name": "Orthopedic & Sports Injuries", "item": "https://puretyclinic.com/conditions/orthopedic-injuries" }
      ]
    };

    const schemas = [
      { id: "ortho-condition-schema", data: conditionSchema },
      { id: "ortho-local-schema", data: localSchema },
      { id: "ortho-faq-schema", data: faqSchema },
      { id: "ortho-breadcrumb-schema", data: breadcrumbSchema },
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
                Sports Injury &amp; Orthopedic PRP in<br /><span className="italic text-accent">Santa Barbara, CA</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
                Ultrasound-guided PRP injections and regenerative medicine for knee, shoulder, hip, tendon, and joint injuries — without surgery. Dr. Birch holds the RMSK credential and has performed over 4,000 regenerative procedures.
              </p>
              <p className="text-sm text-white/60 mb-8">
                PRP Injections · Regenerative Medicine · Prolotherapy · NAD+ IV Recovery<br />
                Serving Los Angeles, Ventura, Orange County, and all of California
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={scrollToForm} data-testid="button-ortho-hero-cta">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300" data-testid="link-ortho-hero-call">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Trust bar */}
        <div className="bg-white border-b border-gray-100 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> RMSK Certified — Musculoskeletal Ultrasound</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 4,000+ Regenerative Procedures</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 5.0 ★ — 77 Google Reviews</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> No Surgery Required</div>
            </div>
          </div>
        </div>

        {/* What we treat */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Regenerative Medicine for Orthopedic Injuries</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Platelet-rich plasma (PRP) therapy harnesses your body's own healing capacity. Blood is drawn, processed in a centrifuge to concentrate platelets and growth factors, and then injected under real-time ultrasound guidance to the exact site of injury — stimulating tissue repair, reducing inflammation, and promoting structural healing.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dr. Birch's <strong>RMSK certification</strong> (Registered in Musculoskeletal Sonography) ensures that every injection is placed with diagnostic-grade imaging precision — not estimated by landmarks. This is a meaningful clinical differentiator that directly improves outcomes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're an athlete recovering from a sports injury, a weekend warrior managing tendon pain, or someone avoiding joint replacement surgery, regenerative medicine offers a well-evidenced non-surgical path to recovery.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-xl mb-5">Conditions We Treat</h3>
                  <ul className="space-y-3">
                    {CONDITIONS.map((s, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: s }} />
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
                  Orthopedic &amp; Sports Medicine Treatments
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Non-surgical, regenerative options for musculoskeletal injuries and chronic joint conditions.
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
                      <a className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-5 hover:underline" data-testid={`link-ortho-treatment-${i}`}>
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
                  Dr. Birch holds the RMSK credential — Registered in Musculoskeletal Sonography — certifying advanced proficiency in diagnostic and procedural musculoskeletal ultrasound. This means every PRP injection and regenerative procedure is performed under real-time imaging guidance, confirming precise needle placement at the target tissue.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 4,000 regenerative injections performed and a 5.0-star rating from 77 Google reviews, Dr. Birch brings exceptional procedural volume and patient outcomes to musculoskeletal care. He treats the full spectrum of orthopedic and sports medicine conditions — from elite athletes to patients seeking to avoid joint replacement.
                </p>
                <Link href="/dr-jonathan-birch">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" data-testid="button-ortho-drbirth-link">
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
                Sports Injury &amp; PRP FAQ
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
