import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Droplet, Activity, RefreshCw, AlertCircle, CheckCircle2, ShieldCheck, HeartPulse } from "lucide-react";
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
                <span>Plasmapheresis</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Therapeutic Plasma <span className="italic text-accent">Exchange (TPE)</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Safety, quality, and efficacy driven detoxification and blood rejuvenation.
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
                   <strong>Note:</strong> At Purety Clinic we have fully embraced this very unique treatment due to its superb ability to provide detoxification and blood rejuvenation. You will have a team of experienced caregivers, and we go the extra mile for your comfort and treatment success throughout the process.
                 </p>
               </div>

               <h2 className="font-serif text-3xl mb-6 text-foreground">What is Therapeutic Plasma Exchange?</h2>
               <div className="prose prose-lg text-muted-foreground leading-relaxed mb-12">
                 <p>
                   Therapeutic Plasma Exchange (TPE) is an advanced, clinically proven medical procedure designed to promote better health by removing harmful substances from the bloodstream. This innovative therapy works by separating and replacing the plasma, the liquid component of blood, which may contain high levels of antibodies, toxins, proteins, or other unwanted particles that contribute to certain diseases.
                 </p>
               </div>
               
               <h2 className="font-serif text-3xl mb-6 text-foreground">How Does It Work?</h2>
               <div className="prose prose-lg text-muted-foreground leading-relaxed mb-12">
                 <p>
                   During Therapeutic Plasma Exchange (TPE), a specialized device is used to separate the blood into different components:
                 </p>
                 <ul className="grid grid-cols-2 gap-4 not-prose mb-6">
                    <li className="flex items-center gap-2"><Droplet className="w-4 h-4 text-primary"/> Plasma</li>
                    <li className="flex items-center gap-2"><Activity className="w-4 h-4 text-primary"/> Red blood cells</li>
                    <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary"/> White blood cells</li>
                    <li className="flex items-center gap-2"><HeartPulse className="w-4 h-4 text-primary"/> Platelets</li>
                 </ul>
                 <p>
                   The plasma, which may contain harmful or inflammatory substances, is discarded and replaced with a beneficial substitute, albumin. The cleansed blood components are then returned to the body, helping to reduce inflammation, manage autoimmune responses, and support the body’s ability to heal.
                 </p>
               </div>

               <div className="bg-gray-50 p-8 rounded-2xl mb-12">
                 <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><Activity className="w-5 h-5 text-primary"/> Conditions That May Benefit</h3>
                 <p className="text-muted-foreground mb-4">
                   TPE has shown promise in managing various autoimmune and neurological conditions, as well as benefitting the aging process:
                 </p>
                 <ul className="space-y-3 text-sm text-muted-foreground">
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Autoimmune disorders like <strong>Lupus</strong> and <strong>Myasthenia Gravis</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Neurological conditions, such as <strong>Multiple Sclerosis (MS)</strong> and <strong>Guillain-Barré syndrome</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Certain kidney diseases, including <strong>Goodpasture’s syndrome</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Blood disorders, such as <strong>Thrombotic Thrombocytopenic Purpura (TTP)</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span><strong>Long Covid</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Neurodegenerative conditions such as <strong>Alzheimer’s and dementia</strong></span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0"/> <span>Chronic inflammatory diseases where excess immune activity or toxins are problematic</span></li>
                 </ul>
               </div>
               
               <h2 className="font-serif text-3xl mb-6 text-foreground">Benefits of TPE</h2>
               <div className="prose prose-lg text-muted-foreground leading-relaxed mb-12">
                 <p>TPE provides several health benefits by removing substances that may contribute to disease:</p>
                 <ul className="not-prose space-y-2 mt-4">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Reduced inflammation and discomfort</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Enhanced immune system regulation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Improved symptom management</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary"/> Increased energy and reduced fatigue</li>
                 </ul>
               </div>

               <h2 className="font-serif text-3xl mb-6 text-foreground">What to Expect</h2>
               <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm mb-12">
                 <ol className="relative border-l border-gray-200 ml-3 space-y-8">
                   <li className="ml-6">
                     <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white text-white text-xs font-bold">1</span>
                     <h3 className="font-bold text-lg mb-1">Preparation</h3>
                     <p className="text-sm text-muted-foreground">You’ll be made comfortable, and our team will prepare you for the procedure, explaining each step along the way.</p>
                   </li>
                   <li className="ml-6">
                     <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white text-white text-xs font-bold">2</span>
                     <h3 className="font-bold text-lg mb-1">Access</h3>
                     <p className="text-sm text-muted-foreground">One vein is accessed on each arm. The veins can be numbed, and we have ultrasound capability in order to ensure safe and easy access.</p>
                   </li>
                   <li className="ml-6">
                     <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white text-white text-xs font-bold">3</span>
                     <h3 className="font-bold text-lg mb-1">Procedure</h3>
                     <p className="text-sm text-muted-foreground">Blood is drawn through a needle, and our advanced equipment separates your plasma from other blood components.</p>
                   </li>
                   <li className="ml-6">
                     <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white text-white text-xs font-bold">4</span>
                     <h3 className="font-bold text-lg mb-1">Plasma Exchange</h3>
                     <p className="text-sm text-muted-foreground">The unhealthy plasma is removed, and albumin is added before the blood components are returned to your body.</p>
                   </li>
                   <li className="ml-6">
                     <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white text-white text-xs font-bold">5</span>
                     <h3 className="font-bold text-lg mb-1">Aftercare</h3>
                     <p className="text-sm text-muted-foreground">Following the procedure, our team monitors you for a short time to ensure you’re ready to go about your day.</p>
                   </li>
                 </ol>
               </div>
               
               <div className="bg-muted/30 p-8 rounded-2xl mb-12">
                  <h3 className="font-serif text-2xl mb-6">Common Questions</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2">How long does the TPE procedure take?</h4>
                      <p className="text-sm text-muted-foreground">Most procedures last between 1 to 2.5 hours, depending on your constitution and specific treatment needs.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Is TPE painful?</h4>
                      <p className="text-sm text-muted-foreground">The procedure is generally well-tolerated, and our team takes steps to make it as comfortable as possible. Veins are numbed prior to access, and ultrasound is used if necessary for smooth vein access.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">How many treatments will I need?</h4>
                      <p className="text-sm text-muted-foreground">The number of treatments varies based on your health condition and doctor’s recommendation. We generally start with 1 treatment per month for 5 months.</p>
                    </div>
                  </div>
               </div>

            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-accent/10 text-center">
           <div className="container mx-auto px-4 max-w-2xl">
             <h2 className="font-serif text-4xl mb-6">Advanced Care for Complex Needs</h2>
             <p className="text-muted-foreground mb-8">
               We will work closely with you to assess if TPE is a suitable treatment option based on your health needs.
             </p>
             <Link href="/contact">
               <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white shadow-lg">
                 Book TPE Consultation
               </Button>
             </Link>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
