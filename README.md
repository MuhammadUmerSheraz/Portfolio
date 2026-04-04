# Portfolio

Personal portfolio site for **Umer Sheraz** — technical leader profile with skills, featured work ([UmerPay](https://github.com/MuhammadUmerSheraz/UmerPay)), and contact links.

**Live repository:** [github.com/MuhammadUmerSheraz/Portfolio](https://github.com/MuhammadUmerSheraz/Portfolio)

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Dark theme by default, optional light mode (persisted in `localStorage`)

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

## Deploy

Deploy on [Vercel](https://vercel.com/) (or any Node host): set the project root to this repo, framework **Next.js**, install command `npm install`, build `npm run build`, output `.next` with `next start` or Vercel’s default.

## License

MIT — use freely for your own portfolio.
