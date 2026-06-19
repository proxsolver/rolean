// ============================================================================
// Metadata — single source for rolean.org SEO/social <title> + description.
// Page <title>, description, and alternates are derived here from i18n.ts
// (meta.title / meta.description) so a headline change is made in one place.
// ============================================================================

import type { Metadata } from "next";
import { UI, type Locale } from "./i18n";

const SITE_URL = "https://rolean.org";
const NAME = "Hyunwoo Lee (Harry)";
const TITLE_SUFFIX = "Power BI · Lean/IWS";

/** Page <title> — "Hyunwoo Lee (Harry) — <headline> | Power BI · Lean/IWS" */
export function pageTitle(locale: Locale): string {
  return `${NAME} — ${UI["meta.title"][locale]} | ${TITLE_SUFFIX}`;
}

/** Full per-locale page metadata (title + description + alternates). */
export function pageMetadata(locale: Locale): Metadata {
  return {
    title: pageTitle(locale),
    description: UI["meta.description"][locale],
    alternates: {
      canonical: locale === "en" ? `${SITE_URL}/en` : SITE_URL,
      languages: { ko: SITE_URL, en: `${SITE_URL}/en` },
    },
  };
}

// Root-layout fallback (EN) + shared social copy (OG == Twitter)
export const defaultTitle = `${NAME} — ${UI["meta.title"].en} | rolean.org`;
export const socialTitle = `${NAME} — ${UI["meta.title"].en}`;
export const socialDescription =
  "15 years in manufacturing meets Power BI & Lean. The smart factory isn't far off — it starts by connecting the data you already have. OEE stratified analysis adopted as a global best practice.";
