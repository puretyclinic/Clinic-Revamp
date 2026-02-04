import { FadeIn } from "@/components/layout/FadeIn";

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Our Team</span>
            <h2 className="font-serif text-4xl md:text-5xl">Meet Our <span className="italic text-primary">Doctors</span></h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Dr Dena */}
          <FadeIn direction="right" delay={0.1}>
            <div className="flex flex-col group">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] mb-6 relative shadow-lg">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
                <img 
                  src="/images/dr-dena.jpg" 
                  alt="Dr. Dena Nakhle Birch"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-3xl mb-1 text-foreground">Dr. Dena Nakhle Birch</h3>
                <p className="text-sm font-sans uppercase tracking-widest text-primary mb-4">NMD • Women's Health & Pediatrics</p>
                <p className="text-muted-foreground leading-relaxed">
                  Her practice focuses on the natural treatment of illness and disease, women’s health, and pediatrics. 
                  Helping patients reach their health goals is an absolute honor for her.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Dr Jonathan */}
          <FadeIn direction="left" delay={0.2}>
            <div className="flex flex-col group">
              <div className="overflow-hidden rounded-2xl aspect-[3/4] mb-6 relative shadow-lg">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
                <img 
                  src="/images/dr-jonathan.jpg" 
                  alt="Dr. Jonathan Birch"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-3xl mb-1 text-foreground">Dr. Jonathan Birch</h3>
                <p className="text-sm font-sans uppercase tracking-widest text-primary mb-4">NMD, RMSK • Regenerative Medicine</p>
                <p className="text-muted-foreground leading-relaxed">
                  Focusing on the natural treatment of pain, illness, and disease. 
                  His goal is to cultivate a partnership with his patients to help them move towards their highest potential of wellness.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
