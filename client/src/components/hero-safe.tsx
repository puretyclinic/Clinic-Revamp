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

function scrollToForm(e: React.MouseEvent, selector: string) {
  e.preventDefault();
  const el = document.querySelector(selector);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export function HeroSafe({
  badgeText,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundImageUrl = "/images/paper-texture.jpg"
}: HeroSafeProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-20 pt-32">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      />
      <div className="ui-hero-overlay z-10" />

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
              {primaryCta.href.startsWith("#") ? (
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full text-lg ui-btn-primary" onClick={(e) => scrollToForm(e, primaryCta.href)}>
                  <Calendar className="w-5 h-5 mr-2" />
                  {primaryCta.label}
                </Button>
              ) : (
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full text-lg ui-btn-primary" asChild>
                  <a href={primaryCta.href}>
                    <Calendar className="w-5 h-5 mr-2" />
                    {primaryCta.label}
                  </a>
                </Button>
              )}
              
              {secondaryCta.href.startsWith("tel:") ? (
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full text-lg ui-btn-secondary" asChild>
                  <a href={secondaryCta.href}>
                    <Phone className="w-5 h-5 mr-2" />
                    {secondaryCta.label}
                  </a>
                </Button>
              ) : secondaryCta.href.startsWith("#") ? (
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full text-lg ui-btn-secondary" onClick={(e) => scrollToForm(e, secondaryCta.href)}>
                  <Phone className="w-5 h-5 mr-2" />
                  {secondaryCta.label}
                </Button>
              ) : (
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full text-lg ui-btn-secondary" asChild>
                  <Link href={secondaryCta.href}>
                    <Phone className="w-5 h-5 mr-2" />
                    {secondaryCta.label}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-4 pt-3 pb-0 bg-white border-t border-gray-200 z-50 md:hidden flex gap-3 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <Button variant="outline" className="flex-1 ui-btn-secondary h-12" asChild>
          <a href="tel:+18055008300">Call</a>
        </Button>
        {primaryCta.href.startsWith("#") ? (
          <Button className="flex-1 ui-btn-primary h-12" onClick={(e) => scrollToForm(e, primaryCta.href)}>
            Book Now
          </Button>
        ) : (
          <Button className="flex-1 ui-btn-primary h-12" asChild>
            <a href={primaryCta.href}>Book Now</a>
          </Button>
        )}
      </div>
    </section>
  );
}
