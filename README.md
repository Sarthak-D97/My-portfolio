# sarthakchauhan.in

Personal site of **Sarthak Chauhan** — Lead Full Stack Engineer at Physics Wallah IOI LeapX and founder of [Lireons](https://lireons.com).

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and Motion. Fully static, no backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npm run lint
npm run typecheck
```

## Editing content

Every word, link, date and figure on the page lives in one file: `src/data/profile.ts`.
Sections read from it; nothing is hard-coded in components.

| What | Where |
| --- | --- |
| Name, role, email, links, availability | `site`, `socials` |
| Hero headline, subheadline, dossier | `hero` |
| Proof-strip figures and their provenance | `proof` |
| About lede, paragraphs, marginalia | `about` |
| Roles (dates, bullets, stack) | `experience` |
| Lireons case study (spec sheet, chapters, system map) | `lireons` |
| Project index and footnote | `projects`, `projectFootnote` |
| Stack tiers | `stack` |
| Certifications, TryHackMe, courses, education | `certifications`, `tryhackme`, `courses`, `education` |
| Contact | `contact` |

Assets live in `public/`: `images/sarthak.jpg` (headshot), `images/lireons-logo.png`, `badges/*.png`, `projects/lireons.jpg` (a real 2:1 crop of the live landing page; update `lireons.screenshotCaptured` in the data file when you refresh it) and `Sarthak_Chauhan_Resume.pdf`.

Fonts for the generated Open Graph image live in `src/assets/fonts/` (TTF, read at build time).

## Design system

Tokens are defined once in `src/app/globals.css` (`:root` light, `.dark`, and `.plate-lireons` for the founder case-study plate, which keeps Lireons' own brand colours in both themes). Type is fluid via `clamp()`; the only radius on the site is the 2px button corner. Theme preference is applied by a blocking inline script before first paint and toggled from the nav.

The Open Graph image (`/opengraph-image`) and favicon (`/icon`) are generated at build time from the same content file.

## Deploy

Static output — deploys as-is to Vercel (import the repo, no environment variables needed). The footer shows the short commit SHA from `VERCEL_GIT_COMMIT_SHA` (or `git rev-parse` locally).
