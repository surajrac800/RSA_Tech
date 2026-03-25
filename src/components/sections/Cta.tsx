import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="border-t-2 border-amber-400/50 bg-white py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="marketing-heading">
            Let&apos;s Build Something Powerful Together
          </h2>
          <p className="marketing-body mt-6">
            Speak with our experts today and get a free digital audit.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 rounded-[30px] bg-[#F76902] px-8 font-semibold text-white hover:bg-[#f9802b]"
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
