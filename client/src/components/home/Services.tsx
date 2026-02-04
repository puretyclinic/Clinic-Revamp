import { FadeIn } from "@/components/layout/FadeIn";
import { Button } from "@/components/ui/button";
import { Sparkles, Wind, Droplet, Flower, Heart, Baby } from "lucide-react";

const services = [
  {
    title: "Restorative Therapies",
    description: "Natural support for joint comfort and mobility using your body's own healing factors.",
    icon: Sparkles
  },
  {
    title: "Oxygen & Immunity",
    description: "Gentle oxidative therapies to support immune resilience and promote cellular vitality.",
    icon: Wind
  },
  {
    title: "Nutrient Hydration",
    description: "Personalized nutrient blends to replenish, detoxify, and restore deep hydration.",
    icon: Droplet
  },
  {
    title: "Women's Vitality",
    description: "Holistic support for hormonal harmony, fertility, and graceful transitions through all life stages.",
    icon: Flower
  },
  {
    title: "Men's Wellness",
    description: "Optimizing longevity, energy, and hormonal health through integrative lifestyle strategies.",
    icon: Heart
  },
  {
    title: "Children's Wellness",
    description: "Gentle, natural care for growing bodies, focusing on preventative health and immunity.",
    icon: Baby
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Holistic <span className="italic text-primary">Pathways</span></h2>
            <p className="text-muted-foreground text-lg font-light">
              We gently combine the wisdom of nature with modern understanding to support your journey to wholeness.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500 border border-white hover:border-primary/20 h-full flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-secondary/50 rounded-full text-primary group-hover:scale-110 transition-transform duration-500">
                  <service.icon strokeWidth={1.5} className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-light flex-grow">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-xs font-bold text-accent uppercase tracking-widest hover:text-accent/80 transition-colors mt-auto border-b border-transparent hover:border-accent">
                  Discover More
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-16">
          <FadeIn delay={0.4}>
            <Button size="lg" className="rounded-full px-10 h-14 bg-primary/90 hover:bg-primary text-white shadow-lg shadow-primary/10 transition-transform hover:scale-105">
              Explore All Therapies
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
