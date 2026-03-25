const STORAGE_KEY = "rsa_form_attribution";

/** Standard marketing / ad click parameters we persist for form submissions */
export const TRACKING_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "fbclid",
  "msclkid",
] as const;

export type FormAttribution = Partial<
  Record<(typeof TRACKING_PARAM_KEYS)[number], string>
>;

function readStored(): FormAttribution {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as FormAttribution;
  } catch {
    return {};
  }
}

function writeStored(next: FormAttribution) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* private mode / quota */
  }
}

/** Call on each navigation: merges new URL params into session, keeps first-touch UTMs unless overridden */
export function refreshAttributionFromUrl(): FormAttribution {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const fromUrl: FormAttribution = {};
  for (const key of TRACKING_PARAM_KEYS) {
    const val = params.get(key);
    if (val) fromUrl[key] = val;
  }
  if (Object.keys(fromUrl).length > 0) {
    const merged = { ...readStored(), ...fromUrl };
    writeStored(merged);
    return merged;
  }
  return readStored();
}

/** Use when submitting a form (includes session-stored UTMs from landing URL) */
export function getFormAttributionPayload(): FormAttribution {
  return refreshAttributionFromUrl();
}

export function formatAttributionForEmail(a: FormAttribution | undefined): string {
  if (!a || Object.keys(a).length === 0) {
    return "No UTM / click IDs captured (direct visit or no tracking params in landing URL).";
  }
  return TRACKING_PARAM_KEYS.filter((k) => a[k])
    .map((k) => `${k}=${a[k]}`)
    .join("\n");
}

/** Short tag for email subject lines, e.g. [google / cpc] */
export function utmSubjectTag(a: FormAttribution | undefined): string {
  if (!a?.utm_source && !a?.utm_medium) return "";
  const src = a.utm_source ?? "unknown";
  const med = a.utm_medium ? ` / ${a.utm_medium}` : "";
  return ` [${src}${med}]`;
}
