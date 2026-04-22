import React, { useEffect, useState } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Sun, Leaf, Shield, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, FlaskConical, Microscope } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { usePageSEO } from "@/hooks/usePageSEO";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-cancer-${question.slice(0, 20).replace(/\s/g, '-')}`}
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
    question: "Does Purety Clinic treat cancer directly?",
    answer: "No. We provide supportive, integrative care that works alongside your oncologist's treatment — not instead of it. We do not offer chemotherapy, radiation, or surgical cancer treatment. Our goal is to strengthen your body and immune system so you can tolerate conventional treatment better, recover faster, and maintain quality of life throughout the process."
  },
  {
    question: "Is high-dose IV Vitamin C evidence-based for cancer support?",
    answer: "Yes — it is one of the most researched integrative oncology interventions. At the high concentrations achievable only intravenously (25–75g), Vitamin C selectively generates hydrogen peroxide in the tumor microenvironment, which can damage cancer cells while leaving healthy cells unaffected. Multiple Phase I and II clinical trials (including at the NIH) have confirmed its safety alongside conventional chemotherapy. It also helps reduce fatigue, nausea, and inflammation during treatment."
  },
  {
    question: "What is mistletoe therapy (Iscador)?",
    answer: "Mistletoe (Viscum album, sold as Iscador or Helixor) is one of the most extensively studied complementary cancer therapies in Europe, with over 100 clinical trials. It is typically administered by subcutaneous injection and works by stimulating natural killer (NK) cells and T-lymphocytes, inducing apoptosis in tumor cells, and reducing the immunosuppression caused by conventional cancer treatments. It is widely used in integrative oncology in Europe and increasingly in the US."
  },
  {
    question: "Can I receive integrative support while on chemotherapy or immunotherapy?",
    answer: "In most cases, yes — but specific interventions need to be evaluated against your chemotherapy protocol. Some antioxidants theoretically could interfere with certain chemotherapy mechanisms, while others have been shown to enhance their effects. Dr. Birch reviews your specific treatment plan before recommending any supplements or IV nutrients, and coordinates with your oncologist when appropriate. We never recommend anything that could compromise your conventional treatment."
  },
  {
    question: "What role does nutrition play in cancer support?",
    answer: "Substantial. Cancer cells rely heavily on glucose for energy (the Warburg effect). A ketogenic or low-glycemic diet reduces the glucose available to rapidly dividing cancer cells while supporting healthy tissue. Beyond macronutrient strategy, specific nutrients have anti-cancer properties: green tea catechins (EGCG), curcumin, resveratrol, and cruciferous vegetable compounds have all been studied for their role in modulating cancer biology. We design personalized nutritional protocols based on cancer type, treatment status, and metabolic testing."
  },
  {
    question: "What is the goal of integrative cancer support — survival or quality of life?",
    answer: "Both. Our primary goals are: (1) helping you tolerate conventional treatment with fewer side effects, (2) maintaining your immune function and nutritional status throughout treatment, (3) reducing cancer recurrence risk through long-term terrain optimization, and (4) supporting your physical and emotional wellbeing. The evidence suggests that patients who maintain good nutritional status and immune function during cancer treatment have better outcomes — so quality of life and survival are not separate goals."
  },
];

const THERAPIES = [
  { icon: Shield, title: "High-Dose IV Vitamin C", desc: "At 25–75g intravenously, Vitamin C reaches concentrations impossible with oral dosing. At these levels it selectively generates oxidative stress in tumor cells while protecting healthy tissue. Reduces fatigue and nausea during chemotherapy.", color: "bg-blue-50 border-blue-100", iconBg: "bg-blue-100 text-blue-700" },
  { icon: Leaf, title: "Mistletoe Therapy (Iscador)", desc: "One of the most researched complementary cancer therapies in Europe. Stimulates NK cells and T-lymphocytes, reduces treatment side effects, and has been shown in multiple trials to improve quality of life and in some studies, progression-free survival.", color: "bg-green-50 border-green-100", iconBg: "bg-green-100 text-green-700" },
  { icon: FlaskConical, title: "Ozone Therapy (EBO2)", desc: "Extracorporeal blood ozonation increases oxygen delivery to tissues, modulates immune function, and may reduce tumor hypoxia — a driver of chemo and radiation resistance. Used adjunctively, not as primary therapy.", color: "bg-amber-50 border-amber-100", iconBg: "bg-amber-100 text-amber-700" },
  { icon: Sun, title: "Nutritional Medicine", desc: "Personalized ketogenic or anti-inflammatory dietary protocols, targeted nutrient therapy, and glucose management to support healthy tissue while starving rapidly-dividing cells of their preferred energy substrate.", color: "bg-orange-50 border-orange-100", iconBg: "bg-orange-100 text-orange-700" },
  { icon: Microscope, title: "Detoxification Support", desc: "Chemotherapy and radiation create significant metabolic waste. We support hepatic detoxification pathways with IV glutathione, NAC, milk thistle, and lymphatic support protocols to help your liver and kidneys process treatment byproducts.", color: "bg-purple-50 border-purple-100", iconBg: "bg-purple-100 text-purple-700" },
  { icon: Heart, title: "Psycho-Oncology & Stress", desc: "Chronic stress and elevated cortisol suppress immune function and promote inflammatory pathways associated with cancer progression. We address the mind-body component through cortisol testing, adaptogenic herbs, and mind-body techniques.", color: "bg-rose-50 border-rose-100", iconBg: "bg-rose-100 text-rose-700" },
];

export default function CancerSupport() {
  usePageSEO({
    title: "Integrative Cancer Support Santa Barbara | IV Vitamin C, Mistletoe | Purety Clinic",
    description: "Integrative oncology support at Purety Clinic in Santa Barbara. High-dose IV Vitamin C, mistletoe therapy, ozone, and naturopathic protocols to support conventional cancer treatment. Call (805) 500-8300.",
    canonicalPath: "/services/cancer-support",
  });
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org", "@type": "MedicalTherapy",
      "name": "Integrative Cancer Support",
      "alternateName": ["Holistic Cancer Care", "Integrative Oncology", "Complementary Cancer Therapy", "High-Dose IV Vitamin C", "Mistletoe Therapy"],
      "description": "Integrative cancer support at Purety Family Medical Clinic in Santa Barbara, CA. High-dose IV Vitamin C, mistletoe therapy, ozone therapy, and naturopathic protocols to support patients through conventional cancer treatment.",
      "procedureType": "Supportive",
      "relevantSpecialty": "Oncologic",
      "performer": { "@type": "Physician", "name": "Dr. Jonathan Birch", "worksFor": { "@type": "MedicalClinic", "name": "Purety Family Medical Clinic", "telephone": "+1-805-500-8300", "url": "https://puretyclinic.com" } }
    };
    const localSchema = {
      "@context": "https://schema.org", "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic", "url": "https://puretyclinic.com/services/cancer-support",
      "telephone": "+1-805-500-8300", "description": "Integrative oncology and holistic cancer support in Santa Barbara, CA. Serving Ventura, Los Angeles, Thousand Oaks, and Southern California.",
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
      { id: "cancer-support-schema", data: schema },
      { id: "cancer-local-schema", data: localSchema },
      { id: "cancer-faq-schema", data: faqSchema },
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
                Integrative Oncology Support
              </span>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Holistic Cancer <span className="italic text-accent">Support</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Evidence-based complementary therapies to strengthen your immune system, reduce side effects, and support your body through conventional cancer treatment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" asChild data-testid="button-cancer-consult">
                  <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                    Book Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Notice & Philosophy */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="flex items-start gap-4 p-6 bg-blue-50 text-blue-900 rounded-xl mb-12 border border-blue-100">
                <AlertCircle className="w-6 h-6 shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  <strong>Important:</strong> We do not treat cancer directly. We provide supportive, integrative care to work alongside your oncologist. Our goal is to keep your healthy cells strong, reduce treatment side effects, and support immune function throughout your healing journey.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="font-serif text-3xl text-foreground mb-6">Strengthening the Terrain</h2>
                  <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4 text-base">
                    <p>
                      Cancer treatment focuses on the tumor. Integrative oncology focuses on <em>you</em> — the host. A body with robust immune function, optimal nutrition, and low systemic inflammation tolerates conventional treatment better and recovers more completely.
                    </p>
                    <p>
                      Dr. Birch works alongside your oncologist, reviewing your specific treatment protocol before recommending any supplements or IV therapies to ensure nothing interferes with your primary treatment.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Fewer side effects from chemo/radiation", sub: "Nutritional status and antioxidant support reduce treatment toxicity" },
                    { label: "Stronger immune response", sub: "NK cell and T-lymphocyte activation via mistletoe and ozone" },
                    { label: "Better treatment outcomes", sub: "Patients who maintain nutritional status have consistently better prognoses" },
                    { label: "Improved quality of life", sub: "Fatigue, nausea, pain, and cognitive effects can be meaningfully reduced" },
                  ].map(({ label, sub }) => (
                    <div key={label} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground text-sm">{label}</div>
                        <div className="text-xs text-muted-foreground">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Therapies */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Integrative Therapies We Offer</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Each protocol is individualized based on cancer type, stage, current treatment, and overall health picture.</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {THERAPIES.map(({ icon: Icon, title, desc, color, iconBg }) => (
                <FadeIn key={title} className={`p-8 rounded-2xl border ${color}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Frequently Asked Questions</h2>
            </FadeIn>
            <FadeIn>
              <div className="divide-y divide-gray-100">
                {FAQS.map(f => <FAQItem key={f.question} question={f.question} answer={f.answer} />)}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="font-serif text-4xl mb-6">You Are Not Alone</h2>
            <p className="text-muted-foreground mb-8">
              Let us build a comprehensive support plan to walk alongside you and your oncology team through your healing journey.
            </p>
            <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
              <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                Consult with Dr. Birch
              </a>
            </Button>
          </div>
        </section>

        <ContactCTA heading="Interested in Integrative Cancer Support?" subheading="Contact us to discuss how we can support your treatment journey alongside your oncologist." formSource="Cancer Support Page" />
      </main>

      <Footer />
    </div>
  );
}
