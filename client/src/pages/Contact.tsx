import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import * as gtag from "@/lib/gtag";
import { useState } from "react";

export default function Contact() {
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
      source: "Contact Page",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        gtag.trackFormSubmission("Contact Page - General Inquiry");

        toast({
          title: "Message Sent!",
          description: "We've received your message and will get back to you shortly.",
        });
        form.reset();
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
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-white flex items-center justify-center">
          <div className="container px-4 text-center">
            <FadeIn>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Contact <span className="italic text-primary">Us</span></h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We are here to help you on your journey to optimal health.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8" asChild>
                  <a href="#contact-form-section" data-testid="button-send-message-contact" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form-section'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                    Send a Message
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-bold rounded-full px-8" asChild>
                  <a href="tel:+18055008300" data-testid="link-phone-contact">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="contact-form-section" className="pb-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <FadeIn direction="right">
                <div className="bg-muted/30 p-10 rounded-[2rem]">
                  <h2 className="font-serif text-3xl mb-8">Get in Touch</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Visit Us</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          2323 Oak Park Lane Suite 102<br/>
                          Santa Barbara, CA 93105
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Call Us</h3>
                        <p className="text-muted-foreground">
                          (805) 500-8300
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">Mon-Fri 9am-5pm</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          DrJonathan@puretyclinic.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Hours</h3>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li className="flex justify-between w-40"><span>Mon - Fri</span> <span>9:00 - 5:00</span></li>
                          <li className="flex justify-between w-40"><span>Saturday</span> <span>Closed</span></li>
                          <li className="flex justify-between w-40"><span>Sunday</span> <span>Closed</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Form */}
              <FadeIn direction="left">
                <div className="bg-white p-2">
                  <h2 className="font-serif text-3xl mb-2">Send a Message</h2>
                  <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="Jane" required className="bg-gray-50 border-gray-200 h-12" data-testid="input-firstName" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Doe" required className="bg-gray-50 border-gray-200 h-12" data-testid="input-lastName" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="jane@example.com" required className="bg-gray-50 border-gray-200 h-12" data-testid="input-email" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required className="bg-gray-50 border-gray-200 h-12" data-testid="input-phone" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help?</Label>
                      <Textarea id="message" name="message" placeholder="Tell us about your health goals..." required className="bg-gray-50 border-gray-200 min-h-[150px]" data-testid="input-message" />
                    </div>

                    <Button type="submit" size="lg" disabled={sending} className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg" data-testid="button-submit">
                      {sending ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</> : "Send Message"}
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-[400px] relative overflow-hidden">
           <iframe
             src="https://www.openstreetmap.org/export/embed.html?bbox=-119.7335%2C34.4370%2C-119.7235%2C34.4440&layer=mapnik&marker=34.4408%2C-119.7285"
             width="100%"
             height="100%"
             style={{ border: 0 }}
             allowFullScreen
             loading="lazy"
             title="Purety Family Medical Clinic - 2323 Oak Park Lane Suite 102, Santa Barbara, CA 93105"
           />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
