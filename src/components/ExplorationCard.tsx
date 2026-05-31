"use client";

import styles from "@/app/page.module.css";
import type { Exploration } from "@/domains/profile/data";
import type { Locale } from "@/domains/profile/i18n";
import { t } from "@/domains/profile/i18n";

export default function ExplorationCard({
  item,
  locale,
}: {
  item: Exploration;
  locale: Locale;
}) {
  return (
    <article className="glass-panel">
      <div className={styles.explorationHeader}>
        <span className={styles.explorationEmoji}>{item.emoji}</span>
        <span
          className={`${styles.statusBadge} ${styles[`status-${item.status}`]}`}
        >
          {item.status === "active"
            ? "Active"
            : item.status === "completed"
              ? "Completed"
              : "Prototype"}
        </span>
      </div>
      <h3 className={styles.explorationTitle}>{item.title}</h3>
      <p className={styles.explorationDomain}>{item.domain}</p>
      <p className={styles.explorationDesc}>{item.description[locale]}</p>
      <div className={styles.techStack}>
        {item.techStack.map((tech, techIdx) => (
          <span key={techIdx} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.insightBox}>
        <p className={styles.insightLabel}>
          {t("explorations.insight", locale)}
        </p>
        <p className={styles.insightText}>
          {item.learnedInsight[locale]}
        </p>
      </div>
    </article>
  );
}
