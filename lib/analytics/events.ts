export type AnalyticsEventName =
  | "click_call"
  | "click_estimate"
  | "form_start"
  | "form_submit"
  | "view_service"
  | "view_project"
  | "click_google_reviews"
  | "financing_click";

type AnalyticsEventPayload = {
  event: AnalyticsEventName;
  [key: string]: string | number | boolean | null | undefined;
};

declare global {
  interface Window {
    dataLayer?: AnalyticsEventPayload[];
  }
}

export function trackEvent(
  event: AnalyticsEventName,
  data: Omit<AnalyticsEventPayload, "event"> = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event,
    ...data,
  });
}