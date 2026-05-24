"use client";

import styles from "./BookingConfirmation.module.css";

interface BookingConfirmationProps {
  date: string;
  timeSlot: string;
  meetLink: string | null;
  onReset: () => void;
}

export default function BookingConfirmation({
  date,
  timeSlot,
  meetLink,
  onReset,
}: BookingConfirmationProps) {
  const dateObj = new Date(date + "T00:00:00+09:00");
  const dateStr = dateObj.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div
      className="glass-panel"
      style={{
        padding: "2.5rem",
        textAlign: "center",
        border: "1px solid rgba(212, 175, 55, 0.3)",
      }}
    >
      <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>
        ☕
      </span>
      <h3
        style={{
          color: "var(--color-gold)",
          marginBottom: "0.75rem",
          fontFamily: "var(--font-heading)",
          fontSize: "1.3rem",
        }}
      >
        커피챗 예약 완료!
      </h3>
      <p style={{ color: "var(--color-ivory)", marginBottom: "0.5rem", fontSize: "1rem" }}>
        {dateStr} {timeSlot} (KST, 30분)
      </p>
      <p style={{ color: "var(--color-silver)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
        확인 이메일이 발송되었습니다.
      </p>

      {meetLink && (
        <a
          href={meetLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginBottom: "1.5rem", display: "inline-flex" }}
        >
          Google Meet 참여하기
        </a>
      )}

      <div>
        <button
          onClick={onReset}
          className="btn-primary"
          style={{ marginTop: "0.5rem", padding: "0.6rem 1.2rem", fontSize: "0.8rem" }}
        >
          다른 시간 예약하기
        </button>
      </div>
    </div>
  );
}
