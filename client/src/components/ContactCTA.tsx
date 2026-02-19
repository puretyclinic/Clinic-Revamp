import { FadeIn } from "@/components/layout/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import * as gtag from "@/lib/gtag";
import { useState } from "react";

interface ContactCTAProps {
  heading?: string;
  subheading?: string;
  formSource?: string;
}

export function ContactCTA({
  heading = "Ready to Start Your Healing Journey?",
  subheading = "Contact us today to schedule a consultation or learn more about our services.",
  formSource = "Page CTA",
}: ContactCTAProps) {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      source: formSource,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        gtag.trackFormSubmission(formSource);
        toast({
          title: "Message Sent!",
          description: "We've received your message and will get back to you shortly.",
        });
        form.reset();

        fetch("https://formsubmit.co/ajax/DrJonathan@puretyclinic.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            Name: `${payload.firstName} ${payload.lastName}`,
            Email: payload.email,
            Phone: payload.phone,
            Message: payload.message,
            _subject: `Purety Clinic Website - ${formSource}: ${payload.firstName} ${payload.lastName}`,
            _replyto: payload.email,
            _template: "table",
          }),
        }).catch(() => {});
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Could not send message. Please call us at (805) 500-8300.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">{heading}</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">{subheading}</p>
            <a
              href="tel:+18055008300"
              className="inline-flex items-center gap-2 mt-6 text-xl font-bold text-accent hover:text-accent/80 transition-colors"
              data-testid="link-cta-phone"
              onClick={() => gtag.trackPhoneClick(formSource)}
            >
              <Phone className="w-5 h-5" />
              (805) 500-8300
            </a>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="cta-firstName" className="text-foreground text-sm">First Name</Label>
                  <Input id="cta-firstName" name="firstName" required className="h-11 text-black" data-testid="input-cta-firstName" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="cta-lastName" className="text-foreground text-sm">Last Name</Label>
                  <Input id="cta-lastName" name="lastName" required className="h-11 text-black" data-testid="input-cta-lastName" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="cta-email" className="text-foreground text-sm">Email</Label>
                  <Input id="cta-email" name="email" type="email" required className="h-11 text-black" data-testid="input-cta-email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="cta-phone" className="text-foreground text-sm">Phone</Label>
                  <Input id="cta-phone" name="phone" type="tel" required className="h-11 text-black" data-testid="input-cta-phone" />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="cta-message" className="text-foreground text-sm">How can we help?</Label>
                <Textarea id="cta-message" name="message" required className="min-h-[100px] text-black" data-testid="input-cta-message" />
              </div>
              <Button type="submit" size="lg" disabled={sending} className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold" data-testid="button-cta-submit">
                {sending ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</> : "Send Message"}
              </Button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
