import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Syringe, Activity, Bone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function RegenerativeMedicine() {
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
                Non-Surgical Pain Relief
              </span>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Regenerative <span className="italic text-accent">Medicine</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Harnessing your body's own healing potential to repair tissues, reduce pain, and restore function without surgery.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <h2 className="font-serif text-3xl text-foreground mb-6">Beyond Pain Management</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p>
                  At Purety Clinic, we specialize in advanced regenerative injection therapies. Unlike traditional treatments that often only mask symptoms (like cortisone shots), our therapies are designed to address the root cause of your pain: injured or degenerated tissue.
                </p>
                <p>
                  By precisely injecting natural healing agents into damaged areas, we stimulate the body's repair mechanisms, strengthening ligaments, tendons, and cartilage.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* PRP */}
              <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">PRP Therapy</h3>
                <p className="text-muted-foreground mb-6">
                  Platelet-Rich Plasma (PRP) uses a concentrated blend of your own platelets to release growth factors that accelerate healing in tendons and ligaments.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent"/> Tennis Elbow</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent"/> Rotator Cuff Tears</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent"/> Knee Arthritis</li>
                </ul>
              </FadeIn>

              {/* Prolotherapy */}
              <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary mb-6">
                  <Syringe className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Prolotherapy</h3>
                <p className="text-muted-foreground mb-6">
                  Dextrose-based injections that stimulate mild inflammation, triggering the body to lay down new collagen and strengthen loose ligaments.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent"/> Chronic Back Pain</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent"/> Unstable Joints</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent"/> Ankle Sprains</li>
                </ul>
              </FadeIn>

              {/* Stem Cell / Biologics */}
              <FadeIn delay={0.3} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center text-primary mb-6">
                  <Bone className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Biologic Injections</h3>
                <p className="text-muted-foreground mb-6">
                  Advanced biologic allografts including Wharton's Jelly and Exosomes, providing a rich scaffold of growth factors and cytokines for tissue repair and regeneration.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent"/> Severe Arthritis</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent"/> Meniscus Tears</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent"/> Hip Degeneration</li>
                </ul>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white text-center">
           <div className="container mx-auto px-4 max-w-2xl">
             <h2 className="font-serif text-4xl mb-6">Avoid Surgery. Restore Motion.</h2>
             <p className="text-muted-foreground mb-8">
               Schedule a consultation with Dr. Jonathan Birch to determine if you are a candidate for regenerative therapy.
             </p>
             <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg">
               Book Your Assessment
             </Button>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
