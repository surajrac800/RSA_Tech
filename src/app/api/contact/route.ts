import { NextResponse } from "next/server";
import type { FormAttribution } from "@/lib/attribution";
import { utmSubjectTag } from "@/lib/attribution";
import {
  buildJsonFormEmailBody,
  sendFormNotificationEmail,
} from "@/lib/send-form-email";

const NOTIFY_PHONE = "+919267917752";

async function notifyPhone(payload: unknown) {
  try {
    const webhookUrl = process.env.NOTIFY_PHONE_WEBHOOK_URL;
    if (!webhookUrl) return;

    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: NOTIFY_PHONE,
        type: "form_submission",
        payload,
      }),
    });
  } catch {
    // Silently ignore notification failures so the user request still succeeds
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const attr = body.attribution as FormAttribution | undefined;
    const subject =
      String(body.subject ?? "RSA Tech — Website form submission") +
      utmSubjectTag(attr);
    const text = buildJsonFormEmailBody(
      "RSA Tech — Website form ( /api/contact )",
      body
    );

    const emailResult = await sendFormNotificationEmail({ subject, text });

    await notifyPhone({
      form: "contact",
      data: body,
      emailQueued: emailResult.ok,
    });

    return NextResponse.json({ success: true, emailSent: emailResult.ok });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
