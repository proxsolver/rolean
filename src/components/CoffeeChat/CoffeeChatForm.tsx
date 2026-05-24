"use client";

import styles from "./CoffeeChatForm.module.css";

const GOOGLE_BOOKING_URL = "https://calendar.app.google/jTfs3YcjsyszcvPY6";

export default function CoffeeChatForm() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--color-gold)",
          fontWeight: 500,
          marginBottom: "0.75rem",
        }}>
          Coffee Chat
        </p>
        <h2 style={{
          color: "var(--color-ivory)",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          fontWeight: 500,
          lineHeight: 1.2,
        }}>
          협업 제안 및 교육 요청
        </h2>
        <p className={styles.intro}>
          IWS/TS 업무 가이드, Power BI 데이터 가시화, 스마트팩토리 공정 컨설팅,
          바이브 코딩 입문 방법 등 모든 협업과 교육 제안을 환영합니다. 30분 커피챗으로 편하게 이야기 나눠요.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardIcon}>☕</div>
        <h3 className={styles.cardTitle}>30분 커피챗</h3>
        <p className={styles.cardDesc}>
          Google Calendar에서 원하는 날짜와 시간을 선택해 주세요.
          미팅 링크는 예약 확정 후 자동으로 안내됩니다.
        </p>
        <a
          href={GOOGLE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginTop: "1.5rem" }}
        >
          일정 예약하기
        </a>
      </div>
    </div>
  );
}
