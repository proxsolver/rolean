"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-M63W08193X";

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}

// ========================================================================
// Event Tracking Utilities — import and use from any client component
// ========================================================================

/** Track a custom event */
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", action, params);
  }
}

/** Track outbound link click */
export function trackOutboundLink(url: string, label?: string) {
  trackEvent("outbound_click", {
    event_category: "engagement",
    event_label: label || url,
    transport_type: "beacon",
    url,
  });
}

/** Track section visibility (scroll) */
export function trackSectionView(sectionName: string) {
  trackEvent("section_view", {
    event_category: "scroll",
    event_label: sectionName,
  });
}

/** Track AI chat interaction */
export function trackChatEvent(action: "open" | "message_sent" | "suggestion_click", label?: string) {
  trackEvent("chat_interaction", {
    event_category: "ai_copilot",
    event_label: label || action,
    action,
  });
}

/** Track language toggle */
export function trackLanguageSwitch(from: string, to: string) {
  trackEvent("language_switch", {
    event_category: "navigation",
    event_label: `${from} → ${to}`,
    from_locale: from,
    to_locale: to,
  });
}

/** Track project card click */
export function trackProjectClick(projectName: string, url: string) {
  trackEvent("project_click", {
    event_category: "engagement",
    event_label: projectName,
    url,
  });
}

/** Track contact form submission */
export function trackContactSubmit(method: "form" | "coffee_chat") {
  trackEvent("contact_submit", {
    event_category: "conversion",
    event_label: method,
    method,
  });
}
