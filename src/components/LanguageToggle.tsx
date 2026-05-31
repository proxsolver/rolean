"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/domains/profile/i18n";
import { trackLanguageSwitch } from "@/components/GoogleAnalytics";

export default function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const target = isEn ? "/" : "/en";

  return (
    <a
      href={target}
      onClick={() => trackLanguageSwitch(locale, isEn ? "ko" : "en")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.35rem 0.75rem",
        borderRadius: "6px",
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        fontSize: "0.78rem",
        fontWeight: 600,
        color: locale === "ko" ? "var(--color-gold)" : "var(--color-silver)",
        fontFamily: "var(--font-heading)",
        letterSpacing: "0.04em",
        transition: "all 0.2s ease",
      }}
      aria-label={locale === "ko" ? "Switch to English" : "한국어로 전환"}
    >
      {locale === "ko" ? "EN" : "한"}
    </a>
  );
}
