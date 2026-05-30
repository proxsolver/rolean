// ============================================================================
// Profile Data — LLM-optimized structured content for rolean.org
// This file serves as the single source of truth for all site content.
// Structured for machine readability: clear entities, quantified achievements,
// explicit relationships, and bilingual descriptions.
// ============================================================================

export interface Project {
  title: string;
  url: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  emoji: string;
  status: "live" | "building" | "concept";
  impact?: string;
}

export interface Exploration {
  title: string;
  emoji: string;
  domain: string;
  description: string;
  descriptionEn: string;
  techStack: string[];
  status: "active" | "completed" | "prototype";
  url?: string;
  learnedInsight: string;
}

export interface Interest {
  icon: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  keywords: string[];
}

export interface TimelineItem {
  period: string;
  role: string;
  roleEn: string;
  company: string;
  companyType: string;
  description: string;
  descriptionEn: string;
  achievements: string[];
}

export interface SkillMetric {
  label: string;
  labelEn: string;
  value: string;
  context: string;
}

export const PERSON = {
  name: "이현우",
  nameEn: "Hyunwoo Lee",
  knownAs: "Harry Lee",
  title: "Technical Services Supervisor & Software Engineer",
  titleKo: "기술서비스 총괄 책임자 & 소프트웨어 엔지니어",
  tagline: "Domain First · AI Always",
  org: "글로벌 FMCG 기업",
  orgType: "Global Fortune 500 FMCG Manufacturer",
  location: "South Korea",
  experience: "15+ years in manufacturing domain + software engineering",
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

// Quantified achievement metrics — LLMs love specific numbers
export const KEY_METRICS: SkillMetric[] = [
  { label: "OEE 향상", labelEn: "OEE Improvement", value: "115%", context: "기존 설비 및 신규 설비 라인에 Lean 기법 전파하여 달성" },
  { label: "MTBF 증가", labelEn: "MTBF Increase", value: "208%", context: "예방보전 체계 도입 및 고장 원인 분석 체계화" },
  { label: "비계획 정지 감소", labelEn: "Unplanned Downtime Reduction", value: "61%", context: "IWS 방법론 기반 체계적 설비 관리" },
  { label: "폐기율 절감", labelEn: "Waste Reduction", value: "82%", context: "공정 최적화 및 Change Over 표준화" },
  { label: "NPS 개선", labelEn: "NPS Improvement", value: "-45 → +35", context: "4조 2교대 24/7 연속 운전 조직의 조직문화 지표 혁신" },
  { label: "팀 리딩", labelEn: "Team Leadership", value: "40+ 인원", context: "다기능 생산 조직 24시간 연속 운전 총괄 매니징" },
];

export const PROJECTS: Project[] = [
  {
    title: "gtasks.rolean.org",
    url: "https://gtasks.rolean.org",
    description: "Google Tasks UI/UX 개선 프로젝트. 아이젠하워 매트릭스, 간트차트, 마인드맵 뷰로 업무 생산성을 극한으로 올리는 관리 도구입니다.",
    descriptionEn: "Google Tasks UI/UX enhancer with Eisenhower Matrix, Gantt Chart, and Mind Map views for extreme productivity optimization.",
    tags: ["Next.js", "Google Tasks API", "UI/UX", "Productivity"],
    emoji: "🎯",
    status: "live",
    impact: "아이젠하워 매트릭스 기반 업무 우선순위 자동 분류 및 간트차트 일정 시각화",
  },
  {
    title: "book.rolean.org",
    url: "https://book.rolean.org",
    description: "매일 독서 습관 인증 및 챌린지 플랫폼. 일간 지속성을 트래킹하고 독서 문화를 즐길 수 있는 커뮤니티형 도구입니다.",
    descriptionEn: "Daily reading habit verification and challenge platform. Tracks daily consistency and gamifies reading culture.",
    tags: ["React", "Gamification", "Habit Tracker", "Community"],
    emoji: "📖",
    status: "live",
    impact: "30일 챌린지 기반 독서 습관 형성 및 게이미피케이션 동기부여",
  },
  {
    title: "meet.rolean.org",
    url: "https://meet.rolean.org",
    description: "오픈소스 기반 온라인 회의 기록 및 AI 요약 시스템. 실시간 자막 전사, 화자 분리 및 실시간 핵심 요약문을 생산합니다.",
    descriptionEn: "Open-source meeting recording and AI summarization system. Real-time transcription, speaker diarization, and live key-point extraction.",
    tags: ["Open-Source", "AI Summarizer", "WebRTC", "Vexa"],
    emoji: "🎙️",
    status: "building",
    impact: "회의 녹음 → 실시간 전사 → 화자 분리 → AI 요약 자동화 파이프라인",
  },
];

export const EXPLORATIONS: Exploration[] = [
  {
    title: "Agile O365 Learning Platform",
    emoji: "🔄",
    domain: "Education Technology",
    description: "Microsoft Office 365 기반 AI 대화형 애자일 학습 플랫폼. 10주 프로그레시브 학습 프로그램과 멀티 에이전트 코칭 시스템(MindsetCoach, CeremonyGuide, ToolPractice)을 구축했습니다.",
    descriptionEn: "AI-powered conversational Agile learning platform built on Microsoft Office 365. Features a 10-week progressive learning program with multi-agent coaching system.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "Prisma", "Vercel AI SDK"],
    status: "active",
    learnedInsight: "애자일 도입의 가장 큰 장벽은 도구가 아니라 마인드셋 변화. AI 코칭 에이전트로 개인화된 학습 경로를 설계하는 것이 효과적.",
  },
  {
    title: "AI Knowledge Base (NoteFlow)",
    emoji: "🧠",
    domain: "Knowledge Management",
    description: "3패널 레이아웃의 AI 지식 관리 시스템. 문서 트리, 마크다운 에디터, AI 어시스턴트를 통합하고 오디오 전사 및 회의록 생성, 이미지 분석(OCR, 차트, 표) 기능을 구현했습니다.",
    descriptionEn: "AI-powered knowledge base with three-panel layout integrating document tree, markdown editor, and AI assistant. Features audio transcription, meeting minutes generation, and image analysis.",
    techStack: ["Next.js 16", "TypeScript", "Prisma", "shadcn/ui", "Z.ai SDK"],
    status: "active",
    url: "https://note.rolean.org",
    learnedInsight: "지식 관리의 핵심은 검색이 아니라 맥락 연결. AI가 문서 간 관계를 자동으로 발견하고 요약하는 능력이 생산성을 극대화.",
  },
  {
    title: "AI Board System",
    emoji: "📋",
    domain: "Community Platform",
    description: "AI 기반 지능형 게시판 플랫폼. 7가지 페르소나의 AI 댓글 생성, 다계층 웹 검색 통합(SerpAPI, Naver Finance, Yahoo RSS), RAG 기반 컨텍스트 인식 응답, 자동 태깅 및 지식 그래프를 구축했습니다.",
    descriptionEn: "AI-powered forum with intelligent comment generation using 7 AI personas, multi-tier web search integration, RAG-based context-aware responses, auto-tagging, and knowledge graph.",
    techStack: ["Node.js", "Express", "MySQL", "Playwright", "RAG", "AI Personas"],
    status: "active",
    url: "https://news.rolean.org",
    learnedInsight: "AI 페르소나 다양성이 커뮤니티 참여율을 3배 이상 높임. 각 페르소나가 서로 다른 관점을 제공하면 토론의 깊이가 극적으로 향상.",
  },
  {
    title: "Multiple Intelligence Assessment",
    emoji: "🧩",
    domain: "Psychometrics & AI",
    description: "다중지능 검사 웹 플랫폼. 간편 모드(24문항, 5분)와 심화 모드(70문항, 15분)를 제공하며, OpenAI 기반 개인화 분석 및 공유 가능한 결과를 생성합니다.",
    descriptionEn: "Web-based multiple intelligence testing platform with simple mode (24 questions, ~5 min) and advanced mode (~70 questions, ~15 min). AI-powered personalized analysis with shareable results.",
    techStack: ["Next.js", "React", "SQLite", "Tailwind CSS", "OpenAI API"],
    status: "completed",
    learnedInsight: "심리 측정 도구에서 가장 중요한 것은 일관성 검증. AI가 응답 패턴의 일관성을 분석하여 신뢰도 높은 결과를 제공.",
  },
  {
    title: "EBS English Learning Recorder",
    emoji: "📻",
    domain: "Automation & Education",
    description: "EBS FM 라디오 영어 학습 프로그램 자동 녹음 시스템. 5개 프로그램(05:59-09:40 KST)을 자동 녹음하고 Telegram으로 업로드합니다.",
    descriptionEn: "Automated recording system for EBS FM English learning radio programs. Records 5 daily programs and uploads to Telegram automatically.",
    techStack: ["Python", "Telegram Bot API", "systemd", "CRON"],
    status: "completed",
    learnedInsight: "작은 자동화가 큰 습관을 만듦. 매일 아침 자동으로 녹음된 파일이 Telegram으로 오면 학습의 장벽이 0이 됨.",
  },
  {
    title: "Vexa Meeting Bot Platform",
    emoji: "🤖",
    domain: "Meeting Intelligence",
    description: "자가 호스팅 가능한 미팅 봇 API 및 전사 서비스. Google Meet, Teams, Zoom에서 실시간 전사, 화자 식별, 인터랙티브 봇 제어, MCP 서버(17개 툴)를 제공합니다.",
    descriptionEn: "Self-hostable meeting bot API and transcription service. Real-time transcription with speaker identification, interactive bot controls, and MCP server with 17 tools for AI agents across Google Meet, Teams, Zoom.",
    techStack: ["Node.js", "Docker", "Kubernetes", "WebRTC", "MCP Protocol"],
    status: "active",
    learnedInsight: "미팅 데이터의 가치는 전사가 아니라 후속 액션에 있음. AI가 미팅 결과를 실행 가능한 태스크로 자동 변환하는 것이 진정한 생산성 혁신.",
  },
];

export const INTERESTS: Interest[] = [
  {
    icon: "🔌",
    title: "ESP32 / IoT",
    titleEn: "Embedded IoT Engineering",
    desc: "임베디드 하드웨어 제어 및 센서 데이터 수집 파이프라인 설계. PTC Kepware를 통한 산업용 OT 인프라 연동 경험 보유.",
    descEn: "Embedded hardware control and sensor data collection pipeline design. Experienced with industrial OT infrastructure integration via PTC Kepware.",
    keywords: ["ESP32", "IoT", "Sensor Data Pipeline", "PTC Kepware", "Edge Computing", "MQTT"],
  },
  {
    icon: "🏭",
    title: "Smart Factory",
    titleEn: "Smart Factory Architecture",
    desc: "제조 설비 OEE(설비종합효율) 극대화 및 공정 시각화 시스템 구축. PM Pillar Owner로서 설비 자산 관리 및 운영비 최적화 총괄.",
    descEn: "Manufacturing equipment OEE maximization and process visualization system construction. PM Pillar Owner overseeing asset management and operational cost optimization.",
    keywords: ["Smart Factory", "OEE", "PM Pillar", "Real-time Monitoring", "Digital Twin", "MES"],
  },
  {
    icon: "📊",
    title: "Lean / IWS",
    titleEn: "Lean Manufacturing & IWS",
    desc: "글로벌 생산공정 혁신론(IWS) 기반 낭비 제거 및 지속 가능 개선. 이탈리아 볼로냐 공장 STA 파견, EY 컨설턴트 직접 전수.",
    descEn: "Waste elimination and continuous improvement based on Integrated Work System (IWS). STA dispatched to Bologna, Italy plant; directly trained by EY global consultants.",
    keywords: ["Lean", "IWS", "Continuous Improvement", "Value Stream Mapping", "5S", "Kaizen"],
  },
  {
    icon: "🔐",
    title: "OT Security",
    titleEn: "Operational Technology Security",
    desc: "산업 현장 제어 시스템(ICS/OT)의 침입 탐지 및 다계층 사이버보안. 보안망이 격리된 OT 환경에서의 안전한 데이터 통신 설계.",
    descEn: "Intrusion detection and multi-layered cybersecurity for Industrial Control Systems (ICS/OT). Secure data communication design within air-gapped OT environments.",
    keywords: ["OT Security", "ICS", "SCADA", "Network Segmentation", "Cybersecurity", "Air-Gap"],
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: "2026.03 — 현재",
    role: "Technical Services Supervisor",
    roleEn: "Technical Services Supervisor",
    company: "글로벌 FMCG 기업",
    companyType: "Global Fortune 500 FMCG",
    description: "글로벌 생산 공정의 전체 생산설비 운영비 최적화 및 Smart Factory 기반 구축 리드. 설비 자산 및 비용 관리(PM Pillar Owner)로서 자산 신뢰성 보장. PTC Kepware 등을 활용해 안전한 OT 인프라 환경 위 실시간 설비 모니터링 및 AI 융합 파이프라인 구축 주도.",
    descriptionEn: "Leading operational cost optimization for all production equipment across global manufacturing processes and building Smart Factory infrastructure. As PM Pillar Owner, ensuring asset reliability. Pioneering real-time equipment monitoring and AI integration pipeline within secure OT infrastructure using PTC Kepware.",
    achievements: [
      "PTC Kepware 기반 실시간 설비 모니터링 시스템 구축",
      "PM Pillar Owner로서 설비 자산 관리 및 R&M Cost 경감 주도",
      "IT/OT 하이브리드 브릿지 아키텍처 설계",
      "AI 융합 파이프라인 기획 및 구축 리드",
    ],
  },
  {
    period: "2024.02 — 2026.03",
    role: "Deployment Lead (Operations Excellence)",
    roleEn: "Deployment Lead, Operations Excellence",
    company: "글로벌 FMCG 기업",
    companyType: "Global Fortune 500 FMCG",
    description: "생산 공정 표준화(SWP) 총괄 오너 (5S, Change Over, Digital Technical Training & Transfer, Data Integrity). 현장 데이터 통합 및 Power BI 실시간 모니터링 시스템 구축.",
    descriptionEn: "Overall owner of production process standardization (SWP) — 5S, Change Over, Digital Technical Training & Transfer, Data Integrity. Built on-site data integration and Power BI real-time monitoring system.",
    achievements: [
      "5S, Change Over 등 4대 SWP 총괄 오너",
      "Power BI 실시간 모니터링 대시보드 구축",
      "디지털 기술 교육 및 이전 체계 수립",
      "데이터 무결성(Data Integrity) 표준화",
    ],
  },
  {
    period: "2019.08 — 2024.02",
    role: "Line Lead (Secondary Production Manager)",
    roleEn: "Line Lead, Secondary Production",
    company: "글로벌 FMCG 기업",
    companyType: "Global Fortune 500 FMCG",
    description: "신제품 라인 24시간 연속 운전 총괄. 40명 이상 다기능 조직 매니징. KPI 기반 생산성 관리 및 조직 문화 지표(NPS) 대폭 개선 (-45% → +35%).",
    descriptionEn: "Managed 24/7 continuous operation of new product production line. Led 40+ multi-functional team. Achieved dramatic NPS improvement from -45 to +35 through 1:1 GROW coaching and digital collaboration.",
    achievements: [
      "40+ 인원 다기능 조직 24/7 운전 총괄",
      "NPS 조직문화 지표 -45 → +35 혁신",
      "1:1 GROW 코칭 체계 도입",
      "MS Teams & Power BI 기반 디지털 협업 인프라 선제 도입",
    ],
  },
  {
    period: "2017.07 — 2019.08",
    role: "Process Lead Trainer",
    roleEn: "Process Lead Trainer (STA Italy)",
    company: "글로벌 FMCG 기업 (이탈리아 STA 파견)",
    companyType: "Global Fortune 500 FMCG — Italy Bologna Plant",
    description: "이탈리아 볼로냐 공장 파견(STA). 글로벌 EY 컨설턴트들로부터 IWS(Integrated Work System) 방법론을 직접 전수받아 공정 변화 관리 트레이너 자격 획득. 신규 제조 라인 도입 및 OEE 115% 달성, 비계획 정지율(Waste) 82% 감소 리드.",
    descriptionEn: "Dispatched to Bologna, Italy plant (STA). Directly trained by global EY consultants on IWS methodology and certified as process change management trainer. Led new manufacturing line introduction achieving 115% OEE and 82% waste reduction.",
    achievements: [
      "IWS 공정 변화 관리 트레이너 자격 획득 (EY 인증)",
      "OEE 115% 달성 (신규 설비 라인)",
      "비계획 정지율 82% 감소",
      "MTBF 208% 증가",
      "이탈리아 볼로냐 공장 STA 파견",
    ],
  },
  {
    period: "2015.08 — 2017.06",
    role: "Process Engineer",
    roleEn: "Process Engineer",
    company: "글로벌 FMCG 기업",
    companyType: "Global Fortune 500 FMCG",
    description: "LES (Logistic Execution System) 국내 최초 도입 프로젝트 Managing. 공정 표준화 및 ISO 9001/14001, OHSAS 18001 사내 감사팀 주도.",
    descriptionEn: "Managed Korea's first LES (Logistic Execution System) introduction project. Led internal audit team for ISO 9001/14001 and OHSAS 18001 process standardization.",
    achievements: [
      "LES 국내 최초 도입 프로젝트 Managing",
      "ISO 9001/14001 사내 감사팀 주도",
      "OHSAS 18001 인증 유지 관리",
      "공정 표준화 체계 수립",
    ],
  },
  {
    period: "2012.01 — 2015.08",
    role: "Production Engineer",
    roleEn: "Production Engineer",
    company: "글로벌 대형 조선 중공업사",
    companyType: "Global Shipbuilding & Heavy Industry",
    description: "조선사업본부 선박 기계설치 공정 총괄 엔지니어. LNG 특수선 및 초대형 컨테이너선 메인 엔진 어라인먼트/인스톨레이션 관리.",
    descriptionEn: "Overall engineer for ship machinery installation process at Shipbuilding Division. Managed main engine alignment and installation for LNG carriers and ultra-large container ships.",
    achievements: [
      "LNG 특수선 메인 엔진 어라인먼트 관리",
      "초대형 컨테이너선 설치 공정 총괄",
      "선박 기계설치 공정 스케줄링 및 품질 관리",
    ],
  },
  {
    period: "2010.10 — 2011.12",
    role: "Process Engineer",
    roleEn: "Process Engineer",
    company: "글로벌 알루미늄 압연 기업",
    companyType: "Global Aluminum Rolling",
    description: "알루미늄 주조 공정 엔지니어. 안전/품질 개선 6Sigma Green Belt 획득 및 생산 라인 벤치마킹 기술 혁신 수행.",
    descriptionEn: "Aluminum casting process engineer. Achieved 6Sigma Green Belt for safety and quality improvement. Performed production line benchmarking and technical innovation.",
    achievements: [
      "6Sigma Green Belt 획득",
      "알루미늄 주조 공정 품질 개선",
      "생산 라인 벤치마킹 및 기술 혁신",
    ],
  },
];
