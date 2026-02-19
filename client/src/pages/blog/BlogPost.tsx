import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "wouter";
import { ContactCTA } from "@/components/ContactCTA";
import { blogPosts } from "@/data/posts";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

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
            <FadeIn delay={0.3} className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:font-bold prose-a:text-primary hover:prose-a:text-accent">
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

        <ContactCTA heading="Have Questions About Your Health?" formSource="Blog Post" />
      </main>
      
      <Footer />
    </div>
  );
}
