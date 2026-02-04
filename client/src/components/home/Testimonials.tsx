import { FadeIn } from "@/components/layout/FadeIn";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        <FadeIn direction="up">
          <Quote className="w-16 h-16 text-accent/50 mx-auto mb-8" />
          <blockquote className="font-serif text-3xl md:text-4xl italic leading-relaxed mb-10 text-white/95">
            "I cannot say enough about Purety Family Medical Clinic. Both Dr. Jonathan and Dr. Dena go above and beyond to not only explain and inform their patients but make them feel like they really care. Every time I have been to the Clinic I have been given excellent care. You will not find better doctors than these two."
          </blockquote>
          
          <div className="flex flex-col items-center">
            <cite className="not-italic font-bold text-lg tracking-wider uppercase text-accent mb-1">
              — Lynn P.
            </cite>
            <span className="text-white/60 text-sm">Patient</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
