import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSafe } from "@/components/hero-safe";
import { Philosophy } from "@/components/home/Philosophy";
import { Services } from "@/components/home/Services";
import { Doctors } from "@/components/home/Doctors";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { ContactCTA } from "@/components/ContactCTA";
import { FadeIn } from "@/components/layout/FadeIn";
import { CheckCircle2, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  useEffect(() => {
    document.title = "Integrative Medicine Santa Barbara | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Purety Clinic in Santa Barbara — FMT, plasma exchange, PRP, EBO2 ozone therapy, IV therapy, BHRT, and holistic primary care. Call (805) 500-8300.");

    const schema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Santa Barbara's integrative and naturopathic medical clinic specializing in fecal microbiota transplant (FMT), therapeutic plasma exchange (TPE), PRP and regenerative injections, EBO2 ozone therapy, and holistic primary care for the whole family.",
      "url": "https://puretyclinic.com",
      "telephone": "+1-805-500-8300",
      "email": "info@puretyclinic.com",
      "foundingDate": "2014",
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
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" }
      ],
      "areaServed": [
        { "@type": "City", "name": "Santa Barbara" },
        { "@type": "City", "name": "Goleta" },
        { "@type": "City", "name": "Montecito" },
        { "@type": "City", "name": "Carpinteria" },
        { "@type": "City", "name": "Ventura" },
        { "@type": "City", "name": "Ojai" },
        { "@type": "City", "name": "Oxnard" },
        { "@type": "City", "name": "Thousand Oaks" },
        { "@type": "City", "name": "Santa Ynez" }
      ],
      "medicalSpecialty": [
        "IntegrativeMedicine",
        "NaturopathicMedicine",
        "RegenerativeMedicine",
        "GastroenterologyAndHepatology",
        "Pediatrics",
        "ObstetricsGynecology"
      ],
      "hasMap": "https://maps.google.com/?q=Purety+Family+Medical+Clinic+Santa+Barbara+CA",
      "employee": [
        {
          "@type": "Physician",
          "name": "Dr. Jonathan Birch",
          "jobTitle": "NMD, RMSK",
          "description": "Specializes in FMT, regenerative injections (PRP, stem cell), EBO2 ozone therapy, and therapeutic plasma exchange.",
          "url": "https://puretyclinic.com/dr-jonathan-birch"
        },
        {
          "@type": "Physician",
          "name": "Dr. Dena Nakhle Birch",
          "jobTitle": "NMD",
          "description": "Specializes in women's health, pediatric care, hormone balance, and holistic family medicine."
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      }
    };

    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "home-local-schema";
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);

    return () => document.getElementById("home-local-schema")?.remove();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />

      <main className="flex-grow">
        <HeroSafe
          badgeText="Holistic Doctor · Santa Barbara"
          headline="Holistic, Integrative & Functional Medicine"
          subheadline="We focus on the whole person — not just symptoms. Personalized care rooted in modern diagnostics and natural therapies."
          primaryCta={{ label: "Book Consultation", href: "#contact-form" }}
          secondaryCta={{ label: "Call (805) 500-8300", href: "tel:+18055008300" }}
          backgroundImageUrl="/images/hero-nature-immersive.jpg"
        />

        {/* Stats bar */}
        <div className="bg-primary text-white py-6 border-b border-primary/80">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "1,000+", label: "FMT Procedures" },
                { value: "4,000+", label: "Regenerative Injections" },
                { value: "2,500+", label: "Ozone Treatments" },
                { value: "5.0★", label: "Google Rating · 70+ Reviews" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold font-serif text-accent">{s.value}</div>
                  <div className="text-xs text-white/70 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Philosophy />
        <Services />
        <Testimonials />
        <Doctors />

        {/* Conditions We Treat */}
        <section className="py-20 bg-[#f8fafb] border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn>
              <div className="text-center mb-14">
                <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">What We Treat</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Conditions We <span className="italic text-primary">Specialize In</span></h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our specialty areas allow us to treat complex, chronic conditions that conventional medicine often struggles to resolve.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* FMT */}
              <FadeIn delay={0.05}>
                <Link href="/fecal-transplant">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer h-full">
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Fecal Transplant · FMT</div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-4">Gut & Digestive Conditions</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {["Ulcerative Colitis", "Crohn's Disease", "IBS / SIBO", "C. difficile Infection", "Gut Dysbiosis", "Chronic Diarrhea", "Microbiome Disruption", "IBD Flares"].map((c, i) => (
                        <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />{c}</li>
                      ))}
                    </ul>
                    <div className="mt-5 text-xs font-bold text-primary">Learn about FMT →</div>
                  </div>
                </Link>
              </FadeIn>

              {/* TPE */}
              <FadeIn delay={0.1}>
                <Link href="/services/plasma-exchange">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer h-full">
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Plasma Exchange · TPE</div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-4">Blood & Immune Conditions</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {["Autoimmune Disorders", "Long COVID", "Chronic Lyme Disease", "Mold / Mycotoxin Illness", "Neurological Conditions", "Chronic EBV / Viral Illness", "Heavy Metal Burden", "Cardiovascular Disease"].map((c, i) => (
                        <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />{c}</li>
                      ))}
                    </ul>
                    <div className="mt-5 text-xs font-bold text-primary">Learn about TPE →</div>
                  </div>
                </Link>
              </FadeIn>

              {/* EBO2 / Ozone */}
              <FadeIn delay={0.15}>
                <Link href="/services/ozone-therapy">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer h-full">
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Ozone Therapy · EBO2 · EBOO</div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-4">Chronic Infection & Inflammation</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {["Long COVID & Post-viral Fatigue", "Chronic Lyme Disease", "Mold / Mycotoxin Illness", "Autoimmune Conditions", "Chronic EBV / Viral Infections", "Chronic Fatigue (ME/CFS)", "Fibromyalgia", "Immune Modulation"].map((c, i) => (
                        <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />{c}</li>
                      ))}
                    </ul>
                    <div className="mt-5 text-xs font-bold text-primary">Learn about ozone therapies →</div>
                  </div>
                </Link>
              </FadeIn>

              {/* PRP / Regen */}
              <FadeIn delay={0.2}>
                <Link href="/services/regenerative">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer h-full">
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">PRP · Regenerative Injections</div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-4">Joint & Musculoskeletal Pain</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {["Chronic Joint Pain & Arthritis", "Tendon & Ligament Tears", "Back & Neck Pain", "Rotator Cuff Injuries", "Plantar Fasciitis", "Tennis / Golfer's Elbow", "Sports Injuries", "Knee & Hip Pain"].map((c, i) => (
                        <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />{c}</li>
                      ))}
                    </ul>
                    <div className="mt-5 text-xs font-bold text-primary">Learn about PRP →</div>
                  </div>
                </Link>
              </FadeIn>

              {/* Women's Health & Pediatrics — Dr. Dena */}
              <FadeIn delay={0.25}>
                <Link href="/dr-dena-birch">
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer h-full">
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Dr. Dena Birch · NMD</div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-4">Women's Health & Pediatrics</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {["Hormone Imbalance & Menopause", "Fertility & Pre-conception", "Thyroid & Adrenal Disorders", "Pregnancy & Postpartum", "Pediatric Wellness", "Women's Preventive Care", "PCOS", "Holistic Family Medicine"].map((c, i) => (
                        <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />{c}</li>
                      ))}
                    </ul>
                    <div className="mt-5 text-xs font-bold text-primary">Meet Dr. Dena →</div>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground text-center">
                <div className="flex items-center gap-1.5 font-bold text-foreground"><MapPin className="w-4 h-4 text-primary" /> Serving:</div>
                {["Santa Barbara", "Goleta", "Montecito", "Carpinteria", "Ventura", "Ojai", "Oxnard", "Thousand Oaks", "Santa Ynez"].map((city, i) => (
                  <span key={i} className="text-muted-foreground">{city}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Ready to Start Your Healing Journey?" formSource="Home Page" />
      </main>

      <Footer />
    </div>
  );
}
