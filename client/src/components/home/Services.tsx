import { FadeIn } from "@/components/layout/FadeIn";
import { Button } from "@/components/ui/button";
import { Syringe, Wind, Droplet, Flower, Activity, Baby, RefreshCw, Brain } from "lucide-react";

const services = [
  {
    title: "Holistic Medical Consultations",
    description: "Deep dive into your health history to discover and address root causes.",
    icon: Brain
  },
  {
    title: "Regenerative Injections",
    description: "PRP, Stem Cell Matrix, Prolotherapy / Prolozone for joint pain and injuries.",
    icon: Syringe
  },
  {
    title: "Ozone Therapy",
    description: "EBO2 and Ten Pass / Multipass treatment to oxygenate and modulate immunity.",
    icon: Wind
  },
  {
    title: "IV Drip Therapies",
    description: "Personalized nutrients, chelation, Plaquex, and growth factors.",
    icon: Droplet
  },
  {
    title: "Bioidentical HRT",
    description: "Natural hormone balancing for thyroid, adrenals, and sex hormones.",
    icon: Flower
  },
  {
    title: "Fecal Transplant (FMT)",
    description: "Restoring gut microbiome health for chronic digestive conditions.",
    icon: () => <span className="text-2xl leading-none">💩</span>
  },
  {
    title: "Pediatrics",
    description: "Holistic well-child exams and treatment of common illnesses.",
    icon: Baby
  },
  {
    title: "Therapeutic Plasma Exchange",
    description: "Detoxification and blood rejuvenation by removing harmful substances from the bloodstream.",
    icon: RefreshCw
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Our Modalities</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Integrative <span className="italic text-primary">Services</span></h2>
            <p className="text-muted-foreground text-lg">
              We strive to diagnose and treat in the least invasive and curative way, combining modern diagnostics with natural therapies.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.05} direction="up">
              <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 h-full flex flex-col text-center items-center">
                <div className="text-primary mb-4 bg-secondary/50 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-12">
          <FadeIn delay={0.4}>
            <Button size="lg" className="rounded-full px-10 bg-accent hover:bg-accent/90 text-white shadow-lg">
              View Comprehensive Service List
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
