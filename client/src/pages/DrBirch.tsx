import { useEffect } from "react";
import { Link } from "wouter";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, Phone, GraduationCap, Award, Microscope, Globe } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";

export default function DrBirch() {
  useEffect(() => {
    document.title = "Dr. Jonathan Birch NMD, RMSK | FMT Specialist | Purety Family Medical Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Dr. Jonathan Birch is one of the most experienced FMT specialists in the United States, with 1,000+ procedures since 2014. NMD, RMSK. Remote consultations available nationwide. Call (805) 500-8300.");

    const schema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Jonathan Birch",
      "alternateName": "Jonathan Birch NMD RMSK",
      "description": "Dr. Jonathan Birch NMD, RMSK is one of the nation's most experienced fecal microbiota transplant (FMT) specialists, having performed over 1,000 FMT procedures since graduating from Southwest College of Naturopathic Medicine in 2014. He offers in-person care in Santa Barbara, CA and remote consultations nationwide.",
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
                    Dr. Jonathan Birch is a naturopathic medical doctor and one of the most experienced fecal microbiota transplant (FMT) specialists in the United States. Since graduating from Southwest College of Naturopathic Medicine in 2014, he has performed over 1,000 FMT procedures and developed protocols that consistently achieve a 90%+ success rate for recurrent <em>C. difficile</em> infections.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Dr. Birch's practice encompasses the full spectrum of integrative and regenerative medicine — from gut microbiome restoration and plasma exchange to PRP, prolotherapy, and IV nutrient therapy. He sees patients in Santa Barbara and conducts remote consultations for patients across the United States, with capsule-based FMT available by mail.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                      "10+ Years in Practice",
                      "1,000+ FMT Procedures",
                      "Remote Consultations",
                      "Nationwide Capsule Delivery",
                      "Super Donor Protocol",
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
                    { label: "Patients Treated", value: "1,000+", sub: "More FMT experience than most academic centers" },
                    { label: "C. diff Success Rate", value: "90%+", sub: "Even for antibiotic-resistant, recurrent cases" },
                    { label: "Delivery Methods", value: "4", sub: "Capsules, oral liquid, retention enema, colonoscopy" },
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

        {/* Patient Reviews */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What Patients Say</h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-current" />)}
                  <span className="text-muted-foreground font-medium ml-2">5.0 from 70+ Google Reviews</span>
                </div>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { initials: "K.P.", quote: "Dr. Birch took the time to discuss all the possibilities and we came to the right treatment together. The remote consultation made everything easier. I finally have my life back.", type: "FMT Patient · Remote Consultation" },
                { initials: "M.R.", quote: "After multiple rounds of antibiotics failed, I was desperate. Dr. Birch's personalized approach worked when nothing else did. He took the time to understand my situation and developed a treatment plan that actually worked.", type: "C. diff Patient · Santa Barbara" },
                { initials: "D.L.", quote: "The consultation process was thorough and he explained all my options clearly. The treatment he recommended was much easier than I expected, and the results were remarkable. Truly life-changing care.", type: "Gut Health Patient" },
              ].map((r, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full flex flex-col">
                    <div className="flex text-accent mb-3">
                      {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow italic">"{r.quote}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">{r.initials[0]}{r.initials[2]}</div>
                      <div>
                        <div className="font-bold text-sm text-foreground">{r.initials}</div>
                        <div className="text-xs text-muted-foreground">{r.type}</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="text-center">
                <a
                  href="https://share.google/c7xr79PiAXp0GYVnp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                  data-testid="link-birch-google-reviews"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
