import { FadeIn } from "@/components/layout/FadeIn";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Regenerative Injections",
    description: "PRP (Platelet Rich Plasma), Stem Cell Matrix injections, Prolotherapy, and Prolozone for joint pain and injuries.",
    icon: "💉"
  },
  {
    title: "Ozone Therapy",
    description: "EBO2 and Ten Pass / Multipass treatment to oxygenate the body and modulate the immune system.",
    icon: "🌬️"
  },
  {
    title: "IV Drip Therapies",
    description: "Personalized nutrient drips, chelation, Plaquex, and growth factors tailored to your specific needs.",
    icon: "💧"
  },
  {
    title: "Women's Health",
    description: "Bioidentical hormone replacement, fertility, menopause support, and comprehensive women's care.",
    icon: "🌸"
  },
  {
    title: "Men's Health",
    description: "Testosterone replacement, urology, and longevity consultations for optimal male vitality.",
    icon: "⚕️"
  },
  {
    title: "Pediatrics",
    description: "Holistic services for children, well-child exams, and gentle treatment of common childhood illnesses.",
    icon: "👶"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Integrative <span className="italic text-primary">Services</span></h2>
            <p className="text-muted-foreground text-lg">
              We combine modern medical science with time-tested holistic modalities to provide comprehensive care.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10 h-full flex flex-col">
                <div className="text-4xl mb-6 bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-wider hover:underline mt-auto">
                  Learn More
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-12">
          <FadeIn delay={0.4}>
            <Button size="lg" className="rounded-full px-10 bg-accent hover:bg-accent/90 text-white">
              View All Services
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
