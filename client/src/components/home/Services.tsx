import { FadeIn } from "@/components/layout/FadeIn";
import { Button } from "@/components/ui/button";
import { Syringe, Wind, Droplet, Flower, Activity, Baby, RefreshCw, Brain } from "lucide-react";
import { Link } from "wouter";

function PoopIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a3 3 0 0 0-2.55 4.57A4 4 0 0 0 8 10a4 4 0 0 0-3.95 4.5C3.44 15.07 3 15.98 3 17a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3c0-1.02-.44-1.93-1.05-2.5A4 4 0 0 0 16 10a4 4 0 0 0-1.45-3.07A3 3 0 0 0 12 2z" />
    </svg>
  );
}

const services = [
  {
    title: "Holistic Medical Consultations",
    description: "Deep dive into your health history to discover and address root causes.",
    icon: Brain,
    link: "/services/naturopathic"
  },
  {
    title: "Regenerative Injections",
    description: "PRP, Stem Cell Matrix, Prolotherapy / Prolozone for joint pain and injuries.",
    icon: Syringe,
    link: "/services/regenerative"
  },
  {
    title: "Ozone Therapy",
    description: "EBO2 and Ten Pass / Multipass treatment to oxygenate and modulate immunity.",
    icon: Wind,
    link: "/services/ozone-therapy"
  },
  {
    title: "IV Drip Therapies",
    description: "Personalized nutrients, chelation, Plaquex, and growth factors.",
    icon: Droplet,
    link: "/services/iv-therapy"
  },
  {
    title: "Bioidentical HRT",
    description: "Natural hormone balancing for thyroid, adrenals, and sex hormones.",
    icon: Flower,
    link: "/services/hormone-replacement"
  },
  {
    title: "Fecal Transplant (FMT)",
    description: "Restoring gut microbiome health for chronic digestive conditions.",
    icon: PoopIcon,
    link: "/services/fmt"
  },
  {
    title: "Pediatrics",
    description: "Holistic well-child exams and treatment of common illnesses.",
    icon: Baby,
    link: "/services/naturopathic"
  },
  {
    title: "Therapeutic Plasma Exchange",
    description: "Detoxification and blood rejuvenation by removing harmful substances from the bloodstream.",
    icon: RefreshCw,
    link: "/services/plasma-exchange"
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
              <Link href={service.link} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 h-full flex flex-col text-center items-center cursor-pointer">
                  <div className="text-primary mb-4 bg-secondary/50 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-12">
          <FadeIn delay={0.4}>
            <Button size="lg" className="rounded-full px-10 bg-accent hover:bg-accent/90 text-white shadow-lg" asChild>
              <Link href="/services">
                View Comprehensive Service List
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
