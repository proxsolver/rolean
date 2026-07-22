"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import LanguageToggle from "@/components/LanguageToggle";
import type { Locale } from "@/domains/profile/i18n";
import { t } from "@/domains/profile/i18n";

const NAV_ITEMS = [
  ["#practice", "nav.practice"],
  ["#interests", "nav.expertise"],
  ["#projects", "nav.projects"],
  ["#timeline", "nav.experience"],
] as const;

export default function SiteNavigation({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <>
      <Link href={homeHref} className={styles.logo} onClick={closeMenu}>
        rolean<span className={styles.logoDot}>.</span>org
      </Link>

      <nav className={styles.nav} aria-label={locale === "ko" ? "주요 메뉴" : "Main navigation"}>
        {NAV_ITEMS.map(([href, key]) => (
          <a key={href} href={href} className={styles.navLink}>
            {t(key, locale)}
          </a>
        ))}
        <LanguageToggle locale={locale} />
        <a href="#contact" className="btn-primary">
          {t("nav.contact", locale)}
        </a>
      </nav>

      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={t(isOpen ? "nav.menu.close" : "nav.menu.open", locale)}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="mobile-navigation"
        className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}
        aria-label={locale === "ko" ? "모바일 메뉴" : "Mobile navigation"}
        hidden={!isOpen}
      >
        <div className="container">
          <div className={styles.mobileNavLinks}>
            {NAV_ITEMS.map(([href, key]) => (
              <a key={href} href={href} className={styles.mobileNavLink} onClick={closeMenu}>
                {t(key, locale)}
              </a>
            ))}
            <a href="#contact" className={styles.mobileContactLink} onClick={closeMenu}>
              {t("nav.contact", locale)}
            </a>
            <LanguageToggle locale={locale} />
          </div>
        </div>
      </nav>
    </>
  );
}
