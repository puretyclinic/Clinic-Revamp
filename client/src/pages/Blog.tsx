import React from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { blogPosts } from "@/data/posts";
import { ContactCTA } from "@/components/ContactCTA";

export default function Blog() {
  // Only show posts that are not hidden
  const visiblePosts = blogPosts.filter(post => !post.hidden);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">Health <span className="italic text-primary">Insights</span></h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Articles, news, and holistic health tips from our doctors.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8" asChild>
                  <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                    Book Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-bold rounded-full px-8" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {visiblePosts.map((post, index) => (
                <FadeIn key={post.id} delay={index * 0.1} direction="up">
                  <Link href="/blog/post" className="group cursor-pointer flex flex-col h-full block">
                      <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6 shadow-sm">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        <span className="text-primary">{post.category}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <User className="w-4 h-4 text-accent" />
                          {post.author}
                        </div>
                        <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
            
            <div className="text-center mt-20">
               <Button variant="outline" size="lg" className="rounded-full px-10 border-primary/20 text-primary hover:bg-primary/5">
                 Load More Articles
               </Button>
            </div>
          </div>
        </section>
        <ContactCTA heading="Have Questions About Your Health?" formSource="Blog Page" />
      </main>

      <Footer />
    </div>
  );
}
