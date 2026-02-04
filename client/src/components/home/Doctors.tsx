import { FadeIn } from "@/components/layout/FadeIn";
import { CheckCircle2 } from "lucide-react";

export function Doctors() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative border-8 border-white">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1586254533732-DIBCSH2O3LNIQGHE1231/purety-clinic_Home_screen-3.jpg" 
                  alt="Dr. Jonathan Birch" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                 <div className="text-3xl font-serif font-bold text-primary mb-1">10+</div>
                 <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Years of FMT Leadership</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Medical Director</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Meet Dr. Jonathan Birch</h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Since 2014, Dr. Birch has been one of the nation's leading FMT specialists, helping over 1,000 patients achieve lasting relief through personalized FMT protocols.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                His approach combines rigorous safety protocols with compassionate, personalized care. Each treatment protocol is tailored to your specific condition and health history.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "1,000+ Successful Procedures",
                  "Super Donor Protocol",
                  "10+ Years FMT Experience",
                  "Remote Consultations Available"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#consultation" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold transition-colors">
                Schedule Your Consultation
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
