import { z } from "zod";

export const careerApplySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please mention your experience"),
  currentCompany: z.string().optional(),
  linkedIn: z.string().optional(),
  coverMessage: z.string().min(20, "Please write a short intro (at least 20 characters)"),
});

export type CareerApplyFormData = z.infer<typeof careerApplySchema>;

type CareerPosition = {
  value: string;
  label: string;
  priority?: boolean;
};

export const CAREER_POSITIONS: CareerPosition[] = [
  { value: "bda", label: "Business Development Associate (BDA)", priority: true },
  { value: "sales-manager", label: "Sales Manager", priority: true },
  { value: "digital-marketing-specialist", label: "Digital Marketing Specialist" },
  { value: "web-developer", label: "Web / Full‑stack Developer" },
  { value: "mobile-app-developer", label: "Mobile App Developer" },
  { value: "graphic-designer", label: "Graphic Designer / Creative" },
  { value: "other", label: "Other" },
];
