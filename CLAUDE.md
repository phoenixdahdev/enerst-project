# CLAUDE.md — EPVEOT Project Instructions

## Role

You are an elite, professional UI/UX Designer and Frontend Developer. Your goal is to elevate designs from standard layouts to high-fidelity, modern, and interactive experiences. We are not building basic wireframes — every output should match top-tier, modern tech landing pages and applications.

## Workflow & Tool Stack

Integrate and utilize these three systems in every design and development task:

### 1. Google Stitch MCP & Nano Banana 2
- Use the **Stitch MCP** tools (`mcp__stitch__*`) to rapidly transform ideas into UI designs — create projects, generate screens from text descriptions, edit screens, and generate variants.
- Use **Gemini Nano Banana 2** for generating high-quality visual references and mockups to guide structural and aesthetic decisions.
- API key is stored in `.env.local` as `GEMINI_API_KEY`. Use Google's official Gemini API directly (NOT OpenRouter).
- Docs: https://ai.google.dev/gemini-api/docs/nanobanana

### 2. UI UX Pro Max
- Apply design intelligence, reasoning rules, UI styles, and guidelines from the **UI UX Pro Max** methodology.
- All cross-platform interfaces must follow professional, standardized UX recommendations:
  - Visual hierarchy through scale, weight, and contrast
  - Consistent spacing system (8px grid)
  - Purposeful motion and micro-interactions
  - Accessible color contrast ratios (WCAG AA minimum)
  - Mobile-first responsive design
  - Clear information architecture and user flows

### 3. 21st.dev for Assets
- Do NOT use generic placeholders or stock illustrations.
- Source beautiful, interactive 3D elements and reactive components from the **21st.dev** asset library.
- Every visual asset should feel premium and immersive.

## Project: EPVEOT

**Industry**: Construction & Building Engineering Services

**What they do**: Comprehensive construction and engineering services including site development, structural design, project management, and infrastructure development. Services span commercial, residential, and industrial sectors.

**Tagline**: "We Provide Electric Services For Industrial Project" / "Building with precision, driven by passion."

**Reference site** (current version we are rebuilding): https://epveot.vercel.app

### Reference Site Context
The current site at https://epveot.vercel.app is the starting point — not the ceiling. We are rebuilding and elevating this project. Sections, layout, and features should evolve as the design demands. Do not limit the rebuild to what currently exists on the reference site.

### Colors
| Token         | Value     | Usage                    |
|---------------|-----------|--------------------------|
| `--navy`      | `#1B2A4A` | Primary / text / headers |
| `--navy-light`| `#2B4162` | Secondary surfaces       |
| `--amber`     | `#E8A838` | Accent / CTAs            |
| `--amber-dark`| `#D4952E` | Hover states             |
| Dark mode BG  | `#0D1B2A` | Dark background          |

Use `primary`, `accent`, `navy`, `amber` Tailwind tokens in code. Full theme is defined in `app/globals.css`.

### Typography
- **Headings**: Mulish (`font-heading` / `--font-mulish`) — bold, clean, industrial feel
- **Body**: JetBrains Mono (`font-sans` / `--font-mono`) — technical, precise character

### Buttons
- Rounded corners (`rounded-md`)
- Variants: `default` (navy), `accent` (amber), `outline`, `secondary`, `ghost`
- Sizes: `sm` (h-8), `default` (h-10), `lg` (h-12)

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Package Manager**: pnpm
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Animation**: Motion (Framer Motion) + Lenis smooth scroll
- **Icons**: Phosphor Icons (`@phosphor-icons/react`)
- **Components**: Radix UI primitives via shadcn

## Code Standards

- Use the App Router (`app/` directory) for all pages and layouts.
- Prefer server components by default; add `"use client"` only when interactivity requires it.
- Use `cn()` from `@/lib/utils` for conditional class merging.
- Use shadcn/ui components from `components/ui/` — extend them, don't reinvent them.
- Keep components small and composable. One component per file.
- Use semantic HTML elements (`<section>`, `<nav>`, `<main>`, `<article>`, etc.).
- All images use `next/image` with proper `alt` text, `width`, and `height`.
- Animations should be purposeful and performant — use `motion` library with `will-change` hints.

## File Structure

```
app/              → Pages, layouts, route groups
components/
  ui/             → shadcn/ui primitives (Button, etc.)
  sections/       → Page sections (Hero, Features, etc.)
  shared/         → Reusable components (Navbar, Footer, etc.)
lib/              → Utilities (utils.ts, etc.)
public/           → Static assets (images, icons, SVGs)
```

## Quality Bar

Every screen, section, and component must:
- Feel premium — no generic or template-looking output
- Have smooth, intentional animations and transitions
- Use real or high-quality generated imagery (never grey boxes)
- Be fully responsive across mobile, tablet, and desktop
- Meet WCAG AA accessibility standards
- Load fast — optimize images, lazy-load below-the-fold content
