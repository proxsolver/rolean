// ============================================================================
// Profile Data — LLM-optimized structured content for rolean.org
// Single source of truth for all site content across KO/EN locales.
// ============================================================================

import { Locale } from "./i18n";

export interface Project {
  title: string;
  url: string;
  description: Record<Locale, string>;
  tags: string[];
  emoji: string;
  status: "live" | "building" | "beta";
  impact?: Record<Locale, string>;
}

export interface Exploration {
  title: Record<Locale, string>;
  emoji: string;
  domain: Record<Locale, string>;
  description: Record<Locale, string>;
  techStack: string[];
  status: "active" | "completed" | "prototype";
  learnedInsight: Record<Locale, string>;
}

export interface SignatureWork {
  title: Record<Locale, string>;
  emoji: string;
  domain: Record<Locale, string>;
  // Hero credential banner at the top of the card (e.g. "🏆 GLOBAL BEST PRACTICE").
  credential: Record<Locale, string>;
  credentialVariant: "award" | "active";
  description: Record<Locale, string>;
  // Prominent achievement line — the headline outcome of the work.
  outcome: Record<Locale, string>;
  tags: Record<Locale, string[]>;
}

export interface Interest {
  icon: string;
  title: string;
  titleEn: string;
  desc: Record<Locale, string>;
  keywords: string[];
}

export interface TimelineItem {
  period: string;
  role: Record<Locale, string>;
  company: Record<Locale, string>;
  companyType: string;
  description: Record<Locale, string>;
  achievements: Record<Locale, string[]>;
}

export interface SkillMetric {
  label: Record<Locale, string>;
  value: string;
  context: Record<Locale, string>;
}

export const PERSON = {
  name: "이현우",
  nameEn: "Hyunwoo Lee",
  knownAs: "Harry Lee",
  title: {
    ko: "기술서비스 총괄 책임자 & 소프트웨어 엔지니어",
    en: "Technical Services Supervisor & Software Engineer",
  },
  tagline: "Domain First · AI Always",
  org: "글로벌 FMCG 기업",
  orgType: "Global Fortune 500 FMCG Manufacturer",
  location: "South Korea",
  experience: {
    ko: "15년 제조 도메인 경력",
    en: "15 years in manufacturing",
  },
  domains: [
    "Smart Factory & Industrial IoT",
    "Lean Manufacturing / IWS (Integrated Work System)",
    "OT Security & ICS Infrastructure",
    "Full-Stack Software Engineering",
    "Real-time Data Pipeline Architecture",
    "AI-powered Process Optimization",
  ],
  certifications: [
    "IWS (Integrated Work System) Certified Trainer — EY Global Consultants",
    "6Sigma Green Belt — Quality & Process Improvement",
    "ISO 9001/14001 & OHSAS 18001 Internal Auditor",
    "Power BI & Data Analytics Specialist",
  ],
  email: "proxsolver@gmail.com",
  website: "https://rolean.org",
} as const;

// Quantified achievement metrics — specific numbers that signal authority
export const KEY_METRICS: SkillMetric[] = [
  {
    label: { ko: "OEE 향상", en: "OEE Improvement" },
    value: "115%",
    context: { ko: "기존 및 신규 설비 라인에 Lean 기법 전파", en: "Lean techniques applied across legacy and new equipment lines" },
  },
  {
    label: { ko: "MTBF 증가", en: "MTBF Increase" },
    value: "208%",
    context: { ko: "예방보전 체계 및 고장 원인 분석 체계화", en: "Preventive maintenance system and root cause analysis framework" },
  },
  {
    label: { ko: "정지율 감소", en: "Downtime Reduction" },
    value: "61%",
    context: { ko: "IWS 방법론 기반 체계적 설비 관리", en: "Systematic equipment management via IWS methodology" },
  },
  {
    label: { ko: "폐기율 절감", en: "Waste Reduction" },
    value: "82%",
    context: { ko: "공정 최적화 및 Change Over 표준화", en: "Process optimization and Change Over standardization" },
  },
  {
    label: { ko: "NPS 개선", en: "NPS Shift" },
    value: "-45→+35",
    context: { ko: "4조 2교대 조직문화 혁신", en: "4-shift 24/7 team culture transformation" },
  },
  {
    label: { ko: "팀 리딩", en: "Team Led" },
    value: "40+",
    context: { ko: "다기능 생산 조직 연속 운전 총괄", en: "Multi-functional production team continuous operations" },
  },
];

