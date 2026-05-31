# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

**rolean.org** — Personal portfolio & knowledge hub for Hyunwoo Lee (Harry), a domain-first engineer combining 15 years of manufacturing expertise with software engineering. Built with Next.js 16 + App Router + React 19. Bilingual (KO/EN) with Google Analytics 4 tracking.

## Commands

```bash
npm run dev       # Development server (localhost:3000)
npm run build     # Production build (Next.js 16 Turbopack)
npm run start     # Production server
```

No test framework is configured.

## Infrastructure

### Two-PC Failover Architecture

```
┌─────────────────────────────────────────────┐
│  GitHub: proxsolver/rolean (main branch)    │
│  단일 소스 오브 트루스                       │
└──────────┬──────────────────────┬────────────┘
           │                      │
    git push (개발)         self-hosted runner
           │                      │
           ▼                      ▼
┌──────────────────┐    ┌──────────────────┐
│  Secondary PC    │    │  Primary PC      │
│  (개발 머신)     │    │  (운영 서버)     │
│  코드 수정 &     │    │  PM2 + port 3090 │
│  push 담당       │    │  Cloudflare 터널 │
│                  │    │  GitHub Actions   │
│                  │    │  self-hosted      │
│                  │    │  runner 운영      │
└──────────────────┘    └──────────────────┘
                               │
                        Cloudflare Tunnel
                               │
                               ▼
                         rolean.org
```

- **Primary PC**: 실제 운영 서버. PM2로 rolean.org를 port 3090에서 서비스. GitHub Actions self-hosted runner가 설치되어 push 시 자동 배포
- **Secondary PC**: 개발 머신. 코드 수정 후 GitHub에 push. Primary의 self-hosted runner가 자동으로 pull → build → restart 수행
- **Cloudflare Tunnel**: `rolean.org` → `localhost:3090` 라우팅. 서브도메인들도 각각 포트에 매핑

### Auto-Deploy Flow
1. Secondary PC에서 `git push origin main`
2. GitHub Actions이 Primary PC의 self-hosted runner를 트리거
3. Primary에서 자동 실행: `git pull → npm install → npm run build → pm2 restart rolean`
4. rolean.org 업데이트 완료

### Failover
동일한 코드가 두 PC에 존재하므로, Primary 장애 시 Secondary에서 수동으로 PM2 + Cloudflare Tunnel을 실행하여 서비스 복구 가능.

## Architecture

### Three-Layer Structure
- **`src/app/`** — Next.js App Router pages and API routes (Server Components by default)
- **`src/components/`** — Client components (forms, AI chat widget, exploration cards, language toggle). Mark with `"use client"` when interactivity is needed
- **`src/domains/`** — Business logic layer: `ai/agent.ts`, `profile/data.ts`, `profile/i18n.ts`, `booking/types.ts`

### Bilingual (KO/EN) System
- **`src/domains/profile/i18n.ts`** — UI strings in both locales. `t(key, locale)` function.
- **`src/domains/profile/data.ts`** — All data fields are `Record<Locale, string>` (e.g., `description: { ko: "...", en: "..." }`)
- **`src/components/PortfolioContent.tsx`** — Shared page component that takes `locale: "ko" | "en"` prop
- **Routes**: `/` (Korean, default), `/en` (English). Both use `PortfolioContent` with different locale.
- **`src/components/LanguageToggle.tsx`** — Client component linking between `/` and `/en`
- Language switch tracked in Google Analytics

### Content Data Flow
`src/domains/profile/data.ts` is the canonical data source. It feeds:
- The main page sections (hero, metrics, interests, explorations, projects, timeline)
- The AI chatbot agent responses
- The `/api/about` JSON endpoint
- JSON-LD structured data (3 schemas: Person, WebSite, ItemList)

When adding/modifying content, edit `data.ts` — do not hardcode content in components.

### Key Files
- `src/app/page.tsx` — Korean page (`/`), renders PortfolioContent with locale="ko"
- `src/app/en/page.tsx` — English page (`/en`), renders PortfolioContent with locale="en"
- `src/app/layout.tsx` — Root layout with Metadata (OG, Twitter, keywords, hreflang alternates)
- `src/components/PortfolioContent.tsx` — Shared page with 7 sections + JSON-LD
- `src/components/GoogleAnalytics.tsx` — GA4 (G-M63W08193X) with custom event tracking
- `src/components/LanguageToggle.tsx` — KO↔EN switcher in nav
- `src/components/AICopilot.tsx` — Floating AI chatbot with GA event tracking
- `src/domains/ai/agent.ts` — Rule-based AI chatbot with 14 keyword categories
- `src/domains/profile/data.ts` — All content: PERSON, KEY_METRICS, PROJECTS, EXPLORATIONS, INTERESTS, TIMELINE
- `src/domains/profile/i18n.ts` — Bilingual UI strings and `t()` helper
- `src/app/api/about/route.ts` — Machine-readable JSON profile endpoint
- `src/app/robots.ts` — AI crawler allow rules (GPTBot, CCBot, anthropic-ai, etc.)
- `src/app/sitemap.ts` — Dynamic sitemap with `/en` and subdomains
- `.github/workflows/deploy.yml` — Self-hosted GitHub Actions auto-deploy

### Open Projects (Public Subdomains)
- gtasks.rolean.org, book.rolean.org, meet.rolean.org, test.rolean.org, notes.rolean.org
- Non-public projects (news, bbs, mon) are excluded from the projects section

### Styling
- CSS Modules with CSS custom properties defined in `globals.css`
- Design tokens: `--color-obsidian`, `--color-gold`, `--color-ivory`, `--color-silver`
- Glassmorphism via `.glass-panel` class
- Path alias: `@/*` → `./src/*`

### API Routes
- `POST /api/chat` — AI chatbot (calls `generateAgentResponse` from domains/ai)
- `POST /api/contact` — Contact form (local JSON backup + Resend email forwarding)
- `GET /api/about` — Structured JSON profile for machine consumption

### Google Analytics 4
- Measurement ID: `G-M63W08193X` (hardcoded in GoogleAnalytics.tsx)
- Auto-tracked: page views, scroll depth, outbound clicks, session duration
- Custom events: `language_switch`, `chat_interaction` (open/message/suggestion), `project_click`, `contact_submit`

### Deployment
- Static pages prerendered at build time (marked ○ in build output)
- API routes are dynamic (ƒ)
- Production runs on port 3090 via PM2
- Uses `.env.local` for `RESEND_API_KEY`, Google Calendar credentials
- Subdomains (gtasks, book, meet, note, test) are separate projects under `/home/hp-harry/2026/`
