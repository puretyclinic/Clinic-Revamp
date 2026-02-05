import { useParams } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/data/products";
import { FadeIn } from "@/components/layout/FadeIn";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronLeft, Star, Check, Truck, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
        <Link href="/shop">
          <Button>Return to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <Link href="/shop">
            <a className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
              <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
              Back to Shop
            </a>
          </Link>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Image Gallery */}
            <FadeIn delay={0.1}>
              <div className="bg-gray-50 rounded-3xl overflow-hidden p-8 flex items-center justify-center border border-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-md object-contain mix-blend-multiply drop-shadow-xl"
                />
              </div>
            </FadeIn>

            {/* Product Info */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col h-full">
                <div className="mb-2 text-sm font-bold tracking-wider text-accent uppercase">
                  {product.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-medium text-primary">
                    {product.price}
                  </span>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-muted-foreground ml-2">(Physician Recommended)</span>
                  </div>
                </div>

                <div className="prose prose-lg text-muted-foreground mb-8">
                  <p>{product.description}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90">
                    <ShoppingBag className="w-5 h-5 mr-2" /> Add to Cart
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 py-6 border-t border-gray-100 mb-8">
                  <div className="flex items-center gap-3">
                     <ShieldCheck className="w-5 h-5 text-accent" />
                     <span className="text-sm font-medium">Physician Formulated</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <Truck className="w-5 h-5 text-accent" />
                     <span className="text-sm font-medium">Free Shipping over $120</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <Check className="w-5 h-5 text-accent" />
                     <span className="text-sm font-medium">Lab Tested Purity</span>
                  </div>
                </div>

                {/* Tabs / Details */}
                <div className="space-y-8">
                  {product.benefits && (
                    <div>
                      <h3 className="font-serif text-xl mb-4">Key Benefits</h3>
                      <ul className="space-y-3">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.ingredients && (
                    <div>
                      <h3 className="font-serif text-xl mb-4">Key Ingredients</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {product.ingredients.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                             <Check className="w-4 h-4 text-green-500" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.usage && (
                    <div className="bg-primary/5 rounded-2xl p-6">
                      <h3 className="font-serif text-lg mb-2 text-primary">Suggested Use</h3>
                      <p className="text-muted-foreground">{product.usage}</p>
                    </div>
                  )}
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
