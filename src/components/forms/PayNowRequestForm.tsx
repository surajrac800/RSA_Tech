"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

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
        body: JSON.stringify({
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
        }),
      });
      setSuccess(true);
      reset();
    } catch {
      // Even if the request fails, we don't expose bank details
    }
  }

  if (success) {
    return (
      <div className="mt-3 space-y-2 rounded-xl border border-blue-200 bg-white/95 p-4 text-xs text-blue-900 md:text-sm">
        <p className="text-sm font-semibold">Thank you! Here are the bank details.</p>
        <p>
          Please use the following account for your bank transfer or card gateway payment, and
          share the payment screenshot with our team on WhatsApp for confirmation.
        </p>
        <div className="mt-2 space-y-1">
          <p>
            <span className="font-semibold">A/C Holder Name:</span> Suraj Kumar Chaurasiya
          </p>
          <p>
            <span className="font-semibold">A/C No.:</span> 083101536967
          </p>
          <p>
            <span className="font-semibold">IFSC Code:</span> ICIC0000831
          </p>
          <p>
            <span className="font-semibold">Bank &amp; Branch:</span> ICICI Bank, Laxmi Nagar, New
            Delhi
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-3 grid gap-3 text-xs md:grid-cols-2 md:text-sm"
    >
      <div className="space-y-1 md:col-span-1">
        <label htmlFor="pay-name" className="font-medium">
          Full name *
        </label>
        <Input
          id="pay-name"
          {...register("name", { required: "Please enter your name" })}
          className={cn("h-9", errors.name && "border-destructive")}
        />
        {errors.name && (
          <p className="text-[11px] text-destructive md:text-xs">{errors.name.message}</p>
        )}
      </div>
      <div className="space-y-1 md:col-span-1">
        <label htmlFor="pay-phone" className="font-medium">
          Phone *
        </label>
        <Input
          id="pay-phone"
          type="tel"
          {...register("phone", { required: "Please enter your phone number" })}
          className={cn("h-9", errors.phone && "border-destructive")}
        />
        {errors.phone && (
          <p className="text-[11px] text-destructive md:text-xs">{errors.phone.message}</p>
        )}
      </div>
      <div className="space-y-1 md:col-span-1">
        <label htmlFor="pay-email" className="font-medium">
          Email *
        </label>
        <Input
          id="pay-email"
          type="email"
          {...register("email", { required: "Please enter your email" })}
          className={cn("h-9", errors.email && "border-destructive")}
        />
        {errors.email && (
          <p className="text-[11px] text-destructive md:text-xs">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-1 md:col-span-1">
        <label htmlFor="pay-amount" className="font-medium">
          Approx. amount (optional)
        </label>
        <Input
          id="pay-amount"
          placeholder="e.g. ₹10,000"
          {...register("amount")}
          className="h-9"
        />
      </div>
      <div className="space-y-1 md:col-span-2">
        <label htmlFor="pay-notes" className="font-medium">
          Project / invoice reference (optional)
        </label>
        <Textarea
          id="pay-notes"
          rows={3}
          placeholder="Invoice number, project name or any note for our accounts team."
          {...register("notes")}
        />
      </div>
      <div className="md:col-span-2">
        <Button
          type="submit"
          size="sm"
          className="w-full rounded-full bg-blue-600 text-xs font-medium text-white hover:bg-blue-700 md:text-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request bank / card payment details"}
        </Button>
      </div>
    </form>
  );
}