// ========================================================================
// Open Projects — Publicly accessible services via rolean.org subdomains
// ========================================================================
export const PROJECTS: Project[] = [
  {
    title: "gtasks.rolean.org",
    url: "https://gtasks.rolean.org",
    description: {
      ko: "Google Tasks UI/UX 개선 프로젝트. 아이젠하워 매트릭스, 간트차트, 마인드맵 뷰로 업무 생산성을 극한으로 올리는 관리 도구입니다.",
      en: "Google Tasks UI/UX enhancer with Eisenhower Matrix, Gantt Chart, and Mind Map views for extreme productivity optimization.",
    },
    tags: ["Next.js", "Google Tasks API", "UI/UX"],
    emoji: "🎯",
    status: "live",
    impact: {
      ko: "아이젠하워 매트릭스 기반 업무 우선순위 자동 분류 및 간트차트 일정 시각화",
      en: "Auto-prioritization via Eisenhower Matrix with Gantt Chart schedule visualization",
    },
  },
  {
    title: "book.rolean.org",
    url: "https://book.rolean.org",
    description: {
      ko: "매일 독서 습관 인증 및 챌린지 플랫폼. 일간 지속성을 트래킹하고 독서 문화를 즐길 수 있는 커뮤니티형 도구입니다.",
      en: "Daily reading habit verification and challenge platform. Tracks consistency and gamifies reading culture.",
    },
    tags: ["React", "Gamification", "Habit Tracker"],
    emoji: "📖",
    status: "live",
    impact: {
      ko: "30일 챌린지 기반 독서 습관 형성 및 게이미피케이션 동기부여",
      en: "30-day challenge-based reading habit formation with gamification motivation",
    },
  },
  {
    title: "meet.rolean.org",
    url: "https://meet.rolean.org",
    description: {
      ko: "오픈소스 기반 온라인 회의 기록 및 AI 요약 시스템. 실시간 자막 전사, 화자 분리 및 핵심 요약문을 생산합니다.",
      en: "Open-source meeting recording and AI summarization. Real-time transcription, speaker diarization, and key-point extraction.",
    },
    tags: ["Open-Source", "AI Summarizer", "WebRTC"],
    emoji: "🎙️",
    status: "building",
  },
  {
    title: "test.rolean.org",
    url: "https://test.rolean.org",
    description: {
      ko: "다중지능 검사 웹 플랫폼. 간편 모드(24문항)와 심화 모드(70문항)를 제공하며, AI 기반 개인화 분석 및 공유 가능한 결과를 생성합니다.",
      en: "Multiple intelligence assessment platform. Simple mode (24Q, 5min) and advanced mode (70Q, 15min) with AI-powered personalized analysis.",
    },
    tags: ["Next.js", "OpenAI API", "Psychometrics"],
    emoji: "🧩",
    status: "live",
    impact: {
      ko: "AI 기반 개인화 분석 및 응답 일관성 검증 시스템",
      en: "AI-powered personalized analysis with response consistency validation",
    },
  },
  {
    title: "notes.rolean.org",
    url: "https://notes.rolean.org",
    description: {
      ko: "3패널 레이아웃의 AI 지식 관리 시스템. 문서 트리, 마크다운 에디터, AI 어시스턴트, 오디오 전사 및 이미지 분석 기능.",
      en: "AI knowledge base with three-panel layout: document tree, markdown editor, AI assistant, audio transcription, and image analysis.",
    },
    tags: ["Next.js 16", "Prisma", "Z.ai SDK", "AI"],
    emoji: "🧠",
    status: "live",
  },
  {
    title: "secret.rolean.org",
    url: "https://secret.rolean.org",
    description: {
      ko: "불국사의 비밀 — 1,300년 전 석공들이 숨겨놓은 암호. 초등학생을 위한 교육 미스터리 소설. 다빈치 코드 스타일의 암호 해독과 실제 과학 기반 스토리텔링.",
      en: "The Secret of Bulguksa — Ciphers hidden by stonemasons 1,300 years ago. Educational mystery novel for kids. Da Vinci Code-style cipher decoding with real science-based storytelling.",
    },
    tags: ["HTML/CSS", "Creative Writing", "Science Education"],
    emoji: "🏛️",
    status: "live",
    impact: {
      ko: "수학(황금비, 등차수열), 물리(마찰력, 내진), 화학(산화환원), 생물(광합성)을 미스터리 소설로 체험형 학습",
      en: "Experiential learning of math (golden ratio, sequences), physics (friction, seismic), chemistry (redox), biology (photosynthesis) through mystery storytelling",
    },
  },
];

