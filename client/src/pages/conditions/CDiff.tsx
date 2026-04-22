import React, { useState, useEffect } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, XCircle, AlertCircle } from "lucide-react";
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
  { question: "What is recurrent C. difficile?", answer: "Recurrent C. difficile (C. diff) occurs when C. difficile infection returns after a course of antibiotics. The first recurrence happens in about 20–30% of patients. After two or more recurrences, the risk of another relapse approaches 60%. This is because antibiotics further disrupt the gut microbiome — eliminating the protective bacteria that normally keep C. diff in check — creating a cycle of treatment and relapse." },
  { question: "What is fecal microbiota transplantation (FMT)?", answer: "FMT is a procedure in which a prepared microbiome from a healthy, screened donor is transferred into a patient's gut. This rapidly repopulates the gut with diverse, healthy bacteria, which outcompete and permanently suppress C. difficile. FMT achieves 80–92% cure rates for recurrent C. diff in clinical trials — dramatically higher than antibiotics alone." },
  { question: "How is FMT delivered at Purety Clinic?", answer: "We offer several delivery methods: capsules (swallowed orally over a 14-day course), enema, and colonoscopy-based delivery via our procedural partners. Capsule-based FMT is our most common method for recurrent C. diff — it's effective, tolerable, and in many cases eliminates the need for multiple clinic visits." },
  { question: "Do I need to travel to Santa Barbara for FMT?", answer: "Not necessarily for the initial consultation. We offer telehealth consultations to review your history, confirm you're a candidate, and design your treatment plan. For capsule-based FMT, we can ship materials directly in many cases — some patients complete their protocol without a clinic visit. Enema and colonoscopy-based FMT requires an in-person appointment." },
  { question: "What is your success rate for C. difficile?", answer: "Our FMT protocol achieves a 90%+ success rate for recurrent C. difficile, consistent with published clinical trial literature and our experience treating over 1,000 patients since 2014. Most patients see resolution of symptoms within the first week following FMT." },
  { question: "Is FMT covered by insurance?", answer: "Purety Family Medical Clinic is a private, fee-for-service practice. Our FMT program uses our own protocols and is not billed through insurance. We discuss all pricing transparently during the initial consultation. Many patients find the cost of a single successful FMT far lower than the cumulative cost of repeated antibiotic courses, hospitalizations, and continued illness." },
  { question: "Can FMT help with conditions other than C. diff?", answer: "We also use FMT for post-antibiotic dysbiosis, inflammatory bowel conditions, and other microbiome-related issues in appropriate candidates. FMT for non-C. diff indications is reviewed on a case-by-case basis during the initial consultation." },
  { question: "Is FMT available near Los Angeles?", answer: "Our clinic is in Santa Barbara — approximately 90 minutes from Los Angeles. We serve a large number of LA-area patients specifically for FMT. With capsule-based protocols and telehealth consultations, many LA patients manage the majority of their treatment without repeated travel." },
];

const WHY_ANTIBIOTICS_FAIL = [
  { title: "They destroy the microbiome", text: "The antibiotics used to treat C. diff (vancomycin, fidaxomicin) also destroy the very gut bacteria that naturally suppress C. diff — leaving the gut vulnerable to immediate recolonization once the antibiotic course ends." },
  { title: "They don't rebuild what was lost", text: "Antibiotics kill C. diff but do nothing to restore the diverse microbiome needed to keep it from returning. Without restoration, the conditions that allowed C. diff to flourish remain unchanged." },
  { title: "Spores survive treatment", text: "C. diff produces spores that are highly resistant to antibiotics. These spores can persist in the gut and environment, ready to germinate as soon as the antibiotic pressure lifts." },
  { title: "Each relapse weakens defenses further", text: "Every antibiotic course further depletes gut diversity, making each subsequent relapse easier for C. diff and harder for your body to resolve on its own." },
];

