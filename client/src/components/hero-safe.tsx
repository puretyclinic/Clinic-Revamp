import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/layout/FadeIn";
import { cn } from "@/lib/utils";
import { Phone, Calendar } from "lucide-react";
import { Link } from "wouter";

interface HeroSafeProps {
  badgeText?: string;
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  backgroundImageUrl?: string;
}

export function HeroSafe({
  badgeText,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundImageUrl = "/images/paper-texture.jpg" // Default fallback
}: HeroSafeProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-20 pt-32">
      {/* 1. Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      />

      {/* 2. Visibility Overlay (The Guard) */}
      <div className="ui-hero-overlay z-10" />

      {/* 3. Content Panel (The Safe Zone) */}
      <div className="container px-4 relative z-20">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center ui-surface p-8 md:p-12">
            {badgeText && (
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-primary/20">
                {badgeText}
              </span>
            )}
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 ui-text-strong leading-[1.1]">
              {headline}
            </h1>
            
            <p className="text-lg md:text-xl ui-text-muted max-w-2xl mx-auto mb-8">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={primaryCta.href}>
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full text-lg ui-btn-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  {primaryCta.label}
                </Button>
              </Link>
              
              <Link href={secondaryCta.href}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full text-lg ui-btn-secondary">
                  <Phone className="w-5 h-5 mr-2" />
                  {secondaryCta.label}
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* 4. Sticky Mobile Bar (Bottom of viewport) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50 md:hidden flex gap-3 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <Link href={secondaryCta.href}>
           <Button variant="outline" className="flex-1 ui-btn-secondary h-12">
             Call
           </Button>
        </Link>
        <Link href={primaryCta.href}>
           <Button className="flex-1 ui-btn-primary h-12">
             Book Now
           </Button>
        </Link>
      </div>
    </section>
  );
}
