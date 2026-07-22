import Link from "next/link";
import type { Locale } from "@/domains/profile/i18n";
import styles from "@/app/page.module.css";

export default function LanguageToggle({ locale }: { locale: Locale }) {
  const target = locale === "en" ? "/" : "/en";

  return (
    <Link
      href={target}
      className={styles.languageToggle}
      aria-label={locale === "ko" ? "Switch to English" : "한국어로 전환"}
    >
      {locale === "ko" ? "EN" : "한"}
    </Link>
  );
}
