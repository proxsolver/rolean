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
import DocumentLanguage from "@/components/DocumentLanguage";
import ExplorationCard from "@/components/ExplorationCard";
import HeroSignalSystem from "@/components/HeroSignalSystem";
import ProjectCard from "@/components/ProjectCard";
import SiteNavigation from "@/components/SiteNavigation";
import SignatureWorkCard from "@/components/SignatureWorkCard";
import TimelineEntry from "@/components/TimelineEntry";

export default function PortfolioContent({ locale }: { locale: Locale }) {
  const featuredProjects = PROJECTS.filter((project) =>
    ["gtasks.rolean.org", "test.rolean.org", "notes.rolean.org"].includes(project.title),
  );
  const additionalProjects = PROJECTS.filter((project) => !featuredProjects.includes(project));

  return (
    <div className={styles.wrapper}>
      <DocumentLanguage locale={locale} />
      <a href="#main-content" className={styles.skipLink}>
        {t("nav.skip", locale)}
      </a>
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
          <SiteNavigation locale={locale} />
        </div>
      </header>

      <main id="main-content">
      {/* Hero */}
      <section className={styles.hero} aria-label={locale === "ko" ? "소개" : "Introduction"}>
        <div className={`${styles.heroLayout} container`}>
          <div className={styles.heroContent}>
            <div className={styles.heroKickerRow}>
              <p className={styles.heroKicker}>{t("hero.kicker", locale)}</p>
              <span className={styles.heroIndex}>01 / 06</span>
            </div>
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
              <a href="#practice" className="btn-primary">
                {t("hero.cta.projects", locale)}
              </a>
              <a href="#contact" className={styles.btnSecondary}>
                {t("hero.cta.career", locale)}
              </a>
            </div>
            <div className={styles.heroProof} aria-label={t("hero.proof.label", locale)}>
              <div>
                <strong>15Y</strong>
                <span>{t("hero.proof.experience", locale)}</span>
              </div>
              <div>
                <strong>GLOBAL</strong>
                <span>{t("hero.proof.practice", locale)}</span>
              </div>
              <div>
                <strong>LEAN × AI</strong>
                <span>{t("hero.proof.method", locale)}</span>
              </div>
            </div>
          </div>
          <HeroSignalSystem locale={locale} />
        </div>
        <div className={styles.heroScrollCue} aria-hidden="true">
          <span>SCROLL TO EVIDENCE</span>
          <i />
        </div>
      </section>

      {/* Metrics */}
      <section className={styles.metricsSection} aria-label={t("metrics.label", locale)}>
        <div className="container">
          <div className={styles.metricsHeader}>
            <p>PROOF, NOT PROMISES / 02</p>
            <h2>{t("metrics.title", locale)}</h2>
          </div>
          <div className={styles.metricsGrid}>
            {KEY_METRICS.map((metric, idx) => (
              <article key={idx} className={styles.metricCard}>
                <span className={styles.metricIndex}>{String(idx + 1).padStart(2, "0")}</span>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>
                  {metric.label[locale]}
                </span>
                <span className={styles.metricContext}>
                  {metric.context[locale]}
                </span>
              </article>
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
            <p className={styles.evidenceNote}>
              <span aria-hidden="true">🔒</span> {t("practice.evidenceNote", locale)}
            </p>
          </div>
          <div className={styles.practiceProcess}>
            <p className={styles.processTitle}>{t("practice.processTitle", locale)}</p>
            <ol className={styles.processSteps}>
              {[1, 2, 3, 4].map((step) => (
                <li key={step} className={styles.processStep}>
                  <span className={styles.processNumber} aria-hidden="true">
                    {String(step).padStart(2, "0")}
                  </span>
                  <span>{t(`practice.step${step}`, locale)}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.signatureGrid}>
            {MANUFACTURING_DATA_PRACTICE.map((work, idx) => (
              <SignatureWorkCard key={idx} item={work} locale={locale} index={idx} />
            ))}
          </div>
          <div className={styles.sectionActions}>
            <a href="#contact" className="btn-primary">
              {t("practice.cta", locale)}
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="about" className={styles.section} aria-label={t("nav.philosophy", locale)}>
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
          <details className={styles.contentDisclosure}>
            <summary className={styles.disclosureSummary}>
              {t("explorations.more", locale)}
            </summary>
            <div className={`${styles.explorationsGrid} ${styles.disclosureGrid}`}>
              {EXPLORATIONS.map((item) => (
                <ExplorationCard key={item.title.en} item={item} locale={locale} />
              ))}
            </div>
          </details>
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
            <p className={styles.sectionDesc}>{t("projects.desc", locale)}</p>
          </div>
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} locale={locale} />
            ))}
          </div>
          <details className={styles.contentDisclosure}>
            <summary className={styles.disclosureSummary}>{t("projects.more", locale)}</summary>
            <div className={`${styles.projectsGrid} ${styles.disclosureGrid}`}>
              {additionalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} locale={locale} />
              ))}
            </div>
          </details>
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
            {TIMELINE.slice(0, 4).map((item) => (
              <TimelineEntry key={`${item.period}-${item.role.en}`} item={item} locale={locale} />
            ))}
          </div>
          <details className={styles.contentDisclosure}>
            <summary className={styles.disclosureSummary}>{t("timeline.more", locale)}</summary>
            <div className={`${styles.timeline} ${styles.timelineContinuation}`} role="list">
              {TIMELINE.slice(4).map((item) => (
                <TimelineEntry key={`${item.period}-${item.role.en}`} item={item} locale={locale} />
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.sectionDark} aria-label={t("nav.contact", locale)}>
        <div className="container">
          <CoffeeChatForm locale={locale} />
        </div>
      </section>
      </main>

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

      <AICopilot locale={locale} />
    </div>
  );
}
