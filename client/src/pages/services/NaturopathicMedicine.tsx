import React, { useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Baby, Flower, Heart, CheckCircle2 } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { usePageSEO } from "@/hooks/usePageSEO";

export default function NaturopathicMedicine() {
  usePageSEO({
    title: "Naturopathic Medicine Santa Barbara | Purety Clinic",
    description: "Naturopathic medicine with Dr. Jonathan Birch NMD in Santa Barbara. Root-cause care for chronic illness and immune health. Call (805) 500-8300.",
    canonicalPath: "/services/naturopathic",
  });
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org", "@type": "Physician",
      "name": "Dr. Jonathan Birch, NMD, RMSK",
      "medicalSpecialty": ["NaturopathicMedicine", "IntegrativeMedicine", "FunctionalMedicine"],
      "description": "Dr. Jonathan Birch is a Naturopathic Medical Doctor (NMD) offering holistic, root-cause medicine at Purety Family Medical Clinic in Santa Barbara, CA.",
      "worksFor": { "@type": "MedicalClinic", "name": "Purety Family Medical Clinic", "url": "https://puretyclinic.com", "telephone": "+1-805-500-8300", "address": { "@type": "PostalAddress", "streetAddress": "2323 Oak Park Ln, Suite 102", "addressLocality": "Santa Barbara", "addressRegion": "CA", "postalCode": "93105" } },
      "hasCredential": [{ "@type": "EducationalOccupationalCredential", "credentialCategory": "NMD" }, { "@type": "EducationalOccupationalCredential", "credentialCategory": "RMSK" }]
    };
    const localSchema = {
      "@context": "https://schema.org", "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic", "url": "https://puretyclinic.com/services/naturopathic",
      "telephone": "+1-805-500-8300", "description": "Naturopathic and functional medicine in Santa Barbara, CA. Root-cause care serving Ventura, Los Angeles, Thousand Oaks, and Southern California.",
      "address": { "@type": "PostalAddress", "streetAddress": "2323 Oak Park Ln, Suite 102", "addressLocality": "Santa Barbara", "addressRegion": "CA", "postalCode": "93105", "addressCountry": "US" },
      "medicalSpecialty": "NaturopathicMedicine", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "77", "bestRating": "5" }
    };
    const schemas = [
      { id: "natmed-physician-schema", data: schema },
      { id: "natmed-local-schema", data: localSchema },
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
                Root Cause Resolution
              </span>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Naturopathic <span className="italic text-accent">Medicine</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                A holistic approach to primary care, focusing on prevention, nutrition, and natural therapies for the whole family.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" asChild>
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

        {/* Women's Health */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto">
               <FadeIn className="text-center mb-16">
                 <Flower className="w-12 h-12 text-primary mx-auto mb-6" />
                 <h2 className="font-serif text-4xl mb-6">Women's Health & Hormones</h2>
                 <p className="text-xl text-muted-foreground leading-relaxed">
                   Dr. Dena Birch specializes in balancing hormones naturally through all stages of life, from puberty to menopause.
                 </p>
               </FadeIn>
               
               <div className="grid md:grid-cols-2 gap-8">
                 <FadeIn delay={0.1} className="p-6 rounded-2xl bg-muted/20">
                   <h3 className="font-serif text-xl font-bold mb-4">Conditions Treated</h3>
                   <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• PCOS & Irregular Cycles</li>
                      <li>• PMS & PMDD</li>
                      <li>• Perimenopause & Menopause</li>
                      <li>• Thyroid Disorders (Hashimoto's)</li>
                      <li>• Adrenal Fatigue</li>
                   </ul>
                 </FadeIn>
                 <FadeIn delay={0.2} className="p-6 rounded-2xl bg-muted/20">
                   <h3 className="font-serif text-xl font-bold mb-4">Our Approach</h3>
                   <ul className="space-y-2 text-sm text-foreground/80">
                      <li>• Comprehensive Hormone Testing (DUTCH)</li>
                      <li>• Bioidentical Hormone Replacement (BHRT)</li>
                      <li>• Herbal & Nutritional Protocols</li>
                      <li>• Stress Management Strategies</li>
                   </ul>
                 </FadeIn>
               </div>
             </div>
          </div>
        </section>

        {/* Pediatrics */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto">
               <FadeIn className="text-center mb-16">
                 <Baby className="w-12 h-12 text-primary mx-auto mb-6" />
                 <h2 className="font-serif text-4xl mb-6">Holistic Pediatrics</h2>
                 <p className="text-xl text-muted-foreground leading-relaxed">
                   Gentle, safe, and effective care for your little ones. We support growing bodies without over-reliance on antibiotics.
                 </p>
               </FadeIn>
               
               <div className="grid md:grid-cols-3 gap-6 text-center">
                  <FadeIn delay={0.1} className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="font-bold mb-2">Well Child Exams</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive milestones and developmental tracking.</p>
                  </FadeIn>
                  <FadeIn delay={0.2} className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="font-bold mb-2">Immune Support</h3>
                    <p className="text-sm text-muted-foreground">Natural treatments for colds, flu, and ear infections.</p>
                  </FadeIn>
                  <FadeIn delay={0.3} className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="font-bold mb-2">Food Sensitivities</h3>
                    <p className="text-sm text-muted-foreground">Identifying triggers for eczema, asthma, and digestive issues.</p>
                  </FadeIn>
               </div>
             </div>
          </div>
        </section>

        <ContactCTA heading="Interested in Naturopathic Medicine?" subheading="Contact us to learn how naturopathic approaches can improve your health." formSource="Naturopathic Medicine Page" />
      </main>
      
      <Footer />
    </div>
  );
}
