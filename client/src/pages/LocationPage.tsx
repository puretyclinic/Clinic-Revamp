import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Phone, CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
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
    metaTitle: "FMT · EBO2 Ozone · PRP · Therapeutic Plasma Exchange Near Los Angeles | Purety Clinic",
    metaDescription: "Los Angeles patients travel to Purety Clinic in Santa Barbara (90 min) for FMT, EBO2/EBOO ozone therapy, PRP & stem cell injections, and therapeutic plasma exchange (TPE). Dr. Jonathan Birch NMD, RMSK. Call (805) 500-8300.",
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
    metaTitle: "Integrative Medicine Santa Barbara | FMT · EBO2 · PRP · TPE | Purety Clinic",
    metaDescription: "Purety Family Medical Clinic in Santa Barbara offers FMT, EBO2/EBOO ozone therapy, PRP & stem cell injections, therapeutic plasma exchange, IV therapy, and holistic primary care. Dr. Jonathan & Dr. Dena Birch. Call (805) 500-8300.",
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
    metaDescription: "Goleta residents trust Purety Family Medical Clinic for naturopathic care, FMT, IV therapy, and regenerative medicine in nearby Santa Barbara. Call (805) 500-8300.",
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
    metaDescription: "Montecito residents choose Purety Family Medical Clinic for integrative medicine, FMT, bioidentical hormones, and regenerative care in nearby Santa Barbara. Call (805) 500-8300.",
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
    metaTitle: "FMT & EBO2 Ozone Therapy Near San Luis Obispo CA | Purety Clinic",
    metaDescription: "San Luis Obispo patients travel to Purety Clinic in Santa Barbara (75 miles) for FMT, EBO2/EBOO ozone therapy, PRP injections, and therapeutic plasma exchange. Dr. Jonathan Birch NMD. Call (805) 500-8300.",
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
    metaTitle: "FMT & Integrative Medicine Near Santa Maria CA | Purety Family Medical Clinic",
    metaDescription: "Santa Maria patients seeking FMT for C. diff, ozone therapy, PRP injections, or naturopathic care travel to Purety Clinic in Santa Barbara — just 55 miles away. Dr. Jonathan Birch NMD. Call (805) 500-8300.",
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
  }
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
                {location.services.map((service, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                    <h3 className="font-bold text-foreground text-lg mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                ))}
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
