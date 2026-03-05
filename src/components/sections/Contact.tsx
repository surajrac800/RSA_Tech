import { ContactForm } from "@/components/forms/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative pt-20 pb-12 md:pt-24 md:pb-16 bg-muted/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.1),transparent_55%)]" />
      <div className="container relative">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
          {/* Left: content / “image” area */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Get In Touch
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s Talk About Your Next Project
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Tell us where you are today and where you want to be in the next 6–12 months. Our team
              will review your goals and come back with a clear roadmap, timelines and transparent
              pricing.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-md shadow-blue-500/10 backdrop-blur">
                <p className="text-sm font-semibold text-blue-700">Strategy + Execution</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get a single partner for both digital marketing and technology so nothing falls
                  between teams.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100/70 bg-gradient-to-br from-blue-600 via-violet-500 to-orange-400 p-5 text-white shadow-lg shadow-blue-500/30">
                <p className="text-sm font-semibold">Perfect for MSMEs & Startups</p>
                <p className="mt-2 text-sm text-white/90">
                  Flexible engagement models whether you&apos;re validating an idea or scaling an
                  existing business.
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="w-full max-w-xl mx-auto lg:ml-auto">
            <div className="rounded-2xl border border-blue-100/70 bg-card/95 p-6 shadow-lg shadow-blue-500/10 backdrop-blur-md md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
