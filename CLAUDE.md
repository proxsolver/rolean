# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

**rolean.org** — Personal portfolio & knowledge hub for Hyunwoo Lee (Harry), a domain-first engineer combining 15 years of manufacturing expertise with software engineering. Built with Next.js 16 + App Router + React 19.

## Commands

```bash
npm run dev       # Development server (localhost:3000)
npm run build     # Production build (Next.js 16 Turbopack)
npm run start     # Production server
```

No test framework is configured.

## Architecture

### Three-Layer Structure
- **`src/app/`** — Next.js App Router pages and API routes (Server Components by default)
- **`src/components/`** — Client components (forms, AI chat widget, exploration cards). Mark with `"use client"` when interactivity is needed
- **`src/domains/`** — Business logic layer: `ai/agent.ts` (rule-based chatbot), `profile/data.ts` (single source of truth for all site content), `booking/types.ts`

### Content Data Flow
`src/domains/profile/data.ts` is the canonical data source. It feeds:
- The main page sections (hero, metrics, interests, explorations, projects, timeline)
- The AI chatbot agent responses
- The `/api/about` JSON endpoint
- JSON-LD structured data in page.tsx

When adding/modifying content, edit `data.ts` — do not hardcode content in components.

### Key Files
- `src/app/page.tsx` — Main portfolio page with 7 sections + 3 JSON-LD schemas
- `src/app/layout.tsx` — Root layout with comprehensive Metadata (OG, Twitter, keywords)
- `src/domains/ai/agent.ts` — Rule-based AI chatbot with keyword matching (no LLM dependency)
- `src/domains/profile/data.ts` — All content: PERSON, KEY_METRICS, PROJECTS, EXPLORATIONS, INTERESTS, TIMELINE
- `src/app/api/about/route.ts` — Machine-readable JSON profile endpoint
- `src/app/robots.ts` — Explicit AI crawler allow rules (GPTBot, CCBot, anthropic-ai, etc.)
- `src/app/sitemap.ts` — Dynamic sitemap for all rolean.org subdomains

### Styling
- CSS Modules with CSS custom properties defined in `globals.css`
- Design tokens: `--color-obsidian`, `--color-gold`, `--color-ivory`, `--color-silver`
- Glassmorphism via `.glass-panel` class
- Path alias: `@/*` → `./src/*`

### API Routes
- `POST /api/chat` — AI chatbot (calls `generateAgentResponse` from domains/ai)
- `POST /api/contact` — Contact form (local JSON backup + Resend email forwarding)
- `GET /api/about` — Structured JSON profile for machine consumption

### Deployment
- Static pages prerendered at build time (marked ○ in build output)
- API routes are dynamic (ƒ)
- Uses `.env.local` for `RESEND_API_KEY`
- Subdomains (gtasks, book, meet, note, news) are separate projects under `/home/hp-harry/2026/`
