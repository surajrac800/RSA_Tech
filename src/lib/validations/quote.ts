import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
