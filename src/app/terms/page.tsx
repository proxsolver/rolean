import styles from "../page.module.css";

export default function TermsPage() {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.header}>
        <div className={`${styles.headerContainer} container`}>
          <a href="/" className={styles.logo}>
            rolean<span className={styles.logoDot}>.</span>org
          </a>
          <nav className={styles.nav}>
            <a href="/" className={styles.navLink}>Back to Home</a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className={styles.hero} style={{ minHeight: "auto", paddingTop: "160px" }}>
        <div className="container">
          <p className={styles.heroKicker}>Compliance</p>
          <h1 className={styles.heroTitle} style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
            이용약관
          </h1>
          <div style={{ color: "var(--color-silver)", display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "800px" }}>
            <p>
              본 약관은 rolean.org(이하 "본 사이트")가 제공하는 서비스의 이용조건 및 절차, 이용자와 본 사이트의 권리, 의무, 책임사항을 규정함을 목적으로 합니다.
            </p>
            
            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>1. 약관의 효력 및 변경</h3>
            <p>
              본 약관은 본 사이트 화면에 게시하거나 기타의 방법으로 이용자에게 공시함으로써 효력이 발생합니다. 본 사이트는 합리적인 사유가 발생할 경우 관련 법령을 위배하지 않는 범위 내에서 이 약관을 개정할 수 있으며, 개정된 약관은 공시함으로써 효력을 발생합니다.
            </p>

            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>2. 서비스 이용</h3>
            <p>
              이용자는 본 사이트가 제공하는 포트폴리오 조회, 관심 정보 읽기, 문의 접수(Contact Form) 등의 서비스를 자유롭게 이용할 수 있습니다.
              <br />단, 다음 각 호에 해당하는 경우 이용자는 서비스 이용에 제한을 받을 수 있습니다.
              <br />- 타인의 명의를 도용하여 문의를 남기는 행위
              <br />- 본 사이트의 서버나 인프라에 무리를 주는 악의적인 해킹 및 공격 행위
            </p>

            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>3. 개인정보 보호</h3>
            <p>
              본 사이트는 이용자의 개인정보를 매우 소중하게 다루며, 관련 법령 및 별도로 고지된 '개인정보처리방침'에 의거하여 철저히 관리합니다. 자세한 사항은 본 사이트의 <a href="/privacy" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>개인정보처리방침</a>을 참고해주시기 바랍니다.
            </p>

            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>4. 책임의 한계 및 면책</h3>
            <p>
              본 사이트에 게재된 이력서 정보, 프로젝트 세부 사양, 블로그 글 및 기타 컨텐츠는 정보 제공 및 포트폴리오 공개의 목적으로 작성되었습니다. 사이트의 컨텐츠 신뢰성에 기인하여 발생하는 결과에 대해 본 사이트는 법적인 책임을 지지 않습니다.
              <br />또한 천재지변, 서버 점검 및 네트워크 중단 등 불가항력적인 사유로 서비스 제공이 불가능한 경우에 대하여 본 사이트는 면책됩니다.
            </p>

            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>5. 준거법 및 관할법원</h3>
            <p>
              본 약관 및 서비스 이용과 관련하여 발생하는 분쟁에 대해서는 대한민국 법률을 준거법으로 하며, 소송이 제기될 경우 민사소송법상의 관할법원을 전속 관할법원으로 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} style={{ marginTop: "80px" }}>
        <div className={`${styles.footerContainer} container`}>
          <p>© 2026 rolean.org. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
