import { useEffect } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";
import { Link } from "wouter";
import { FadeIn } from "@/components/layout/FadeIn";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Clock, Mail } from "lucide-react";
import * as gtag from "@/lib/gtag";

export default function ThankYou() {
  usePageSEO({
    title: "Thank You — Purety Family Medical Clinic",
    description: "Thank you for contacting Purety Clinic. We will be in touch soon.",
    canonicalPath: "/thank-you",
  });
  useEffect(() => {
    gtag.pageview("/thank-you");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">

      {/* Minimal header — no nav links to wander off */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 flex items-center justify-between">
        <Link href="/">
          <img src="/images/logo.gif" alt="Purety Family Medical Clinic" className="h-12 w-auto object-contain" />
        </Link>
        <a
          href="tel:+18055008300"
          onClick={() => gtag.trackPhoneClick("Thank You Page")}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-primary/90 transition-colors"
        >
          <Phone className="w-4 h-4" />
          (805) 500-8300
        </a>
      </header>

      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full text-center">
          <FadeIn>
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request Received
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Dr. Birch's team will review your case and reach out within <strong>1 business day</strong>. If you have an urgent need, please call us directly.
            </p>

            {/* What happens next */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-10 text-left">
              <h2 className="font-serif text-xl font-bold text-foreground mb-6">What happens next</h2>
              <div className="space-y-5">
                {[
                  { icon: Clock, step: "1", title: "Case Review", desc: "Dr. Birch or a member of his team reviews your information and medical history." },
                  { icon: Phone, step: "2", title: "We Contact You", desc: "You'll receive a call or email within 1 business day to schedule your consultation." },
                  { icon: CheckCircle2, step: "3", title: "Consultation", desc: "Your initial consultation — remote or in-person — where Dr. Birch discusses your options in detail." },
                ].map(({ icon: Icon, step, title, desc }) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                      {step}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{title}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8" asChild>
                <a href="tel:+18055008300" onClick={() => gtag.trackPhoneClick("Thank You CTA")}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call (805) 500-8300
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary font-bold rounded-full px-8" asChild>
                <a href="mailto:DrJonathan@puretyclinic.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              While you wait, learn more about{" "}
              <Link href="/fecal-transplant" className="text-primary font-semibold hover:underline">
                FMT treatment
              </Link>{" "}
              or read{" "}
              <Link href="/testimonials" className="text-primary font-semibold hover:underline">
                patient stories
              </Link>.
            </p>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
