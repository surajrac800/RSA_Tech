import { ContactForm } from "@/components/forms/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="home-section-py relative bg-white">
      <div className="container relative">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
          {/* Left: content / “image” area */}
          <div className="text-center lg:text-left">
            <p className="marketing-eyebrow">Get In Touch</p>
            <h2 className="marketing-heading mt-3">Let&apos;s Talk About Your Next Project</h2>
            <p className="marketing-body mt-4 mx-auto max-w-xl lg:mx-0">
              Tell us where you are today and where you want to be in the next 6–12 months. Our team
              will review your goals and come back with a clear roadmap, timelines and transparent
              pricing.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-amber-400/70 bg-white p-5 shadow-md">
                <p className="marketing-subheading text-[#F76902]">Strategy + Execution</p>
                <p className="marketing-body mt-2">
                  Get a single partner for both digital marketing and technology so nothing falls
                  between teams.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-[#F76902] bg-amber-50/80 p-5 shadow-md">
                <p className="marketing-subheading">Perfect for MSMEs &amp; Startups</p>
                <p className="marketing-body mt-2">
                  Flexible engagement models whether you&apos;re validating an idea or scaling an
                  existing business.
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="w-full max-w-xl mx-auto lg:ml-auto">
            <div className="rounded-2xl border-2 border-amber-400/70 bg-white p-6 shadow-lg md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
