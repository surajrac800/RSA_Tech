import { industries } from "@/config/industries";
import { Badge } from "@/components/ui/badge";

export function Industries() {
  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.06),transparent_55%),radial-gradient(circle_at_bottom,_rgba(6,182,212,0.08),transparent_55%)]" />
      <div className="container relative">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
            Industries We Serve
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Built for Modern Businesses
          </h2>
          <p className="mt-4 text-muted-foreground">
            From local businesses to fast-scaling startups, we adapt our solutions to your industry
            and growth stage.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <Badge
              key={industry}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-white shadow-sm shadow-blue-500/10 border border-blue-100/60"
            >
              {industry}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
