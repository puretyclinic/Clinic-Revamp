import { FadeIn } from "@/components/layout/FadeIn";
import { Leaf, Heart, Activity } from "lucide-react";

export function Philosophy() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -skew-x-12 translate-x-1/2 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1613153079774-2B13LPCPQFVKOY83RHZK/Front+of+Purety+Clinic+Office.jpg" 
                   alt="Purety Clinic Office" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-gray-100">
                <p className="font-serif text-2xl italic text-accent">
                  "We strive to provide the most innovative treatments for holistic healing."
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                About Purety Family <br/> <span className="text-primary italic">Medical Clinic</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <p>
                  Here in Santa Barbara, our holistic doctors Dr. Jonathan Birch and Dr. Dena Birch strive to provide the highest quality naturopathic services as well as our injection, intravenous, and homeopathic protocols for health and healing.
                </p>
                <p>
                  Our core philosophy revolves around the body’s innate ability to heal itself through proper lifestyle and nature cure. There are times when the body needs extra help.
                </p>
                <p>
                  Our chief goal is to develop a rich understanding of who you are in all aspects because we believe that your body holds the imprint to your wellness.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wide">Nature Cure</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wide">Longevity</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wide">Integrative</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
