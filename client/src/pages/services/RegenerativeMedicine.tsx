import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Activity, Syringe, Bone, CheckCircle2, ArrowRight, ShieldCheck, Star, ChevronDown, ChevronUp, MapPin, Phone } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-regen-${question.slice(0, 20).replace(/\s/g, '-')}`}
      >
        <span className="font-bold text-foreground text-base pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary shrink-0" />}
      </button>
      {open && <div className="pb-5 text-muted-foreground leading-relaxed text-sm">{answer}</div>}
    </div>
  );
}

export default function RegenerativeMedicine() {
  useEffect(() => {
    document.title = "PRP Therapy Santa Barbara | Stem Cell Injections | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "PRP therapy and stem cell injections in Santa Barbara, CA. Dr. Jonathan Birch NMD, RMSK has performed over 4,000 regenerative injections using ultrasound guidance. Joint pain, arthritis, tendon injuries. Call (805) 500-8300.");

    const localSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic — PRP & Regenerative Medicine",
      "description": "Santa Barbara's leading regenerative medicine clinic. Dr. Jonathan Birch NMD, RMSK has performed over 4,000 ultrasound-guided regenerative injections — PRP therapy, stem cell injections, and prolotherapy — for joint pain, arthritis, and sports injuries.",
      "url": "https://puretyclinic.com/services/regenerative",
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
      "medicalSpecialty": ["RegenerativeMedicine", "Orthopedics", "SportsMedicine"],
      "hasMap": "https://maps.google.com/?q=Purety+Family+Medical+Clinic+Santa+Barbara+CA",
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Platelet-Rich Plasma (PRP) Therapy", "description": "Ultrasound-guided PRP injections for tendon injuries, arthritis, and joint pain in Santa Barbara, CA." },
        { "@type": "MedicalProcedure", "name": "Stem Cell / Biologic Injections", "description": "Wharton's Jelly, exosomes, and mesenchymal stem cell injections for severe arthritis and joint degeneration." },
        { "@type": "MedicalProcedure", "name": "Prolotherapy", "description": "Dextrose-based prolotherapy injections for ligament laxity, chronic back pain, and unstable joints." }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "70",
        "bestRating": "5"
      }
    };

    const prpProcedureSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Platelet-Rich Plasma (PRP) Therapy",
      "alternateName": ["PRP injection", "PRP treatment", "platelet therapy"],
      "description": "PRP therapy uses a concentrated preparation of your own blood platelets and growth factors, injected precisely into injured tissue using musculoskeletal ultrasound guidance. Treats tendon injuries, arthritis, rotator cuff tears, knee pain, and more.",
      "procedureType": "Therapeutic",
      "bodyLocation": "Musculoskeletal — joints, tendons, and ligaments",
      "preparation": "Avoid NSAIDs for 1 week prior. No fasting required. Wear comfortable clothing to allow access to the treatment area.",
      "followUp": "Expect mild soreness for 3–7 days. Avoid NSAIDs for 4 weeks post-injection. Follow-up at 4–6 weeks.",
      "howPerformed": "Blood is drawn from the arm, centrifuged to concentrate platelets 5–7x above baseline, and injected under real-time musculoskeletal ultrasound guidance into the target tissue.",
      "performer": {
        "@type": "Physician",
        "name": "Dr. Jonathan Birch",
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "name": "NMD" },
          { "@type": "EducationalOccupationalCredential", "name": "RMSK — Registered in Musculoskeletal Sonography" }
        ],
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
        { "@type": "Question", "name": "What is PRP therapy and how does it work?", "acceptedAnswer": { "@type": "Answer", "text": "Platelet-Rich Plasma (PRP) therapy uses a concentrated preparation of your own blood platelets to deliver a high dose of growth factors directly to an injured area. The platelets are isolated by centrifuging a small blood sample, then injected into the damaged tissue under ultrasound guidance. This accelerates your body's natural healing response." } },
        { "@type": "Question", "name": "How long does PRP therapy take to work?", "acceptedAnswer": { "@type": "Answer", "text": "Most patients begin noticing improvement within 4–8 weeks of their PRP injection. Full results typically develop over 3–6 months as the tissue heals and remodels. Some patients receive a series of 2–3 injections spaced 4–6 weeks apart for optimal results." } },
        { "@type": "Question", "name": "Is PRP therapy painful?", "acceptedAnswer": { "@type": "Answer", "text": "The procedure itself causes mild discomfort at the injection site. A local anesthetic can be used to numb the area beforehand. You should expect soreness for 3–7 days after the injection, which is actually a positive sign that the healing response has been activated. Most patients manage this with ice and acetaminophen." } },
        { "@type": "Question", "name": "What is the difference between PRP and stem cell therapy?", "acceptedAnswer": { "@type": "Answer", "text": "PRP uses your own blood platelets and growth factors to accelerate healing. Stem cell/biologic injections (such as Wharton's Jelly or exosomes) introduce mesenchymal stem cells and signaling molecules that can actively stimulate tissue regeneration, particularly cartilage repair. Biologics are typically recommended for more advanced cases such as moderate-to-severe arthritis where PRP alone may not be sufficient." } },
        { "@type": "Question", "name": "Does Dr. Birch use ultrasound guidance for injections?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Dr. Jonathan Birch is board-registered in Musculoskeletal Sonography (RMSK), which means every injection is performed under real-time ultrasound imaging. This ensures the medication is delivered precisely to the target tissue rather than by anatomical landmark alone — significantly improving accuracy and outcomes." } },
        { "@type": "Question", "name": "How many PRP sessions will I need?", "acceptedAnswer": { "@type": "Answer", "text": "Many patients achieve significant relief from a single well-placed PRP injection. Some conditions — particularly chronic tendinopathies and moderate arthritis — respond better to a series of 2–3 injections. Dr. Birch will discuss a personalized protocol after reviewing your imaging and clinical history." } },
        { "@type": "Question", "name": "Is regenerative medicine covered by insurance?", "acceptedAnswer": { "@type": "Answer", "text": "PRP, prolotherapy, and biologic injections are generally not covered by insurance, as they are considered elective treatments. However, many patients find them cost-effective compared to surgery and its recovery costs. We discuss pricing transparently during your initial consultation." } },
        { "@type": "Question", "name": "Am I a candidate for PRP therapy?", "acceptedAnswer": { "@type": "Answer", "text": "You may be a candidate if you have chronic joint pain that hasn't responded to physical therapy or cortisone shots, want to avoid surgery, have tendon or ligament damage confirmed on imaging, or have early to moderate osteoarthritis. Dr. Birch will review your history and imaging to determine the best approach for your specific case." } }
      ]
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://puretyclinic.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://puretyclinic.com/services" },
        { "@type": "ListItem", "position": 3, "name": "PRP & Regenerative Medicine Santa Barbara", "item": "https://puretyclinic.com/services/regenerative" }
      ]
    };

    const schemas = [
      { id: "regen-local-schema", data: localSchema },
      { id: "regen-prp-schema", data: prpProcedureSchema },
      { id: "regen-faq-schema", data: faqSchema },
      { id: "regen-breadcrumb-schema", data: breadcrumbSchema },
    ];

    schemas.forEach(({ id, data }) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = id;
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
              <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
                PRP &amp; Regenerative<br /><span className="italic text-accent">Medicine</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
                Ultrasound-guided PRP therapy, stem cell injections, and prolotherapy in Santa Barbara — without surgery, without steroids.
              </p>
              <p className="text-sm text-white/60 mb-8">Serving Santa Barbara, Goleta, Montecito, Ventura, Ojai, and all of the Central Coast</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={scrollToForm} data-testid="button-regen-hero-cta">
                  Book a Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300" data-testid="link-regen-hero-call">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Trust bar */}
        <div className="bg-white border-b border-gray-100 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Board-Registered Sonographer (RMSK)</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Ultrasound-Guided Every Injection</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> 4,000+ Injections Performed</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Licensed Medical Clinic</div>
            </div>
          </div>
        </div>

        {/* Why Purety */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Santa Barbara's Ultrasound-Guided Regenerative Specialist
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Dr. Jonathan Birch NMD, RMSK is one of the few practitioners in the Santa Barbara area who is board-registered in Musculoskeletal Sonography — meaning every PRP and regenerative injection is performed under real-time ultrasound imaging, not anatomical guesswork.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  This matters because injection accuracy is one of the strongest predictors of outcome. Studies show that even experienced clinicians miss their target 30–50% of the time without imaging guidance. With ultrasound, every injection is confirmed visually before the needle advances.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  If you've tried PRP elsewhere without success, the delivery may have been the problem — not the therapy.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "RMSK — Board-Registered Sonography",
                    "Real-time ultrasound guidance",
                    "TOBI Orthobiologic Institute trained",
                    "Personalized injection protocols",
                    "No surgery, no steroids",
                    "In-office, same-day procedure",
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
                  {[
                    { label: "Regenerative Injections Performed", value: "4,000+" },
                    { label: "Years in Practice", value: "10+" },
                    { label: "Injection Accuracy Improvement\nwith Ultrasound Guidance", value: "2–3×" },
                    { label: "Google Rating", value: "5.0★" },
                  ].map((s, i) => (
                    <div key={i} className="bg-[#f8fafb] rounded-2xl p-5 border border-gray-100 flex items-center gap-5">
                      <div className="text-3xl font-bold font-serif text-primary shrink-0 w-20 text-center leading-tight">{s.value}</div>
                      <div className="font-medium text-foreground text-sm whitespace-pre-line">{s.label}</div>
                    </div>
                  ))}
                  <Link href="/dr-jonathan-birch" data-testid="link-regen-dr-birch">
                    <div className="mt-3 inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-accent transition-colors">
                      View Dr. Birch's Full Credentials <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
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
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Treatments We Offer</h2>
                <p className="text-muted-foreground text-lg">Every treatment is tailored to your imaging, history, and health goals</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">PRP Therapy</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    Platelet-Rich Plasma (PRP) concentrates your own platelets 5–7× above baseline and delivers a potent dose of growth factors directly to injured tissue under ultrasound guidance.
                  </p>
                  <h4 className="font-bold text-sm text-foreground mb-3">Conditions Treated:</h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground mt-auto">
                    {["Knee osteoarthritis", "Rotator cuff tears", "Tennis & golfer's elbow", "Achilles tendinopathy", "Plantar fasciitis", "Hip bursitis & labral tears", "Shoulder impingement", "Patellar tendinopathy"].map((c, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" /> {c}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                    <Bone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Stem Cell &amp; Biologic Injections</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    Wharton's Jelly, exosomes, and mesenchymal stem cells (MSC) provide a scaffold of growth factors, cytokines, and regenerative signals. Recommended for more advanced joint degeneration where PRP alone may be insufficient.
                  </p>
                  <h4 className="font-bold text-sm text-foreground mb-3">Conditions Treated:</h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground mt-auto">
                    {["Moderate-to-severe osteoarthritis", "Meniscus tears", "Hip degeneration", "Avascular necrosis", "Failed joint replacement", "Degenerative disc disease", "Cartilage defects", "Complex ligament injuries"].map((c, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" /> {c}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                    <Syringe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Prolotherapy</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    Dextrose-based prolotherapy stimulates mild, controlled inflammation at ligament and tendon attachment points, triggering the body to lay down new collagen and tighten lax or unstable structures.
                  </p>
                  <h4 className="font-bold text-sm text-foreground mb-3">Conditions Treated:</h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground mt-auto">
                    {["Chronic low back pain", "Sacroiliac joint instability", "Ligament laxity", "Ankle instability", "Whiplash / cervical instability", "Temporomandibular (TMJ)", "Hypermobility syndromes", "Recurrent sprains"].map((c, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" /> {c}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What to Expect</h2>
                <p className="text-muted-foreground text-lg">Most procedures take under an hour and are performed at our Santa Barbara clinic</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Consultation & Imaging Review", desc: "Dr. Birch reviews your MRI or X-rays, examines the area under ultrasound, and confirms your candidacy for regenerative treatment." },
                { step: "2", title: "Personalized Protocol", desc: "You receive a tailored plan — whether that's a single PRP injection, a series of prolotherapy sessions, or a combination with biologics." },
                { step: "3", title: "Ultrasound-Guided Treatment", desc: "Every injection is performed under real-time musculoskeletal ultrasound, with the needle position confirmed before delivery." },
                { step: "4", title: "Recovery & Follow-up", desc: "Expect mild soreness for 3–7 days. Avoid NSAIDs for 4 weeks. Follow-up at 4–6 weeks to assess progress and plan next steps." },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">{s.step}</div>
                    <h3 className="font-serif text-base font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
                <p className="text-muted-foreground text-lg">Real patients. Real relief. From Santa Barbara and the Central Coast.</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { initials: "T.M.", type: "PRP Knee Patient · Santa Barbara", quote: "I was told I needed a knee replacement. After two PRP sessions with Dr. Birch I'm back to hiking. The ultrasound guidance made a real difference — I'd had PRP done elsewhere before with no result." },
                { initials: "S.K.", type: "Shoulder PRP Patient · Montecito", quote: "Rotator cuff tear, no surgery needed. Dr. Birch walked me through every step and I could see the needle go exactly where it needed to on the ultrasound screen. Three months later I'm back to tennis." },
                { initials: "R.G.", type: "Prolotherapy Patient · Ventura", quote: "Chronic low back instability for six years. I'd tried everything. Dr. Birch's prolotherapy series was the first thing that gave me lasting stability, not just temporary relief." },
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
                  data-testid="link-regen-google-reviews"
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
                  Our Santa Barbara clinic is easily accessible from throughout the Central Coast and Southern California. Most patients come from:
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
                      <div className="font-bold text-sm text-foreground">PRP Therapy near {loc.city}</div>
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
                  data-testid="link-regen-directions"
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
                <p className="text-muted-foreground text-lg">Common questions about PRP and regenerative medicine in Santa Barbara</p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
                <FAQItem
                  question="What is PRP therapy and how does it work?"
                  answer="Platelet-Rich Plasma (PRP) therapy uses a concentrated preparation of your own blood platelets to deliver a high dose of growth factors directly to an injured area. The platelets are isolated by centrifuging a small blood sample, then injected into the damaged tissue under ultrasound guidance. This accelerates your body's natural healing response."
                />
                <FAQItem
                  question="How long does PRP therapy take to work?"
                  answer="Most patients begin noticing improvement within 4–8 weeks of their PRP injection. Full results typically develop over 3–6 months as the tissue heals and remodels. Some patients receive a series of 2–3 injections spaced 4–6 weeks apart for optimal results."
                />
                <FAQItem
                  question="Is PRP therapy painful?"
                  answer="The procedure itself causes mild discomfort at the injection site. A local anesthetic can be used to numb the area beforehand. You should expect soreness for 3–7 days after the injection, which is actually a positive sign that the healing response has been activated. Most patients manage this with ice and acetaminophen."
                />
                <FAQItem
                  question="What is the difference between PRP and stem cell therapy?"
                  answer="PRP uses your own blood platelets and growth factors to accelerate healing. Stem cell/biologic injections (such as Wharton's Jelly or exosomes) introduce mesenchymal stem cells and signaling molecules that can actively stimulate tissue regeneration, particularly cartilage repair. Biologics are typically recommended for more advanced cases such as moderate-to-severe arthritis where PRP alone may not be sufficient."
                />
                <FAQItem
                  question="Does Dr. Birch use ultrasound guidance for injections?"
                  answer="Yes. Dr. Jonathan Birch is board-registered in Musculoskeletal Sonography (RMSK), which means every injection is performed under real-time ultrasound imaging. This ensures the medication is delivered precisely to the target tissue rather than by anatomical landmark alone — significantly improving accuracy and outcomes."
                />
                <FAQItem
                  question="How many PRP sessions will I need?"
                  answer="Many patients achieve significant relief from a single well-placed PRP injection. Some conditions — particularly chronic tendinopathies and moderate arthritis — respond better to a series of 2–3 injections. Dr. Birch will discuss a personalized protocol after reviewing your imaging and clinical history."
                />
                <FAQItem
                  question="Is regenerative medicine covered by insurance?"
                  answer="PRP, prolotherapy, and biologic injections are generally not covered by insurance, as they are considered elective treatments. However, many patients find them cost-effective compared to surgery and its recovery costs. We discuss pricing transparently during your initial consultation."
                />
                <FAQItem
                  question="Am I a candidate for PRP therapy?"
                  answer="You may be a candidate if you have chronic joint pain that hasn't responded to physical therapy or cortisone shots, want to avoid surgery, have tendon or ligament damage confirmed on imaging, or have early to moderate osteoarthritis. Dr. Birch will review your history and imaging to determine the best approach for your specific case."
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Stop Managing Pain. Start Healing.</h2>
              <p className="text-white/80 text-lg mb-8">Schedule a consultation with Dr. Birch to find out if you're a candidate for PRP or regenerative therapy in Santa Barbara.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-lg px-8" onClick={scrollToForm} data-testid="button-regen-bottom-cta">
                  Book Your Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold rounded-lg px-8" asChild>
                  <a href="tel:+18055008300" data-testid="link-regen-bottom-call"><Phone className="w-4 h-4 mr-2" /> Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Questions About PRP or Stem Cell Therapy?" subheading="Contact us to learn which regenerative treatment is right for your condition." formSource="Regenerative Medicine Page" />
      </main>

      <Footer />
    </div>
  );
}
