// ============================================================================
// i18n — Bilingual UI strings for rolean.org
// ============================================================================

export type Locale = "ko" | "en";

export const UI: Record<string, Record<Locale, string>> = {
  // Navigation
  "nav.philosophy": { ko: "Philosophy", en: "Philosophy" },
  "nav.expertise": { ko: "Expertise", en: "Expertise" },
  "nav.explorations": { ko: "Exploration", en: "Exploration" },
  "nav.projects": { ko: "Projects", en: "Projects" },
  "nav.experience": { ko: "Experience", en: "Experience" },
  "nav.contact": { ko: "Contact", en: "Contact" },

  // Hero
  "hero.kicker": { ko: "Domain First · AI Always", en: "Domain First · AI Always" },
  "hero.title.line1": { ko: "Vibe Coder Meets", en: "Vibe Coder Meets" },
  "hero.title.line2": { ko: "Lean Operation.", en: "Lean Operation." },
  "hero.desc": {
    ko: "15년간 현장에서 축적한 제조 도메인 전문성을 바탕으로 IT와 OT의 다리를 놓습니다. 공정 최적화의 Lean 사고법과 실시간 데이터 파이프라인 설계를 바탕으로, 가장 견고하고 낭비 없는 고성능 소프트웨어를 구현합니다.",
    en: "Bridging IT and OT with 15 years of hands-on manufacturing domain expertise. Applying Lean thinking from process optimization to real-time data pipeline design — building robust, waste-free, high-performance software.",
  },
  "hero.cta.projects": { ko: "View Projects", en: "View Projects" },
  "hero.cta.career": { ko: "Read Career", en: "Read Career" },

  // Metrics
  "metrics.label": { ko: "Key Achievement Metrics", en: "Key Achievement Metrics" },

  // Philosophy
  "philosophy.kicker": { ko: "Philosophy", en: "Philosophy" },
  "philosophy.title": {
    ko: "낭비를 제거하고 본질만 남기는 설계",
    en: "Eliminate Waste. Keep Only What Matters.",
  },
  "philosophy.p1": {
    ko: "생산 현장에서의 Lean과 IWS 철학은 단순한 공정 관리가 아닙니다. 가치가 생성되는 유일한 핵심 단계(Value-Added)만을 남기고 모든 불필요한 단계를 과감히 제거하는 고도의 추상화 예술입니다.",
    en: "Lean and IWS philosophy from the production floor is not simple process management. It's the art of high-level abstraction — keeping only the Value-Added steps and ruthlessly eliminating every unnecessary one.",
  },
  "philosophy.p2": {
    ko: "소프트웨어 엔지니어링 역시 같습니다. 무거운 프레임워크나 불필요하게 복잡한 아키텍처에 집착하지 않고, 비즈니스 가치와 사용자 인터페이스의 극단적 편의성을 지향하여 가장 빠르고 신뢰성 높은 최적의 코드를 작성합니다.",
    en: "Software engineering follows the same principle. No obsession with heavy frameworks or unnecessarily complex architectures — focusing on business value and extreme UI usability to write the fastest, most reliable, optimal code.",
  },

  // Interests / Expertise
  "expertise.kicker": { ko: "Core Expertise", en: "Core Expertise" },
  "expertise.title": {
    ko: "산업 융합 핵심 역량 및 전문 분야",
    en: "Industrial Convergence — Core Domains of Expertise",
  },

  // Explorations
  "explorations.kicker": { ko: "Exploration 2026", en: "Exploration 2026" },
  "explorations.title": {
    ko: "탐구하고 실험하며 구축하는 과정",
    en: "Explore, Experiment, Build — The Learning Journey",
  },
  "explorations.desc": {
    ko: "제조 현장의 도메인 지식을 소프트웨어로 번역하는 과정에서 배운 것들을 실제 프로젝트로 실험하고 검증합니다. 각 프로젝트는 실패와 성공의 기록이자, 다음 단계로 나아가는 벤치마크입니다.",
    en: "Translating manufacturing domain knowledge into software — every lesson learned is tested and validated through real projects. Each project is a record of failures and successes, a benchmark for the next step forward.",
  },
  "explorations.insight": { ko: "💡 배운 점", en: "💡 Learned" },

  // Projects
  "projects.kicker": { ko: "Open Projects", en: "Open Projects" },
  "projects.title": {
    ko: "오픈 서비스 및 포트폴리오",
    en: "Live Services & Open Projects",
  },

  // Timeline
  "timeline.kicker": { ko: "Professional History", en: "Professional History" },
  "timeline.title": {
    ko: "커리어 벤치마크 및 이력",
    en: "Career Benchmarks & Experience",
  },

  // Footer
  "footer.rights": { ko: "All rights reserved.", en: "All rights reserved." },
  "footer.privacy": { ko: "개인정보처리방침", en: "Privacy Policy" },
  "footer.terms": { ko: "이용약관", en: "Terms of Service" },
};

export function t(key: string, locale: Locale): string {
  return UI[key]?.[locale] ?? key;
}
