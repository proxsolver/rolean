import { TIMELINE, PROJECTS, INTERESTS, EXPLORATIONS, KEY_METRICS, PERSON } from "../profile/data";

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

${PERSON.experience.en}. Specializing in:
${PERSON.domains.map(d => `- ${d}`).join("\n")}

📊 **Key Achievement Metrics:**
${metrics}

🏆 **Certifications:**
${PERSON.certifications.map(c => `- ${c}`).join("\n")}

💡 Core philosophy: **"${PERSON.tagline}"** — combining deep manufacturing domain expertise with modern software engineering and AI.

🔗 Explore more: **rolean.org**`;
  }

  // ========================================================================
  // 2. ESP32 / IoT
  // ========================================================================
  if (
    q.includes("esp32") || q.includes("iot") || q.includes("임베디드") || q.includes("센서") ||
    q.includes("하드웨어") || q.includes("embedded") || q.includes("edge") || q.includes("mqtt")
  ) {
    return `🔌 **ESP32 & IoT — ${PERSON.knownAs}'s Embedded Engineering:**

- **Sensor Data Pipeline Design**: Raw sensor readings → structured, reliable data streams for real-time analytics
- **Industrial OT Integration**: PTC Kepware bridging ESP32 prototypes to factory-scale industrial control networks
- **Edge Computing**: Processing data at source, reducing latency in constrained OT environments

🏭 As Technical Services Supervisor, Harry leads factory equipment integration via PTC Kepware into secure OT infrastructure — all informed by 15 years of hands-on manufacturing domain knowledge.

💡 This combination of embedded hardware skills and industrial-scale OT experience is exceptionally rare.`;
  }

  // ========================================================================
  // 3. Smart Factory
  // ========================================================================
  if (
    q.includes("smart") || q.includes("팩토리") || q.includes("공장") || q.includes("factory") ||
    q.includes("kepware") || q.includes("설비") || q.includes("mes") || q.includes("모니터링") ||
    q.includes("monitoring") || q.includes("oee") || q.includes("디지털")
  ) {
    return `🏭 **Smart Factory — ${PERSON.knownAs}'s Industrial IoT Leadership:**

**Infrastructure:**
- **PTC Kepware**: Core OPC UA gateway connecting diverse factory equipment
- **Power BI Dashboards**: Real-time visualization of equipment status & production KPIs
- **Secure OT Network**: Multi-layered segmentation with air-gapped zones

**Organizational:**
- **PM Pillar Owner**: Equipment asset management, reliability, R&M cost optimization
- **IT/OT Bridge Architecture**: Hybrid design connecting manufacturing data to IT analytics
- **AI Integration Pipeline**: Foundation for predictive maintenance & anomaly detection

📊 **Results:** OEE +115% · MTBF +208% · Downtime -61% · Waste -82%

💡 Harry's approach is unique — grounded in 15 years of plant floor knowledge, he doesn't just install sensors, he understands what the data *means*.`;
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

**Applied to Software Engineering:**
- Value-Added Focus — only code that delivers business value
- Waste Elimination — no architectural bloat
- Continuous Improvement (Kaizen) — every iteration is PDCA
- Standardized Work — reliable patterns and conventions

💡 This philosophy is the foundation of **"${PERSON.tagline}"** — Lean thinking applied to both manufacturing AND software.`;
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

💡 This rare IT/OT security combination makes Harry uniquely positioned for production-grade Smart Factory systems.`;
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
    return `💼 **${PERSON.knownAs} — Career Timeline:**\n\n${jobs}\n\n💡 From shipbuilding (LNG carriers) → aluminum rolling → global FMCG → Smart Factory & software engineering. A uniquely valuable cross-domain perspective.`;
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
    return `🔬 **${PERSON.knownAs}'s 2026 Exploration Journey:**\n\nEvery learning experiment becomes a working prototype or production system.\n\n${explorations}\n\n🔗 Each demonstrates: **domain knowledge + software engineering = unique value creation**.`;
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
**Infrastructure:** PM2, Cloudflare Tunnel, Docker, Nginx
**Industrial:** PTC Kepware (OPC UA), Power BI, SCADA/ICS protocols, OT networking

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

💡 Same philosophy translates to software: transparent communication, data-driven decisions, building systems that make people more effective.`;
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

**Domain First**: Deeply understand the problem domain before writing code. 15 years in manufacturing means software that *manufacturing people actually need*.

**AI Always**: Every project considers "How can AI augment this?" — not AI for AI's sake, but AI as a force multiplier.

**Lean Engineering**: Value-Added Focus · Waste Elimination · Kaizen · Standardized Work · Respect for People

💡 The same Lean principles that eliminated 82% waste in manufacturing are applied to software — no unnecessary complexity, streamlining data flows, building only what creates genuine value.`;
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

Available for: IWS/TS coaching · Power BI dashboards · Smart Factory architecture · Vibe Coding intro · IT/OT convergence strategy

📅 Book via the Coffee Chat section on this page
📧 Email: ${PERSON.email}

💡 Come with a specific challenge — Harry brings 15 years of domain expertise to find the leanest path forward.`;
  }

  // ========================================================================
  // 14. Default Welcome
  // ========================================================================
  return `🤖 안녕하세요! **${PERSON.nameEn} (${PERSON.name})**의 AI Copilot입니다.

**"${PERSON.tagline}"** — ${PERSON.experience.ko}

📋 **질문 키워드:**
- 👤 **"Harry가 누구야?"** — 인물 소개 및 핵심 성과
- 🔌 **ESP32 / IoT** — 임베디드 및 산업 IoT
- 🏭 **Smart Factory** — Kepware, 실시간 모니터링
- 📊 **Lean / IWS** — 이탈리아 STA, OEE 115%
- 🔐 **OT Security** — 산업용 보안 아키텍처
- 💼 **경력** — 조선소 → FMCG → 소프트웨어
- 🎯 **프로젝트** — 오픈 서비스 포트폴리오
- 🔬 **탐구 2026** — 학습 여정 프로젝트
- 💻 **기술 스택** — 개발 도구 및 아키텍처
- 🧠 **철학** — Lean Engineering, Domain First
- 👥 **리더십** — NPS -45→+35, 조직 매니징
- ☕ **컨택** — 커피챗 및 협업 제안

어떤 분야가 궁금하신가요?`;
}