export default function CDiff() {
  usePageSEO({
    title: "C. difficile Treatment | FMT Specialist | Purety Clinic",
    description: "California's most experienced FMT clinic for recurrent C. difficile. Dr. Birch — 1,000+ procedures since 2014. Call (805) 500-8300.",
    canonicalPath: "/conditions/c-difficile",
  });
  useEffect(() => {
    const conditionSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Recurrent Clostridioides difficile Infection",
      "alternateName": ["Recurrent C. diff", "Recurrent C. difficile", "rCDI", "Clostridioides difficile colitis"],
      "description": "Recurrent C. difficile (C. diff) infection occurs when C. difficile returns after antibiotic treatment. Recurrence affects 20–30% of patients after the first episode and up to 60% after two or more recurrences.",
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Fecal Microbiota Transplantation (FMT)", "url": "https://puretyclinic.com/fecal-transplant" }
      ],
      "signOrSymptom": [
        { "@type": "MedicalSymptom", "name": "Recurrent watery diarrhea" },
        { "@type": "MedicalSymptom", "name": "Abdominal cramping and pain" },
        { "@type": "MedicalSymptom", "name": "Fever" },
        { "@type": "MedicalSymptom", "name": "Nausea and loss of appetite" }
      ]
    };

    const localSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "California's most experienced outpatient FMT clinic for recurrent C. difficile. 90%+ success rate since 2014. Capsule, enema, and colonoscopy delivery options.",
      "url": "https://puretyclinic.com/conditions/c-difficile",
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
        { "@type": "ListItem", "position": 3, "name": "Recurrent C. difficile Treatment", "item": "https://puretyclinic.com/conditions/c-difficile" }
      ]
    };

    const schemas = [
      { id: "cdiff-condition-schema", data: conditionSchema },
      { id: "cdiff-local-schema", data: localSchema },
      { id: "cdiff-faq-schema", data: faqSchema },
      { id: "cdiff-breadcrumb-schema", data: breadcrumbSchema },
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
                California's Most Experienced FMT Clinic
              </span>
              <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
                Recurrent C. difficile:<br /><span className="italic text-accent">FMT Has a 90%+ Success Rate</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
                If antibiotics keep failing, it's because they can't fix what caused C. diff to return. Fecal microbiota transplantation (FMT) restores the microbiome — and ends the cycle.
              </p>
              <p className="text-sm text-white/60 mb-8">
                Over 1,000 patients treated since 2014 · Capsule, enema, and colonoscopy options<br />
                Remote consultations available · Serving all of California
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={scrollToForm} data-testid="button-cdiff-hero-cta">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300" data-testid="link-cdiff-hero-call">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Trust bar */}
        <div className="bg-white border-b border-gray-100 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 1,000+ FMT Procedures</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 90%+ Success Rate for C. diff</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Outpatient Since 2014</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> 5.0 ★ · 77 Google Reviews</div>
            </div>
          </div>
        </div>

        {/* Why antibiotics fail */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Why Do Antibiotics Keep Failing?</h2>
              <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                If you've had two or more rounds of vancomycin or fidaxomicin and C. diff keeps coming back, this is not unusual — and it is not your fault. The biology of C. diff makes antibiotic-only treatment a poor long-term solution.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {WHY_ANTIBIOTICS_FAIL.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-red-50/50 border border-red-100 rounded-2xl p-6">
                    <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What FMT does */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">What FMT Actually Does</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Fecal microbiota transplantation works by directly replacing what antibiotics destroy: a diverse, healthy gut microbiome. Prepared material from a rigorously screened healthy donor is transferred into your intestinal tract, where it rapidly repopulates the gut with thousands of beneficial bacterial species.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These bacteria produce metabolites — particularly short-chain fatty acids and bile acid derivatives — that create an environment where C. difficile cannot compete. The result is not suppression but displacement: a restored microbiome that keeps C. diff in check long-term.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Clinical trials consistently show 80–92% success rates for recurrent C. diff. Our clinic's protocol achieves <strong>90%+</strong> — reflecting a decade of refinement in donor selection, preparation, and protocol design.
                  </p>
                  <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
                    <AlertCircle className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm text-foreground font-medium">FMT is the only treatment endorsed by the Infectious Diseases Society of America (IDSA) for <em>recurrent</em> C. difficile following antibiotic failure — and the American Gastroenterological Association guidelines support its use after two recurrences.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-foreground text-xl mb-4">Our Delivery Options</h3>
                  {[
                    { name: "Capsule FMT", desc: "Oral capsules taken over a 14-day course. Our most popular method — effective, tolerable, and often manageable without repeated clinic visits. Capsules can be shipped in many cases.", highlight: true },
                    { name: "Enema FMT", desc: "Self-administered at home following an in-office preparation visit. A good option for patients who prefer an outpatient approach with direct colonic delivery." },
                    { name: "Colonoscopy FMT", desc: "Colonoscopy-based delivery for patients who prefer endoscopic confirmation of delivery site or have specific anatomical considerations. Coordinated with our procedural partners." },
                  ].map((opt, i) => (
                    <div key={i} className={`rounded-2xl p-6 border ${opt.highlight ? "bg-primary/5 border-primary/20" : "bg-white border-gray-100"}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <h4 className="font-bold text-foreground">{opt.name}</h4>
                        {opt.highlight && <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-2 py-0.5">Most Popular</span>}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed ml-8">{opt.desc}</p>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link href="/fecal-transplant" className="inline-flex items-center gap-2 text-primary font-bold hover:underline" data-testid="link-fmt-from-cdiff">
                      Full FMT procedure details & candidacy <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { stat: "90%+", label: "Success rate for recurrent C. diff" },
                { stat: "1,000+", label: "FMT procedures performed" },
                { stat: "Since 2014", label: "Over a decade of experience" },
                { stat: "5.0 ★", label: "77 Google reviews" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-serif text-4xl font-bold mb-2">{s.stat}</div>
                  <div className="text-white/70 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dr. Birch card */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="bg-primary/5 border border-primary/15 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                <img src="/images/dr-jonathan-birch.png" alt="Dr. Jonathan Birch NMD" className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md shrink-0 mx-auto md:mx-0" />
                <div>
                  <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">Your FMT Specialist</p>
                  <h3 className="font-serif text-2xl text-foreground mb-1">Dr. Jonathan Birch, NMD, RMSK</h3>
                  <p className="text-sm text-muted-foreground mb-4">Naturopathic Medical Doctor · FMT Specialist since 2014</p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Dr. Birch has performed over 1,000 FMT procedures since establishing Purety Family Medical Clinic in 2014 — making him one of the most experienced outpatient FMT providers in California. He offers telehealth consultations for out-of-area patients and capsule-based FMT protocols that minimize the need for travel.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["1,000+ FMT Procedures", "Outpatient FMT since 2014", "Capsule · Enema · Colonoscopy", "Telehealth Available", "5.0 ★ · 77 Reviews"].map((c, i) => (
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
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">Common Questions About C. diff & FMT</h2>
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
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Serving C. diff Patients Across California and Nationally</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Our clinic is located in Santa Barbara, CA. We offer telehealth consultations and capsule-based FMT for patients throughout California and nationwide. In-person visits are required for enema and colonoscopy-based protocols.</p>
              <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-muted-foreground mb-8">
                {["Santa Barbara", "Los Angeles", "Ventura", "Orange County", "San Diego", "San Luis Obispo", "San Francisco", "Nationwide (capsule FMT)"].map(city => (
                  <span key={city} className="bg-muted/50 rounded-full px-4 py-1.5">{city}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8" asChild>
                  <Link href="/fecal-transplant" data-testid="link-fmt-cta-cdiff">
                    See Full FMT Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 font-bold rounded-full px-8" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Ready to End the C. diff Cycle?" subheading="Start with a consultation — by telehealth or in-person in Santa Barbara. We'll review your history, confirm your candidacy, and recommend the delivery method best suited to your situation." formSource="C. difficile Condition Page" />
      </main>
      <Footer />
    </div>
  );
}
