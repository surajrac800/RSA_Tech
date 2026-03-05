import { z } from "zod";

export const INTERNSHIP_PROGRAMS = [
  "WordPress Developer",
  "Shopify Developer",
  "Frontend Developer",
  "Backend Developer",
  "App Developer",
  "Digital Marketing (Meta Ads, Google Ads & more)",
] as const;

export const internshipSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid mobile number"),
  email: z.string().email("Invalid email address"),
  collegeName: z.string().min(2, "Please enter your college name"),
  graduationField: z.string().min(2, "Please mention your graduation field"),
  passingYear: z
    .string()
    .regex(/^[0-9]{4}$/, "Please enter a valid passing year (e.g. 2026)"),
  experience: z.string().min(1, "Please mention your experience (or Fresher)"),
  program: z.enum(INTERNSHIP_PROGRAMS, {
    message: "Please select an internship program",
  }),
  message: z
    .string()
    .min(20, "Please share a short introduction (at least 20 characters)"),
});

export type InternshipFormData = z.infer<typeof internshipSchema>;

