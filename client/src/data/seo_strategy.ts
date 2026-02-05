export interface SEOPageStrategy {
  page: string;
  url: string;
  focus_keyword: string;
  gkr_keywords: string[]; // Golden Keyword Ratio targets (Search Vol < 250, 'allintitle' results low)
}

export const seoStrategy: SEOPageStrategy[] = [
  {
    page: "Home",
    url: "/",
    focus_keyword: "Holistic Doctor Santa Barbara",
    gkr_keywords: [
      "best holistic family doctor santa barbara",
      "integrative medicine clinic santa barbara reviews",
      "naturopathic doctor accepting new patients santa barbara"
    ]
  },
  {
    page: "FMT Services",
    url: "/services/fmt",
    focus_keyword: "Fecal Transplant California",
    gkr_keywords: [
      "holistic c diff treatment santa barbara",
      "fecal transplant for colitis success rate",
      "fmt retention enema vs capsules cost",
      "where to get fecal transplant in california"
    ]
  },
  {
    page: "Regenerative Medicine",
    url: "/services/regenerative",
    focus_keyword: "Regenerative Injection Therapy",
    gkr_keywords: [
      "whartons jelly injection knee pain cost",
      "non surgical rotator cuff repair santa barbara",
      "prolotherapy vs prp for back pain",
      "exosome therapy for joint regeneration near me"
    ]
  },
  {
    page: "IV Therapy",
    url: "/services/iv-therapy",
    focus_keyword: "IV Vitamin Therapy Santa Barbara",
    gkr_keywords: [
      "high dose vitamin c iv for fatigue santa barbara",
      "ozone therapy ten pass treatment benefits",
      "chelation therapy for heavy metals side effects",
      "immune boost iv drip near me"
    ]
  },
  {
    page: "Naturopathic Medicine",
    url: "/services/naturopathic",
    focus_keyword: "Naturopathic Doctor Santa Barbara",
    gkr_keywords: [
      "natural hormone replacement therapy santa barbara",
      "holistic treatment for adrenal fatigue california",
      "functional medicine doctor for thyroid issues",
      "naturopathic pediatrician santa barbara county"
    ]
  },
  {
    page: "Cancer Support",
    url: "/services/cancer-support",
    focus_keyword: "Integrative Oncology Support",
    gkr_keywords: [
      "holistic cancer support Santa Barbara",
      "mistletoe therapy for cancer near me",
      "high dose vitamin c during chemotherapy",
      "integrative oncology nutrition plan cost"
    ]
  }
];
