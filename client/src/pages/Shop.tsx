import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { products } from "@/data/products";
import { ContactCTA } from "@/components/ContactCTA";

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
              {["All", "Supplements", "Vitamins", "Herbal Formulas", "Skincare", "Digestion", "Medical Tests"].map((filter, i) => (
                <button 
                  key={i}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.map((product) => (
                <FadeIn key={product.id} delay={0.1} direction="up">
                  <Link href={`/shop/product/${product.id}`}>
                    <a className="group block h-full">
                      <div className="aspect-square bg-gray-50 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-6">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
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
                    </a>
                  </Link>
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
                       <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wider">Physician Formulated</span>
                 </div>
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                       <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wider">Clean Ingredients</span>
                 </div>
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                       <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-wider">Lab Tested</span>
                 </div>
              </div>
           </div>
        </section>
        <ContactCTA heading="Need Help Choosing the Right Supplement?" subheading="Our doctors can help recommend the best products for your needs." formSource="Shop Page" />
      </main>

      <Footer />
    </div>
  );
}
