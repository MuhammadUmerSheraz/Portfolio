"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const shellClass =
    "flex items-center justify-between gap-2 rounded-2xl border border-line bg-cream/75 px-3 py-2.5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-midnight-soft/75 dark:shadow-soft-dark sm:gap-3 sm:px-4 sm:py-3 md:px-6 md:py-3.5";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-5 sm:pt-4 md:px-8 md:pt-6">
        <div className={shellClass}>
          <Link
            href="/"
            className="font-display min-w-0 max-w-[55%] flex-1 truncate text-[0.9rem] font-semibold leading-tight tracking-tight text-midnight transition hover:text-sea dark:text-cream dark:hover:text-accent sm:max-w-none sm:flex-none sm:text-[0.95rem] md:text-[1.05rem]"
            onClick={() => setOpen(false)}
          >
            {site.displayName}
            <span className="text-accent-dark dark:text-accent">.</span>
          </Link>

          <nav className="hidden flex-wrap items-center justify-end gap-x-1 md:flex md:gap-x-2" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-[13px] font-medium text-midnight-muted transition hover:bg-pearl hover:text-midnight dark:text-cream/70 dark:hover:bg-white/10 dark:hover:text-cream md:px-4 md:text-sm"
              >
                {l.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href={site.links.github}
              className="ml-1 inline-flex min-h-10 items-center rounded-full bg-midnight px-4 py-2 text-[13px] font-semibold text-cream shadow-sm transition hover:bg-sea dark:bg-cream dark:text-midnight dark:hover:bg-accent dark:hover:text-midnight md:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Link
              href={site.links.github}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-midnight text-[11px] font-bold text-cream dark:bg-cream dark:text-midnight"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GH
            </Link>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-line text-midnight transition hover:bg-pearl dark:border-white/15 dark:text-cream dark:hover:bg-white/10"
              aria-expanded={open}
              aria-controls="mobile-nav-panel"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-midnight/40 backdrop-blur-sm dark:bg-black/50 md:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <nav
              id="mobile-nav-panel"
              className="relative z-50 mt-2 flex flex-col gap-1 rounded-2xl border border-line bg-cream/95 p-2 shadow-lift dark:border-white/10 dark:bg-midnight-soft/95 dark:shadow-lift-dark md:hidden"
              aria-label="Mobile"
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-4 py-3.5 text-base font-medium text-midnight transition hover:bg-pearl active:bg-pearl dark:text-cream dark:hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href={site.links.github}
                className="rounded-xl px-4 py-3.5 text-base font-semibold text-midnight-muted transition hover:bg-pearl dark:text-cream/80 dark:hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                GitHub profile →
              </Link>
            </nav>
          </>
        ) : null}
      </div>
    </header>
  );
}
