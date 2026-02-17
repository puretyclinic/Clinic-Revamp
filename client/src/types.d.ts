export {};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (
      command: "config" | "event" | "js",
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
