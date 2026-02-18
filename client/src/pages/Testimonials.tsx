import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { storedPages } from "@/data/stored_pages";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ContactCTA } from "@/components/ContactCTA";

export default function Testimonials() {
  const pageData = storedPages.find(p => p.id === "testimonials-page");

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      <main className="flex-grow">
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Patient <span className="italic text-accent">Stories</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                {pageData?.description}
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData?.content_sections.map((story, i) => (
                <FadeIn key={i} delay={i * 0.1} className="bg-muted/20 p-8 rounded-2xl relative">
                  <div className="text-6xl text-primary/10 font-serif absolute top-4 left-4">"</div>
                  <h3 className="font-serif text-xl font-bold mb-4 relative z-10">{story.heading}</h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10 italic">
                    {story.body}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-accent/10 text-center">
           <div className="container mx-auto px-4 max-w-2xl">
             <h2 className="font-serif text-3xl mb-6">Start Your Own Success Story</h2>
             <Link href="/contact">
               <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg">
                 Schedule Consultation
               </Button>
             </Link>
           </div>
        </section>
        <ContactCTA heading="Ready to Experience the Difference?" subheading="Join our family of patients and start your healing journey today." formSource="Testimonials Page" />
      </main>
      <Footer />
    </div>
  );
}
