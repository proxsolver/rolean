import styles from "@/app/page.module.css";
import {
  PERSON,
  KEY_METRICS,
  MANUFACTURING_DATA_PRACTICE,
  PROJECTS,
  EXPLORATIONS,
  INTERESTS,
  TIMELINE,
} from "@/domains/profile/data";
import { Locale, t } from "@/domains/profile/i18n";
import AICopilot from "@/components/AICopilot";
import CoffeeChatForm from "@/components/CoffeeChat/CoffeeChatForm";
import ExplorationCard from "@/components/ExplorationCard";
import LanguageToggle from "@/components/LanguageToggle";
import SignatureWorkCard from "@/components/SignatureWorkCard";

export default function PortfolioContent({ locale }: { locale: Locale }) {
  return (
    <div className={styles.wrapper}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: `${PERSON.nameEn} (${PERSON.name})`,
            alternateName: PERSON.knownAs,
            url: PERSON.website,
            email: PERSON.email,
            jobTitle: PERSON.title.en,
            description: `${PERSON.nameEn}, known as ${PERSON.knownAs}. ${PERSON.experience.en}.`,
            knowsAbout: PERSON.domains,
            worksFor: {
              "@type": "Organization",
              name: PERSON.org,
              description: PERSON.orgType,
            },
            sameAs: PROJECTS.map((p) => p.url),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `Projects by ${PERSON.knownAs}`,
            itemListElement: PROJECTS.map((project, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "SoftwareApplication",
                name: project.title,
                url: project.url,
                description: project.description.en,
                applicationCategory: "Productivity",
                operatingSystem: "Web",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              },
            })),
          }),
        }}
      />

      {/* Navigation Header */}
      <header className={styles.header} role="banner">
        <div className={`${styles.headerContainer} container`}>
          <a href={locale === "en" ? "/en" : "/"} className={styles.logo}>
            rolean<span className={styles.logoDot}>.</span>org
          </a>
          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#practice" className={styles.navLink}>
              {t("nav.practice", locale)}
            </a>
            <a href="#about" className={styles.navLink}>
              {t("nav.philosophy", locale)}
            </a>
            <a href="#interests" className={styles.navLink}>
              {t("nav.expertise", locale)}
            </a>
            <a href="#explorations" className={styles.navLink}>
              {t("nav.explorations", locale)}
            </a>
            <a href="#projects" className={styles.navLink}>
              {t("nav.projects", locale)}
            </a>
            <a href="#timeline" className={styles.navLink}>
              {t("nav.experience", locale)}
            </a>
            <LanguageToggle locale={locale} />
            <a href="#contact" className="btn-primary">
              {t("nav.contact", locale)}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero} aria-label="Introduction">
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.heroKicker}>{t("hero.kicker", locale)}</p>
            <h1 className={styles.heroTitle}>
              {t("hero.title.line1", locale)}
              <br />
              <span className={styles.goldText}>
                {t("hero.title.line2", locale)}
              </span>
            </h1>
            <p className={styles.heroDesc}>
              <strong>
                {locale === "ko"
                  ? `${PERSON.nameEn} (${PERSON.name})`
                  : PERSON.knownAs}
              </strong>{" "}
              — {PERSON.experience[locale]}. {t("hero.desc", locale)}
            </p>
            <div className={styles.heroActions}>
              <a href="#projects" className="btn-primary">
                {t("hero.cta.projects", locale)}
              </a>
              <a href="#timeline" className={styles.btnSecondary}>
                {t("hero.cta.career", locale)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className={styles.metricsSection} aria-label={t("metrics.label", locale)}>
        <div className="container">
          <div className={styles.metricsGrid}>
            {KEY_METRICS.map((metric, idx) => (
              <div key={idx} className={styles.metricCard}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>
                  {metric.label[locale]}
                </span>
                <span className={styles.metricContext}>
                  {metric.context[locale]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Data Practice */}
      <section
        id="practice"
        className={styles.section}
        aria-label={t("practice.title", locale)}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>
              {t("practice.kicker", locale)}
            </p>
            <h2 className={styles.sectionTitle}>
              {t("practice.title", locale)}
            </h2>
            <p className={styles.sectionDesc}>
              {t("practice.desc", locale)}
            </p>
          </div>
          <div className={styles.signatureGrid}>
            {MANUFACTURING_DATA_PRACTICE.map((work, idx) => (
              <SignatureWorkCard key={idx} item={work} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="about" className={styles.section} aria-label="Philosophy">
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div>
              <p className={styles.subKicker}>
                {t("philosophy.kicker", locale)}
              </p>
              <h2 className={styles.sectionTitle}>
                {t("philosophy.title", locale)}
              </h2>
            </div>
            <div>
              <p className={styles.bodyPara}>
                {t("philosophy.p1", locale)}
              </p>
              <p className={styles.bodyPara}>
                {t("philosophy.p2", locale)}{" "}
                <strong>&quot;{PERSON.tagline}&quot;</strong>
              </p>
              <p className={styles.bodyPara}>
                {t("philosophy.p3", locale)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests / Expertise */}
      <section
        id="interests"
        className={styles.sectionDark}
        aria-label={t("expertise.title", locale)}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>
              {t("expertise.kicker", locale)}
            </p>
            <h2 className={styles.sectionTitle}>
              {t("expertise.title", locale)}
            </h2>
          </div>
          <div className={styles.interestsGrid}>
            {INTERESTS.map((item, idx) => (
              <article key={idx} className="glass-panel">
                <div className={styles.interestIcon}>{item.icon}</div>
                <h3 className={styles.interestTitle}>
                  {locale === "ko" ? item.title : item.titleEn}
                </h3>
                <p className={styles.interestDesc}>{item.desc[locale]}</p>
                <div className={styles.keywordTags}>
                  {item.keywords.map((kw, kwIdx) => (
                    <span key={kwIdx} className={styles.keywordTag}>
                      {kw}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Explorations */}
      <section
        id="explorations"
        className={styles.section}
        aria-label={t("explorations.title", locale)}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>
              {t("explorations.kicker", locale)}
            </p>
            <h2 className={styles.sectionTitle}>
              {t("explorations.title", locale)}
            </h2>
            <p className={styles.sectionDesc}>
              {t("explorations.desc", locale)}
            </p>
          </div>
          <div className={styles.explorationsGrid}>
            {EXPLORATIONS.map((item, idx) => (
              <ExplorationCard key={idx} item={item} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={styles.sectionDark}
        aria-label={t("projects.title", locale)}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>
              {t("projects.kicker", locale)}
            </p>
            <h2 className={styles.sectionTitle}>
              {t("projects.title", locale)}
            </h2>
          </div>
          <div className={styles.projectsGrid}>
            {PROJECTS.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
              >
                <div className={styles.projectHeader}>
                  <span className={styles.projectEmoji}>{project.emoji}</span>
                  <span
                    className={`${styles.statusBadge} ${styles[`status-${project.status}`]}`}
                  >
                    {project.status === "live"
                      ? "● Live"
                      : project.status === "building"
                        ? "⚒ Building"
                        : "β Beta"}
                  </span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>
                  {project.description[locale]}
                </p>
                {project.impact && (
                  <p className={styles.projectImpact}>
                    🎯 {project.impact[locale]}
                  </p>
                )}
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="timeline"
        className={styles.section}
        aria-label={t("timeline.title", locale)}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>
              {t("timeline.kicker", locale)}
            </p>
            <h2 className={styles.sectionTitle}>
              {t("timeline.title", locale)}
            </h2>
          </div>
          <div className={styles.timeline} role="list">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={styles.timelineItem} role="listitem">
                <div className={styles.timelineSidebar}>
                  <div className={styles.timelineDot} />
                  <time className={styles.timelinePeriod}>{item.period}</time>
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineRole}>
                    {item.role[locale]}
                  </h3>
                  <p className={styles.timelineCo}>
                    {item.company[locale]}{" "}
                    <span className={styles.companyType}>
                      · {item.companyType}
                    </span>
                  </p>
                  <p className={styles.timelineDesc}>
                    {item.description[locale]}
                  </p>
                  {item.achievements[locale].length > 0 && (
                    <ul className={styles.achievementList}>
                      {item.achievements[locale].map((achievement, achIdx) => (
                        <li key={achIdx} className={styles.achievementItem}>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.sectionDark} aria-label="Contact">
        <div className="container">
          <CoffeeChatForm locale={locale} />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} role="contentinfo">
        <div className={`${styles.footerContainer} container`}>
          <p>
            © 2026 {PERSON.knownAs}. {t("footer.rights", locale)}
          </p>
          <div className={styles.footerLinks}>
            <a href="/privacy" className={styles.footerLink}>
              {t("footer.privacy", locale)}
            </a>
            <a href="/terms" className={styles.footerLink}>
              {t("footer.terms", locale)}
            </a>
          </div>
        </div>
      </footer>

      <AICopilot />
    </div>
  );
}
