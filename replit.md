# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Donohue Design Project

**Client:** Jim Donohue — Donohue Design, Santa Rosa, CA (web design & digital marketing agency)

**Canvas design sandbox:** `artifacts/mockup-sandbox` — all layout exploration lives here as React components. These are prototypes only, not the production site.

**Current published site:** `artifacts/omniva-design` — React + Vite (single page, Variant B layout). This was a migration test to understand what changes are needed.

**Final production stack (decided):**
- Plain HTML + Tailwind CSS + Alpine.js (for interactive bits like nav dropdown)
- JSON-LD structured data in `<head>` for local SEO
- No build process — CDN versions of Tailwind and Alpine
- **Host: Cloudflare Pages** (static files via GitHub repo → Cloudflare auto-deploy)
- Goal: maximum local SEO performance for Santa Rosa, CA market

**Design source of truth:** Variant B (`VariantB_HorizontalStrip.tsx`) — approved layout to migrate to production HTML stack.
