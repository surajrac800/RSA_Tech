"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { refreshAttributionFromUrl } from "@/lib/attribution";

/** Merges URL tracking params into sessionStorage on each navigation */
export function AttributionCapture() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    refreshAttributionFromUrl();
  }, [pathname, searchParams]);

  return null;
}