// ========================================================================
// Explorations — Learning journey projects (no external links)
// ========================================================================
export const EXPLORATIONS: Exploration[] = [
  {
    title: { ko: "Agile O365 Learning Platform", en: "Agile O365 Learning Platform" },
    emoji: "🔄",
    domain: { ko: "Education Technology", en: "Education Technology" },
    description: {
      ko: "Microsoft Office 365 기반 AI 대화형 애자일 학습 플랫폼. 10주 프로그레시브 학습 프로그램과 멀티 에이전트 코칭 시스템(MindsetCoach, CeremonyGuide, ToolPractice)을 구축.",
      en: "AI-powered conversational Agile learning platform on Microsoft Office 365. 10-week progressive program with multi-agent coaching system (MindsetCoach, CeremonyGuide, ToolPractice).",
    },
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel AI SDK"],
    status: "active",
    learnedInsight: {
      ko: "애자일 도입의 가장 큰 장벽은 도구가 아니라 마인드셋 변화. AI 코칭 에이전트로 개인화된 학습 경로 설계가 효과적.",
      en: "The biggest barrier to Agile adoption isn't tools but mindset shift. AI coaching agents designing personalized learning paths is highly effective.",
    },
  },
  {
    title: { ko: "Vexa Meeting Bot Platform", en: "Vexa Meeting Bot Platform" },
    emoji: "🤖",
    domain: { ko: "Meeting Intelligence", en: "Meeting Intelligence" },
    description: {
      ko: "자가 호스팅 가능한 미팅 봇 API 및 전사 서비스. Google Meet, Teams, Zoom 실시간 전사, 화자 식별, 인터랙티브 봇 제어, MCP 서버(17개 툴) 제공.",
      en: "Self-hostable meeting bot API and transcription service. Real-time transcription, speaker ID, interactive bot controls, MCP server with 17 tools across Meet, Teams, Zoom.",
    },
    techStack: ["Node.js", "Docker", "Kubernetes", "MCP Protocol"],
    status: "active",
    learnedInsight: {
      ko: "미팅 데이터의 가치는 전사가 아니라 후속 액션에 있음. AI가 결과를 실행 가능한 태스크로 자동 변환하는 것이 진정한 생산성 혁신.",
      en: "Meeting data value lies not in transcription but in follow-up actions. AI auto-converting outcomes into actionable tasks is the real productivity revolution.",
    },
  },
  {
    title: { ko: "EBS English Learning Recorder", en: "EBS English Learning Recorder" },
    emoji: "📻",
    domain: { ko: "Automation & Education", en: "Automation & Education" },
    description: {
      ko: "EBS FM 라디오 영어 학습 프로그램 자동 녹음 시스템. 5개 프로그램(05:59-09:40 KST)을 자동 녹음하고 Telegram으로 업로드.",
      en: "Automated EBS FM English learning radio recorder. Records 5 daily programs (05:59-09:40 KST) and uploads to Telegram automatically.",
    },
    techStack: ["Python", "Telegram Bot API", "systemd"],
    status: "completed",
    learnedInsight: {
      ko: "작은 자동화가 큰 습관을 만듦. 매일 자동 녹음된 파일이 Telegram으로 오면 학습의 장벽이 0이 됨.",
      en: "Small automations build big habits. When auto-recorded files arrive via Telegram daily, the learning barrier drops to zero.",
    },
  },
];

