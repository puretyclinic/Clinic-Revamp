import { useEffect } from "react";
import { Link } from "wouter";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone, GraduationCap, Award, Microscope, Globe } from "lucide-react";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ContactCTA } from "@/components/ContactCTA";

export default function DrBirch() {
  useEffect(() => {
    document.title = "Dr. Jonathan Birch NMD | FMT Specialist | Purety Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Dr. Jonathan Birch is one of the US's most experienced FMT specialists — 1,000+ procedures since 2014. NMD, RMSK. Call (805) 500-8300.");

    const schema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Jonathan Birch",
      "alternateName": "Jonathan Birch NMD RMSK",
      "description": "Dr. Jonathan Birch NMD, RMSK has performed over 1,000 FMT procedures and more than 4,000 regenerative injections since graduating from Southwest College of Naturopathic Medicine in 2014. He is one of the most experienced FMT and regenerative medicine specialists in the United States, offering in-person care in Santa Barbara, CA and remote consultations nationwide.",
      "image": "https://puretyclinic.com/images/dr-jonathan-birch.png",
      "url": "https://puretyclinic.com/dr-jonathan-birch",
      "telephone": "+1-805-500-8300",
      "medicalSpecialty": [
        "Gastroenterology",
        "RegenerativeMedicine",
        "NaturopathicMedicine",
        "IntegrativeMedicine"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Doctor of Naturopathic Medicine (NMD)",
          "educationalLevel": "Doctoral",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Southwest College of Naturopathic Medicine"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "certification",
          "name": "Registered in Musculoskeletal Sonography (RMSK)"
        }
      ],
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Southwest College of Naturopathic Medicine",
          "description": "Doctorate in Naturopathic Medicine, 2014"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Occidental College",
          "description": "Bachelor of Science in Biochemistry"
        }
      ],
      "memberOf": [
        { "@type": "Organization", "name": "Fecal Transplant Foundation" },
        { "@type": "Organization", "name": "Gastroenterology Association of Naturopathic Physicians" },
        { "@type": "Organization", "name": "TOBI Orthobiologic Institute" },
        { "@type": "Organization", "name": "Biological Medicine Academy" }
      ],
      "knowsAbout": [
        "Fecal Microbiota Transplant (FMT)",
        "C. difficile treatment",
        "Gut microbiome restoration",
        "FMT capsule therapy",
        "Super donor FMT protocols",
        "Irritable Bowel Syndrome (IBS)",
        "Ulcerative Colitis",
        "SIBO treatment",
        "Platelet Rich Plasma (PRP)",
        "Stem cell therapy",
        "Therapeutic Plasma Exchange",
        "Prolotherapy",
        "IV nutrient therapy",
        "Ozone therapy"
      ],
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "Purety Family Medical Clinic",
        "url": "https://puretyclinic.com",
        "telephone": "+1-805-500-8300",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2323 Oak Park Ln, Suite 102",
          "addressLocality": "Santa Barbara",
          "addressRegion": "CA",
          "postalCode": "93105",
          "addressCountry": "US"
        }
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://puretyclinic.com/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://puretyclinic.com/about" },
        { "@type": "ListItem", "position": 3, "name": "Dr. Jonathan Birch", "item": "https://puretyclinic.com/dr-jonathan-birch" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "dr-birch-schema";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    const bcScript = document.createElement("script");
    bcScript.type = "application/ld+json";
    bcScript.id = "dr-birch-breadcrumb";
    bcScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(bcScript);

    return () => {
      document.getElementById("dr-birch-schema")?.remove();
      document.getElementById("dr-birch-breadcrumb")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      <main className="flex-grow">

        {/* Hero */}
        <section className="pt-32 pb-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <FadeIn>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/dr-jonathan-birch.png"
                      alt="Dr. Jonathan Birch NMD RMSK — FMT Specialist at Purety Family Medical Clinic"
                      className="w-full h-auto object-cover"
                      data-testid="img-dr-birch"
                    />
                  </div>
                  <div className="mt-5 flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">NMD</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">RMSK</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20">FMT Specialist</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">Regenerative Medicine</span>
                  </div>
                </FadeIn>
              </div>

              <div className="md:col-span-3">
                <FadeIn delay={0.15}>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Purety Family Medical Clinic · Santa Barbara, CA</p>
                  <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-2 leading-tight">Dr. Jonathan Birch</h1>
                  <p className="text-lg text-muted-foreground font-medium mb-6">NMD, RMSK · Naturopathic Medical Doctor</p>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Dr. Jonathan Birch is a naturopathic medical doctor and one of the most experienced FMT and regenerative medicine specialists in the United States. Since graduating from Southwest College of Naturopathic Medicine in 2014, he has performed over 1,000 FMT procedures and more than 4,000 regenerative injections — including PRP, prolotherapy, and biologic treatments — all under real-time musculoskeletal ultrasound guidance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Dr. Birch's practice spans the full spectrum of integrative and regenerative medicine — from gut microbiome restoration and therapeutic plasma exchange (TPE) to joint repair and IV nutrient therapy. He sees patients in Santa Barbara and conducts remote consultations for patients across the United States, with capsule-based FMT available by mail.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                      "10+ Years in Practice",
                      "1,000+ FMT Procedures",
                      "4,000+ Regenerative Injections",
                      "Remote Consultations Available",
                      "Nationwide Capsule Delivery",
                      "90%+ C. diff Success Rate",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/fecal-transplant" data-testid="link-birch-fmt-page">
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-lg">
                        FMT Treatment Info <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="border-primary/30 text-primary font-bold rounded-lg" asChild>
                      <a href="tel:+18055008300" data-testid="link-birch-call"><Phone className="w-4 h-4 mr-2" /> (805) 500-8300</a>
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Credentials */}
        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Education & Credentials</h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4">Medical Training</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-bold text-foreground text-sm">Doctor of Naturopathic Medicine (NMD)</div>
                      <div className="text-sm text-muted-foreground">Southwest College of Naturopathic Medicine · 2014</div>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">B.S. in Biochemistry</div>
                      <div className="text-sm text-muted-foreground">Occidental College · Los Angeles, CA</div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4">Certifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">Registered in Musculoskeletal Sonography (RMSK)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">TOBI Orthobiologic Institute — PRP & Stem Cell Protocols</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">Biological Medicine Academy</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Microscope className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4">Professional Memberships</h3>
                  <div className="space-y-3">
                    {[
                      "Fecal Transplant Foundation",
                      "Gastroenterology Association of Naturopathic Physicians",
                      "TOBI Orthobiologic Institute",
                      "Biological Medicine Academy",
                    ].map((org, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{org}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FMT Expertise */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">America's Most Experienced FMT Specialist</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  When Dr. Birch began performing fecal microbiota transplants in 2014, FMT was barely known outside of research journals. Over the past decade he has built one of the largest and most successful FMT practices in the country — treating patients with recurrent <em>C. difficile</em>, IBS, ulcerative colitis, Crohn's disease, SIBO, and other gut microbiome disorders.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  His "super donor" protocol — selecting donors whose microbiome produces consistently superior outcomes — sets the clinic apart from the growing number of practices that offer FMT without this level of rigor.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  For patients who cannot travel to Santa Barbara, Dr. Birch offers remote consultations and ships triple-encapsulated FMT capsules anywhere in the United States, making effective FMT treatment accessible nationwide.
                </p>
                <Link href="/fecal-transplant" data-testid="link-birch-learn-fmt">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-lg">
                    Learn About FMT Treatment <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  {[
                    { label: "Years Performing FMT", value: "10+", sub: "Since 2014 — one of the earliest practitioners in the US" },
                    { label: "FMT Procedures Performed", value: "1,000+", sub: "More FMT experience than most academic centers" },
                    { label: "Regenerative Injections Performed", value: "4,000+", sub: "PRP, prolotherapy, and biologic injections under ultrasound guidance" },
                    { label: "C. diff Success Rate", value: "90%+", sub: "Even for antibiotic-resistant, recurrent cases" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#f8fafb] rounded-2xl p-6 border border-gray-100 flex items-center gap-6">
                      <div className="text-3xl font-bold font-serif text-primary shrink-0 w-20 text-center">{stat.value}</div>
                      <div>
                        <div className="font-bold text-foreground">{stat.label}</div>
                        <div className="text-sm text-muted-foreground">{stat.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Other Areas of Practice */}
        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Areas of Practice</h2>
                <p className="text-muted-foreground text-lg">Dr. Birch offers a full spectrum of integrative and regenerative treatments</p>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Fecal Microbiota Transplant (FMT)", desc: "C. diff, IBS, ulcerative colitis, SIBO, Crohn's disease. Capsules available nationwide.", href: "/fecal-transplant" },
                { title: "Therapeutic Plasma Exchange", desc: "Plasmapheresis for autoimmune conditions, long COVID, and neurological disorders.", href: "/services/plasma-exchange" },
                { title: "Regenerative Medicine", desc: "PRP, prolotherapy, and stem cell therapy guided by musculoskeletal ultrasound.", href: "/services/regenerative" },
                { title: "IV Nutrient Therapy", desc: "High-dose vitamin C, Myers cocktails, NAD+, glutathione and other IV protocols.", href: "/services/iv-therapy" },
                { title: "Ozone Therapy", desc: "Major autohemotherapy, ozone sauna, and direct injection protocols.", href: "/services/ozone-therapy" },
                { title: "Naturopathic Medicine", desc: "Root-cause medicine combining nutrition, lifestyle, botanical and integrative care.", href: "/services/naturopathic" },
              ].map((service, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <Link href={service.href} data-testid={`link-birch-service-${i}`}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                      <span className="inline-flex items-center text-primary font-bold text-sm mt-4">Learn More <ArrowRight className="w-3 h-3 ml-1" /></span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Live Google Reviews */}
        <GoogleReviews heading="What Patients Say" maxReviews={5} />

        {/* Nationwide CTA */}
        <section className="py-20 bg-primary/5 border-t border-primary/10">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-5 border border-primary/20">
                <Globe className="w-4 h-4" /> Serving Patients Nationwide
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Schedule a Consultation with Dr. Birch</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Whether you're in Santa Barbara or across the country, Dr. Birch's team is ready to help. Remote consultations and nationwide capsule delivery available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fecal-transplant#consultation" data-testid="link-birch-schedule">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-lg px-8">
                    Schedule a Consultation <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary/30 text-primary font-bold rounded-lg" asChild>
                  <a href="tel:+18055008300" data-testid="link-birch-cta-call">Call (805) 500-8300</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Have Questions for Dr. Birch?" formSource="Dr. Birch Bio Page" />
      </main>

      <Footer />
    </div>
  );
}
