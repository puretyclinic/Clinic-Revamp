import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500"
      data-testid="cookie-consent-banner"
    >
      <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-muted-foreground leading-relaxed">
          We use cookies to improve your experience on our site. By continuing to browse, you agree to our use of cookies.{" "}
          <a href="/privacy" className="text-primary underline hover:text-primary/80">
            Learn more
          </a>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={decline}
            className="text-xs"
            data-testid="button-cookie-decline"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={accept}
            className="bg-primary hover:bg-primary/90 text-white text-xs"
            data-testid="button-cookie-accept"
          >
            Accept
          </Button>
        </div>
        <button
          onClick={decline}
          className="absolute top-2 right-2 sm:static text-muted-foreground hover:text-foreground"
          aria-label="Close cookie banner"
          data-testid="button-cookie-close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
