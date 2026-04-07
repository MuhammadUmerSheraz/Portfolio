import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { WorkDetailVisuals } from "@/components/WorkDetailVisuals";
import {
  getFeaturedProjectBySlug,
  getFeaturedProjectSlugs,
  site,
  type FeaturedBulletSection,
  type FeaturedProject,
} from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

type PageProps = { params: { slug: string } };

function workMetaDescription(project: FeaturedProject): string {
  const raw =
    typeof project.detailIntro === "string"
      ? project.detailIntro
      : (project.detailIntro[0] ?? project.summary);
  const oneLine = raw.replace(/\s+/g, " ").trim();
  if (oneLine.length <= 160) return oneLine;
  return `${oneLine.slice(0, 157)}…`;
}

export function generateStaticParams() {
  return getFeaturedProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getFeaturedProjectBySlug(params.slug);
  if (!project) return { title: "Project", robots: { index: false, follow: false } };

  const description = workMetaDescription(project);
  const path = `/work/${params.slug}`;
  const pageTitle = `${project.name} — ${site.displayName}`;
  const origin = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${origin}${path}`;
  const fallbackOg = `${origin}/opengraph-image`;
  const ogImages = project.panelScreenshot
    ? [
        {
          url: `${origin}${project.panelScreenshot.src}`,
          width: 1200,
          height: 630,
          alt: project.panelScreenshot.alt,
        },
      ]
    : [
        {
          url: fallbackOg,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: pageTitle,
        },
      ];

  return {
    title: project.name,
    description,
    keywords: [...project.stack, site.displayName, "portfolio", "case study"],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: pageUrl,
      siteName: `${site.displayName} — Portfolio`,
      title: pageTitle,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: project.panelScreenshot ? [`${origin}${project.panelScreenshot.src}`] : [fallbackOg],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function BulletSections({ sections }: { sections: readonly FeaturedBulletSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="font-display text-lg font-semibold tracking-tight text-midnight dark:text-cream md:text-xl">
            {section.title}
          </h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-midnight-muted dark:text-cream/75 md:text-base">
            {section.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function WorkProjectPage({ params }: PageProps) {
  const project = getFeaturedProjectBySlug(params.slug);
  if (!project) notFound();

  const intros = Array.isArray(project.detailIntro) ? project.detailIntro : [project.detailIntro];

  return (
    <>
      <Nav />
      <main className="min-h-dvh min-w-0 px-4 pb-24 pt-[calc(5.5rem+env(safe-area-inset-top))] sm:px-5 sm:pb-28 sm:pt-28 md:px-8 md:pb-36 md:pt-32">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/#projects"
            className="inline-flex text-sm font-medium text-midnight-muted underline decoration-accent/40 underline-offset-4 transition hover:text-sea dark:text-cream/65 dark:hover:text-accent"
          >
            ← Recent projects
          </Link>

          <h1 className="mt-8 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-midnight dark:text-cream sm:text-[2rem] md:text-display-sm">
            {project.name}
          </h1>

          {project.detailTopHighlight ? (
            <div className="mt-6 rounded-2xl border border-line bg-pearl/60 p-5 shadow-soft dark:border-white/10 dark:bg-white/[0.05] dark:shadow-soft-dark sm:p-6">
              <p className="font-display text-[1.05rem] font-semibold tracking-tight text-midnight dark:text-cream sm:text-lg">
                {project.detailTopHighlight.headline}
              </p>
              <p className="mt-3 text-sm font-semibold text-sea dark:text-accent">{project.detailTopHighlight.role}</p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-midnight-muted dark:text-cream/75 md:text-base">
                <span className="font-medium text-midnight dark:text-cream/90">Revenue: </span>
                {project.detailTopHighlight.revenue}
              </p>
              {project.detailTopHighlight.disclaimer ? (
                <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-midnight-muted dark:border-white/10 dark:text-cream/50">
                  {project.detailTopHighlight.disclaimer}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-midnight-muted dark:text-cream/75 md:text-base">
            {intros.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {project.panelScreenshot ? (
            <div className="relative mt-10 overflow-hidden rounded-2xl border border-line bg-midnight-soft shadow-lift dark:border-white/10 dark:shadow-lift-dark">
              <Image
                src={project.panelScreenshot.src}
                alt={project.panelScreenshot.alt}
                width={1200}
                height={630}
                className="h-auto w-full object-contain"
                sizes="(max-width: 768px) 100vw, 42rem"
                priority
              />
            </div>
          ) : null}

          <div className="mt-10 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-pearl/80 px-3.5 py-1.5 text-xs font-medium text-midnight dark:border-white/10 dark:bg-white/5 dark:text-cream/90"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
            {project.primaryCta ? (
              <a
                href={project.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-sea px-7 py-3 text-sm font-semibold text-cream shadow-sm transition hover:bg-sea-light active:scale-[0.99] min-[400px]:w-auto"
              >
                {project.primaryCta.label}
              </a>
            ) : null}
            {project.secondaryCta ? (
              <a
                href={project.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-midnight/15 bg-transparent px-7 py-3 text-sm font-semibold text-midnight transition hover:border-midnight hover:bg-midnight/[0.03] active:scale-[0.99] dark:border-white/20 dark:text-cream dark:hover:border-cream/40 dark:hover:bg-white/5 min-[400px]:w-auto"
              >
                {project.secondaryCta.label}
              </a>
            ) : null}
          </div>

          <WorkDetailVisuals tables={project.detailTables} charts={project.detailBarCharts} />

          {project.bulletSections?.length ? (
            <div className="mt-14 border-t border-line pt-14 dark:border-white/10">
              <BulletSections sections={project.bulletSections} />
            </div>
          ) : null}

          {project.detailExtraSections?.length ? (
            <div className="mt-14 border-t border-line pt-14 dark:border-white/10">
              <BulletSections sections={project.detailExtraSections} />
            </div>
          ) : null}
        </article>

        <p className="mx-auto mt-16 max-w-3xl text-center text-sm text-midnight-muted dark:text-cream/50">
          © {new Date().getFullYear()} {site.displayName}
        </p>
      </main>
    </>
  );
}
