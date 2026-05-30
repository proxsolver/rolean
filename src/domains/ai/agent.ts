import { TIMELINE, PROJECTS, INTERESTS, EXPLORATIONS, KEY_METRICS, PERSON } from "../profile/data";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function generateAgentResponse(query: string, history: ChatMessage[]): string {
  const q = query.toLowerCase().trim();

  // ========================================================================
  // 1. Identity & Person — Who is Harry?
  // ========================================================================
  if (
    q.includes("누구") || q.includes("who is") || q.includes("harry") || q.includes("이현우") ||
    q.includes("현우") || q.includes("rolean") || q.includes("자기소개") || q.includes("소개") ||
    q.includes("about") || q.includes("대해서") || q.includes("인물") || q.includes("이력서") ||
    q.includes("resume") || q.includes("profile")
  ) {
    const metrics = KEY_METRICS.slice(0, 4).map(m => `- **${m.label}**: ${m.value}`).join("\n");
    return `👤 **${PERSON.nameEn} (${PERSON.name})**, known as **${PERSON.knownAs}**

${PERSON.title} at ${PERSON.org} (${PERSON.orgType})

${PERSON.experience}. Specializing in:
${PERSON.domains.map(d => `- ${d}`).join("\n")}

📊 **Key Achievement Metrics:**
${metrics}

🏆 **Certifications:**
${PERSON.certifications.map(c => `- ${c}`).join("\n")}

💡 Harry's core philosophy is **"${PERSON.tagline}"** — combining deep manufacturing domain expertise with modern software engineering and AI. He bridges the gap between IT and OT, turning 15 years of plant floor knowledge into high-performance software systems.

🔗 Explore more: **rolean.org**`;
  }

  // ========================================================================
  // 2. ESP32 / IoT / Embedded
  // ========================================================================
  if (
    q.includes("esp32") || q.includes("iot") || q.includes("임베디드") || q.includes("센서") ||
    q.includes("하드웨어") || q.includes("embedded") || q.includes("edge") || q.includes("mqtt")
  ) {
    return `🔌 **ESP32 & IoT — ${PERSON.knownAs}'s Embedded Engineering Capabilities:**

Harry goes beyond basic hardware control. His IoT expertise spans the full pipeline:

- **Sensor Data Pipeline Design**: From raw sensor readings to structured, reliable data streams suitable for real-time analytics
- **Industrial OT Integration**: PTC Kepware-based connectivity bridging ESP32 prototypes to factory-scale industrial control networks
- **Edge Computing**: Processing data at the source before transmission, reducing latency and bandwidth in constrained OT environments
- **MQTT & Protocol Bridging**: Translating between industrial protocols and modern web APIs

🏭 **Real-World Application**: As Technical Services Supervisor, Harry leads the integration of factory equipment via PTC Kepware into a secure OT infrastructure, creating real-time monitoring and AI-ready data pipelines — all informed by 15 years of hands-on manufacturing domain knowledge.

💡 This combination of embedded hardware skills and industrial-scale OT experience is exceptionally rare — most embedded engineers lack plant floor expertise, and most manufacturing engineers lack software engineering depth.`;
  }

  // ========================================================================
  // 3. Smart Factory / Kepware / MES
  // ========================================================================
  if (
    q.includes("smart") || q.includes("팩토리") || q.includes("공장") || q.includes("factory") ||
    q.includes("kepware") || q.includes("설비") || q.includes("mes") || q.includes("모니터링") ||
    q.includes("monitoring") || q.includes("oee") || q.includes("디지털")
  ) {
    return `🏭 **Smart Factory Architecture — ${PERSON.knownAs}'s Industrial IoT Leadership:**

**Technical Infrastructure:**
- **PTC Kepware Integration**: Deployed as the core OPC UA gateway connecting diverse factory equipment (PLCs, sensors, actuators) into a unified data layer
- **Real-time Monitoring Dashboard**: Power BI-based live visualization of equipment status, production KPIs, and predictive maintenance indicators
- **Secure OT Network**: Multi-layered network segmentation with air-gapped OT zones, ensuring data flows safely without exposing critical control systems

**Organizational Impact:**
- **PM Pillar Owner**: Overall responsibility for equipment asset management, reliability engineering, and R&M cost optimization across the production base
- **IT/OT Bridge Architecture**: Designed the hybrid architecture that connects manufacturing floor data to IT analytics while maintaining OT security compliance
- **AI Integration Pipeline**: Building the foundation for AI-driven predictive maintenance, anomaly detection, and process optimization

📊 **Quantified Results** from previous Smart Factory initiatives:
- OEE: **115%** improvement
- MTBF: **208%** increase
- Unplanned Downtime: **61%** reduction
- Waste: **82%** reduction

💡 Harry's Smart Factory approach is unique because it's grounded in 15 years of hands-on manufacturing domain knowledge — he doesn't just install sensors, he understands what the data *means* and how it connects to business value.`;
  }

  // ========================================================================
  // 4. Lean / IWS / Process Optimization
  // ========================================================================
  if (
    q.includes("lean") || q.includes("린") || q.includes("iws") || q.includes("낭비") ||
    q.includes("개선") || q.includes("kaizen") || q.includes("5s") || q.includes("change over") ||
    q.includes("mtbf") || q.includes("oee") || q.includes("swp") || q.includes("표준화") ||
    q.includes("standardization") || q.includes("continuous improvement")
  ) {
    return `📊 **Lean Manufacturing & IWS — ${PERSON.knownAs}'s Process Optimization Mastery:**

**IWS Credential (Exceptional):**
- **STA Dispatch to Italy**: Sent to the Bologna, Italy plant as a Short-Term Assignment delegate
- **Direct Training by EY Global Consultants**: Received hands-on IWS methodology training directly from Ernst & Young's global manufacturing consultants
- **Certified Process Change Management Trainer**: Officially certified to train others in IWS deployment — a credential held by very few in the organization

**Quantified Impact:**
- **OEE +115%**: Applied Lean techniques across both legacy and new equipment lines
- **MTBF +208%**: Implemented systematic preventive maintenance and root cause analysis
- **Unplanned Downtime -61%**: Through IWS methodology-driven equipment management
- **Waste -82%**: Via process optimization and Change Over standardization

**Applied Philosophy:**
Harry translates Lean manufacturing principles directly into software engineering:
- **Value-Added Focus**: Only write code that delivers direct business value — eliminate architectural bloat
- **Waste Elimination**: Remove unnecessary complexity, dependencies, and abstractions
- **Continuous Improvement (Kaizen)**: Every project iteration is a PDCA cycle — Plan, Do, Check, Act
- **Standardized Work (SWP)**: Establish patterns and conventions that the team can reliably follow

💡 This philosophy is the foundation of **"${PERSON.tagline}"** — Lean thinking applied to both manufacturing processes AND software architecture.`;
  }

  // ========================================================================
  // 5. OT Security
  // ========================================================================
  if (
    q.includes("보안") || q.includes("security") || q.includes("ot") || q.includes("ics") ||
    q.includes("망분리") || q.includes("scada") || q.includes("cybersecurity") || q.includes("침입") ||
    q.includes("air-gap") || q.includes("네트워크")
  ) {
    return `🔐 **OT Security — ${PERSON.knownAs}'s Industrial Cybersecurity Expertise:**

Harry designs Smart Factory infrastructure within the constraints of real industrial security requirements:

**Security Architecture:**
- **Air-Gapped OT Zones**: Factory control systems operate within isolated network segments with strict access controls
- **Multi-Layered Defense**: Defense-in-depth approach with multiple security perimeters between IT and OT networks
- **Secure Data Bridging**: PTC Kepware acts as the secure data gateway, enabling monitoring data to flow out while preventing external access to control systems
- **Compliance-First Design**: All Smart Factory infrastructure is built to comply with industrial cybersecurity standards

**Why This Matters:**
Most IT-focused Smart Factory implementations fail because they don't understand OT security constraints. Harry's approach works because he:
1. Understands the **availability requirement** (production cannot stop)
2. Respects the **safety requirement** (people work near these systems)
3. Maintains the **integrity requirement** (process parameters must not be tampered with)
4. Builds **data pipelines** that work within these constraints

💡 This rare combination of OT security knowledge and IT/software engineering capability makes Harry uniquely positioned to build production-grade Smart Factory systems.`;
  }

  // ========================================================================
  // 6. Career / Timeline / History
  // ========================================================================
  if (
    q.includes("경력") || q.includes("이력") || q.includes("timeline") || q.includes("타임라인") ||
    q.includes("커리어") || q.includes("회사") || q.includes("조선소") || q.includes("중공업") ||
    q.includes("필립") || q.includes("알루미늄") || q.includes("히스토리") || q.includes("근무") ||
    q.includes("일한") || q.includes("career") || q.includes("history") || q.includes("experience") ||
    q.includes("work") || q.includes("employment")
  ) {
    const jobs = TIMELINE.map(t => {
      const achs = t.achievements.length > 0
        ? `\n  ${t.achievements.map(a => `▸ ${a}`).join("\n  ")}`
        : "";
      return `**${t.period}** — ${t.role} (${t.roleEn})\n  ${t.company} · ${t.companyType}\n  ${t.descriptionEn}${achs}`;
    }).join("\n\n");
    return `💼 **${PERSON.nameEn} (${PERSON.name}) — Complete Career Timeline:**\n\n${jobs}\n\n💡 Harry's career spans from shipbuilding (LNG carriers) → aluminum rolling → global FMCG manufacturing → Smart Factory & software engineering. This breadth of hands-on industrial experience combined with modern software engineering skills creates a uniquely valuable cross-domain perspective.`;
  }

  // ========================================================================
  // 7. Projects / Portfolio
  // ========================================================================
  if (
    q.includes("포트폴리오") || q.includes("portfolio") || q.includes("프로젝트") || q.includes("project") ||
    q.includes("gtasks") || q.includes("book") || q.includes("meet") || q.includes("서비스") ||
    q.includes("사이트") || q.includes("개발") || q.includes("만든") || q.includes("software") ||
    q.includes("application") || q.includes("product")
  ) {
    const list = PROJECTS.map(p =>
      `**${p.title}** ${p.emoji} [${p.status.toUpperCase()}]\n  ${p.descriptionEn}\n  Tech: ${p.tags.join(", ")}${p.impact ? `\n  Impact: ${p.impact}` : ""}`
    ).join("\n\n");
    return `🎯 **${PERSON.knownAs}'s Live Projects & Products:**\n\n${list}\n\n🔗 Each project is built with the "Lean Engineering" philosophy — minimal dependencies, maximum value, and continuous iteration. Visit the links to see them in action.`;
  }

  // ========================================================================
  // 8. Exploration / Learning / 2026 Projects
  // ========================================================================
  if (
    q.includes("탐구") || q.includes("학습") || q.includes("exploration") || q.includes("learning") ||
    q.includes("2026") || q.includes("agile") || q.includes("애자일") || q.includes("note") ||
    q.includes("지식") || q.includes("노트") || q.includes("board") || q.includes("게시판") ||
    q.includes("vexa") || q.includes("미팅") || q.includes("meeting") || q.includes("지능") ||
    q.includes("intelligence") || q.includes("다중지능") || q.includes("영어") || q.includes("english") ||
    q.includes("ebs") || q.includes("실험") || q.includes("experiment") || q.includes("새로") ||
    q.includes("무엇을") || q.includes("배우") || q.includes("연구") || q.includes("research")
  ) {
    const explorations = EXPLORATIONS.map(e =>
      `${e.emoji} **${e.title}** [${e.status.toUpperCase()}] — ${e.domain}\n  ${e.descriptionEn}\n  Stack: ${e.techStack.join(", ")}\n  💡 ${e.learnedInsight}`
    ).join("\n\n");
    return `🔬 **${PERSON.knownAs}'s 2026 Exploration & Learning Journey:**\n\nHarry doesn't just study — he builds. Every learning experiment becomes a working prototype or production system.\n\n${explorations}\n\n🔗 Each exploration demonstrates a core principle: **domain knowledge + software engineering = unique value creation**. Harry applies his manufacturing process thinking to software development, creating systems that are Lean, reliable, and genuinely useful.`;
  }

  // ========================================================================
  // 9. Tech Stack / Skills / Architecture
  // ========================================================================
  if (
    q.includes("기술") || q.includes("스택") || q.includes("tech") || q.includes("stack") ||
    q.includes("아키텍처") || q.includes("architecture") || q.includes("프레임워크") || q.includes("framework") ||
    q.includes("언어") || q.includes("language") || q.includes("코딩") || q.includes("coding") ||
    q.includes("개발환경") || q.includes("tools") || q.includes("도구") || q.includes("능력") ||
    q.includes("skill") || q.includes("frontend") || q.includes("backend") || q.includes("next") ||
    q.includes("react") || q.includes("typescript") || q.includes("python")
  ) {
    return `💻 **${PERSON.knownAs}'s Technical Arsenal & Architecture Philosophy:**

**Frontend:**
- Next.js 15/16 (App Router, React Server Components)
- React 19, TypeScript 5
- Tailwind CSS, shadcn/ui, CSS Modules
- Glassmorphism & Modern UI Design Systems

**Backend:**
- Node.js, Express, Next.js API Routes
- Prisma ORM, SQLite, MySQL
- REST API design, JWT Authentication

**AI & Data:**
- Z.ai SDK, OpenAI API, Anthropic Claude API
- RAG (Retrieval-Augmented Generation)
- Multi-agent coaching systems
- AI personas & conversation design

**Infrastructure & DevOps:**
- PM2 process management, systemd
- Cloudflare Tunnel for secure public exposure
- Docker, Kubernetes (via Vexa platform)
- Nginx reverse proxy

**Industrial:**
- PTC Kepware (OPC UA gateway)
- Power BI (real-time dashboards)
- SCADA/ICS protocols
- OT network architecture

🏗️ **Architecture Philosophy**: "Lean Engineering" — start with the minimum viable architecture, measure what matters, and iterate. No over-engineering, no unnecessary abstractions. Every component must justify its existence through delivered value, just like Value-Added analysis in Lean manufacturing.`;
  }

  // ========================================================================
  // 10. Leadership / NPS / People Management
  // ========================================================================
  if (
    q.includes("성격") || q.includes("nps") || q.includes("조직") || q.includes("리더") ||
    q.includes("mbti") || q.includes("코칭") || q.includes("리더십") || q.includes("leadership") ||
    q.includes("매니징") || q.includes("팀") || q.includes("team") || q.includes("people") ||
    q.includes("문화") || q.includes("culture")
  ) {
    return `👥 **${PERSON.knownAs}'s Organizational Leadership & People Management:**

**NPS (Net Promoter Score) Transformation:**
- Starting point: **-45** (toxic team culture, 4-shift 24/7 operation)
- After intervention: **+35** (engaged, growth-oriented culture)
- Method: 1:1 GROW coaching, digital collaboration tools, transparent KPI management

**Leadership Scale:**
- Managed **40+ multi-functional team members** across 4 shifts
- 24/7 continuous operation responsibility for new product manufacturing line
- Implemented MS Teams and Power BI-based digital collaboration infrastructure to eliminate shift-to-shift communication delays

**Coaching Philosophy:**
- **GROW Model**: Goal → Reality → Options → Will — structured 1:1 coaching sessions
- **Data-Driven Management**: Every decision backed by KPIs and Power BI dashboards
- **Digital-First Communication**: Replaced paper-based shift handovers with real-time digital tools

💡 This same leadership philosophy translates into software engineering: transparent communication, data-driven decisions, and empowering team members with the right tools. Harry doesn't just manage people — he builds systems that make people more effective.`;
  }

  // ========================================================================
  // 11. Philosophy / Approach / Mindset
  // ========================================================================
  if (
    q.includes("철학") || q.includes("philosophy") || q.includes("접근") || q.includes("approach") ||
    q.includes("방법론") || q.includes("methodology") || q.includes("마인드") || q.includes("mindset") ||
    q.includes("vibe") || q.includes("바이브") || q.includes("도메인") || q.includes("domain") ||
    q.includes("생각") || q.includes("가치") || q.includes("value") || q.includes("원칙") ||
    q.includes("principle")
  ) {
    return `🧠 **"${PERSON.tagline}" — ${PERSON.knownAs}'s Core Engineering Philosophy:**

**Domain First:**
Before writing a single line of code, deeply understand the problem domain. Harry's 15 years in manufacturing (shipbuilding → aluminum rolling → global FMCG) means he doesn't just build software — he builds software that *manufacturing people actually need*.

**AI Always:**
Every project, every workflow, every process should consider: "How can AI augment this?" Not AI for AI's sake, but AI as a force multiplier for domain expertise.

**Lean Engineering Principles:**
1. **Value-Added Focus**: Only build features that deliver direct business value
2. **Waste Elimination**: No unnecessary frameworks, abstractions, or complexity
3. **Continuous Improvement (Kaizen)**: Every iteration is a PDCA cycle
4. **Standardized Work**: Establish patterns the team can reliably follow
5. **Respect for People**: Build tools that empower, not replace

**From Factory Floor to Code:**
The same Lean principles that eliminated 82% waste in manufacturing are applied to software architecture — eliminating unnecessary dependencies, streamlining data flows, and building only what creates genuine value.

💡 This cross-domain philosophy is what makes Harry's approach unique: he doesn't just write code, he engineers solutions that bridge the gap between industrial reality and digital possibility.`;
  }

  // ========================================================================
  // 12. Certifications / Qualifications
  // ========================================================================
  if (
    q.includes("자격") || q.includes("certification") || q.includes("iso") || q.includes("6sigma") ||
    q.includes("시그마") || q.includes("green belt") || q.includes("감사") || q.includes("audit") ||
    q.includes("트레이너") || q.includes("trainer") || q.includes("ey") || q.includes("볼로냐") ||
    q.includes("bologna") || q.includes("italy") || q.includes("이탈리아") || q.includes("sta")
  ) {
    return `🏆 **${PERSON.knownAs}'s Certifications & Qualifications:**

${PERSON.certifications.map(c => `✅ ${c}`).join("\n")}

**Notable: IWS Trainer Certification**
- Dispatched to **Bologna, Italy** plant (Short-Term Assignment)
- Trained directly by **EY (Ernst & Young) Global Consultants**
- Certified as **Process Change Management Trainer**
- This credential authorizes Harry to train others in the IWS methodology — a rare qualification in the organization

**6Sigma Green Belt**
- Earned during aluminum rolling process engineering
- Applied statistical analysis to safety and quality improvement
- Foundation for data-driven decision making that continues in software engineering

💡 These aren't just paper qualifications — each certification was earned through hands-on application and measurable results. The IWS trainer credential, in particular, demonstrates Harry's ability to not only master complex methodologies but to teach them to others.`;
  }

  // ========================================================================
  // 13. Contact / Coffee Chat / Collaboration
  // ========================================================================
  if (
    q.includes("연락") || q.includes("contact") || q.includes("커피") || q.includes("coffee") ||
    q.includes("미팅") || q.includes("meeting") || q.includes("협업") || q.includes("collaborate") ||
    q.includes("collaboration") || q.includes("컨설팅") || q.includes("consulting") || q.includes("email") ||
    q.includes("이메일") || q.includes("book") || q.includes("예약")
  ) {
    return `☕ **Connect with ${PERSON.knownAs}:**

**Coffee Chat (30 min):**
Available for discussions on:
- IWS/TS work methodology & process optimization
- Power BI data visualization & real-time dashboards
- Smart Factory consulting & architecture design
- Vibe Coding introduction & hands-on coaching
- IT/OT convergence strategy
- Any cross-domain collaboration

📅 **Book directly**: Use the Coffee Chat section on this page to schedule via Google Calendar.

📧 **Email**: ${PERSON.email}

💡 Harry values depth over breadth in conversations. Come with a specific challenge or question, and he'll bring 15 years of domain expertise to help you find the leanest path forward.`;
  }

  // ========================================================================
  // 14. Default Welcome — Comprehensive Guide
  // ========================================================================
  return `🤖 안녕하세요! **${PERSON.nameEn} (${PERSON.name})**의 AI Copilot입니다.

저는 **"${PERSON.tagline}"** 구조 위에서 ${PERSON.experience}의 전문성을 설명해 드립니다.

📋 **다음 주제에 대해 질문해 보세요:**

- 👤 **"Harry가 누구야?"** — 인물 소개 및 핵심 성과
- 🔌 **ESP32 / IoT** — 임베디드 하드웨어 및 산업 IoT 역량
- 🏭 **Smart Factory** — Kepware 구축, 실시간 모니터링, MES
- 📊 **Lean / IWS** — 이탈리아 STA 파견, OEE 115%, 낭비 82% 절감
- 🔐 **OT Security** — 산업용 보안 아키텍처, 망분리 설계
- 💼 **경력 / 이력** — 조선소 → 알루미늄 → 글로벌 FMCG → 소프트웨어
- 🎯 **프로젝트** — gtasks, book, meet 등 실제 라이브 서비스
- 🔬 **탐구 2026** — 애자일 플랫폼, AI 노트, 미팅 봇, 다중지능 검사 등
- 💻 **기술 스택** — Next.js, TypeScript, AI SDK, 인프라 전체
- 🧠 **철학 / 접근법** — Lean Engineering, Domain First, AI Always
- 👥 **리더십** — NPS -45→+35, 40인 조직 매니징, GROW 코칭
- ☕ **컨택 / 협업** — 커피챗 예약 및 협업 제안

어떤 분야가 가장 궁금하신가요?`;
}
