"use client";

import { useState } from "react";
import styles from "../app/page.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) throw new Error("Submission failed");
      
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactHeader}>
        <p className={styles.subKicker}>Get In Touch</p>
        <h2 className={styles.sectionTitle}>공동 작업 및 기회 조율</h2>
        <p className={styles.contactIntro}>
          IoT 임베디드, 스마트팩토리 공정 컨설팅, 혹은 깔끔하고 직관적인 프론트엔드/백엔드 최적화 구축 등 모든 협업 제안을 환영합니다.
        </p>
      </div>

      {status === "success" ? (
        <div 
          className="glass-panel" 
          style={{ 
            padding: "2.5rem", 
            textAlign: "center", 
            border: "1px solid rgba(212, 175, 55, 0.3)",
            animation: "fadeIn 0.6s ease"
          }}
        >
          <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>✨</span>
          <h3 style={{ color: "var(--color-gold)", marginBottom: "0.75rem", fontFamily: "var(--font-heading)" }}>
            메시지 전송 완료!
          </h3>
          <p style={{ color: "var(--color-silver)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            소중한 연락 감사드립니다. 보내주신 메시지를 신속하게 검토한 후 입력하신 이메일로 답변드리겠습니다.
          </p>
          <button 
            onClick={() => setStatus("idle")} 
            className="btn-primary" 
            style={{ marginTop: "1.5rem", padding: "0.6rem 1.2rem", fontSize: "0.8rem" }}
          >
            새로 보내기
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">이름</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                placeholder="홍길동" 
                disabled={status === "submitting"}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">이메일 주소</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                placeholder="yourname@gmail.com" 
                disabled={status === "submitting"}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">메시지</label>
            <textarea 
              id="message" 
              rows={5} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required 
              placeholder="함께 협업하고 싶은 내용이나 제안을 작성해 주세요."
              disabled={status === "submitting"}
            ></textarea>
          </div>
          {status === "error" && (
            <p style={{ color: "#ff4a4a", fontSize: "0.88rem" }}>
              ⚠️ 전송 도중 에러가 발생했습니다. 다시 한번 시도해 주세요.
            </p>
          )}
          <button 
            type="submit" 
            className="btn-primary"
            disabled={status === "submitting"}
            style={{ width: "fit-content" }}
          >
            {status === "submitting" ? "전송 중..." : "보내기"}
          </button>
        </form>
      )}
    </div>
  );
}
