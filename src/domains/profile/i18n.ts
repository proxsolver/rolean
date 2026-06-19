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
  "nav.practice": { ko: "Practice", en: "Practice" },
  "nav.contact": { ko: "Contact", en: "Contact" },

  // Hero
  "hero.kicker": { ko: "Domain First · AI Always", en: "Domain First · AI Always" },
  "hero.title.line1": {
    ko: "제조업이 가진 데이터에서",
    en: "Finding Optimal Solutions",
  },
  "hero.title.line2": {
    ko: "최적해를 찾는 사람.",
    en: "in Manufacturing Data.",
  },
  "hero.desc": {
    ko: "스마트팩토리는 먼 곳에 없다 — 기존 데이터의 연결에서 시작한다.",
    en: "The smart factory isn't far off — it begins by connecting the data you already have.",
  },
  "hero.cta.projects": { ko: "View Projects", en: "View Projects" },
  "hero.cta.career": { ko: "Read Career", en: "Read Career" },

  // Metadata — single source for SEO/social <title> + description
  "meta.title": {
    ko: "제조업이 가진 데이터에서 최적해를 찾는 사람",
    en: "Finding Optimal Solutions in Manufacturing Data",
  },
  "meta.description": {
    ko: "15년 제조 도메인 경력. 스마트팩토리는 먼 곳에 없다 — 기존 데이터의 연결에서 최적해를 찾습니다. Lean/IWS와 Power BI로 구축한 OEE 층별분석 대시보드는 글로벌 베스트 프랙티스로 채택. OEE 115%, MTBF 208%, 폐기율 82% 절감.",
    en: "15 years in manufacturing. The smart factory isn't far off — it starts by connecting the data you already have to find the optimum. Lean/IWS meets Power BI; my OEE stratified analysis was adopted as a global best practice. OEE +115%, MTBF +208%, Waste -82%.",
  },

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
  "philosophy.p3": {
    ko: "데이터 시각화도 같습니다. 화려한 차트가 아니라, 현장이 내일 당장 행동으로 옮길 수 있는 단순함.",
    en: "Data visualization follows the same principle. Not flashy charts, but the simplicity the frontline can turn into action tomorrow.",
  },

  // Interests / Expertise
  "expertise.kicker": { ko: "Core Expertise", en: "Core Expertise" },
  "expertise.title": {
    ko: "산업 융합 핵심 역량 및 전문 분야",
    en: "Industrial Convergence — Core Domains of Expertise",
  },

  // Manufacturing Data Practice
  "practice.kicker": { ko: "Manufacturing Data Practice", en: "Manufacturing Data Practice" },
  "practice.title": {
    ko: "글로벌 베스트 프랙티스로 채택된 데이터 시각화",
    en: "Data Visualization Adopted as Global Best Practice",
  },
  "practice.desc": {
    ko: "Power BI로 구축한 현장 데이터 시각화 — 브랜드(SKU)·근무조별 OEE와 손실을 한눈에. top management용 집계가 아닌, 현장이 내일 당장 쓸 수 있는 시각화입니다. OEE 층별분석 대시보드는 글로벌 베스트 프랙티스로 채택되었습니다.",
    en: "Frontline data visualization built in Power BI — OEE and losses by brand (SKU) and shift, at a glance. Not top-management rollups, but visualizations the floor can act on tomorrow. The OEE stratified-analysis dashboard was adopted as a global best practice.",
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

  // Contact (Coffee Chat)
  "contact.kicker": { ko: "Coffee Chat", en: "Coffee Chat" },
  "contact.title": {
    ko: "협업 제안 및 교육 요청",
    en: "Collaboration & Training Inquiries",
  },
  "contact.intro": {
    ko: "IWS/TS 업무 가이드, Power BI 데이터 가시화, 스마트팩토리 공정 컨설팅, 바이브 코딩 입문 방법 등 모든 협업과 교육 제안을 환영합니다. 30분 커피챗으로 편하게 이야기 나눠요.",
    en: "Whether it's IWS/TS guidance, Power BI data visualization, smart factory consulting, or vibe coding — all collaboration and training inquiries welcome. Let's chat over a 30-min coffee chat.",
  },
  "contact.cardTitle": { ko: "30분 커피챗", en: "30-Min Coffee Chat" },
  "contact.cardDesc": {
    ko: "Google Calendar에서 원하는 날짜와 시간을 선택해 주세요. 미팅 링크는 예약 확정 후 자동으로 안내됩니다.",
    en: "Pick a date and time in Google Calendar. A meeting link will be sent automatically once your booking is confirmed.",
  },
  "contact.cta": { ko: "일정 예약하기", en: "Book a slot" },

  // Footer
  "footer.rights": { ko: "All rights reserved.", en: "All rights reserved." },
  "footer.privacy": { ko: "개인정보처리방침", en: "Privacy Policy" },
  "footer.terms": { ko: "이용약관", en: "Terms of Service" },
};

export function t(key: string, locale: Locale): string {
  return UI[key]?.[locale] ?? key;
}
