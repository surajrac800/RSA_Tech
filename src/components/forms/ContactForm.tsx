"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  function sendToWhatsApp(data: ContactFormData) {
    if (typeof window === "undefined") return;
    const phone = "919267917752";
    const textLines = [
      "New contact form submission:",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.subject ? `Subject: ${data.subject}` : "",
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
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        reset();
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
      <div className="rounded-lg bg-blue-50 p-6 text-center text-blue-700">
        <p className="font-medium">Thank you for your message!</p>
        <p className="mt-1 text-sm">We&apos;ll get back to you soon.</p>
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
        <Input
          placeholder="Subject (optional)"
          {...register("subject")}
        />
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
