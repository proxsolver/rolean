import styles from "./page.module.css";
import {
  PERSON,
  KEY_METRICS,
  PROJECTS,
  EXPLORATIONS,
  INTERESTS,
  TIMELINE,
} from "@/domains/profile/data";
import AICopilot from "@/components/AICopilot";
import CoffeeChatForm from "@/components/CoffeeChat/CoffeeChatForm";
import ExplorationCard from "@/components/ExplorationCard";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      {/* ================================================================== */}
      {/* JSON-LD Structured Data — Machine-readable person & website info  */}
      {/* ================================================================== */}
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
            jobTitle: PERSON.title,
            description: `${PERSON.nameEn}, known as ${PERSON.knownAs}. ${PERSON.experience}. Specializing in ${PERSON.domains.slice(0, 4).join(", ")}.`,
            knowsAbout: PERSON.domains,
            worksFor: {
              "@type": "Organization",
              name: PERSON.org,
              description: PERSON.orgType,
            },
            sameAs: PROJECTS.map((p) => p.url),
            credential: PERSON.certifications.map((c) => ({
              "@type": "EducationalOccupationalCredential",
              name: c,
            })),
            achievement: KEY_METRICS.map((m) => ({
              "@type": "Achievement",
              name: `${m.labelEn}: ${m.value}`,
              description: m.context,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "rolean.org",
            url: "https://rolean.org",
            description:
              "Portfolio and knowledge hub of Hyunwoo Lee (Harry) — Domain-first engineer combining 15 years of manufacturing expertise with modern software engineering, AI, and Smart Factory innovation.",
            author: {
              "@type": "Person",
              name: `${PERSON.nameEn} (${PERSON.name})`,
            },
            publisher: {
              "@type": "Person",
              name: PERSON.knownAs,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Projects by Hyunwoo Lee (Harry)",
            itemListElement: PROJECTS.map((project, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "SoftwareApplication",
                name: project.title,
                url: project.url,
                description: project.descriptionEn,
                applicationCategory: "Productivity",
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
              },
            })),
          }),
        }}
      />

      {/* Navigation Header */}
      <header className={styles.header} role="banner">
        <div className={`${styles.headerContainer} container`}>
          <a href="#" className={styles.logo} aria-label="rolean.org home">
            rolean<span className={styles.logoDot}>.</span>org
          </a>
          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#about" className={styles.navLink}>
              Philosophy
            </a>
            <a href="#interests" className={styles.navLink}>
              Expertise
            </a>
            <a href="#explorations" className={styles.navLink}>
              Exploration
            </a>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
            <a href="#timeline" className={styles.navLink}>
              Experience
            </a>
            <a href="#contact" className="btn-primary">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ============================================================ */}
      {/* Hero Section — Primary identity statement                    */}
      {/* ============================================================ */}
      <section className={styles.hero} aria-label="Introduction">
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.heroKicker}>{PERSON.tagline}</p>
            <h1 className={styles.heroTitle}>
              Vibe Coder Meets
              <br />
              <span className={styles.goldText}>Lean Operation.</span>
            </h1>
            <p className={styles.heroDesc}>
              <strong>{PERSON.nameEn} ({PERSON.name})</strong> — {PERSON.experience}.{" "}
              15년간 현장에서 축적한 제조 도메인 전문성을 바탕으로 IT와 OT의 다리를 놓습니다.{" "}
              공정 최적화의 Lean 사고법과 실시간 데이터 파이프라인 설계를 바탕으로,{" "}
              가장 견고하고 낭비 없는 고성능 소프트웨어를 구현합니다.
            </p>
            <div className={styles.heroActions}>
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#timeline" className={styles.btnSecondary}>
                Read Career
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Key Metrics — Quantified achievements for authority signals   */}
      {/* ============================================================ */}
      <section className={styles.metricsSection} aria-label="Key Achievement Metrics">
        <div className="container">
          <div className={styles.metricsGrid}>
            {KEY_METRICS.map((metric, idx) => (
              <div key={idx} className={styles.metricCard}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
                <span className={styles.metricContext}>{metric.context}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Philosophy Section — Core design thinking                    */}
      {/* ============================================================ */}
      <section id="about" className={styles.section} aria-label="Philosophy">
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div>
              <p className={styles.subKicker}>Philosophy</p>
              <h2 className={styles.sectionTitle}>
                낭비를 제거하고 본질만 남기는 설계
              </h2>
            </div>
            <div>
              <p className={styles.bodyPara}>
                생산 현장에서의 <strong>Lean과 IWS</strong> 철학은 단순한 공정 관리가
                아닙니다. 가치가 생성되는 유일한 핵심 단계(Value-Added)만을 남기고 모든
                불필요한 단계를 과감히 제거하는 고도의 추상화 예술입니다.
              </p>
              <p className={styles.bodyPara}>
                소프트웨어 엔지니어링 역시 같습니다. 무거운 프레임워크나 불필요하게
                복잡한 아키텍처에 집착하지 않고, 비즈니스 가치와 사용자 인터페이스의
                극단적 편의성을 지향하여 가장 빠르고 신뢰성 높은 최적의 코드를
                작성합니다. 이것이 바로{" "}
                <strong>{PERSON.tagline}</strong>의 핵심 가치입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Interests / Expertise Section                                */}
      {/* ============================================================ */}
      <section id="interests" className={styles.sectionDark} aria-label="Core Expertise">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>Core Expertise</p>
            <h2 className={styles.sectionTitle}>
              산업 융합 핵심 역량 및 전문 분야
            </h2>
          </div>
          <div className={styles.interestsGrid}>
            {INTERESTS.map((item, idx) => (
              <article key={idx} className="glass-panel">
                <div className={styles.interestIcon}>{item.icon}</div>
                <h3 className={styles.interestTitle}>{item.title}</h3>
                <p className={styles.interestSubtitle}>{item.titleEn}</p>
                <p className={styles.interestDesc}>{item.desc}</p>
                <div className={styles.keywordTags}>
                  {item.keywords.slice(0, 3).map((kw, kwIdx) => (
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

      {/* ============================================================ */}
      {/* Exploration Section — 2026 Learning Journey                  */}
      {/* ============================================================ */}
      <section
        id="explorations"
        className={styles.section}
        aria-label="Exploration & Learning Journey"
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>Exploration 2026</p>
            <h2 className={styles.sectionTitle}>
              탐구하고 실험하며 구축하는 과정
            </h2>
            <p className={styles.sectionDesc}>
              제조 현장의 도메인 지식을 소프트웨어로 번역하는 과정에서 배운 것들을
              실제 프로젝트로 실험하고 검증합니다. 각 프로젝트는 실패와 성공의
              기록이자, 다음 단계로 나아가는 벤치마크입니다.
            </p>
          </div>
          <div className={styles.explorationsGrid}>
            {EXPLORATIONS.map((item, idx) => (
              <ExplorationCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Projects Section — Live portfolio                            */}
      {/* ============================================================ */}
      <section
        id="projects"
        className={styles.sectionDark}
        aria-label="Live Projects"
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>Live Portfolio</p>
            <h2 className={styles.sectionTitle}>
              오픈 서비스 및 포트폴리오
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
                aria-label={`${project.title}: ${project.descriptionEn}`}
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
                        : "○ Concept"}
                  </span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                {project.impact && (
                  <p className={styles.projectImpact}>
                    🎯 {project.impact}
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

      {/* ============================================================ */}
      {/* Timeline / Career Section                                    */}
      {/* ============================================================ */}
      <section
        id="timeline"
        className={styles.section}
        aria-label="Professional Timeline"
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>Professional History</p>
            <h2 className={styles.sectionTitle}>
              커리어 벤치마크 및 이력
            </h2>
          </div>
          <div className={styles.timeline} role="list">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className={styles.timelineItem}
                role="listitem"
              >
                <div className={styles.timelineSidebar}>
                  <div className={styles.timelineDot} />
                  <time className={styles.timelinePeriod}>{item.period}</time>
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineRole}>{item.role}</h3>
                  <p className={styles.timelineRoleEn}>{item.roleEn}</p>
                  <p className={styles.timelineCo}>
                    {item.company}{" "}
                    <span className={styles.companyType}>
                      · {item.companyType}
                    </span>
                  </p>
                  <p className={styles.timelineDesc}>{item.description}</p>
                  {item.achievements.length > 0 && (
                    <ul className={styles.achievementList}>
                      {item.achievements.map((achievement, achIdx) => (
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

      {/* ============================================================ */}
      {/* Coffee Chat / Contact Section                                */}
      {/* ============================================================ */}
      <section id="contact" className={styles.sectionDark} aria-label="Contact">
        <div className="container">
          <CoffeeChatForm />
        </div>
      </section>

      {/* ============================================================ */}
      {/* Footer                                                        */}
      {/* ============================================================ */}
      <footer className={styles.footer} role="contentinfo">
        <div className={`${styles.footerContainer} container`}>
          <p>© 2026 {PERSON.knownAs}. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/privacy" className={styles.footerLink}>
              개인정보처리방침
            </a>
            <a href="/terms" className={styles.footerLink}>이용약관</a>
          </div>
        </div>
      </footer>

      {/* AI Always Copilot Widget */}
      <AICopilot />
    </div>
  );
}
