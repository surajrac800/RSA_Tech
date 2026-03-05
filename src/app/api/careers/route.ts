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
    // Ignore notification errors, main request should still succeed
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const experience = formData.get("experience") as string;
    const currentCompany = formData.get("currentCompany") as string | null;
    const linkedIn = formData.get("linkedIn") as string | null;
    const coverMessage = formData.get("coverMessage") as string;
    const resume = formData.get("resume") as File | null;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !position?.trim() || !experience?.trim() || !coverMessage?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!resume || resume.size === 0) {
      return NextResponse.json(
        { error: "Resume file is required." },
        { status: 400 }
      );
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (resume.size > maxSize) {
      return NextResponse.json(
        { error: "Resume must be under 5MB." },
        { status: 400 }
      );
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json(
        { error: "Resume must be PDF or Word (.doc, .docx)." },
        { status: 400 }
      );
    }

    // TODO: Integrate email service (e.g. Resend, Nodemailer) to send to RECIPIENT_EMAIL
    // Include: name, email, phone, position, experience, currentCompany, linkedIn, coverMessage
    // Attach the resume file (resume.arrayBuffer() or resume.stream()) to the email.

    // Notify phone webhook with key details (without sending the file)
    await notifyPhone({
      form: "careers",
      data: {
        name,
        email,
        phone,
        position,
        experience,
        currentCompany,
        linkedIn,
        coverMessage,
      },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit application." },
      { status: 500 }
    );
  }
}
