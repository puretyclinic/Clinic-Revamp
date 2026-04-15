import { useEffect, useState } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Activity, Zap, Target, Microscope } from "lucide-react";
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
  { question: "Can PRP actually reduce arthritis pain long-term?", answer: "Yes — multiple peer-reviewed studies show PRP reduces pain and improves function in knee, hip, and shoulder osteoarthritis for 12–18 months per treatment cycle. PRP delivers concentrated growth factors directly into the joint, stimulating cartilage repair, reducing inflammatory cytokines, and improving synovial fluid quality. Unlike cortisone, which provides short-term relief while potentially accelerating cartilage breakdown, PRP addresses the underlying biology of the joint." },
  { question: "What joints can be treated with PRP for arthritis?", answer: "Dr. Birch treats arthritis in the knee (medial, lateral, and patellofemoral compartments), hip, shoulder (glenohumeral and AC joint), ankle, wrist, fingers, and facet joints of the lumbar and cervical spine. Each injection is performed under ultrasound guidance to ensure the PRP reaches the correct compartment of the joint." },
  { question: "How many PRP sessions does arthritis require?", answer: "Most patients with mild to moderate osteoarthritis see significant improvement after 2–3 PRP sessions spaced 4–6 weeks apart. Severe arthritis may require 3–5 sessions. Many patients maintain results for 12–18 months before considering a follow-up cycle. Dr. Birch evaluates response and adjusts protocol based on imaging and symptoms." },
  { question: "Is stem cell therapy available for arthritis at Purety?", answer: "Yes. Purety Clinic offers both PRP and stem cell (bone marrow aspirate concentrate) injections for arthritis. For moderate to severe arthritis, stem cell therapy may provide more robust cartilage regeneration by delivering mesenchymal stem cells capable of differentiating into cartilage tissue. Dr. Birch will recommend the appropriate intervention based on your imaging findings and clinical picture." },
  { question: "Does regenerative therapy work for rheumatoid arthritis?", answer: "Regenerative injections are most effective for osteoarthritis (degenerative/mechanical). Rheumatoid arthritis (RA) is an autoimmune condition that typically requires systemic treatment. However, EBO2 ozone therapy and integrative immune support may benefit RA patients by modulating the inflammatory cascade. We evaluate each case individually and coordinate care with your rheumatologist when appropriate." },
  { question: "Is arthritis treatment at Purety covered by insurance?", answer: "PRP and stem cell injections are not covered by most insurance plans, as they are categorized as investigational procedures. Purety Clinic provides transparent, all-inclusive pricing. We are happy to discuss cost and payment options during your consultation." },
];

export default function Arthritis() {
  useEffect(() => {
    document.title = "Arthritis Treatment Santa Barbara | PRP & Regenerative Medicine | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Ultrasound-guided PRP and stem cell therapy for arthritis in Santa Barbara. Dr. Jonathan Birch NMD, RMSK — over 4,000 regenerative injections. Serving Southern & Central California. Call (805) 500-8300.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-[#f0f7f6] to-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
              <Activity className="w-4 h-4" /> Regenerative Arthritis Care
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Arthritis Treatment in Santa Barbara
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              PRP injections and regenerative medicine to reduce joint pain, slow cartilage breakdown, and restore mobility — without surgery or steroids.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-primary text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors flex items-center gap-2" data-testid="button-arthritis-contact">
                  Request a Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="tel:+18055008300" className="border border-primary text-primary px-8 py-3.5 rounded-full font-bold text-sm hover:bg-primary/5 transition-colors" data-testid="link-arthritis-phone">
                (805) 500-8300
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Joints & Arthritis Types We Treat</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Ultrasound-guided precision ensures regenerative therapy reaches the exact site of damage.</p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Knee osteoarthritis — medial, lateral, patellofemoral",
              "Hip osteoarthritis and labral degeneration",
              "Shoulder arthritis — glenohumeral and AC joint",
              "Ankle, wrist, and small joint arthritis",
              "Cervical and lumbar facet joint arthritis",
              "Post-traumatic arthritis after injury or surgery",
              "Early-stage rheumatoid arthritis (integrative support)",
              "Psoriatic arthritis and inflammatory joint conditions",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium" dangerouslySetInnerHTML={{ __html: item }} />
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Arthritis Treatments</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Regenerative approaches that address the biology of arthritis, not just the symptoms.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="w-7 h-7 text-primary" />,
                title: "Ultrasound-Guided PRP Injections",
                desc: "Platelet-rich plasma concentrates your body's growth factors and delivers them directly into the arthritic joint under real-time ultrasound guidance. Clinical studies show meaningful pain reduction and functional improvement lasting 12–18 months."
              },
              {
                icon: <Microscope className="w-7 h-7 text-primary" />,
                title: "Stem Cell Therapy (BMAC)",
                desc: "Bone marrow aspirate concentrate (BMAC) delivers mesenchymal stem cells with regenerative potential to slow cartilage breakdown and support structural repair. Best suited for moderate to severe osteoarthritis unresponsive to PRP alone."
              },
              {
                icon: <Zap className="w-7 h-7 text-primary" />,
                title: "EBO2 Ozone Therapy",
                desc: "For inflammatory arthritis, systemic EBO2 ozone therapy helps modulate immune dysregulation and reduce the oxidative stress driving joint inflammation. Often combined with localized PRP as part of a comprehensive protocol."
              },
              {
                icon: <Activity className="w-7 h-7 text-primary" />,
                title: "Integrative Pain & Nutrition Support",
                desc: "Root-cause evaluation including inflammatory markers, gut health, and nutritional status. Targeted supplementation, anti-inflammatory protocols, and lifestyle medicine to support long-term joint health alongside procedural care."
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">Arthritis Treatment FAQs</h2>
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
