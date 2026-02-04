import { FadeIn } from "@/components/layout/FadeIn";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "I had been suffering with chronic digestive issues for over a year. After working with Dr. Birch, he determined the right treatment path for me. Within weeks I noticed significant improvement, and now I feel like myself again.",
    author: "A.A.",
    role: "Gut Health Patient",
    tag: "Significant Improvement"
  },
  {
    text: "After multiple rounds of antibiotics failed, I was desperate. Dr. Birch's personalized approach worked when nothing else did. He took the time to understand my situation and developed a treatment plan that actually worked.",
    author: "M.R.",
    role: "Digestive Health Patient",
    tag: "Relief After Failed Treatments"
  },
  {
    text: "The treatment he recommended was much easier than I expected, and the results were remarkable. Truly life-changing care.",
    author: "D.L.",
    role: "Microbiome Patient",
    tag: "Life-Changing Results"
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Real Patients. Real Results.</h2>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-medium">5.0 from 70+ reviews on Google</span>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors h-full flex flex-col">
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg leading-relaxed mb-6 italic text-white/90 flex-grow">"{review.text}"</p>
                <div>
                  <div className="font-bold font-serif text-xl">{review.author}</div>
                  <div className="text-sm text-white/60 mb-2">{review.role}</div>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
                    {review.tag}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
