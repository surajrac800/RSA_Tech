"use client";

import Image from "next/image";
import leaderPhoto from "@/assets/images/leader.png";

export function ManagingDirectorSection() {
  return (
    <section className="home-section-py relative bg-white">
      <div className="container">
        <div className="grid gap-10 rounded-3xl border-2 border-amber-400/70 bg-white p-6 shadow-xl md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] md:p-10">
          {/* Left – MD narrative */}
          <div>
            <p className="marketing-eyebrow">Managing Director</p>
            <h2 className="marketing-heading mt-3">
              A leadership lens that connects
              <span className="block rsa-gradient-text">
                strategy, technology and execution.
              </span>
            </h2>
            <p className="marketing-body mt-4">
              Suraj Kr. Chaurasiya leads RSA Tech Softwares with an execution-focused approach.
              He works closely with clients and internal teams to ensure that every website,
              application and campaign is tied to clear business outcomes—not just aesthetics.
            </p>
            <p className="marketing-body mt-3">
              Under his direction, RSA Tech Softwares operates as an integrated studio where
              engineering, UI/UX, content and performance marketing stay aligned. This helps
              MSMEs and startups move from scattered tools to a single, dependable digital
              ecosystem that supports growth every day.
            </p>
          </div>

          {/* Right – MD profile card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border-2 border-amber-400/70 bg-amber-50/50 p-6 text-center shadow-lg sm:max-w-sm">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-[#F76902] bg-white shadow-md sm:h-36 sm:w-36">
                <Image
                  src={leaderPhoto}
                  alt="Suraj Kr. Chaurasiya"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="marketing-subheading">Suraj Kr. Chaurasiya</p>
                <p className="marketing-body mt-1 text-sm font-medium text-[#F76902]">
                  Managing Director, RSA Tech Softwares
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


