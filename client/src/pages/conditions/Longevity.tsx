import { useEffect, useState } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Activity, Zap, Shield, Microscope, Star, Target } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";

function FAQItem({ question, answer }: { question: string; answer: string | React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button className="w-full flex items-center justify-between py-5 text-left" onClick={() => setOpen(!open)} data-testid={`faq-toggle-${String(question).slice(0, 20).replace(/\s/g, "-")}`}>
        <span className="font-bold text-foreground text-lg pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary shrink-0" />}
      </button>
      {open && <div className="pb-5 text-muted-foreground leading-relaxed">{answer}</div>}
    </div>
  );
}

const FAQS = [
  { question: "What does longevity medicine actually involve?", answer: "Longevity medicine — also called health span medicine or functional aging medicine — focuses on identifying and addressing the biological drivers of aging before they manifest as disease. At Purety, this includes comprehensive biomarker assessment (inflammation, hormones, oxidative stress, telomere biology), advanced therapies like EBO2 ozone and therapeutic plasma exchange, microbiome optimization, and personalized protocols targeting the hallmarks of aging: mitochondrial dysfunction, cellular senescence, chronic inflammation, and stem cell exhaustion." },
  { question: "How does EBO2 ozone therapy support longevity?", answer: "EBO2 (extracorporeal blood oxygenation and ozonation) processes a significant volume of blood through an extracorporeal circuit, exposing it to medical ozone and UV light. This stimulates mitochondrial function, activates antioxidant pathways, modulates immune balance, and reduces the systemic inflammatory burden associated with accelerated aging. Many patients report significant improvements in energy, cognitive clarity, and physical resilience after a series of EBO2 treatments." },
  { question: "What is therapeutic plasma exchange (TPE) and how does it relate to aging?", answer: "Therapeutic plasma exchange removes aging-associated plasma factors — including pro-inflammatory proteins, senescence-associated secretory phenotype (SASP) components, and accumulated metabolic byproducts — and replaces them with fresh albumin or donor plasma. Research at Stanford and other institutions has shown that diluting \"old plasma\" can reduce markers of aging and improve cognitive function. TPE at Purety is offered to carefully selected candidates as part of a comprehensive longevity protocol." },
  { question: "Can gut health affect longevity?", answer: "The gut microbiome is now recognized as a central regulator of immune function, inflammation, metabolic health, and even neurological aging. Diverse, balanced gut microbiota are consistently associated with healthy aging — the \"microbiome of centenarians\" is a well-documented research focus. Microbiome optimization through FMT, targeted supplementation, and dietary intervention is a core component of our longevity approach." },
  { question: "Do you offer comprehensive longevity lab panels?", answer: "Yes. Our longevity evaluation includes advanced biomarker panels beyond standard annual labs: inflammatory markers (hsCRP, IL-6, TNF-alpha), hormonal optimization (thyroid, sex hormones, DHEA, cortisol), metabolic health (insulin sensitivity, lipid particle sizing, HbA1c), oxidative stress markers, nutritional status, and organ function panels. We use this data to design individualized protocols." },
  { question: "Who is a good candidate for longevity medicine at Purety?", answer: "Longevity medicine is appropriate for adults of any age who want to optimize health span, not just disease avoidance. Our patients include high-performing professionals in their 40s–50s looking to maintain peak function, individuals in their 60s–70s focused on active aging, and patients with chronic inflammatory conditions seeking to address root-cause biology. We meet you where you are and build a protocol around your goals and biomarker profile." },
];

export default function Longevity() {
  useEffect(() => {
    document.title = "Longevity Medicine Santa Barbara | EBO2, TPE & Health Span | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Longevity and health span medicine in Santa Barbara. EBO2 ozone therapy, therapeutic plasma exchange, microbiome optimization, and advanced biomarker testing. Dr. Jonathan Birch NMD. Call (805) 500-8300.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-[#f0f7f6] to-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
              <Star className="w-4 h-4" /> Health Span Medicine
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Longevity Medicine in Santa Barbara
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Advanced therapies and comprehensive biomarker testing to address the root drivers of aging — so you can feel and function at your best for decades to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-primary text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors flex items-center gap-2" data-testid="button-longevity-contact">
                  Request a Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="tel:+18055008300" className="border border-primary text-primary px-8 py-3.5 rounded-full font-bold text-sm hover:bg-primary/5 transition-colors" data-testid="link-longevity-phone">
                (805) 500-8300
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What We Target</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The biological hallmarks of aging that drive disease, decline, and loss of vitality.</p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Chronic systemic inflammation (inflammaging)",
              "Mitochondrial dysfunction and energy decline",
              "Oxidative stress and free radical accumulation",
              "Immune senescence and immune dysregulation",
              "Gut microbiome aging and dysbiosis",
              "Hormonal decline and metabolic dysfunction",
              "Cognitive decline and brain aging",
              "Cardiovascular aging and vascular stiffness",
              "Cellular senescence and SASP accumulation",
              "Nutrient depletion and absorption decline",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 bg-[#f8fbfb]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Longevity Therapies</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Science-backed interventions targeting the biology of aging at the cellular level.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Activity className="w-7 h-7 text-primary" />,
                title: "Therapeutic Plasma Exchange (TPE)",
                desc: "Removes pro-aging plasma factors and replaces them with fresh albumin, effectively \"diluting\" the systemic aging environment. Emerging research supports TPE as one of the most promising systemic anti-aging interventions available today."
              },
              {
                icon: <Zap className="w-7 h-7 text-primary" />,
                title: "EBO2 Ozone Therapy",
                desc: "Our flagship longevity treatment. EBO2 processes blood extracorporeally through ozone and UV light, stimulating mitochondrial activity, reducing inflammatory burden, and activating antioxidant defense systems. Patients report significant improvements in energy, cognitive sharpness, and physical recovery."
              },
              {
                icon: <Microscope className="w-7 h-7 text-primary" />,
                title: "Microbiome Optimization & FMT",
                desc: "Gut microbiome diversity is a key predictor of healthy aging. We use comprehensive microbiome analysis, targeted dietary and supplement protocols, and FMT where appropriate to restore the microbial diversity associated with long-lived individuals."
              },
              {
                icon: <Shield className="w-7 h-7 text-primary" />,
                title: "Advanced Biomarker Testing & Protocols",
                desc: "Comprehensive panels measuring inflammation, hormones, metabolic health, oxidative stress, and organ function — followed by personalized intervention. We track your biology over time to quantify the impact of treatment and adjust your protocol."
              },
              {
                icon: <Target className="w-7 h-7 text-primary" />,
                title: "Regenerative Medicine & PRP",
                desc: "Age-related joint degeneration, tendon breakdown, and tissue loss are hallmarks of biological aging. Ultrasound-guided PRP (platelet-rich plasma) injections deliver concentrated growth factors to joints and soft tissue — slowing degeneration, reducing inflammation, and restoring function. Dr. Birch has performed over 4,000 regenerative injections with RMSK-certified precision."
              },
              {
                icon: <Microscope className="w-7 h-7 text-primary" />,
                title: "Muse Cell Therapy",
                desc: "Multilineage-differentiating stress-enduring (Muse) cells are a rare, naturally occurring stem cell population with exceptional regenerative potential. Unlike conventional stem cell therapies, Muse cells home to sites of damage and differentiate into the specific cell types needed for repair — making them one of the most targeted and promising regenerative interventions available for longevity and tissue restoration."
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">{t.icon}</div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{t.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Longevity Medicine FAQs</h2>
          </FadeIn>
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </FadeIn>
          ))}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
