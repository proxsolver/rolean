"use client";

import { useState } from "react";
import styles from "./CoffeeChatForm.module.css";
import DateTimePicker from "./DateTimePicker";
import BookingConfirmation from "./BookingConfirmation";

type Status = "idle" | "submitting" | "success" | "error";

interface BookingResult {
  meetLink: string | null;
  date: string;
  timeSlot: string;
}

export default function CoffeeChatForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !topic || !date || !timeSlot) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, date, timeSlot }),
      });

      if (!response.ok) {
        const errorData = (await response.json()) as { error?: string };
        throw new Error(errorData.error || "Booking failed");
      }

      const data = (await response.json()) as {
        booking: { meetLink: string | null; date: string; timeSlot: string };
      };

      setBookingResult(data.booking);
      setStatus("success");
    } catch (err) {
      console.error("Booking error:", err);
      setStatus("error");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setTopic("");
    setDate("");
    setTimeSlot("");
    setStatus("idle");
    setBookingResult(null);
  };

  if (status === "success" && bookingResult) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className="subKicker">Coffee Chat</p>
          <h2 style={{ color: "var(--color-ivory)", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>
            예약이 확정되었습니다
          </h2>
        </div>
        <BookingConfirmation
          date={bookingResult.date}
          timeSlot={bookingResult.timeSlot}
          meetLink={bookingResult.meetLink}
          onReset={handleReset}
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className="subKicker">Coffee Chat</p>
        <h2 style={{ color: "var(--color-ivory)", fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>
          협업 제안 및 교육 요청
        </h2>
        <p className={styles.intro}>
          IoT 임베디드, 스마트팩토리 공정 컨설팅, 프론트엔드/백엔드 최적화 구축 등 모든 협업과 교육
          제안을 환영합니다. 30분 커피챗으로 편하게 이야기 나눠요.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="chat-name">이름</label>
            <input
              type="text"
              id="chat-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="홍길동"
              disabled={status === "submitting"}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="chat-email">이메일</label>
            <input
              type="email"
              id="chat-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="yourname@gmail.com"
              disabled={status === "submitting"}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>날짜 및 시간</label>
          <DateTimePicker
            selectedDate={date}
            selectedSlot={timeSlot}
            onDateChange={setDate}
            onSlotChange={setTimeSlot}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="chat-topic">주제</label>
          <textarea
            id="chat-topic"
            rows={3}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            placeholder="함께 이야기 나누고 싶은 주제를 적어주세요."
            disabled={status === "submitting"}
          />
        </div>

        {status === "error" && (
          <p className={styles.error}>
            예약 처리 중 오류가 발생했습니다. 다시 시도해 주세요.
          </p>
        )}

        <button
          type="submit"
          className="btn-primary"
          disabled={status === "submitting" || !date || !timeSlot}
          style={{ width: "fit-content", opacity: !date || !timeSlot ? 0.4 : 1 }}
        >
          {status === "submitting" ? "예약 처리 중..." : "커피챗 예약하기"}
        </button>
      </form>
    </div>
  );
}
