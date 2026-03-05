"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  INTERNSHIP_PROGRAMS,
  internshipSchema,
  type InternshipFormData,
} from "@/lib/validations/internship";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function InternshipForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InternshipFormData>({
    resolver: zodResolver(internshipSchema),
  });

  function sendToWhatsApp(data: InternshipFormData) {
    if (typeof window === "undefined") return;
    const phone = "919267917752";
    const textLines = [
      "New internship application:",
      `Full name: ${data.fullName}`,
      `Mobile: ${data.phone}`,
      `Email: ${data.email}`,
      `College: ${data.collegeName}`,
      `Graduation field: ${data.graduationField}`,
      `Passing year: ${data.passingYear}`,
      `Experience: ${data.experience}`,
      `Program: ${data.program}`,
      "",
      "Student introduction:",
      data.message,
    ];
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      textLines.join("\n")
    )}`;
    window.open(url, "_blank");
  }

  async function onSubmit(data: InternshipFormData) {
    setLoading(true);
    setSuccess(false);
    try {
      const subject = `Internship application: ${data.program}`;
      const messageLines = [
        `Full name: ${data.fullName}`,
        `Mobile: ${data.phone}`,
        `Email: ${data.email}`,
        `College: ${data.collegeName}`,
        `Graduation field: ${data.graduationField}`,
        `Passing year: ${data.passingYear}`,
        `Experience: ${data.experience}`,
        `Program applying for: ${data.program}`,
        "",
        "Student introduction:",
        data.message,
      ];

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          subject,
          message: messageLines.join("\n"),
        }),
      });

      if (res.ok) {
        setSuccess(true);
        reset();
        sendToWhatsApp(data);
      }
    } catch {
      // Optionally handle error UI here
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50/90 p-8 text-center">
        <p className="text-lg font-semibold text-green-900">
          Application submitted!
        </p>
        <p className="mt-2 text-sm text-green-800">
          Thank you for applying. Our team will review your details and get back
          to you if you are shortlisted.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium">
            Full Name *
          </label>
          <Input
            id="fullName"
            placeholder="Your full name"
            {...register("fullName")}
            className={cn(errors.fullName && "border-destructive")}
          />
          {errors.fullName && (
            <p className="text-sm text-destructive">{errors.fullName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Mobile Number *
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="10-digit mobile number"
            {...register("phone")}
            className={cn(errors.phone && "border-destructive")}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address *
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className={cn(errors.email && "border-destructive")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="collegeName" className="text-sm font-medium">
            College Name *
          </label>
          <Input
            id="collegeName"
            placeholder="Your college / institute"
            {...register("collegeName")}
            className={cn(errors.collegeName && "border-destructive")}
          />
          {errors.collegeName && (
            <p className="text-sm text-destructive">
              {errors.collegeName.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="graduationField" className="text-sm font-medium">
            Graduation Field *
          </label>
          <Input
            id="graduationField"
            placeholder="e.g. B.Tech CSE, BCA, BBA..."
            {...register("graduationField")}
            className={cn(errors.graduationField && "border-destructive")}
          />
          {errors.graduationField && (
            <p className="text-sm text-destructive">
              {errors.graduationField.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="passingYear" className="text-sm font-medium">
            Passing Year *
          </label>
          <Input
            id="passingYear"
            placeholder="e.g. 2026"
            {...register("passingYear")}
            className={cn(errors.passingYear && "border-destructive")}
          />
          {errors.passingYear && (
            <p className="text-sm text-destructive">
              {errors.passingYear.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="experience" className="text-sm font-medium">
            Experience *
          </label>
          <Input
            id="experience"
            placeholder="e.g. 6 months internship, or Fresher"
            {...register("experience")}
            className={cn(errors.experience && "border-destructive")}
          />
          {errors.experience && (
            <p className="text-sm text-destructive">
              {errors.experience.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="program" className="text-sm font-medium">
          Program Enrolling In *
        </label>
        <select
          id="program"
          {...register("program")}
          suppressHydrationWarning
          className={cn(
            "flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            errors.program && "border-destructive"
          )}
        >
          <option value="">Select internship program</option>
          {INTERNSHIP_PROGRAMS.map((program) => (
            <option key={program} value={program}>
              {program}
            </option>
          ))}
        </select>
        {errors.program && (
          <p className="text-sm text-destructive">{errors.program.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Short introduction &amp; goals *
        </label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Tell us about your skills, projects (if any) and what you want to learn during this internship."
          {...register("message")}
          className={cn(errors.message && "border-destructive")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full rsa-gradient-bg text-white"
        size="lg"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit internship application"}
      </Button>
    </form>
  );
}

