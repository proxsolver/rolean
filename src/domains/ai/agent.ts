import { TIMELINE, PROJECTS, EXPLORATIONS, MANUFACTURING_DATA_PRACTICE, KEY_METRICS, PERSON } from "../profile/data";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function generateAgentResponse(query: string, history: ChatMessage[]): string {
  const q = query.toLowerCase().trim();

  // ========================================================================
  // 1. Identity — Who is Harry?
  // ========================================================================
  if (
    q.includes("누구") || q.includes("who is") || q.includes("harry") || q.includes("이현우") ||
    q.includes("현우") || q.includes("rolean") || q.includes("자기소개") || q.includes("소개") ||
    q.includes("about") || q.includes("대해서") || q.includes("인물") || q.includes("이력서") ||
    q.includes("resume") || q.includes("profile")
  ) {
    const metrics = KEY_METRICS.slice(0, 4).map(m => `- **${m.label.en}**: ${m.value}`).join("\n");
    return `👤 **${PERSON.nameEn} (${PERSON.name})**, known as **${PERSON.knownAs}**

${PERSON.title.en} at ${PERSON.org} (${PERSON.orgType})

${PERSON.experience.en} — making factory data readable for everyone. Lean/IWS methodology meets Power BI: complex plant data compressed into visualizations that operators and executives alike can act on. The OEE stratified-analysis and coaching dashboards built here were adopted as worldwide best practices.

📊 **Key Achievement Metrics:**
${metrics}

🏆 **Certifications:**
${PERSON.certifications.map(c => `- ${c}`).join("\n")}

💡 Core philosophy: **"${PERSON.tagline}"** — deep manufacturing domain expertise, delivered as data the whole organization can read and act on.

🔗 Explore more: **rolean.org**`;
  }

  // ========================================================================
  // 2. ESP32 / IoT — where the data pipeline begins
  // ========================================================================
  if (
    q.includes("esp32") || q.includes("iot") || q.includes("임베디드") || q.includes("센서") ||
    q.includes("하드웨어") || q.includes("embedded") || q.includes("edge") || q.includes("mqtt")
  ) {
    return `🔌 **ESP32 & IoT — where ${PERSON.knownAs}'s data pipeline begins:**

- **Sensor Data Pipeline Design**: Raw sensor readings → structured, reliable streams that feed real-time analytics and Power BI dashboards
- **Industrial OT Integration**: PTC Kepware bridging ESP32 prototypes to factory-scale control networks
- **Edge Computing**: Processing data at source to cut latency in constrained OT environments

🏭 As Technical Services Supervisor, Harry connects factory equipment via PTC Kepware into secure OT infrastructure — the trustworthy foundation that makes the Manufacturing Data Practice dashboards real-time and credible.

💡 Hardware is where the data starts; the real value is making that data readable and actionable for everyone downstream.`;
  }

  // ========================================================================
  // 3. Smart Factory / Manufacturing Data Practice
  // ========================================================================
  if (
    q.includes("smart") || q.includes("팩토리") || q.includes("공장") || q.includes("factory") ||
    q.includes("kepware") || q.includes("설비") || q.includes("mes") || q.includes("모니터링") ||
    q.includes("monitoring") || q.includes("oee") || q.includes("디지털") ||
    q.includes("power bi") || q.includes("powerbi") || q.includes("데이터") || q.includes("대시보드") ||
    q.includes("시각화") || q.includes("visualization") || q.includes("리터러시") || q.includes("literacy") ||
    q.includes("층별분석") || q.includes("coaching") || q.includes("코칭") || q.includes("open+") ||
    q.includes("best practice") || q.includes("베스트")
  ) {
    const practice = MANUFACTURING_DATA_PRACTICE.map(w =>
      `**${w.emoji} ${w.title.en}** [${w.credential.en}]\n  ${w.description.en}\n  🎯 ${w.outcome.en}`
    ).join("\n\n");
    return `📊 **Manufacturing Data Practice — ${PERSON.knownAs}'s Power BI Data Visualization:**

Harry's signature work: turning complex factory data into visualizations every layer — from executives to frontline operators — can act on tomorrow.

${practice}

🏭 **Behind the dashboards — Smart Factory infrastructure:**
- **PTC Kepware**: OPC UA gateway connecting diverse factory equipment into one data pipeline
- **Power BI + OEE stratified analysis**: brand(SKU)- and shift-level loss trends in real time
- **Secure OT network**: multi-layered segmentation feeding trustworthy data

📊 **Results:** OEE +115% · MTBF +208% · Downtime -61% · Waste -82%

💡 Not top-management rollups — Harry designs what the floor can use today. Grounded in 15 years of plant-floor knowledge: he doesn't just pipe data, he understands what it *means*.`;
  }

  // ========================================================================
  // 4. Lean / IWS
  // ========================================================================
  if (
    q.includes("lean") || q.includes("린") || q.includes("iws") || q.includes("낭비") ||
    q.includes("개선") || q.includes("kaizen") || q.includes("5s") || q.includes("change over") ||
    q.includes("mtbf") || q.includes("표준화") || q.includes("continuous improvement")
  ) {
    return `📊 **Lean & IWS — ${PERSON.knownAs}'s Process Optimization:**

**IWS Credential:**
- **STA to Bologna, Italy** plant
- **Direct training by EY Global Consultants**
- **Certified Process Change Management Trainer**

**Quantified Impact:**
- OEE **+115%** · MTBF **+208%** · Unplanned Downtime **-61%** · Waste **-82%**

**Applied to Software & Data Engineering:**
- Value-Added Focus — only code and metrics that deliver business value
- Waste Elimination — no architectural bloat, no chart without a decision
- Continuous Improvement (Kaizen) — every iteration is PDCA
- Standardized Work — reliable patterns and conventions

💡 This philosophy is the foundation of **"${PERSON.tagline}"** — Lean decides *what* to measure; Power BI makes it *visible* to everyone.`;
  }

  // ========================================================================
  // 5. OT Security
  // ========================================================================
  if (
    q.includes("보안") || q.includes("security") || q.includes("ot") || q.includes("ics") ||
    q.includes("망분리") || q.includes("scada") || q.includes("cybersecurity") ||
    q.includes("air-gap") || q.includes("네트워크")
  ) {
    return `🔐 **OT Security — ${PERSON.knownAs}'s Industrial Cybersecurity:**

- **Air-Gapped OT Zones**: Isolated network segments with strict access controls
- **Multi-Layered Defense**: Multiple security perimeters between IT and OT
- **Secure Data Bridging**: PTC Kepware as the safe data gateway
- **Compliance-First**: Built to industrial cybersecurity standards

Harry understands the triad: **Availability** (production can't stop) → **Safety** (people nearby) → **Integrity** (no tampering).

💡 Secure, trustworthy data is what makes the Manufacturing Data Practice dashboards credible on the production floor — security and readability are two sides of the same coin.`;
  }

  // ========================================================================
  // 6. Career / Timeline
  // ========================================================================
  if (
    q.includes("경력") || q.includes("이력") || q.includes("timeline") || q.includes("타임라인") ||
    q.includes("커리어") || q.includes("회사") || q.includes("조선소") || q.includes("중공업") ||
    q.includes("알루미늄") || q.includes("히스토리") || q.includes("근무") || q.includes("career") ||
    q.includes("history") || q.includes("experience") || q.includes("work")
  ) {
    const jobs = TIMELINE.map(t => {
      const achs = t.achievements.en.length > 0
        ? `\n  ${t.achievements.en.map(a => `▸ ${a}`).join("\n  ")}`
        : "";
      return `**${t.period}** — ${t.role.en}\n  ${t.company.en} · ${t.companyType}\n  ${t.description.en}${achs}`;
    }).join("\n\n");
    return `💼 **${PERSON.knownAs} — Career Timeline:**\n\n${jobs}\n\n💡 From shipbuilding (LNG carriers) → aluminum rolling → global FMCG → manufacturing data visualization & software engineering. A cross-domain perspective that turns plant-floor knowledge into data everyone can use.`;
  }

  // ========================================================================
  // 7. Projects
  // ========================================================================
  if (
    q.includes("포트폴리오") || q.includes("portfolio") || q.includes("프로젝트") || q.includes("project") ||
    q.includes("gtasks") || q.includes("book") || q.includes("meet") || q.includes("서비스") ||
    q.includes("사이트") || q.includes("개발") || q.includes("만든") || q.includes("software") ||
    q.includes("application") || q.includes("product")
  ) {
    const list = PROJECTS.map(p =>
      `**${p.title}** ${p.emoji} [${p.status.toUpperCase()}]\n  ${p.description.en}\n  Tech: ${p.tags.join(", ")}${p.impact ? `\n  Impact: ${p.impact.en}` : ""}`
    ).join("\n\n");
    return `🎯 **${PERSON.knownAs}'s Live Projects:**\n\n${list}\n\n🔗 Each built with Lean Engineering philosophy — minimal dependencies, maximum value, continuous iteration.`;
  }

  // ========================================================================
  // 8. Exploration / 2026
  // ========================================================================
  if (
    q.includes("탐구") || q.includes("학습") || q.includes("exploration") || q.includes("learning") ||
    q.includes("2026") || q.includes("agile") || q.includes("애자일") || q.includes("note") ||
    q.includes("지식") || q.includes("노트") || q.includes("board") || q.includes("게시판") ||
    q.includes("vexa") || q.includes("미팅") || q.includes("meeting") || q.includes("지능") ||
    q.includes("다중지능") || q.includes("영어") || q.includes("english") || q.includes("ebs") ||
    q.includes("실험") || q.includes("experiment") || q.includes("배우") || q.includes("연구")
  ) {
    const explorations = EXPLORATIONS.map(e =>
      `${e.emoji} **${e.title.en}** [${e.status.toUpperCase()}] — ${e.domain.en}\n  ${e.description.en}\n  Stack: ${e.techStack.join(", ")}\n  💡 ${e.learnedInsight.en}`
    ).join("\n\n");
    return `🔬 **${PERSON.knownAs}'s 2026 Exploration Journey:**\n\nLearning experiments — translating manufacturing domain knowledge into software, then validating each lesson through a real project.\n\n${explorations}\n\n🔗 Each demonstrates: **domain knowledge + software engineering = unique value creation**.`;
  }

  // ========================================================================
  // 9. Tech Stack
  // ========================================================================
  if (
    q.includes("기술") || q.includes("스택") || q.includes("tech") || q.includes("stack") ||
    q.includes("아키텍처") || q.includes("architecture") || q.includes("프레임워크") ||
    q.includes("언어") || q.includes("코딩") || q.includes("개발환경") || q.includes("tools") ||
    q.includes("능력") || q.includes("skill") || q.includes("frontend") || q.includes("backend") ||
    q.includes("next") || q.includes("react") || q.includes("typescript") || q.includes("python")
  ) {
    return `💻 **${PERSON.knownAs}'s Technical Arsenal:**

**Frontend:** Next.js 15/16, React 19, TypeScript 5, Tailwind CSS, shadcn/ui, CSS Modules
**Backend:** Node.js, Express, Prisma ORM, SQLite/MySQL, REST API, JWT Auth
**AI & Data:** Z.ai SDK, OpenAI API, Claude API, RAG, Multi-agent systems
**Manufacturing Data:** Power BI, OEE stratified analysis, data storytelling, data democratization
**Infrastructure:** PM2, Cloudflare Tunnel, Docker, Nginx
**Industrial:** PTC Kepware (OPC UA), SCADA/ICS protocols, OT networking

🏗️ **Philosophy**: "Lean Engineering" — start minimal, measure what matters, iterate. Every component must justify its existence through delivered value.`;
  }

  // ========================================================================
  // 10. Leadership / NPS
  // ========================================================================
  if (
    q.includes("성격") || q.includes("nps") || q.includes("조직") || q.includes("리더") ||
    q.includes("mbti") || q.includes("코칭") || q.includes("리더십") || q.includes("leadership") ||
    q.includes("매니징") || q.includes("팀") || q.includes("team") || q.includes("people") ||
    q.includes("문화") || q.includes("culture")
  ) {
    return `👥 **${PERSON.knownAs}'s Leadership:**

- **NPS Transformation**: -45 → +35 in a 4-shift 24/7 operation
- **Team Scale**: 40+ multi-functional members across 4 shifts
- **Method**: 1:1 GROW coaching + Power BI digital collaboration
- **Approach**: Data-driven decisions, transparent KPIs, empowering tools

💡 Same philosophy translates to software and data: transparent communication, data-driven decisions, building systems that make people more effective.`;
  }

  // ========================================================================
  // 11. Philosophy
  // ========================================================================
  if (
    q.includes("철학") || q.includes("philosophy") || q.includes("접근") || q.includes("approach") ||
    q.includes("방법론") || q.includes("methodology") || q.includes("마인드") || q.includes("mindset") ||
    q.includes("vibe") || q.includes("바이브") || q.includes("도메인") || q.includes("domain") ||
    q.includes("생각") || q.includes("가치") || q.includes("원칙") || q.includes("principle")
  ) {
    return `🧠 **"${PERSON.tagline}" — Core Philosophy:**

**Domain First**: 15 years on the plant floor means software and data that *manufacturing people actually need* — not what looks impressive to management.

**Data Democratization**: A dashboard only matters if the frontline can read it and act tomorrow. OEE, loss trends, coaching — visualized so every layer decides daily, not just top management.

**AI Always**: Every project asks "How can AI augment this?" — AI as a force multiplier, never AI for its own sake.

**Lean Engineering**: Value-Added Focus · Waste Elimination · Kaizen · Standardized Work · Respect for People

💡 The same Lean principles that eliminated 82% waste in manufacturing apply to data — strip away the noise, keep only what drives a decision.`;
  }

  // ========================================================================
  // 12. Certifications
  // ========================================================================
  if (
    q.includes("자격") || q.includes("certification") || q.includes("iso") || q.includes("6sigma") ||
    q.includes("시그마") || q.includes("green belt") || q.includes("감사") || q.includes("audit") ||
    q.includes("트레이너") || q.includes("trainer") || q.includes("ey") || q.includes("볼로냐") ||
    q.includes("bologna") || q.includes("italy") || q.includes("이탈리아") || q.includes("sta")
  ) {
    return `🏆 **${PERSON.knownAs}'s Certifications:**\n\n${PERSON.certifications.map(c => `✅ ${c}`).join("\n")}\n\n💡 Each earned through hands-on application with measurable results. The IWS trainer credential authorizes Harry to teach the methodology to others.`;
  }

  // ========================================================================
  // 13. Contact
  // ========================================================================
  if (
    q.includes("연락") || q.includes("contact") || q.includes("커피") || q.includes("coffee") ||
    q.includes("협업") || q.includes("collaborate") || q.includes("컨설팅") || q.includes("consulting") ||
    q.includes("email") || q.includes("이메일") || q.includes("예약")
  ) {
    return `☕ **Connect with ${PERSON.knownAs}:**

Available for: Power BI dashboards & data visualization · OEE/loss analysis design · data literacy training · Lean/IWS coaching · Smart Factory architecture

📅 Book via the Coffee Chat section on this page
📧 Email: ${PERSON.email}

💡 Come with a specific challenge — Harry brings 15 years of domain expertise to find the leanest path forward.`;
  }

  // ========================================================================
  // 14. Default Welcome
  // ========================================================================
  return `🤖 안녕하세요! **${PERSON.nameEn} (${PERSON.name})**의 AI Copilot입니다.

**"${PERSON.tagline}"** — ${PERSON.experience.ko}. 제조업이 가진 데이터에서 최적해를 찾습니다 — 스마트팩토리는 기존 데이터의 연결에서 시작합니다.

📋 **질문 키워드:**
- 👤 **"Harry가 누구야?"** — 인물 소개 및 핵심 성과
- 📊 **Power BI / 데이터 시각화** — OEE 층별분석, 글로벌 베스트 프랙티스
- 🏭 **Smart Factory** — Kepware, 실시간 데이터 파이프라인
- 🔌 **ESP32 / IoT** — 데이터 파이프라인의 시작
- 📊 **Lean / IWS** — 무엇을 측정할지 결정
- 🔐 **OT Security** — 신뢰할 수 있는 데이터의 기반
- 💼 **경력** — 조선소 → FMCG → 데이터 시각화
- 🎯 **프로젝트** — 오픈 서비스 포트폴리오
- 🔬 **탐구 2026** — 학습 여정 프로젝트
- 💻 **기술 스택** — 개발 도구 및 아키텍처
- 🧠 **철학** — 데이터 민주화, Domain First
- 👥 **리더십** — NPS -45→+35, 조직 매니징
- ☕ **컨택** — 커피챗 및 협업 제안

어떤 분야가 궁금하신가요?`;
}
