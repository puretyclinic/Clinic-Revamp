import { FadeIn } from "@/components/layout/FadeIn";
import { Leaf, Sun, Infinity } from "lucide-react";

export function Philosophy() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                 <img 
                   src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1613153079774-2B13LPCPQFVKOY83RHZK/Front+of+Purety+Clinic+Office.jpg" 
                   alt="Purety Clinic Sanctuary" 
                   className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                 />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-white/50">
                <p className="font-serif text-xl italic text-foreground/80 leading-relaxed">
                  "Healing is a return to balance."
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="pl-4">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                A Sanctuary for <br/> <span className="text-primary italic">Deep Healing</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <p>
                  At Purety Family Medical Clinic, Dr. Jonathan and Dr. Dena Birch have created a space where nature and science meet. We look beyond symptoms to understand the unique story of your health.
                </p>
                <p>
                  Our approach honors the body’s innate intelligence. Whether through gentle lifestyle changes, nutritional support, or advanced regenerative therapies, our goal is always to support your system's natural ability to thrive.
                </p>
                <p>
                  We believe that true wellness is not just the absence of illness, but a state of vibrant vitality and balance in mind, body, and spirit.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-dashed border-gray-200 pt-8">
                <div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Natural</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Sun className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Vitality</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-secondary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Infinity className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Holistic</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
