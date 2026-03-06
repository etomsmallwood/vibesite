# CLAUDE.md — Project Conventions

> This file is the source of truth for AI-assisted development in this repo.
> Claude Code (or any LLM agent) should read this before making changes.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with CSS variable tokens
- **Components**: shadcn/ui (owned in `/components/ui/`)
- **Utilities**: `cn()` from `/lib/utils.ts` for all className merging

## Rules

### Components
- Only use existing shadcn/ui components from `/components/ui/`.
- Do not create new primitives unless explicitly instructed.
- Shared components go in `/components/`. Page-specific ones stay in `/app/`.
- Every component must use TypeScript with explicit prop types.

### Styling
- Only use Tailwind utility classes that map to defined tokens.
- Do not invent new spacing scales, colors, or font sizes.
- All color and radius values must reference CSS variables (never raw hex/hsl).
- Do not write raw CSS unless extending `@layer base` or `@layer components`.
- No inline `style={}` attributes.

### Structure
- `/app/` — pages and layouts (Next.js App Router)
- `/components/ui/` — shadcn/ui primitives (do not edit unless upgrading)
- `/components/` — shared composed components
- `/lib/` — utilities, helpers, data fetching
- `/styles/` — global CSS and token definitions
- `/tokens/` — (reserved) for future design token exports
- `/public/` — static assets

### Naming
- Files: `kebab-case.tsx`
- Components: `PascalCase`
- Utilities: `camelCase`

### Git
- Commit messages: imperative mood, ≤72 chars (e.g., "Add hero section")
- One logical change per commit

## Adding shadcn/ui Components

```bash
npx shadcn-ui@latest add <component-name>
```

This copies the component source into `/components/ui/`. You own it from that point.

## Token Changes

To change the visual identity, edit **only** `/styles/globals.css` CSS variables.
The Tailwind config reads from those variables — do not put raw values in `tailwind.config.ts`.
