import { z } from "zod";

const shopValidationSchema = z.object({
  name: z
    .string()
    .min(2, "Shop name must be at least 2 characters long")
    .max(50, "Shop name cannot exceed 50 characters"),
  location: z.string().optional(),
});

export default shopValidationSchema;
