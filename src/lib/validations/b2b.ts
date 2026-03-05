import { z } from "zod";

export const b2bFormSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  partnershipType: z.string().min(1, "Please select a partnership type"),
  requirements: z.string().min(20, "Please describe your needs (at least 20 characters)"),
  message: z.string().optional(),
});

export type B2BFormData = z.infer<typeof b2bFormSchema>;

export const B2B_PARTNERSHIP_TYPES = [
  { value: "agency", label: "Agency & reseller program" },
  { value: "bulk-websites", label: "Bulk websites & landing pages" },
  { value: "dedicated-capacity", label: "Dedicated capacity" },
  { value: "enterprise", label: "Enterprise audits & strategy" },
  { value: "other", label: "Other / Not sure yet" },
] as const;
