"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { withFormTracking } from "@/lib/form-tracking";

type PayNowRequestData = {
  name: string;
  email: string;
  phone: string;
  amount?: string;
  notes?: string;
};

export function PayNowRequestForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PayNowRequestData>();

  async function onSubmit(data: PayNowRequestData) {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          withFormTracking({
            subject: "Bank / card payment details request",
            name: data.name,
            email: data.email,
            message: [
              `Phone: ${data.phone}`,
              data.amount ? `Expected amount: ${data.amount}` : "",
              "",
              "Notes:",
              data.notes || "N/A",
            ]
              .filter(Boolean)
              .join("\n"),
          })
        ),
      });
      setSuccess(true);
      reset();
    } catch {
      // Request failed; user can retry — no sensitive data shown here
    }
  }

  if (success) {
    return (
      <div className="mt-4 rounded-2xl border-2 border-amber-400/60 bg-amber-50/50 p-5 text-sm text-neutral-700">
        <p className="flex items-start gap-2 font-semibold text-neutral-900">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F76902]" aria-hidden />
          Thank you — we&apos;ve received your request.
        </p>
        <p className="mt-2 text-base leading-relaxed">
          Our accounts team will contact you on the phone or email you shared with the next steps and
          official payment instructions.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 grid gap-4 text-sm md:grid-cols-2"
    >
      <div className="space-y-1.5 md:col-span-1">
        <label htmlFor="pay-name" className="text-sm font-medium text-neutral-800">
          Full name *
        </label>
        <Input
          id="pay-name"
          {...register("name", { required: "Please enter your name" })}
          className={cn("h-11 rounded-xl border-neutral-200", errors.name && "border-destructive")}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>
      <div className="space-y-1.5 md:col-span-1">
        <label htmlFor="pay-phone" className="text-sm font-medium text-neutral-800">
          Phone *
        </label>
        <Input
          id="pay-phone"
          type="tel"
          {...register("phone", { required: "Please enter your phone number" })}
          className={cn("h-11 rounded-xl border-neutral-200", errors.phone && "border-destructive")}
        />
        {errors.phone && (
          <p className="text-xs text-destructive">{errors.phone.message}</p>
        )}
      </div>
      <div className="space-y-1.5 md:col-span-1">
        <label htmlFor="pay-email" className="text-sm font-medium text-neutral-800">
          Email *
        </label>
        <Input
          id="pay-email"
          type="email"
          {...register("email", { required: "Please enter your email" })}
          className={cn("h-11 rounded-xl border-neutral-200", errors.email && "border-destructive")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-1.5 md:col-span-1">
        <label htmlFor="pay-amount" className="text-sm font-medium text-neutral-800">
          Approx. amount (optional)
        </label>
        <Input
          id="pay-amount"
          placeholder="e.g. ₹10,000"
          {...register("amount")}
          className="h-11 rounded-xl border-neutral-200"
        />
      </div>
      <div className="space-y-1.5 md:col-span-2">
        <label htmlFor="pay-notes" className="text-sm font-medium text-neutral-800">
          Project / invoice reference (optional)
        </label>
        <Textarea
          id="pay-notes"
          rows={3}
          placeholder="Invoice number, project name or any note for our accounts team."
          {...register("notes")}
          className="rounded-xl border-neutral-200"
        />
      </div>
      <div className="md:col-span-2">
        <Button
          type="submit"
          className="h-11 w-full rounded-[30px] bg-[#F76902] text-sm font-semibold text-white shadow-sm hover:bg-[#f9802b]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit request"}
        </Button>
      </div>
    </form>
  );
}
