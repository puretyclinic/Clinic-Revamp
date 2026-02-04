import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { Services } from "@/components/home/Services";
import { Doctors } from "@/components/home/Doctors";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Services />
        <Testimonials />
        <Doctors />
        
        {/* Conditions List Section - Simple Text Block */}
        <section className="py-20 bg-muted/30 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-5xl">
             <h3 className="font-serif text-3xl font-bold mb-10 text-center text-foreground">Conditions We Treat</h3>
             <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm text-muted-foreground">
               <ul className="space-y-4">
                 <li><strong className="text-primary">Women’s Health</strong> – breast exams, fertility, pre-conception, menopause, hormone imbalance.</li>
                 <li><strong className="text-primary">Men’s Health</strong> – Annual exams, longevity, testosterone replacement.</li>
                 <li><strong className="text-primary">Orthopedics</strong> – chronic joint pain, tendon tears, arthritis, tennis elbow, plantar fasciitis.</li>
                 <li><strong className="text-primary">Hormone Balance</strong> – thyroid, adrenals, sex hormones, and growth hormone.</li>
                 <li><strong className="text-primary">Pediatrics</strong> – well-child exams and treatment of common illnesses.</li>
               </ul>
               <ul className="space-y-4">
                 <li><strong className="text-primary">Diabetes</strong> – minimizing or reversion progression.</li>
                 <li><strong className="text-primary">Heart Health</strong> – testing, management, and prevention of heart disease.</li>
                 <li><strong className="text-primary">Pregnancy Services</strong> – Prenatal counseling and post-delivery recuperation.</li>
                 <li><strong className="text-primary">Geriatric</strong> – common conditions, general wellness, longevity.</li>
                 <li><strong className="text-primary">Lifestyle Counseling</strong> – stress, smoking, habit cessation.</li>
               </ul>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
