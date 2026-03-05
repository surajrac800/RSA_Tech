"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  b2bFormSchema,
  type B2BFormData,
  B2B_PARTNERSHIP_TYPES,
} from "@/lib/validations/b2b";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Send, CheckCircle2 } from "lucide-react";

export function B2BForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<B2BFormData>({
    resolver: zodResolver(b2bFormSchema),
  });

  function sendToWhatsApp(data: B2BFormData) {
    if (typeof window === "undefined") return;
    const phone = "919267917752";
    const partnershipLabel =
      B2B_PARTNERSHIP_TYPES.find((p) => p.value === data.partnershipType)
        ?.label ?? data.partnershipType;
    const textLines = [
      "New B2B partnership enquiry:",
      `Company: ${data.companyName}`,
      `Contact name: ${data.contactName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Partnership type: ${partnershipLabel}`,
      "",
      "Volume & requirements:",
      data.requirements,
      data.message ? `Additional message:\n${data.message}` : "",
    ].filter(Boolean);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      textLines.join("\n")
    )}`;
    window.open(url, "_blank");
  }

  async function onSubmit(data: B2BFormData) {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "B2B Partnership Enquiry",
          name: data.contactName,
          email: data.email,
          message: [
            `Company: ${data.companyName}`,
            `Phone: ${data.phone}`,
            `Partnership type: ${B2B_PARTNERSHIP_TYPES.find((p) => p.value === data.partnershipType)?.label ?? data.partnershipType}`,
            ``,
            "Requirements:",
            data.requirements,
            data.message ? `\nAdditional message:\n${data.message}` : "",
          ].join("\n"),
        }),
      });
      if (res.ok) {
        setSuccess(true);
        reset();
        sendToWhatsApp(data);
      }
    } catch {
      // handle error
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-blue-200 bg-blue-50/90 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <p className="mt-4 text-lg font-semibold text-blue-900">Request received</p>
        <p className="mt-2 text-sm text-blue-800">
          We&apos;ll review your details and send a custom B2B proposal within 1–2 working days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-blue-100/80 bg-white p-6 shadow-lg shadow-blue-500/10 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="companyName" className="text-sm font-medium text-foreground">
            Company / Agency name *
          </label>
          <Input
            id="companyName"
            placeholder="Your company or agency name"
            {...register("companyName")}
            className={cn("h-11", errors.companyName && "border-destructive")}
          />
          {errors.companyName && (
            <p className="text-sm text-destructive">{errors.companyName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="contactName" className="text-sm font-medium text-foreground">
            Your name *
          </label>
          <Input
            id="contactName"
            placeholder="Full name"
            {...register("contactName")}
            className={cn("h-11", errors.contactName && "border-destructive")}
          />
          {errors.contactName && (
            <p className="text-sm text-destructive">{errors.contactName.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Work email *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register("email")}
            className={cn("h-11", errors.email && "border-destructive")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone *
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="10-digit number"
            {...register("phone")}
            className={cn("h-11", errors.phone && "border-destructive")}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="partnershipType" className="text-sm font-medium text-foreground">
          Partnership type *
        </label>
        <select
          id="partnershipType"
          {...register("partnershipType")}
          className={cn(
            "flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            errors.partnershipType && "border-destructive"
          )}
        >
          <option value="">Select partnership type</option>
          {B2B_PARTNERSHIP_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.partnershipType && (
          <p className="text-sm text-destructive">{errors.partnershipType.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="requirements" className="text-sm font-medium text-foreground">
          Volume & requirements *
        </label>
        <Textarea
          id="requirements"
          rows={4}
          placeholder="e.g. Number of projects per month, type of work (websites, ads, apps), timeline, and any specific needs..."
          {...register("requirements")}
          className={cn(errors.requirements && "border-destructive")}
        />
        {errors.requirements && (
          <p className="text-sm text-destructive">{errors.requirements.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
          Additional message (optional)
        </label>
        <Textarea
          id="message"
          rows={3}
          placeholder="Anything else you'd like us to know..."
          {...register("message")}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full gap-2 rsa-gradient-bg text-white shadow-md hover:opacity-95"
        disabled={loading}
      >
        <Send className="h-4 w-4" />
        {loading ? "Sending..." : "Request B2B proposal"}
      </Button>
    </form>
  );
}
