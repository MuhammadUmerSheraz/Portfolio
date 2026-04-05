/** Edit this file to tune copy, links, and skill lists. */
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
  ],
  email: "muhammadumersheraz@gmail.com",
  phone: "+92 307 6450994",
  location: "Open to remote & hybrid",
  /** Headshot in `public/` — shown in the hero. */
  photo: {
    src: "/profile.png",
    alt: "Umer Sheraz, technical leader",
  },
  links: {
    github: "https://github.com/MuhammadUmerSheraz",
    linkedin: "https://www.linkedin.com/in/muhammad-umer-sheraz",
    umerpayLive: "https://umer-pay.vercel.app",
    umerpayRepo: "https://github.com/MuhammadUmerSheraz/UmerPay",
  },
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
  featuredProject: {
    name: "UmerPay",
    description:
      "Open-source digital banking UI demo — full-stack Next.js, PostgreSQL, Prisma, JWT sessions, WebAuthn passkeys, OTP flows, transfers, beneficiaries, statements, PWA, and admin tools. MIT licensed.",
    stack: ["Next.js 14", "PostgreSQL", "Prisma", "Tailwind", "WebAuthn"],
  },
};

/** Initials for avatar fallback (e.g. Umer Sheraz → US). */
export function displayInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0] + parts[parts.length - 1]![0]).toUpperCase();
}
