/**
 * Decorative coding / layout grid for the web development service hero.
 * Pure presentation; motion respects prefers-reduced-motion via CSS media in parent if needed.
 */
export function WebDevHeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden>
      {/* Moving grid — suggests structure / layout */}
      <div
        className="webdev-hero-grid absolute inset-0 opacity-80 [background-image:linear-gradient(to_right,rgba(247,105,2,0.11)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,105,2,0.11)_1px,transparent_1px)] [background-size:40px_40px]"
        style={{ willChange: "background-position" }}
      />
      {/* Soft node dots like a minimal "network" */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_70%_30%,rgba(251,191,36,0.06),transparent)]" />

      {/* Floating code-like glyphs */}
      <span
        className="webdev-code-float absolute left-[6%] top-[18%] font-mono text-[10px] font-medium text-[#F76902]/90 sm:text-xs"
        style={{ animationDelay: "0s" }}
      >
        {"<Hero />"}
      </span>
      <span
        className="webdev-code-float absolute right-[12%] top-[26%] font-mono text-[10px] text-neutral-400 sm:text-xs"
        style={{ animationDelay: "1.2s" }}
      >
        {"{ responsive }"}
      </span>
      <span
        className="webdev-code-float absolute bottom-[22%] left-[14%] font-mono text-[10px] text-[#F76902]/70 sm:text-xs"
        style={{ animationDelay: "2.4s" }}
      >
        {"async () => {}"}
      </span>
      <span
        className="webdev-code-float absolute bottom-[28%] right-[8%] font-mono text-[10px] text-neutral-500 sm:text-xs"
        style={{ animationDelay: "0.6s" }}
      >
        {"// SEO · perf"}
      </span>
      <span
        className="webdev-bracket-pulse absolute left-1/2 top-[12%] -translate-x-1/2 font-mono text-4xl font-light text-[#F76902]/15 sm:text-5xl md:text-6xl"
        style={{ animationDelay: "0.3s" }}
      >
        {"</>"}
      </span>
    </div>
  );
}
