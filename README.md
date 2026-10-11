# Mohamed Hajbi — Portfolio

Personal portfolio built with **React 19 + TypeScript + Vite**, styled with **CSS Modules** and design tokens. No UI framework, no icon library: small bundle (~77 kB gzipped JS), fast load.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build in dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint (TypeScript, React Hooks, accessibility rules)
npm run format     # Prettier
```

Requires Node 20+.

## Project structure

```
src/
├── data/            # ALL content lives here — edit these files to update the site
│   ├── profile.ts       name, contact, summary, stats, navigation
│   ├── experience.ts    jobs (timeline)
│   ├── projects.ts      projects + filter categories
│   ├── skills.ts        skill groups + languages
│   └── education.ts
├── types/           # Shared TypeScript interfaces for the data
├── components/
│   ├── layout/      # Header (sticky nav, mobile menu, theme toggle), Footer
│   └── ui/          # Reusable primitives: Section, ButtonLink, TagList, Icon, RichText
├── sections/        # One component per page section (Hero, About, Experience, …)
├── hooks/           # useTheme, useActiveSection, useReveal
├── styles/          # global.css — design tokens (colors, radius, spacing) + base styles
├── utils/           # cn() class-name helper
├── App.tsx          # Page composition
└── main.tsx         # Entry point
public/
├── cv-mohamed-hajbi.pdf   # Downloadable résumé
└── favicon.svg
```

## Best practices applied

- **Content separated from UI** — sections only render data from `src/data`, so updating the CV never touches components.
- **Strict TypeScript** (`strict`, `noUncheckedIndexedAccess`) with typed content models.
- **Path alias** `@/` → `src/` for clean imports; barrel `index.ts` files per folder.
- **CSS Modules + CSS variables** — scoped styles, one theme switch via `data-theme` on `<html>`.
- **Dark / light theme** remembered in `localStorage`, applied before first paint (no flash).
- **Accessibility** — skip link, semantic landmarks, `aria-labelledby` sections, `aria-current` nav, `aria-pressed` filters, live region for filter results, visible focus rings, `prefers-reduced-motion` support, eslint-plugin-jsx-a11y.
- **Responsive** — mobile menu (closes on Escape / link click), fluid type with `clamp()`, no horizontal scroll down to 360px.
- **SEO** — title, description, Open Graph tags in `index.html`.

## Customize

- **Change the photo**: replace `public/profile.webp` (shown in the hero) and `public/profile.png` (used for link previews). A transparent background looks best.
- **Add a project link** (GitHub / demo): add an optional `url?: string` to `Project` in `src/types/index.ts` and render it in `src/sections/Projects.tsx`.
- **Change the accent color**: edit `--accent` in `src/styles/global.css` (both dark and light blocks).
- **Update the CV**: replace `public/cv-mohamed-hajbi.pdf`.

## Deploy

It's a static site — `npm run build` produces `dist/`.

- **Vercel / Netlify**: import the repo; build command `npm run build`, output `dist`.
- **Cloudflare Pages / Workers** (like the reference site): build command `npm run build`, output directory `dist`.
- **GitHub Pages**: set `base: '/<repo-name>/'` in `vite.config.ts`, then publish `dist/`.
