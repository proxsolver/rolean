import styles from "@/app/page.module.css";
import type { Project } from "@/domains/profile/data";
import type { Locale } from "@/domains/profile/i18n";
import { t } from "@/domains/profile/i18n";

export default function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const statusLabel = t(`projects.status.${project.status}`, locale);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-panel ${styles.projectCard}`}
    >
      <div className={styles.projectHeader}>
        <span className={styles.projectEmoji} aria-hidden="true">{project.emoji}</span>
        <span className={`${styles.statusBadge} ${styles[`status-${project.status}`]}`}>
          {project.status === "live" ? "●" : project.status === "building" ? "⚒" : "β"}{" "}
          {statusLabel}
        </span>
      </div>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDesc}>{project.description[locale]}</p>
      {project.impact && (
        <p className={styles.projectImpact}>
          <span aria-hidden="true">↗</span> {project.impact[locale]}
        </p>
      )}
      <div className={styles.projectTags} aria-label={locale === "ko" ? "사용 기술" : "Technology"}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.projectTag}>{tag}</span>
        ))}
      </div>
    </a>
  );
}
