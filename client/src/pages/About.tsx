import React from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { ContactCTA } from "@/components/ContactCTA";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-secondary/20 flex items-center justify-center">
          <div className="container px-4 text-center">
            <FadeIn>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our <span className="italic text-primary">Story & Philosophy</span></h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Founded on the belief that the body has an innate ability to heal itself when given the right support.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8" asChild>
                  <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                    Book Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-bold rounded-full px-8" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div className="prose prose-lg text-muted-foreground">
                  <h2 className="font-serif text-3xl text-foreground mb-6">The Purety Approach</h2>
                  <p>
                    Here in Santa Barbara, our holistic doctors Dr. Jonathan Birch and Dr. Dena Birch strive to provide the highest quality naturopathic services. Our core philosophy revolves around the body’s innate ability to heal itself through proper lifestyle and nature cure.
                  </p>
                  <p>
                    There are times when the body needs extra help. On a daily and yearly basis we are always looking for the most innovative treatments, protocols and programs for holistic healing and longevity.
                  </p>
                  <p>
                    Our chief goal is to develop a rich understanding of who you are in all aspects because we believe that your body holds the imprint to your wellness.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="left">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl bg-gray-100 relative">
                   <img 
                     src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1613153079774-2B13LPCPQFVKOY83RHZK/Front+of+Purety+Clinic+Office.jpg"
                     alt="Purety Clinic Office"
                     className="w-full h-full object-cover"
                   />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Doctor Bios - Detailed */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeIn className="mb-20">
               <h2 className="font-serif text-4xl text-center mb-16">Meet The <span className="italic text-primary">Doctors</span></h2>
            </FadeIn>

            {/* Dr. Dena */}
            <div className="grid md:grid-cols-12 gap-12 mb-24 items-start">
               <div className="md:col-span-4">
                 <FadeIn direction="right">
                   <img 
                     src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612849682752-20P4409HYPXT6ALS0FF3/Holistic+Dr.+Dena+Birch" 
                     alt="Dr. Dena Nakhle Birch"
                     className="w-full rounded-2xl shadow-lg"
                   />
                 </FadeIn>
               </div>
               <div className="md:col-span-8">
                 <FadeIn direction="left">
                   <h3 className="font-serif text-3xl mb-2">Dr. Dena Nakhle Birch</h3>
                   <p className="text-sm font-bold uppercase tracking-widest text-accent mb-6">NMD • Women's Health & Pediatrics</p>
                   <div className="space-y-4 text-muted-foreground leading-relaxed">
                     <p>
                       Dena Nakhle Birch NMD is a holistic doctor in Santa Barbara. Her practice focuses on the natural treatment of illness and disease, women’s health, and pediatrics. Her expertise is providing an individualized approach for patient-centered care.
                     </p>
                     <p>
                       After receiving a Bachelor’s degree in Fine Arts from the Art Institute of Chicago and Post-baccalaureate in Psychology from De Paul University, Dena Nakhle Birch was awarded her doctorate degree in Naturopathic Medicine from Southwest College of Naturopathic Medicine.
                     </p>
                     <p>
                       Dr. Dena greatly enjoys doing things to keep her inner child alive. She has an excellent yoga practice, enjoys hiking, scuba diving, snowboarding, mountain biking, cooking, fine arts, travel, and of course spending time with her family.
                     </p>
                   </div>
                   
                   <div className="mt-8 pt-8 border-t border-gray-200">
                     <h4 className="font-bold mb-4 text-foreground">Professional Associations</h4>
                     <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Institute of Functional Medicine</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> American Association of Naturopathic Physicians</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> California Naturopathic Doctor’s Association</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Endocrinology Association of Naturopathic Physicians</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Pediatric Association of Naturopathic Physicians</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> American Herbalists Guild</li>
                     </ul>
                     <div className="mt-5">
                       <Link href="/dr-dena-birch" data-testid="link-about-dena-profile">
                         <Button variant="outline" className="border-primary/30 text-primary font-bold rounded-lg">
                           View Dr. Dena's Full Profile <ArrowRight className="w-4 h-4 ml-2" />
                         </Button>
                       </Link>
                     </div>
                   </div>
                 </FadeIn>
               </div>
            </div>

            {/* Dr. Jonathan */}
            <div className="grid md:grid-cols-12 gap-12 items-start">
               <div className="md:col-span-4 md:order-2">
                 <FadeIn direction="left">
                   <img 
                     src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612850026107-T8M1DMZCFPJ8630SCU8C/Naturopathic+Dr.+Birch" 
                     alt="Dr. Jonathan Birch"
                     className="w-full rounded-2xl shadow-lg"
                   />
                 </FadeIn>
               </div>
               <div className="md:col-span-8 md:order-1">
                 <FadeIn direction="right">
                   <h3 className="font-serif text-3xl mb-2">Dr. Jonathan Birch</h3>
                   <p className="text-sm font-bold uppercase tracking-widest text-accent mb-6">NMD, RMSK • Regenerative Medicine</p>
                   <div className="space-y-4 text-muted-foreground leading-relaxed">
                     <p>
                       Jonathan Birch NMD, RMSK is a holistic naturopathic medical doctor. His practice focuses on the natural treatment of pain, illness, and disease. His goal is to cultivate a partnership with his patients in order for them to move towards their highest potential of wellness.
                     </p>
                     <p>
                       After receiving a Bachelor’s degree in Biochemistry from Occidental College, Dr. Jonathan received his doctorate degree in Naturopathic Medicine from Southwest College of Naturopathic Medicine in 2014.
                     </p>
                     <p>
                       Dr. Jonathan greatly enjoys anything nature. He has a consistent Qi gong practice and enjoys hiking, scuba diving, gardening, cooking, and spending time with family.
                     </p>
                   </div>
                   
                   <div className="mt-8 pt-8 border-t border-gray-200">
                     <h4 className="font-bold mb-4 text-foreground">Professional Associations</h4>
                     <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Musculoskeletal Ultrasound US</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> TOBI Orthobiologic Institute</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Biological Medicine Academy</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Fecal Transplant Foundation</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Gastroenterology Association of Naturopathic Physicians</li>
                     </ul>
                     <div className="mt-5">
                       <Link href="/dr-jonathan-birch" data-testid="link-about-jonathan-profile">
                         <Button variant="outline" className="border-primary/30 text-primary font-bold rounded-lg">
                           View Dr. Jonathan's Full Profile <ArrowRight className="w-4 h-4 ml-2" />
                         </Button>
                       </Link>
                     </div>
                   </div>
                 </FadeIn>
               </div>
            </div>

          </div>
        </section>
        <ContactCTA heading="Meet Our Doctors" subheading="Schedule a consultation with Dr. Jonathan or Dr. Dena Birch." formSource="About Page" />
      </main>
      
      <Footer />
    </div>
  );
}
