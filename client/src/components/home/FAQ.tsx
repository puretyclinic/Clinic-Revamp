import { FadeIn } from "@/components/layout/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is FMT and how does it work?",
    answer: "Fecal Microbiota Transplantation (FMT) transfers healthy gut bacteria from a rigorously screened donor to restore your gut microbiome. Unlike antibiotics that kill both good and bad bacteria, FMT repopulates your gut with the complete, balanced flora needed for proper digestion and immune function."
  },
  {
    question: "What is your success rate for C. diff?",
    answer: "Our FMT protocol has a 90%+ success rate for antibiotic-resistant C. diff infections. Many patients see significant improvement within the first week, with full resolution typically achieved within 6 weeks of treatment."
  },
  {
    question: "How do you screen your donors?",
    answer: "We use 'super donors' who undergo extensive screening far beyond FDA requirements. This includes blood and stool testing for infectious diseases, comprehensive health history review, and ongoing monitoring. Our donors are young, healthy individuals with no history of antibiotics, autoimmune conditions, or chronic illness."
  },
  {
    question: "Is FMT safe? Are there side effects?",
    answer: "FMT is remarkably safe when performed with properly screened donor material. Common side effects are mild and temporary: bloating, gas, or mild cramping for 1-2 days. Serious adverse effects are extremely rare, especially with our rigorous donor screening protocols."
  },
  {
    question: "Do you offer remote consultations?",
    answer: "Yes! We frequently do initial consultations remotely for patients outside the Santa Barbara area. After your consultation, we can discuss whether you'll need to travel to our clinic or if certain treatments can be managed remotely."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="font-serif text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Get answers to common questions about FMT treatment</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="up">
          <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="px-6 border-b border-gray-100 last:border-0">
                <AccordionTrigger className="text-lg font-serif font-medium text-left py-6 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
