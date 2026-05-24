import { TIMELINE, PROJECTS, INTERESTS } from "../profile/data";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function generateAgentResponse(query: string, history: ChatMessage[]): string {
  const q = query.toLowerCase().trim();

  // 1. ESP32 / IoT / 임베디드 관련 문의
  if (q.includes("esp32") || q.includes("iot") || q.includes("임베디드") || q.includes("센서") || q.includes("하드웨어")) {
    return `🔌 **ESP32 및 IoT 도메인에 대한 Harry의 역량입니다:**
- Harry는 하드웨어 제어뿐만 아니라 센서 데이터를 안정적으로 수집하고 송신하는 **실시간 데이터 파이프라인 설계**에 깊은 관심을 가지고 있습니다.
- 최근 **Technical Services Supervisor**로서 공장 설비의 실시간 연결(PTC Kepware 기반)을 리드하며, 15년간의 도메인 지식을 IT/OT 하이브리드 브릿지로 전환하고 있습니다.
- ESP32 칩셋을 활용한 프로토타이핑부터 스마트팩토리의 복잡한 산업용 제어망 연계까지 다룰 수 있는 드문 도메인 융합형 지식을 갖추고 있습니다.`;
  }

  // 2. 스마트팩토리 관련 문의
  if (q.includes("smart") || q.includes("팩토리") || q.includes("공장") || q.includes("factory") || q.includes("kepware") || q.includes("설비")) {
    return `🏭 **Smart Factory 리더십 및 기술적 성취:**
- **실시간 설비 모니터링**: PTC Kepware를 도입 및 융합하여 보안망이 구축된 산업용 OT 인프라 내에서 공장 설비들을 상호 연결하고, 실시간 모니터링 환경을 완성했습니다.
- **PM Pillar Owner**: 설비 자산 관리 및 자산 신뢰성 PM Pillar 총괄로서, R&M Cost 경감 및 인벤토리(자재) 최적화를 주도하며 양산 기지 전체 설비의 운영비 효율을 극대화하고 있습니다.
- **OT & IT Bridge**: 단순한 IT 솔루션 도입이 아니라, 15년 동안 현장에서 축적한 도메인 지식(어라인먼트, 기계 설비 정렬, OEE 개선)을 시스템 설계와 데이터 분석에 녹여내어 실제 작동하는 스마트 공장을 실현하고 있습니다.`;
  }

  // 3. Lean / IWS 방법론 관련 문의
  if (q.includes("lean") || q.includes("린") || q.includes("iws") || q.includes("낭비") || q.includes("개선") || q.includes("oee") || q.includes("mtbf")) {
    return `📊 **Lean Operations & IWS (Integrated Work System):**
- **글로벌 STA 경력**: 이탈리아 볼로냐 공장으로 파견되어 글로벌 EY 컨설턴트들로부터 IWS 방법론을 직접 전수받고 공정 변화 관리 트레이너 자격을 공인받았습니다.
- **지표 달성**: 기존 설비 및 신규 설비 라인(신제품)에 Lean 기법을 전파하여 **OEE 115% 향상, MTBF 208% 증가, Unplanned Downtime 61% 감소, 폐기율(Waste) 82% 절감**의 압도적인 생산성 성과를 이끌어 냈습니다.
- **개발 철학과의 융합**: Harry의 코딩 철학은 '낭비가 없는 것'입니다. 불필요하게 거대하고 느린 아키텍처를 지양하고, 본질적인 비즈니스 가치와 최상의 UI 편의성에 초점을 맞추는 **Domain-First, AI-Always** 설계의 원천입니다.`;
  }

  // 4. OT Security / 보안 관련 문의
  if (q.includes("보안") || q.includes("security") || q.includes("ot") || q.includes("ics") || q.includes("망분리")) {
    return `🔐 **OT Security (산업 인프라 보안) 역량:**
- 폐쇄적이고 민감한 공장 환경에서 Smart Factory 인프라를 안전하게 연결하기 위해 **보안망이 철저히 격리된 OT 환경**에서의 데이터 통신 설계를 설계 및 구축했습니다.
- 다계층 보안 프레임워크(Smart Factory Foundation) 내에서 외부 위협 및 시스템 침입 요소를 최소화하며 안정적인 실시간 제조 데이터 모니터링을 확보했습니다.
- 산업 현장 제어 시스템(ICS/OT)의 특수 보안 위협과 가용성 확보 사이의 균형을 극대화하는 실무 노하우를 갖추고 있습니다.`;
  }

  // 5. 경력 / 이력서 / Timeline / 회사 관련 문의
  if (q.includes("경력") || q.includes("이력") || q.includes("timeline") || q.includes("타임라인") || q.includes("커리어") || q.includes("회사") || q.includes("조선소") || q.includes("중공업") || q.includes("필립") || q.includes("novelis") || q.includes("알루미늄") || q.includes("히스토리") || q.includes("근무") || q.includes("일한")) {
    const jobs = TIMELINE.map(t => `- **${t.period}**: ${t.role} (${t.company})\n  * ${t.description.substring(0, 100)}...`).join("\n");
    return `💼 **이현우(Harry)의 전체 커리어 타임라인 요약:**\n\n${jobs}\n\n💡 더 자세한 업무 경험이나 특정 기간의 성과가 궁금하시면 **"Technical Services Supervisor"**, **"조선소"**, 또는 **"STA 파견"** 같이 질문해 주세요!`;
  }

  // 6. 포트폴리오 사이트 (gtasks, book, meet) 관련 문의
  if (q.includes("포트폴리오") || q.includes("portfolio") || q.includes("프로젝트") || q.includes("project") || q.includes("gtasks") || q.includes("book") || q.includes("meet") || q.includes("서비스") || q.includes("사이트") || q.includes("개발") || q.includes("만든")) {
    const list = PROJECTS.map(p => `- **${p.title}** (${p.emoji})\n  * ${p.description}\n  * 기술 스택: ${p.tags.join(", ")}`).join("\n\n");
    return `🎯 **Harry가 직접 개발하고 라이브로 운영 중인 대표 오픈 서비스들입니다:**\n\n${list}\n\n🔗 상단 포트폴리오 섹션의 카드를 클릭하시면 각 서비스에 바로 접속해 보실 수 있습니다!`;
  }

  // 7. MBTI / 성격 / 조직문화 (NPS) 관련 문의
  if (q.includes("성격") || q.includes("nps") || q.includes("조직") || q.includes("리더") || q.includes("mbti") || q.includes("코칭")) {
    return `👥 **조직 리더십 및 People Managing 역량:**
- **NPS(조직 문화 지표) 혁신**: 4조 2교대(24-7) 연속 운전 생산 라인을 매니징하며, 조직 문화 지표를 **-45에서 +35**로 상승시킨 실전 리더십 경험이 있습니다.
- **1:1 GROW 코칭**: 40명 이상의 다기능 직원과 현장 주임들을 대상으로 성장 지향적 1:1 코칭을 진행하여 높은 신뢰를 구축했습니다.
- **IT 협업 도입**: MS Teams 및 Power BI 기반 디지털 협업 인프라를 생산 공정에 선제 도입하여 4조 2교대로 발생하던 소통 딜레이를 완전히 혁신했습니다.`;
  }

  // 8. 웰컴 메시지 및 기본 가이드
  return `🤖 안녕하세요! Harry의 AI Copilot입니다. **Domain-first, AI-always** 구조 위에서 그의 15년 제조 도메인 이력과 IT 융합 전문성을 설명해 드립니다.

다음 키워드에 대해 편하게 질문해 주시면 상세히 답변해 드릴게요!
- 🔌 **ESP32** (하드웨어/IoT 제어)
- 🏭 **Smart Factory** (Kepware 구축 및 모니터링)
- 📊 **Lean / IWS** (낭비 제거 공정 최적화 및 115% OEE 달성)
- 🔐 **OT Security** (보안 환경 구축)
- 💼 **경력 / 이력** (조선소, 글로벌 FMCG 기업 등 히스토리)
- 🎯 **포트폴리오** (gtasks, book, meet 등 실제 개발 제품)

어떤 분야가 가장 궁금하신가요?`;
}
