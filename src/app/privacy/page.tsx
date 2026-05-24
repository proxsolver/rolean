import styles from "../page.module.css";

export default function PrivacyPage() {
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
            개인정보처리방침
          </h1>
          <div style={{ color: "var(--color-silver)", display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1.05rem", lineHeight: "1.8", maxWidth: "800px" }}>
            <p>
              rolean.org(이하 "본 사이트")는 이용자의 개인정보를 중요시하며, "개인정보보호법" 및 관련 법령을 준수합니다. 본 방침은 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
            </p>
            
            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>1. 수집하는 개인정보 항목</h3>
            <p>
              본 사이트는 이용자가 문의(Contact Form)를 통해 직접 입력하는 정보에 한해 최소한의 개인정보를 수집합니다.
              <br />- <strong>수집 항목</strong>: 이름, 이메일 주소, 메시지 내용
            </p>

            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>2. 개인정보의 수집 및 이용목적</h3>
            <p>
              수집된 개인정보는 다음의 목적을 위해서만 활용됩니다.
              <br />- <strong>이용 목적</strong>: 이용자 문의에 대한 확인, 답변 및 기술 협업 조율
            </p>

            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>3. 개인정보의 보유 및 이용기간</h3>
            <p>
              이용자의 개인정보는 수집 및 이용목적이 달성된 후(문의 처리 완료 후) 지체 없이 파기합니다. 단, 관련 법령의 규정에 의하여 보존할 필요가 있는 경우 법령이 정한 일정 기간 동안 개인정보를 보관할 수 있습니다.
            </p>

            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>4. 개인정보의 파기절차 및 방법</h3>
            <p>
              원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
            </p>

            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>5. 이용자의 권리와 그 행사방법</h3>
            <p>
              이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 이메일을 통해 개인정보의 수집 및 이용 동의 철회나 삭제를 요청하실 수 있습니다. 요청 시 본인 확인 후 즉각 처리해 드립니다.
            </p>

            <h3 style={{ color: "var(--color-ivory)", marginTop: "1rem" }}>6. 개인정보 보호책임자 및 문의</h3>
            <p>
              개인정보 보호와 관련된 문의사항은 아래 연락처로 문의해 주시기 바랍니다.
              <br />- <strong>이메일</strong>: proxsolver@gmail.com
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
