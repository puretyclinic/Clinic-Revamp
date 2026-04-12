import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as gtag from "@/lib/gtag";

const serviceLinks = [
  { name: "All Services", href: "/services" },
  { name: "Fecal Transplant (FMT)", href: "/fecal-transplant" },
  { name: "Regenerative Medicine", href: "/services/regenerative" },
  { name: "IV Therapy", href: "/services/iv-therapy" },
  { name: "Ozone Therapy", href: "/services/ozone-therapy" },
  { name: "Hormone Replacement", href: "/services/hormone-replacement" },
  { name: "Naturopathic Medicine", href: "/services/naturopathic" },
  { name: "Plasma Exchange", href: "/services/plasma-exchange" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [location] = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks: { name: string; href: string; external?: boolean }[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Doctors", href: "/doctors" },
    { name: "Blog", href: "/blog" },
    { name: "Shop", href: "https://puretyclinicshop.com", external: true },
    { name: "Contact", href: "/contact" },
  ];

  const isServicesActive = serviceLinks.some(l => location === l.href);

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3"
          : "bg-white py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
           <img 
             src="/images/logo.gif" 
             alt="Purety Family Medical Clinic" 
             className="h-12 md:h-16 w-auto object-contain"
           />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors uppercase tracking-wider text-[11px]",
                location === link.href
                  ? "text-accent font-bold"
                  : "text-foreground/80 hover:text-accent"
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              data-testid="button-services-dropdown"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors uppercase tracking-wider text-[11px]",
                isServicesActive ? "text-accent font-bold" : "text-foreground/80 hover:text-accent"
              )}
            >
              Services
              <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", isServicesOpen && "rotate-180")} />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-3 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
                  <div className="w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45 mx-auto mt-1" />
                </div>
                {serviceLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-testid={`link-service-${link.href.split("/").pop()}`}
                    onClick={() => setIsServicesOpen(false)}
                    className={cn(
                      "block px-4 py-2 text-[12px] font-medium transition-colors hover:bg-primary/5 hover:text-accent",
                      i === 0 && "border-b border-gray-100 mb-1 pb-3 text-primary font-semibold",
                      location === link.href ? "text-accent" : "text-foreground/80"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors uppercase tracking-wider text-[11px] text-foreground/80 hover:text-accent"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors uppercase tracking-wider text-[11px]",
                  location === link.href
                    ? "text-accent font-bold"
                    : "text-foreground/80 hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            )
          )}

          <div className="pl-4 ml-2 border-l border-gray-200">
            <Button 
              className="rounded-full bg-primary hover:bg-primary/90 text-white px-6 font-medium shadow-md"
              asChild
            >
              <a href="tel:+18055008300" onClick={() => gtag.trackPhoneClick("Navbar")}>
                <Phone className="w-4 h-4 mr-2" />
                (805) 500-8300
              </a>
            </Button>
          </div>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-5 h-screen overflow-y-auto">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-serif font-medium text-foreground py-3 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Services Expandable */}
          <div className="border-b border-gray-50">
            <button
              data-testid="button-mobile-services"
              className="w-full flex items-center justify-between text-lg font-serif font-medium text-foreground py-3"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Services
              <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", isMobileServicesOpen && "rotate-180")} />
            </button>
            {isMobileServicesOpen && (
              <div className="flex flex-col gap-1 pb-3 pl-3">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base text-foreground/70 py-2 border-b border-gray-50 hover:text-accent"
                    onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-serif font-medium text-foreground py-3 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-serif font-medium text-foreground py-3 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
          <Button className="w-full bg-primary text-white mt-4 py-6 text-lg" asChild>
            <a href="tel:+18055008300" onClick={() => gtag.trackPhoneClick("Navbar Mobile")}>Call Us Today</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
