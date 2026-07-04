# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio/homepage for Christian Dechant (christiandechant.de / christian-dechant.de), plus a marketing landing page for his side project "WayVenture" (a travel planner app). Built with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.

## Commands

```
npm run dev      # start dev server with Turbopack
npm run build    # production build
npm run start    # run the production build
npm run lint     # next lint
```

There is no test suite configured in this repo.

## Architecture

### Content-driven single page

`src/app/page.tsx` composes the homepage as a fixed sequence of section components (About, WayVenture teaser, Testimonials, VoluntaryWork, Offers, Portfolio, SoftwareTechnologies, Experience, FinishedProjects, Blog, Contact, Map, SubFooter), each living in `src/app/components/`. Most of these sections take their content as props sourced from `src/app/data.ts`.

**`src/app/data.ts`** is the single source of truth for site copy/content: nav links, socials, technologies, experience entries, skills, portfolio items, voluntary work, WayVenture feature/FAQ copy, etc. When asked to change site text, update this file rather than hardcoding strings in components.

**`src/app/interfaces.ts`** defines the TypeScript shape (`I`-prefixed interfaces) for every content type in `data.ts`. Add new fields here first when extending a content type.

Shared, low-level presentational pieces (title blocks, timeline items, link-with-icon, contact box) live under `src/app/components/shared/` and are reused across the bigger section components.

### Layout & global state

`src/app/layout.tsx` is the root layout: it sets metadata/OpenGraph/viewport, loads Geist fonts, and injects third-party scripts (Cookiebot consent, Google AdSense) plus the Boxicons stylesheet directly in `<head>`. It wraps everything in `StatusProvider` (`src/app/context.tsx`), a small client-side context (`useStatus`) that other components use to signal state such as "a modal/menu is open" — `ClientLayout.tsx` reads `status` to toggle `overflow-hidden` on `<body>` (e.g. when the mobile nav is open).

`ClientLayout.tsx` (client component) renders the persistent `Header`/`Footer` chrome around the routed page content and the scroll-to-top button.

### Routes beyond the homepage

- `src/app/wayventure/page.tsx` — standalone marketing page for WayVenture with its own metadata, OpenGraph/Twitter cards, and JSON-LD (`SoftwareApplication` + `FAQPage`) structured data. Content comes from the `wayVenture*` exports in `data.ts`.
- `src/app/imprint/page.tsx`, `src/app/privacy-policy/page.tsx` — legal pages.
- `src/app/sitemap.ts` — generates `sitemap.xml`; add new routes here when creating pages.

### API routes (`src/app/api/`)

- `send-mail/route.ts` — sends contact-form submissions via nodemailer (SMTP configured through `SMTP_SERVER_HOST`/`SMTP_SERVER_USERNAME`/`SMTP_SERVER_PASSWORD`/`SITE_MAIL_RECIEVER` env vars), sending both a notification mail to the site owner and a confirmation mail to the sender using inline HTML email templates.
- `request-videos/route.ts` — proxies the YouTube Data API (`YOUTUBE_API_KEY`/`YOUTUBE_CHANNELID` env vars) to fetch the latest channel videos for the Blog section.

Both are `'use server'` route handlers reading secrets from `process.env`; there are no `.env` files checked in, so these must be supplied at runtime/deploy time.

### Styling

Tailwind v4 with a custom, non-default color palette and font families (`header`/`body`) defined in `tailwind.config.ts` — use these tokens (`primary`, `secondary`, `grey-10`…`grey-70`, `yellow`, `lila`, etc.) rather than arbitrary hex values. The WayVenture page additionally uses `wv-*` color tokens (e.g. `wv-primary`, `wv-surface`, `wv-dark`, `wv-light`) — check `globals.css`/tailwind config if extending that section. Boxicons (`bx bx-*` classes) is the icon set used throughout, loaded via CDN `<link>` in the root layout.

### Deployment

Next.js is configured with `output: 'standalone'` (`next.config.ts`). The Dockerfile is the standard multi-stage Next.js standalone build. `.github/workflows/pipeline.yml` builds and pushes the Docker image to Docker Hub on every push to `main`, then dispatches a `trigger-workflow` event to a separate `YAML_Infrastructure` repo which handles actually deploying to the server — this repo has no deploy step of its own beyond publishing the image.
