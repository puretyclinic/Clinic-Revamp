import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { ContactCTA } from "@/components/ContactCTA";

const locations = {
  "santa-barbara": {
    city: "Santa Barbara",
    description: "Our flagship clinic located in the heart of Santa Barbara, serving the entire Central Coast community with comprehensive holistic care.",
    address: "2323 Oak Park Lane Suite 102, Santa Barbara, CA 93105"
  },
  "goleta": {
    city: "Goleta",
    description: "Conveniently accessible for our Goleta patients. We provide the same high standard of naturopathic and regenerative medicine just minutes away.",
    address: "Serving Goleta from our main Santa Barbara hub"
  },
  "montecito": {
    city: "Montecito",
    description: "Premier holistic medical services for Montecito residents. Experience personalized care and advanced longevity protocols.",
    address: "Serving Montecito from our main Santa Barbara hub"
  },
  "carpinteria": {
    city: "Carpinteria",
    description: "Providing Carpinteria with integrative medical solutions, from PRP injections to holistic family medicine.",
    address: "Serving Carpinteria from our main Santa Barbara hub"
  },
  "ventura": {
    city: "Ventura",
    description: "Many of our patients travel from Ventura for our specialized services like FMT and EBO2 Ozone therapy.",
    address: "Serving Ventura from our main Santa Barbara hub"
  },
  "ojai": {
    city: "Ojai",
    description: "Partnering with the health-conscious Ojai community to provide advanced medical treatments not available locally.",
    address: "Serving Ojai from our main Santa Barbara hub"
  }
};

export default function LocationPage({ params }: { params: { city: string } }) {
  const cityKey = params.city.toLowerCase();
  const location = locations[cityKey as keyof typeof locations];

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <MapPin className="w-4 h-4" />
                <span>Serving {location.city}, CA</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">Holistic Doctor <span className="italic text-accent">{location.city}</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                {location.description}
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <FadeIn>
              <h2 className="font-serif text-3xl mb-8">Why {location.city} Residents Choose Purety</h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                We know you have choices for healthcare. Patients drive from {location.city} because we offer a unique blend of modern diagnostics and natural therapeutics that isn't found elsewhere. Whether you need regenerative injections for pain, hormone balancing, or complex autoimmune support, Dr. Birch and Dr. Dena are here to help.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
                 <div className="bg-muted/30 p-8 rounded-2xl">
                   <h3 className="font-bold text-xl mb-2">Regenerative Medicine</h3>
                   <p className="text-sm text-muted-foreground">PRP, Prolotherapy, and Biologics for joint pain and injuries.</p>
                 </div>
                 <div className="bg-muted/30 p-8 rounded-2xl">
                   <h3 className="font-bold text-xl mb-2">Naturopathic Care</h3>
                   <p className="text-sm text-muted-foreground">Comprehensive primary care looking at the root cause of illness.</p>
                 </div>
              </div>

              <Link href="/contact" className="inline-flex items-center text-primary font-bold hover:underline">
                Get Directions from {location.city} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </section>
        <ContactCTA heading="Schedule Your Visit" formSource="Location Page" />
      </main>
      <Footer />
    </div>
  );
}
