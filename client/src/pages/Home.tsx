import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { TreatmentPath } from "@/components/home/TreatmentPath";
import { Doctors } from "@/components/home/Doctors";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* The Antibiotic Trap Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Tired of the Endless Antibiotic Cycle?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              You've tried everything. Multiple rounds of antibiotics. Strict diets. Nothing works for long. There's a better way.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="text-3xl mb-4">💊</div>
                <h3 className="font-serif font-bold text-lg mb-2 text-red-900">The Antibiotic Trap</h3>
                <p className="text-sm text-red-700/80">Round after round of antibiotics... They kill the bad bacteria but also destroy your healthy gut flora.</p>
              </div>
              
              <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="font-serif font-bold text-lg mb-2 text-orange-900">Recurring Infections</h3>
                <p className="text-sm text-orange-700/80">25-35% of C. diff patients experience recurrence. After 2+ recurrences, your chances jump to 60%.</p>
              </div>
              
              <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                <div className="text-3xl mb-4">✔</div>
                <h3 className="font-serif font-bold text-lg mb-2 text-green-900">The FMT Solution</h3>
                <p className="text-sm text-green-700/80">FMT restores your complete gut microbiome with healthy donor bacteria. 90%+ success rate.</p>
              </div>
            </div>
          </div>
        </section>

        <TreatmentPath />
        <Doctors />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
