import { FadeIn } from "@/components/layout/FadeIn";

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Your Guides</span>
            <h2 className="font-serif text-4xl md:text-5xl">Meet Our <span className="italic text-primary">Healers</span></h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Dr Dena */}
          <FadeIn direction="right" delay={0.1}>
            <div className="flex flex-col group items-center text-center">
              <div className="overflow-hidden rounded-full aspect-square w-64 md:w-80 mb-8 relative shadow-2xl border-4 border-white">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
                <img 
                  src="/images/dr-dena.jpg" 
                  alt="Dr. Dena Nakhle Birch"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="max-w-md">
                <h3 className="font-serif text-3xl mb-2 text-foreground">Dr. Dena Nakhle Birch</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6">NMD • Women's Health & Wellness</p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Dr. Dena approaches health with a heart-centered focus on nature's wisdom. 
                  She considers it an honor to walk alongside her patients, helping women and children find balance and joy in their health journey.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Dr Jonathan */}
          <FadeIn direction="left" delay={0.2}>
            <div className="flex flex-col group items-center text-center">
              <div className="overflow-hidden rounded-full aspect-square w-64 md:w-80 mb-8 relative shadow-2xl border-4 border-white">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
                <img 
                  src="/images/dr-jonathan.jpg" 
                  alt="Dr. Jonathan Birch"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="max-w-md">
                <h3 className="font-serif text-3xl mb-2 text-foreground">Dr. Jonathan Birch</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6">NMD, RMSK • Restorative Medicine</p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  With a deep respect for the body's potential, Dr. Jonathan focuses on natural pathways to restore comfort and mobility. 
                  He partners with you to unlock your highest potential for wellness and life experience.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
