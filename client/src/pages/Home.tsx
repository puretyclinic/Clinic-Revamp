import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { Services } from "@/components/home/Services";
import { Doctors } from "@/components/home/Doctors";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/layout/FadeIn";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary/20 selection:text-primary-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Services />
        <Doctors />
        
        {/* Testimonial Section */}
        <section className="py-24 bg-accent/5 relative overflow-hidden">
           <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
             <FadeIn direction="up">
               <div className="text-6xl text-accent/20 font-serif mb-4">"</div>
               <blockquote className="font-serif text-3xl md:text-4xl text-foreground italic leading-relaxed mb-8">
                 Both Dr. Jonathan and Dr. Dena go above and beyond to not only explain and inform their patients but make them feel like they really care. You will not find better doctors.
               </blockquote>
               <cite className="not-italic text-sm font-bold tracking-widest uppercase text-accent">
                 — Lynn P., Patient
               </cite>
             </FadeIn>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
