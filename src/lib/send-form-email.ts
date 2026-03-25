import {
  formatAttributionForEmail,
  type FormAttribution,
} from "@/lib/attribution";
import { siteConfig } from "@/config/site";

export async function sendFormNotificationEmail(options: {
  subject: string;
  text: string;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to =
    process.env.FORM_RECIPIENT_EMAIL ?? siteConfig.formsNotifyEmail;
  const from =
    process.env.RESEND_FROM_EMAIL ?? "RSA Tech Forms <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn(
      "[forms] RESEND_API_KEY missing — email not sent. Set RESEND_API_KEY + RESEND_FROM_EMAIL (verified sender). Recipient:",
      to
    );
    console.warn("[forms] —— draft ——\n", options.subject, "\n", options.text);
    return { ok: false, error: "RESEND_API_KEY not configured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: options.subject,
        text: options.text,
      }),
    });

    const json = (await res.json().catch(() => ({}))) as { message?: string };
    if (!res.ok) {
      return {
        ok: false,
        error: json.message ?? `${res.status} ${res.statusText}`,
      };
    }
    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Email request failed",
    };
  }
}

export function buildJsonFormEmailBody(
  label: string,
  body: Record<string, unknown>
): string {
  const attribution = body.attribution as FormAttribution | undefined;
  const submittedFrom = String(body.submittedFrom ?? "");
  const skip = new Set([
    "attribution",
    "submittedFrom",
  ]);
  const lines: string[] = [
    label,
    "",
    "--- Where this submission came from (tracking) ---",
    formatAttributionForEmail(attribution),
    `Submitted from URL: ${submittedFrom || "(not provided)"}`,
    "",
    "--- Form fields ---",
  ];
  for (const [k, v] of Object.entries(body)) {
    if (skip.has(k) || v === undefined) continue;
    lines.push(
      `${k}: ${typeof v === "object" ? JSON.stringify(v) : String(v)}`
    );
  }
  lines.push("", "--- Meta ---");
  lines.push(`capturedAt: ${new Date().toISOString()}`);
  return lines.join("\n");
}
