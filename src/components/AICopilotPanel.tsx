"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AICopilot.module.css";
import type { Locale } from "@/domains/profile/i18n";
import { trackChatEvent } from "@/components/GoogleAnalytics";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const COPY = {
  ko: {
    greeting: "안녕하세요. Harry의 AI 코파일럿입니다. Power BI 데이터 시각화, Lean/IWS, 스마트팩토리, 15년 제조 경력에 대해 질문해 주세요.",
    input: "질문을 입력하세요",
    send: "전송",
    loading: "답변을 생성 중입니다…",
    error: "서버와의 연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요.",
    close: "AI 코파일럿 닫기",
    suggestions: [
      ["Power BI 대표작", "Power BI 데이터 시각화 대표작을 보여줘"],
      ["베스트 프랙티스", "OEE 층별분석 대시보드 성과가 궁금해"],
      ["Smart Factory", "Smart Factory 데이터 파이프라인 구축 경험이 궁금해"],
      ["경력 요약", "전체 커리어 타임라인을 요약해줘"],
    ],
  },
  en: {
    greeting: "Hi, I’m Harry’s AI Copilot. Ask about his Power BI work, Lean/IWS practice, smart-factory projects, or 15 years in manufacturing.",
    input: "Ask a question",
    send: "Send",
    loading: "Preparing an answer…",
    error: "The connection is unavailable right now. Please try again shortly.",
    close: "Close AI Copilot",
    suggestions: [
      ["Power BI work", "Show me Harry's signature Power BI work"],
      ["Best practice", "What was the outcome of the OEE dashboard?"],
      ["Smart Factory", "Tell me about Harry's smart-factory data pipeline experience"],
      ["Career summary", "Summarize Harry's career timeline"],
    ],
  },
} as const;

function renderMarkdown(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/^\s*-\s+(.*?)$/gm, '<span class="copilot-bullet">• $1</span>')
    .replace(/\n/g, "<br />");
}

export default function AICopilotPanel({ locale, onClose }: { locale: Locale; onClose: () => void }) {
  const copy = COPY[locale];
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: copy.greeting },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (text: string, isSuggestion = false) => {
    if (!text.trim() || isLoading) return;

    trackChatEvent(isSuggestion ? "suggestion_click" : "message_sent", text.slice(0, 50));
    const userMessage: Message = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      if (!response.ok) throw new Error("API request failed");
      const data = await response.json() as Message;
      setMessages((current) => [...current, data]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: copy.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="ai-copilot-panel"
      className={styles.panel}
      role="dialog"
      aria-labelledby="ai-copilot-title"
    >
      <header className={styles.panelHeader}>
        <span className={styles.panelMonogram} aria-hidden="true">AI</span>
        <div>
          <h2 id="ai-copilot-title" className={styles.panelTitle}>Harry AI Copilot</h2>
          <p className={styles.panelKicker}>Domain First · AI Always</p>
        </div>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label={copy.close}>×</button>
      </header>

      <div className={styles.messages} aria-live="polite" aria-busy={isLoading}>
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`${styles.message} ${message.role === "user" ? styles.userMessage : styles.assistantMessage}`}
            dangerouslySetInnerHTML={{ __html: renderMarkdown(message.content) }}
          />
        ))}
        {isLoading && <p className={`${styles.message} ${styles.assistantMessage}`}>{copy.loading}</p>}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.suggestions} aria-label={locale === "ko" ? "추천 질문" : "Suggested questions"}>
        {copy.suggestions.map(([label, query]) => (
          <button key={label} type="button" className={styles.suggestion} onClick={() => sendMessage(query, true)}>
            {label}
          </button>
        ))}
      </div>

      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage(input);
        }}
      >
        <label htmlFor="ai-copilot-input" className={styles.srOnly}>{copy.input}</label>
        <input
          ref={inputRef}
          id="ai-copilot-input"
          className={styles.input}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={`${copy.input}…`}
          disabled={isLoading}
          autoComplete="off"
        />
        <button type="submit" className={styles.sendButton} disabled={isLoading || !input.trim()}>{copy.send}</button>
      </form>
    </section>
  );
}
