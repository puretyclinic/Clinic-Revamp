import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShieldCheck, CheckCircle2, ArrowRight, Cloud, Mail } from "lucide-react"; // Microclimatology as abstract for microbiome
import { useToast } from "@/hooks/use-toast";

export default function FMT() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Dr. Jonathan will review your message shortly. (Sent to drjonathan@puretyclinic.com)",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <span className="text-lg leading-none">💩</span>
                <span>California's Leading FMT Specialists</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Fecal Microbiota <span className="italic text-accent">Transplant</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Restore your gut health with our proven "Super Donor" FMT protocol. 90%+ success rate for C. diff and chronic digestive conditions.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* The Antibiotic Trap - Problem/Solution */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
             <div className="grid md:grid-cols-3 gap-8 text-left mb-20">
              <FadeIn delay={0.1} className="p-8 bg-red-50 rounded-2xl border border-red-100">
                <div className="text-4xl mb-4">💊</div>
                <h3 className="font-serif font-bold text-xl mb-2 text-red-900">The Antibiotic Trap</h3>
                <p className="text-red-700/80 leading-relaxed">Round after round of antibiotics... They kill the bad bacteria but also destroy your healthy gut flora, leaving you vulnerable.</p>
              </FadeIn>
              
              <FadeIn delay={0.2} className="p-8 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="font-serif font-bold text-xl mb-2 text-orange-900">Recurring Infections</h3>
                <p className="text-orange-700/80 leading-relaxed">25-35% of C. diff patients experience recurrence. After 2+ recurrences, your chances of another infection jump to 60%.</p>
              </FadeIn>
              
              <FadeIn delay={0.3} className="p-8 bg-green-50 rounded-2xl border border-green-100">
                <div className="text-4xl mb-4">✔</div>
                <h3 className="font-serif font-bold text-xl mb-2 text-green-900">The FMT Solution</h3>
                <p className="text-green-700/80 leading-relaxed">FMT restores your complete gut microbiome with healthy donor bacteria. It is the gold standard for restoring gut ecology.</p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">Our "Super Donor" Protocol</h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed">
                  <p>
                    The success of FMT relies entirely on the quality of the donor. At Purety Clinic, we use "Super Donors" who undergo screening far stricter than FDA requirements.
                  </p>
                  <p>
                    Our donors are young, healthy athletes with robust microbiomes and no history of antibiotic use, autoimmunity, or chronic illness.
                  </p>
                  <ul className="space-y-3 mt-6 not-prose">
                    <li className="flex items-center gap-3 font-medium text-foreground"><CheckCircle2 className="w-5 h-5 text-primary" /> Extensive Blood & Stool Testing</li>
                    <li className="flex items-center gap-3 font-medium text-foreground"><CheckCircle2 className="w-5 h-5 text-primary" /> Genetic Screening</li>
                    <li className="flex items-center gap-3 font-medium text-foreground"><CheckCircle2 className="w-5 h-5 text-primary" /> Lifestyle & Diet Analysis</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn direction="left">
                 <div className="bg-muted/30 p-10 rounded-[2.5rem] relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                   <h3 className="font-serif text-2xl mb-6 relative z-10">Treatment Options</h3>
                   <div className="space-y-6 relative z-10">
                     <div className="bg-white p-6 rounded-xl shadow-sm">
                       <h4 className="font-bold text-primary mb-2">FMT Capsules</h4>
                       <p className="text-sm text-muted-foreground">Convenient oral treatment. Triple-encapsulated for safety. Ideal for C. diff.</p>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm">
                       <h4 className="font-bold text-primary mb-2">Retention Enema</h4>
                       <p className="text-sm text-muted-foreground">Direct delivery to the lower intestine. High success rate and easy to retain.</p>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm">
                       <h4 className="font-bold text-primary mb-2">Colonoscopy FMT</h4>
                       <p className="text-sm text-muted-foreground">Full intestinal coverage for complex cases (Colitis, Crohn's).</p>
                     </div>
                   </div>
                 </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-accent/10 relative overflow-hidden" id="fmt-consult">
           <div className="container mx-auto px-4 max-w-4xl relative z-10">
             <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden">
               <div className="grid md:grid-cols-2">
                 <div className="p-10 bg-primary text-white flex flex-col justify-center">
                   <h2 className="font-serif text-3xl md:text-4xl mb-6">Start Your Recovery</h2>
                   <p className="text-white/80 mb-8 leading-relaxed">
                     Directly contact Dr. Jonathan Birch to discuss your case. We treat C. diff and other complex microbiome conditions.
                   </p>
                   <div className="flex items-center gap-3 mb-2">
                     <Mail className="w-5 h-5 text-accent" />
                     <span className="font-medium">drjonathan@puretyclinic.com</span>
                   </div>
                   <p className="text-xs text-white/50 mt-8">
                     HIPAA Compliant & Confidential
                   </p>
                 </div>
                 
                 <div className="p-10">
                   <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                       <Label htmlFor="name">Full Name</Label>
                       <Input id="name" placeholder="John Doe" required className="bg-gray-50 border-gray-200" />
                     </div>
                     <div>
                       <Label htmlFor="email">Email Address</Label>
                       <Input id="email" type="email" placeholder="john@example.com" required className="bg-gray-50 border-gray-200" />
                     </div>
                     <div>
                       <Label htmlFor="phone">Phone Number</Label>
                       <Input id="phone" type="tel" placeholder="(555) 123-4567" required className="bg-gray-50 border-gray-200" />
                     </div>
                     <div>
                       <Label htmlFor="condition">Primary Condition</Label>
                       <Input id="condition" placeholder="e.g. C. diff, IBS, etc." className="bg-gray-50 border-gray-200" />
                     </div>
                     <div>
                       <Label htmlFor="message">Message for Dr. Jonathan</Label>
                       <Textarea id="message" placeholder="Tell us a bit about your history..." className="bg-gray-50 border-gray-200 min-h-[120px]" />
                     </div>
                     <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-bold">
                       Send Message
                     </Button>
                   </form>
                 </div>
               </div>
             </div>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
