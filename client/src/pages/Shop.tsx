import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const products = [
  {
    name: "Supreme Magnesium Neuro Powder",
    price: "$74.99",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=800",
    category: "Supplements"
  },
  {
    name: "Purety D3K2 60 Capsules",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?auto=format&fit=crop&q=80&w=800",
    category: "Vitamins"
  },
  {
    name: "Supreme Magnesium 240 Capsules",
    price: "$54.99",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    category: "Supplements"
  },
  {
    name: "Fish Oil",
    price: "$40.00",
    image: "https://images.unsplash.com/photo-1599447332306-0b1a030018d0?auto=format&fit=crop&q=80&w=800",
    category: "Supplements"
  },
  {
    name: "2-Step Superheal® Anti-Aging System",
    price: "$238.00",
    image: "https://images.unsplash.com/photo-1556228552-523de138307f?auto=format&fit=crop&q=80&w=800",
    category: "Skincare"
  },
  {
    name: "Supreme Daily Probiotic",
    price: "$71.99",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800",
    category: "Digestion"
  },
  {
    name: "Terra Superfood",
    price: "$59.97",
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?auto=format&fit=crop&q=80&w=800",
    category: "Supplements"
  },
  {
    name: "Optimal Prenatal",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800",
    category: "Vitamins"
  },
  {
    name: "Multivitamin One",
    price: "$35.00",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=800",
    category: "Vitamins"
  },
  {
    name: "Homocysteine Nutrients",
    price: "$35.00",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    category: "Supplements"
  },
  {
    name: "Optimal Multivitamin",
    price: "$76.00",
    image: "https://images.unsplash.com/photo-1551241655-2665a929f271?auto=format&fit=crop&q=80&w=800",
    category: "Vitamins"
  },
  {
    name: "Supreme Minerals 120 Capsules",
    price: "$46.99",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800",
    category: "Minerals"
  },
  {
    name: "Clean Whey Goat Protein (5lbs)",
    price: "$199.00",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=800",
    category: "Supplements"
  },
  {
    name: "Robert's Formula 2 oz.",
    price: "$40.00",
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc416d?auto=format&fit=crop&q=80&w=800",
    category: "Herbal Formulas"
  },
  {
    name: "Urisept (Urinary Antiseptic)",
    price: "$40.00",
    image: "https://images.unsplash.com/photo-1629198774783-6b8026131c77?auto=format&fit=crop&q=80&w=800",
    category: "Herbal Formulas"
  },
  {
    name: "Bitters 2 oz.",
    price: "$40.00",
    image: "https://images.unsplash.com/photo-1615486511484-92e172cc416d?auto=format&fit=crop&q=80&w=800",
    category: "Herbal Formulas"
  },
  {
    name: "Active Advanced Serum",
    price: "$139.00",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    category: "Skincare"
  },
  {
    name: "Bacteriology Culture Stool Test",
    price: "$140.00",
    image: "https://images.unsplash.com/photo-1576091160550-2187d8001889?auto=format&fit=crop&q=80&w=800",
    category: "Medical Tests"
  },
  {
    name: "Berberine DHB",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    category: "Supplements"
  },
  {
    name: "Biocidin® Liquid",
    price: "$63.97",
    image: "https://images.unsplash.com/photo-1629198774783-6b8026131c77?auto=format&fit=crop&q=80&w=800",
    category: "Herbal Formulas"
  },
  {
    name: "Biotics Dysbiocide",
    price: "$36.60",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    category: "Herbal Formulas"
  },
  {
    name: "Biotics FC-Cidal™",
    price: "$39.60",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    category: "Herbal Formulas"
  },
  {
    name: "Biotics Pregnenolone 25",
    price: "$26.50",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    category: "Supplements"
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
              {products.map((product, index) => (
                <FadeIn key={index} delay={index * 0.05} direction="up">
                  <Link href="/shop/product">
                    <a className="group block h-full">
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
      </main>

      <Footer />
    </div>
  );
}
