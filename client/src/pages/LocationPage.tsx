import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Phone, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { ContactCTA } from "@/components/ContactCTA";
import { useState, useEffect } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${question.slice(0, 20).replace(/\s/g, '-')}`}
      >
        <span className="font-bold text-foreground text-lg pr-4">{question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary shrink-0" />}
      </button>
      {open && (
        <div className="pb-5 text-muted-foreground leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

interface LocationData {
  city: string;
  state: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  driveTime: string;
  distance: string;
  intro: string;
  whyTravel: string;
  services: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
  schema: object;
}

const locations: Record<string, LocationData> = {
  "los-angeles": {
    city: "Los Angeles",
    state: "CA",
    headline: "FMT, EBO2 Ozone, PRP & Therapeutic Plasma Exchange Near Los Angeles",
    subheadline: "Purety Family Medical Clinic in Santa Barbara — 90 minutes from LA. One of California's most experienced outpatient clinics for FMT, EBO2/EBOO ozone therapy, PRP injections, and therapeutic plasma exchange (TPE).",
    metaTitle: "Integrative Medicine Near Los Angeles | Purety Clinic",
    metaDescription: "Los Angeles patients travel to Purety Clinic in Santa Barbara for FMT, EBO2 ozone, PRP, and plasma exchange. Dr. Birch NMD, RMSK. Call (805) 500-8300.",
    driveTime: "Approximately 90 minutes",
    distance: "About 95 miles",
    intro: "Purety Family Medical Clinic in Santa Barbara is one of the few outpatient clinics in California offering all four of these advanced therapies under a single roof: FMT for gut health and C. difficile, EBO2 (EBOO) ozone therapy, ultrasound-guided PRP and stem cell injections, and therapeutic plasma exchange (TPE / plasmapheresis). Los Angeles has a large patient population seeking these treatments, but qualified outpatient providers are rare. Many LA-area patients make the 90-minute drive — often starting with a remote consultation to avoid unnecessary trips.",
    whyTravel: "For Los Angeles patients, the drive to Santa Barbara is straightforward and the level of specialist experience is difficult to match locally. Dr. Jonathan Birch NMD, RMSK has performed over 1,000 FMT procedures, 4,000+ regenerative injections, and 2,500+ ozone treatments — making this one of the highest-volume integrative specialty practices in the state. Initial consultations for FMT and many other services can be done by telehealth.",
    services: [
      { name: "FMT — Fecal Microbiota Transplant", description: "90%+ success rate for recurrent C. diff since 2014. Capsule, enema, and colonoscopy options. Remote consultations available — many LA patients never need to travel for capsule-based protocols." },
      { name: "EBO2 / EBOO Ozone Therapy", description: "Extracorporeal blood ozonation — one of California's most experienced providers with 2,500+ treatments. LA patients seeking EBO2 or EBOO for chronic illness, Lyme, autoimmune disease, and long COVID travel specifically for this." },
      { name: "PRP & Stem Cell Injections", description: "Over 4,000 ultrasound-guided regenerative injections by Dr. Birch (RMSK). PRP, Wharton's Jelly, exosomes, and prolotherapy for joint pain, arthritis, and sports injuries." },
      { name: "Therapeutic Plasma Exchange (TPE)", description: "One of the few outpatient therapeutic plasma exchange clinics in Southern California. TPE / plasmapheresis for autoimmune conditions, Long COVID, MS, Guillain-Barré, and neurodegeneration." },
      { name: "IV Nutrient Therapy", description: "High-dose vitamin C, NAD+, Myers cocktail, chelation, and custom longevity infusions." },
      { name: "Remote Consultations", description: "Initial telehealth consultations available for FMT, EBO2, PRP, and TPE. Confirm your candidacy and treatment plan before making the trip." }
    ],
    faqs: [
      { question: "Do you have a clinic in Los Angeles?", answer: "We don't have an LA office — our clinic is at 2323 Oak Park Ln, Suite 102 in Santa Barbara, approximately 90 minutes from Los Angeles. Initial consultations for most services can be conducted via telehealth, minimizing unnecessary travel." },
      { question: "How far is Purety Clinic from Los Angeles?", answer: "About 95 miles — roughly 90 minutes by car on the 101 freeway. We serve patients from Los Angeles, Santa Monica, Beverly Hills, Pasadena, the San Fernando Valley, and Orange County. Morning appointments are recommended to avoid southbound traffic on the return trip." },
      { question: "Do you offer EBO2 ozone therapy for Los Angeles patients?", answer: "Yes. Dr. Jonathan Birch has performed over 2,500 ozone treatments including EBO2 (EBOO / ozone dialysis). Many LA patients travel specifically for this therapy, as qualified outpatient EBO2 providers are rare in Southern California." },
      { question: "Is therapeutic plasma exchange (TPE) available for Los Angeles patients?", answer: "Yes. Purety Clinic is one of the few outpatient therapeutic plasma exchange clinics serving Southern California. We offer TPE (plasmapheresis) for autoimmune conditions, Long COVID, neurological disease, and longevity protocols. LA patients make the trip regularly." },
      { question: "Can I do a remote consultation for FMT from Los Angeles?", answer: "Yes. We offer telehealth for initial FMT consultations. In many cases, capsule-based FMT can be shipped directly, meaning some patients complete their entire protocol without an in-person visit." },
      { question: "Why travel to Santa Barbara instead of finding an LA provider?", answer: "Experience and breadth of services. Dr. Birch has performed over 1,000 FMT procedures, 4,000+ regenerative injections, and 2,500+ ozone treatments — a volume that's very difficult to find in a single outpatient practice. We also offer all four flagship services (FMT, EBO2, PRP, TPE) in one location, which no LA-area outpatient clinic currently does." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Integrative medicine clinic serving Los Angeles patients. Specializing in FMT, EBO2/EBOO ozone therapy, PRP & stem cell injections, and therapeutic plasma exchange (TPE). 90 minutes from LA.",
      "url": "https://puretyclinic.com/locations/los-angeles",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Los Angeles" },
        { "@type": "City", "name": "Santa Monica" },
        { "@type": "City", "name": "Beverly Hills" },
        { "@type": "City", "name": "Pasadena" },
        { "@type": "City", "name": "West Hollywood" },
        { "@type": "City", "name": "Burbank" },
        { "@type": "City", "name": "Glendale" },
        { "@type": "City", "name": "Calabasas" },
        { "@type": "City", "name": "Westlake Village" },
        { "@type": "City", "name": "Thousand Oaks" }
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Fecal Microbiota Transplant (FMT)", "url": "https://puretyclinic.com/fecal-transplant" },
        { "@type": "MedicalProcedure", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "PRP & Regenerative Injections", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "Therapeutic Plasma Exchange (TPE)", "url": "https://puretyclinic.com/services/plasma-exchange" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      }
    }
  },

  "santa-barbara": {
    city: "Santa Barbara",
    state: "CA",
    headline: "Integrative Medicine in Santa Barbara, CA",
    subheadline: "Purety Family Medical Clinic — Santa Barbara's home for FMT, EBO2 ozone therapy, PRP & regenerative injections, therapeutic plasma exchange, and holistic primary care.",
    metaTitle: "Integrative Medicine Santa Barbara | Purety Clinic",
    metaDescription: "Purety Clinic in Santa Barbara — FMT, EBO2 ozone, PRP, plasma exchange, IV therapy, and holistic care. Dr. Jonathan & Dr. Dena Birch. (805) 500-8300.",
    driveTime: "In clinic",
    distance: "2323 Oak Park Ln, Suite 102",
    intro: "Purety Family Medical Clinic is Santa Barbara's leading integrative and naturopathic medical practice. Founded by Dr. Jonathan Birch NMD, RMSK and Dr. Dena Birch NMD, the clinic has served the Central Coast since 2014 — specializing in advanced therapies including FMT, EBO2 ozone therapy, PRP and regenerative injections, and therapeutic plasma exchange.",
    whyTravel: "Our Santa Barbara clinic is one of the few outpatient practices in California offering all four of these advanced therapies under one roof: FMT, EBO2 ozone therapy, PRP & biologic injections, and therapeutic plasma exchange — alongside comprehensive naturopathic primary care.",
    services: [
      { name: "FMT — Fecal Microbiota Transplant", description: "California's most experienced outpatient FMT clinic. 90%+ success rate for C. diff since 2014. Capsule, enema, and colonoscopy options. National patients welcome." },
      { name: "EBO2 / EBOO Ozone Therapy", description: "Over 2,500 ozone treatments performed. Santa Barbara's most experienced EBO2 provider — extracorporeal blood ozonation for chronic infections, autoimmune disease, and systemic inflammation." },
      { name: "PRP & Regenerative Injections", description: "Over 4,000 ultrasound-guided injections by Dr. Birch (RMSK). PRP, prolotherapy, Wharton's Jelly, and exosome injections for joint pain, arthritis, and sports injuries." },
      { name: "Therapeutic Plasma Exchange (TPE)", description: "One of the few outpatient TPE clinics in Southern California. Plasmapheresis for autoimmune conditions, Long Covid, neurological disease, and healthy aging." },
      { name: "IV Nutrient Therapy", description: "High-dose vitamin C, Myers cocktail, NAD+, chelation, and custom longevity infusions." },
      { name: "Holistic Primary Care", description: "Naturopathic medicine, bioidentical hormones, women's health, and pediatric care with Dr. Dena Birch NMD." }
    ],
    faqs: [
      { question: "Where is Purety Clinic located in Santa Barbara?", answer: "We are located at 2323 Oak Park Ln, Suite 102, Santa Barbara, CA 93105 — easily accessible from Goleta, Montecito, Carpinteria, and Ventura." },
      { question: "Does Purety Clinic offer EBO2 ozone therapy in Santa Barbara?", answer: "Yes. Dr. Jonathan Birch has performed over 2,500 ozone treatments including EBO2 (also called EBOO or ozone dialysis) at our Santa Barbara clinic. We are one of the most experienced EBO2 providers on the Central Coast." },
      { question: "Is PRP therapy available in Santa Barbara at Purety Clinic?", answer: "Yes. Dr. Jonathan Birch NMD, RMSK performs ultrasound-guided PRP, stem cell, and prolotherapy injections. He has performed over 4,000 regenerative injections and is board-registered in Musculoskeletal Sonography." },
      { question: "Do you offer therapeutic plasma exchange in Santa Barbara?", answer: "Yes. Purety Clinic is one of the few outpatient clinics in Southern California offering therapeutic plasma exchange (TPE / plasmapheresis) under the care of Dr. Jonathan Birch." },
      { question: "Do you accept new patients?", answer: "Yes, we are currently accepting new patients. Same-week appointments are often available. Call (805) 500-8300 or submit a consultation request online." },
      { question: "What insurance do you accept?", answer: "We are primarily a fee-for-service practice. We can provide superbills for patients with PPO plans who wish to seek reimbursement. We discuss all pricing transparently at the initial consultation." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Santa Barbara's leading integrative medicine clinic. Specializing in FMT, EBO2/EBOO ozone therapy, PRP & regenerative injections, and therapeutic plasma exchange. Dr. Jonathan Birch NMD, RMSK and Dr. Dena Birch NMD.",
      "url": "https://puretyclinic.com",
      "telephone": "+1-805-500-8300",
      "foundingDate": "2014",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.4483,
        "longitude": -119.7148
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" }
      ],
      "areaServed": [
        { "@type": "City", "name": "Santa Barbara" },
        { "@type": "City", "name": "Goleta" },
        { "@type": "City", "name": "Montecito" },
        { "@type": "City", "name": "Carpinteria" },
        { "@type": "City", "name": "Ventura" }
      ],
      "hasMap": "https://maps.google.com/?q=Purety+Family+Medical+Clinic+Santa+Barbara+CA",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      },
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Fecal Microbiota Transplant (FMT)", "url": "https://puretyclinic.com/fecal-transplant" },
        { "@type": "MedicalProcedure", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "PRP Therapy", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "Therapeutic Plasma Exchange (TPE)", "url": "https://puretyclinic.com/services/plasma-exchange" }
      ]
    }
  },

  "ventura": {
    city: "Ventura",
    state: "CA",
    headline: "FMT & Integrative Medicine for Ventura Patients",
    subheadline: "Purety Clinic in Santa Barbara is just 35 miles from Ventura. Specializing in FMT for C. diff, naturopathic care, and regenerative medicine.",
    metaTitle: "FMT Clinic Near Ventura CA | Purety Family Medical Clinic",
    metaDescription: "Ventura patients seeking FMT for C. diff or integrative medicine travel to Purety Clinic in Santa Barbara — just 35 miles away. Call (805) 500-8300.",
    driveTime: "Approximately 35 minutes",
    distance: "About 35 miles",
    intro: "Purety Family Medical Clinic is one of California's leading FMT and integrative medicine clinics, located in Santa Barbara just 35 miles from Ventura. We serve a large number of Ventura County patients seeking advanced care not available locally — including fecal microbiota transplantation for recurrent C. difficile, regenerative orthopedic injections, and naturopathic primary care.",
    whyTravel: "For Ventura patients, the drive to Santa Barbara is short and the level of care is unmatched locally. Many of our Ventura patients come specifically for FMT, PRP injections, or ozone therapy — treatments that are not widely available in Ventura County.",
    services: [
      { name: "FMT for C. difficile", description: "90%+ success rate. Capsule, enema, and colonoscopy options. Remote consultations available." },
      { name: "Regenerative Injections", description: "PRP, prolotherapy, prolozone, and stem cell matrix for joint pain and sports injuries." },
      { name: "Naturopathic Primary Care", description: "Root-cause medicine for chronic conditions, autoimmune disease, and hormonal issues." },
      { name: "IV Nutrient Therapy", description: "Custom IV infusions including high-dose vitamin C, Myers cocktail, and NAD+." },
      { name: "Ozone Therapy", description: "10-pass EBO2 ozone, rectal ozone, and ozone injections for chronic infections and pain." },
      { name: "Bioidentical Hormones", description: "Personalized hormone restoration programs for men and women." }
    ],
    faqs: [
      { question: "How far is Purety Clinic from Ventura?", answer: "About 35 miles — roughly a 35-minute drive up the 101 freeway. We're located at 2323 Oak Park Ln, Suite 102 in Santa Barbara." },
      { question: "Do you serve Ventura patients for FMT?", answer: "Yes. We have a large number of Ventura County patients who come to our Santa Barbara clinic for FMT. Initial consultations can be done remotely, and capsule-based FMT can often be managed without multiple office visits." },
      { question: "Can I do a telehealth consultation from Ventura?", answer: "Absolutely. We offer telehealth for initial consultations so you can confirm your candidacy and develop a treatment plan before making the trip to Santa Barbara." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "FMT and integrative medicine clinic serving Ventura County patients from our Santa Barbara location.",
      "url": "https://puretyclinic.com/locations/ventura",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Ventura" },
        { "@type": "City", "name": "Oxnard" },
        { "@type": "City", "name": "Camarillo" },
        { "@type": "City", "name": "Thousand Oaks" }
      ]
    }
  },

  "goleta": {
    city: "Goleta",
    state: "CA",
    headline: "Holistic & Integrative Medicine for Goleta Residents",
    subheadline: "Purety Family Medical Clinic serves the Goleta community from our Santa Barbara clinic — minutes away.",
    metaTitle: "Holistic Doctor Goleta CA | Purety Family Medical Clinic",
    metaDescription: "Goleta residents trust Purety Clinic for FMT, IV therapy, and regenerative medicine in Santa Barbara. Call (805) 500-8300.",
    driveTime: "Under 10 minutes",
    distance: "About 5 miles",
    intro: "Purety Family Medical Clinic is Goleta's closest integrative medicine clinic, located just minutes away in Santa Barbara. We provide Goleta residents with comprehensive naturopathic primary care, FMT, IV therapy, regenerative injections, ozone therapy, and bioidentical hormone care.",
    whyTravel: "Goleta patients have access to a full suite of integrative and naturopathic services just minutes from home — without needing to travel to Los Angeles or beyond for specialized care.",
    services: [
      { name: "Naturopathic Primary Care", description: "Comprehensive holistic medicine for the whole family." },
      { name: "FMT for C. difficile", description: "Leading FMT clinic with 90%+ success rate since 2014." },
      { name: "IV Nutrient Therapy", description: "Custom IV infusions for immune support, energy, and recovery." },
      { name: "Regenerative Injections", description: "PRP and prolotherapy for joint pain and sports injuries." },
      { name: "Bioidentical Hormones", description: "Personalized hormone restoration for men and women." },
      { name: "Pediatric Holistic Care", description: "Natural medicine for children from Dr. Dena Birch." }
    ],
    faqs: [
      { question: "How close is Purety Clinic to Goleta?", answer: "Very close — about 5 miles and under 10 minutes from central Goleta. We're at 2323 Oak Park Ln, Suite 102 in Santa Barbara." },
      { question: "Do you offer holistic pediatric care for Goleta families?", answer: "Yes. Dr. Dena Birch sees pediatric patients and provides holistic, naturopathic care for children of all ages, including newborns." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "url": "https://puretyclinic.com/locations/goleta",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [{ "@type": "City", "name": "Goleta" }]
    }
  },

  "montecito": {
    city: "Montecito",
    state: "CA",
    headline: "Premier Integrative Medicine for Montecito Residents",
    subheadline: "Purety Family Medical Clinic offers Montecito the highest standard of naturopathic and functional medicine, minutes from home.",
    metaTitle: "Holistic Doctor Montecito CA | Purety Family Medical Clinic",
    metaDescription: "Montecito residents choose Purety Clinic for FMT, integrative medicine, and regenerative care in Santa Barbara. Call (805) 500-8300.",
    driveTime: "Under 10 minutes",
    distance: "About 4 miles",
    intro: "Purety Family Medical Clinic serves Montecito's health-conscious community with a comprehensive suite of integrative and naturopathic medical services. Just minutes from Montecito, our Santa Barbara clinic provides FMT, bioidentical hormone therapy, regenerative injections, ozone therapy, and personalized naturopathic care.",
    whyTravel: "Montecito patients deserve the same level of personalized, integrative care they expect in every aspect of their lives. Our clinic offers individualized protocols, unhurried appointments, and advanced therapies not available in conventional primary care.",
    services: [
      { name: "Bioidentical Hormone Therapy", description: "Personalized, bioidentical hormone restoration for optimal health and longevity." },
      { name: "Regenerative Medicine", description: "PRP, stem cell matrix, and prolotherapy for joint health and injury recovery." },
      { name: "FMT for C. difficile", description: "California's leading outpatient FMT provider. 90%+ success rate." },
      { name: "IV Longevity Protocols", description: "NAD+, high-dose vitamin C, phosphatidylcholine, and custom longevity infusions." },
      { name: "Naturopathic Primary Care", description: "Root-cause medicine with thorough diagnostics and unhurried appointments." },
      { name: "Ozone Therapy", description: "10-pass EBO2 and targeted ozone treatments for chronic conditions." }
    ],
    faqs: [
      { question: "How close is Purety Clinic to Montecito?", answer: "About 4 miles — under 10 minutes from Montecito village. We're at 2323 Oak Park Ln, Suite 102 in Santa Barbara." },
      { question: "Do you offer concierge-style appointments?", answer: "Our appointments are significantly longer than conventional medical visits — initial consultations typically run 60–90 minutes. We take the time to understand your full health picture before recommending any treatment." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "url": "https://puretyclinic.com/locations/montecito",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [{ "@type": "City", "name": "Montecito" }]
    }
  },

  "san-luis-obispo": {
    city: "San Luis Obispo",
    state: "CA",
    headline: "FMT, EBO2 Ozone & Integrative Medicine Near San Luis Obispo",
    subheadline: "Purety Family Medical Clinic in Santa Barbara is just 75 miles south of SLO — the nearest specialist clinic for FMT, EBO2 ozone therapy, PRP injections, and therapeutic plasma exchange on the Central Coast.",
    metaTitle: "FMT & EBO2 Near San Luis Obispo CA | Purety Clinic",
    metaDescription: "San Luis Obispo patients travel 75 miles to Purety Clinic for FMT, EBO2 ozone, PRP, and plasma exchange. Dr. Jonathan Birch NMD. Call (805) 500-8300.",
    driveTime: "Approximately 75 minutes",
    distance: "About 75 miles",
    intro: "Purety Family Medical Clinic in Santa Barbara is the closest specialist clinic to San Luis Obispo offering FMT, EBO2 ozone therapy, PRP and regenerative injections, and therapeutic plasma exchange (TPE). The Central Coast has limited access to these advanced therapies, and SLO-area patients regularly make the 75-mile drive south for treatments not available locally. Many begin with a remote telehealth consultation before visiting the clinic.",
    whyTravel: "SLO and the surrounding areas — Paso Robles, Pismo Beach, Arroyo Grande — have very few providers offering FMT or EBO2. Our clinic offers all of these at a single location, with a depth of experience (1,000+ FMT procedures, 2,500+ ozone treatments) that would be difficult to find anywhere on the Central Coast.",
    services: [
      { name: "FMT — Fecal Microbiota Transplant", description: "California's most experienced outpatient FMT clinic. 90%+ success rate for C. diff. Capsule and enema options with remote consultations available — many SLO patients manage their protocol without repeat in-person visits." },
      { name: "EBO2 / EBOO Ozone Therapy", description: "2,500+ ozone treatments performed. SLO has no outpatient EBO2 providers — patients with chronic illness, Lyme, autoimmune disease, and Long COVID travel south specifically for this therapy." },
      { name: "PRP & Regenerative Injections", description: "Ultrasound-guided PRP, prolotherapy, and biologic injections for joint pain, arthritis, and sports injuries. Over 4,000 injections by Dr. Birch (RMSK)." },
      { name: "Therapeutic Plasma Exchange (TPE)", description: "One of the few outpatient TPE clinics in the region. Plasmapheresis for autoimmune conditions, Long COVID, and neurological disease." },
      { name: "IV Nutrient Therapy", description: "High-dose vitamin C, NAD+, Myers cocktail, and custom infusions." },
      { name: "Naturopathic Primary Care", description: "Root-cause medicine and holistic primary care for the whole family." }
    ],
    faqs: [
      { question: "How far is Purety Clinic from San Luis Obispo?", answer: "About 75 miles south — approximately a 75-minute drive on the 101. We're located at 2323 Oak Park Ln, Suite 102 in Santa Barbara." },
      { question: "Is there an FMT clinic in San Luis Obispo?", answer: "There are currently no outpatient FMT clinics in the San Luis Obispo area. Purety Clinic in Santa Barbara is the nearest specialist FMT provider on the Central Coast. We offer telehealth consultations and capsule-based protocols that minimize in-person visits." },
      { question: "Is EBO2 ozone therapy available near San Luis Obispo?", answer: "EBO2 (EBOO) is not available in the SLO area. Purety Clinic in Santa Barbara is the nearest qualified provider — Dr. Birch has performed over 2,500 ozone treatments including EBO2, Multipass OHT (10-Pass), and Prolozone." },
      { question: "Can I start with a telehealth consultation from SLO?", answer: "Yes. We offer remote consultations for FMT, ozone therapy, PRP, and TPE candidates. This allows us to review your case, confirm candidacy, and design your protocol before you make the trip to Santa Barbara." },
      { question: "Do you accept new patients from the Central Coast?", answer: "Yes. We welcome patients from San Luis Obispo, Paso Robles, Pismo Beach, Arroyo Grande, Grover Beach, and throughout the Central Coast." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Integrative medicine clinic serving San Luis Obispo and Central Coast patients. Nearest specialist clinic for FMT, EBO2 ozone therapy, PRP injections, and therapeutic plasma exchange (TPE).",
      "url": "https://puretyclinic.com/locations/san-luis-obispo",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "San Luis Obispo" },
        { "@type": "City", "name": "Paso Robles" },
        { "@type": "City", "name": "Pismo Beach" },
        { "@type": "City", "name": "Arroyo Grande" },
        { "@type": "City", "name": "Grover Beach" },
        { "@type": "City", "name": "Atascadero" },
        { "@type": "City", "name": "Morro Bay" }
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Fecal Microbiota Transplant (FMT)", "url": "https://puretyclinic.com/fecal-transplant" },
        { "@type": "MedicalProcedure", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "PRP & Regenerative Injections", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "Therapeutic Plasma Exchange (TPE)", "url": "https://puretyclinic.com/services/plasma-exchange" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      }
    }
  },

  "santa-maria": {
    city: "Santa Maria",
    state: "CA",
    headline: "FMT & Integrative Medicine Near Santa Maria, CA",
    subheadline: "Purety Family Medical Clinic in Santa Barbara is just 55 miles south of Santa Maria — your nearest specialist for FMT, ozone therapy, PRP, and naturopathic care.",
    metaTitle: "Integrative Medicine Near Santa Maria CA | Purety Clinic",
    metaDescription: "Santa Maria patients travel 55 miles to Purety Clinic for FMT, ozone therapy, PRP, and naturopathic care. Dr. Jonathan Birch NMD. Call (805) 500-8300.",
    driveTime: "Approximately 55 minutes",
    distance: "About 55 miles",
    intro: "Purety Family Medical Clinic is just 55 miles south of Santa Maria on the 101 freeway. For Santa Maria and Lompoc-area patients looking for FMT for C. difficile, integrative primary care, ozone therapy, or regenerative injections, our Santa Barbara clinic is the nearest specialist option — and one of the most experienced in California.",
    whyTravel: "Santa Maria and the surrounding area have limited access to advanced integrative therapies. Our Santa Barbara clinic offers FMT with a 90%+ success rate, EBO2 ozone therapy, PRP injections, and therapeutic plasma exchange — in a single location, with telehealth available so you can confirm your candidacy before making the drive.",
    services: [
      { name: "FMT — Fecal Microbiota Transplant", description: "California's most experienced outpatient FMT clinic. 90%+ success rate for C. diff since 2014. Remote consultations and capsule-based FMT available — often requiring minimal travel." },
      { name: "EBO2 / EBOO Ozone Therapy", description: "2,500+ ozone treatments. Extracorporeal blood ozonation for chronic illness, Lyme disease, autoimmune conditions, and Long COVID." },
      { name: "PRP & Regenerative Injections", description: "Ultrasound-guided PRP, prolotherapy, and biologic injections for joint pain and sports injuries. Over 4,000 injections by Dr. Birch (RMSK)." },
      { name: "Naturopathic Primary Care", description: "Root-cause holistic medicine for chronic conditions, hormonal imbalance, pediatric health, and whole-family care." },
      { name: "Therapeutic Plasma Exchange (TPE)", description: "Outpatient plasmapheresis for autoimmune disease, Long COVID, and neurological conditions." },
      { name: "IV Nutrient Therapy", description: "High-dose vitamin C, NAD+, Myers cocktail, and custom infusions." }
    ],
    faqs: [
      { question: "How far is Purety Clinic from Santa Maria?", answer: "About 55 miles south — roughly a 55-minute drive on the 101 freeway. We're at 2323 Oak Park Ln, Suite 102 in Santa Barbara." },
      { question: "Do you offer FMT for Santa Maria patients?", answer: "Yes. We serve a number of Central Coast patients from Santa Maria, Lompoc, and Guadalupe. Initial consultations can be done via telehealth, and capsule-based FMT can often be shipped directly — minimizing in-person visits." },
      { question: "Can I do a remote consultation from Santa Maria?", answer: "Absolutely. We offer telehealth consultations for FMT, ozone therapy, PRP, and TPE candidates. We'll review your case and confirm your candidacy before you make the trip." },
      { question: "Do you accept new patients from Santa Maria?", answer: "Yes. We welcome new patients from Santa Maria, Lompoc, Guadalupe, Orcutt, and the surrounding Central Coast. Call (805) 500-8300 or submit a consultation request online." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Integrative medicine clinic serving Santa Maria and Central Coast patients. FMT, ozone therapy, PRP injections, and naturopathic care. 55 miles south of Santa Maria.",
      "url": "https://puretyclinic.com/locations/santa-maria",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Santa Maria" },
        { "@type": "City", "name": "Lompoc" },
        { "@type": "City", "name": "Guadalupe" },
        { "@type": "City", "name": "Orcutt" },
        { "@type": "City", "name": "Vandenberg Village" }
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Fecal Microbiota Transplant (FMT)", "url": "https://puretyclinic.com/fecal-transplant" },
        { "@type": "MedicalProcedure", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "PRP & Regenerative Injections", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "Therapeutic Plasma Exchange (TPE)", "url": "https://puretyclinic.com/services/plasma-exchange" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      }
    }
  },

  "oxnard": {
    city: "Oxnard",
    state: "CA",
    headline: "FMT, EBO2 Ozone, PRP & Integrative Medicine Near Oxnard, CA",
    subheadline: "Purety Family Medical Clinic in Santa Barbara is just 30 miles from Oxnard — your nearest specialist for FMT, EBO2 ozone therapy, PRP injections, and therapeutic plasma exchange in Ventura County.",
    metaTitle: "FMT & EBO2 Near Oxnard CA | Purety Clinic",
    metaDescription: "Oxnard patients travel 30 miles to Purety Clinic Santa Barbara for FMT, EBO2 ozone, PRP & plasma exchange. Dr. Birch NMD, RMSK. Call (805) 500-8300.",
    driveTime: "Approximately 35 minutes",
    distance: "About 30 miles",
    intro: "Purety Family Medical Clinic in Santa Barbara is the closest specialist clinic to Oxnard offering FMT, EBO2 ozone therapy, PRP and regenerative injections, and therapeutic plasma exchange. Just 30 miles up the 101 freeway, our clinic provides Oxnard and Port Hueneme patients with advanced integrative therapies not available locally. Many patients begin with a telehealth consultation and make the short drive only when in-person treatment is required.",
    whyTravel: "Oxnard is Ventura County's largest city and has limited access to the specialized therapies we offer. The 30-mile drive to Santa Barbara is one of the shortest on our patient roster — and the level of experience (1,000+ FMT procedures, 4,000+ regenerative injections, 2,500+ ozone treatments) is among the highest available anywhere in Southern California.",
    services: [
      { name: "FMT — Fecal Microbiota Transplant", description: "California's most experienced outpatient FMT clinic. 90%+ success rate for recurrent C. diff since 2014. Capsule, enema, and colonoscopy options. Remote consultations available — many Oxnard patients complete capsule protocols with minimal in-person visits." },
      { name: "EBO2 / EBOO Ozone Therapy", description: "2,500+ ozone treatments performed. Extracorporeal blood ozonation for chronic illness, Lyme disease, autoimmune conditions, mold illness, and Long COVID. No comparable outpatient EBO2 clinic in Ventura County." },
      { name: "PRP & Regenerative Injections", description: "Ultrasound-guided PRP, prolotherapy, and biologic injections for joint pain, arthritis, tendinopathy, and sports injuries. Over 4,000 procedures by Dr. Birch (RMSK)." },
      { name: "Therapeutic Plasma Exchange (TPE)", description: "One of the few outpatient therapeutic plasma exchange clinics serving Ventura County. Plasmapheresis for autoimmune disease, Long COVID, POTS, and neurological conditions." },
      { name: "IV Nutrient Therapy", description: "High-dose vitamin C, NAD+, Myers cocktail, glutathione, and custom longevity infusions." },
      { name: "Naturopathic Primary Care", description: "Root-cause integrative medicine for whole families, including women's health and pediatric care." }
    ],
    faqs: [
      { question: "How far is Purety Clinic from Oxnard?", answer: "About 30 miles north — roughly a 35-minute drive on the 101 freeway. We're at 2323 Oak Park Ln, Suite 102 in Santa Barbara, CA." },
      { question: "Is there an FMT clinic in Oxnard or Ventura County?", answer: "There are currently no outpatient FMT specialist clinics in Oxnard or greater Ventura County. Purety Clinic in Santa Barbara is the nearest qualified FMT provider — with over 1,000 FMT procedures performed since 2014 and a 90%+ success rate for recurrent C. difficile." },
      { question: "Do you offer EBO2 ozone therapy for Oxnard patients?", answer: "Yes. Dr. Jonathan Birch has performed over 2,500 ozone treatments including EBO2 (EBOO). Qualified outpatient EBO2 providers are rare in Ventura County — many Oxnard patients make the short drive to Santa Barbara specifically for this therapy." },
      { question: "Can I do a telehealth consultation from Oxnard?", answer: "Yes. We offer remote consultations for FMT, ozone therapy, PRP, and TPE candidates. You can confirm your candidacy, review your history, and develop a treatment plan from home before making the trip." },
      { question: "Do you offer PRP injections near Oxnard?", answer: "Dr. Jonathan Birch NMD, RMSK performs ultrasound-guided PRP, prolotherapy, and biologic injections at our Santa Barbara clinic — just 30 miles from Oxnard. He has performed over 4,000 regenerative procedures and is board-certified in musculoskeletal sonography." },
      { question: "Do you accept new patients from Oxnard?", answer: "Yes. We welcome new patients from Oxnard, Port Hueneme, Camarillo, Ventura, and throughout Ventura County. Call (805) 500-8300 or submit a consultation request online." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Integrative medicine clinic serving Oxnard and Ventura County patients. Nearest specialist for FMT, EBO2 ozone therapy, PRP injections, and therapeutic plasma exchange (TPE). 30 miles north on the 101.",
      "url": "https://puretyclinic.com/locations/oxnard",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Oxnard" },
        { "@type": "City", "name": "Port Hueneme" },
        { "@type": "City", "name": "Camarillo" },
        { "@type": "City", "name": "Ventura" },
        { "@type": "City", "name": "Fillmore" },
        { "@type": "City", "name": "Santa Paula" }
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Fecal Microbiota Transplant (FMT)", "url": "https://puretyclinic.com/fecal-transplant" },
        { "@type": "MedicalProcedure", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "PRP & Regenerative Injections", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "Therapeutic Plasma Exchange (TPE)", "url": "https://puretyclinic.com/services/plasma-exchange" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      }
    }
  },

  "thousand-oaks": {
    city: "Thousand Oaks",
    state: "CA",
    headline: "FMT, EBO2 Ozone, PRP & Integrative Medicine Near Thousand Oaks, CA",
    subheadline: "Purety Family Medical Clinic in Santa Barbara is 45 miles from Thousand Oaks — the nearest outpatient specialist for FMT, EBO2/EBOO ozone therapy, PRP injections, and therapeutic plasma exchange in the Conejo Valley.",
    metaTitle: "FMT & EBO2 Near Thousand Oaks CA | Purety Clinic",
    metaDescription: "Thousand Oaks patients travel 45 miles to Purety Clinic Santa Barbara for FMT, EBO2 ozone, PRP & plasma exchange. Dr. Birch NMD, RMSK. (805) 500-8300.",
    driveTime: "Approximately 50 minutes",
    distance: "About 45 miles",
    intro: "Purety Family Medical Clinic in Santa Barbara is the nearest outpatient specialist clinic to Thousand Oaks offering FMT, EBO2 ozone therapy, ultrasound-guided PRP, and therapeutic plasma exchange under one roof. The Conejo Valley — including Thousand Oaks, Westlake Village, and Calabasas — has a large health-conscious population with limited local access to these advanced therapies. Many patients begin with a telehealth consultation before making the 45-mile drive up the 101.",
    whyTravel: "Thousand Oaks patients have access to some excellent conventional medicine locally but very little in the way of FMT, extracorporeal ozone therapy, or therapeutic plasma exchange. Our Santa Barbara clinic consolidates all four flagship therapies in one location — with procedural volume and credentials that are difficult to match anywhere in California.",
    services: [
      { name: "FMT — Fecal Microbiota Transplant", description: "California's most experienced outpatient FMT clinic. 90%+ success rate for recurrent C. diff. Capsule protocols often require minimal travel — many Conejo Valley patients complete treatment with just 1–2 in-person visits." },
      { name: "EBO2 / EBOO Ozone Therapy", description: "2,500+ ozone treatments performed. EBO2 extracorporeal blood ozonation for Lyme disease, autoimmune conditions, mold illness, Long COVID, and chronic infections. The Conejo Valley has no outpatient EBO2 providers." },
      { name: "PRP & Stem Cell Injections", description: "Ultrasound-guided PRP, Wharton's Jelly, exosome injections, and prolotherapy for joint pain, arthritis, and sports injuries. Over 4,000 procedures by Dr. Birch (RMSK) — the RMSK credential is rare in naturopathic medicine." },
      { name: "Therapeutic Plasma Exchange (TPE)", description: "Outpatient plasmapheresis for autoimmune disease, Long COVID, POTS, neurological conditions, and longevity protocols. One of the few outpatient TPE clinics in Southern California." },
      { name: "IV Nutrient Therapy & NAD+", description: "High-dose NAD+, vitamin C, Myers cocktail, phosphatidylcholine, and personalized longevity infusions." }
    ],
    faqs: [
      { question: "How far is Purety Clinic from Thousand Oaks?", answer: "About 45 miles — roughly a 50-minute drive north on the 101 freeway. We're at 2323 Oak Park Ln, Suite 102 in Santa Barbara, CA." },
      { question: "Is there an EBO2 ozone therapy clinic near Thousand Oaks?", answer: "No qualified outpatient EBO2 (EBOO) providers are currently operating in the Thousand Oaks or Conejo Valley area. Purety Clinic in Santa Barbara is the nearest outpatient EBO2 clinic — Dr. Birch has performed over 2,500 ozone treatments." },
      { question: "Do you offer FMT for Thousand Oaks patients?", answer: "Yes. We serve patients from Thousand Oaks, Westlake Village, Calabasas, and the broader Conejo Valley. Capsule-based FMT can often be shipped directly, minimizing in-person visits for patients who can't easily make the drive." },
      { question: "Does Dr. Birch offer PRP injections for Thousand Oaks patients?", answer: "Yes. Dr. Jonathan Birch NMD, RMSK performs ultrasound-guided PRP injections at our Santa Barbara clinic. The 45-mile drive from Thousand Oaks is well worth it for many patients who need the precision of RMSK-certified sonographic guidance." },
      { question: "Can I start with a telehealth consultation from Thousand Oaks?", answer: "Absolutely. We offer remote consultations for FMT, EBO2, PRP, and TPE. Most patients from Thousand Oaks complete their initial consultation by telehealth, then visit in person only when hands-on treatment is required." },
      { question: "Do you accept new patients from the Conejo Valley?", answer: "Yes. We welcome new patients from Thousand Oaks, Westlake Village, Calabasas, Agoura Hills, Oak Park, and throughout the Conejo Valley. Call (805) 500-8300 or submit a consultation request online." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Integrative medicine clinic serving Thousand Oaks, Westlake Village, and Conejo Valley patients. Nearest outpatient specialist for FMT, EBO2 ozone therapy, PRP injections, and therapeutic plasma exchange. 45 miles on the 101.",
      "url": "https://puretyclinic.com/locations/thousand-oaks",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Thousand Oaks" },
        { "@type": "City", "name": "Westlake Village" },
        { "@type": "City", "name": "Calabasas" },
        { "@type": "City", "name": "Agoura Hills" },
        { "@type": "City", "name": "Oak Park" },
        { "@type": "City", "name": "Simi Valley" }
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Fecal Microbiota Transplant (FMT)", "url": "https://puretyclinic.com/fecal-transplant" },
        { "@type": "MedicalProcedure", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "PRP & Regenerative Injections", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "Therapeutic Plasma Exchange (TPE)", "url": "https://puretyclinic.com/services/plasma-exchange" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      }
    }
  },

  "santa-monica": {
    city: "Santa Monica",
    state: "CA",
    headline: "FMT, EBO2 Ozone, PRP & Therapeutic Plasma Exchange Near Santa Monica",
    subheadline: "Purety Family Medical Clinic in Santa Barbara is 95 miles from Santa Monica — one of California's most experienced outpatient clinics for FMT, EBO2/EBOO ozone therapy, PRP, and therapeutic plasma exchange (TPE).",
    metaTitle: "FMT & EBO2 Near Santa Monica CA | Purety Clinic",
    metaDescription: "Santa Monica patients travel 95 miles to Purety Clinic Santa Barbara for FMT, EBO2 ozone, PRP & plasma exchange. Dr. Birch NMD, RMSK. (805) 500-8300.",
    driveTime: "Approximately 90 minutes",
    distance: "About 95 miles",
    intro: "Santa Monica and the West LA health community have access to many excellent practitioners, but outpatient FMT, EBO2 extracorporeal ozone therapy, and therapeutic plasma exchange are difficult to find at any single location. Purety Family Medical Clinic in Santa Barbara consolidates all four of these advanced therapies under one roof — 95 miles up the 101 or Pacific Coast Highway — with a depth of procedural experience that is genuinely rare anywhere in California.",
    whyTravel: "West LA patients are accustomed to seeking the best available specialists, regardless of location. Dr. Jonathan Birch has performed over 1,000 FMT procedures, 4,000+ regenerative injections, and 2,500+ ozone treatments — a combination of volume and breadth that few outpatient integrative clinics in the state can offer. Initial telehealth consultations are available, and many protocols can be designed to minimize in-person trips.",
    services: [
      { name: "FMT — Fecal Microbiota Transplant", description: "California's most experienced outpatient FMT clinic. 90%+ success rate for recurrent C. difficile. Capsule, enema, and colonoscopy options. Remote consultations available — Santa Monica patients can often complete capsule-based protocols with a single in-person visit." },
      { name: "EBO2 / EBOO Ozone Therapy", description: "2,500+ ozone treatments. Extracorporeal blood ozonation with UV irradiation for Lyme, Long COVID, autoimmune disease, mold illness, and chronic infections. Qualified outpatient EBO2 providers are rare in the West LA area." },
      { name: "PRP & Stem Cell Injections", description: "Ultrasound-guided PRP, Wharton's Jelly, exosome injections, and prolotherapy by Dr. Birch (RMSK). 4,000+ procedures. The RMSK credential ensures every injection is placed under real-time imaging guidance." },
      { name: "Therapeutic Plasma Exchange (TPE)", description: "Outpatient plasmapheresis for autoimmune conditions, Long COVID, POTS, MS, Guillain-Barré, and neurodegeneration. One of the few outpatient TPE clinics in Southern California." },
      { name: "IV Nutrient Therapy & NAD+", description: "High-dose NAD+, vitamin C, phosphatidylcholine, Myers cocktail, and custom longevity infusions." },
      { name: "Remote Consultations", description: "Telehealth for initial consultations across all services. Confirm your candidacy and develop your protocol before making the trip from Santa Monica." }
    ],
    faqs: [
      { question: "How far is Purety Clinic from Santa Monica?", answer: "About 90 miles — roughly a 90-minute drive on the 101 freeway (or via Pacific Coast Highway). We're at 2323 Oak Park Ln, Suite 102 in Santa Barbara. We recommend scheduling morning appointments to make the most of the trip." },
      { question: "Is there an EBO2 ozone clinic near Santa Monica or West LA?", answer: "Qualified outpatient EBO2 providers are rare in the greater Los Angeles area. Purety Clinic in Santa Barbara is one of the most experienced options in Southern California, with Dr. Birch having performed over 2,500 ozone treatments." },
      { question: "Can I get FMT near Santa Monica?", answer: "Purety Clinic in Santa Barbara is one of the most experienced outpatient FMT clinics in California — 90 minutes from Santa Monica. We offer capsule-based FMT that can often be shipped directly, meaning many patients complete their protocol without multiple in-person visits. We also offer telehealth for the initial consultation." },
      { question: "Do you offer therapeutic plasma exchange near Los Angeles?", answer: "Yes. Purety Clinic is one of the few outpatient therapeutic plasma exchange (TPE) clinics in Southern California. We see patients from Santa Monica, West LA, Beverly Hills, and throughout Los Angeles for TPE protocols." },
      { question: "Can I do a telehealth consultation from Santa Monica?", answer: "Yes. We offer telehealth for initial consultations for all our services. Santa Monica patients frequently use telehealth to confirm candidacy and design a treatment plan before making the drive to Santa Barbara." },
      { question: "Why travel to Santa Barbara instead of finding an LA provider?", answer: "Breadth and volume. We offer FMT, EBO2, PRP, and TPE under one roof — a combination that is extremely rare in the LA area. Dr. Birch's procedural volume (1,000+ FMT, 4,000+ injections, 2,500+ ozone) is among the highest in any single outpatient integrative practice in California." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Integrative medicine clinic serving Santa Monica, West LA, and coastal Los Angeles patients. Nearest outpatient specialist for FMT, EBO2 ozone therapy, PRP injections, and therapeutic plasma exchange. 90 miles on the 101.",
      "url": "https://puretyclinic.com/locations/santa-monica",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Santa Monica" },
        { "@type": "City", "name": "West Hollywood" },
        { "@type": "City", "name": "Beverly Hills" },
        { "@type": "City", "name": "Brentwood" },
        { "@type": "City", "name": "Pacific Palisades" },
        { "@type": "City", "name": "Malibu" },
        { "@type": "City", "name": "Marina del Rey" },
        { "@type": "City", "name": "Culver City" }
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Fecal Microbiota Transplant (FMT)", "url": "https://puretyclinic.com/fecal-transplant" },
        { "@type": "MedicalProcedure", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "PRP & Regenerative Injections", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "Therapeutic Plasma Exchange (TPE)", "url": "https://puretyclinic.com/services/plasma-exchange" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      }
    }
  },

  "malibu": {
    city: "Malibu",
    state: "CA",
    headline: "FMT, EBO2 Ozone, PRP & Integrative Medicine Near Malibu, CA",
    subheadline: "Purety Family Medical Clinic in Santa Barbara is 70 miles from Malibu — via the 101 or Pacific Coast Highway. One of California's most experienced clinics for FMT, EBO2 ozone therapy, PRP, and therapeutic plasma exchange.",
    metaTitle: "FMT & EBO2 Near Malibu CA | Purety Clinic",
    metaDescription: "Malibu patients travel 70 miles to Purety Clinic for FMT, EBO2 ozone, PRP & plasma exchange. Dr. Birch NMD, RMSK. (805) 500-8300.",
    driveTime: "Approximately 70 minutes",
    distance: "About 70 miles",
    intro: "Purety Family Medical Clinic in Santa Barbara is a natural destination for Malibu patients — reachable via Pacific Coast Highway or the 101 freeway in about 70 minutes. The Malibu community's deep commitment to health and wellness makes it one of our most aligned patient populations. We offer FMT, EBO2 extracorporeal ozone therapy, PRP and biologic injections, and therapeutic plasma exchange — all in one clinic, with telehealth available for initial assessments.",
    whyTravel: "Malibu patients already prioritize the best available care regardless of where it is. Dr. Birch's credentials — NMD, RMSK, 1,000+ FMT procedures, 4,000+ regenerative injections, 2,500+ ozone treatments — represent a depth of integrative specialty experience that is genuinely difficult to find anywhere in California, let alone the LA area.",
    services: [
      { name: "FMT — Fecal Microbiota Transplant", description: "California's most experienced outpatient FMT clinic. 90%+ success rate for recurrent C. difficile. Capsule-based protocols available with minimal in-person visits. Remote consultations for Malibu patients." },
      { name: "EBO2 / EBOO Ozone Therapy", description: "2,500+ ozone treatments. Extracorporeal blood ozonation for Lyme disease, autoimmune conditions, mold toxicity, Long COVID, and chronic infections. Qualified outpatient EBO2 providers are rare in the Malibu and PCH corridor." },
      { name: "PRP & Regenerative Injections", description: "Ultrasound-guided PRP, Wharton's Jelly, and exosome injections by Dr. Birch (RMSK). 4,000+ procedures. Precision imaging guidance at every injection — a standard rarely found elsewhere." },
      { name: "Therapeutic Plasma Exchange (TPE)", description: "Outpatient plasmapheresis for autoimmune disease, Long COVID, POTS, and healthy aging/longevity protocols. One of the few outpatient TPE clinics in Southern California." },
      { name: "NAD+ IV & Longevity Infusions", description: "High-dose NAD+, phosphatidylcholine, vitamin C, and custom longevity protocols aligned with the Malibu community's performance and wellness goals." }
    ],
    faqs: [
      { question: "How do I get from Malibu to Purety Clinic in Santa Barbara?", answer: "Two routes work well: Pacific Coast Highway (PCH) north to Ventura, then the 101 north to Santa Barbara — about 70 miles and 70 minutes in light traffic. Alternatively, take the 101 inland via Thousand Oaks for a slightly different route. We recommend scheduling a morning appointment to enjoy the drive." },
      { question: "Is EBO2 ozone therapy available near Malibu?", answer: "No qualified outpatient EBO2 providers currently operate in the Malibu or PCH corridor. Purety Clinic in Santa Barbara is the nearest qualified EBO2 specialist — Dr. Birch has performed over 2,500 ozone treatments including EBO2, EBOO, and multipass protocols." },
      { question: "Can I get an FMT consultation without traveling to Santa Barbara?", answer: "Yes. We offer telehealth for initial consultations, and capsule-based FMT can often be shipped directly — meaning some Malibu patients complete their entire C. diff protocol without an in-person visit." },
      { question: "Do you offer PRP injections for Malibu patients?", answer: "Yes. Dr. Jonathan Birch NMD, RMSK performs ultrasound-guided PRP and regenerative injections at our Santa Barbara clinic. The RMSK credential ensures every injection is placed under real-time musculoskeletal imaging — a level of precision that is rare and meaningful for outcomes." },
      { question: "Do you accept new patients from Malibu?", answer: "Yes. We welcome new patients from Malibu, Point Dume, Pacific Palisades, Topanga, and the surrounding area. Call (805) 500-8300 or submit a consultation request online to get started." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Integrative medicine clinic serving Malibu and the PCH corridor. Nearest outpatient specialist for FMT, EBO2 ozone therapy, PRP injections, and therapeutic plasma exchange. 70 miles via PCH or 101.",
      "url": "https://puretyclinic.com/locations/malibu",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Malibu" },
        { "@type": "City", "name": "Pacific Palisades" },
        { "@type": "City", "name": "Topanga" },
        { "@type": "City", "name": "Point Dume" },
        { "@type": "City", "name": "Zuma Beach" },
        { "@type": "City", "name": "Calabasas" }
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Fecal Microbiota Transplant (FMT)", "url": "https://puretyclinic.com/fecal-transplant" },
        { "@type": "MedicalProcedure", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "PRP & Regenerative Injections", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "Therapeutic Plasma Exchange (TPE)", "url": "https://puretyclinic.com/services/plasma-exchange" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      }
    }
  },

  "bakersfield": {
    city: "Bakersfield",
    state: "CA",
    headline: "FMT, EBO2 Ozone, PRP & Integrative Medicine for Bakersfield, CA",
    subheadline: "Purety Family Medical Clinic in Santa Barbara is the nearest outpatient specialist for FMT, EBO2 ozone therapy, PRP, and therapeutic plasma exchange — serving Bakersfield and the Central Valley.",
    metaTitle: "FMT & EBO2 Near Bakersfield CA | Purety Clinic",
    metaDescription: "Bakersfield patients travel 2 hours to Purety Clinic for FMT, EBO2 ozone, PRP & plasma exchange. No local providers. Dr. Birch NMD. (805) 500-8300.",
    driveTime: "Approximately 2 hours",
    distance: "About 105 miles",
    intro: "Purety Family Medical Clinic in Santa Barbara is one of the most accessible advanced integrative medicine clinics for Bakersfield and Central Valley patients. The drive west on the 58 to the 101 takes about 2 hours and connects Bakersfield to a clinic that offers FMT, EBO2 ozone therapy, PRP and regenerative injections, and therapeutic plasma exchange — all under one roof. These are therapies with essentially no equivalent providers in Kern County.",
    whyTravel: "The Central Valley has very limited access to advanced integrative therapies. For Bakersfield patients with recurrent C. difficile, chronic illness requiring EBO2, or musculoskeletal injuries needing precision PRP, the 2-hour drive to Santa Barbara is often the most practical option. Telehealth consultations minimize the number of in-person trips required, and capsule-based FMT can frequently be shipped directly.",
    services: [
      { name: "FMT — Fecal Microbiota Transplant", description: "California's most experienced outpatient FMT clinic. 90%+ success rate for recurrent C. diff since 2014. Capsule-based protocols can often be shipped to Bakersfield patients directly — minimizing in-person visits. No comparable FMT clinic is available in Kern County." },
      { name: "EBO2 / EBOO Ozone Therapy", description: "2,500+ ozone treatments. EBO2 extracorporeal blood ozonation for Lyme disease, mold toxicity, autoimmune conditions, Long COVID, and chronic infections. No EBO2 providers are currently available in Bakersfield or Kern County." },
      { name: "PRP & Regenerative Injections", description: "Ultrasound-guided PRP, prolotherapy, and biologic injections for joint pain, arthritis, tendinopathy, and sports injuries. Over 4,000 procedures by Dr. Birch (RMSK). Precision guidance that is unavailable locally." },
      { name: "Therapeutic Plasma Exchange (TPE)", description: "Outpatient plasmapheresis for autoimmune disease, Long COVID, POTS, and neurological conditions. No equivalent outpatient TPE clinic is available in the Central Valley." },
      { name: "IV Nutrient Therapy", description: "High-dose vitamin C, NAD+, Myers cocktail, and custom infusions for immune support, energy, and recovery." },
      { name: "Naturopathic Primary Care", description: "Root-cause integrative medicine and naturopathic care — available via telehealth for Central Valley patients who cannot make frequent in-person visits." }
    ],
    faqs: [
      { question: "How far is Purety Clinic from Bakersfield?", answer: "About 105 miles — approximately a 2-hour drive. The most direct route is west on the 58 freeway to the 101, then north to Santa Barbara. We're at 2323 Oak Park Ln, Suite 102. We recommend scheduling a morning appointment and pairing it with a coastal detour on the way back." },
      { question: "Is there an FMT clinic in Bakersfield or Kern County?", answer: "There are currently no outpatient FMT specialist clinics in Bakersfield or Kern County. Purety Clinic in Santa Barbara is the nearest qualified provider — with over 1,000 FMT procedures and a 90%+ success rate for C. difficile. Importantly, capsule-based FMT can often be shipped directly, so Bakersfield patients sometimes complete their entire protocol without multiple trips." },
      { question: "Is EBO2 ozone therapy available near Bakersfield?", answer: "EBO2 (EBOO) is not available in Bakersfield or the Central Valley. Purety Clinic in Santa Barbara is the nearest qualified outpatient EBO2 provider — 2 hours west via the 58/101. Dr. Birch has performed over 2,500 ozone treatments." },
      { question: "Can I do a telehealth consultation from Bakersfield?", answer: "Yes. We offer remote consultations for FMT, ozone therapy, PRP, and TPE candidates. For Bakersfield patients, telehealth is especially valuable — you can confirm your candidacy, review your case, and design a treatment plan before committing to the 2-hour drive." },
      { question: "Do you accept new patients from Bakersfield and Kern County?", answer: "Yes. We welcome new patients from Bakersfield, Tehachapi, Delano, Ridgecrest, and throughout Kern County. Call (805) 500-8300 or submit an online consultation request to get started." },
      { question: "What treatments can be done remotely to minimize trips from Bakersfield?", answer: "FMT consultations and capsule-based protocols, naturopathic care follow-ups, and treatment planning for all services can be done via telehealth. The only treatments that require in-person visits are EBO2 (infusion-based), PRP injections, TPE, and IV therapy." }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Purety Family Medical Clinic",
      "description": "Integrative medicine clinic serving Bakersfield and Kern County patients. Nearest outpatient specialist for FMT, EBO2 ozone therapy, PRP injections, and therapeutic plasma exchange. 2 hours via the 58/101.",
      "url": "https://puretyclinic.com/locations/bakersfield",
      "telephone": "+1-805-500-8300",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2323 Oak Park Ln, Suite 102",
        "addressLocality": "Santa Barbara",
        "addressRegion": "CA",
        "postalCode": "93105",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Bakersfield" },
        { "@type": "City", "name": "Tehachapi" },
        { "@type": "City", "name": "Delano" },
        { "@type": "City", "name": "Ridgecrest" },
        { "@type": "City", "name": "Taft" },
        { "@type": "City", "name": "Wasco" },
        { "@type": "City", "name": "McFarland" }
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Fecal Microbiota Transplant (FMT)", "url": "https://puretyclinic.com/fecal-transplant" },
        { "@type": "MedicalProcedure", "name": "EBO2 / EBOO Ozone Therapy", "url": "https://puretyclinic.com/ebo2-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "PRP & Regenerative Injections", "url": "https://puretyclinic.com/prp-santa-barbara" },
        { "@type": "MedicalProcedure", "name": "Therapeutic Plasma Exchange (TPE)", "url": "https://puretyclinic.com/services/plasma-exchange" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "77",
        "bestRating": "5"
      }
    }
  }
};

const SERVICE_LINKS: Record<string, string> = {
  "FMT — Fecal Microbiota Transplant": "/fecal-transplant",
  "FMT for C. difficile": "/fecal-transplant",
  "FMT for Recurrent C. difficile": "/fecal-transplant",
  "FMT for recurrent C. difficile": "/fecal-transplant",
  "EBO2 / EBOO Ozone Therapy": "/ebo2-santa-barbara",
  "Ozone Therapy": "/services/ozone-therapy",
  "PRP & Regenerative Injections": "/prp-santa-barbara",
  "PRP & Stem Cell Injections": "/prp-santa-barbara",
  "Regenerative Injections": "/prp-santa-barbara",
  "Regenerative Medicine": "/prp-santa-barbara",
  "Therapeutic Plasma Exchange (TPE)": "/services/plasma-exchange",
  "Therapeutic Plasma Exchange": "/services/plasma-exchange",
  "IV Nutrient Therapy": "/services/iv-therapy",
  "IV Longevity Protocols": "/services/iv-therapy",
  "Bioidentical Hormones": "/services/hormone-replacement",
  "Bioidentical Hormone Therapy": "/services/hormone-replacement",
  "Holistic Primary Care": "/services/naturopathic",
  "Naturopathic Primary Care": "/services/naturopathic",
  "Naturopathic Medicine": "/services/naturopathic",
  "Pediatric Holistic Care": "/services/naturopathic",
  "Integrative Oncology Support": "/services/cancer-support",
};

export default function LocationPage({ params }: { params: { city: string } }) {
  const cityKey = params.city.toLowerCase();
  const location = locations[cityKey];

  useEffect(() => {
    if (!location) return;
    document.title = location.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", location.metaDescription);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "location-schema";
    script.text = JSON.stringify(location.schema);
    document.head.appendChild(script);
    return () => { document.getElementById("location-schema")?.remove(); };
  }, [location]);

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col bg-background font-sans">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl mb-4">Location Not Found</h1>
            <Link href="/" className="text-primary font-bold hover:underline">Back to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-24 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10 max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <MapPin className="w-4 h-4" />
                <span>Serving {location.city}, {location.state}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                {location.headline}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
                {location.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 font-bold rounded-full px-8" asChild>
                  <a href="#contact-form" data-testid="button-book-consultation-location" onClick={(e: React.MouseEvent) => { e.preventDefault(); const el = document.querySelector('#contact-form'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 20; window.scrollTo({ top: y, behavior: 'smooth' }); } }}>
                    Request Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold rounded-full px-8" asChild>
                  <a href="tel:+18055008300" data-testid="link-phone-location">
                    <Phone className="w-4 h-4 mr-2" /> (805) 500-8300
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Drive info banner */}
        <section className="bg-accent/10 border-y border-accent/20 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-bold text-foreground">
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-accent" />
                <span>From {location.city}: {location.driveTime}</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span>2323 Oak Park Ln, Suite 102, Santa Barbara, CA 93105</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-gray-300" />
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+18055008300" className="hover:text-primary">(805) 500-8300</a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <p className="text-xl text-foreground/80 leading-relaxed mb-6">{location.intro}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{location.whyTravel}</p>
            </FadeIn>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3 text-center">
                Services Available to {location.city} Patients
              </h2>
              <p className="text-muted-foreground text-center mb-12 text-lg">
                All services are provided at our Santa Barbara clinic.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.services.map((service, i) => {
                  const href = SERVICE_LINKS[service.name];
                  const card = (
                    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col ${href ? "hover:border-primary/30 hover:shadow-md transition-all cursor-pointer" : ""}`}>
                      <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                      <h3 className="font-bold text-foreground text-lg mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                      {href && (
                        <span className="inline-flex items-center gap-1 text-primary text-xs font-bold mt-4">
                          Learn more <ArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  );
                  return href
                    ? <Link key={i} href={href} data-testid={`service-link-${i}`}>{card}</Link>
                    : <div key={i}>{card}</div>;
                })}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FMT CTA for LA/Ventura */}
        {(cityKey === "los-angeles" || cityKey === "ventura") && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <FadeIn>
                <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10 text-center">
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                    California's Most Experienced FMT Clinic
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                    Over 1,000 patients treated since 2014. 90%+ success rate for recurrent C. difficile.
                    Multiple delivery options — capsules, enema, and colonoscopy. Remote consultations available
                    for {location.city} patients before your first visit.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8" asChild>
                      <Link href="/fecal-transplant" data-testid="link-fmt-page-location">
                        Learn About FMT <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 font-bold rounded-full px-8" asChild>
                      <a href="tel:+18055008300">Call (805) 500-8300</a>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-center mb-10 text-lg">
                From {location.city} patients considering Purety Clinic
              </p>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
                {location.faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Directions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                    Getting Here from {location.city}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We're located at <strong>2323 Oak Park Ln, Suite 102, Santa Barbara, CA 93105</strong> — {location.distance} from {location.city}, approximately {location.driveTime} by car.
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/${encodeURIComponent(location.city + ", CA")}/2323+Oak+Park+Ln+Suite+102+Santa+Barbara+CA+93105`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-bold text-primary hover:text-accent transition-colors"
                    data-testid="link-directions"
                  >
                    Get Directions <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 aspect-video">
                  <iframe
                    title="Purety Family Medical Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.7!2d-119.7432!3d34.4500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e914e6a3a3a3a3%3A0x1234567890abcdef!2s2323+Oak+Park+Ln%2C+Santa+Barbara%2C+CA+93105!5e0!3m2!1sen!2sus!4v1680000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactCTA
          heading={`Ready to Visit from ${location.city}?`}
          subheading="Start with a remote consultation — we'll confirm your candidacy and plan your visit before you make the drive."
          formSource={`Location Page - ${location.city}`}
        />
      </main>

      <Footer />
    </div>
  );
}
