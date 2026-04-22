import React, { useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Sun, Leaf, Shield, AlertCircle } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { usePageSEO } from "@/hooks/usePageSEO";

export default function CancerSupport() {
  usePageSEO({
    title: "Integrative Cancer Support Santa Barbara | Purety Clinic",
    description: "Integrative cancer support at Purety Clinic in Santa Barbara. High-dose IV Vitamin C, ozone therapy, and naturopathic care. Call (805) 500-8300.",
    canonicalPath: "/services/cancer-support",
  });
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org", "@type": "MedicalTherapy",
      "name": "Integrative Cancer Support",
      "alternateName": ["Holistic Cancer Care", "Integrative Oncology", "Complementary Cancer Therapy"],
      "description": "Integrative cancer support at Purety Family Medical Clinic in Santa Barbara, CA. High-dose IV Vitamin C, ozone therapy, mistletoe, and naturopathic protocols to support patients through conventional cancer treatment.",
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
    const schemas = [
      { id: "cancer-support-schema", data: schema },
      { id: "cancer-local-schema", data: localSchema },
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
                Complementary therapies to strengthen the body, reduce side effects, and improve quality of life during and after conventional treatment.
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

        {/* Introduction */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="flex items-start gap-4 p-6 bg-blue-50 text-blue-900 rounded-xl mb-12 border border-blue-100">
                <AlertCircle className="w-6 h-6 shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  <strong>Note:</strong> We do not treat cancer directly. We provide supportive, integrative care to work alongside your oncologist. Our goal is to keep your healthy cells strong while your conventional treatments target the disease.
                </p>
              </div>

              <h2 className="font-serif text-3xl text-foreground mb-6">Strengthening the Terrain</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  A cancer diagnosis affects the whole person—body, mind, and spirit. While surgery, chemotherapy, and radiation focus on the tumor, our holistic approach focuses on the "host"—YOU.
                </p>
                <p>
                  By optimizing nutrition, reducing inflammation, and supporting detoxification pathways, we help patients tolerate conventional treatments better and recover faster.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Therapies Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Immune Support</h3>
                <p className="text-muted-foreground">
                  Using High-Dose Vitamin C IVs, Mistletoe Therapy, and targeted supplementation to maintain robust immune function during treatment.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Detoxification</h3>
                <p className="text-muted-foreground">
                  Supporting the liver and kidneys to safely eliminate metabolic waste and chemotherapy byproducts using Chelation and Lymphatic support.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Nutrition & Diet</h3>
                <p className="text-muted-foreground">
                  Personalized ketogenic or metabolic nutritional plans designed to starve cancer cells of glucose while nourishing healthy tissue.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary mb-6">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Psycho-Oncology</h3>
                <p className="text-muted-foreground">
                  Addressing the emotional impact of diagnosis through stress reduction techniques, cortisol management, and mind-body connection.
                </p>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white text-center">
           <div className="container mx-auto px-4 max-w-2xl">
             <h2 className="font-serif text-4xl mb-6">You Are Not Alone</h2>
             <p className="text-muted-foreground mb-8">
               Let us build a comprehensive support plan to walk with you through your healing journey.
             </p>
             <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
               <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                 Consult with Dr. Birch
               </a>
             </Button>
           </div>
        </section>
        <ContactCTA heading="Interested in Integrative Cancer Support?" subheading="Contact us to learn how we can support your cancer treatment journey." formSource="Cancer Support Page" />
      </main>
      
      <Footer />
    </div>
  );
}
