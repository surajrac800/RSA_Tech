"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "@/lib/validations/quote";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface QuoteFormProps {
  serviceOptions: { value: string; label: string }[];
  onSuccess?: () => void;
}

export function QuoteForm({ serviceOptions, onSuccess }: QuoteFormProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  function sendToWhatsApp(data: QuoteFormData) {
    if (typeof window === "undefined") return;
    const phone = "919267917752";
    const textLines = [
      "New quote enquiry:",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service: ${data.service}`,
    ];
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      textLines.join("\n")
    )}`;
    window.open(url, "_blank");
  }

  async function onSubmit(data: QuoteFormData) {
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          subject: `Quote request: ${data.service}`,
          message: `Service: ${data.service}`,
        }),
      });
      sendToWhatsApp(data);
      onSuccess?.();
    } catch {
      // Handle error
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Name"
          {...register("name")}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Input
          placeholder="Contact Number"
          type="tel"
          {...register("phone")}
          className={errors.phone ? "border-destructive" : ""}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <Input
          placeholder="Email ID"
          type="email"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div className="relative">
        <select
          suppressHydrationWarning
          {...register("service")}
          className={cn(
            "flex h-10 w-full appearance-none rounded-lg border border-input bg-background px-3 py-2 pr-9 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm",
            errors.service && "border-destructive"
          )}
        >
          <option value="">Service Looking For</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
        {errors.service && (
          <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}
