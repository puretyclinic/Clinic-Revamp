export const GA_ADS_ID = "AW-11190214934";
export const GA_ADS_ID_2 = "AW-11102567891";
export const GA4_ID = "G-NFLLBLBKET";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_ADS_ID, { page_path: url });
    if (GA4_ID) {
      window.gtag("config", GA4_ID, { page_path: url });
    }
  }
};

export const event = ({ action, category, label, value }: { action: string; category: string; label: string; value?: number }) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackFormSubmission = (formSource: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "generate_lead", {
      event_category: "Contact",
      event_label: formSource,
      value: 100,
      currency: "USD",
    });

    window.gtag("event", "submit_lead_form", {
      event_category: "Contact",
      event_label: formSource,
    });

    window.gtag("event", "contact", {
      event_category: "Contact",
      event_label: formSource,
    });

    window.gtag("event", "conversion", {
      send_to: "AW-11102567891/14sQCJPe1_0bENP7jq4p",
      value: 1.0,
      currency: "USD",
    });
  }
};

export const trackPhoneClick = (source: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "generate_lead", {
      event_category: "Phone",
      event_label: source,
      value: 50,
      currency: "USD",
    });

    window.gtag("event", "click_to_call", {
      event_category: "Phone",
      event_label: source,
    });
  }
};

export const conversion = (conversionLabel: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: `${GA_ADS_ID}/${conversionLabel}`,
    });
  }
};
