import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { FeaturedWorkSidePanel } from "@/components/FeaturedWorkSidePanel";
import { Nav } from "@/components/Nav";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.25" className="text-sea/25 dark:text-sea/35" />
      <path
        d="M6 10.2l2.4 2.4L14.2 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-sea dark:text-accent"
      />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-dark dark:text-accent">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <Nav />

      <main className="min-h-dvh min-w-0 overflow-x-hidden">
        {/* Hero */}
        <section className="relative px-4 pb-24 pt-[calc(5.5rem+env(safe-area-inset-top))] sm:px-5 sm:pb-28 sm:pt-28 md:px-8 md:pb-36 md:pt-36">
          <div
            className="pointer-events-none absolute inset-0 bg-mesh-hero opacity-90 dark:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 hidden bg-mesh-hero-dark opacity-100 dark:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 top-24 h-[420px] w-[420px] rounded-full bg-accent-glow blur-[100px] animate-drift dark:opacity-70"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-sea-mist blur-3xl dark:bg-sea/15"
            aria-hidden
          />

          <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <SectionLabel>Portfolio</SectionLabel>
              <h1 className="animate-fade-up mt-5 font-display text-[1.65rem] font-medium leading-tight text-midnight opacity-0 [animation-delay:0.06s] dark:text-cream sm:text-[1.9rem] sm:leading-snug md:text-display md:text-display-lg md:leading-[1.05]">
                <span className="text-balance">{site.role}</span>
                <span className="mt-3 block font-normal text-midnight-muted dark:text-cream/70 md:mt-4">
                  {site.heroSubtitle}
                </span>
              </h1>
              <p className="animate-fade-up mt-8 max-w-xl text-[1.05rem] leading-[1.7] text-midnight-muted opacity-0 [animation-delay:0.14s] dark:text-cream/75 md:text-lg">
                {site.tagline}
              </p>
              <ul className="animate-fade-up mt-10 space-y-4 opacity-0 [animation-delay:0.22s]">
                {site.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3.5">
                    <CheckIcon className="mt-0.5 shrink-0" />
                    <span className="text-[0.95rem] leading-snug text-midnight dark:text-cream/90 md:text-base">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="animate-fade-up mt-12 flex w-full flex-col gap-3 opacity-0 [animation-delay:0.3s] min-[400px]:flex-row min-[400px]:flex-wrap sm:w-auto">
                <Link
                  href="#work"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-midnight px-8 py-3 text-sm font-semibold text-cream shadow-card transition hover:bg-sea hover:shadow-lift active:scale-[0.99] dark:bg-cream dark:text-midnight dark:shadow-card-dark dark:hover:bg-accent dark:hover:text-midnight dark:hover:shadow-lift-dark min-[400px]:w-auto"
                >
                  Featured work
                </Link>
                <Link
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-line bg-cream/80 px-8 py-3 text-sm font-semibold text-midnight shadow-sm backdrop-blur-sm transition hover:border-accent/40 hover:shadow-soft active:scale-[0.99] dark:border-white/15 dark:bg-white/5 dark:text-cream dark:hover:border-accent/40 dark:hover:bg-white/10 min-[400px]:w-auto"
                >
                  LinkedIn
                </Link>
              </div>
            </div>

            <div className="animate-fade-up relative opacity-0 [animation-delay:0.18s] lg:justify-self-end">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div
                  className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/30 via-sea/15 to-transparent opacity-80 blur-xl dark:from-accent/20 dark:via-sea/25"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-card-shine shadow-lift backdrop-blur-sm dark:border-white/10 dark:bg-card-shine-dark dark:shadow-lift-dark">
                  <div className="relative -mx-px -mt-px aspect-[4/5] max-h-[min(300px,42vh)] min-h-[200px] w-[calc(100%+2px)] sm:aspect-[3/4] sm:max-h-[340px] lg:max-h-[320px]">
                    <Image
                      src={site.photo.src}
                      alt={site.photo.alt}
                      fill
                      priority
                      className="object-cover object-[50%_22%]"
                      sizes="(max-width: 1024px) 100vw, min(320px, 32vw)"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-midnight/25 to-transparent dark:from-void/50"
                      aria-hidden
                    />
                  </div>
                  <div className="p-5 sm:p-8 md:p-10">
                  <p className="font-display text-lg italic text-midnight-muted dark:text-cream/50">&ldquo;</p>
                  <p className="mt-2 font-display text-xl font-medium leading-snug text-midnight dark:text-cream md:text-2xl">
                    Clear architecture, kind code reviews, and shipping without drama.
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-midnight-muted dark:text-cream/65">
                    That&apos;s the bar I hold for myself and the teams I support — whether we&apos;re
                    launching an app, hardening an API, or automating the path to production.
                  </p>
                  <div className="mt-8 border-t border-line pt-6 dark:border-white/10">
                    <p className="text-sm font-semibold text-midnight dark:text-cream">{site.displayName}</p>
                    <p className="text-xs text-midnight-muted dark:text-cream/60">{site.role}</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-24 border-t border-line bg-cream-deep/80 px-4 py-20 dark:border-white/10 dark:bg-midnight-soft/35 sm:scroll-mt-28 sm:px-5 sm:py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Expertise</SectionLabel>
            <h2 className="mt-4 font-display text-display-sm font-medium text-midnight dark:text-cream md:text-display">
              Skills &amp; domains
            </h2>
            <p className="mt-5 max-w-2xl text-midnight-muted dark:text-cream/70 md:text-lg">
              Where I focus depends on the team and the risk — here is a honest map of the territories
              I cover.
            </p>
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {site.skillCategories.map((cat, i) => (
                <article
                  key={cat.title}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-cream/90 p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-lift dark:border-white/10 dark:bg-midnight-soft/90 dark:shadow-card-dark dark:hover:border-accent/35 dark:hover:shadow-lift-dark sm:p-6 md:p-7"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="font-display text-3xl font-light tabular-nums text-accent/40 transition group-hover:text-accent/70 dark:text-accent/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-midnight dark:text-cream">
                    {cat.title}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-midnight-muted dark:text-cream/70">
                    {cat.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured work */}
        <section id="work" className="scroll-mt-24 px-4 py-20 sm:scroll-mt-28 sm:px-5 sm:py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>More detail</SectionLabel>
            <h2 className="mt-4 font-display text-display-sm font-medium text-midnight dark:text-cream md:text-display">
              Featured work
            </h2>
            <p className="mt-5 max-w-2xl text-midnight-muted dark:text-cream/70 md:text-lg">
              Short previews below — use Explore more to open the full write-up: stack, delivery, and how I worked with the team.
            </p>

            <div className="mt-14 flex flex-col gap-14">
              {site.featuredProjects.map((project) => {
                const showVisualPanel = project.showVisualPanel !== false;
                const stackLimit = project.homeStackLimit ?? 6;
                const homeStack = project.stack.slice(0, stackLimit);
                const moreStack = project.stack.length - homeStack.length;
                return (
                <article
                  key={project.slug}
                  className={`overflow-hidden rounded-[1.75rem] border border-line bg-cream shadow-lift dark:border-white/10 dark:bg-midnight-soft/95 dark:shadow-lift-dark ${
                    showVisualPanel ? "md:grid md:grid-cols-[1.1fr_0.9fr]" : ""
                  }`}
                >
                  <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12 lg:p-14">
                    <h3 className="font-display text-3xl font-semibold tracking-tight text-midnight dark:text-cream md:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-midnight-muted dark:text-cream/75 md:text-base">
                      {project.summary}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {homeStack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-line bg-pearl/80 px-3.5 py-1.5 text-xs font-medium text-midnight dark:border-white/10 dark:bg-white/5 dark:text-cream/90"
                        >
                          {s}
                        </span>
                      ))}
                      {moreStack > 0 ? (
                        <span className="rounded-full border border-dashed border-line px-3.5 py-1.5 text-xs font-medium text-midnight-muted dark:border-white/20 dark:text-cream/50">
                          +{moreStack} in full detail
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-9 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-midnight px-7 py-3 text-sm font-semibold text-cream shadow-sm transition hover:bg-sea active:scale-[0.99] dark:bg-cream dark:text-midnight dark:hover:bg-accent dark:hover:text-midnight min-[400px]:w-auto"
                      >
                        Explore more
                      </Link>
                      {project.primaryCta ? (
                        <Link
                          href={project.primaryCta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-sea px-7 py-3 text-sm font-semibold text-cream shadow-sm transition hover:bg-sea-light active:scale-[0.99] min-[400px]:w-auto"
                        >
                          {project.primaryCta.label}
                        </Link>
                      ) : null}
                      {project.secondaryCta ? (
                        <Link
                          href={project.secondaryCta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-midnight/15 bg-transparent px-7 py-3 text-sm font-semibold text-midnight transition hover:border-midnight hover:bg-midnight/[0.03] active:scale-[0.99] dark:border-white/20 dark:text-cream dark:hover:border-cream/40 dark:hover:bg-white/5 min-[400px]:w-auto"
                        >
                          {project.secondaryCta.label}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                  {showVisualPanel ? <FeaturedWorkSidePanel project={project} /> : null}
                </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-line bg-mesh-footer px-4 py-20 dark:border-white/10 dark:bg-mesh-footer-dark sm:scroll-mt-28 sm:px-5 sm:py-24 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-cream/90 p-5 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-midnight-soft/90 dark:shadow-soft-dark sm:p-8 md:p-12 lg:p-14">
              <div className="md:flex md:items-end md:justify-between md:gap-16">
                <div className="max-w-xl">
                  <SectionLabel>Contact</SectionLabel>
                  <h2 className="mt-4 font-display text-display-sm font-medium text-midnight dark:text-cream md:text-display">
                    Let&apos;s talk
                  </h2>
                  <p className="mt-5 text-midnight-muted dark:text-cream/70 md:text-lg">
                    {site.location}. For roles, consulting, or architecture conversations — I&apos;d love
                    to hear from you.
                  </p>
                </div>
                <div className="mt-10 flex flex-col gap-4 md:mt-0 md:text-right">
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-base font-semibold text-midnight underline decoration-accent/50 decoration-2 underline-offset-[6px] transition hover:decoration-accent dark:text-cream sm:text-lg"
                  >
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-midnight-muted transition hover:text-sea dark:text-cream/65 dark:hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-midnight px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-5 sm:py-12 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-cream/55 md:flex-row">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} {site.displayName}. Crafted with Next.js.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                href={site.links.github}
                className="transition hover:text-cream"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Link>
              <Link
                href={site.links.linkedin}
                className="transition hover:text-cream"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href={site.links.umerpayLive}
                className="transition hover:text-cream"
                target="_blank"
                rel="noreferrer"
              >
                UmerPay
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
