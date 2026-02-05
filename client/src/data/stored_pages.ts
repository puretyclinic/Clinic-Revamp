export interface StoredPage {
  id: string;
  title: string;
  slug: string;
  description: string;
  content_sections: {
    heading: string;
    body: string;
  }[];
  status: "draft" | "archived";
}

export const storedPages: StoredPage[] = [
  {
    id: "testimonials-page",
    title: "Patient Success Stories",
    slug: "/testimonials",
    description: "Real stories from patients who have found healing at Purety Family Medical Clinic.",
    status: "draft",
    content_sections: [
      {
        heading: "Life-Changing Relief for C. Diff",
        body: "After three rounds of antibiotics failed, I was losing hope. Dr. Birch's FMT protocol was a miracle. Within 24 hours, I felt like myself again. I cannot thank the team enough."
      },
      {
        heading: "Finally Pain-Free",
        body: "I was told I needed knee surgery. Dr. Jonathan suggested PRP first. Three sessions later, I'm back to hiking without pain. The regenerative approach really works."
      },
      {
        heading: "Compassionate Care",
        body: "Dr. Dena listens like no other doctor I've met. She treats the whole person, not just the symptoms. My thyroid issues are finally under control naturally."
      }
    ]
  },
  {
    id: "faq-page",
    title: "Frequently Asked Questions",
    slug: "/faqs",
    description: "Answers to common questions about our clinic, insurance, and treatments.",
    status: "draft",
    content_sections: [
      {
        heading: "Do you accept insurance?",
        body: "We are an out-of-network provider. We do not bill insurance directly, but we provide detailed superbills that you can submit to your insurance company for potential reimbursement."
      },
      {
        heading: "What is Naturopathic Medicine?",
        body: "Naturopathic medicine combines modern science with natural therapies. We focus on treating the root cause of illness rather than just suppressing symptoms."
      },
      {
        heading: "How do I prepare for an IV therapy session?",
        body: "Please arrive well-hydrated and having eaten a small meal. Wear comfortable clothing with easy access to your arms."
      }
    ]
  },
  {
    id: "pediatrics-page",
    title: "Holistic Pediatrics",
    slug: "/services/pediatrics",
    description: "Natural, gentle healthcare for children of all ages.",
    status: "draft",
    content_sections: [
      {
        heading: "Well-Child Exams",
        body: "Comprehensive check-ups that monitor growth and development while addressing nutrition, sleep, and emotional well-being."
      },
      {
        heading: "Natural Immunity",
        body: "We support building strong, natural immunity through diet, lifestyle, and safe natural remedies for common childhood ailments like ear infections and eczema."
      },
      {
        heading: "A Gentle Approach",
        body: "Dr. Dena specializes in making children feel safe and heard. We believe medical visits should not be scary."
      }
    ]
  }
];
