import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star } from "lucide-react";

const products = [
  {
    name: "Purety Immune Support",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    category: "Supplements"
  },
  {
    name: "Gut Restore Probiotic",
    price: "$58.00",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=800",
    category: "Digestion"
  },
  {
    name: "Organic Vitamin D3 + K2",
    price: "$32.00",
    image: "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?auto=format&fit=crop&q=80&w=800",
    category: "Vitamins"
  },
  {
    name: "Adrenal Calm Complex",
    price: "$42.00",
    image: "https://images.unsplash.com/photo-1577401239170-89794129669e?auto=format&fit=crop&q=80&w=800",
    category: "Stress Support"
  },
  {
    name: "Collagen Peptides",
    price: "$55.00",
    image: "https://images.unsplash.com/photo-1594391629853-9bc6c93433a7?auto=format&fit=crop&q=80&w=800",
    category: "Beauty & Joints"
  },
  {
    name: "Magnesium Glycinate",
    price: "$28.00",
    image: "https://images.unsplash.com/photo-1551241655-2665a929f271?auto=format&fit=crop&q=80&w=800",
    category: "Minerals"
  }
];

export default function Shop() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <FadeIn>
              <h1 className="font-serif text-5xl md:text-6xl mb-4">Purety <span className="italic text-accent">Apothecary</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Physician-grade supplements and holistic wellness products curated by our doctors.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Shop Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {["All", "Supplements", "Digestion", "Vitamins", "Stress Support"].map((filter, i) => (
                <button 
                  key={i}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <FadeIn key={index} delay={index * 0.05} direction="up">
                  <div className="group">
                    <div className="aspect-square bg-gray-50 rounded-2xl mb-6 relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="bg-white text-primary hover:bg-white/90 rounded-full font-bold">
                          Quick View
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                      {product.category}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-muted-foreground">
                        {product.price}
                      </span>
                      <Button size="sm" variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-colors">
                        <ShoppingBag className="w-4 h-4 mr-2" /> Add
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-muted/30">
           <div className="container mx-auto px-4 text-center">
              <h2 className="font-serif text-3xl mb-4">Quality You Can Trust</h2>
              <div className="flex flex-wrap justify-center gap-12 mt-12 text-muted-foreground">
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                       <CheckCircleIcon />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wider">Physician Formulated</span>
                 </div>
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                       <LeafIcon />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wider">Clean Ingredients</span>
                 </div>
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                       <BeakerIcon />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wider">Lab Tested</span>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CheckCircleIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
}

function LeafIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>;
}

function BeakerIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>;
}
