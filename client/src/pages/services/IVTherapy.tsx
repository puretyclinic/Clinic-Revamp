import React, { useEffect, useState } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle2, ChevronDown, ChevronUp, Clock, ShieldCheck, FlaskConical } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { usePageSEO } from "@/hooks/usePageSEO";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-iv-${question.slice(0, 20).replace(/\s/g, '-')}`}
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
    question: "How is IV therapy different from taking oral supplements?",
    answer: "Oral supplements must pass through the digestive tract, where absorption is limited by gut integrity, transit time, and first-pass liver metabolism. Depending on the nutrient, oral bioavailability ranges from 20–60%. Intravenous delivery bypasses all of this — nutrients go directly into the bloodstream at 100% absorption. This means higher therapeutic concentrations are achievable with IV therapy, particularly for Vitamin C (where gram-level doses that are impossible to tolerate orally can be delivered without GI upset), NAD+, and magnesium."
  },
  {
    question: "What is in a Myers Cocktail?",
    answer: "The Myers Cocktail is the most widely used evidence-based IV formula, originally developed by Dr. John Myers at Johns Hopkins. It contains magnesium, calcium, B-vitamins (B1, B2, B3, B5, B6, B12), and Vitamin C — all in buffered saline. It's used for fatigue, migraines, fibromyalgia, upper respiratory infections, asthma, and general immune support. At Purety Clinic we customize the standard formula based on your specific deficiencies and health goals."
  },
  {
    question: "What does NAD+ IV therapy do?",
    answer: "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme essential for energy production in every cell of your body. Levels decline with age and are depleted by chronic stress, alcohol, poor sleep, and illness. IV NAD+ replenishes cellular energy currency, supports DNA repair, activates sirtuins (longevity-associated proteins), and has been studied for its role in addiction recovery, cognitive decline, chronic fatigue, and mitochondrial dysfunction. Sessions typically run 2–4 hours and may be given as a series."
  },
  {
    question: "Is high-dose IV Vitamin C safe?",
    answer: "Yes, for most patients. High-dose IV Vitamin C (25–75g) is well-tolerated and has been studied extensively — including for its role in cancer adjunct therapy, where it can selectively generate hydrogen peroxide in tumor cells at high concentrations. Before high-dose Vitamin C, we screen for G6PD deficiency (a genetic condition where high-dose C can cause red blood cell destruction). With appropriate screening, it is considered safe. Common temporary effects include flushing, thirst, and mild blood sugar changes during infusion."
  },
  {
    question: "How long does an IV therapy session take?",
    answer: "Session length depends on the formula. A Myers Cocktail typically runs 30–45 minutes. High-dose Vitamin C takes 60–90 minutes at 25–50g. NAD+ infusions run 2–4 hours and are administered slowly to minimize flushing and nausea. Glutathione push takes 15–20 minutes as a standalone or can be added to the end of another infusion. Most patients relax in a comfortable reclining chair during their session."
  },
  {
    question: "How many sessions will I need?",
    answer: "It depends on your goals. For acute illness or immune support, a single session often makes a meaningful difference. For chronic fatigue, mitochondrial dysfunction, or long COVID recovery, a series of 6–10 sessions spaced weekly or biweekly typically produces the best results, followed by monthly maintenance. NAD+ for neurological support or addiction recovery is often delivered as a 4–10 day consecutive series. Dr. Birch will recommend a protocol based on your condition and response."
  },
];

const DRIPS = [
  {
    name: "Myers Cocktail",
    badge: "Most Popular",
    color: "bg-blue-50 border-blue-100",
    badgeColor: "bg-blue-600",
    ingredients: "Magnesium, Calcium, B1, B2, B3, B5, B6, B12, Vitamin C",
    best: "Fatigue, migraines, fibromyalgia, immune support, acute viral illness",
    duration: "30–45 min",
  },
  {
    name: "High-Dose Vitamin C",
    badge: "Immune & Cancer Adjunct",
    color: "bg-orange-50 border-orange-100",
    badgeColor: "bg-orange-500",
    ingredients: "Vitamin C 25–75g in buffered saline",
    best: "Immune optimization, cancer support adjunct, viral illness, post-surgical recovery",
    duration: "60–90 min",
  },
  {
    name: "NAD+ Anti-Aging",
    badge: "Longevity",
    color: "bg-purple-50 border-purple-100",
    badgeColor: "bg-purple-600",
    ingredients: "Nicotinamide Adenine Dinucleotide (NAD+) 500–1000mg",
    best: "Cognitive clarity, mitochondrial dysfunction, chronic fatigue, long COVID, addiction recovery",
    duration: "2–4 hours",
  },
  {
    name: "Glutathione Push",
    badge: "Detox & Glow",
    color: "bg-emerald-50 border-emerald-100",
    badgeColor: "bg-emerald-600",
    ingredients: "Reduced glutathione 1000–2000mg",
    best: "Liver detox, skin brightening, neuroprotection, heavy metal exposure",
    duration: "15–20 min",
  },
  {
    name: "Immune Boost",
    badge: "Prevention",
    color: "bg-yellow-50 border-yellow-100",
    badgeColor: "bg-yellow-600",
    ingredients: "Zinc, Selenium, Vitamin C, B-complex, Lysine",
    best: "Illness prevention, cold/flu recovery, post-travel immune reset",
    duration: "45–60 min",
  },
  {
    name: "Chelation",
    badge: "Heavy Metal Detox",
    color: "bg-gray-50 border-gray-200",
    badgeColor: "bg-gray-600",
    ingredients: "EDTA or DMPS + supporting minerals and antioxidants",
    best: "Heavy metal toxicity (lead, mercury, arsenic), cardiovascular disease, atherosclerosis",
    duration: "2–3 hours",
  },
];

export default function IVTherapy() {
  usePageSEO({
    title: "IV Therapy Santa Barbara | Myers Cocktail, NAD+, Vitamin C | Purety Clinic",
    description: "IV therapy at Purety Clinic in Santa Barbara: Myers Cocktail, high-dose Vitamin C, NAD+, glutathione, and chelation. 100% absorption. Call (805) 500-8300.",
    canonicalPath: "/services/iv-therapy",
  });
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "MedicalTherapy",
      "name": "IV Therapy & Nutrient Infusions",
      "alternateName": ["Intravenous Therapy", "Myers Cocktail", "IV Vitamin C", "NAD+ IV", "Chelation Therapy", "Glutathione IV"],
      "description": "Customized intravenous nutrient therapy at Purety Family Medical Clinic in Santa Barbara, CA. Treatments include Myers Cocktail, high-dose Vitamin C, NAD+, glutathione, chelation, and ozone IV.",
      "procedureType": "Therapeutic",
      "performer": { "@type": "Physician", "name": "Dr. Jonathan Birch", "worksFor": { "@type": "MedicalClinic", "name": "Purety Family Medical Clinic", "address": { "@type": "PostalAddress", "streetAddress": "2323 Oak Park Ln, Suite 102", "addressLocality": "Santa Barbara", "addressRegion": "CA", "postalCode": "93105" }, "telephone": "+1-805-500-8300", "url": "https://puretyclinic.com" } }
    };
    const localSchema = {
      "@context": "https://schema.org", "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic", "url": "https://puretyclinic.com/services/iv-therapy",
      "telephone": "+1-805-500-8300", "description": "IV therapy and nutrient infusions in Santa Barbara, CA. Myers Cocktail, NAD+, high-dose Vitamin C, glutathione, chelation. Serving Ventura, Los Angeles, Thousand Oaks, Goleta, and Southern California.",
      "address": { "@type": "PostalAddress", "streetAddress": "2323 Oak Park Ln, Suite 102", "addressLocality": "Santa Barbara", "addressRegion": "CA", "postalCode": "93105", "addressCountry": "US" },
      "medicalSpecialty": "IntegrativeMedicine", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "77", "bestRating": "5" }
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
    const schemas = [
      { id: "iv-therapy-schema", data: schema },
      { id: "iv-local-schema", data: localSchema },
      { id: "iv-faq-schema", data: faqSchema },
    ];
    schemas.forEach(({ id, data }) => {
      const s = document.createElement("script");
      s.type = "application/ld+json"; s.id = id;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
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
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-white/20">
                Cellular Vitality
              </span>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">IV Therapy & <span className="italic text-accent">Nutrient Infusions</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                100% absorption. Direct delivery of vitamins, minerals, and cellular cofactors to supercharge your immune system, mitochondria, and detoxification pathways.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" asChild data-testid="button-iv-consult">
                  <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                    Book IV Session
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why IV */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: ShieldCheck, title: "100% Bioavailability", body: "Oral supplements absorb at 20–60% due to digestive limitations. IV delivers directly into the bloodstream — every milligram goes where it needs to go." },
                { icon: Zap, title: "Therapeutic Concentrations", body: "Some nutrients — like Vitamin C and NAD+ — require blood levels only achievable intravenously. Oral doses simply cannot reach the concentrations shown effective in research." },
                { icon: Clock, title: "Rapid Onset", body: "Effects are felt within hours, not weeks. Energy improvements from NAD+ and Myers Cocktail infusions are often noticeable the same day." },
              ].map(({ icon: Icon, title, body }) => (
                <FadeIn key={title} className="text-center p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Drip Menu */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Our IV Menu</h2>
              <p className="text-muted-foreground">Each formula is customizable to your specific needs and lab results.</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {DRIPS.map(({ name, badge, color, badgeColor, ingredients, best, duration }) => (
                <FadeIn key={name} className={`p-6 rounded-2xl border ${color}`}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-foreground text-lg">{name}</h3>
                    <span className={`text-white text-xs font-bold px-2 py-1 rounded-full ${badgeColor}`}>{badge}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2"><span className="font-semibold">Ingredients:</span> {ingredients}</p>
                  <p className="text-xs text-muted-foreground mb-2"><span className="font-semibold">Best for:</span> {best}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {duration}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">What to Expect</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn>
                <div className="space-y-6">
                  {[
                    { step: "Before", detail: "Arrive hydrated — drink water before your session. Eat a small meal or snack. Wear comfortable clothing with sleeve access at the elbow. No special prep is needed for most formulas (G6PD screen required before high-dose Vitamin C)." },
                    { step: "During", detail: "A small IV catheter is placed (usually in the forearm). You relax in a comfortable reclining chair. Many patients read, work on a laptop, or rest during the infusion. Some NAD+ patients feel mild flushing or chest tightness if the rate is too fast — we adjust immediately." },
                    { step: "After", detail: "You can drive home and resume normal activities after most infusions. Some patients feel energized immediately; others feel a deep relaxation. High-dose Vitamin C and NAD+ may cause mild fatigue the day after as the body processes the therapy — this is normal." },
                  ].map(({ step, detail }) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">{step[0]}</div>
                      <div>
                        <div className="font-bold text-foreground mb-1">{step}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.1} className="bg-muted/20 rounded-3xl p-8">
                <FlaskConical className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-bold text-xl mb-4">Good Candidates for IV Therapy</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Chronic fatigue or burnout",
                    "Long COVID / post-viral syndrome",
                    "Athletes seeking recovery optimization",
                    "Immune support during cancer treatment",
                    "Chronic infection or Lyme disease",
                    "Heavy metal toxicity",
                    "Pre/post-surgical optimization",
                    "Anti-aging and longevity protocols",
                    "Migraine prevention",
                  ].map(s => <li key={s} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" />{s}</li>)}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Frequently Asked Questions</h2>
            </FadeIn>
            <FadeIn>
              <div className="divide-y divide-gray-200 bg-white rounded-2xl px-6">
                {FAQS.map(f => <FAQItem key={f.question} question={f.question} answer={f.answer} />)}
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Ready to Schedule Your IV Session?" subheading="Contact us to discuss which IV formula is right for your goals. Many patients combine IV therapy with ozone treatments for maximum effect." formSource="IV Therapy Page" />
      </main>

      <Footer />
    </div>
  );
}
