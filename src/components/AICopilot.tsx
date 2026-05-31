"use client";

import { useState, useRef, useEffect } from "react";
import { trackChatEvent } from "@/components/GoogleAnalytics";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AICopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "🤖 안녕하세요! Harry의 AI Copilot입니다. 저의 15년 제조 도메인(Smart Factory, Lean/IWS, OT 보안) 경력과 포트폴리오에 대해 물어보세요! 아래 추천 키워드를 클릭하거나 입력창에 질문해주시면 즉시 답변해 드릴게요.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { label: "🔌 ESP32", query: "ESP32 및 IoT 역량에 대해 알려줘" },
    { label: "🏭 Smart Factory", query: "Smart Factory 구축 경험이 궁금해" },
    { label: "📊 Lean/IWS", query: "Lean Operations 및 IWS 성과를 보여줘" },
    { label: "💼 경력 요약", query: "전체 커리어 타임라인 보여줘" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string, isSuggestion = false) => {
    if (!text.trim()) return;

    trackChatEvent(isSuggestion ? "suggestion_click" : "message_sent", text.substring(0, 50));

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) throw new Error("API request failed");
      const data = await response.json() as Message;
      setMessages((prev) => [...prev, data]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ 서버와의 연결이 원활하지 않습니다. 다시 시도해 주세요.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Safe client-side markdown regex parser
  const renderMarkdown = (text: string): string => {
    if (!text) return "";
    
    // 1. Escape HTML
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 2. Bold: **text** -> <strong>text</strong>
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // 3. Bullet points: - text -> <span class="bullet-item">• $1</span>
    html = html.replace(/^\s*-\s+(.*?)$/gm, '<span class="bullet-item">• $1</span>');

    // 4. Linebreaks: \n -> <br />
    html = html.replace(/\n/g, "<br />");

    return html;
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => {
          if (!isOpen) trackChatEvent("open");
          setIsOpen(!isOpen);
        }}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #d4af37 0%, #fcfcfc 100%)",
          border: "none",
          boxShadow: "0 8px 32px rgba(212, 175, 55, 0.35)",
          color: "#0d0f12",
          fontSize: "1.5rem",
          cursor: "pointer",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          outline: "none",
        }}
        className="copilot-toggle"
        aria-label="Toggle AI Copilot"
      >
        {isOpen ? "✕" : "🤖"}
      </button>

      {/* Embedded CSS overrides */}
      <style jsx global>{`
        .copilot-toggle:hover {
          transform: rotate(15deg) scale(1.06);
          box-shadow: 0 12px 40px rgba(212, 175, 55, 0.5);
        }
        
        /* Suggestions Custom Scrollbar - High Accessibility & Premium Aesthetics */
        .suggestions-container {
          padding: 10px 20px 14px 20px !important;
          display: flex;
          gap: 8px;
          overflow-x: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          flex-shrink: 0;
          align-items: center;
          background: rgba(13, 15, 18, 0.4);
          scrollbar-width: thin;
          scrollbar-color: rgba(212, 175, 55, 0.3) rgba(255, 255, 255, 0.01);
        }
        
        .suggestions-container::-webkit-scrollbar {
          height: 4px; /* Thin, elegant scrollbar */
        }
        
        .suggestions-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.01);
          border-radius: 2px;
        }
        
        .suggestions-container::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.3); /* Gold tint */
          border-radius: 2px;
          transition: background 0.2s ease;
        }
        
        .suggestions-container::-webkit-scrollbar-thumb:hover {
          background: #d4af37; /* Bright gold on hover */
        }

        .suggestion-chip {
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.15);
          color: #d4af37;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.76rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          flex-shrink: 0;
        }
        
        .suggestion-chip:hover {
          background: #d4af37;
          color: #0d0f12;
          border-color: #d4af37;
          transform: translateY(-1px);
        }
        
        .message-bubble {
          max-width: 85%;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        
        .message-user {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fcfcfc;
          align-self: flex-end;
          border-bottom-right-radius: 2px;
        }
        
        .message-assistant {
          background: rgba(22, 25, 31, 0.75);
          border: 1px solid rgba(212, 175, 55, 0.1);
          color: #a0a5b0;
          align-self: flex-start;
          border-bottom-left-radius: 2px;
        }
        
        .message-assistant strong {
          color: #fcfcfc;
          font-weight: 600;
        }
        
        .bullet-item {
          display: block;
          padding-left: 10px;
          margin-top: 4px;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "95px",
            right: "24px",
            width: "min(480px, 95vw)",
            height: "min(550px, 70vh)",
            background: "rgba(13, 15, 18, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "18px",
            boxShadow: "0 24px 64px rgba(0, 0, 0, 0.7)",
            display: "flex",
            flexDirection: "column",
            zIndex: 9998,
            overflow: "hidden",
            animation: "fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          {/* Header (No Shrink) */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>🤖</span>
            <div>
              <h4 style={{ margin: 0, fontSize: "0.9rem", color: "#fcfcfc", fontWeight: 600 }}>
                Harry AI Copilot
              </h4>
              <span style={{ fontSize: "0.7rem", color: "#d4af37", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>
                Domain First · AI Always
              </span>
            </div>
          </div>

          {/* Message List (Fills available space and scrolls) */}
          <div
            style={{
              flexGrow: 1,
              flexShrink: 1,
              overflowY: "auto",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.role === "user" ? "message-bubble message-user" : "message-bubble message-assistant"}
                dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
              />
            ))}
            {isLoading && (
              <div className="message-bubble message-assistant" style={{ opacity: 0.6 }}>
                답변을 생성 중입니다...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions Layer (Styled Custom Horizontal Scrollbar) */}
          <div className="suggestions-container">
            {suggestions.map((item, idx) => (
              <button
                key={idx}
                className="suggestion-chip"
                onClick={() => handleSendMessage(item.query, true)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Input Box Form (No Shrink) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(input);
            }}
            style={{
              padding: "14px 20px",
              display: "flex",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.01)",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              flexShrink: 0,
              alignItems: "center",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="질문을 입력하세요..."
              disabled={isLoading}
              style={{
                flexGrow: 1,
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "8px",
                padding: "8px 12px",
                color: "#fcfcfc",
                fontSize: "0.88rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              disabled={isLoading}
              style={{
                background: "#d4af37",
                border: "none",
                borderRadius: "8px",
                padding: "8px 14px",
                color: "#0d0f12",
                fontWeight: "600",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "background 0.2s ease",
              }}
            >
              전송
            </button>
          </form>
        </div>
      )}
    </>
  );
}
