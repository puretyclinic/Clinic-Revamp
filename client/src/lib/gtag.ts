export const GA_TRACKING_ID = "AW-11190214934";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: { action: string; category: string; label: string; value?: number }) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific Google Ads Conversion
export const conversion = (conversionLabel: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: `${GA_TRACKING_ID}/${conversionLabel}`,
    });
  }
};
