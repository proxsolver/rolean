# rolean.org

> Vibe Coder Meets Lean Operation. Domain First, AI Always.

**rolean.org**은 15년간 현장에서 축적한 제조 도메인 전문성과 소프트웨어 엔지니어링을 융합한 개인 포트폴리오 플랫폼입니다. Lean 사고법 기반의 낭배 없는 설계 철학과 AI 기반 사용자 경험을 결합하여, 방문자에게 도메인 전문성과 프로젝트를 직관적으로 전달합니다.

## 기술 스택

| 분류 | 기술 |
|------|------|
| **프레임워크** | Next.js 16 (App Router, Turbopack) |
| **언어** | TypeScript 5 |
| **UI** | React 19, CSS Modules (Glassmorphism) |
| **폰트** | Inter (본문), Outfit (제목) — `next/font` 최적화 |
| **AI 챗봇** | 자체 구현 Rule-based Agent (외부 LLM API 의존 없음) |
| **이메일** | Resend REST API (문의 접수 시 실시간 발송) |
| **배포** | PM2 + Cloudflare Tunnel |

## 프로젝트 구조

```
rolean/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 루트 레이아웃 (폰트, 메타데이터)
│   │   ├── page.tsx            # 메인 페이지 (6개 섹션 구성)
│   │   ├── page.module.css     # 페이지 전용 스타일
│   │   ├── globals.css         # 글로벌 디자인 토큰 & 유틸리티
│   │   ├── api/
│   │   │   ├── chat/route.ts   # AI Copilot 챗봇 API
│   │   │   └── contact/route.ts # 문의 접수 API (JSON 저장 + 이메일 발송)
│   │   ├── privacy/page.tsx    # 개인정보처리방침
│   │   └── terms/page.tsx      # 이용약관
│   ├── components/
│   │   ├── AICopilot.tsx       # 플로팅 AI 챗봇 위젯
│   │   └── ContactForm.tsx     # 문의 폼 (상태 관리 포함)
│   └── domains/
│       ├── ai/agent.ts         # 키워드 매칭 기반 챗봇 응답 엔진
│       └── profile/data.ts     # 포트폴리오 데이터 (프로젝트, 관심사, 커리어)
├── public/                     # 정적 에셋
├── messages.json               # 문의 메시지 로컬 저장소
└── next.config.ts
```

## 주요 기능

### 1. 포트폴리오 페이지

6개 섹션으로 구성된 싱글 페이지 구조:

| 섹션 | 내용 |
|------|------|
| **Hero** | 도메인 철학 소개 (Domain First, AI Always) |
| **Philosophy** | Lean/IWS 사고와 소프트웨어 설계의 융합 |
| **Interests** | ESP32/IoT, Smart Factory, Lean/IWS, OT Security |
| **Projects** | 오픈 서비스 포트폴리오 카드 (gtasks, book, meet) |
| **Timeline** | 2010년~현재 커리어 벤치마크 |
| **Contact** | 문의 폼 (이메일 발송 + 로컬 JSON 백업) |

### 2. AI Copilot 챗봇

우측 하단 플로팅 버튼으로 동작하는 인터랙티브 챗봇:

- **외부 LLM 의존 없음** — `domains/ai/agent.ts`의 키워드 매칭 엔진이 응답 생성
- **추천 키워드 칩** — ESP32, Smart Factory, Lean/IWS, 경력 요약 원클릭 질문
- **마크다운 렌더링** — 클라이언트 사이드 정규식 파서로 볼드, 리스트 지원
- **대화 히스토리** — 멀티턴 대화 컨텍스트 유지

### 3. Contact 폼

- 입력값 유효성 검사 (이름, 이메일, 메시지 필수)
- `messages.json`에 로컬 백업 항상 저장
- `RESEND_API_KEY` 환경변수 설정 시 Resend API로 이메일 실시간 발송
- 제출 상태 UI 피드백 (idle / submitting / success / error)

### 4. 디자인 시스템

- **Glassmorphism** — 반투명 패널 + 백드롭 블러 + 골드 보더 액센트
- **Obsidian + Gold** 팔레트 — 다크 차콜 배경에 샴페인 골드 포인트
- **반응형** — `clamp()` 유동 타이포그래피, 모바일 최적화
- **커스텀 스크롤바** — 골드 톤 테마 일관성

## 시작하기

### 요구사항

- Node.js 18+
- npm

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 환경변수

| 변수명 | 필수 | 설명 |
|--------|------|------|
| `RESEND_API_KEY` | 선택 | [Resend](https://resend.com) API 키. 설정 시 문의 폼 제출 메일이 발송됩니다. 미설정 시 로컬 JSON에만 저장됩니다. |

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
```

## API 엔드포인트

### `POST /api/chat`

AI Copilot 챗봇 응답을 반환합니다.

```json
// Request
{
  "messages": [
    { "role": "user", "content": "ESP32 역량 알려줘" }
  ]
}

// Response
{
  "role": "assistant",
  "content": "🔌 **ESP32 및 IoT 도메인에 대한 Harry의 역량입니다:** ..."
}
```

### `POST /api/contact`

문의 메시지를 접수합니다.

```json
// Request
{
  "name": "홍길동",
  "email": "example@gmail.com",
  "message": "협업 제안 드립니다."
}

// Response
{
  "success": true,
  "message": "Message saved and forwarded successfully"
}
```

## 데이터 관리

포트폴리오 콘텐츠는 `src/domains/profile/data.ts`에서 관리합니다.

- **`PROJECTS`** — 프로젝트 카드 (제목, URL, 설명, 태그, 이모지)
- **`INTERESTS`** — 핵심 관심 분야 (아이콘, 제목, 설명)
- **`TIMELINE`** — 커리어 타임라인 (기간, 직무, 회사, 설명)

챗봇 응답 키워드 매핑은 `src/domains/ai/agent.ts`에서 수정할 수 있습니다.

## 라이선스

Private. All rights reserved.

---

**[rolean.org](https://rolean.org)** | [GitHub](https://github.com/proxsolver/rolean)
