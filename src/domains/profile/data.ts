export interface Project {
  title: string;
  url: string;
  description: string;
  tags: string[];
  emoji: string;
}

export interface Interest {
  icon: string;
  title: string;
  desc: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    title: "gtasks.rolean.org",
    url: "https://gtasks.rolean.org",
    description: "Google Tasks UI/UX 개선 프로젝트. 아이젠하워 매트릭스, 간트차트, 마인드맵 뷰로 업무 생산성을 극한으로 올리는 관리 도구입니다.",
    tags: ["Next.js", "Google Tasks API", "UI/UX Enhancer"],
    emoji: "🎯",
  },
  {
    title: "book.rolean.org",
    url: "https://book.rolean.org",
    description: "매일 독서 습관 인증 및 챌린지 플랫폼. 일간 지속성을 트래킹하고 독서 문화를 즐길 수 있는 커뮤니티형 도구입니다.",
    tags: ["React", "Gamification", "Habit Tracker"],
    emoji: "📖",
  },
  {
    title: "meet.rolean.org",
    url: "https://meet.rolean.org",
    description: "오픈소스 기반 온라인 회의 기록 및 AI 요약 시스템. 실시간 자막 전사, 화자 분리 및 실시간 핵심 요약문을 생산합니다.",
    tags: ["Open-Source", "AI Summarizer", "WebRTC"],
    emoji: "🎙️",
  },
];

export const INTERESTS: Interest[] = [
  { icon: "🔌", title: "ESP32 / IoT", desc: "임베디드 하드웨어 제어 및 센서 데이터 수집 파이프라인 설계" },
  { icon: "🏭", title: "Smart Factory", desc: "제조 설비 OEE(설비종합효율) 극대화 및 공정 시각화 시스템 구축" },
  { icon: "📊", title: "Lean / IWS", desc: "글로벌 생산공정 혁신론(IWS) 기반 낭비 제거 및 지속 가능 개선" },
  { icon: "🔐", title: "OT Security", desc: "산업 현장 제어 시스템(ICS/OT)의 침입 탐지 및 다계층 사이버보안" },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: "2026.03 — 현재",
    role: "Technical Services Supervisor",
    company: "글로벌 FMCG 기업",
    description: "글로벌 생산 공정의 전체 생산설비 운영비 최적화 및 Smart Factory 기반 구축 리드. 설비 자산 및 비용 관리(PM Pillar Owner)로서 자산 신뢰성 보장. PTC Kepware 등을 활용해 안전한 OT 인프라 환경 위 실시간 설비 모니터링 및 AI 융합 파이프라인 구축 주도. 15년간의 제조 도메인 지식을 IT/OT를 잇는 교량으로 삼아 데이터 기반 공장 혁신 실현.",
  },
  {
    period: "2024.02 — 2026.03",
    role: "Deployment Lead (Operations Excellence)",
    company: "글로벌 FMCG 기업",
    description: "생산 공정 표준화(SWP) 총괄 오너 (5S, Change Over, Digital Technical Training & Transfer, Data Integrity). 현장 데이터 통합 및 Power BI 실시간 모니터링 시스템 구축.",
  },
  {
    period: "2019.08 — 2024.02",
    role: "Line Lead (Secondary Production Manager)",
    company: "글로벌 FMCG 기업",
    description: "신제품 라인 24시간 연속 운전 총괄. 40명 이상 다기능 조직 매니징. KPI 기반 생산성 관리 및 조직 문화 지표(NPS) 대폭 개선 (-45% → +35%).",
  },
  {
    period: "2017.07 — 2019.08",
    role: "Process Lead Trainer",
    company: "글로벌 FMCG 기업 (이탈리아 STA 파견)",
    description: "이탈리아 볼로냐 공장 파견(STA). 글로벌 EY 컨설턴트들로부터 IWS(Integrated Work System) 방법론을 직접 전수받아 공정 변화 관리 트레이너 자격 획득. 신규 제조 라인 도입 및 OEE 115% 달성, 비계획 정지율(Waste) 82% 감소 리드.",
  },
  {
    period: "2015.08 — 2017.06",
    role: "Process Engineer",
    company: "글로벌 FMCG 기업",
    description: "LES (Logistic Execution System) 국내 최초 도입 프로젝트 Managing. 공정 표준화 및 ISO 9001/14001, OHSAS 18001 사내 감사팀 주도.",
  },
  {
    period: "2012.01 — 2015.08",
    role: "Production Engineer",
    company: "글로벌 대형 조선 중공업사",
    description: "조선사업본부 선박 기계설치 공정 총괄 엔지니어. LNG 특수선 및 초대형 컨테이너선 메인 엔진 어라인먼트/인스톨레이션 관리.",
  },
  {
    period: "2010.10 — 2011.12",
    role: "Process Engineer",
    company: "글로벌 알루미늄 압연 기업",
    description: "알루미늄 주조 공정 엔지니어. 안전/품질 개선 6Sigma Green Belt 획득 및 생산 라인 벤치마킹 기술 혁신 수행.",
  },
];