// ========================================================================
// Manufacturing Data Practice — Power BI 데이터 시각화 대표작
// 글로벌 베스트 프랙티스로 채택된 현장 데이터 시각화 산출물
// ========================================================================
export const MANUFACTURING_DATA_PRACTICE: SignatureWork[] = [
  {
    title: { ko: "OEE 층별분석 대시보드", en: "OEE Stratified Analysis Dashboard" },
    emoji: "🏭",
    domain: { ko: "제조 데이터 시각화", en: "Manufacturing Data Visualization" },
    credential: { ko: "GLOBAL BEST PRACTICE", en: "GLOBAL BEST PRACTICE" },
    credentialVariant: "award",
    description: {
      ko: "브랜드(SKU)별, 근무조별 OEE 값과 손실 경향성을 실시간으로 파악할 수 있는 Power BI 대시보드. 기존에는 글로벌 데이터를 단순 집계하여 top management용으로만 사용되던 것을, 공장장부터 현장 직원까지 모든 계층이 일일 의사결정에 활용하도록 재설계.",
      en: "A Power BI dashboard that surfaces OEE values and loss trends by brand (SKU) and shift in real time. What used to be simple global rollups for top management only was redesigned so every layer — from plant managers to frontline operators — uses it for daily decision-making.",
    },
    outcome: {
      ko: "글로벌 베스트 프랙티스로 채택되어 타 지사에 공유되었습니다.",
      en: "Adopted as a global best practice and shared with other affiliates.",
    },
    tags: {
      ko: ["Power BI", "OEE", "손실분석", "글로벌 확산"],
      en: ["Power BI", "OEE", "Loss Analysis", "Global Rollout"],
    },
  },
  {
    title: { ko: "Coaching on the Floor 대시보드", en: "Coaching on the Floor Dashboard" },
    emoji: "📋",
    domain: { ko: "현장 운영", en: "Frontline Operations" },
    credential: { ko: "GLOBAL RECOGNITION", en: "GLOBAL RECOGNITION" },
    credentialVariant: "award",
    description: {
      ko: "현장 인원의 OPEN+ 활동 이력과 역량 수준을 단일 페이지에서 통합 조회하는 코칭 전용 대시보드. 현장 리더가 데이터를 넘겨보며 즉시 코칭 포인트를 식별할 수 있도록, 꼭 필요한 정보만 심플하게 배치.",
      en: "A coaching dashboard that consolidates OPEN+ activity history and capability levels onto a single page. Curated with only the essentials, so frontline leaders can scan the data and instantly spot coaching points.",
    },
    outcome: {
      ko: "타 국가 시연을 통해 현장 리더용 통합 화면의 필요성을 검증했습니다.",
      en: "Cross-country demos validated the need for a unified view for frontline leaders.",
    },
    tags: {
      ko: ["Power BI", "역량관리", "현장코칭", "OPEN+"],
      en: ["Power BI", "Competency Mgmt", "Floor Coaching", "OPEN+"],
    },
  },
  {
    title: { ko: "사내 Power BI & 데이터 리터러시 교육", en: "In-house Power BI & Data Literacy Training" },
    emoji: "📣",
    domain: { ko: "데이터 역량화", en: "Data Empowerment" },
    credential: { ko: "● ONGOING", en: "● ONGOING" },
    credentialVariant: "active",
    description: {
      ko: "도구 사용법이 아닌 ‘데이터를 읽는 사고법’을 전수하는 입문 교육. 현장 엔지니어들이 스스로 데이터를 읽고, 질문을 던지고, 개선 액션을 도출할 수 있도록 역량화. Power BI는 도구일 뿐 — 중요한 건 데이터를 의사결정으로 연결하는 사고법.",
      en: "An introductory course teaching not tool mechanics but the thinking to read data. Equips frontline engineers to read data themselves, ask the right questions, and derive improvement actions. Power BI is just a tool — what matters is the thinking that turns data into decisions.",
    },
    outcome: {
      ko: "현장 엔지니어의 자율적 데이터 기반 의사결정 체계 확립.",
      en: "Established a self-driven, data-based decision-making culture among frontline engineers.",
    },
    tags: {
      ko: ["Power BI", "Data Literacy", "교육설계", "역량화"],
      en: ["Power BI", "Data Literacy", "Curriculum Design", "Empowerment"],
    },
  },
];

