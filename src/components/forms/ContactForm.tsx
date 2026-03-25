"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { services } from "@/config/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { withFormTracking } from "@/lib/form-tracking";

const baseDefaults: ContactFormData = {
  name: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const serviceOptions = useMemo(
    () => [
      { value: "general", label: "General enquiry" },
      ...services.map((s) => ({ value: s.id, label: s.title })),
    ],
    []
  );

  const serviceLabel = (value: string) =>
    serviceOptions.find((o) => o.value === value)?.label ?? value;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: baseDefaults,
  });

  function sendToWhatsApp(data: ContactFormData) {
    if (typeof window === "undefined") return;
    const phone = "919267917752";
    const textLines = [
      "New contact form submission:",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Service: ${serviceLabel(data.service)}`,
      "",
      "Message:",
      data.message,
    ].filter(Boolean);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      textLines.join("\n")
    )}`;
    window.open(url, "_blank");
  }

  async function onSubmit(data: ContactFormData) {
    setLoading(true);
    setSuccess(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          withFormTracking({
            ...data,
            subject: `Contact: ${serviceLabel(data.service)}`,
          })
        ),
      });
      if (res.ok) {
        setSuccess(true);
        reset(baseDefaults);
        sendToWhatsApp(data);
      }
    } catch {
      // Handle error
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50/90 p-6 text-center text-neutral-800">
        <p className="font-semibold text-neutral-900">Thank you for your message!</p>
        <p className="marketing-body mt-2 text-neutral-600">
          We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Your Name"
          {...register("name")}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Input
          placeholder="Email"
          type="email"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Select
          options={serviceOptions}
          placeholder="Service you're interested in"
          {...register("service")}
          className={errors.service ? "border-destructive" : ""}
        />
        {errors.service && (
          <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>
        )}
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          rows={5}
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
