"use client";

import { getFormAttributionPayload } from "@/lib/attribution";

/** Attach UTM / click IDs + current page URL to JSON form payloads */
export function withFormTracking<T extends Record<string, unknown>>(body: T) {
  return {
    ...body,
    attribution: getFormAttributionPayload(),
    submittedFrom:
      typeof window !== "undefined" ? window.location.href : "",
  };
}
