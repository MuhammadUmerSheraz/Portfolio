import Link from "next/link";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 pt-4 md:px-8 md:pt-6">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-cream/75 px-4 py-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-midnight-soft/75 dark:shadow-soft-dark sm:px-5 sm:py-3.5 md:px-6">
          <Link
            href="/"
            className="font-display min-w-0 text-[0.95rem] font-semibold leading-tight tracking-tight text-midnight transition hover:text-sea dark:text-cream dark:hover:text-accent sm:text-[1.05rem]"
          >
            <span className="block sm:inline">{site.displayName}</span>
            <span className="text-accent-dark dark:text-accent">.</span>
          </Link>
          <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
            <nav className="flex flex-wrap items-center justify-end gap-x-0.5 gap-y-1 sm:gap-x-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-2.5 py-1.5 text-[12px] font-medium text-midnight-muted transition hover:bg-pearl hover:text-midnight dark:text-cream/70 dark:hover:bg-white/10 dark:hover:text-cream sm:px-3 sm:text-[13px] md:px-4 md:text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <Link
              href={site.links.github}
              className="inline-flex items-center rounded-full bg-midnight px-3 py-2 text-[12px] font-semibold text-cream shadow-sm transition hover:bg-sea dark:bg-cream dark:text-midnight dark:hover:bg-accent dark:hover:text-midnight sm:px-4 sm:text-[13px] md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
