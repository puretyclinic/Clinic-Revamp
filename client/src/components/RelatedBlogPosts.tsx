import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/layout/FadeIn";
import { blogPosts } from "@/data/posts";

interface RelatedBlogPostsProps {
  postIds: string[];
  heading?: string;
}

export function RelatedBlogPosts({ postIds, heading = "From the Blog" }: RelatedBlogPostsProps) {
  const posts = postIds
    .map(id => blogPosts.find(p => p.id === id))
    .filter(Boolean) as typeof blogPosts;

  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-[#f8fafb] border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeIn>
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{heading}</h2>
            <Link href="/blog" className="text-sm font-bold text-primary hover:text-accent transition-colors inline-flex items-center gap-1">
              All Articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.08}>
              <Link href={`/blog/${post.id}`} data-testid={`link-related-post-${post.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full flex flex-col">
                  {post.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">{post.category}</div>
                    <h3 className="font-serif text-base font-bold text-foreground mb-2 leading-snug flex-1">{post.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <span className="inline-flex items-center text-primary font-bold text-xs">
                      Read Article <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
