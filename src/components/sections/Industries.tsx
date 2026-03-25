import { industries } from "@/config/industries";
import { Badge } from "@/components/ui/badge";

export function Industries() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container relative">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="marketing-eyebrow">Industries We Serve</p>
          <h2 className="marketing-heading mt-3">Built for Modern Businesses</h2>
          <p className="marketing-body mt-4">
            From local businesses to fast-scaling startups, we adapt our solutions to your industry
            and growth stage.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <Badge
              key={industry}
              variant="secondary"
              className="marketing-body border-2 border-amber-400/70 bg-amber-50 px-4 py-2 font-medium text-neutral-800 shadow-sm"
            >
              {industry}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
