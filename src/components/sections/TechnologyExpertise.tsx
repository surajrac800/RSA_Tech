"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type TechItem = {
  id: string;
  label: string;
  color: string;
  slug: string;
  /** Fallback when cdn.simpleicons.org fails for this slug */
  srcOverride?: string;
};

const TECHNOLOGIES: TechItem[] = [
  { id: "wordpress", label: "WORDPRESS", color: "21759b", slug: "wordpress" },
  { id: "shopify", label: "SHOPIFY", color: "95bf47", slug: "shopify" },
  { id: "react", label: "REACT", color: "61dafb", slug: "react" },
  {
    id: "magento",
    label: "MAGENTO",
    color: "f46f25",
    slug: "magento",
    srcOverride:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg",
  },
  { id: "flutter", label: "FLUTTER", color: "02569b", slug: "flutter" },
  { id: "laravel", label: "LARAVEL", color: "f55247", slug: "laravel" },
  { id: "redux", label: "REDUX", color: "764abc", slug: "redux" },
  { id: "nodejs", label: "NODE JS", color: "339933", slug: "nodedotjs" },
];

export function TechnologyExpertise() {
  const [inColor, setInColor] = useState<Record<string, boolean>>({});

  const toggle = useCallback((id: string) => {
    setInColor((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return (
    <section className="home-section-py relative bg-white">
      <div className="container relative">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="marketing-eyebrow">Technology stack</p>
          <h2 className="marketing-heading mt-3">Our Technology Expertise</h2>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-8 md:gap-x-10 md:gap-y-10">
          {TECHNOLOGIES.map((tech) => {
            const showColor = inColor[tech.id];
            const src =
              tech.srcOverride ??
              `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`;
            return (
              <button
                key={tech.id}
                type="button"
                suppressHydrationWarning
                onClick={() => toggle(tech.id)}
                aria-pressed={showColor}
                aria-label={`${tech.label} — tap to ${showColor ? "show grayscale" : "show brand colors"}`}
                className="flex flex-col items-center gap-3 outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#F76902] focus-visible:ring-offset-2"
              >
                <span
                  className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200 bg-white p-2 shadow-sm transition-all duration-500 md:h-20 md:w-20",
                    showColor ? "border-neutral-300 shadow-md" : "opacity-90"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    width={56}
                    height={56}
                    className={cn(
                      "h-12 w-12 object-contain transition-[filter] duration-500 md:h-14 md:w-14",
                      showColor ? "grayscale-0" : "grayscale"
                    )}
                    decoding="async"
                    loading="lazy"
                  />
                </span>
                <span className="marketing-body text-[11px] font-bold uppercase tracking-wide text-neutral-900 md:text-xs">
                  {tech.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
