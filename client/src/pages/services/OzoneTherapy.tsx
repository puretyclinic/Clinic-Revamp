import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Wind, Activity, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { ContactCTA } from "@/components/ContactCTA";

export default function OzoneTherapy() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <Wind className="w-4 h-4" />
                <span>Advanced Oxidative Therapy</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Ozone <span className="italic text-accent">Therapy</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Supercharge your immune system and oxygen utilization with Medical Ozone, EBO2, and Ten Pass therapy.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <FadeIn direction="right">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">What is Medical Ozone?</h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed">
                  <p>
                    Ozone (O3) is a super-charged form of oxygen. When administered medically, it improves cellular metabolism, reduces inflammation, and kills pathogens (bacteria, viruses, fungi) on contact.
                  </p>
                  <p>
                    At Purety Clinic, we use the most advanced methods available, including High Dose Ozone and EBO2, to treat chronic infections, mold toxicity, and autoimmune conditions.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="left">
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                  <h3 className="font-bold text-xl mb-4 text-blue-900">Key Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      "Boosts mitochondrial function (energy)",
                      "Modulates the immune system",
                      "Improves circulation and oxygen delivery",
                      "Potent anti-viral and anti-bacterial effects",
                      "Reduces systemic inflammation"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-blue-800/80">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            <h3 className="font-serif text-3xl text-center mb-12">Our Treatment Protocols</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xl mb-3">10 Pass / Multipass</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A high-dose hyperbaric ozone treatment. Blood is drawn, ozonated under pressure, and returned to the body. Repeated 10 times in one sitting for maximum saturation.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.2} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xl mb-3">EBO2 Protocol</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Extracorporeal Blood Oxygenation and Ozonation. Similar to dialysis but for cleaning and oxygenating the blood. Filters out heavy metals, fats, and inflammatory proteins.
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                  <Wind className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xl mb-3">IV & Local Ozone</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Used for joint injections (Prolozone), sinus insufflation, and rectal/vaginal insufflation for systemic absorption without needles.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-24 bg-accent/10 text-center">
           <div className="container mx-auto px-4 max-w-2xl">
             <h2 className="font-serif text-4xl mb-6">Revitalize Your Health</h2>
             <p className="text-muted-foreground mb-8">
               Discuss your condition with Dr. Birch to see if Ozone Therapy is right for you.
             </p>
             <Link href="/contact">
               <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg">
                 Schedule Consultation
               </Button>
             </Link>
           </div>
        </section>
        <ContactCTA heading="Interested in Ozone Therapy?" subheading="Contact us to learn how ozone therapy can benefit your health." formSource="Ozone Therapy Page" />
      </main>
      <Footer />
    </div>
  );
}
