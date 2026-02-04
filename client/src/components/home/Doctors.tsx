import { FadeIn } from "@/components/layout/FadeIn";
import { CheckCircle2 } from "lucide-react";

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">The Team</span>
            <h2 className="font-serif text-4xl md:text-5xl">Our <span className="italic text-primary">Doctors</span></h2>
          </FadeIn>
        </div>

        <div className="space-y-24">
          {/* Dr Dena */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="lg:order-2">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-accent/5 rounded-full transform rotate-6"></div>
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612849682752-20P4409HYPXT6ALS0FF3/Holistic+Dr.+Dena+Birch" 
                  alt="Dr. Dena Nakhle Birch"
                  className="w-full relative z-10 rounded-[2rem] shadow-xl"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left" className="lg:order-1">
              <h3 className="font-serif text-3xl md:text-4xl mb-2 text-foreground">Dr. Dena Nakhle Birch</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-6">NMD • Women's Health & Pediatrics</p>
              
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p>
                  Her practice focuses on the natural treatment of illness and disease, women’s health, and pediatrics. Her expertise is providing an individualized approach for patient-centered care.
                </p>
                <p>
                  Helping patients reach their health goals is an absolute honor for her. She thoroughly enjoys working with patients of all ages and building relationships with them.
                </p>
              </div>

              <div className="space-y-2 mb-8">
                <div className="font-serif font-bold text-foreground">Active Member Of:</div>
                <ul className="text-sm text-muted-foreground grid grid-cols-1 sm:grid-cols-2 gap-2">
                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Institute of Functional Medicine</li>
                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> American Association of Naturopathic Physicians</li>
                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Pediatric Association of Naturopathic Physicians</li>
                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> American Herbalists Guild</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Dr Jonathan */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-primary/5 rounded-full transform -rotate-3"></div>
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612850026107-T8M1DMZCFPJ8630SCU8C/Naturopathic+Dr.+Birch" 
                  alt="Dr. Jonathan Birch"
                  className="w-full relative z-10 rounded-[2rem] shadow-xl"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <h3 className="font-serif text-3xl md:text-4xl mb-2 text-foreground">Dr. Jonathan Birch</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-6">NMD, RMSK • Regenerative Medicine</p>
              
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p>
                  His practice focuses on the natural treatment of pain, illness, and disease. His goal is to cultivate a partnership with his patients in order for them to move towards their highest potential of wellness.
                </p>
                <p>
                  It is his passion to positively impact his patient’s lives by focusing on the gifts of nature to direct their own body’s innate ability to heal.
                </p>
              </div>

              <div className="space-y-2 mb-8">
                <div className="font-serif font-bold text-foreground">Active Member Of:</div>
                <ul className="text-sm text-muted-foreground grid grid-cols-1 sm:grid-cols-2 gap-2">
                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Musculoskeletal Ultrasound US</li>
                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> TOBI Orthobiologic Institute</li>
                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Biological Medicine Academy</li>
                   <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Fecal Transplant Foundation</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
