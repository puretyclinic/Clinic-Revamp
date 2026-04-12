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
    title: "Fecal Transplant (FMT)",
    description: "1,000+ procedures performed. Restoring gut microbiome health for UC, Crohn's, IBS, C. diff, and chronic digestive conditions.",
    icon: PoopIcon,
    link: "/fecal-transplant",
    badge: "National Specialty"
  },
  {
    title: "Therapeutic Plasma Exchange",
    description: "Advanced blood purification for autoimmune disorders, Long COVID, chronic Lyme, neurological conditions, and mold illness.",
    icon: RefreshCw,
    link: "/services/plasma-exchange",
    badge: null
  },
  {
    title: "PRP & Regenerative Injections",
    description: "4,000+ injections. Ultrasound-guided PRP, stem cell matrix, and prolotherapy for joint pain, tendon injuries, and arthritis.",
    icon: Syringe,
    link: "/services/regenerative",
    badge: "RMSK Certified"
  },
  {
    title: "Holistic Medical Care",
    description: "Root-cause diagnosis and treatment. Functional lab work, nutrition, and natural therapies for the whole family.",
    icon: Brain,
    link: "/services/naturopathic",
    badge: null
  },
  {
    title: "Ozone Therapy · EBO2",
    description: "2,500+ treatments. EBO2 / EBOO / Multipass OHT for chronic infections, Long COVID, mold toxicity, and immune modulation.",
    icon: Wind,
    link: "/services/ozone-therapy",
    badge: null
  },
  {
    title: "Women's Health & Pediatrics",
    description: "Dr. Dena Birch NMD specializes in hormone balance, fertility, menopause, prenatal care, and holistic pediatric medicine.",
    icon: Baby,
    link: "/services/naturopathic",
    badge: "Dr. Dena Birch"
  },
  {
    title: "Bioidentical HRT",
    description: "Natural hormone balancing for thyroid, adrenals, sex hormones, menopause, and testosterone — for men and women.",
    icon: Flower,
    link: "/services/hormone-replacement",
    badge: null
  },
  {
    title: "IV Drip Therapies",
    description: "Personalized IV nutrients, chelation, Plaquex, Myers' Cocktail, and high-dose Vitamin C.",
    icon: Droplet,
    link: "/services/iv-therapy",
    badge: null
  },
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
              <Link href={service.link} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 h-full flex flex-col text-center items-center cursor-pointer relative">
                {service.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wide bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20">
                    {service.badge}
                  </span>
                )}
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
