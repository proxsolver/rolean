import styles from "@/app/page.module.css";
import type { TimelineItem } from "@/domains/profile/data";
import type { Locale } from "@/domains/profile/i18n";

export default function TimelineEntry({ item, locale }: { item: TimelineItem; locale: Locale }) {
  return (
    <article className={styles.timelineItem} role="listitem">
      <div className={styles.timelineSidebar}>
        <div className={styles.timelineDot} aria-hidden="true" />
        <time className={styles.timelinePeriod}>{item.period}</time>
      </div>
      <div className={styles.timelineContent}>
        <h3 className={styles.timelineRole}>{item.role[locale]}</h3>
        <p className={styles.timelineCo}>{item.company[locale]}</p>
        <p className={styles.timelineDesc}>{item.description[locale]}</p>
        {item.achievements[locale].length > 0 && (
          <ul className={styles.achievementList}>
            {item.achievements[locale].map((achievement) => (
              <li key={achievement} className={styles.achievementItem}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
