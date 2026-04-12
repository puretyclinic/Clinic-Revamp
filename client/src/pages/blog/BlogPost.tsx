import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, ArrowRight } from "lucide-react";
import { Link, useParams } from "wouter";
import { ContactCTA } from "@/components/ContactCTA";
import { blogPosts } from "@/data/posts";
import { useEffect } from "react";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    if (!post) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author,
        "jobTitle": post.authorTitle || "Medical Doctor",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "Purety Family Medical Clinic",
          "url": "https://puretyclinic.com"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Purety Family Medical Clinic",
        "logo": {
          "@type": "ImageObject",
          "url": "https://puretyclinic.com/images/logo.png"
        },
        "url": "https://puretyclinic.com"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://puretyclinic.com/blog/${post.id}`
      },
      "keywords": post.tags?.join(", ") || ""
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "blogposting-schema";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    document.title = `${post.title} | Purety Clinic`;
    return () => { document.getElementById("blogposting-schema")?.remove(); };
  }, [post]);

  if (!post || !post.content) {
    return (
      <div className="min-h-screen flex flex-col bg-background font-sans">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-primary hover:text-accent font-bold">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <FadeIn>
              <div className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
                <span className="text-accent">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-8 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4">
                {post.authorImage && (
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                  />
                )}
                <div className="text-left">
                  <div className="font-bold text-foreground">{post.author}</div>
                  {post.authorTitle && (
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{post.authorTitle}</div>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="pb-16 bg-white">
           <div className="container mx-auto px-4 max-w-5xl">
             <FadeIn delay={0.2} className="aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl">
               <img 
                 src={post.image.replace("w=800", "w=1600")} 
                 alt={post.title}
                 className="w-full h-full object-cover"
               />
             </FadeIn>
           </div>
        </section>

        <section className="pb-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn delay={0.3} className="blog-content text-lg text-foreground/90 font-sans">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </FadeIn>

            <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
               <div className="flex gap-2">
                 {post.tags?.map((tag) => (
                   <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-muted-foreground">#{tag}</span>
                 ))}
               </div>
               <Button variant="ghost" className="text-muted-foreground hover:text-primary" data-testid="button-share-post">
                 <Share2 className="w-4 h-4 mr-2" /> Share Post
               </Button>
            </div>
            
            <div className="mt-12">
               <Link href="/blog" className="inline-flex items-center font-bold text-primary hover:text-accent transition-colors" data-testid="link-back-to-blog">
                 <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Articles
               </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {(() => {
          const related = blogPosts
            .filter(p => !p.hidden && p.id !== post.id && p.content)
            .filter(p => p.tags?.some(t => post.tags?.includes(t)))
            .slice(0, 3);
          if (related.length === 0) return null;
          return (
            <section className="py-16 bg-muted/30 border-t border-gray-100">
              <div className="container mx-auto px-4 max-w-4xl">
                <FadeIn>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Related Articles</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {related.map(r => (
                      <Link key={r.id} href={`/blog/${r.id}`} data-testid={`link-related-post-${r.id}`}>
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                          <img src={r.image} alt={r.title} className="w-full h-40 object-cover" />
                          <div className="p-5 flex flex-col flex-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2">{r.category}</span>
                            <h3 className="font-serif text-base text-foreground mb-3 leading-snug flex-1">{r.title}</h3>
                            <span className="inline-flex items-center text-primary font-bold text-sm">Read Article <ArrowRight className="w-3 h-3 ml-1" /></span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </section>
          );
        })()}

        {/* PRP/Regenerative-specific CTA */}
        {post.tags?.some(t => ["PRP", "StemCells", "RegenerativeMedicine", "JointPain"].includes(t)) && (
          <section className="py-16 bg-primary/5 border-t border-primary/20">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-5 border border-primary/20">
                  Ultrasound-Guided PRP &amp; Stem Cell Therapy · Santa Barbara, CA
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Ready to Explore Regenerative Treatment?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Dr. Jonathan Birch NMD, RMSK has performed over 4,000 regenerative injections using real-time ultrasound guidance — one of the most experienced practitioners in the Santa Barbara area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/services/regenerative" data-testid="link-blog-regen-cta">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-lg px-8">
                      PRP &amp; Stem Cell Info <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-primary/30 text-primary font-bold rounded-lg" asChild>
                    <a href="tel:+18055008300">Call (805) 500-8300</a>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* FMT-specific CTA for FMT blog posts */}
        {post.tags?.some(t => ["FMT", "FecalTransplant", "CdiffTreatment", "Cdiff", "GutHealth", "StoolTransplant"].includes(t)) && (
          <section className="py-16 bg-primary/5 border-t border-primary/20">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-5 border border-primary/20">
                  California's Leading FMT Specialists Since 2014
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Ready to Talk to an FMT Specialist?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Dr. Jonathan Birch has helped over 1,000 patients with fecal microbiota transplant since 2014. Remote consultations and capsule delivery are available nationwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/fecal-transplant" data-testid="link-blog-fmt-cta">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-lg px-8">
                      Learn About FMT Treatment <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-primary/30 text-primary font-bold rounded-lg" asChild>
                    <a href="tel:+18055008300">Call (805) 500-8300</a>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        <ContactCTA heading="Have Questions About Your Health?" formSource="Blog Post" />
      </main>
      
      <Footer />
    </div>
  );
}
