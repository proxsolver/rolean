import styles from "@/app/page.module.css";
import type { SignatureWork } from "@/domains/profile/data";
import type { Locale } from "@/domains/profile/i18n";

// Achievement-forward card: the credential banner leads, the outcome is
// the visual hero — the opposite of burying the result in a footnote.
export default function SignatureWorkCard({
  item,
  locale,
  index,
}: {
  item: SignatureWork;
  locale: Locale;
  index: number;
}) {
  return (
    <article className={`glass-panel ${styles.signatureCard}`}>
      <div className={styles.signatureTopline}>
        <span className={styles.signatureIndex}>CASE / {String(index + 1).padStart(2, "0")}</span>
        <div
          className={`${styles.signatureCredential} ${styles[`variant-${item.credentialVariant}`]}`}
        >
          {item.credential[locale]}
        </div>
      </div>
      <div className={styles.signatureHead}>
        <h3 className={styles.signatureTitle}>{item.title[locale]}</h3>
      </div>
      <p className={styles.signatureDomain}>{item.domain[locale]}</p>
      <p className={styles.signatureDesc}>{item.description[locale]}</p>
      <p className={styles.signatureOutcome}>
        <span>{locale === "ko" ? "검증 결과" : "Result"}</span>
        {item.outcome[locale]}
      </p>
      <div className={styles.signatureTags}>
        {item.tags[locale].map((tag, tagIdx) => (
          <span key={tagIdx} className={styles.techTag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
