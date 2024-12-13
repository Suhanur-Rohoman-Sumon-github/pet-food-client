import { z } from "zod";

const adminValidationSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  contactNo: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number cannot exceed 15 digits"),
  designation: z.string().nonempty("Designation is required"),
  location: z.string().nonempty("Location is required"),
});

export default adminValidationSchema;
