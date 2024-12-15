import { z } from "zod";

// Define the user validation schema
export const userValidationSchema = z.object({
  full_name: z
    .string()
    .min(1, "Full Name is required")
    .max(100, "Full Name cannot exceed 100 characters"),

  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required")
    .max(100, "Email cannot exceed 100 characters"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),

  address: z
    .string()
    .min(1, "Address is required")
    .max(200, "Address cannot exceed 200 characters"),

  city: z
    .string()
    .min(1, "City is required")
    .max(100, "City cannot exceed 100 characters"),

  postal_code: z
    .string()
    .min(5, "Postal Code must be at least 5 characters")
    .max(10, "Postal Code cannot exceed 10 characters"),

  country: z
    .string()
    .min(1, "Country is required")
    .max(100, "Country cannot exceed 100 characters"),
});
