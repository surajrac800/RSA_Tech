"use client";

import Image from "next/image";
import leaderPhoto from "@/assets/images/leader.png";

export function ManagingDirectorSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 md:py-16">
      <div className="container">
        <div className="grid gap-10 rounded-3xl border border-blue-100/80 bg-white/95 p-6 shadow-xl shadow-blue-500/10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] md:p-10">
          {/* Left – MD narrative */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              Managing Director
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              A leadership lens that connects
              <span className="block rsa-gradient-text">
                strategy, technology and execution.
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Suraj Kr. Chaurasiya leads RSA Tech Softwares with an execution-focused approach.
              He works closely with clients and internal teams to ensure that every website,
              application and campaign is tied to clear business outcomes—not just aesthetics.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Under his direction, RSA Tech Softwares operates as an integrated studio where
              engineering, UI/UX, content and performance marketing stay aligned. This helps
              MSMEs and startups move from scattered tools to a single, dependable digital
              ecosystem that supports growth every day.
            </p>
          </div>

          {/* Right – MD profile card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-blue-100/80 bg-gradient-to-b from-blue-700 via-blue-700 to-blue-900 p-6 text-center text-white shadow-[0_18px_40px_rgba(15,23,42,0.45)] sm:max-w-sm">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-white/80 bg-blue-50 shadow-lg sm:h-36 sm:w-36">
                <Image
                  src={leaderPhoto}
                  alt="Suraj Kr. Chaurasiya"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="text-base font-semibold md:text-lg">
                  Suraj Kr. Chaurasiya
                </p>
                <p className="text-xs font-medium text-blue-100 md:text-sm">
                  Managing Director, RSA Tech Softwares
                </p>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-blue-100/90 sm:text-xs">
                Working hands-on with projects, Suraj helps translate business requirements
                into clear roadmaps, ensuring that technology decisions support long-term
                scalability and brand trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