// ========================================================================
// Core Expertise / Interests
// ========================================================================
export const INTERESTS: Interest[] = [
  {
    icon: "🔌",
    title: "ESP32 / IoT",
    titleEn: "Embedded IoT Engineering",
    desc: {
      ko: "임베디드 하드웨어 제어 및 센서 데이터 수집 파이프라인 설계. PTC Kepware를 통한 산업용 OT 인프라 연동 경험 보유.",
      en: "Embedded hardware control and sensor data pipeline design. Experienced with industrial OT infrastructure integration via PTC Kepware.",
    },
    keywords: ["ESP32", "IoT", "PTC Kepware", "Edge Computing"],
  },
  {
    icon: "🏭",
    title: "Smart Factory",
    titleEn: "Smart Factory Architecture",
    desc: {
      ko: "제조 설비 OEE 극대화 및 공정 시각화 시스템 구축. PM Pillar Owner로서 설비 자산 관리 및 운영비 최적화 총괄.",
      en: "Manufacturing OEE maximization and process visualization. PM Pillar Owner overseeing asset management and operational cost optimization.",
    },
    keywords: ["Smart Factory", "OEE", "PM Pillar", "Real-time Monitoring"],
  },
  {
    icon: "📊",
    title: "Lean / IWS",
    titleEn: "Lean Manufacturing & IWS",
    desc: {
      ko: "글로벌 IWS 기반 낭비 제거 및 지속 가능 개선. 이탈리아 볼로냐 공장 STA 파견, EY 컨설턴트 직접 전수.",
      en: "Waste elimination via Integrated Work System. STA dispatched to Bologna, Italy; directly trained by EY global consultants.",
    },
    keywords: ["Lean", "IWS", "Kaizen", "Value Stream Mapping"],
  },
  {
    icon: "🔐",
    title: "OT Security",
    titleEn: "Operational Technology Security",
    desc: {
      ko: "산업 현장 ICS/OT 침입 탐지 및 다계층 사이버보안. 보안망 격리된 OT 환경에서 안전한 데이터 통신 설계.",
      en: "ICS/OT intrusion detection and multi-layered cybersecurity. Secure data communication within air-gapped OT environments.",
    },
    keywords: ["OT Security", "ICS", "SCADA", "Air-Gap"],
  },
  {
    icon: "📈",
    title: "데이터 시각화 / Power BI",
    titleEn: "Data Visualization / Power BI",
    desc: {
      ko: "공장 현장의 복잡한 데이터를 단순하게. 브랜드(SKU)별, 근무조별 OEE와 손실 경향성을 한눈에 파악할 수 있는 층별분석 대시보드를 설계합니다. top management용 집계가 아닌, 현장이 내일 당장 쓸 수 있는 시각화.",
      en: "Making complex factory-floor data simple. Designs stratified-analysis dashboards that surface OEE and loss trends by brand (SKU) and shift at a glance — not top-management rollups, but visualizations the frontline can act on tomorrow.",
    },
    keywords: ["Power BI", "OEE 층별분석", "Lean Data Design", "Data Democratization"],
  },
];

