import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Approach", href: "#approach" },
    { name: "FMT Treatment", href: "#treatment" },
    { name: "Success Stories", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs md:text-sm font-medium px-4">
        Limited Availability: We can only accept <span className="font-bold underline decoration-accent decoration-2 underline-offset-2">5 new patients per week</span> due to donor screening requirements
      </div>

      <nav
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3"
            : "bg-white py-4 border-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary">
                  Purety Clinic
                </span>
                <span className="text-[0.6rem] uppercase tracking-widest text-accent font-bold">
                  California's Leading FMT Specialists
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <a href="tel:8055008300" className="text-primary font-bold text-sm flex items-center hover:text-primary/80">
                <Phone className="w-4 h-4 mr-2" />
                (805) 500-8300
              </a>
              <Button 
                className="rounded-lg bg-accent hover:bg-accent/90 text-white font-bold shadow-md"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground py-2 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-accent text-white mt-2 font-bold">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="w-full border-primary text-primary font-bold">
              <Phone className="w-4 h-4 mr-2" /> Call (805) 500-8300
            </Button>
          </div>
        )}
      </nav>
    </>
  );
}
