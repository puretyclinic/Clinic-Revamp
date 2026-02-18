import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Droplet, Wind, Zap, CheckCircle2 } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";

export default function IVTherapy() {
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
                Cellular Vitality
              </span>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">IV Therapy & <span className="italic text-accent">Ozone</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Direct delivery of nutrients and oxygen to supercharge your immune system and detoxification pathways.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Ozone Section */}
            <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
               <FadeIn direction="right">
                 <div className="bg-muted/20 p-8 rounded-3xl">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6">
                     <Wind className="w-8 h-8" />
                   </div>
                   <h2 className="font-serif text-4xl mb-6">Ozone Therapy</h2>
                   <p className="text-muted-foreground leading-relaxed mb-6">
                     Ozone (O3) is a super-charged oxygen molecule. When introduced to the body, it stimulates the immune system, improves circulation, and enhances the body's ability to fight infection and reduce inflammation.
                   </p>
                   <h3 className="font-bold text-foreground mb-4">Our Methods:</h3>
                   <ul className="space-y-3">
                     <li className="flex items-center gap-3 text-sm text-foreground/80 p-3 bg-white rounded-xl shadow-sm">
                       <span className="font-bold text-primary">High Dose (Ten Pass)</span>
                       Systemic rejuvenation for chronic illness.
                     </li>
                     <li className="flex items-center gap-3 text-sm text-foreground/80 p-3 bg-white rounded-xl shadow-sm">
                       <span className="font-bold text-primary">EBO2</span>
                       Extracorporeal Blood Oxygenation & Ozonation.
                     </li>
                     <li className="flex items-center gap-3 text-sm text-foreground/80 p-3 bg-white rounded-xl shadow-sm">
                       <span className="font-bold text-primary">Prolozone</span>
                       Localized injection for joint pain.
                     </li>
                   </ul>
                 </div>
               </FadeIn>
               <FadeIn direction="left">
                 <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                      alt="Ozone Therapy"
                      className="w-full h-full object-cover"
                    />
                 </div>
               </FadeIn>
            </div>

            {/* IV Drips Section */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <FadeIn direction="right" className="order-2 md:order-1">
                 <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=800"
                      alt="IV Therapy Lounge"
                      className="w-full h-full object-cover"
                    />
                 </div>
               </FadeIn>
               <FadeIn direction="left" className="order-1 md:order-2">
                 <div className="bg-muted/20 p-8 rounded-3xl">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6">
                     <Droplet className="w-8 h-8" />
                   </div>
                   <h2 className="font-serif text-4xl mb-6">Custom IV Drips</h2>
                   <p className="text-muted-foreground leading-relaxed mb-6">
                     100% absorption of vitamins, minerals, and amino acids. We tailor each drip to your specific metabolic needs, whether you are recovering from illness, training for a marathon, or seeking anti-aging support.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      {["Myer's Cocktail", "High Dose Vitamin C", "Glutathione", "NAD+ Anti-Aging", "Chelation", "Immune Boost"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm font-medium">
                          <Zap className="w-4 h-4 text-accent" /> {item}
                        </div>
                      ))}
                   </div>
                 </div>
               </FadeIn>
            </div>

          </div>
        </section>

        <ContactCTA heading="Interested in IV Therapy?" subheading="Contact us to learn how IV therapy can benefit your health." formSource="IV Therapy Page" />
      </main>
      
      <Footer />
    </div>
  );
}
