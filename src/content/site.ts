/** Edit this file to tune copy, links, and skill lists. */
const externalLinks = {
  github: "https://github.com/MuhammadUmerSheraz",
  linkedin: "https://www.linkedin.com/in/muhammad-umer-sheraz",
  umerpayLive: "https://umer-pay.vercel.app",
  umerpayRepo: "https://github.com/MuhammadUmerSheraz/UmerPay",
} as const;

export type FeaturedProjectPanel = "lottery" | "bank";

export type FeaturedBulletSection = {
  title: string;
  items: readonly string[];
};

/** Optional highlight card at the top of `/work/[slug]` (e.g. role + revenue, anonymised). */
export type DetailTopHighlight = {
  headline: string;
  role: string;
  revenue: string;
  disclaimer?: string;
};

/** Markdown-free table for project detail pages. */
export type DetailTableBlock = {
  title: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
};

/** Simple horizontal bar chart (values scaled against `max`, default 100). */
export type DetailBarChartBlock = {
  title: string;
  caption?: string;
  /** Shown next to values, e.g. "%" or "K USD/mo". */
  unit?: string;
  items: readonly { label: string; value: number; max?: number }[];
};

export type FeaturedProject = {
  /** URL segment for `/work/[slug]`. */
  slug: string;
  name: string;
  /** Teaser on the homepage (keep short). */
  summary: string;
  /** Lead copy on the project detail page. */
  detailIntro: string | readonly string[];
  /** Prominent box under the title on the detail page only. */
  detailTopHighlight?: DetailTopHighlight;
  /** Main bullet groups on the detail page. */
  bulletSections?: readonly FeaturedBulletSection[];
  /** Extra depth on the detail page only (optional). */
  detailExtraSections?: readonly FeaturedBulletSection[];
  /** Comparison tables on the detail page (optional). */
  detailTables?: readonly DetailTableBlock[];
  /** Illustrative bar visuals on the detail page (optional). */
  detailBarCharts?: readonly DetailBarChartBlock[];
  stack: readonly string[];
  /** Stack tags shown on the homepage; defaults to first 6. */
  homeStackLimit?: number;
  panelInitials: string;
  panelBlurb: string;
  panelVariant: FeaturedProjectPanel;
  /** Optional screenshot in `public/` (e.g. `/featured-umerpay.png`). */
  panelScreenshot?: { src: string; alt: string };
  /** When false, no right-hand visual column on the homepage. */
  showVisualPanel?: boolean;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export const site = {
  /** Shown in the UI (nav, hero, footer). */
  displayName: "Umer Sheraz",
  /** Optional full legal name for structured data / résumé only — not used on the landing page. */
  legalName: "Muhammad Umer Sheraz",
  role: "Technical leader",
  /** Second line under the hero headline (h1). */
  heroSubtitle: "All-round full stack — mobile, web, backend, and cloud.",
  tagline:
    "I ship products end-to-end — mobile apps, websites, and backend services — plus the cloud infrastructure, pipelines, and production operations that keep everything running.",
  /** ~150–160 characters for Google snippets; tune for your positioning. */
  seoDescription:
    "Umer Sheraz — all-round technical leader (full stack). Mobile (Flutter, RN, native), React/Next/Vue, PHP/Laravel/CodeIgniter, Node/NestJS, Python, AWS (Route 53, S3, Beanstalk, ECS/EKS), K8s, Docker & CI/CD.",
  seoKeywords: [
    "Umer Sheraz",
    "all-round developer",
    "technical leader",
    "technical lead",
    "software architect",
    "full stack developer",
    "Flutter",
    "React Native",
    "Android",
    "iOS",
    "Laravel",
    "CodeIgniter",
    "PHP",
    "NestJS",
    "Node.js",
    "Vue.js",
    "Python",
    "AWS",
    "Route 53",
    "Elastic Beanstalk",
    "S3",
    "Kubernetes",
    "Docker",
    "DevOps",
    "portfolio",
    "Gulf",
    "Gulf region",
  ],
  email: "muhammadumersheraz@gmail.com",
  phone: "+92 307 6450994",
  location: "Open to remote & hybrid",
  /** Headshot in `public/` — shown in the hero. */
  photo: {
    src: "/profile.png",
    alt: "Umer Sheraz, technical leader",
  },
  links: externalLinks,
  highlights: [
    "Architecture, code review, and mentoring across squads",
    "Production systems on AWS with Docker and Kubernetes",
    "CI/CD, observability hooks, and pragmatic security",
  ],
  skillCategories: [
    {
      title: "Leadership & delivery",
      items: [
        "Set technical direction and keep the roadmap realistic",
        "Work closely with product, design, and QA so everyone stays aligned",
        "Help hire, mentor engineers, and agree on how we build software",
        "Build a team culture where people own their work and can speak up",
        "Ship on time without sacrificing quality, security, or cleanup of old code",
        "Explain trade-offs, dates, and risks clearly to leaders and stakeholders",
        "When things break: respond calmly, learn from it, and fix the root cause",
        "Work with vendors and other teams when systems need to connect",
      ],
    },
    {
      title: "Team & project management",
      items: [
        "Plan work from idea to release: lists, sprints, milestones, go-live",
        "Track scope, risks, blockers, and who needs what from whom",
        "See who is busy, what matters most, and spread work fairly",
        "Share honest status: what is done, what is stuck, and what we decided",
        "Use tools like Jira or Confluence when they help — not for show",
      ],
    },
    {
      title: "Mobile",
      items: [
        "Android apps with Kotlin — UI, builds, and publishing to the Play Store",
        "iPhone and iPad apps with Swift — building, testing, App Store releases",
        "Flutter: one codebase for Android and iOS when that is the right fit",
        "React Native: shared UI with native pieces when needed",
        "Structure apps so they are easy to test, change, and grow",
        "Push alerts, links that open the app, and data that stays safe on the device",
        "Automated builds, app signing, and beta testing before users get the app",
      ],
    },
    {
      title: "Backend & APIs",
      items: [
        "PHP with Laravel, CodeIgniter, and common PHP patterns",
        "Node.js and NestJS for services and APIs that other apps call",
        "Python with Django, FastAPI, or Flask",
        "Design APIs, logins, and connections between systems in a clear way",
      ],
    },
    {
      title: "Frontend",
      items: [
        "React and Next.js for modern websites and web apps",
        "Vue.js for interactive user interfaces",
        "TypeScript to keep larger frontends maintainable",
        "Fast pages, usable for everyone, and layouts that work on phone and desktop",
      ],
    },
    {
      title: "Cloud & AWS",
      items: [
        "Route 53: domain names, traffic routing, and health checks",
        "S3: file storage, backups, permissions, and lifecycle rules",
        "Elastic Beanstalk: deploy and update apps without hand-managing servers",
        "Virtual servers (EC2), containers (ECS/EKS), and how they talk on the network",
        "Databases (RDS), CDN (CloudFront), and who can do what (IAM)",
        "Private networks (VPC), load balancers, APIs, and small serverless functions when useful",
        "Secrets, config, logs, and alarms so you can see issues early",
      ],
    },
    {
      title: "DevOps & platforms",
      items: [
        "Docker: package apps so they run the same everywhere",
        "Kubernetes: run many containers reliably in production",
        "CI/CD: automate test, build, and deploy (e.g. GitHub Actions, GitLab)",
        "Linux servers: setup, updates, and basic hardening",
      ],
    },
  ],
  featuredProjects: [
    {
      slug: "big-lottery-gulf",
      name: "BIG lottery project in the Gulf",
      summary:
        "Full-stack lottery platform for the Gulf — tickets, wallets, draws, and compliance-aware journeys. Co-founder & CTO; I lead engineering and delivery end to end.",
      detailTopHighlight: {
        headline: "BIG lottery project in the Gulf",
        role: "Co-founder & CTO — I own technical direction, architecture, and delivery alongside the founding team.",
        revenue:
          "Approximate revenue band for the live product: about USD $15K–$20K per month (varies with seasonality, campaigns, and draw cycles — not an audited figure).",
      },
      detailIntro: [
        "Production-grade online lottery for the Gulf: many game formats, ticketing, wallets, automated draw lifecycles, and customer-facing results — with operational alerting when publishing paths fail. Positioning is regional Gulf reach, not one emirate or city in isolation.",
        "The stack pairs a modern customer web app with a Django service layer, async workers, real-time channels where it matters, and cloud-backed storage and notifications — sized for Gulf traffic peaks, multi-currency display, and the payment patterns common across the Gulf.",
      ],
      bulletSections: [
        {
          title: "What you can do on the platform (Gulf product)",
          items: [
            "Play many game types aimed at Gulf players (quick picks, flagship draws, high-tier draws)",
            "Use play, cart, account, and live results in one web experience",
            "Buy and manage tickets with wallet-style balances",
            "See automated draw schedules, publish windows, and winner-style outcomes",
            "Read game rules, FAQ, policies, and marketing content in a consistent layout",
          ],
        },
        {
          title: "Tech stack",
          items: [
            "Frontend: Next.js (App Router), React, TypeScript, Tailwind-style UI",
            "Backend: Django for the admin panel and REST APIs (Django REST Framework), JWT-style auth",
            "State: Redux with persistence; motion with Framer Motion",
            "PWA: Serwist / service-worker tooling for installable, offline-friendly behavior",
            "Async work: Celery, Redis, scheduled jobs (django-celery-beat)",
            "Real-time: Django Channels (WebSockets) where live updates matter",
            "Data: PostgreSQL; AWS SDK / boto3 for S3 and related object storage",
            "Transactional email via Mailgun; other channels and programmable voice for urgent ops (e.g. draw not published)",
          ],
        },
        {
          title: "Infrastructure & cloud services",
          items: [
            "AWS EC2 — backend deployment (Django API, admin, workers, and related services)",
            "AWS Amplify — frontend deployment and hosting for the Next.js customer app",
            "Amazon Route 53 — DNS, routing, and domain management",
            "Amazon S3 — buckets for static assets, uploads, exports, and shared object storage",
            "GitHub — source control, branching, reviews, and delivery workflow around releases",
            "Multiple PSPs (payment service providers) — integrated for checkout and money-movement flows, with abstraction so we are not locked to one vendor",
            "Firebase Analytics — product analytics, funnels, and behaviour signals on the web experience",
            "Google Drive — part of the database backup and operational handoff / archive workflow (alongside automated dumps)",
            "Mailgun — primary provider for transactional email (tickets, auth, alerts, marketing-style drips where applicable)",
            "Plus logging, monitoring, secrets management, and other integrations as requirements grew — wired pragmatically rather than over-engineered on day one",
          ],
        },
        {
          title: "Challenge — AWS account restriction & same-day migration",
          items: [
            "Our AWS environment was suddenly restricted; we had a tight window (on the order of ~6 hours) to restore a working backend and keep dependent services from failing.",
            "I led moving the workload from the affected AWS account into a new AWS account — not just “spin up a server,” but DNS, data, frontends, and integrations in one coordinated cutover.",
            "Migrated and re-pointed: EC2 (API, admin, workers), Amazon Route 53 records and hosted zones, S3 bucket data (copy/sync, policies, and access patterns), AWS Amplify for the Next.js frontend, and the surrounding cloud pieces (secrets, env, monitoring hooks) so behaviour matched production expectations.",
            "After new compute came up, I updated third-party allowlists and IP whitelists — PSPs, webhooks, security appliances, and other vendors — so traffic to the new server and edge addresses was accepted without breaking payments or callbacks.",
            "Ran focused smoke checks post-cutover (auth, payments, email, draw-related jobs) and stayed on comms with the client and vendors until the riskiest paths were green again.",
          ],
        },
        {
          title: "How draws & operations work",
          items: [
            "Draw pipeline: schedule → process → publish, with clear guardrails",
            "Wheel / reveal-style UX kept in sync with backend state",
            "Prize distribution and notifications (email, Telegram-style channels)",
            "Checks and alerts when draws fail to publish or stay unpublished",
            "Cart, multi-currency display patterns, payments, KYC/AML-oriented account areas",
          ],
        },
        {
          title: "My role & team (how we ship)",
          items: [
            "Co-founder & CTO: I lead the product technically end-to-end and still own hands-on full-stack delivery (frontend + backend)",
            "I mentor 1 junior backend developer and 1 junior frontend developer",
            "We collaborate with an SEO specialist and a designer",
            "I manage the client, deadlines, budget, and the delivery pipeline day to day",
            "I keep priorities clear under pressure and unblock the team",
            "I take high-level technical and product decisions",
            "I meet regularly with the client, payment providers (PSPs), and third-party vendors",
            "I own reliability around draw automation and follow-through when publishing paths fail",
          ],
        },
      ],
      detailExtraSections: [
        {
          title: "Architecture & integration",
          items: [
            "Clear split between the customer Next.js app and Django APIs — transactional REST, WebSockets only where time-sensitive updates matter",
            "Background workers kept separate from web processes for emails, draw jobs, retries, and housekeeping",
            "Assets and uploads on S3-compatible storage with sensible permission and signed-URL patterns",
            "Shared configuration and prize patterns reused across game families to avoid one-off forks",
          ],
        },
        {
          title: "Compliance, content & trust surfaces",
          items: [
            "Legal, policy, FAQ, and game-rule pages share a consistent shell and accessible typography — tuned for Gulf-market clarity and repeat use across game families",
            "Marketing and education content structured so SEO and design can iterate without breaking core flows",
            "Account journeys include KYC/AML-oriented steps and payment edge cases without naming specific vendors — aligned with how Gulf-facing products typically handle risk and verification",
          ],
        },
        {
          title: "Reliability, monitoring & runbooks",
          items: [
            "Management commands and ops hooks for one-off fixes, backfills, and reporting",
            "Guardrails on draw publication and “still unpublished” detection with escalation paths",
            "Programmable voice (and other channels) for highest-severity failures such as missed publishes",
            "Defensive patterns on heavy tasks — memory awareness, circuit-breaker style backoff, and idempotent jobs",
          ],
        },
        {
          title: "Stakeholders, cadence & leadership",
          items: [
            "Regular design and SEO syncs so launches stay on-brand and discoverable",
            "Pairing and structured code review with junior engineers; clear Definition of Done before merge",
            "Working sessions with the client and PSPs on payment behaviour, timelines, and trade-offs",
            "Technical calls with third-party vendors for integrations, SLAs, and cutover windows",
          ],
        },
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "React",
        "Django",
        "DRF",
        "PostgreSQL",
        "AWS EC2",
        "AWS Amplify",
        "Route 53",
        "S3",
        "Redis",
        "Celery",
        "Channels",
        "Mailgun",
        "Firebase Analytics",
        "GitHub",
        "PSPs",
      ],
      detailTables: [
        {
          title: "AWS footprint (what runs where)",
          columns: ["AWS service", "Role in the product"],
          rows: [
            ["Amazon EC2", "Django REST API, Django admin, Celery workers, supporting services"],
            ["AWS Amplify", "Next.js customer app — build, deploy, hosting"],
            ["Amazon Route 53", "DNS, routing, health checks for cutovers"],
            ["Amazon S3", "Static assets, uploads, exports, shared object storage"],
          ],
        },
        {
          title: "Integrations & tooling (categories)",
          columns: ["Category", "How we use it"],
          rows: [
            ["Payments", "Multiple PSPs with a provider-agnostic integration layer"],
            ["Transactional email", "Mailgun for tickets, auth, alerts, lifecycle mail"],
            ["Product analytics", "Firebase Analytics on the web experience"],
            ["Backups & handoff", "Database dumps plus Google Drive for ops archive / handoff"],
            ["Source & delivery", "GitHub for code, reviews, and release rhythm"],
          ],
        },
        {
          title: "Core stack (app vs cloud)",
          columns: ["Area", "Stack"],
          rows: [
            ["Customer frontend", "Next.js (App Router), React, TypeScript, Redux, PWA (Serwist)"],
            ["Backend & admin", "Django, DRF, Celery, Redis, Channels"],
            ["Database", "PostgreSQL"],
            ["Object storage", "S3 (via boto3) — not a substitute for DB backups"],
          ],
        },
      ],
      detailBarCharts: [
        {
          title: "Leadership & delivery focus (illustrative)",
          caption: "How I weighted time as co-founder / CTO — not logged hours.",
          unit: "%",
          items: [
            { label: "Backend, draws & reliability", value: 35 },
            { label: "Frontend, UX & performance", value: 28 },
            { label: "Cloud, integrations & vendors", value: 22 },
            { label: "Team, client & roadmap", value: 15 },
          ],
        },
        {
          title: "Revenue band vs reference scale (USD / month)",
          caption: "Bars show the stated band on a 0–25K scale for context only — not audited.",
          unit: "K USD",
          items: [
            { label: "Typical lower month (~floor of band)", value: 15, max: 25 },
            { label: "Typical stronger month (~ceiling of band)", value: 20, max: 25 },
          ],
        },
      ],
      panelInitials: "BL",
      panelBlurb: "Gulf lottery · draws, commerce, compliance-aware flows",
      panelVariant: "lottery",
      showVisualPanel: false,
      homeStackLimit: 6,
    },
    {
      slug: "umerpay",
      name: "UmerPay",
      summary:
        "Open-source banking UI demo — passkeys, transfers, statements, admin tools. Full-stack Next.js you can clone and run.",
      detailIntro: [
        "UmerPay is an open-source digital banking UI demo — not a licensed bank — built to show how a modern retail banking experience can look and behave end to end. It is MIT licensed so teams can fork patterns for onboarding, accounts, transfers, and statements without starting from a blank page.",
        "The app is full-stack Next.js with PostgreSQL and Prisma, JWT-backed sessions, WebAuthn passkeys, OTP-style verification flows, beneficiaries, transaction history, statement views, a progressive web app shell, and an admin area for operational tasks.",
      ],
      bulletSections: [
        {
          title: "What you can try in the product",
          items: [
            "Sign-in flows with passwordless WebAuthn passkeys where the browser supports them",
            "OTP-style steps for sensitive actions and session recovery patterns",
            "Account overview, balances, and navigation that mirror a credible retail banking UI",
            "Internal transfers, external-style transfers, beneficiaries, and transaction lists with filters",
            "Statement-style exports and read-only history suitable for demos and interviews",
            "Installable PWA behaviour for a closer-to-native feel on supported devices",
          ],
        },
        {
          title: "Architecture & stack",
          items: [
            "Next.js 14 (App Router) with React and TypeScript for the customer and admin surfaces",
            "Tailwind CSS for layout and theming; component patterns kept readable for contributors",
            "PostgreSQL as the system of record; Prisma for schema, migrations, and type-safe queries",
            "REST-style route handlers and server actions where appropriate — clear separation between UI and persistence",
            "JWT sessions for authenticated browsing; WebAuthn for passkey registration and assertion",
          ],
        },
        {
          title: "Security & data posture (demo scope)",
          items: [
            "Designed to showcase realistic auth and step-up patterns without claiming production banking certification",
            "Passwords and secrets belong in environment configuration — the repo documents what to set locally and in deploy targets",
            "Prisma migrations keep schema changes reviewable; sample seed paths help you get data on screen quickly",
          ],
        },
        {
          title: "Admin & operations",
          items: [
            "Admin tools for user/account oversight, configuration, and demo housekeeping",
            "Flows that mirror how a small team might support customers during a pilot or hackathon build",
            "Enough structure to extend toward KYC placeholders, limits, or audit trails if you fork the project",
          ],
        },
      ],
      detailExtraSections: [
        {
          title: "Why I published it",
          items: [
            "A single public codebase is easier to discuss in interviews and reviews than screenshots alone",
            "Shows opinionated UI polish alongside boring-but-correct persistence and auth",
            "Invites contributors: issues, PRs, and forks are welcome under the MIT license",
          ],
        },
        {
          title: "Running and extending it",
          items: [
            "Clone from GitHub, install dependencies, configure `.env` from the documented example, run Prisma migrate/generate, then start Next.js",
            "Deploy-friendly: works on Vercel-style hosts with a managed PostgreSQL instance",
            "Natural extensions: more account types, richer statements, fraud hooks, or design-system tokens — the schema is meant to grow",
          ],
        },
      ],
      stack: [
        "Next.js 14",
        "App Router",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "WebAuthn",
        "PWA",
      ],
      homeStackLimit: 5,
      panelInitials: "UP",
      panelBlurb: "Banking UI demo · passkeys · transfers · statements · PWA",
      panelVariant: "bank",
      panelScreenshot: {
        src: "/featured-umerpay.png",
        alt: "UmerPay open-source banking demo — product preview",
      },
      primaryCta: { label: "Live demo", href: externalLinks.umerpayLive },
      secondaryCta: { label: "Source code", href: externalLinks.umerpayRepo },
      detailTables: [
        {
          title: "UmerPay at a glance",
          columns: ["Topic", "Detail"],
          rows: [
            ["What it is", "Open-source digital banking UI demo (not a licensed bank)"],
            ["License", "MIT — fork and adapt freely"],
            ["Live demo", "Hosted on Vercel; link above"],
            ["Source", "Public GitHub repository"],
            ["Data store", "PostgreSQL with Prisma migrations"],
          ],
        },
        {
          title: "Layer → technology",
          columns: ["Layer", "Primary technology"],
          rows: [
            ["Customer & admin UI", "Next.js 14 (App Router), React, TypeScript"],
            ["Styling & layout", "Tailwind CSS"],
            ["Persistence", "Prisma ORM → PostgreSQL"],
            ["HTTP / server logic", "Route handlers & server actions"],
            ["Sessions", "JWT for authenticated browsing"],
            ["Passwordless sign-in", "WebAuthn passkeys where supported"],
          ],
        },
      ],
      detailBarCharts: [
        {
          title: "Where engineering effort went (illustrative split)",
          caption: "Rough share of build time — useful for scoping interviews, not a time log.",
          unit: "%",
          items: [
            { label: "Customer UI & flows", value: 35 },
            { label: "API, schema & database", value: 30 },
            { label: "Auth, OTP & security patterns", value: 22 },
            { label: "Admin, PWA & polish", value: 13 },
          ],
        },
      ],
    },

  ] satisfies FeaturedProject[],
};

export function getFeaturedProjectBySlug(slug: string): FeaturedProject | undefined {
  return site.featuredProjects.find((p) => p.slug === slug);
}

export function getFeaturedProjectSlugs(): string[] {
  return site.featuredProjects.map((p) => p.slug);
}

/** Initials for avatar fallback (e.g. Umer Sheraz → US). */
export function displayInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]).toUpperCase();
}
