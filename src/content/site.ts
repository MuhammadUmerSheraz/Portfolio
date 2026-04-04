/** Edit this file to tune copy, links, and skill lists. */
export const site = {
  /** Shown in the UI (nav, hero, footer). */
  displayName: "Umer Sheraz",
  /** Optional full legal name for structured data / résumé only — not used on the landing page. */
  legalName: "Muhammad Umer Sheraz",
  role: "Technical leader",
  tagline:
    "I ship products end-to-end — from mobile clients and APIs to cloud infrastructure, pipelines, and production operations.",
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
        "Technical direction & roadmap alignment",
        "Cross-functional collaboration (product, design, QA)",
        "Hiring support, mentoring, and standards",
      ],
    },
    {
      title: "Mobile",
      items: ["Android (Kotlin)", "iOS (Swift)", "Flutter", "React Native"],
    },
    {
      title: "Backend & APIs",
      items: [
        "PHP — Laravel, CodeIgniter, and the broader ecosystem",
        "Node.js & NestJS for typed APIs and microservices",
        "Python — Django, FastAPI, Flask",
        "REST, GraphQL patterns, auth, and integration design",
      ],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Web performance basics"],
    },
    {
      title: "Cloud & AWS",
      items: [
        "EC2, ECS / EKS patterns",
        "RDS, S3, CloudFront, IAM",
        "VPC, load balancing, secrets management",
      ],
    },
    {
      title: "DevOps & platforms",
      items: [
        "Docker & container images",
        "Kubernetes (deployments, services, ingress)",
        "CI/CD pipelines (GitHub Actions, GitLab CI, etc.)",
        "Linux server administration & hardening",
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
