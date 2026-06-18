"use client";

import styles from "./CoffeeChatForm.module.css";
import { Locale, t } from "@/domains/profile/i18n";

const GOOGLE_BOOKING_URL = "https://calendar.app.google/jTfs3YcjsyszcvPY6";

export default function CoffeeChatForm({ locale }: { locale: Locale }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--color-gold)",
          fontWeight: 500,
          marginBottom: "0.75rem",
        }}>
          {t("contact.kicker", locale)}
        </p>
        <h2 style={{
          color: "var(--color-ivory)",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          fontWeight: 500,
          lineHeight: 1.2,
        }}>
          {t("contact.title", locale)}
        </h2>
        <p className={styles.intro}>
          {t("contact.intro", locale)}
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardIcon}>☕</div>
        <h3 className={styles.cardTitle}>{t("contact.cardTitle", locale)}</h3>
        <p className={styles.cardDesc}>
          {t("contact.cardDesc", locale)}
        </p>
        <a
          href={GOOGLE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginTop: "1.5rem" }}
        >
          {t("contact.cta", locale)}
        </a>
      </div>
    </div>
  );
}
