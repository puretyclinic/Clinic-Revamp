import { FadeIn } from "@/components/layout/FadeIn";
import { Pill, Syringe, FileSearch } from "lucide-react";

const treatments = [
  {
    title: "FMT Capsules",
    subtitle: "Convenient At-Home Treatment",
    description: "Triple-encapsulated for safety and comfort. No sedation required. Ideal for most C. diff patients.",
    icon: Pill,
    features: ["14 day treatment course", "No hospital stay", "Non-invasive"]
  },
  {
    title: "Retention Enema",
    subtitle: "Direct & Effective",
    description: "Traditional route with excellent success rates. Direct delivery to the lower intestine.",
    icon: Syringe, // Representing the delivery method abstractly
    features: ["High success rate", "Easy to retain", "Outpatient procedure"]
  },
  {
    title: "Colonoscopy FMT",
    subtitle: "Full Coverage",
    description: "Complete large intestine delivery for complex cases. Performed in Southern CA.",
    icon: FileSearch, // Abstract for procedure
    features: ["Single treatment often sufficient", "Full intestinal coverage", "Best for severe cases"]
  }
];

export function TreatmentPath() {
  return (
    <section id="treatment" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Choose Your <span className="text-primary italic">Treatment Path</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer non-invasive options tailored to your specific needs and comfort level. 
              Dr. Birch will help you decide which method is best for your condition.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 bg-secondary/50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-4">{item.subtitle}</p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                  {item.description}
                </p>
                
                <ul className="space-y-3 mt-auto">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
