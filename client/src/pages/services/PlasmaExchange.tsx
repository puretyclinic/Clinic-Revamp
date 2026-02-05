import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Droplet, Activity, RefreshCw, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function PlasmaExchange() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <RefreshCw className="w-4 h-4" />
                <span>Therapeutic Plasma Exchange</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Renew Your <span className="italic text-accent">Blood</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                TPE is a cutting-edge apheresis therapy that removes diseased plasma containing antibodies and toxins, replacing it with fresh, healthy fluids.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
               <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-xl mb-12 flex gap-4">
                 <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0" />
                 <p className="text-sm text-yellow-800">
                   <strong>Note:</strong> TPE is a specialized procedure typically reserved for significant autoimmune conditions, neurological disorders, and advanced longevity protocols.
                 </p>
               </div>

               <h2 className="font-serif text-3xl mb-6 text-foreground">How TPE Works</h2>
               <div className="prose prose-lg text-muted-foreground leading-relaxed mb-12">
                 <p>
                   Therapeutic Plasma Exchange (TPE) is essentially an "oil change" for your blood. Using a specialized medical device, we separate your blood into its components: red blood cells, white blood cells, platelets, and plasma.
                 </p>
                 <p>
                   The plasma—which carries inflammatory markers, auto-antibodies, cholesterol, and toxins—is discarded. Your blood cells are then returned to your body alongside a replacement fluid (such as Albumin) to maintain volume.
                 </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8 mb-12">
                 <div className="bg-gray-50 p-8 rounded-2xl">
                   <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Activity className="w-5 h-5 text-primary"/> Autoimmune Conditions</h3>
                   <ul className="space-y-2 text-sm text-muted-foreground">
                     <li>• Multiple Sclerosis (MS)</li>
                     <li>• Myasthenia Gravis</li>
                     <li>• Hashimoto's Thyroiditis</li>
                     <li>• Lupus (SLE)</li>
                     <li>• Neuropathy</li>
                   </ul>
                 </div>
                 <div className="bg-gray-50 p-8 rounded-2xl">
                   <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Droplet className="w-5 h-5 text-primary"/> Longevity & Detox</h3>
                   <ul className="space-y-2 text-sm text-muted-foreground">
                     <li>• Reduces "inflammaging" markers</li>
                     <li>• Removes senescent cell secretions</li>
                     <li>• Lowers Lipoprotein(a) and cholesterol</li>
                     <li>• Clearance of environmental toxins</li>
                   </ul>
                 </div>
               </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-accent/10 text-center">
           <div className="container mx-auto px-4 max-w-2xl">
             <h2 className="font-serif text-4xl mb-6">Advanced Care for Complex Needs</h2>
             <p className="text-muted-foreground mb-8">
               TPE requires a comprehensive medical evaluation. Schedule a consultation to discuss if this therapy fits your treatment plan.
             </p>
             <Link href="/contact">
               <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg">
                 Request TPE Consultation
               </Button>
             </Link>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
