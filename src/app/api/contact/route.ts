import { NextResponse } from "next/server";

const RECIPIENT_EMAIL = "support@rsatechsoftware.in";
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
    const body = await request.json();

    // TODO: Integrate email service (e.g. Resend, Nodemailer) to send to RECIPIENT_EMAIL

    // Send a copy of the submission to the configured phone webhook
    await notifyPhone({
      form: "contact",
      data: body,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
