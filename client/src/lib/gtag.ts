export const GA_ADS_ID = "AW-11190214934";
export const GA_ADS_ID_2 = "AW-11102567891";
export const GA4_ID = "G-NFLLBLBKET";

// ─── Google Ads Conversion Labels ────────────────────────────────────────────
// To wire up a new campaign conversion, paste the full "send_to" value from
// your Google Ads conversion action here (format: "AW-XXXXXXXXX/XXXXXXXXXXXX").
// Campaign managers: edit only this block — no other code changes needed.

export const ADS_CONVERSION_FORM = "AW-11102567891/14sQCJPe1_0bENP7jq4p";

// FMT-specific conversion label — replace with the conversion label from the
// FMT national campaign's Google Ads account. Example: "AW-11102567891/AbCdEfGhIjK"
// If left empty, the generic form conversion above is used as a fallback.
export const ADS_CONVERSION_FMT_FORM = "";

// Phone click conversion label — replace with the click-to-call conversion from
// your Google Ads account. Example: "AW-11102567891/PhoneClickLabel123"
export const ADS_CONVERSION_PHONE = "";

// ─────────────────────────────────────────────────────────────────────────────

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
      send_to: ADS_CONVERSION_FORM,
      value: 1.0,
      currency: "USD",
    });
  }
};

export const trackFMTFormSubmission = (formSource: string) => {
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

    const conversionLabel = ADS_CONVERSION_FMT_FORM || ADS_CONVERSION_FORM;
    window.gtag("event", "conversion", {
      send_to: conversionLabel,
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

    if (ADS_CONVERSION_PHONE) {
      window.gtag("event", "conversion", {
        send_to: ADS_CONVERSION_PHONE,
        value: 1.0,
        currency: "USD",
      });
    }
  }
};

export const conversion = (conversionLabel: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: `${GA_ADS_ID}/${conversionLabel}`,
    });
  }
};
