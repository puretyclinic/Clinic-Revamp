import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Loader2, ArrowRight, ShieldCheck, CheckCircle2, Pill, FlaskConical, Stethoscope, Droplets, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import * as gtag from "@/lib/gtag";
import { useState, useEffect } from "react";

function scrollToForm() {
  const el = document.querySelector('#consultation');
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${question.slice(0, 20).replace(/\s/g, '-')}`}
      >
        <span className="font-bold text-foreground text-lg pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary shrink-0" />}
      </button>
      {open && (
        <div className="pb-5 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

const fmtStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Purety Family Medical Clinic - FMT Treatment",
  "description": "California's leading FMT (Fecal Microbiota Transplant) specialists since 2014. Over 1,000 patients treated with 90%+ success rate for C. diff.",
  "url": "https://puretyclinic.com/fecal-transplant",
  "telephone": "+1-805-500-8300",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1525 State St Suite 12",
    "addressLocality": "Santa Barbara",
    "addressRegion": "CA",
    "postalCode": "93101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.4208,
    "longitude": -119.6982
  },
  "medicalSpecialty": "Gastroenterology",
  "availableService": {
    "@type": "MedicalProcedure",
    "name": "Fecal Microbiota Transplant (FMT)",
    "procedureType": "Therapeutic",
    "description": "Non-invasive FMT treatment options including capsules, oral liquid, retention enema, and colonoscopy delivery. 90%+ success rate for recurrent C. diff infections."
  },
  "physician": {
    "@type": "Physician",
    "name": "Dr. Jonathan Birch",
    "medicalSpecialty": "Naturopathic Medicine"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "70",
    "bestRating": "5"
  }
};

export default function FMT() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.title = "FMT Treatment | Fecal Microbiota Transplant | Dr. Jonathan Birch | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Leading FMT specialists since 2014. 90%+ success rate for C. diff. Multiple treatment options: capsules, oral, enema, colonoscopy. Schedule your consultation with Dr. Birch today. (805) 500-8300");

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is FMT and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fecal Microbiota Transplantation (FMT) transfers healthy gut bacteria from a rigorously screened donor to restore your gut microbiome. Unlike antibiotics that kill both good and bad bacteria, FMT repopulates your gut with the complete, balanced flora needed for proper digestion and immune function."
          }
        },
        {
          "@type": "Question",
          "name": "What is your success rate for C. diff?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our FMT protocol has a 90%+ success rate for antibiotic-resistant C. diff infections. Many patients see significant improvement within the first week, with full resolution typically achieved within 6 weeks of treatment."
          }
        },
        {
          "@type": "Question",
          "name": "How do you screen your donors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use super donors who undergo extensive screening far beyond FDA requirements. This includes blood and stool testing for infectious diseases, comprehensive health history review, and ongoing monitoring. Our donors are young, healthy individuals with no history of antibiotics, autoimmune conditions, or chronic illness."
          }
        },
        {
          "@type": "Question",
          "name": "Is FMT safe? Are there side effects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FMT is remarkably safe when performed with properly screened donor material. Common side effects are mild and temporary: bloating, gas, or mild cramping for 1-2 days. Serious adverse effects are extremely rare, especially with our rigorous donor screening protocols."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer remote consultations for FMT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We frequently do initial consultations remotely for patients outside the Santa Barbara area. After your consultation, we can discuss whether you will need to travel to our clinic or if certain treatments can be managed remotely."
          }
        },
        {
          "@type": "Question",
          "name": "How much does FMT treatment cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment costs vary based on your specific protocol and delivery method. We discuss pricing during your initial consultation. Many patients find FMT cost-effective compared to ongoing antibiotics, repeated hospitalizations, and lost quality of life from chronic illness."
          }
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "fmt-clinic-schema";
    script.text = JSON.stringify(fmtStructuredData);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "fmt-faq-schema";
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      document.getElementById("fmt-clinic-schema")?.remove();
      document.getElementById("fmt-faq-schema")?.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: `Primary Concern: ${formData.get("concern")}\n\n${formData.get("message") || ""}`,
      source: "FMT Page - puretyclinic.com/fecal-transplant",
      _honey: formData.get("_honey") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        gtag.trackFormSubmission("FMT Page - Consultation Request");

        toast({
          title: "Consultation Requested!",
          description: "Dr. Birch's team will review your case and contact you shortly.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Could not send message. Please call us at (805) 500-8300.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <div className="bg-accent text-white text-center py-2.5 px-4 text-sm font-medium">
        Limited Availability: We can only accept <span className="font-bold underline">5 new patients per week</span> due to donor screening requirements
      </div>
      <div className="bg-primary text-white text-center py-2 px-4 text-sm">
        Questions? Call or Text Now: <a href="tel:+18055008300" className="font-bold hover:underline" onClick={() => gtag.trackPhoneClick("FMT Top Bar")}>(805) 500-8300</a> | Consultations Available
      </div>

      <Navbar />

      <main className="flex-grow">
        <section id="consultation" className="py-16 md:py-24 bg-gradient-to-br from-[#f0f7f8] to-[#e8f0f1]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20">
                  <CheckCircle2 className="w-4 h-4" />
                  California's Leading FMT Specialists Since 2014
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.15] mb-6 text-foreground">
                  Finally <span className="text-accent italic">Restore</span> Your Gut Health With FMT Treatment
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Dr. Jonathan Birch has helped over 1,000 patients achieve lasting relief with our proven FMT protocol. Whether you're dealing with C. diff, recurring digestive issues, or other gut health concerns, we're here to help.
                </p>

                <div className="flex gap-8 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-accent">1,000+</div>
                    <div className="text-sm text-muted-foreground">Patients Helped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">10+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-lg" onClick={scrollToForm} data-testid="button-fmt-hero-schedule">
                    <Phone className="w-4 h-4 mr-2" /> Schedule Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 font-bold rounded-lg" asChild>
                    <a href="tel:+18055008300" onClick={() => gtag.trackPhoneClick("FMT Hero")}>Call (805) 500-8300</a>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <h2 className="font-serif text-2xl font-bold mb-2 text-foreground">Schedule Your Consultation</h2>
                  <p className="text-muted-foreground text-sm mb-6">Dr. Birch will review your case and discuss the right treatment path together with you.</p>

                  <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-fmt-consultation">
                    <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="fmt-firstName" className="text-sm font-medium">First Name</Label>
                        <Input id="fmt-firstName" name="firstName" placeholder="John" required className="h-11 text-black" data-testid="input-fmt-firstName" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="fmt-lastName" className="text-sm font-medium">Last Name</Label>
                        <Input id="fmt-lastName" name="lastName" placeholder="Smith" required className="h-11 text-black" data-testid="input-fmt-lastName" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="fmt-email" className="text-sm font-medium">Email Address</Label>
                      <Input id="fmt-email" name="email" type="email" placeholder="john@example.com" required className="h-11 text-black" data-testid="input-fmt-email" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="fmt-phone" className="text-sm font-medium">Phone Number</Label>
                      <Input id="fmt-phone" name="phone" type="tel" placeholder="(555) 123-4567" required className="h-11 text-black" data-testid="input-fmt-phone" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="fmt-concern" className="text-sm font-medium">Primary Concern</Label>
                      <select
                        id="fmt-concern"
                        name="concern"
                        className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        data-testid="select-fmt-concern"
                      >
                        <option value="">Select your concern...</option>
                        <option value="C. difficile (C. diff)">C. difficile (C. diff)</option>
                        <option value="Gut Health Consultation">Gut Health Consultation</option>
                        <option value="Digestive Wellness">Digestive Wellness</option>
                        <option value="Other">Other - I'd like to discuss</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="fmt-message" className="text-sm font-medium">Tell us about your situation (optional)</Label>
                      <Textarea
                        id="fmt-message"
                        name="message"
                        placeholder="Share any additional details about your symptoms, history, or questions..."
                        className="min-h-[100px] text-black"
                        data-testid="input-fmt-message"
                      />
                    </div>
                    <Button type="submit" size="lg" disabled={sending} className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-bold text-base" data-testid="button-fmt-submit">
                      {sending ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</> : <><ArrowRight className="w-4 h-4 mr-2" /> Request My Consultation</>}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Your information is 100% confidential and HIPAA protected
                    </p>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <div className="bg-white border-y border-gray-100 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> Licensed Medical Clinic</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" /> HIPAA Compliant</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> 1,000+ Patients Treated</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Super Donor Screening</div>
            </div>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Tired of the Endless Antibiotic Cycle?</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">You've tried everything. Multiple rounds of antibiotics. Strict diets. Nothing works for long. There's a better way.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-red-50 rounded-2xl p-8 text-center border border-red-100 h-full">
                  <div className="text-4xl mb-4">💊</div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">The Antibiotic Trap</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Round after round of antibiotics... They kill the bad bacteria but also destroy your healthy gut flora, leading to recurrence.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-amber-50 rounded-2xl p-8 text-center border border-amber-100 h-full">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Recurring Infections</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">25-35% of C. diff patients experience recurrence. After 2+ recurrences, your chances of another infection jump to 60%.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-100 h-full">
                  <div className="text-4xl mb-4">✔</div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">The FMT Solution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">FMT restores your complete gut microbiome with healthy donor bacteria. 90%+ success rate for recurrent C. diff, even for antibiotic-resistant cases.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Treatment Path Options</h2>
                <p className="text-muted-foreground text-lg">Non-invasive options tailored to your needs. No hospital stay required.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                    <Pill className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">FMT Capsules</h3>
                  <p className="text-muted-foreground text-sm mb-4">Convenient oral treatment you can take at home</p>
                  <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Triple-encapsulated for safety and comfort</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Usual 14 day treatment course</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> No sedation required</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Ideal for C. diff patients</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                    <Droplets className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Oral Liquid FMT</h3>
                  <p className="text-muted-foreground text-sm mb-4">Great option for those who can't swallow capsules</p>
                  <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Easy-to-take liquid form</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> No capsules to swallow</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Same effective donor material</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Suitable for all ages</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                    <FlaskConical className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Retention Enema</h3>
                  <p className="text-muted-foreground text-sm mb-4">Direct delivery to lower intestine</p>
                  <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Excellent success rate</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Easy to retain until next bowel movement</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Traditional route</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                    <Stethoscope className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Colonoscopy FMT</h3>
                  <p className="text-muted-foreground text-sm mb-4">Full intestinal coverage for complex cases</p>
                  <ul className="space-y-2 text-sm text-muted-foreground mt-auto">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Complete large intestine delivery</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Single treatment often sufficient</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Performed in Southern CA</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Best for severe cases</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Real Patients. Real Results.</h2>
                <p className="text-muted-foreground text-lg">Read what our patients say about their experience with FMT at Purety Clinic</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { initials: "A.A.", type: "Gut Health Patient", result: "Significant Improvement", quote: "I had been suffering with chronic digestive issues for over a year. After working with Dr. Birch, he determined the right treatment path for me. Within weeks I noticed significant improvement, and now I feel like myself again. My energy is excellent!" },
                { initials: "M.R.", type: "Digestive Health Patient", result: "Relief After Failed Treatments", quote: "After multiple rounds of antibiotics failed, I was desperate. Dr. Birch's personalized approach worked when nothing else did. He took the time to understand my situation and developed a treatment plan that actually worked. I can't thank the Purety team enough." },
                { initials: "D.L.", type: "Microbiome Patient", result: "Life-Changing Results", quote: "I was at my wit's end before finding Dr. Birch. The consultation process was thorough, and he explained all my options clearly. The treatment he recommended was much easier than I expected, and the results were remarkable. Truly life-changing care." },
                { initials: "K.P.", type: "Gut Health Patient", result: "Remote Consultation Success", quote: "Dr. Birch and his team treated me with such compassion during a really difficult time. The remote consultation made everything easier. Dr. Birch took the time to discuss all the possibilities and we came to the right treatment together. I finally have my life back." },
              ].map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full flex flex-col">
                    <div className="flex text-accent mb-3">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow italic">"{t.quote}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">{t.initials[0]}{t.initials[2]}</div>
                      <div>
                        <div className="font-bold text-sm text-foreground">{t.initials}</div>
                        <div className="text-xs text-muted-foreground">{t.type}</div>
                      </div>
                      <div className="ml-auto">
                        <span className="text-xs font-medium bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200">{t.result}</span>
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
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex text-[#FBBC05]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 font-bold group-hover:text-primary transition-colors">
                      5.0 from 70+ reviews
                    </div>
                  </div>
                  <span className="text-xs text-primary font-medium ml-2">Read Reviews on Google</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1586254533732-DIBCSH2O3LNIQGHE1231/purety-clinic_Home_screen-3.jpg"
                    alt="Dr. Jonathan Birch"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Dr. Jonathan Birch</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Since 2014, Dr. Birch has been one of the nation's leading FMT specialists, helping over 1,000 patients achieve lasting relief through personalized FMT protocols.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  His approach combines rigorous safety protocols with compassionate, personalized care. Each treatment protocol is tailored to your specific condition and health history.
                </p>
                <div className="space-y-3">
                  {["10+ Years FMT Experience", "1,000+ Successful Procedures", "Super Donor Protocol", "Remote Consultations Available"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg" onClick={scrollToForm}>
                  Schedule Your Consultation
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Your Path to Recovery</h2>
                <p className="text-muted-foreground text-lg">Simple, straightforward process from consultation to lasting relief</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Initial Consultation", desc: "Share your story with our team. We'll review your history and discuss if FMT is right for you." },
                { step: "2", title: "Personalized Plan", desc: "Dr. Birch creates a custom protocol based on your condition, history, and health goals." },
                { step: "3", title: "FMT Treatment", desc: "Receive your treatment via capsules, enema, or colonoscopy. Most options are outpatient." },
                { step: "4", title: "Ongoing Support", desc: "We monitor your progress and provide follow-up care to ensure lasting results." },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">{s.step}</div>
                    <h3 className="font-serif text-lg font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-lg">Get answers to common questions about FMT treatment</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
                <FAQItem
                  question="What is FMT and how does it work?"
                  answer="Fecal Microbiota Transplantation (FMT) transfers healthy gut bacteria from a rigorously screened donor to restore your gut microbiome. Unlike antibiotics that kill both good and bad bacteria, FMT repopulates your gut with the complete, balanced flora needed for proper digestion and immune function."
                />
                <FAQItem
                  question="What is your success rate for C. diff?"
                  answer="Our FMT protocol has a 90%+ success rate for antibiotic-resistant C. diff infections. Many patients see significant improvement within the first week, with full resolution typically achieved within 6 weeks of treatment."
                />
                <FAQItem
                  question="How do you screen your donors?"
                  answer={<>We use "super donors" who undergo extensive screening far beyond FDA requirements. This includes blood and stool testing for infectious diseases, comprehensive health history review, and ongoing monitoring. Our donors are young, healthy individuals with no history of antibiotics, autoimmune conditions, or chronic illness. <a href="https://static1.squarespace.com/static/5e8750872ceab220c4d4f137/t/670ee470c3b707053be6ff95/1729029233938/Purety+Clinic+Clinical+Considerations+for+Donor+Selection+and+Screening+.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">View our complete donor screening guidelines</a>.</>}
                />
                <FAQItem
                  question="Is FMT safe? Are there side effects?"
                  answer="FMT is remarkably safe when performed with properly screened donor material. Common side effects are mild and temporary: bloating, gas, or mild cramping for 1-2 days. Serious adverse effects are extremely rare, especially with our rigorous donor screening protocols."
                />
                <FAQItem
                  question="Do you offer remote consultations?"
                  answer="Yes! We frequently do initial consultations remotely for patients outside the Santa Barbara area. After your consultation, we can discuss whether you'll need to travel to our clinic or if certain treatments can be managed remotely."
                />
                <FAQItem
                  question="How much does FMT treatment cost?"
                  answer="Treatment costs vary based on your specific protocol and delivery method. We discuss pricing during your initial consultation. Many patients find FMT cost-effective compared to ongoing antibiotics, repeated hospitalizations, and lost quality of life from chronic illness."
                />
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to End Your Suffering?</h2>
              <p className="text-white/80 text-lg mb-8">Take the first step toward lasting relief. Schedule your consultation with Dr. Birch's team today.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-lg px-8" onClick={scrollToForm}>
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold rounded-lg px-8" asChild>
                  <a href="tel:+18055008300" onClick={() => gtag.trackPhoneClick("FMT Bottom CTA")}>Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
