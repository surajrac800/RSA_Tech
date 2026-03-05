import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-20 md:py-28 rsa-gradient-bg text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Let&apos;s Build Something Powerful Together
          </h2>
          <p className="mt-6 text-lg text-white/90">
            Speak with our experts today and get a free digital audit.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 bg-white text-blue-600 hover:bg-white/90"
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
