import { useEffect } from "react";
import { Link } from "wouter";
import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, Phone, GraduationCap, Award, Leaf, Heart } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";

export default function DrDena() {
  useEffect(() => {
    document.title = "Dr. Dena Birch NMD | Women's Health & Pediatrics | Purety Family Medical Clinic";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Dr. Dena Nakhle Birch NMD specializes in women's health, pediatrics, and holistic family medicine in Santa Barbara, CA. Hormone balancing, thyroid, fertility, PCOS, pediatric naturopathy, and functional medicine. Call (805) 500-8300.");

    const schema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Dena Nakhle Birch",
      "alternateName": ["Dena Birch NMD", "Dr. Dena Birch"],
      "description": "Dr. Dena Nakhle Birch NMD is a naturopathic physician in Santa Barbara, CA specializing in women's health, pediatrics, hormone balancing, thyroid disorders, PCOS, perimenopause, fertility support, and holistic family medicine. She trained at the Southwest College of Naturopathic Medicine and is a member of the Institute of Functional Medicine, AANP, and the Pediatric Association of Naturopathic Physicians.",
      "image": "https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612849682752-20P4409HYPXT6ALS0FF3/Holistic+Dr.+Dena+Birch",
      "url": "https://puretyclinic.com/dr-dena-birch",
      "telephone": "+1-805-500-8300",
      "medicalSpecialty": [
        "ObstetricsGynecology",
        "Pediatrics",
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
        }
      ],
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Southwest College of Naturopathic Medicine",
          "description": "Doctorate in Naturopathic Medicine"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "De Paul University",
          "description": "Post-baccalaureate in Psychology"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Art Institute of Chicago",
          "description": "Bachelor of Fine Arts"
        }
      ],
      "memberOf": [
        { "@type": "Organization", "name": "Institute of Functional Medicine" },
        { "@type": "Organization", "name": "American Association of Naturopathic Physicians (AANP)" },
        { "@type": "Organization", "name": "California Naturopathic Doctors Association" },
        { "@type": "Organization", "name": "Pediatric Association of Naturopathic Physicians" },
        { "@type": "Organization", "name": "Endocrinology Association of Naturopathic Physicians" },
        { "@type": "Organization", "name": "American Herbalists Guild" }
      ],
      "knowsAbout": [
        "Women's health",
        "Hormone balancing",
        "BHRT bioidentical hormone therapy",
        "Perimenopause and menopause",
        "PCOS treatment",
        "Endometriosis",
        "Thyroid disorders",
        "Fertility support",
        "Pediatric naturopathic medicine",
        "Children's health",
        "Herbal medicine",
        "Functional medicine",
        "Adrenal fatigue",
        "Nutritional medicine"
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
        { "@type": "ListItem", "position": 3, "name": "Dr. Dena Birch", "item": "https://puretyclinic.com/dr-dena-birch" }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "dr-dena-schema";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    const bcScript = document.createElement("script");
    bcScript.type = "application/ld+json";
    bcScript.id = "dr-dena-breadcrumb";
    bcScript.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(bcScript);

    return () => {
      document.getElementById("dr-dena-schema")?.remove();
      document.getElementById("dr-dena-breadcrumb")?.remove();
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
                      src="https://images.squarespace-cdn.com/content/v1/5e8750872ceab220c4d4f137/1612849682752-20P4409HYPXT6ALS0FF3/Holistic+Dr.+Dena+Birch"
                      alt="Dr. Dena Nakhle Birch NMD — Women's Health & Pediatrics at Purety Family Medical Clinic"
                      className="w-full h-auto object-cover"
                      data-testid="img-dr-dena"
                    />
                  </div>
                  <div className="mt-5 flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">NMD</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20">Women's Health</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20">Pediatrics</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">Functional Medicine</span>
                  </div>
                </FadeIn>
              </div>

              <div className="md:col-span-3">
                <FadeIn delay={0.15}>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Purety Family Medical Clinic · Santa Barbara, CA</p>
                  <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-2 leading-tight">Dr. Dena Birch</h1>
                  <p className="text-lg text-muted-foreground font-medium mb-6">NMD · Naturopathic Medical Doctor</p>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Dr. Dena Nakhle Birch is a naturopathic physician at Purety Family Medical Clinic in Santa Barbara. She specializes in women's health and pediatrics — bringing a deeply individualized, root-cause approach to conditions that conventional medicine often manages but doesn't resolve. From hormone imbalances and thyroid disorders to PCOS, perimenopause, and children's health, Dr. Dena meets patients where they are and works with them toward lasting wellness.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Dr. Dena is a member of the Institute of Functional Medicine and the American Herbalists Guild, reflecting her commitment to both evidence-based functional medicine and time-tested botanical approaches. She sees patients of all ages — newborns through adults — and brings warmth, creativity, and genuine curiosity to every appointment.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                      "Women's Health Specialist",
                      "Pediatric Naturopathic Care",
                      "Hormone Balancing & BHRT",
                      "Thyroid & Adrenal Support",
                      "Herbal & Botanical Medicine",
                      "Functional Medicine",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/services/naturopathic" data-testid="link-dena-womens-health">
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-lg">
                        Women's Health Services <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="border-primary/30 text-primary font-bold rounded-lg" asChild>
                      <a href="tel:+18055008300" data-testid="link-dena-call"><Phone className="w-4 h-4 mr-2" /> (805) 500-8300</a>
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
                  <h3 className="font-serif text-xl font-bold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-bold text-foreground text-sm">Doctor of Naturopathic Medicine (NMD)</div>
                      <div className="text-sm text-muted-foreground">Southwest College of Naturopathic Medicine · Tempe, AZ</div>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">Post-baccalaureate in Psychology</div>
                      <div className="text-sm text-muted-foreground">De Paul University · Chicago, IL</div>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">Bachelor of Fine Arts</div>
                      <div className="text-sm text-muted-foreground">Art Institute of Chicago · Chicago, IL</div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4">Professional Memberships</h3>
                  <div className="space-y-3">
                    {[
                      "Institute of Functional Medicine",
                      "American Association of Naturopathic Physicians (AANP)",
                      "California Naturopathic Doctors Association",
                      "Pediatric Association of Naturopathic Physicians",
                      "Endocrinology Association of Naturopathic Physicians",
                      "American Herbalists Guild",
                    ].map((org, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{org}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4">Approach</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Dr. Dena's training spans naturopathic medicine, functional medicine, herbal medicine, and the mind-body connection — a reflection of her diverse academic background in fine arts and psychology before medicine.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    She brings a creative, curious perspective to patient care that goes beyond lab values and diagnoses to understand the full picture of a patient's life and health.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Women's Health Specialty */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Women's Health — Root Cause, Not Symptom Management</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Dr. Dena's women's health practice is built on a simple premise: most hormonal and reproductive health conditions have identifiable underlying causes — and when those causes are addressed, the body can heal. She doesn't just prescribe something to manage symptoms; she investigates what's driving them.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Whether you're struggling with irregular cycles, unexplained fatigue, weight changes, mood swings, painful periods, or the transition into perimenopause or menopause, Dr. Dena takes a comprehensive approach that includes hormone testing, thyroid and adrenal evaluation, gut health assessment, and nutritional analysis.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Treatment plans integrate bioidentical hormone therapy (BHRT) when appropriate, alongside herbal medicine, nutritional protocols, lifestyle medicine, and targeted supplementation. The goal is always to restore balance — not just mask it.
                </p>
                <Link href="/services/naturopathic" data-testid="link-dena-learn-womens">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-lg">
                    Women's Health Services <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  {[
                    { label: "Hormone Balancing & BHRT", desc: "Bioidentical hormone therapy for perimenopause, menopause, and hormonal imbalance" },
                    { label: "PCOS & Endometriosis", desc: "Natural and integrative treatment for complex reproductive conditions" },
                    { label: "Thyroid & Adrenal Health", desc: "Comprehensive evaluation beyond standard TSH — T3, T4, reverse T3, antibodies, cortisol" },
                    { label: "Fertility Support", desc: "Naturopathic approaches to optimizing fertility and supporting healthy pregnancy" },
                    { label: "Perimenopause & Menopause", desc: "Compassionate, evidence-based support through hormonal transitions" },
                  ].map((item, i) => (
                    <div key={i} className="bg-[#f8fafb] rounded-2xl p-5 border border-gray-100 flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-sm mb-1">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Pediatrics */}
        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn delay={0.15} className="order-2 md:order-1">
                <div className="space-y-5">
                  {[
                    { title: "Newborns & Infants", desc: "Gentle, safe naturopathic support for the earliest stages of life — colic, reflux, eczema, and nutritional foundations." },
                    { title: "Children's Wellness", desc: "Annual well-child visits, immune support, allergy evaluation, and nutritional assessment for growing kids." },
                    { title: "Adolescents", desc: "Hormonal health, acne, anxiety, and support through the physical and emotional changes of adolescence." },
                    { title: "Chronic Conditions in Children", desc: "ADHD, asthma, recurrent infections, gut issues, and food sensitivities — a whole-child approach." },
                    { title: "Vaccine Conversations", desc: "Thoughtful, non-judgmental dialogue about vaccine schedules and child health decisions." },
                  ].map((item, i) => (
                    <FadeIn key={i} delay={i * 0.07}>
                      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>

              <FadeIn className="order-1 md:order-2">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Naturopathic Pediatric Care in Santa Barbara</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Dr. Dena has a natural gift with children. She is warm, patient, and genuinely delights in the energy and curiosity that kids bring to every appointment. Parents consistently remark on how comfortable their children feel with her — even children who are anxious around doctors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  As a member of the Pediatric Association of Naturopathic Physicians, Dr. Dena brings specialized training in pediatric naturopathic medicine. She takes a whole-child approach — addressing not just physical symptoms but the nutritional, emotional, and environmental factors that shape a child's health.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  She sees patients from newborns through adolescence, and welcomes families who are seeking a thoughtful alternative or complement to conventional pediatric care.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Areas of Practice */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">All Areas of Practice</h2>
                <p className="text-muted-foreground text-lg">Dr. Dena offers comprehensive naturopathic and functional medicine care</p>
              </div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Women's Health", desc: "Hormones, PCOS, endometriosis, thyroid, fertility, perimenopause, and menopause.", href: "/services/naturopathic" },
                { title: "Pediatric Care", desc: "Naturopathic medicine for newborns, children, and adolescents. Whole-child, family-centered care.", href: "/services/naturopathic" },
                { title: "Hormone Therapy (BHRT)", desc: "Bioidentical hormone replacement therapy tailored to your labs and symptoms.", href: "/services/hormone-replacement" },
                { title: "Thyroid & Adrenal Health", desc: "Comprehensive thyroid panels, adrenal assessment, and natural treatment protocols.", href: "/services/naturopathic" },
                { title: "Herbal & Botanical Medicine", desc: "Evidence-informed herbal formulations for hormonal, immune, digestive, and nervous system support.", href: "/services/naturopathic" },
                { title: "Functional Medicine", desc: "Advanced lab testing and root-cause analysis for complex, chronic health conditions.", href: "/services/naturopathic" },
              ].map((service, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <Link href={service.href} data-testid={`link-dena-service-${i}`}>
                    <div className="bg-[#f8fafb] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
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

        {/* About Dr. Dena personally */}
        <section className="py-20 bg-primary/5 border-t border-primary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Beyond the Clinic</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Dr. Dena believes that a full life is the foundation of good health — and she lives that principle herself.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
                  Outside of the clinic, Dr. Dena is an avid yoga practitioner, hiker, scuba diver, snowboarder, mountain biker, and cook. She loves to travel and is deeply connected to the arts — a thread that runs from her Fine Arts degree all the way through the creativity she brings to patient care.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  She has an excellent sense of humor and a genuine warmth that patients — especially children — respond to immediately. She'll be the first to tell you that keeping your inner child alive is one of the most powerful things you can do for your health.
                </p>
              </div>
            </FadeIn>
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
                { initials: "S.M.", quote: "Dr. Dena is truly exceptional. She listened to everything I was experiencing and tested things my other doctors never thought to check. My hormones are finally balanced and I feel like myself again.", type: "Women's Health Patient · Santa Barbara" },
                { initials: "J.T.", quote: "We've been bringing our kids to Dr. Dena for three years. She's so good with them — they actually look forward to their appointments. She takes the time to explain everything and never makes us feel rushed.", type: "Pediatric Patient Family · Goleta" },
                { initials: "L.B.", quote: "After years of being told my thyroid labs were 'normal' while feeling terrible, Dr. Dena ran a full panel and found exactly what was wrong. Her treatment plan changed my life.", type: "Thyroid Patient · Santa Barbara" },
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
                  data-testid="link-dena-google-reviews"
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

        {/* CTA */}
        <section className="py-20 bg-[#f8fafb] border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-5 border border-primary/20">
                Women's Health · Pediatrics · Santa Barbara, CA
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Schedule with Dr. Dena
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Whether you're seeking care for yourself or your children, Dr. Dena brings warmth, expertise, and a genuine commitment to your long-term health. New patients are welcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://puretyfamilymedicalclinic.janeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-dena-book"
                >
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold rounded-lg px-8">
                    Book an Appointment <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-primary/30 text-primary font-bold rounded-lg" asChild>
                  <a href="tel:+18055008300" data-testid="link-dena-cta-call">
                    <Phone className="w-4 h-4 mr-2" /> (805) 500-8300
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA heading="Have Questions for Dr. Dena?" formSource="Dr. Dena Page" />
      </main>

      <Footer />
    </div>
  );
}
