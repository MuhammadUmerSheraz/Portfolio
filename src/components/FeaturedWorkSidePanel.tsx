import Image from "next/image";
import type { FeaturedProject, FeaturedProjectPanel } from "@/content/site";

const featuredPanelBase: Record<FeaturedProjectPanel, string> = {
  bank: "bg-midnight-soft dark:bg-[#050810]",
  lottery: "bg-[#1c1810] dark:bg-[#0c0a06]",
};

const featuredPanelGradient: Record<FeaturedProjectPanel, string> = {
  bank: "bg-[radial-gradient(ellipse_at_30%_20%,rgba(196,165,116,0.15),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(45,122,122,0.2),transparent_45%)]",
  lottery:
    "bg-[radial-gradient(ellipse_at_28%_18%,rgba(251,191,36,0.2),transparent_52%),radial-gradient(ellipse_at_82%_78%,rgba(217,119,6,0.26),transparent_48%)]",
};

export function FeaturedWorkSidePanel({ project }: { project: FeaturedProject }) {
  return (
    <div
      className={`relative min-h-[280px] overflow-hidden border-t border-line md:border-l md:border-t-0 md:min-h-[360px] ${featuredPanelBase[project.panelVariant]}`}
    >
      <div className={`absolute inset-0 ${featuredPanelGradient[project.panelVariant]}`} aria-hidden />
      <div
        className={`absolute inset-0 ${project.panelScreenshot ? "opacity-[0.04] dark:opacity-[0.06]" : "opacity-[0.07] dark:opacity-[0.12]"}`}
        style={{
          backgroundImage: `linear-gradient(rgba(255,253,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,253,249,0.5) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      {project.panelScreenshot ? (
        <div className="relative z-[1] flex h-full min-h-[260px] items-center justify-center p-5 sm:p-7 md:min-h-[320px] md:p-9">
          <Image
            src={project.panelScreenshot.src}
            alt={project.panelScreenshot.alt}
            width={1200}
            height={630}
            className="h-auto w-full max-h-[220px] rounded-xl border border-white/15 object-contain object-center shadow-[0_28px_90px_-24px_rgba(0,0,0,0.75)] sm:max-h-[260px] md:max-h-[min(310px,42vh)]"
            sizes="(max-width: 768px) 90vw, min(520px, 40vw)"
          />
          <span className="sr-only">{project.panelBlurb}</span>
        </div>
      ) : (
        <div className="relative flex h-full flex-col items-center justify-center p-10 text-center">
          <span
            className={`font-display font-light tracking-tight text-cream/15 dark:text-cream/10 ${
              project.panelInitials.length > 2 ? "text-5xl sm:text-6xl md:text-7xl" : "text-7xl md:text-8xl"
            }`}
          >
            {project.panelInitials}
          </span>
          <p className="mt-6 max-w-[16rem] text-sm leading-relaxed text-cream/55 dark:text-cream/50">{project.panelBlurb}</p>
        </div>
      )}
    </div>
  );
}
