import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Contact", href: "/contact" },
  ];

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
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary group-hover:text-primary/80 transition-colors">
                PURETY
              </span>
              <span className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] text-accent font-bold">
                Family Medical Clinic
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors uppercase tracking-wider text-[11px]",
                  location === link.href 
                    ? "text-accent font-bold" 
                    : "text-foreground/80 hover:text-accent"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <div className="pl-4 ml-2 border-l border-gray-200">
            <Button 
              className="rounded-full bg-primary hover:bg-primary/90 text-white px-6 font-medium shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              (805) 500-8300
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-5 h-screen">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className="text-lg font-serif font-medium text-foreground py-3 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="w-full bg-primary text-white mt-4 py-6 text-lg">
            Call Us Today
          </Button>
        </div>
      )}
    </nav>
  );
}
