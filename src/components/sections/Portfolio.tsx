import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Portfolio() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="marketing-eyebrow">Our Work Speaks for Itself</p>
          <h2 className="marketing-heading mt-3">See How We Turn Ideas into Results</h2>
          <p className="marketing-body mt-4">
            Explore real projects where we&apos;ve helped businesses grow traffic, leads and
            revenue with the right mix of technology and marketing.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 gap-2 rounded-[30px] bg-[#F76902] px-7 text-white shadow-md hover:bg-[#f9802b]"
          >
            <Link href="/portfolio">
              View Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
