import styles from "./page.module.css";
import { PROJECTS, INTERESTS, TIMELINE } from "@/domains/profile/data";
import AICopilot from "@/components/AICopilot";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={`${styles.headerContainer} container`}>
          <a href="#" className={styles.logo}>
            rolean<span className={styles.logoDot}>.</span>org
          </a>
          <nav className={styles.nav}>
            <a href="#about" className={styles.navLink}>Philosophy</a>
            <a href="#interests" className={styles.navLink}>Interests</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#timeline" className={styles.navLink}>Experience</a>
            <a href="#contact" className="btn-primary">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <p className={styles.heroKicker}>Domain First · AI Always</p>
            <h1 className={styles.heroTitle}>
              Vibe Coder Meets<br />
              <span className={styles.goldText}>Lean Operation.</span>
            </h1>
            <p className={styles.heroDesc}>
              15년간 현장에서 축적한 제조 도메인 전문성을 바탕으로 IT와 OT의 다리를 놓습니다. 공정 최적화의 Lean 사고법과 실시간 데이터 파이프라인 설계를 바탕으로, 가장 견고하고 낭비 없는 고성능 소프트웨어를 구현합니다.
            </p>
            <div className={styles.heroActions}>
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#timeline" className={styles.btnSecondary}>Read Career</a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className={styles.section}>
        <div className="container">
          <div className={styles.philosophyGrid}>
            <div>
              <p className={styles.subKicker}>Philosophy</p>
              <h2 className={styles.sectionTitle}>낭비를 제거하고 본질만 남기는 설계</h2>
            </div>
            <div>
              <p className={styles.bodyPara}>
                생산 현장에서의 <strong>Lean과 IWS</strong> 철학은 단순한 공정 관리가 아닙니다. 가치가 생성되는 유일한 핵심 단계(Value-Added)만을 남기고 모든 불필요한 단계를 과감히 제거하는 고도의 추상화 예술입니다.
              </p>
              <p className={styles.bodyPara}>
                소프트웨어 엔지니어링 역시 같습니다. 무거운 프레임워크나 불필요하게 복잡한 아키텍처에 집착하지 않고, 비즈니스 가치와 사용자 인터페이스의 극단적 편의성을 지향하여 가장 빠르고 신뢰성 높은 최적의 코드를 작성합니다. 이것이 바로 <strong>Domain First · AI Always</strong>의 핵심 가치입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>Core Focus</p>
            <h2 className={styles.sectionTitle}>산업 융합과 관심 분야</h2>
          </div>
          <div className={styles.interestsGrid}>
            {INTERESTS.map((item, idx) => (
              <div key={idx} className="glass-panel">
                <div className={styles.interestIcon}>{item.icon}</div>
                <h3 className={styles.interestTitle}>{item.title}</h3>
                <p className={styles.interestDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>Live Portfolio</p>
            <h2 className={styles.sectionTitle}>오픈 서비스 및 포트폴리오</h2>
          </div>
          <div className={styles.projectsGrid}>
            {PROJECTS.map((project, idx) => (
              <a key={idx} href={project.url} target="_blank" rel="noopener noreferrer" className="glass-panel">
                <div className={styles.projectEmoji}>{project.emoji}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
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

      {/* Experience / Timeline Section */}
      <section id="timeline" className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.subKicker}>Professional History</p>
            <h2 className={styles.sectionTitle}>커리어 벤치마크 및 이력</h2>
          </div>
          <div className={styles.timeline}>
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineSidebar}>
                  <div className={styles.timelineDot} />
                  <span className={styles.timelinePeriod}>{item.period}</span>
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineRole}>{item.role}</h3>
                  <p className={styles.timelineCo}>{item.company}</p>
                  <p className={styles.timelineDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className="container">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.footerContainer} container`}>
          <p>© 2026 rolean.org. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/privacy" className={styles.footerLink}>개인정보처리방침</a>
            <a href="/terms" className={styles.footerLink}>이용약관</a>
          </div>
        </div>
      </footer>

      {/* AI Always Copilot Widget */}
      <AICopilot />
    </div>
  );
}
