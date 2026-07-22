"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./AICopilot.module.css";
import type { Locale } from "@/domains/profile/i18n";
import { trackChatEvent } from "@/components/GoogleAnalytics";

const AICopilotPanel = dynamic(() => import("./AICopilotPanel"), {
  ssr: false,
  loading: () => null,
});

export default function AICopilot({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setIsOpen(false);
    requestAnimationFrame(() => toggleRef.current?.focus());
  };

  return (
    <>
      {isOpen && <AICopilotPanel locale={locale} onClose={close} />}
      <button
        ref={toggleRef}
        type="button"
        className={`${styles.toggle} ${isOpen ? styles.toggleHidden : ""}`}
        onClick={() => {
          if (!isOpen) trackChatEvent("open");
          setIsOpen((open) => !open);
        }}
        aria-label={
          isOpen
            ? locale === "ko" ? "AI 코파일럿 닫기" : "Close AI Copilot"
            : locale === "ko" ? "AI에게 경력 질문하기" : "Ask AI about Harry"
        }
        aria-expanded={isOpen}
        aria-controls="ai-copilot-panel"
      >
        <span aria-hidden="true">{isOpen ? "×" : "AI"}</span>
      </button>
    </>
  );
}
