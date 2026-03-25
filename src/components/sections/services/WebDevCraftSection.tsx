import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

function CraftIllustration() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="h-auto w-full max-w-[340px] text-neutral-900 md:max-w-[380px]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* small decorative circles — compact, brand-tinted */}
      <circle cx="62" cy="58" r="22" className="fill-amber-400/25" />
      <circle cx="370" cy="72" r="18" className="fill-[#F76902]/20" />
      <circle cx="48" cy="248" r="14" className="fill-neutral-200" />
      <circle cx="388" cy="220" r="16" className="fill-amber-300/35" />
      <circle cx="320" cy="268" r="12" className="fill-[#F76902]/15" />
      {/* window / content block */}
      <rect
        x="248"
        y="118"
        width="72"
        height="52"
        rx="8"
        className="fill-amber-50 stroke-[#F76902]/40"
        strokeWidth="2"
      />
      <line x1="260" y1="132" x2="308" y2="132" className="stroke-neutral-300" strokeWidth="3" strokeLinecap="round" />
      <line x1="260" y1="144" x2="292" y2="144" className="stroke-neutral-200" strokeWidth="3" strokeLinecap="round" />

      {/* monitor */}
      <rect
        x="128"
        y="96"
        width="168"
        height="118"
        rx="12"
        className="fill-white stroke-amber-400/70"
        strokeWidth="2.5"
      />
      <rect x="140" y="108" width="144" height="86" rx="6" className="fill-neutral-50" />
      <rect
        x="156"
        y="124"
        width="112"
        height="54"
        rx="4"
        className="fill-[#1a1a1a]"
      />
      <text
        x="212"
        y="160"
        textAnchor="middle"
        fill="#fcd34d"
        fontFamily="ui-monospace, monospace"
        fontSize="17"
        fontWeight="700"
      >
        {"</>"}
      </text>
      <rect x="192" y="218" width="40" height="10" rx="3" className="fill-neutral-300" />
      <rect x="176" y="234" width="72" height="6" rx="2" className="fill-neutral-200" />

      {/* floating tiles */}
      <rect
        x="72"
        y="112"
        width="44"
        height="44"
        rx="10"
        className="fill-white stroke-[#F76902]/50"
        strokeWidth="2"
      />
      <circle cx="94" cy="134" r="12" className="fill-amber-100 stroke-[#F76902]" strokeWidth="2" />
      <path d="M90 134l4 4 8-10" className="stroke-[#F76902]" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      <rect
        x="292"
        y="188"
        width="40"
        height="40"
        rx="8"
        className="fill-amber-50 stroke-amber-500/60"
        strokeWidth="2"
      />
      <circle cx="312" cy="208" r="8" className="fill-neutral-600/15" />

      <rect
        x="52"
        y="188"
        width="40"
        height="40"
        rx="8"
        className="fill-white stroke-amber-500/45"
        strokeWidth="2"
      />
      <line x1="62" y1="200" x2="82" y2="200" className="stroke-[#F76902]/50" strokeWidth="2" />
      <line x1="62" y1="208" x2="76" y2="208" className="stroke-neutral-300" strokeWidth="2" />
      <line x1="62" y1="216" x2="78" y2="216" className="stroke-neutral-300" strokeWidth="2" />

      <rect
        x="318"
        y="98"
        width="44"
        height="44"
        rx="10"
        className="fill-amber-50/90 stroke-[#F76902]/45"
        strokeWidth="2"
      />
      <path
        d="M340 116a8 8 0 110 10"
        className="stroke-[#F76902]/70"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function WebDevCraftSection() {
  return (
    <section
      className="border-t border-amber-400/30 bg-white py-8 md:py-10"
      aria-labelledby="webdev-craft-heading"
    >
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="marketing-eyebrow">How we work</p>
            <h2
              id="webdev-craft-heading"
              className="mt-2 text-2xl font-extrabold tracking-tight text-neutral-900 md:text-3xl md:leading-snug lg:text-[1.85rem] lg:leading-snug"
            >
              Building web experiences that support real business goals—not just pretty pages.
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-600 md:text-base md:leading-relaxed">
              <p>
                At <strong className="font-semibold text-neutral-900">{siteConfig.shortName}</strong>, we
                treat websites and web apps as products: clear information architecture, fast load
                times, and measurable outcomes for marketing and sales.
              </p>
              <p>
                Designers and engineers collaborate on the same roadmap so UX, accessibility, and
                technical SEO stay aligned from first wireframe to deployment.
              </p>
              <p>
                Whether you are validating a new offer or scaling an existing brand, we deliver
                maintainable code, sensible hosting choices and documentation your team can own.
              </p>
            </div>
            <Button
              asChild
              className="mt-6 rounded-[30px] bg-[#F76902] px-6 text-sm font-semibold text-white hover:bg-[#f9802b] md:text-base"
            >
              <Link href="/contact">Discuss your website</Link>
            </Button>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="rounded-2xl border border-amber-400/40 bg-linear-to-br from-amber-50/60 to-white p-4 shadow-sm md:p-5">
              <CraftIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
