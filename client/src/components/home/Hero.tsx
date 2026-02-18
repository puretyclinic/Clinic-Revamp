import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/layout/FadeIn";
import heroBg from "@assets/image0_(2)_1771385063606.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Peaceful Clinic Interior"
          className="w-full h-full object-cover"
        />
        {/* Soft overlay to ensure text readability - Keeping the warm theme */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 text-center mx-auto max-w-4xl pt-20">
        <FadeIn delay={0.2} direction="up">
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-accent/20">
            Holistic Doctor Santa Barbara
          </span>
        </FadeIn>
        
        <FadeIn delay={0.4} direction="up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-8 leading-[1.1]">
            Holistic, Integrative, & <br/> <span className="italic text-primary">Functional Medicine</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            We believe in curing the entire body, <br/> <span className="font-serif italic text-accent">not just the malady.</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.8} direction="up" className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white text-base shadow-xl shadow-primary/20 w-full sm:w-auto transition-transform hover:scale-105">
            Call: (805) 500-8300
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-10 rounded-full border-primary/30 bg-white/60 backdrop-blur-md hover:bg-white text-primary text-base w-full sm:w-auto">
            Our Services <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
