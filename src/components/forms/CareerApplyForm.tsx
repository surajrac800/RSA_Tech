"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  careerApplySchema,
  type CareerApplyFormData,
  CAREER_POSITIONS,
} from "@/lib/validations/career";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Upload, FileText } from "lucide-react";
import { getFormAttributionPayload } from "@/lib/attribution";

const MAX_RESUME_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_RESUME_TYPES = "application/pdf,.doc,.docx";

export function CareerApplyForm({ defaultPosition }: { defaultPosition?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [resumeFileName, setResumeFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerApplyFormData>({
    resolver: zodResolver(careerApplySchema),
    defaultValues: { position: defaultPosition ?? "" },
  });

  async function onSubmit(data: CareerApplyFormData) {
    setResumeError(null);
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      setResumeError("Please upload your resume (PDF or DOC).");
      return;
    }
    if (file.size > MAX_RESUME_SIZE) {
      setResumeError("Resume must be under 5MB.");
      return;
    }
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) {
      setResumeError("Please upload a PDF or Word document.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", data.position);
      formData.append("experience", data.experience);
      if (data.currentCompany) formData.append("currentCompany", data.currentCompany);
      if (data.linkedIn) formData.append("linkedIn", data.linkedIn);
      formData.append("coverMessage", data.coverMessage);
      formData.append("resume", file);
      formData.append(
        "attribution",
        JSON.stringify(getFormAttributionPayload())
      );
      formData.append(
        "submittedFrom",
        typeof window !== "undefined" ? window.location.href : ""
      );

      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        reset();
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        const json = await res.json().catch(() => ({}));
        setResumeError(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setResumeError("Failed to submit. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-blue-200 bg-blue-50/90 p-8 text-center">
        <p className="text-lg font-semibold text-blue-800">Application submitted!</p>
        <p className="mt-2 text-sm text-blue-700">
          Thank you for applying. We&apos;ll review your profile and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
          <Input
            id="name"
            placeholder="Your full name"
            {...register("name")}
            className={cn(errors.name && "border-destructive")}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email *</label>
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
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">Phone *</label>
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

      <div className="space-y-2">
        <label htmlFor="position" className="text-sm font-medium">Position applying for *</label>
        <select
          id="position"
          {...register("position")}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            errors.position && "border-destructive"
          )}
        >
          <option value="">Select position</option>
          {CAREER_POSITIONS.filter((p) => p.priority).map((p) => (
            <option key={p.value} value={p.value}>
              {p.label} (Top priority)
            </option>
          ))}
          {CAREER_POSITIONS.filter((p) => !p.priority).map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
        {errors.position && (
          <p className="text-sm text-destructive">{errors.position.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="experience" className="text-sm font-medium">Experience *</label>
        <Input
          id="experience"
          placeholder="e.g. 2 years in digital marketing, or Fresher"
          {...register("experience")}
          className={cn(errors.experience && "border-destructive")}
        />
        {errors.experience && (
          <p className="text-sm text-destructive">{errors.experience.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="currentCompany" className="text-sm font-medium">Current / Last company (optional)</label>
        <Input
          id="currentCompany"
          placeholder="Company name"
          {...register("currentCompany")}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="linkedIn" className="text-sm font-medium">LinkedIn profile (optional)</label>
        <Input
          id="linkedIn"
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          {...register("linkedIn")}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Resume / CV * (PDF or Word, max 5MB)</label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed p-4 transition-colors",
            resumeError ? "border-destructive bg-destructive/5" : "border-blue-200 bg-blue-50/50 hover:bg-blue-50"
          )}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED_RESUME_TYPES}
            className="hidden"
            onChange={() => setResumeError(null)}
          />
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
            <Upload className="h-5 w-5" />
          </div>
          <div className="flex-1 text-sm">
            <span className="font-medium text-foreground">
              {resumeFileName || "Click to upload resume"}
            </span>
            <p className="text-xs text-muted-foreground">PDF or .doc / .docx</p>
          </div>
          <FileText className="h-5 w-5 text-muted-foreground" />
        </div>
        {resumeError && (
          <p className="text-sm text-destructive">{resumeError}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="coverMessage" className="text-sm font-medium">Cover message / Why do you want to join? *</label>
        <Textarea
          id="coverMessage"
          rows={4}
          placeholder="Brief intro, relevant experience and why you want to join us (min 20 characters)"
          {...register("coverMessage")}
          className={cn(errors.coverMessage && "border-destructive")}
        />
        {errors.coverMessage && (
          <p className="text-sm text-destructive">{errors.coverMessage.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full rsa-gradient-bg text-white"
        size="lg"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit application"}
      </Button>
    </form>
  );
}
