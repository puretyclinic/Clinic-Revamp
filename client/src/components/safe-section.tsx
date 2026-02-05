import { cn } from "@/lib/utils";

interface SafeSectionProps {
  backgroundImageUrl?: string;
  overlayStyle?: "light" | "dark";
  children: React.ReactNode;
  className?: string;
}

export function SafeSection({
  backgroundImageUrl,
  overlayStyle = "light",
  children,
  className
}: SafeSectionProps) {
  // If no background image, render normally
  if (!backgroundImageUrl) {
    return (
      <section className={cn("py-24 bg-white", className)}>
        {children}
      </section>
    );
  }

  // If background image exists, enforce safe wrapping
  return (
    <section className={cn("relative py-24 flex items-center justify-center overflow-hidden", className)}>
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      />

      {/* Forced Overlay */}
      <div className={cn(
        "z-10",
        overlayStyle === "light" ? "ui-hero-overlay" : "ui-hero-overlay-dark"
      )} />

      {/* Content Wrapper */}
      <div className="container px-4 relative z-20">
        <div className="ui-surface p-8 md:p-12 backdrop-blur-md">
          {children}
        </div>
      </div>
    </section>
  );
}
