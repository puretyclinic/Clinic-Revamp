import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Check, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <section className="pt-32 pb-24 bg-white">
          <div className="container mx-auto px-4">
            
            <div className="mb-8">
               <Link href="/shop" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                 <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
               </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Product Image */}
              <FadeIn className="bg-gray-50 rounded-[2.5rem] p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
                 <img 
                   src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000" 
                   alt="Purety Immune Support"
                   className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                 />
              </FadeIn>

              {/* Product Details */}
              <FadeIn direction="left">
                <div className="flex items-center gap-2 mb-4">
                   <div className="flex text-accent">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                   </div>
                   <span className="text-sm text-muted-foreground">(24 Reviews)</span>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Purety Immune Support</h1>
                <p className="text-2xl font-medium text-primary mb-6">$45.00</p>
                
                <div className="prose text-muted-foreground mb-8">
                  <p>
                    A comprehensive daily immune formula featuring physician-grade Vitamin C, Zinc, Elderberry, and Echinacea. Formulated by Dr. Birch to support robust immune defense during cold and flu season.
                  </p>
                  <ul className="not-prose space-y-2 mt-4">
                    <li className="flex items-center gap-2 text-sm text-foreground"><Check className="w-4 h-4 text-primary" /> Physician Formulated</li>
                    <li className="flex items-center gap-2 text-sm text-foreground"><Check className="w-4 h-4 text-primary" /> Gluten Free & Non-GMO</li>
                    <li className="flex items-center gap-2 text-sm text-foreground"><Check className="w-4 h-4 text-primary" /> 60 Capsules (30 Day Supply)</li>
                  </ul>
                </div>

                {/* Add to Cart Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10 border-t border-gray-100 pt-8">
                   <div className="flex items-center border border-gray-200 rounded-full h-12 w-32 px-4">
                      <button 
                        className="w-8 h-full flex items-center justify-center text-muted-foreground hover:text-foreground"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >-</button>
                      <input 
                        type="text" 
                        value={quantity} 
                        readOnly 
                        className="w-full text-center bg-transparent border-none focus:ring-0 font-bold"
                      />
                      <button 
                        className="w-8 h-full flex items-center justify-center text-muted-foreground hover:text-foreground"
                        onClick={() => setQuantity(quantity + 1)}
                      >+</button>
                   </div>
                   <Button size="lg" className="h-12 flex-grow rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg">
                      <ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart - ${(45 * quantity).toFixed(2)}
                   </Button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/20">
                      <Truck className="w-6 h-6 text-primary" />
                      <div className="text-xs">
                        <span className="block font-bold text-foreground">Free Shipping</span>
                        <span className="text-muted-foreground">On orders over $100</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/20">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                      <div className="text-xs">
                        <span className="block font-bold text-foreground">Satisfaction Guarantee</span>
                        <span className="text-muted-foreground">30-day return policy</span>
                      </div>
                   </div>
                </div>

              </FadeIn>
            </div>
            
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
