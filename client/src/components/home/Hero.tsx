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
        {/* Warm, soft overlay for a 'Golden Hour' feel */}
        <div className="absolute inset-0 bg-stone-100/40 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-white/50 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 text-center mx-auto max-w-4xl pt-20">
        <FadeIn delay={0.2} direction="up">
          <span className="inline-block py-2 px-4 rounded-full bg-white/60 backdrop-blur-md text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-white shadow-sm">
            Holistic Sanctuary Santa Barbara
          </span>
        </FadeIn>
        
        <FadeIn delay={0.4} direction="up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8 leading-[1.1]">
            Nurturing the <span className="italic text-primary">whole person</span>, <br /> naturally.
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            A sanctuary for integrative healing. We believe in supporting your body's innate wisdom to restore balance and vitality.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} direction="up" className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white text-base shadow-xl shadow-primary/20 w-full sm:w-auto transition-all hover:-translate-y-1">
            Begin Your Journey
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-10 rounded-full border-primary/20 bg-white/60 backdrop-blur-md hover:bg-white text-primary text-base w-full sm:w-auto transition-all hover:-translate-y-1">
            Our Philosophy <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
