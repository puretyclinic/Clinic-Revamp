import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/layout/FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Peaceful Clinic Interior"
          className="w-full h-full object-cover"
        />
        {/* Soft overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 text-center mx-auto max-w-4xl pt-20">
        <FadeIn delay={0.2} direction="up">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-accent/20">
            Holistic Medicine Santa Barbara
          </span>
        </FadeIn>
        
        <FadeIn delay={0.4} direction="up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 leading-[0.9]">
            Curing the <span className="italic text-primary">entire body</span>, <br /> not just the malady.
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Purety Family Medical Clinic practices holistic, integrative, and functional medicine. 
            We believe in your body's innate ability to heal.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} direction="up" className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white text-base shadow-xl shadow-primary/20 w-full sm:w-auto transition-transform hover:scale-105">
            Book Appointment
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-primary/20 bg-white/50 backdrop-blur-sm hover:bg-white text-primary text-base w-full sm:w-auto">
            Explore Services <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
