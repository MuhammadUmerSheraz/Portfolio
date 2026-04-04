# Portfolio

Personal portfolio site for **Umer Sheraz** — technical leader profile with skills, featured work ([UmerPay](https://github.com/MuhammadUmerSheraz/UmerPay)), and contact links.

**Repository:** [github.com/MuhammadUmerSheraz/Portfolio](https://github.com/MuhammadUmerSheraz/Portfolio)

**Production (live):** [https://umer-sheraz-portfolio.vercel.app](https://umer-sheraz-portfolio.vercel.app/)

**GitHub *About* website link:** set it to the same URL above (or your custom domain later): repo → **⚙️** next to *About* → **Website** → paste the link → Save. GitHub does not read this from the repo files automatically.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Dark theme by default, optional light mode (persisted in `localStorage`)
- **Progressive Web App (PWA):** [`src/app/manifest.ts`](src/app/manifest.ts) + icons in `public/` — installable on phone/desktop (“Add to Home Screen” / install prompt where the browser supports it)
- **Responsive layout:** mobile-first spacing, safe-area insets for notched devices, touch-friendly controls (44px targets), collapsible navigation on small screens
- **SEO:** `metadataBase`, meta description & keywords, canonical URL, `robots.txt`, `sitemap.xml`, Open Graph image (`opengraph-image`), Twitter card, JSON-LD (`Person` + `WebSite`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3020](http://localhost:3020). Production build:

```bash
npm run build
npm run start
```

## Customize

- **Copy & links:** edit [`src/content/site.ts`](src/content/site.ts) — display name, role, tagline, skills, GitHub/LinkedIn URLs, featured project.
- **Headshot:** replace [`public/profile.png`](public/profile.png) or change `photo.src` / `photo.alt` in `site.ts`.
- **Metadata (title, OG):** [`src/app/layout.tsx`](src/app/layout.tsx) pulls from `site.ts`.
- **App icons:** after changing your photo, regenerate tiles with macOS `sips` (see comments in README) or replace `public/icon-192.png` and `public/icon-512.png` manually.

## SEO & canonical URL

Set **`NEXT_PUBLIC_SITE_URL`** in **Vercel → Project → Settings → Environment Variables** (Production) to your public origin **with no trailing slash**:

`https://umer-sheraz-portfolio.vercel.app`

Then **redeploy**. That keeps Open Graph, `sitemap.xml`, and JSON-LD aligned with [the live site](https://umer-sheraz-portfolio.vercel.app/). If you later attach a **custom domain**, change this variable to that domain instead.

This repo reads the value in [`src/lib/site-url.ts`](src/lib/site-url.ts). If the variable is missing, the build falls back to **`VERCEL_URL`** (usually fine, but can differ from your preferred hostname).

Copy [`.env.example`](.env.example) to `.env.local` for local checks; production values belong in the host’s env UI.

Tune **`seoDescription`** and **`seoKeywords`** in [`src/content/site.ts`](src/content/site.ts). Validate with [Google Rich Results Test](https://search.google.com/test/rich-results) and [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) after deploy.

## Install as an app

On **iOS Safari:** Share → **Add to Home Screen**. On **Android Chrome:** menu → **Install app** or **Add to Home Screen**. Requires **HTTPS** in production (e.g. Vercel).

## Deploy

Deploy on [Vercel](https://vercel.com/) (or any Node host): set the project root to this repo, framework **Next.js**, install command `npm install`, build `npm run build`, output `.next` with `next start` or Vercel’s default.

## License

MIT — use freely for your own portfolio.
