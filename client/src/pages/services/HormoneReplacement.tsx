import React, { useEffect, useState } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Flower, Sun, Heart, CheckCircle2, ChevronDown, ChevronUp, FlaskConical, Stethoscope, ClipboardList, BarChart2 } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "wouter";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-bhrt-${question.slice(0, 20).replace(/\s/g, '-')}`}
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
    question: "What is the difference between BHRT and conventional HRT?",
    answer: "Conventional hormone replacement therapy (HRT) often uses synthetic hormones or hormones derived from animal sources. These have a slightly different molecular structure from the hormones your body produces naturally, which can cause side effects and is associated with risks seen in studies like the Women's Health Initiative. Bioidentical hormones are molecularly identical to your own hormones — they fit your receptors perfectly. At Purety Clinic, we prescribe compounded bioidentical hormones tailored to your individual lab results rather than one-size-fits-all doses."
  },
  {
    question: "How does Dr. Birch determine my hormone levels?",
    answer: "We use comprehensive DUTCH (Dried Urine Test for Comprehensive Hormones) testing along with blood work to get a full picture of your estrogen, progesterone, testosterone, DHEA, cortisol, and thyroid hormones. The DUTCH test is superior to blood-only testing because it captures hormone metabolites, showing not just your hormone levels but how your body is processing and breaking them down — which is critical for safe, effective therapy."
  },
  {
    question: "What delivery methods are available for BHRT?",
    answer: "We offer several delivery options based on your preference, hormone levels, and clinical goals: transdermal creams or gels applied to the skin, sublingual troches dissolved under the tongue, oral capsules, and subcutaneous pellets inserted under the skin that slowly release hormones for 3–5 months. Each method has different absorption characteristics. Dr. Birch will recommend the best delivery method based on your hormone panel and lifestyle."
  },
  {
    question: "Is BHRT safe? What are the risks?",
    answer: "When properly prescribed and monitored, bioidentical hormone therapy is considered safe by most integrative medicine practitioners. The risks associated with synthetic HRT (particularly the elevated breast cancer and clot risk seen in the WHI study) appear to be lower with bioidentical hormones, though research is ongoing. Dr. Birch monitors patients with regular lab testing, adjusts doses as needed, and screens for any early warning signs. Risks depend on your personal health history, which is thoroughly reviewed at consultation."
  },
  {
    question: "How long until I feel the effects of BHRT?",
    answer: "Most patients notice initial improvements in sleep, energy, and mood within 2–4 weeks of starting BHRT. Full effects — including improved body composition, libido, and cognitive function — typically take 2–3 months as hormone levels stabilize. Pellet therapy patients often notice a surge of improvement around 2–4 weeks after insertion as the pellet begins releasing consistently. We follow up with labs at 6–8 weeks to confirm levels are optimal."
  },
  {
    question: "Can men benefit from BHRT at Purety Clinic?",
    answer: "Yes. Low testosterone affects roughly 40% of men over age 45. Symptoms include fatigue, loss of muscle mass, brain fog, low libido, depression, and increased body fat. We offer testosterone replacement therapy (TRT) for men using bioidentical testosterone in cream, injectable, or pellet form, and we always monitor estrogen conversion (estradiol levels) to prevent side effects like fluid retention and mood changes."
  },
];

export default function HormoneReplacement() {
  usePageSEO({
    title: "BHRT Santa Barbara | Bioidentical Hormone Therapy | Purety Clinic",
    description: "Bioidentical hormone therapy (BHRT) for men and women at Purety Clinic in Santa Barbara, CA. DUTCH testing, personalized dosing, multiple delivery options. Call (805) 500-8300.",
    canonicalPath: "/services/hormone-replacement",
  });
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org", "@type": "MedicalTherapy",
      "name": "Bioidentical Hormone Replacement Therapy (BHRT)",
      "alternateName": ["BHRT", "Hormone Replacement Therapy", "HRT", "Bioidentical HRT", "TRT", "Testosterone Replacement"],
      "description": "Bioidentical hormone replacement therapy for men and women at Purety Family Medical Clinic in Santa Barbara, CA. Natural hormone balancing using bioidentical estrogen, progesterone, and testosterone with DUTCH testing.",
      "procedureType": "Therapeutic",
      "relevantSpecialty": "EndocrinologyAndMetabolism",
      "performer": { "@type": "Physician", "name": "Dr. Jonathan Birch", "worksFor": { "@type": "MedicalClinic", "name": "Purety Family Medical Clinic", "telephone": "+1-805-500-8300", "url": "https://puretyclinic.com" } }
    };
    const localSchema = {
      "@context": "https://schema.org", "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic", "url": "https://puretyclinic.com/services/hormone-replacement",
      "telephone": "+1-805-500-8300", "description": "Bioidentical hormone replacement therapy (BHRT) in Santa Barbara, CA. Serving Ventura, Los Angeles, Thousand Oaks, Goleta, and Southern California.",
      "address": { "@type": "PostalAddress", "streetAddress": "2323 Oak Park Ln, Suite 102", "addressLocality": "Santa Barbara", "addressRegion": "CA", "postalCode": "93105", "addressCountry": "US" },
      "medicalSpecialty": "EndocrinologyAndMetabolism", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "77", "bestRating": "5" }
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
      { id: "bhrt-therapy-schema", data: schema },
      { id: "bhrt-local-schema", data: localSchema },
      { id: "bhrt-faq-schema", data: faqSchema },
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <Flower className="w-4 h-4" />
                <span>Bioidentical Hormone Replacement</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Bioidentical Hormone <span className="italic text-accent">Replacement (BHRT)</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Molecularly identical to the hormones your body makes — precisely dosed from your own lab results. For men and women seeking energy, clarity, and longevity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }} data-testid="button-bhrt-consult">
                  Book Hormone Evaluation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Bioidentical */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
              <FadeIn direction="right">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">Why Bioidentical?</h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Bioidentical hormones are molecularly identical to the hormones your body produces naturally. Unlike synthetic hormones — which have a different molecular structure — bioidenticals fit your receptors perfectly, behaving exactly like your own hormones.
                  </p>
                  <p>
                    The difference matters. Synthetic progestins used in conventional HRT have been associated with increased breast cancer risk (Women's Health Initiative, 2002). Bioidentical progesterone, by contrast, appears to have a neutral or even protective effect on breast tissue in several studies.
                  </p>
                  <p>
                    At Purety Clinic, we do not prescribe a standard dose from a prescription pad. Every protocol is built from your own DUTCH hormone panel and blood work — your exact hormone levels, metabolites, and how your body is processing those hormones.
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.1} className="bg-pink-50 p-8 rounded-3xl border border-pink-100">
                  <h3 className="font-bold text-xl mb-4 text-pink-900 flex items-center gap-2"><Heart className="w-5 h-5" /> Women's Symptoms</h3>
                  <ul className="space-y-2 text-pink-800/80 text-sm">
                    {["Hot flashes & night sweats", "Mood swings & anxiety", "Fatigue & poor sleep", "Low libido", "Brain fog & memory lapses", "Vaginal dryness", "Weight gain around the abdomen", "Osteoporosis risk"].map(s => (
                      <li key={s} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" /> {s}</li>
                    ))}
                  </ul>
                </FadeIn>

                <FadeIn delay={0.2} className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                  <h3 className="font-bold text-xl mb-4 text-blue-900 flex items-center gap-2"><Sun className="w-5 h-5" /> Men's Symptoms</h3>
                  <ul className="space-y-2 text-blue-800/80 text-sm">
                    {["Fatigue & loss of drive", "Muscle loss & increased body fat", "Brain fog", "Low libido & erectile dysfunction", "Depression or irritability", "Poor sleep", "Declining strength"].map(s => (
                      <li key={s} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" /> {s}</li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn className="text-center mb-16">
              <h2 className="font-serif text-4xl mb-4">How BHRT Works at Purety Clinic</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">A four-step process that takes the guesswork out of hormone optimization.</p>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: FlaskConical, step: "01", title: "Comprehensive Testing", body: "DUTCH dried urine hormone panel + blood work measures estrogen, progesterone, testosterone, DHEA, cortisol, and thyroid. We see not just your levels but how your body metabolizes them." },
                { icon: BarChart2, step: "02", title: "Analysis & Protocol", body: "Dr. Birch reviews your symptoms alongside your lab results to design a personalized prescription. Delivery method (cream, pellet, sublingual, or oral) is chosen based on your physiology and lifestyle." },
                { icon: Stethoscope, step: "03", title: "Treatment Begins", body: "You start your prescribed bioidentical hormones. Most patients notice energy and sleep improvements within 2–4 weeks. Full effect on body composition and mood typically emerges at 8–12 weeks." },
                { icon: ClipboardList, step: "04", title: "Ongoing Monitoring", body: "Labs are repeated at 6–8 weeks, then every 3–6 months. Dr. Birch fine-tunes your dose with each panel to keep you in the optimal zone — not just \"normal range\" but where you actually feel best." },
              ].map(({ icon: Icon, step, title, body }) => (
                <FadeIn key={step} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-primary/60 tracking-widest mb-2">STEP {step}</div>
                  <h3 className="font-bold text-foreground mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Methods */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Delivery Options</h2>
              <p className="text-muted-foreground">Every method has trade-offs. Dr. Birch recommends based on your lab results and lifestyle.</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Transdermal Cream / Gel", pros: "Easy self-application, dose adjustable, absorbed through skin directly into bloodstream. Avoids first-pass liver metabolism.", ideal: "Patients who prefer self-dosing at home; estrogen and progesterone for women." },
                { name: "Sublingual Troches", pros: "Dissolved under the tongue for rapid absorption. Higher bioavailability than oral. Good for testosterone and progesterone.", ideal: "Patients who want quick uptake without skin application." },
                { name: "Oral Capsules", pros: "Convenient once-daily dosing. Progesterone taken orally has a calming, sleep-enhancing effect through its neurosteroid action.", ideal: "Women using progesterone for sleep support or uterine protection alongside estrogen." },
                { name: "Subcutaneous Pellets", pros: "Rice-sized pellets inserted under the skin every 3–5 months. Consistent physiologic dosing — no daily administration required.", ideal: "Patients who want set-and-forget delivery; particularly effective for testosterone in both men and women." },
              ].map(({ name, pros, ideal }) => (
                <FadeIn key={name} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                  <h3 className="font-bold text-foreground mb-2">{name}</h3>
                  <p className="text-sm text-muted-foreground mb-2"><span className="font-semibold text-primary">How it works:</span> {pros}</p>
                  <p className="text-sm text-muted-foreground"><span className="font-semibold text-primary">Ideal for:</span> {ideal}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Are You a Candidate */}
        <section className="py-24 bg-accent/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn className="text-center mb-12">
              <h2 className="font-serif text-4xl mb-4">Are You a Good Candidate?</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-bold text-lg text-green-700 mb-4">BHRT is often appropriate for:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Women in perimenopause or menopause experiencing symptoms",
                    "Men with confirmed low testosterone (hypogonadism)",
                    "People with adrenal fatigue or HPA axis dysregulation",
                    "Those with thyroid disorders (in combination with thyroid support)",
                    "Anyone experiencing hormonal symptoms affecting quality of life",
                    "Patients who want to minimize osteoporosis and cardiovascular risk with age",
                  ].map(s => <li key={s} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />{s}</li>)}
                </ul>
              </FadeIn>
              <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-bold text-lg text-orange-700 mb-4">BHRT requires careful evaluation if you have:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Active hormone-sensitive cancers (breast, ovarian, prostate) — discuss with your oncologist",
                    "Uncontrolled thromboembolic disease or clotting disorders",
                    "Unexplained vaginal bleeding",
                    "Severe liver disease",
                  ].map(s => <li key={s} className="flex items-start gap-2"><span className="text-orange-500 font-bold shrink-0">→</span>{s}</li>)}
                </ul>
                <p className="text-xs text-muted-foreground mt-4">A full medical history is reviewed at every new patient consultation before any prescription is written.</p>
              </FadeIn>
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
            <FadeIn className="mt-10 text-center">
              <p className="text-sm text-muted-foreground mb-4">Want to learn more about the science of hormone optimization?</p>
              <Link href="/blog/hormonal-balance" className="text-primary font-semibold text-sm hover:underline">Read: Hormonal Balance — What Your Labs Aren't Telling You →</Link>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Ready to Restore Your Hormonal Balance?" subheading="Schedule a hormone evaluation with Dr. Birch. We use DUTCH testing to build your personalized BHRT protocol." formSource="Hormone Replacement Page" />
      </main>
      <Footer />
    </div>
  );
}
