import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, Sun, Droplets, Mountain } from "lucide-react";
import { Link } from "wouter";
import { ContactCTA } from "@/components/ContactCTA";

export default function NatureTherapies() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <Leaf className="w-4 h-4" />
                <span>Naturopathic Modalities</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Nature <span className="italic text-accent">Therapies</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Foundational healing practices that reconnect you with the earth's natural rhythms and resources.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <FadeIn delay={0.1} className="bg-green-50 p-8 rounded-2xl border border-green-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-700 mb-6 shadow-sm">
                   <Sun className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-green-900">Hydrotherapy</h3>
                <p className="text-sm text-green-800/80 leading-relaxed">
                  Alternating hot and cold water applications to stimulate circulation, boost immune function, and detoxify tissues. Constitutional hydrotherapy is a core naturopathic tool.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-700 mb-6 shadow-sm">
                   <Mountain className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-amber-900">Botanical Medicine</h3>
                <p className="text-sm text-amber-800/80 leading-relaxed">
                  The use of plants as medicine. We use Western and Eastern herbs in teas, tinctures, and capsules to support organ function and treat disease gently.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="bg-sky-50 p-8 rounded-2xl border border-sky-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sky-700 mb-6 shadow-sm">
                   <Droplets className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-sky-900">Homeopathy</h3>
                <p className="text-sm text-sky-800/80 leading-relaxed">
                  A system of energetic medicine using highly diluted substances to trigger the body's self-healing response. Excellent for sensitive patients and children.
                </p>
              </FadeIn>

              <FadeIn delay={0.4} className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-700 mb-6 shadow-sm">
                   <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-stone-900">Clinical Nutrition</h3>
                <p className="text-sm text-stone-800/80 leading-relaxed">
                  Food is medicine. We use therapeutic diets (FODMAP, AIP, Keto) and targeted nutrient therapy to correct deficiencies and reduce inflammation.
                </p>
              </FadeIn>

            </div>
          </div>
        </section>

        <section className="py-24 bg-accent/10 text-center">
           <div className="container mx-auto px-4 max-w-2xl">
             <h2 className="font-serif text-4xl mb-6">Back to Basics</h2>
             <p className="text-muted-foreground mb-8">
               Sometimes the simplest solutions are the most profound. Let us help you build a foundation of health.
             </p>
             <Link href="/contact">
               <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg">
                 Book a Consultation
               </Button>
             </Link>
           </div>
        </section>
        <ContactCTA heading="Interested in Nature Therapies?" subheading="Contact us to learn how natural healing therapies can benefit you." formSource="Nature Therapies Page" />
      </main>
      <Footer />
    </div>
  );
}
