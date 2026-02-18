import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Syringe, Wind, Droplet, Flower, Activity, Baby, HeartPulse, Brain, Bone, Leaf, Pill, ArrowRight, RefreshCw } from "lucide-react";
import { Link } from "wouter";
import { ContactCTA } from "@/components/ContactCTA";

const services = [
  {
    category: "Consultations",
    link: "/services/naturopathic",
    items: [
      {
        title: "Holistic Medical Consultations",
        description: "Comprehensive health history review and root cause analysis.",
        icon: Brain
      },
      {
        title: "Pediatric Wellness",
        description: "Well-child exams and natural treatment for common childhood ailments.",
        icon: Baby
      },
      {
        title: "Holistic Cancer Support",
        description: "Integrative oncology support to strengthen the body during treatment.",
        icon: Leaf
      }
    ]
  },
  {
    category: "Regenerative & Injection Therapies",
    link: "/services/regenerative",
    items: [
      {
        title: "PRP & Stem Cell Matrix",
        description: "Advanced biologics for joint repair and regeneration.",
        icon: Syringe
      },
      {
        title: "Prolotherapy & Prolozone",
        description: "Non-surgical ligament and tendon reconstruction.",
        icon: Bone
      },
      {
        title: "Neural Therapy",
        description: "Treatment for chronic pain and illness using local anesthetics.",
        icon: Activity
      }
    ]
  },
  {
    category: "Specialized Treatments",
    link: "/services/iv-therapy",
    items: [
      {
        title: "Ozone Therapy",
        description: "EBO2, Ten Pass, and Multipass treatments for immune modulation.",
        icon: Wind
      },
      {
        title: "IV Nutrient Therapy",
        description: "High-dose Vitamin C, Glutathione, Chelation, and Plaquex.",
        icon: Droplet
      },
      {
        title: "Fecal Transplant (FMT)",
        description: "Microbiome restoration for gut health and C. diff.",
        icon: () => <span className="text-2xl leading-none">💩</span>,
        customLink: "/services/fmt"
      },
      {
        title: "Bioidentical HRT",
        description: "Natural hormone replacement for Men and Women.",
        icon: Flower
      },
      {
        title: "Therapeutic Plasma Exchange",
        description: "Advanced apheresis therapy for detoxification and blood rejuvenation.",
        icon: RefreshCw,
        customLink: "/services/plasma-exchange"
      }
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">Integrative <span className="italic text-accent">Services</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Combining the best of modern medical science with time-tested holistic modalities.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services List */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {services.map((section, idx) => (
              <div key={idx} className="mb-20 last:mb-0">
                <FadeIn direction="up" className="flex items-end justify-between border-b border-gray-100 pb-4 mb-10">
                  <h2 className="font-serif text-3xl text-foreground">
                    {section.category}
                  </h2>
                  <Link href={section.link} className="text-sm font-bold text-primary uppercase tracking-wider flex items-center hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </FadeIn>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, i) => (
                    <FadeIn key={i} delay={i * 0.1} direction="up">
                      <Link href={item.customLink || section.link} className="group p-8 rounded-2xl bg-muted/20 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10 h-full flex flex-col block">
                          <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="py-24 bg-accent/10">
           <div className="container mx-auto px-4 text-center">
             <FadeIn>
               <h2 className="font-serif text-3xl mb-6">Not sure which therapy is right for you?</h2>
               <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                 Our doctors will work with you to create a personalized treatment plan based on your unique biology and health goals.
               </p>
               <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg">
                 Schedule a Consultation
               </Button>
             </FadeIn>
           </div>
        </section>
        <ContactCTA heading="Which Service Is Right for You?" subheading="Contact us to discuss which treatments may benefit you." formSource="Services Page" />
      </main>
      
      <Footer />
    </div>
  );
}
