import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Phone, CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { ContactCTA } from "@/components/ContactCTA";
import { useState, useEffect } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
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
        <div className="pb-5 text-muted-foreground leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

interface LocationData {
  city: string;
  state: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  driveTime: string;
  distance: string;
  intro: string;
  whyTravel: string;
  services: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
  schema: object;
}

const locations: Record<string, LocationData> = {
  "los-angeles": {
    city: "Los Angeles",
    state: "CA",
    headline: "Fecal Microbiota Transplant (FMT) for Los Angeles Patients",
    subheadline: "California's most experienced FMT clinic is 90 minutes from LA. Remote consultations available. Over 1,000 patients treated since 2014.",
    metaTitle: "FMT Treatment for Los Angeles Patients | Fecal Transplant Clinic | Purety Clinic",
    metaDescription: "Los Angeles patients seeking FMT for C. diff travel to Purety Clinic in Santa Barbara — 90 minutes away. 90%+ success rate, capsule or enema options, remote consultations available. Call (805) 500-8300.",
    driveTime: "Approximately 90 minutes",
    distance: "About 95 miles",
    intro: "If you're in Los Angeles and researching Fecal Microbiota Transplantation for recurrent C. difficile, you've likely found that qualified FMT providers are harder to come by than you'd expect in a major metro area. Hospital-based FMT programs have long waitlists and typically only offer colonoscopy delivery. Purety Family Medical Clinic in Santa Barbara has been California's leading outpatient FMT clinic since 2014 — and many of our patients make the 90-minute drive from the LA area specifically for our level of experience and the flexibility of our treatment options.",
    whyTravel: "Our FMT program offers something most LA-area providers don't: multiple delivery options (capsules, oral liquid, enema, and colonoscopy via our procedural partners), a 90%+ success rate for recurrent C. diff, and the ability to begin with a remote consultation so you only need to travel once your treatment plan is confirmed. For many patients, the drive is the smallest part of the process.",
    services: [
      {
        name: "FMT for Recurrent C. difficile",
        description: "Our primary FMT indication. 90%+ cure rate for antibiotic-resistant C. diff — dramatically better than repeated antibiotic courses. Multiple delivery methods available."
      },
      {
        name: "Remote Consultations",
        description: "Initial consultations can be conducted via telehealth for Los Angeles patients. We review your history, confirm candidacy, and design your protocol before you travel."
      },
      {
        name: "Capsule-Based FMT",
        description: "Our most popular delivery method — oral capsules taken over a 14-day course. In many cases, no travel to the clinic is needed after your consultation."
      },
      {
        name: "Gut Microbiome Restoration",
        description: "Beyond C. diff, we work with patients dealing with post-antibiotic dysbiosis, gut imbalances, and other microbiome-related health concerns."
      },
      {
        name: "Integrative Primary Care",
        description: "Naturopathic medicine, bioidentical hormone therapy, IV nutrient infusions, regenerative injections, and ozone therapy for patients willing to make the drive to Santa Barbara."
      },
      {
        name: "Integrative Oncology Support",
        description: "Complementary cancer care protocols including IV high-dose vitamin C, mistletoe, nutritional support, and immune optimization alongside conventional treatment."
      }
    ],
    faqs: [
      {
        question: "Do you have an FMT clinic in Los Angeles?",
        answer: "We don't have a Los Angeles office — our clinic is located in Santa Barbara at 2323 Oak Park Ln, Suite 102. However, we serve a large number of LA-area patients. Initial consultations can be done remotely, and for capsule-based FMT protocols, some patients never need to travel to the clinic at all. For colonoscopy-based FMT, we coordinate with procedural partners in Southern California."
      },
      {
        question: "How far is Purety Clinic from Los Angeles?",
        answer: "We're approximately 95 miles from downtown Los Angeles — about a 90-minute drive depending on traffic. Many patients from LA, Beverly Hills, Santa Monica, Pasadena, and the San Fernando Valley make the trip. We recommend scheduling morning appointments to avoid southbound traffic on the return trip."
      },
      {
        question: "Can I do my FMT consultation remotely from Los Angeles?",
        answer: "Yes. We offer telehealth consultations for patients who want to review their case, discuss treatment options, and confirm candidacy before making the trip to Santa Barbara. In many cases, we can also ship capsule-based FMT materials directly, so the number of required in-person visits is minimized."
      },
      {
        question: "Does insurance cover FMT for C. diff?",
        answer: "Coverage varies by insurer. Some plans cover FMT for recurrent C. difficile, particularly colonoscopy-based delivery. We recommend contacting your insurer directly and asking about coverage for 'fecal microbiota transplant' before your appointment. We discuss pricing transparently during the consultation."
      },
      {
        question: "What is the success rate for FMT at your clinic?",
        answer: "Our FMT protocol achieves a 90%+ cure rate for recurrent C. difficile infection, consistent with the published clinical trial literature. We have treated over 1,000 patients since 2014. Many patients see significant improvement within the first week following treatment."
      },
      {
        question: "Why should I travel to Santa Barbara instead of finding an LA provider?",
        answer: "Experience and delivery flexibility. Most hospital-based FMT programs in Los Angeles offer only colonoscopy delivery and have significant wait times. We offer capsules, oral liquid, enema, and colonoscopy options — and with a 90%+ success rate built over a decade of practice, many patients find the 90-minute drive well worth it."
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "FMT clinic serving Los Angeles patients. California's most experienced outpatient Fecal Microbiota Transplantation provider since 2014. 90%+ success rate for recurrent C. diff.",
      "url": "https://puretyclinic.com/locations/los-angeles",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Los Angeles" },
        { "@type": "City", "name": "Santa Barbara" },
        { "@type": "City", "name": "Santa Monica" },
        { "@type": "City", "name": "Beverly Hills" },
        { "@type": "City", "name": "Ventura" }
      ],
      "availableService": {
        "@type": "MedicalProcedure",
        "name": "Fecal Microbiota Transplant (FMT)",
        "description": "FMT for recurrent C. difficile infection. Capsule, enema, and colonoscopy delivery. Remote consultations available for Los Angeles patients."
      },
      "physician": {
        "@type": "Physician",
        "name": "Dr. Jonathan Birch",
        "medicalSpecialty": "Naturopathic Medicine"
      }
    }
  },

  "santa-barbara": {
    city: "Santa Barbara",
    state: "CA",
    headline: "Holistic & Integrative Medicine in Santa Barbara",
    subheadline: "Purety Family Medical Clinic — your Santa Barbara home for naturopathic care, FMT, regenerative medicine, and integrative oncology support.",
    metaTitle: "Holistic Doctor Santa Barbara | Purety Family Medical Clinic",
    metaDescription: "Purety Family Medical Clinic in Santa Barbara offers FMT, naturopathic primary care, IV therapy, regenerative injections, and bioidentical hormones. Call (805) 500-8300.",
    driveTime: "In clinic",
    distance: "2323 Oak Park Ln, Suite 102",
    intro: "Purety Family Medical Clinic is Santa Barbara's leading integrative and naturopathic medical practice. Founded by Dr. Jonathan Birch and Dr. Dena Birch, the clinic has served the Central Coast community since 2014 with a blend of evidence-based natural medicine and advanced therapeutic procedures.",
    whyTravel: "Our Santa Barbara clinic offers the full spectrum of our services in a single location — from FMT and IV therapy to regenerative injections and bioidentical hormone care.",
    services: [
      { name: "FMT for C. difficile", description: "California's most experienced outpatient FMT clinic. 90%+ success rate since 2014." },
      { name: "Naturopathic Primary Care", description: "Comprehensive holistic medicine addressing the root causes of chronic illness." },
      { name: "IV Nutrient Therapy", description: "High-dose vitamin C, Myers cocktail, NAD+, chelation, and custom infusions." },
      { name: "Regenerative Injections", description: "PRP, prolotherapy, prolozone, and stem cell matrix for joint pain and injury." },
      { name: "Bioidentical Hormones", description: "Personalized hormone restoration for men and women using bioidentical compounds." },
      { name: "Ozone Therapy", description: "10-pass ozone, rectal ozone, ozone sauna, and targeted ozone injections." }
    ],
    faqs: [
      { question: "Where is Purety Clinic located?", answer: "We are located at 2323 Oak Park Ln, Suite 102, Santa Barbara, CA 93105. We serve patients from Santa Barbara, Goleta, Montecito, Carpinteria, Ventura, and beyond." },
      { question: "Do you accept new patients?", answer: "Yes, we are currently accepting new patients. Same-week appointments are often available. Call (805) 500-8300 or submit a consultation request online." },
      { question: "Do you offer telehealth appointments?", answer: "Yes. We offer remote consultations for patients who are not local to Santa Barbara, including initial FMT consultations for patients throughout California and nationally." },
      { question: "What insurance do you accept?", answer: "We are primarily a fee-for-service practice. We can provide superbills for patients with PPO plans who wish to seek reimbursement. We discuss all pricing transparently at the initial consultation." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "url": "https://puretyclinic.com",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      }
    }
  },

  "ventura": {
    city: "Ventura",
    state: "CA",
    headline: "FMT & Integrative Medicine for Ventura Patients",
    subheadline: "Purety Clinic in Santa Barbara is just 35 miles from Ventura. Specializing in FMT for C. diff, naturopathic care, and regenerative medicine.",
    metaTitle: "FMT Clinic Near Ventura CA | Purety Family Medical Clinic",
    metaDescription: "Ventura patients seeking FMT for C. diff or integrative medicine travel to Purety Clinic in Santa Barbara — just 35 miles away. Call (805) 500-8300.",
    driveTime: "Approximately 35 minutes",
    distance: "About 35 miles",
    intro: "Purety Family Medical Clinic is one of California's leading FMT and integrative medicine clinics, located in Santa Barbara just 35 miles from Ventura. We serve a large number of Ventura County patients seeking advanced care not available locally — including fecal microbiota transplantation for recurrent C. difficile, regenerative orthopedic injections, and naturopathic primary care.",
    whyTravel: "For Ventura patients, the drive to Santa Barbara is short and the level of care is unmatched locally. Many of our Ventura patients come specifically for FMT, PRP injections, or ozone therapy — treatments that are not widely available in Ventura County.",
    services: [
      { name: "FMT for C. difficile", description: "90%+ success rate. Capsule, enema, and colonoscopy options. Remote consultations available." },
      { name: "Regenerative Injections", description: "PRP, prolotherapy, prolozone, and stem cell matrix for joint pain and sports injuries." },
      { name: "Naturopathic Primary Care", description: "Root-cause medicine for chronic conditions, autoimmune disease, and hormonal issues." },
      { name: "IV Nutrient Therapy", description: "Custom IV infusions including high-dose vitamin C, Myers cocktail, and NAD+." },
      { name: "Ozone Therapy", description: "10-pass EBO2 ozone, rectal ozone, and ozone injections for chronic infections and pain." },
      { name: "Bioidentical Hormones", description: "Personalized hormone restoration programs for men and women." }
    ],
    faqs: [
      { question: "How far is Purety Clinic from Ventura?", answer: "About 35 miles — roughly a 35-minute drive up the 101 freeway. We're located at 2323 Oak Park Ln, Suite 102 in Santa Barbara." },
      { question: "Do you serve Ventura patients for FMT?", answer: "Yes. We have a large number of Ventura County patients who come to our Santa Barbara clinic for FMT. Initial consultations can be done remotely, and capsule-based FMT can often be managed without multiple office visits." },
      { question: "Can I do a telehealth consultation from Ventura?", answer: "Absolutely. We offer telehealth for initial consultations so you can confirm your candidacy and develop a treatment plan before making the trip to Santa Barbara." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "FMT and integrative medicine clinic serving Ventura County patients from our Santa Barbara location.",
      "url": "https://puretyclinic.com/locations/ventura",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Ventura" },
        { "@type": "City", "name": "Oxnard" },
        { "@type": "City", "name": "Camarillo" },
        { "@type": "City", "name": "Thousand Oaks" }
      ]
    }
  },

  "goleta": {
    city: "Goleta",
    state: "CA",
    headline: "Holistic & Integrative Medicine for Goleta Residents",
    subheadline: "Purety Family Medical Clinic serves the Goleta community from our Santa Barbara clinic — minutes away.",
    metaTitle: "Holistic Doctor Goleta CA | Purety Family Medical Clinic",
    metaDescription: "Goleta residents trust Purety Family Medical Clinic for naturopathic care, FMT, IV therapy, and regenerative medicine in nearby Santa Barbara. Call (805) 500-8300.",
    driveTime: "Under 10 minutes",
    distance: "About 5 miles",
    intro: "Purety Family Medical Clinic is Goleta's closest integrative medicine clinic, located just minutes away in Santa Barbara. We provide Goleta residents with comprehensive naturopathic primary care, FMT, IV therapy, regenerative injections, ozone therapy, and bioidentical hormone care.",
    whyTravel: "Goleta patients have access to a full suite of integrative and naturopathic services just minutes from home — without needing to travel to Los Angeles or beyond for specialized care.",
    services: [
      { name: "Naturopathic Primary Care", description: "Comprehensive holistic medicine for the whole family." },
      { name: "FMT for C. difficile", description: "Leading FMT clinic with 90%+ success rate since 2014." },
      { name: "IV Nutrient Therapy", description: "Custom IV infusions for immune support, energy, and recovery." },
      { name: "Regenerative Injections", description: "PRP and prolotherapy for joint pain and sports injuries." },
      { name: "Bioidentical Hormones", description: "Personalized hormone restoration for men and women." },
      { name: "Pediatric Holistic Care", description: "Natural medicine for children from Dr. Dena Birch." }
    ],
    faqs: [
      { question: "How close is Purety Clinic to Goleta?", answer: "Very close — about 5 miles and under 10 minutes from central Goleta. We're at 2323 Oak Park Ln, Suite 102 in Santa Barbara." },
      { question: "Do you offer holistic pediatric care for Goleta families?", answer: "Yes. Dr. Dena Birch sees pediatric patients and provides holistic, naturopathic care for children of all ages, including newborns." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "url": "https://puretyclinic.com/locations/goleta",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [{ "@type": "City", "name": "Goleta" }]
    }
  },

  "montecito": {
    city: "Montecito",
    state: "CA",
    headline: "Premier Integrative Medicine for Montecito Residents",
    subheadline: "Purety Family Medical Clinic offers Montecito the highest standard of naturopathic and functional medicine, minutes from home.",
    metaTitle: "Holistic Doctor Montecito CA | Purety Family Medical Clinic",
    metaDescription: "Montecito residents choose Purety Family Medical Clinic for integrative medicine, FMT, bioidentical hormones, and regenerative care in nearby Santa Barbara. Call (805) 500-8300.",
    driveTime: "Under 10 minutes",
    distance: "About 4 miles",
    intro: "Purety Family Medical Clinic serves Montecito's health-conscious community with a comprehensive suite of integrative and naturopathic medical services. Just minutes from Montecito, our Santa Barbara clinic provides FMT, bioidentical hormone therapy, regenerative injections, ozone therapy, and personalized naturopathic care.",
    whyTravel: "Montecito patients deserve the same level of personalized, integrative care they expect in every aspect of their lives. Our clinic offers individualized protocols, unhurried appointments, and advanced therapies not available in conventional primary care.",
    services: [
      { name: "Bioidentical Hormone Therapy", description: "Personalized, bioidentical hormone restoration for optimal health and longevity." },
      { name: "Regenerative Medicine", description: "PRP, stem cell matrix, and prolotherapy for joint health and injury recovery." },
      { name: "FMT for C. difficile", description: "California's leading outpatient FMT provider. 90%+ success rate." },
      { name: "IV Longevity Protocols", description: "NAD+, high-dose vitamin C, phosphatidylcholine, and custom longevity infusions." },
      { name: "Naturopathic Primary Care", description: "Root-cause medicine with thorough diagnostics and unhurried appointments." },
      { name: "Ozone Therapy", description: "10-pass EBO2 and targeted ozone treatments for chronic conditions." }
    ],
    faqs: [
      { question: "How close is Purety Clinic to Montecito?", answer: "About 4 miles — under 10 minutes from Montecito village. We're at 2323 Oak Park Ln, Suite 102 in Santa Barbara." },
      { question: "Do you offer concierge-style appointments?", answer: "Our appointments are significantly longer than conventional medical visits — initial consultations typically run 60–90 minutes. We take the time to understand your full health picture before recommending any treatment." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "url": "https://puretyclinic.com/locations/montecito",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [{ "@type": "City", "name": "Montecito" }]
    }
  }
};

export default function LocationPage({ params }: { params: { city: string } }) {
  const cityKey = params.city.toLowerCase();
  const location = locations[cityKey];

  useEffect(() => {
    if (!location) return;
    document.title = location.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", location.metaDescription);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "location-schema";
    script.text = JSON.stringify(location.schema);
    document.head.appendChild(script);
    return () => { document.getElementById("location-schema")?.remove(); };
  }, [location]);

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col bg-background font-sans">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl mb-4">Location Not Found</h1>
            <Link href="/" className="text-primary font-bold hover:underline">Back to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-24 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10 max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <MapPin className="w-4 h-4" />
                <span>Serving {location.city}, {location.state}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                {location.headline}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
                {location.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 font-bold rounded-full px-8" asChild>
                  <a href="#contact-form" data-testid="button-book-consultation-location" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                    Request Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold rounded-full px-8" asChild>
                  <a href="tel:+18055008300" data-testid="link-phone-location">
                    <Phone className="w-4 h-4 mr-2" /> (805) 500-8300
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Drive info banner */}
        <section className="bg-accent/10 border-y border-accent/20 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-bold text-foreground">
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" />
                <span>From {location.city}: {location.driveTime}</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>2323 Oak Park Ln, Suite 102, Santa Barbara, CA 93105</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+18055008300" className="hover:text-primary">(805) 500-8300</a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <p className="text-xl text-foreground/80 leading-relaxed mb-6">{location.intro}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{location.whyTravel}</p>
            </FadeIn>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3 text-center">
                Services Available to {location.city} Patients
              </h2>
              <p className="text-muted-foreground text-center mb-12 text-lg">
                All services are provided at our Santa Barbara clinic.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.services.map((service, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                    <h3 className="font-bold text-foreground text-lg mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FMT CTA for LA/Ventura */}
        {(cityKey === "los-angeles" || cityKey === "ventura") && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <FadeIn>
                <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10 text-center">
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                    California's Most Experienced FMT Clinic
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                    Over 1,000 patients treated since 2014. 90%+ success rate for recurrent C. difficile.
                    Multiple delivery options — capsules, enema, and colonoscopy. Remote consultations available
                    for {location.city} patients before your first visit.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8" asChild>
                      <Link href="/fecal-transplant" data-testid="link-fmt-page-location">
                        Learn About FMT <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 font-bold rounded-full px-8" asChild>
                      <a href="tel:+18055008300">Call (805) 500-8300</a>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-center mb-10 text-lg">
                From {location.city} patients considering Purety Clinic
              </p>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
                {location.faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Directions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                    Getting Here from {location.city}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We're located at <strong>2323 Oak Park Ln, Suite 102, Santa Barbara, CA 93105</strong> — {location.distance} from {location.city}, approximately {location.driveTime} by car.
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/${encodeURIComponent(location.city + ", CA")}/2323+Oak+Park+Ln+Suite+102+Santa+Barbara+CA+93105`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-bold text-primary hover:text-accent transition-colors"
                    data-testid="link-directions"
                  >
                    Get Directions <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 aspect-video">
                  <iframe
                    title="Purety Family Medical Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.7!2d-119.7432!3d34.4500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e914e6a3a3a3a3%3A0x1234567890abcdef!2s2323+Oak+Park+Ln%2C+Santa+Barbara%2C+CA+93105!5e0!3m2!1sen!2sus!4v1680000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA
          heading={`Ready to Visit from ${location.city}?`}
          subheading="Start with a remote consultation — we'll confirm your candidacy and plan your visit before you make the drive."
          formSource={`Location Page - ${location.city}`}
        />
      </main>

      <Footer />
    </div>
  );
}
