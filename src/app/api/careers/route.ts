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
    const attributionRaw = formData.get("attribution") as string | null;
    const submittedFrom = formData.get("submittedFrom") as string | null;

    let attribution: Record<string, string> | undefined;
    try {
      attribution = attributionRaw ? JSON.parse(attributionRaw) : undefined;
    } catch {
      attribution = undefined;
    }

    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !position?.trim() ||
      !experience?.trim() ||
      !coverMessage?.trim()
    ) {
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

    const emailBody = buildJsonFormEmailBody(
      "RSA Tech — Careers application ( /api/careers )",
      {
        name,
        email,
        phone,
        position,
        experience,
        currentCompany: currentCompany ?? "",
        linkedIn: linkedIn ?? "",
        coverMessage,
        resumeFileName: resume.name,
        resumeSizeBytes: resume.size,
        resumeType: resume.type,
        note:
          "Resume file was uploaded with this request; attach from storage if you add file persistence.",
        attribution,
        submittedFrom: submittedFrom ?? "",
      }
    );

    const emailResult = await sendFormNotificationEmail({
      subject:
        `Careers application: ${position} — ${name}` +
        utmSubjectTag(attribution as FormAttribution | undefined),
      text: emailBody,
    });

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
      emailQueued: emailResult.ok,
    });

    return NextResponse.json({ success: true, emailSent: emailResult.ok });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit application." },
      { status: 500 }
    );
  }
}
