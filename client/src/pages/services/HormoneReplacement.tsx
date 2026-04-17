import React, { useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Flower, Sun, Heart, CheckCircle2 } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";

export default function HormoneReplacement() {
  useEffect(() => {
    document.title = "BHRT Santa Barbara | Hormone Therapy | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Bioidentical hormone therapy (BHRT) for men and women at Purety Clinic in Santa Barbara, CA. Natural hormone balancing. Call (805) 500-8300.");

    const schema = {
      "@context": "https://schema.org", "@type": "MedicalTherapy",
      "name": "Bioidentical Hormone Replacement Therapy (BHRT)",
      "alternateName": ["BHRT", "Hormone Replacement Therapy", "HRT", "Bioidentical HRT"],
      "description": "Bioidentical hormone replacement therapy for men and women at Purety Family Medical Clinic in Santa Barbara, CA. Natural hormone balancing using bioidentical estrogen, progesterone, and testosterone.",
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
    const schemas = [
      { id: "bhrt-therapy-schema", data: schema },
      { id: "bhrt-local-schema", data: localSchema },
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
                Restore optimal hormone levels safely with natural, bioidentical hormones. For Men and Women.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                  Book Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
              <FadeIn direction="right">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">Why Bioidentical?</h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed">
                  <p>
                    Bioidentical hormones are molecularly identical to the hormones your body produces naturally. Unlike synthetic hormones (which can cause unwanted side effects), bioidenticals fit your hormone receptors perfectly.
                  </p>
                  <p>
                    We use comprehensive DUTCH testing and blood work to prescribe precise doses of Estrogen, Progesterone, Testosterone, DHEA, and Thyroid hormone tailored to your unique physiology.
                  </p>
                </div>
              </FadeIn>
              
              <div className="space-y-6">
                 <FadeIn delay={0.1} className="bg-pink-50 p-8 rounded-3xl border border-pink-100">
                   <h3 className="font-bold text-xl mb-4 text-pink-900 flex items-center gap-2"><Heart className="w-5 h-5"/> Women's Health</h3>
                   <ul className="space-y-2 text-pink-800/80 text-sm">
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Relief from hot flashes & night sweats</li>
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Improved mood & sleep</li>
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Enhanced libido & energy</li>
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Prevention of osteoporosis</li>
                   </ul>
                 </FadeIn>

                 <FadeIn delay={0.2} className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                   <h3 className="font-bold text-xl mb-4 text-blue-900 flex items-center gap-2"><Sun className="w-5 h-5"/> Men's Health</h3>
                   <ul className="space-y-2 text-blue-800/80 text-sm">
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Increased muscle mass & strength</li>
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Sharper mental focus</li>
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Cardiovascular protection</li>
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> Improved drive & performance</li>
                   </ul>
                 </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-accent/10 text-center">
           <div className="container mx-auto px-4 max-w-2xl">
             <h2 className="font-serif text-4xl mb-6">Feel Like Yourself Again</h2>
             <p className="text-muted-foreground mb-8">
               Aging is inevitable, but suffering is optional. Let's find your balance.
             </p>
             <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
               <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                 Schedule Hormone Evaluation
               </a>
             </Button>
           </div>
        </section>
        <ContactCTA heading="Interested in Hormone Replacement?" subheading="Contact us to learn how bioidentical HRT can restore your vitality." formSource="Hormone Replacement Page" />
      </main>
      <Footer />
    </div>
  );
}
