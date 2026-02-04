import { FadeIn } from "@/components/layout/FadeIn";
import { Leaf, Heart, Activity } from "lucide-react";

export function Philosophy() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative p-4">
              <div className="absolute inset-0 bg-secondary/30 rounded-[3rem] rotate-3 transform"></div>
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 bg-white p-2">
                 <img 
                   src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1613153079774-2B13LPCPQFVKOY83RHZK/Front+of+Purety+Clinic+Office.jpg" 
                   alt="Purety Clinic Office" 
                   className="w-full h-full object-cover rounded-[2rem] hover:scale-105 transition-transform duration-700"
                 />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">About Us</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                About Purety Family <br/> <span className="text-primary italic">Medical Clinic</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Here in <strong>Santa Barbara</strong>, our holistic doctors Dr. Jonathan Birch and Dr. Dena Birch strive to provide the highest quality naturopathic services as well as our injection, intravenous, and homeopathic protocols for health and healing.
                </p>
                <p>
                  Our core philosophy revolves around the <strong>body’s innate ability to heal itself</strong> through proper lifestyle and nature cure. There are times when the body needs extra help.
                </p>
                <p>
                  Our chief goal is to develop a rich understanding of who you are in all aspects because we believe that your body holds the imprint to your wellness.
                </p>
              </div>

              <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-12 border-t border-gray-100 pt-8">
                <div>
                  <h4 className="font-serif text-xl font-bold text-primary mb-2">Innovative Treatments</h4>
                  <p className="text-sm text-muted-foreground">Protocols and programs for holistic healing and longevity.</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-primary mb-2">Comprehensive Care</h4>
                  <p className="text-sm text-muted-foreground">Addressing gaps in your current care plan with deep investigation.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
