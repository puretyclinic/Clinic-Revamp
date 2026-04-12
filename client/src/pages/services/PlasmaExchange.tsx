import React, { useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Droplet, Activity, RefreshCw, AlertCircle, CheckCircle2, ShieldCheck, HeartPulse } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { Link } from "wouter";

export default function PlasmaExchange() {
  useEffect(() => {
    document.title = "Therapeutic Plasma Exchange (TPE) Santa Barbara | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Therapeutic Plasma Exchange (TPE) at Purety Clinic in Santa Barbara, CA. Advanced plasmapheresis for autoimmune disease, Long Covid, MS, and blood detoxification. Call (805) 500-8300.");

    const schema = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Therapeutic Plasma Exchange (TPE)",
      "alternateName": ["Plasmapheresis", "TPE", "Plasma Exchange"],
      "description": "Therapeutic Plasma Exchange (TPE) is an advanced medical procedure that removes harmful antibodies, toxins, and inflammatory proteins from the bloodstream by separating and replacing plasma. Offered at Purety Family Medical Clinic in Santa Barbara, CA.",
      "procedureType": "Therapeutic",
      "bodyLocation": "Blood",
      "preparation": "Consultation with Dr. Jonathan Birch to assess candidacy and design a treatment protocol.",
      "followUp": "Monitoring for 30 minutes post-procedure. Most patients receive 1 treatment per month for 5 months.",
      "howPerformed": "Blood is drawn through peripheral IV access, separated into plasma and cellular components using a specialized apheresis machine. The plasma is discarded and replaced with albumin. Cleansed blood components are returned to the patient.",
      "performer": {
        "@type": "Physician",
        "name": "Dr. Jonathan Birch",
        "worksFor": {
          "@type": "MedicalClinic",
          "name": "Purety Family Medical Clinic",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2323 Oak Park Ln, Suite 102",
            "addressLocality": "Santa Barbara",
            "addressRegion": "CA",
            "postalCode": "93105"
          },
          "telephone": "+1-805-500-8300",
          "url": "https://puretyclinic.com"
        }
      }
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Purety Family Medical Clinic offers therapeutic plasma exchange (TPE / plasmapheresis) in Santa Barbara, CA. Serving patients from Ventura, Los Angeles, Oxnard, Thousand Oaks, Goleta, Montecito, Ojai, and throughout Southern California.",
      "url": "https://puretyclinic.com/services/plasma-exchange",
      "telephone": "+1-805-500-8300",
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
      "areaServed": [
        { "@type": "City", "name": "Santa Barbara", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Ventura", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Oxnard", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Thousand Oaks", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Los Angeles", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Goleta", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Montecito", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Ojai", "containedInPlace": { "@type": "State", "name": "California" } },
        { "@type": "City", "name": "Carpinteria", "containedInPlace": { "@type": "State", "name": "California" } }
      ],
      "medicalSpecialty": "IntegrativeMedicine",
      "hasMap": "https://maps.google.com/?q=Purety+Family+Medical+Clinic+Santa+Barbara+CA"
    };

    const s0 = document.createElement("script");
    s0.type = "application/ld+json"; s0.id = "tpe-localbusiness-schema";
    s0.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(s0);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does a therapeutic plasma exchange procedure take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most TPE procedures last between 1 to 2.5 hours, depending on your constitution and specific treatment needs." }
        },
        {
          "@type": "Question",
          "name": "Is therapeutic plasma exchange painful?",
          "acceptedAnswer": { "@type": "Answer", "text": "TPE is generally well-tolerated. Veins are numbed prior to IV access, and we use ultrasound guidance when necessary to ensure smooth, comfortable access." }
        },
        {
          "@type": "Question",
          "name": "How many plasma exchange treatments will I need?",
          "acceptedAnswer": { "@type": "Answer", "text": "The number of treatments varies by condition. We generally start with 1 treatment per month for 5 months, then reassess based on your response." }
        },
        {
          "@type": "Question",
          "name": "What conditions can therapeutic plasma exchange treat?",
          "acceptedAnswer": { "@type": "Answer", "text": "TPE has shown clinical benefit for autoimmune conditions including lupus, myasthenia gravis, multiple sclerosis, Guillain-Barré syndrome, Goodpasture's syndrome, TTP, Long Covid, and certain neurodegenerative conditions including Alzheimer's disease." }
        },
        {
          "@type": "Question",
          "name": "Is plasma exchange available in Santa Barbara?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Purety Family Medical Clinic in Santa Barbara offers therapeutic plasma exchange (TPE) under the care of Dr. Jonathan Birch. We serve patients from Santa Barbara, Ventura, Los Angeles, and throughout California." }
        }
      ]
    };

    const s1 = document.createElement("script");
    s1.type = "application/ld+json"; s1.id = "tpe-procedure-schema";
    s1.text = JSON.stringify(schema);
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.type = "application/ld+json"; s2.id = "tpe-faq-schema";
    s2.text = JSON.stringify(faqSchema);
    document.head.appendChild(s2);

    return () => {
      document.getElementById("tpe-localbusiness-schema")?.remove();
      document.getElementById("tpe-procedure-schema")?.remove();
      document.getElementById("tpe-faq-schema")?.remove();
    };
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
                <RefreshCw className="w-4 h-4" />
                <span>Plasmapheresis</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Therapeutic Plasma <span className="italic text-accent">Exchange (TPE)</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Safety, quality, and efficacy driven detoxification and blood rejuvenation.
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
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
               <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-xl mb-12 flex gap-4">
                 <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0" />
                 <p className="text-sm text-yellow-800">
                   <strong>Note:</strong> At Purety Clinic we have fully embraced this very unique treatment due to its superb ability to provide detoxification and blood rejuvenation. You will have a team of experienced caregivers, and we go the extra mile for your comfort and treatment success throughout the process.
                 </p>
               </div>

               <h2 className="font-serif text-3xl mb-6 text-foreground">What is Therapeutic Plasma Exchange?</h2>
               <div className="prose prose-lg text-muted-foreground leading-relaxed mb-12">
                 <p>
                   Therapeutic Plasma Exchange (TPE) is an advanced, clinically proven medical procedure designed to promote better health by removing harmful substances from the bloodstream. This innovative therapy works by separating and replacing the plasma, the liquid component of blood, which may contain high levels of antibodies, toxins, proteins, or other unwanted particles that contribute to certain diseases.
                 </p>
               </div>
               
               <h2 className="font-serif text-3xl mb-6 text-foreground">How Does It Work?</h2>
               <div className="prose prose-lg text-muted-foreground leading-relaxed mb-12">
                 <p>
                   During Therapeutic Plasma Exchange (TPE), a specialized device is used to separate the blood into different components:
                 </p>
                 <ul className="grid grid-cols-2 gap-4 not-prose mb-6">
                    <li className="flex items-center gap-2"><Droplet className="w-4 h-4 text-primary"/> Plasma</li>
                    <li className="flex items-center gap-2"><Activity className="w-4 h-4 text-primary"/> Red blood cells</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary"/> White blood cells</li>
                    <li className="flex items-center gap-2"><HeartPulse className="w-4 h-4 text-primary"/> Platelets</li>
                 </ul>
                 <p>
                   The plasma, which may contain harmful or inflammatory substances, is discarded and replaced with a beneficial substitute, albumin. The cleansed blood components are then returned to the body, helping to reduce inflammation, manage autoimmune responses, and support the body’s ability to heal.
                 </p>
               </div>

               <div className="bg-gray-50 p-8 rounded-2xl mb-12">
                 <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><Activity className="w-5 h-5 text-primary"/> Conditions That May Benefit</h3>
                 <p className="text-muted-foreground mb-4">
                   TPE has shown promise in managing various autoimmune and neurological conditions, as well as benefitting the aging process:
                 </p>
                 <ul className="space-y-3 text-sm text-muted-foreground">
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Autoimmune disorders like <strong>Lupus</strong> and <strong>Myasthenia Gravis</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Neurological conditions, such as <strong>Multiple Sclerosis (MS)</strong> and <strong>Guillain-Barré syndrome</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Certain kidney diseases, including <strong>Goodpasture’s syndrome</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Blood disorders, such as <strong>Thrombotic Thrombocytopenic Purpura (TTP)</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span><strong>Long Covid</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Neurodegenerative conditions such as <strong>Alzheimer’s and dementia</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Chronic inflammatory diseases where excess immune activity or toxins are problematic</span></li>
                 </ul>
               </div>
               
               <h2 className="font-serif text-3xl mb-6 text-foreground">Benefits of TPE</h2>
               <div className="prose prose-lg text-muted-foreground leading-relaxed mb-12">
                 <p>TPE provides several health benefits by removing substances that may contribute to disease:</p>
                 <ul className="not-prose space-y-2 mt-4">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Reduced inflammation and discomfort</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Enhanced immune system regulation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Improved symptom management</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Increased energy and reduced fatigue</li>
                 </ul>
               </div>

               <h2 className="font-serif text-3xl mb-6 text-foreground">What to Expect</h2>
               <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm mb-12">
                 <ol className="relative border-l border-gray-200 ml-3 space-y-8">
                   <li className="ml-6">
                     <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white text-white text-xs font-bold">1</span>
                     <h3 className="font-bold text-lg mb-1">Preparation</h3>
                     <p className="text-sm text-muted-foreground">You’ll be made comfortable, and our team will prepare you for the procedure, explaining each step along the way.</p>
                   </li>
                   <li className="ml-6">
                     <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white text-white text-xs font-bold">2</span>
                     <h3 className="font-bold text-lg mb-1">Access</h3>
                     <p className="text-sm text-muted-foreground">One vein is accessed on each arm. The veins can be numbed, and we have ultrasound capability in order to ensure safe and easy access.</p>
                   </li>
                   <li className="ml-6">
                     <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white text-white text-xs font-bold">3</span>
                     <h3 className="font-bold text-lg mb-1">Procedure</h3>
                     <p className="text-sm text-muted-foreground">Blood is drawn through a needle, and our advanced equipment separates your plasma from other blood components.</p>
                   </li>
                   <li className="ml-6">
                     <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white text-white text-xs font-bold">4</span>
                     <h3 className="font-bold text-lg mb-1">Plasma Exchange</h3>
                     <p className="text-sm text-muted-foreground">The unhealthy plasma is removed, and albumin is added before the blood components are returned to your body.</p>
                   </li>
                   <li className="ml-6">
                     <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white text-white text-xs font-bold">5</span>
                     <h3 className="font-bold text-lg mb-1">Aftercare</h3>
                     <p className="text-sm text-muted-foreground">Following the procedure, our team monitors you for a short time to ensure you’re ready to go about your day.</p>
                   </li>
                 </ol>
               </div>
               
               <div className="bg-muted/30 p-8 rounded-2xl mb-12">
                  <h3 className="font-serif text-2xl mb-6">Common Questions</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2">How long does the TPE procedure take?</h4>
                      <p className="text-sm text-muted-foreground">Most procedures last between 1 to 2.5 hours, depending on your constitution and specific treatment needs.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Is TPE painful?</h4>
                      <p className="text-sm text-muted-foreground">The procedure is generally well-tolerated, and our team takes steps to make it as comfortable as possible. Veins are numbed prior to access, and ultrasound is used if necessary for smooth vein access.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">How many treatments will I need?</h4>
                      <p className="text-sm text-muted-foreground">The number of treatments varies based on your health condition and doctor’s recommendation. We generally start with 1 treatment per month for 5 months.</p>
                    </div>
                  </div>
               </div>

            </FadeIn>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <h2 className="font-serif text-3xl mb-4 text-foreground text-center">Therapeutic Plasma Exchange Near You</h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Purety Family Medical Clinic is one of the few outpatient clinics in Southern California offering therapeutic plasma exchange (TPE / plasmapheresis). Located in Santa Barbara, we serve patients from across the region.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { city: "Santa Barbara, CA", note: "Our clinic location" },
                  { city: "Goleta, CA", note: "5 min away" },
                  { city: "Montecito, CA", note: "10 min away" },
                  { city: "Carpinteria, CA", note: "15 min away" },
                  { city: "Ojai, CA", note: "45 min away" },
                  { city: "Ventura, CA", note: "45 min away" },
                  { city: "Oxnard, CA", note: "50 min away" },
                  { city: "Thousand Oaks, CA", note: "1 hr away" },
                  { city: "Los Angeles, CA", note: "1.5 hrs away" },
                ].map(({ city, note }) => (
                  <div key={city} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{city}</p>
                      <p className="text-xs text-muted-foreground">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Can't find your city? We welcome patients from all of California. Remote consultations are available.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-accent/10 text-center">
           <div className="container mx-auto px-4 max-w-2xl">
             <h2 className="font-serif text-4xl mb-6">Advanced Care for Complex Needs</h2>
             <p className="text-muted-foreground mb-8">
               We will work closely with you to assess if TPE is a suitable treatment option based on your health needs.
             </p>
             <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
               <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                 Book TPE Consultation
               </a>
             </Button>
           </div>
        </section>
        <ContactCTA heading="Interested in Plasma Exchange?" subheading="Contact us to learn how therapeutic plasma exchange can help you." formSource="Plasma Exchange Page" />
      </main>
      <Footer />
    </div>
  );
}