// ========================================================================
// Career Timeline
// ========================================================================
export const TIMELINE: TimelineItem[] = [
  {
    period: "2026.03 — 현재",
    role: {
      ko: "Technical Services Supervisor",
      en: "Technical Services Supervisor",
    },
    company: {
      ko: "글로벌 FMCG 기업",
      en: "Global Fortune 500 FMCG",
    },
    companyType: "Global Fortune 500 FMCG",
    description: {
      ko: "전체 생산설비 운영비 최적화 및 Smart Factory 기반 구축 리드. PM Pillar Owner로서 자산 신뢰성 보장. PTC Kepware 기반 실시간 설비 모니터링 및 AI 융합 파이프라인 구축 주도.",
      en: "Leading operational cost optimization and Smart Factory infrastructure. As PM Pillar Owner, ensuring asset reliability. Pioneering real-time equipment monitoring and AI integration via PTC Kepware.",
    },
    achievements: {
      ko: [
        "PTC Kepware 기반 실시간 설비 모니터링 구축",
        "PM Pillar Owner로서 R&M Cost 경감 주도",
        "IT/OT 하이브리드 브릿지 아키텍처 설계",
        "AI 융합 파이프라인 기획 및 구축 리드",
      ],
      en: [
        "Built real-time equipment monitoring via PTC Kepware",
        "Led R&M cost reduction as PM Pillar Owner",
        "Designed IT/OT hybrid bridge architecture",
        "Pioneered AI integration pipeline for manufacturing",
      ],
    },
  },
  {
    period: "2024.02 — 2026.03",
    role: {
      ko: "Deployment Lead (Operations Excellence)",
      en: "Deployment Lead, Operations Excellence",
    },
    company: { ko: "글로벌 FMCG 기업", en: "Global Fortune 500 FMCG" },
    companyType: "Global Fortune 500 FMCG",
    description: {
      ko: "생산 공정 표준화(SWP) 총괄 오너. 5S, Change Over, Digital Training, Data Integrity. Power BI 실시간 모니터링 시스템 구축.",
      en: "Overall SWP owner — 5S, Change Over, Digital Training, Data Integrity. Built Power BI real-time monitoring system.",
    },
    achievements: {
      ko: [
        "4대 SWP 총괄 오너",
        "Power BI 실시간 대시보드 구축",
        "디지털 기술 교육 체계 수립",
        "Data Integrity 표준화",
      ],
      en: [
        "Overall owner of 4 core SWP pillars",
        "Built Power BI real-time monitoring dashboard",
        "Established digital technical training system",
        "Standardized data integrity framework",
      ],
    },
  },
  {
    period: "2019.08 — 2024.02",
    role: {
      ko: "Line Lead (Secondary Production Manager)",
      en: "Line Lead, Secondary Production",
    },
    company: { ko: "글로벌 FMCG 기업", en: "Global Fortune 500 FMCG" },
    companyType: "Global Fortune 500 FMCG",
    description: {
      ko: "신제품 라인 24시간 연속 운전 총괄. 40명 이상 다기능 조직 매니징. NPS -45→+35 혁신.",
      en: "Managed 24/7 new product line. Led 40+ multi-functional team. Achieved NPS transformation from -45 to +35.",
    },
    achievements: {
      ko: [
        "40+ 인원 다기능 조직 24/7 운전 총괄",
        "NPS -45 → +35 혁신",
        "1:1 GROW 코칭 체계 도입",
        "MS Teams & Power BI 디지털 협업 도입",
      ],
      en: [
        "Managed 40+ multi-functional team across 4 shifts",
        "Transformed NPS from -45 to +35",
        "Introduced 1:1 GROW coaching system",
        "Deployed MS Teams & Power BI digital collaboration",
      ],
    },
  },
  {
    period: "2017.07 — 2019.08",
    role: {
      ko: "Process Lead Trainer (이탈리아 STA 파견)",
      en: "Process Lead Trainer (STA — Italy)",
    },
    company: {
      ko: "글로벌 FMCG 기업 (이탈리아 볼로냐 공장)",
      en: "Global Fortune 500 FMCG — Bologna, Italy Plant",
    },
    companyType: "Global Fortune 500 FMCG — Italy",
    description: {
      ko: "이탈리아 볼로냐 공장 파견. EY 컨설턴트로부터 IWS 방법론 직접 전수. 공정 변화 관리 트레이너 자격 획득. OEE 115%, Waste 82% 감소 리드.",
      en: "Dispatched to Bologna, Italy. Directly trained by EY consultants on IWS methodology. Certified process change management trainer. Led 115% OEE and 82% waste reduction.",
    },
    achievements: {
      ko: [
        "IWS 공정 변화 관리 트레이너 자격 (EY 인증)",
        "OEE 115% 달성",
        "폐기율 82% 감소",
        "MTBF 208% 증가",
      ],
      en: [
        "IWS Certified Trainer (EY credential)",
        "Achieved 115% OEE improvement",
        "Reduced waste by 82%",
        "Increased MTBF by 208%",
      ],
    },
  },
  {
    period: "2015.08 — 2017.06",
    role: { ko: "Process Engineer", en: "Process Engineer" },
    company: { ko: "글로벌 FMCG 기업", en: "Global Fortune 500 FMCG" },
    companyType: "Global Fortune 500 FMCG",
    description: {
      ko: "LES (Logistic Execution System) 국내 최초 도입 프로젝트 Managing. ISO 9001/14001, OHSAS 18001 사내 감사팀 주도.",
      en: "Managed Korea's first LES introduction. Led internal audit team for ISO 9001/14001 and OHSAS 18001.",
    },
    achievements: {
      ko: [
        "LES 국내 최초 도입 프로젝트 Managing",
        "ISO 9001/14001 사내 감사팀 주도",
        "공정 표준화 체계 수립",
      ],
      en: [
        "Managed Korea's first LES implementation",
        "Led ISO 9001/14001 internal audit team",
        "Established process standardization framework",
      ],
    },
  },
  {
    period: "2012.01 — 2015.08",
    role: { ko: "Production Engineer", en: "Production Engineer" },
    company: {
      ko: "글로벌 대형 조선 중공업사",
      en: "Global Shipbuilding & Heavy Industry",
    },
    companyType: "Global Shipbuilding",
    description: {
      ko: "조선사업본부 선박 기계설치 공정 총괄. LNG 특수선 및 초대형 컨테이너선 메인 엔진 어라인먼트/인스톨레이션 관리.",
      en: "Overall engineer for ship machinery installation. Managed main engine alignment for LNG carriers and ultra-large container ships.",
    },
    achievements: {
      ko: [
        "LNG 특수선 메인 엔진 어라인먼트 관리",
        "초대형 컨테이너선 설치 공정 총괄",
      ],
      en: [
        "Managed main engine alignment for LNG carriers",
        "Led installation process for ultra-large container ships",
      ],
    },
  },
  {
    period: "2010.10 — 2011.12",
    role: { ko: "Process Engineer", en: "Process Engineer" },
    company: {
      ko: "글로벌 알루미늄 압연 기업",
      en: "Global Aluminum Rolling Company",
    },
    companyType: "Global Aluminum",
    description: {
      ko: "알루미늄 주조 공정 엔지니어. 6Sigma Green Belt 획득. 생산 라인 벤치마킹 기술 혁신 수행.",
      en: "Aluminum casting process engineer. Earned 6Sigma Green Belt. Performed production line benchmarking and technical innovation.",
    },
    achievements: {
      ko: [
        "6Sigma Green Belt 획득",
        "알루미늄 주조 공정 품질 개선",
      ],
      en: [
        "Earned 6Sigma Green Belt certification",
        "Improved aluminum casting process quality",
      ],
    },
  },
];
