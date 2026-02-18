import React from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { storedPages } from "@/data/stored_pages";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactCTA } from "@/components/ContactCTA";

export default function FAQ() {
  const pageData = storedPages.find(p => p.id === "faq-page");

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      <main className="flex-grow">
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Common <span className="italic text-accent">Questions</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                {pageData?.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" asChild>
                  <a href="#contact-form" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                    Book Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold" asChild>
                  <a href="tel:+18055008300">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <Accordion type="single" collapsible className="w-full">
                {pageData?.content_sections.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-lg font-serif text-left">{faq.heading}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.body}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </section>
        <ContactCTA heading="Still Have Questions?" subheading="We're here to help. Reach out and we'll get back to you quickly." formSource="FAQ Page" />
      </main>
      <Footer />
    </div>
  );
}
