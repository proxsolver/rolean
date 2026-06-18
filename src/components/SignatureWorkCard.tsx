import styles from "@/app/page.module.css";
import type { SignatureWork } from "@/domains/profile/data";
import type { Locale } from "@/domains/profile/i18n";

// Achievement-forward card: the credential banner leads, the outcome is
// the visual hero — the opposite of burying the result in a footnote.
export default function SignatureWorkCard({
  item,
  locale,
}: {
  item: SignatureWork;
  locale: Locale;
}) {
  return (
    <article className={`glass-panel ${styles.signatureCard}`}>
      <div
        className={`${styles.signatureCredential} ${styles[`variant-${item.credentialVariant}`]}`}
      >
        {item.credential[locale]}
      </div>
      <div className={styles.signatureHead}>
        <span className={styles.signatureEmoji}>{item.emoji}</span>
        <h3 className={styles.signatureTitle}>{item.title[locale]}</h3>
      </div>
      <p className={styles.signatureDomain}>{item.domain[locale]}</p>
      <p className={styles.signatureDesc}>{item.description[locale]}</p>
      <p className={styles.signatureOutcome}>🎯 {item.outcome[locale]}</p>
      <div className={styles.signatureTags}>
        {item.tags.map((tag, tagIdx) => (
          <span key={tagIdx} className={styles.techTag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
