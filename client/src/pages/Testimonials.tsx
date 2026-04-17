import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/ContactCTA";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Star } from "lucide-react";

const CATEGORIES = ["All", "FMT", "Regenerative", "Ozone / EBO2", "Women's Health", "Pediatrics", "TPE / Plasma Exchange"];

const TESTIMONIALS = [
  {
    category: "FMT",
    name: "Karen P.",
    location: "San Francisco, CA",
    treatment: "FMT — Recurrent C. difficile",
    quote: "After four rounds of Vancomycin and two of Fidaxomicin, I had lost 18 lbs and could barely leave the house. My GI doctor told me FMT was my last option and referred me to Dr. Birch. He walked me through everything, answered every nervous question I had, and the procedure itself took less than an hour. Within 48 hours the diarrhea stopped. Three months later I'm still in complete remission. It genuinely saved my life.",
  },
  {
    category: "FMT",
    name: "Michael R.",
    location: "Seattle, WA",
    treatment: "FMT — Post-antibiotic Gut Dysbiosis",
    quote: "A prolonged antibiotic course left my gut a mess — bloating, loose stools, brain fog, anxiety. My gastroenterologist had no answers. A friend sent me Dr. Birch's page and I booked a telehealth consult. He was thorough, evidence-based, and clearly knew the literature better than anyone I'd seen. The FMT protocol restored me in ways I didn't think were possible. I'm sleeping better, thinking more clearly, and my digestion is normal for the first time in two years.",
  },
  {
    category: "FMT",
    name: "Patricia L.",
    location: "Dallas, TX",
    treatment: "FMT — Ulcerative Colitis",
    quote: "I had been flaring on and off for three years despite two different biologics. My husband found Purety after researching FMT for colitis. Dr. Birch did a detailed intake and set realistic expectations — he was honest that it wasn't a guaranteed cure but that the evidence was promising. I'm now nine months post-procedure with no flares, and my last colonoscopy showed significant mucosal healing. My GI doctor was genuinely surprised.",
  },
  {
    category: "Regenerative",
    name: "David K.",
    location: "Santa Barbara, CA",
    treatment: "PRP — Knee Osteoarthritis",
    quote: "I was told by two orthopedists that I needed a total knee replacement at 54. I wasn't ready to do that. Dr. Birch did a thorough ultrasound evaluation and recommended a series of PRP injections. After three sessions spread over four months I'm hiking again, playing pickleball twice a week, and have no more daily pain. I wish I'd found this years ago.",
  },
  {
    category: "Regenerative",
    name: "Sandra M.",
    location: "Santa Barbara, CA",
    treatment: "Stem Cell Therapy — Shoulder Tear",
    quote: "Partial rotator cuff tear after a fall — my surgeon wanted to operate immediately. Dr. Birch's ultrasound-guided approach was precise and the recovery was so much easier than surgery would have been. Six months out, my MRI shows significant improvement and I'm back to full range of motion. The entire team at Purety made every visit feel comfortable.",
  },
  {
    category: "Regenerative",
    name: "Robert T.",
    location: "Ventura, CA",
    treatment: "PRP — Hair Restoration",
    quote: "I was skeptical about PRP for hair loss but Dr. Birch explained the mechanism clearly and showed me the research. After four sessions I have noticeable regrowth in my crown and temples. It's not magic — you need to be patient and consistent — but the results are real. He also caught a thyroid issue on my labs that my GP had been missing for years, which was a huge bonus.",
  },
  {
    category: "Ozone / EBO2",
    name: "Jennifer H.",
    location: "Los Angeles, CA",
    treatment: "EBO2 / EBOO — Chronic Lyme Disease",
    quote: "Seven years of Lyme treatment, countless antibiotics, herbal protocols, and I still couldn't function normally. A Lyme specialist I trust recommended EBO2 at Purety. The staff are professional, the environment is calm and clean, and Dr. Birch monitors every session personally. After eight sessions I have more energy than I've had in a decade. It hasn't cured everything but it's the most dramatic improvement I've experienced.",
  },
  {
    category: "Ozone / EBO2",
    name: "Thomas W.",
    location: "Santa Barbara, CA",
    treatment: "EBO2 / EBOO — Autoimmune Fatigue",
    quote: "Fibromyalgia and chronic fatigue for six years. I'd tried everything. EBO2 was the most aggressive treatment I'd attempted and I was nervous. Dr. Birch walked me through exactly what would happen. The sessions are peaceful — you just lie there reading while the machine does its work. After the third session I started sleeping through the night for the first time in years. The fatigue has lifted substantially.",
  },
  {
    category: "Ozone / EBO2",
    name: "Lisa N.",
    location: "Ojai, CA",
    treatment: "Multipass Ozone — Mold Illness",
    quote: "Mold illness from a water-damaged home left me with neurological symptoms, joint pain, and severe fatigue. I did ten rounds of Multipass ozone therapy alongside Dr. Birch's detox protocol. The combination was transformative. My inflammation markers are down, my cognitive function has returned, and I finally feel like myself again. Dr. Birch approaches each patient as an individual — he doesn't give everyone the same protocol.",
  },
  {
    category: "Women's Health",
    name: "Amanda C.",
    location: "Santa Barbara, CA",
    treatment: "Women's Health — Hormonal Imbalance",
    quote: "My conventional OB ran labs, said everything was 'normal,' and offered me antidepressants. Dr. Dena ran a comprehensive hormonal panel and found several imbalances that had been missed. Her approach is methodical and unhurried. She explains everything in plain language, never talks down to you, and actually follows up between appointments. My energy, mood, and cycle have all normalized. I send every woman I know here.",
  },
  {
    category: "Women's Health",
    name: "Rachel S.",
    location: "Montecito, CA",
    treatment: "Women's Health — Thyroid / PCOS",
    quote: "I had been symptomatic for years — hair loss, irregular periods, weight gain, exhaustion — but my TSH was always 'in range' so my doctors dismissed me. Dr. Dena ordered a full thyroid panel including T3, reverse T3, and antibodies, and identified Hashimoto's. Her treatment plan addressed root causes rather than just suppressing numbers. Eighteen months later I feel completely different. She's exceptional.",
  },
  {
    category: "Women's Health",
    name: "Nicole B.",
    location: "Goleta, CA",
    treatment: "Women's Health — Perimenopause",
    quote: "Hot flashes, insomnia, brain fog, mood swings — all dismissed as 'normal aging' by my GP. Dr. Dena took the time to actually investigate. Her bioidentical hormone approach was thoughtful and carefully monitored. Within three months I was sleeping again and my quality of life dramatically improved. The fact that she also practices integrative medicine means she treats everything together rather than in silos.",
  },
  {
    category: "Pediatrics",
    name: "Melissa F.",
    location: "Santa Barbara, CA",
    treatment: "Pediatrics — Eczema & Gut Health",
    quote: "Our five-year-old had severe eczema from infancy and we were cycling through steroid creams with no lasting relief. Dr. Dena identified underlying gut dysbiosis and food sensitivities we hadn't connected. Her protocol — gentle, natural, and very well explained — cleared his skin almost completely within four months. She's so wonderful with kids. He asks when he gets to see 'the nice doctor' again.",
  },
  {
    category: "Pediatrics",
    name: "James O.",
    location: "Carpinteria, CA",
    treatment: "Pediatrics — Recurrent Ear Infections",
    quote: "Our daughter had seven ear infections in one year. The pediatrician recommended ear tubes immediately. We wanted a second opinion and came to Dr. Dena. She identified dietary triggers and a vitamin D deficiency, suggested some structural work with a pediatric chiropractor, and recommended some targeted supplements. It's been fourteen months and not a single ear infection. We avoided surgery entirely.",
  },
  {
    category: "TPE / Plasma Exchange",
    name: "Christopher A.",
    location: "Phoenix, AZ",
    treatment: "Therapeutic Plasma Exchange — Long COVID",
    quote: "Eighteen months of long COVID with debilitating fatigue, cognitive impairment, and post-exertional malaise. I had done extensive research and found the German data on TPE promising. Dr. Birch was one of the only physicians in the country offering it in a clinical setting. His protocol is rigorous. Five sessions in, my cognitive function returned to about 80% of normal — better than I'd hoped after so long. I'm continuing treatment and remain optimistic.",
  },
  {
    category: "TPE / Plasma Exchange",
    name: "Deborah L.",
    location: "San Diego, CA",
    treatment: "Therapeutic Plasma Exchange — Autoimmune",
    quote: "Years of autoimmune symptoms bouncing between rheumatologists who kept adding medications without improvement. Dr. Birch took a completely different approach — rather than layering more immunosuppression, he looked at root causes. TPE alongside his functional medicine protocol has reduced my inflammatory markers by over 60% in six months. For the first time I feel like someone is actually treating me, not just managing numbers.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    document.title = "Patient Reviews | Purety Clinic Santa Barbara";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Real patient reviews for Purety Clinic in Santa Barbara. FMT, PRP, ozone and plasma exchange patients share their stories. 77 five-star reviews.");
  }, []);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      <main className="flex-grow">

        {/* Hero */}
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-6 border border-white/20">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-accent" />)}
                <span>5.0 · 77 Google Reviews</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Patient <span className="italic text-accent">Stories</span></h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Real outcomes from real patients. From recurrent C. diff cured with FMT to chronic pain resolved with PRP — these are the stories that define our practice.
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

        {/* Stats bar */}
        <section className="bg-white border-b border-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
              {[
                { value: "1,000+", label: "FMT Procedures" },
                { value: "4,000+", label: "Regenerative Injections" },
                { value: "2,500+", label: "Ozone Treatments" },
                { value: "5.0 ★", label: "Average Google Rating" },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div data-testid={`stat-testimonials-${i}`}>
                    <div className="font-serif text-3xl font-bold text-primary">{s.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Live Google Reviews */}
        <GoogleReviews heading="Latest Reviews on Google" maxReviews={5} />

        {/* Category filter + testimonials */}
        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Stories by Treatment</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">Filter by the treatment or condition most relevant to you.</p>
              </div>

              {/* Filter tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-12" data-testid="testimonials-filter">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    data-testid={`filter-${cat.toLowerCase().replace(/[\s/]+/g, "-")}`}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                      activeCategory === cat
                        ? "bg-primary text-white border-primary shadow"
                        : "bg-white text-muted-foreground border-gray-200 hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((t, i) => (
                <FadeIn key={`${t.name}-${i}`} delay={(i % 4) * 0.08}>
                  <div
                    className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full flex flex-col"
                    data-testid={`testimonial-card-${i}`}
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic flex-grow mb-5">"{t.quote}"</p>
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-sm text-foreground" data-testid={`testimonial-name-${i}`}>{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.location}</div>
                      </div>
                      <span className="text-xs font-semibold bg-primary/8 text-primary px-3 py-1 rounded-full border border-primary/15">
                        {t.treatment}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Google CTA */}
            <FadeIn>
              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4 text-sm">Read all 77 reviews directly on Google</p>
                <a
                  href="https://share.google/c7xr79PiAXp0GYVnp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                  data-testid="link-all-google-reviews"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm font-bold text-gray-700">Read All Reviews on Google</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Ready to Experience the Difference?" subheading="Join our family of patients and start your healing journey today." formSource="Testimonials Page" />
      </main>
      <Footer />
    </div>
  );
}
