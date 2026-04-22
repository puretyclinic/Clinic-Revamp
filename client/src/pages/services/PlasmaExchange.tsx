import React, { useEffect, useState } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "wouter";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Droplet, Activity, RefreshCw, AlertCircle, CheckCircle2, ShieldCheck, HeartPulse, ChevronDown, ChevronUp, DollarSign, Microscope, ArrowLeftRight } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { RelatedBlogPosts } from "@/components/RelatedBlogPosts";

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-tpe-${question.slice(0, 20).replace(/\s/g, '-')}`}
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
    question: "How long does a therapeutic plasma exchange procedure take?",
    answer: "Most TPE sessions at Purety Clinic last between 1.5 and 2.5 hours, depending on your body size, plasma volume being exchanged, and venous access. We exchange approximately 1 to 1.5 plasma volumes per session — typically 2.5 to 4 liters. You'll be monitored for 30 minutes after the procedure before discharge. Plan for a 3–3.5 hour total visit for your first session.",
  },
  {
    question: "Is therapeutic plasma exchange painful?",
    answer: "TPE is generally well-tolerated. Two peripheral IV lines are placed — one in each arm — to allow simultaneous draw and return. We apply topical numbing cream prior to needle placement, and we use ultrasound guidance for venous access when needed. During the procedure, most patients read, use a phone, or rest comfortably. Some patients experience mild tingling or cramping from citrate (the anticoagulant used in the circuit) — this resolves quickly by reducing the infusion rate or supplementing with calcium.",
  },
  {
    question: "How many TPE treatments will I need?",
    answer: "Protocol depends on your condition and response. For most autoimmune and inflammatory conditions, we typically start with 5 monthly sessions — one per month — then reassess with labs and clinical evaluation. For acute flares or more severe presentations, a more intensive schedule (2 sessions per week for 2–3 weeks) may be indicated. Long COVID patients often show meaningful improvement after 3–5 sessions. Longevity protocols typically involve 2 sessions per year. Dr. Birch customizes the number and frequency based on your specific case.",
  },
  {
    question: "What conditions can therapeutic plasma exchange treat?",
    answer: "TPE has FDA-approved Category I indications for: myasthenia gravis, Guillain-Barré syndrome, CIDP, TTP, Goodpasture's syndrome, and several hematological conditions. Beyond these, strong clinical evidence supports TPE for: lupus (SLE), multiple sclerosis, NMDA receptor encephalitis, POTS and dysautonomia (autoantibody-driven), Long COVID, and Alzheimer's disease (via the Amylad/Alzheimer's Association Preclinical Alzheimer's Working Group research). We assess every patient individually to determine whether their condition and antibody profile make them a good candidate.",
  },
  {
    question: "Can therapeutic plasma exchange help with Long COVID?",
    answer: "Yes — this is one of the most compelling emerging applications of TPE. Research groups in Germany (Charité Berlin, published in The Lancet) and the United States have documented significant improvement in Long COVID patients following TPE, particularly those with persistent fatigue, brain fog, and autonomic dysfunction (POTS). The mechanism appears to involve removal of autoantibodies targeting adrenergic and muscarinic receptors, as well as microclotting factors identified in Long COVID plasma. Purety Clinic has treated numerous Long COVID patients with TPE and sees it as one of the most effective tools for refractory post-viral syndrome.",
  },
  {
    question: "How much does therapeutic plasma exchange cost?",
    answer: "At Purety Clinic, TPE is offered on a fee-for-service basis. The cost per session reflects the specialized equipment, albumin replacement fluid, nursing time, and physician oversight involved. We provide transparent pricing at consultation so there are no surprises. Because TPE for many of our use cases (Long COVID, longevity, integrative autoimmune) is not standard of care, most patients pay out of pocket. We can provide a superbill for potential out-of-network reimbursement. Please contact our office at (805) 500-8300 for current pricing.",
  },
  {
    question: "Does insurance cover therapeutic plasma exchange?",
    answer: "Coverage depends heavily on your diagnosis and insurer. TPE for FDA-approved indications (myasthenia gravis crisis, TTP, Guillain-Barré, CIDP) may be covered by major insurers and Medicare/Medicaid when performed in a hospital or approved outpatient setting. For off-label use cases — Long COVID, longevity, integrative autoimmune protocols — coverage is generally not available, and patients pay out of pocket. We provide detailed documentation of the procedure and a superbill that patients can submit to their insurer for potential reimbursement. Our staff can help you understand your specific insurance situation at consultation.",
  },
  {
    question: "What is the difference between TPE and IVIG?",
    answer: "Both TPE and IVIG (intravenous immunoglobulin) treat autoimmune conditions by modulating the immune system, but they work through opposite mechanisms. TPE removes pathological antibodies and inflammatory proteins from the circulation — it is a subtractive therapy. IVIG adds pooled healthy immunoglobulins from thousands of donors, which modulate immune function through several pathways including Fc receptor blockade and anti-idiotype antibodies — it is an additive therapy. TPE tends to have faster onset (days vs. weeks), is better suited for acute crises, and removes a broader range of inflammatory mediators. IVIG has longer-lasting effects and is more commonly covered by insurance. Many patients receive both: TPE for acute control and IVIG for maintenance.",
  },
  {
    question: "What is the difference between TPE and kidney dialysis?",
    answer: "Despite superficially similar setups (blood drawn through a machine and returned), TPE and dialysis serve entirely different purposes. Dialysis filters small molecules (creatinine, urea, electrolytes) from the blood to compensate for kidney failure. TPE removes large-molecule plasma proteins — autoantibodies, inflammatory cytokines, immune complexes — and replaces the plasma with albumin. The target molecules are different, the equipment is different, and the clinical indications are completely different. TPE does not treat kidney failure; dialysis does not remove autoantibodies.",
  },
  {
    question: "What is the difference between TPE and EBO2 ozone therapy?",
    answer: "Both are extracorporeal blood therapies but with entirely different mechanisms. EBO2 (extracorporeal blood ozonation) passes blood through an ozone gas mixture to increase oxygen delivery, modulate the immune system, and inactivate pathogens — the blood is returned to the body unchanged in volume. TPE physically removes and replaces the plasma fraction, eliminating the pathological antibodies and proteins it contains. For autoimmune disease and Long COVID, TPE is generally the more mechanistically targeted intervention. Some patients at Purety Clinic receive both as part of a comprehensive protocol — ozone for its immune-modulatory and oxygenation effects alongside TPE for antibody clearance.",
  },
  {
    question: "Is TPE safe? What are the risks?",
    answer: "TPE is a well-established procedure with a strong safety record when performed by experienced practitioners. Common, manageable side effects include: mild citrate toxicity (tingling, cramping — treated with calcium supplementation), temporary fatigue after the session, and mild drop in clotting factors or immunoglobulins with multiple sessions. Serious complications are rare but include: venous access complications (bruising, hematoma), hypotension, allergic reactions to albumin (uncommon), and infection risk from IV access (mitigated by sterile technique). At Purety Clinic, every patient is monitored throughout the procedure and for 30 minutes after. Dr. Birch reviews labs before each session to ensure safe proceeding.",
  },
  {
    question: "Can therapeutic plasma exchange remove environmental toxins and chemicals like BPA and glyphosate?",
    answer: "Yes — and this is now supported by peer-reviewed research. A 2025 study published in Medical Hypotheses (Elsevier) found that serial TPE sessions combined with nutritional supplementation dramatically and significantly reduced levels of bisphenol A (BPA), glyphosate, and butylparaben in participants (p ≤ 0.0006). These synthetic chemicals are highly protein-bound — meaning they circulate attached to plasma proteins, making them difficult to clear through conventional detox methods. Because TPE physically removes the plasma fraction and replaces it with albumin, it directly removes the protein-bound chemicals along with the plasma. At Purety Clinic, we offer TPE as part of a comprehensive chemical detoxification protocol, including baseline and follow-up toxin panel testing and concurrent IV nutritional support.",
  },
  {
    question: "Is therapeutic plasma exchange available as an outpatient procedure?",
    answer: "Yes — at Purety Clinic, TPE is offered entirely on an outpatient basis. Most hospital-based TPE programs require inpatient admission or hospital-adjacent infusion suites, making access difficult and expensive. We have invested in the specialized apheresis equipment needed to offer TPE safely in our dedicated clinical suite in Santa Barbara. After your procedure and a 30-minute monitoring period, most patients drive themselves home (though having a driver for the first session is recommended). We serve patients from Santa Barbara, Ventura, Los Angeles, and throughout California, including remote consultations for those traveling from out of the area.",
  },
];

export default function PlasmaExchange() {
  usePageSEO({
    title: "Therapeutic Plasma Exchange (TPE) Santa Barbara | Plasmapheresis | Purety Clinic",
    description: "Therapeutic plasma exchange (TPE / plasmapheresis) at Purety Clinic in Santa Barbara. Outpatient treatment for autoimmune disease, Long COVID, POTS, and longevity. Call (805) 500-8300.",
    canonicalPath: "/services/plasma-exchange",
  });

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Therapeutic Plasma Exchange (TPE)",
      "alternateName": ["Plasmapheresis", "TPE", "Plasma Exchange", "Apheresis"],
      "description": "Therapeutic Plasma Exchange (TPE) is an advanced outpatient medical procedure that removes harmful autoantibodies, inflammatory proteins, and toxins from the bloodstream by separating and replacing plasma. Offered at Purety Family Medical Clinic in Santa Barbara, CA.",
      "procedureType": "Therapeutic",
      "bodyLocation": "Blood",
      "preparation": "Consultation with Dr. Jonathan Birch to assess candidacy, review labs, and design a treatment protocol.",
      "followUp": "30-minute post-procedure monitoring. Protocol typically involves 1 treatment per month for 5 months, then reassessment.",
      "howPerformed": "Blood is drawn through peripheral IV access in both arms. An apheresis machine separates the plasma from cellular components. Pathological plasma is discarded and replaced with albumin. Cleansed blood components plus replacement fluid are returned to the patient.",
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
          "telephone": "+1-805-500-8300",
          "url": "https://puretyclinic.com"
        }
      }
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Purety Family Medical Clinic offers outpatient therapeutic plasma exchange (TPE / plasmapheresis) in Santa Barbara, CA. Treating autoimmune disease, Long COVID, POTS, and longevity protocols. Serving patients from Ventura, Los Angeles, Oxnard, Thousand Oaks, Goleta, Montecito, Ojai, and throughout Southern California.",
      "url": "https://puretyclinic.com/services/plasma-exchange",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 34.4483, "longitude": -119.7148 },
      "areaServed": [
        { "@type": "City", "name": "Santa Barbara" },
        { "@type": "City", "name": "Ventura" },
        { "@type": "City", "name": "Oxnard" },
        { "@type": "City", "name": "Thousand Oaks" },
        { "@type": "City", "name": "Los Angeles" },
        { "@type": "City", "name": "Goleta" },
        { "@type": "City", "name": "Montecito" },
        { "@type": "City", "name": "Ojai" },
        { "@type": "City", "name": "Carpinteria" }
      ],
      "medicalSpecialty": "IntegrativeMedicine",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "77", "bestRating": "5" }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof f.answer === "string" ? f.answer : f.question
        }
      }))
    };

    const schemas = [
      { id: "tpe-localbusiness-schema", data: localBusinessSchema },
      { id: "tpe-procedure-schema", data: schema },
      { id: "tpe-faq-schema", data: faqSchema },
    ];
    schemas.forEach(({ id, data }) => {
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.id = id;
        (el as HTMLScriptElement).type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
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
                <RefreshCw className="w-4 h-4" />
                <span>Plasmapheresis · Outpatient</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Therapeutic Plasma <span className="italic text-accent">Exchange (TPE)</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Remove pathological autoantibodies, inflammatory proteins, and circulating toxins at their source. One of the most powerful interventions in integrative and conventional medicine for autoimmune disease, Long COVID, and longevity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }} data-testid="button-tpe-consult">
                  Book TPE Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What is TPE */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-xl mb-12 flex gap-4">
                <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800 leading-relaxed">
                  <strong>About our TPE program:</strong> Purety Clinic is one of the very few outpatient clinics in Southern California equipped to perform therapeutic plasma exchange. We have fully embraced this procedure due to its exceptional ability to address autoimmune and inflammatory disease at the source. You will have a dedicated team throughout, and we go the extra mile for your comfort and clinical success.
                </p>
              </div>

              <h2 className="font-serif text-3xl mb-6 text-foreground">What Is Therapeutic Plasma Exchange?</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  Therapeutic Plasma Exchange (TPE) — also called plasmapheresis — is an extracorporeal procedure that physically removes the plasma fraction of blood (which contains autoantibodies, inflammatory cytokines, immune complexes, and other pathological proteins) and replaces it with albumin. The cleansed blood cells are then returned to the body.
                </p>
                <p>
                  Think of it as a systematic reset of your immune milieu. Unlike medications that block specific receptors or pathways, TPE removes a broad range of inflammatory mediators simultaneously — providing a powerful therapeutic window in which the immune system is dramatically quieted and other treatments can work more effectively.
                </p>
              </div>

              <h2 className="font-serif text-3xl mb-6 text-foreground">How It Works</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Droplet, label: "Plasma removed", sub: "Contains antibodies, cytokines, toxins" },
                  { icon: Activity, label: "Red blood cells", sub: "Retained and returned" },
                  { icon: ShieldCheck, label: "White blood cells", sub: "Retained and returned" },
                  { icon: HeartPulse, label: "Platelets", sub: "Retained and returned" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="text-center p-4 bg-muted/20 rounded-xl">
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-sm text-foreground">{label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{sub}</div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-12">
                The removed plasma — containing the pathological substances — is discarded and replaced with albumin. A single session exchanges approximately 1–1.5 plasma volumes (2.5–4 liters), taking 1.5–2.5 hours.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn className="mb-12">
              <h2 className="font-serif text-4xl mb-4 text-center">Conditions That May Benefit from TPE</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">TPE has both FDA-approved Category I indications and a growing body of evidence for off-label use in complex autoimmune and inflammatory disease.</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <FadeIn className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-bold text-foreground mb-4 text-lg">FDA-Approved Indications (Category I)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Myasthenia gravis (acute crisis and pre-thymectomy)",
                    "Guillain-Barré syndrome",
                    "CIDP (Chronic Inflammatory Demyelinating Polyneuropathy)",
                    "Thrombotic Thrombocytopenic Purpura (TTP)",
                    "Goodpasture's syndrome",
                    "Anti-GBM disease",
                    "Hyperviscosity syndromes",
                  ].map(s => <li key={s} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{s}</li>)}
                </ul>
              </FadeIn>
              <FadeIn delay={0.1} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-bold text-foreground mb-4 text-lg">Growing Evidence & Integrative Use</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    { label: "Long COVID", href: "/conditions/long-covid", sub: "Fatigue, brain fog, autonomic dysfunction — autoantibody-mediated" },
                    { label: "POTS & Dysautonomia", href: "/conditions/pots", sub: "Adrenergic & muscarinic receptor autoantibodies" },
                    { label: "Autoimmune Disease", href: "/conditions/autoimmune", sub: "Lupus (SLE), multiple sclerosis, NMDA receptor encephalitis" },
                    { label: "Alzheimer's & Longevity", href: "/conditions/longevity", sub: "Pro-aging plasma dilution — Stanford research program" },
                    { label: "Chemical & Environmental Detox", href: "/blog/tpe-chemical-detox-study-2025", sub: "BPA, glyphosate, parabens — 2025 peer-reviewed evidence" },
                    { label: "Lyme Disease & CIRS", href: "/conditions/lyme-disease", sub: "Inflammatory protein load reduction" },
                    { label: "Mold Illness", href: "/conditions/mold-illness", sub: "Biotoxin and inflammatory mediator clearance" },
                  ].map(({ label, href, sub }) => (
                    <li key={label} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <Link href={href} className="text-primary hover:underline font-medium">{label}</Link>
                        <div className="text-xs text-muted-foreground">{sub}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Long COVID Deep Dive */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <h2 className="font-serif text-3xl mb-6">TPE for Long COVID: What the Research Shows</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Long COVID — persistent symptoms lasting more than 12 weeks after acute SARS-CoV-2 infection — affects an estimated 10–30% of people who contract COVID-19. The most debilitating symptoms (profound fatigue, post-exertional malaise, brain fog, orthostatic intolerance) have been linked in multiple studies to autoantibodies targeting G-protein-coupled receptors, including beta-2 adrenergic and M2/M4 muscarinic receptors.
                </p>
                <p>
                  A landmark 2022 study from Charité Berlin, published in <em>The Lancet</em>, demonstrated that Long COVID patients who received therapeutic plasma exchange showed significant improvement in fatigue, cognitive function, and autonomic symptoms. The mechanism: TPE removed the pathological autoantibodies from circulation, providing a therapeutic window in which the immune system was reset.
                </p>
                <p>
                  Additionally, research by Microclot investigators (including Dr. Resia Pretorius at Stellenbosch University) has identified fibrinogen amyloid microclots in Long COVID patient plasma — clotting structures that resist degradation and impair microcirculation. TPE removes these microclotting factors along with inflammatory proteins, addressing another pathological driver of Long COVID symptoms.
                </p>
                <p>
                  At Purety Clinic, we have treated numerous Long COVID patients with TPE and consider it one of the most effective tools for refractory post-viral syndrome — particularly for patients with documented autonomic dysfunction, POTS, or measurable autoantibodies.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* TPE vs IVIG Comparison */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <ArrowLeftRight className="w-8 h-8 text-primary" />
                <h2 className="font-serif text-3xl">TPE vs. IVIG: What's the Difference?</h2>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">Both TPE and IVIG are used for autoimmune conditions — but they work through opposite mechanisms. Understanding the difference helps you ask the right questions at your consultation.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left p-4 rounded-tl-xl"></th>
                      <th className="text-left p-4 font-bold">Therapeutic Plasma Exchange (TPE)</th>
                      <th className="text-left p-4 font-bold rounded-tr-xl">IVIG</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { label: "Mechanism", tpe: "Removes pathological antibodies and proteins (subtractive)", ivig: "Adds pooled healthy immunoglobulins to modulate immune function (additive)" },
                      { label: "Onset of effect", tpe: "Days — fast response for acute conditions", ivig: "Weeks — slower but more sustained" },
                      { label: "Duration of effect", tpe: "Weeks to months; autoantibodies re-accumulate over time", ivig: "Longer-lasting; regular infusions maintain levels" },
                      { label: "Best for", tpe: "Acute autoimmune crises, antibody-driven disease, Long COVID, longevity", ivig: "Chronic maintenance, primary immune deficiency, conditions well-studied with IVIG" },
                      { label: "Insurance coverage", tpe: "Covered for FDA indications; often OOP for off-label use", ivig: "Generally better-covered by insurance" },
                      { label: "Combination use", tpe: "Often combined with IVIG — TPE for acute reduction, IVIG for maintenance", ivig: "Often combined with TPE for optimal immune modulation" },
                    ].map(({ label, tpe, ivig }, i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 font-semibold text-foreground">{label}</td>
                        <td className="p-4 text-muted-foreground">{tpe}</td>
                        <td className="p-4 text-muted-foreground">{ivig}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <h2 className="font-serif text-3xl mb-8 text-foreground">What to Expect at Purety Clinic</h2>
              <ol className="relative border-l border-gray-200 ml-3 space-y-8 mb-12">
                {[
                  { step: "1", title: "Initial Consultation", body: "Dr. Birch reviews your full medical history, current labs, and treatment goals. We assess your diagnosis, autoantibody profile, and overall candidacy. We also evaluate venous access and explain the protocol, number of sessions, and what to expect." },
                  { step: "2", title: "Pre-Procedure Labs", body: "Before your first session (and before each subsequent session), we review CBC, metabolic panel, coagulation studies, albumin, and condition-specific autoantibody markers to confirm it's safe to proceed." },
                  { step: "3", title: "IV Access", body: "Two peripheral IV lines are placed — one in each arm for draw and return. We apply numbing cream beforehand and use ultrasound guidance when needed. Most patients find IV placement well-tolerated." },
                  { step: "4", title: "Plasma Exchange (1.5–2.5 hours)", body: "Blood flows through the apheresis machine, which continuously separates plasma from cellular components. Pathological plasma is discarded; albumin replacement is mixed with your cells and returned. You relax in a comfortable chair — most patients read, stream video, or rest." },
                  { step: "5", title: "Post-Procedure Monitoring (30 min)", body: "We monitor your vitals and ensure you feel well before discharge. Most patients feel some fatigue that evening and refreshed the following day as the immune load has been reduced. Avoid strenuous activity the day of treatment." },
                ].map(({ step, title, body }) => (
                  <li key={step} className="ml-6">
                    <span className="absolute flex items-center justify-center w-7 h-7 bg-primary rounded-full -left-3.5 ring-8 ring-white text-white text-xs font-bold">{step}</span>
                    <h3 className="font-bold text-lg mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </li>
                ))}
              </ol>
            </FadeIn>

            {/* Benefits */}
            <FadeIn>
              <h2 className="font-serif text-3xl mb-6">Benefits Patients Report</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {[
                  "Significant reduction in fatigue and post-exertional malaise",
                  "Improved cognitive clarity (brain fog resolution)",
                  "Reduced autonomic symptoms (POTS, heart rate variability)",
                  "Decreased joint pain and inflammatory markers",
                  "Reduced autoantibody levels on follow-up labs",
                  "Improved overall sense of wellbeing and energy",
                  "Better response to other treatments following TPE",
                  "Slowing of pro-aging plasma factor load (longevity use)",
                ].map(b => (
                  <div key={b} className="flex items-start gap-3 p-3 bg-muted/20 rounded-xl text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Cost & Insurance */}
            <FadeIn>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-7 h-7 text-blue-700" />
                  <h2 className="font-serif text-2xl text-blue-900">Cost & Insurance</h2>
                </div>
                <div className="space-y-4 text-sm text-blue-800/90">
                  <p>
                    TPE at Purety Clinic is offered on a fee-for-service basis, with transparent pricing provided at consultation. The cost per session reflects specialized apheresis equipment, albumin replacement fluid (typically 1500–3000mL of 5% albumin), nursing oversight, and physician supervision.
                  </p>
                  <p>
                    <strong>Insurance coverage:</strong> TPE for FDA-approved Category I indications (myasthenia gravis crisis, TTP, Guillain-Barré, CIDP) may be covered by major insurers and Medicare when performed in an approved outpatient or hospital setting. For off-label use cases — Long COVID, longevity, integrative autoimmune protocols — coverage is generally not available.
                  </p>
                  <p>
                    We provide detailed procedure documentation and a superbill that you can submit to your insurer for potential out-of-network reimbursement. Our staff is happy to help you understand your coverage at your consultation appointment.
                  </p>
                  <p>
                    <strong>For current pricing, call (805) 500-8300 or submit a consultation request.</strong>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn className="text-center mb-12">
              <Microscope className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything patients ask before their first TPE consultation.</p>
            </FadeIn>
            <FadeIn>
              <div className="bg-white rounded-2xl px-6 shadow-sm">
                {FAQS.map(f => <FAQItem key={f.question} question={f.question} answer={f.answer} />)}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Near You */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <h2 className="font-serif text-3xl mb-4 text-foreground text-center">Outpatient TPE Near You</h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Purety Family Medical Clinic is one of the few outpatient clinics in Southern California offering therapeutic plasma exchange. Most hospital TPE programs require inpatient admission — we offer it safely in our dedicated outpatient suite in Santa Barbara.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { city: "Santa Barbara, CA", note: "Our clinic location" },
                  { city: "Goleta, CA", note: "5 min away" },
                  { city: "Montecito, CA", note: "10 min away" },
                  { city: "Carpinteria, CA", note: "15 min away" },
                  { city: "Ojai, CA", note: "45 min away" },
                  { city: "Ventura, CA", note: "45 min away" },
                  { city: "Oxnard, CA", note: "50 min away" },
                  { city: "Thousand Oaks, CA", note: "1 hr away" },
                  { city: "Los Angeles, CA", note: "1.5 hrs away" },
                ].map(({ city, note }) => (
                  <div key={city} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{city}</p>
                      <p className="text-xs text-muted-foreground">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Out of the area? Remote consultations are available. We serve patients from all of California.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-primary text-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <FadeIn>
              <RefreshCw className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h2 className="font-serif text-4xl mb-6">Advanced Care for Complex Needs</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                If you have an autoimmune condition, Long COVID, or are interested in longevity protocols, we'll work closely with you to assess whether TPE is appropriate — and design a protocol tailored to your case.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-10" asChild>
                <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                  Book TPE Consultation
                </a>
              </Button>
            </FadeIn>
          </div>
        </section>

        <RelatedBlogPosts
          heading="Learn More About Therapeutic Plasma Exchange"
          postIds={["tpe-chemical-detox-study-2025", "tpe-for-long-covid", "tpe-vs-ivig", "therapeutic-plasma-exchange-guide"]}
        />
        <ContactCTA heading="Questions About Plasma Exchange?" subheading="Call (805) 500-8300 or submit a consultation request. Remote consultations available for patients outside Santa Barbara." formSource="Plasma Exchange Page" />
      </main>
      <Footer />
    </div>
  );
}
