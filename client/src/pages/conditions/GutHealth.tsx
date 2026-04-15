import { useEffect, useState } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Activity, Microscope, Shield, Zap } from "lucide-react";
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
  { question: "What chronic GI conditions do you treat?", answer: "We treat a wide spectrum of chronic gastrointestinal conditions including recurrent C. difficile infection, inflammatory bowel disease (Crohn's and ulcerative colitis), irritable bowel syndrome (IBS), small intestinal bacterial overgrowth (SIBO), post-antibiotic dysbiosis, leaky gut syndrome, chronic bloating and motility disorders, and microbiome-related conditions such as food sensitivities and histamine intolerance." },
  { question: "Is FMT right for my gut condition?", answer: "FMT (fecal microbiota transplant) is FDA-cleared for recurrent C. difficile infection and has strong evidence for other dysbiosis-related conditions. During your consultation, Dr. Birch reviews your history, prior treatments, and microbiome data to assess candidacy. Many conditions that haven't responded to standard GI care respond well to microbiome restoration through FMT." },
  { question: "Can you treat IBS and SIBO at Purety?", answer: "Yes. IBS and SIBO are often rooted in microbiome imbalance and gut dysmotility. We take an integrative approach combining herbal and pharmaceutical antimicrobials for SIBO eradication, microbiome restoration, dietary protocols (low-FODMAP, elemental), and motility support. For patients with treatment-resistant IBS, FMT is increasingly supported by emerging research as a reset for gut dysbiosis." },
  { question: "Do you offer remote consultations for GI conditions?", answer: "Yes. Initial consultations for most GI conditions can be conducted via telehealth. We review your history, prior testing, and current symptoms, then design a protocol — many of which can be initiated remotely including capsule-based FMT. In-person visits are required for colonoscopy-based FMT delivery." },
  { question: "How is gut microbiome testing used in treatment?", answer: "Comprehensive stool analysis (including PCR-based microbiome sequencing, pathogen panels, and inflammatory markers) gives us an objective window into the state of your gut. This guides both treatment selection and monitoring — allowing us to confirm whether microbiome composition improves with treatment and adjust protocols accordingly." },
  { question: "How does Purety's approach differ from a standard GI doctor?", answer: "Standard gastroenterology focuses primarily on structural diagnosis and pharmaceutical management. At Purety, we integrate functional medicine, microbiome science, nutritional biochemistry, and procedural interventions like FMT to address the root causes of chronic GI dysfunction. We spend more time with each patient, order more comprehensive functional testing, and take a longer-term view of gut health." },
];

export default function GutHealth() {
  useEffect(() => {
    document.title = "Chronic Gastrointestinal Conditions Treatment | FMT & Gut Health | Purety Clinic Santa Barbara";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Integrative treatment for chronic GI conditions including IBS, Crohn's, C. diff, SIBO, and gut dysbiosis. FMT specialists in Santa Barbara. Dr. Jonathan Birch NMD — 1,000+ FMT procedures. Call (805) 500-8300.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-[#f0f7f6] to-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
              <Microscope className="w-4 h-4" /> Microbiome & GI Specialists
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Chronic Gastrointestinal Conditions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Root-cause integrative care for IBS, Crohn's, C. diff, SIBO, and chronic gut dysbiosis — including FMT from one of the country's most experienced practitioners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-primary text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors flex items-center gap-2" data-testid="button-gut-contact">
                  Request a Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="tel:+18055008300" className="border border-primary text-primary px-8 py-3.5 rounded-full font-bold text-sm hover:bg-primary/5 transition-colors" data-testid="link-gut-phone">
                (805) 500-8300
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">GI Conditions We Treat</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From acute infection to chronic microbiome dysfunction — comprehensive care for the full spectrum of gut health.</p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Recurrent C. difficile infection (FMT-eligible)",
              "Irritable Bowel Syndrome (IBS-D, IBS-C, IBS-M)",
              "Small Intestinal Bacterial Overgrowth (SIBO)",
              "Crohn's disease and ulcerative colitis (IBD)",
              "Post-antibiotic gut dysbiosis",
              "Leaky gut and intestinal permeability",
              "Chronic bloating, gas, and motility disorders",
              "Food sensitivities and histamine intolerance",
              "Gut-brain axis disorders and microbiome-related mood issues",
              "Microscopic colitis and functional GI disorders",
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Approach to Gut Health</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Microscope className="w-7 h-7 text-primary" />,
                title: "Fecal Microbiota Transplant (FMT)",
                desc: "Dr. Birch has performed over 1,000 FMT procedures — one of the highest volumes in the country. FMT uses carefully screened donor microbiota to restore a healthy, diverse gut ecosystem. FDA-cleared for recurrent C. diff, with emerging evidence for IBD and IBS."
              },
              {
                icon: <Activity className="w-7 h-7 text-primary" />,
                title: "Functional GI Testing",
                desc: "Comprehensive microbiome sequencing, breath testing for SIBO and H. pylori, intestinal permeability assessment, stool inflammatory markers, and food sensitivity panels. We find what standard GI workups miss."
              },
              {
                icon: <Shield className="w-7 h-7 text-primary" />,
                title: "Integrative Treatment Protocols",
                desc: "Herbal and pharmaceutical antimicrobials for SIBO, targeted probiotics, elimination diets, nutritional supplementation, and motility support — personalized to your microbiome data and clinical picture."
              },
              {
                icon: <Zap className="w-7 h-7 text-primary" />,
                title: "EBO2 Ozone for GI Inflammation",
                desc: "Systemic ozone therapy via EBO2 can modulate gut-associated immune responses and reduce systemic inflammation driving GI conditions. Often used as an adjunct in IBD and post-infectious gut dysfunction."
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

          <FadeIn delay={0.3}>
            <div className="mt-10 text-center">
              <Link href="/fecal-transplant">
                <button className="bg-primary text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors inline-flex items-center gap-2" data-testid="button-fmt-learn-more">
                  Learn More About FMT <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">GI Conditions FAQs</h2>
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
