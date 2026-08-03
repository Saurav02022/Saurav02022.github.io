# Saurav Kumar — Portfolio

Personal portfolio site: work history, projects, and open-source contributions.

**Live:** https://saurav02022.github.io
(https://saurav02022-portfolio.vercel.app redirects here.)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- `next/font/google` — Syne, Instrument Sans, Space Mono

## Project Structure

```
lib/portfolio-data.tsx   All site content — cover, work, experience, about,
                         toolkit, open source, contact, socials.
                         Typed by lib/types.ts.
lib/styles.ts            Shared layout primitives (page measure, button variants)
lib/brand.ts             Design tokens for the build-time image routes
app/globals.css          Design system — one @theme block (Tailwind v4 has no
                         tailwind.config; it reads the CSS directly)
components/sections/     One component per page section
app/opengraph-image.tsx  OG image, Twitter card, and favicons, generated at build
app/icon.tsx
app/twitter-image.tsx
app/llms.txt/route.ts    Site content as plain text, for LLM crawlers
design.md                Design system reference
```

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
npm run lint
```

The canonical site URL is set via `NEXT_PUBLIC_SITE_URL` ([lib/site-config.ts](lib/site-config.ts)), used to generate `robots.txt`, `sitemap.xml`, and structured data. To serve a résumé PDF locally, place it in `public/` and point `RESUME_URL` at it.

## Deployment

The site is a static export (`output: 'export'` in `next.config.ts`) — no server-rendered routes, no API routes. [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) builds and publishes it to GitHub Pages on every push to `main`.

`saurav02022-portfolio.vercel.app` is kept alive as a permanent (308) redirect to the GitHub Pages URL, configured in [`vercel.json`](vercel.json).

## Implementation Notes

- **OG image and favicons run at build time**, via [`next/og`](https://nextjs.org/docs/app/api-reference/functions/image-response) — they can't read CSS variables, so `lib/brand.ts` mirrors the design tokens as plain values, and fonts are committed under `assets/fonts/` so the build never reaches the network.
- **Fonts are declared by literal family name**, not `next/font`'s `--font-*` variables — those variables fall back to a metric-only face for glyphs outside the Latin subset (`→ ↗ ✳`), which this design uses.
- **The mobile menu is a native `<dialog>`** (`showModal()`) — focus trap, Esc-to-close, and inert background come from the platform.
- **`llms.txt`** ([app/llms.txt/route.ts](app/llms.txt/route.ts)) renders the same content as `lib/portfolio-data.tsx`, generated rather than duplicated by hand.
- **Structured data** covers `Person`, `WebSite`, and one `SoftwareSourceCode` per project ([components/structured-data.tsx](components/structured-data.tsx)); no `BreadcrumbList`, since there are no breadcrumbs on a single-page site.

## License

No license file yet. Source is public for reference; the content, copy, and visual design are not licensed for reuse.
