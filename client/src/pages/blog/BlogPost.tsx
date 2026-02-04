import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Clock } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        {/* Post Header */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <FadeIn>
              <div className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
                <span className="text-accent">Naturopathy</span>
                <span>•</span>
                <span>October 12, 2023</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-8 leading-tight">
                The Healing Power of Nature: Understanding Naturopathy
              </h1>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612849682752-20P4409HYPXT6ALS0FF3/Holistic+Dr.+Dena+Birch" 
                  alt="Dr. Dena"
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <div className="text-left">
                  <div className="font-bold text-foreground">Dr. Dena Birch</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Medical Director</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-16 bg-white">
           <div className="container mx-auto px-4 max-w-5xl">
             <FadeIn delay={0.2} className="aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1544367563-12123d89a5cd?auto=format&fit=crop&q=80&w=1600" 
                 alt="Nature Healing"
                 className="w-full h-full object-cover"
               />
             </FadeIn>
           </div>
        </section>

        {/* Content */}
        <section className="pb-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn delay={0.3} className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:font-bold prose-a:text-primary hover:prose-a:text-accent">
              <p className="lead text-xl text-muted-foreground mb-8">
                Naturopathic medicine is a distinct primary health care profession, emphasizing prevention, treatment, and optimal health through the use of therapeutic methods and substances that encourage individuals’ inherent self-healing process.
              </p>
              
              <h2>The Six Principles of Naturopathy</h2>
              <p>
                The practice of naturopathic medicine emerges from six underlying principles of healing. These principles are based on the objective observation of the nature of health and disease, and are continually reexamined in light of scientific analysis.
              </p>
              
              <ul>
                <li><strong>The Healing Power of Nature (Vis Medicatrix Naturae):</strong> Naturopathic medicine recognizes an inherent self-healing process in people that is ordered and intelligent.</li>
                <li><strong>Identify and Treat the Causes (Tolle Causam):</strong> The naturopathic physician seeks to identify and remove the underlying causes of illness rather than to merely eliminate or suppress symptoms.</li>
                <li><strong>First Do No Harm (Primum Non Nocere):</strong> Naturopathic physicians follow three guidelines to avoid harming the patient.</li>
                <li><strong>Doctor as Teacher (Docere):</strong> Naturopathic physicians educate their patients and encourage self-responsibility for health.</li>
              </ul>
              
              <blockquote>
                "The doctor of the future will give no medicine, but will interest his patient in the care of the human frame, in diet and in the cause and prevention of disease."
              </blockquote>

              <h2>Treating the Whole Person</h2>
              <p>
                Naturopathic physicians treat each patient by taking into account individual physical, mental, emotional, genetic, environmental, social, and other factors. Since total health also includes spiritual health, naturopathic physicians encourage individuals to pursue their personal spiritual development.
              </p>
              
              <p>
                This approach stands in contrast to the current medical model which often treats specific symptoms or organ systems in isolation. By looking at the whole picture, we can often find connections that might otherwise be missed.
              </p>
            </FadeIn>

            {/* Share / Tags */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
               <div className="flex gap-2">
                 <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-muted-foreground">#Holistic</span>
                 <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-muted-foreground">#NaturalMedicine</span>
               </div>
               <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                 <Share2 className="w-4 h-4 mr-2" /> Share Post
               </Button>
            </div>
            
            {/* Back to Blog */}
            <div className="mt-12">
               <Link href="/blog">
                 <a className="inline-flex items-center font-bold text-primary hover:text-accent transition-colors">
                   <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Articles
                 </a>
               </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
