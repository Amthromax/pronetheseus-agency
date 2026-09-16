// Make Accuracy Lightweight Analytics & Event Tracker

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function initAnalytics() {
  if (typeof window === "undefined") return;
  // Initialize dataLayer if using Google Analytics / Tag Manager
  window.dataLayer = window.dataLayer || [];
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== "undefined") {
    console.log(`[Analytics Event] ${category} -> ${action}${label ? ` (${label})` : ""}`);
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
}

export function trackPageView(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-MEASUREMENT_ID", {
      page_path: url,
    });
  }
}
