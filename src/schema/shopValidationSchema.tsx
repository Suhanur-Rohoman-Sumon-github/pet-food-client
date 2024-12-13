import { z } from "zod";

const shopValidationSchema = z.object({
  name: z
    .string()
    .min(2, "Shop name must be at least 2 characters long")
    .max(50, "Shop name cannot exceed 50 characters"),
  location: z.string().optional(),
  cover_photo: z.string().url("Cover photo must be a valid URL").optional(),
  profile_picture: z
    .string()
    .url("Profile picture must be a valid URL")
    .optional(),
  vendorId: z
    .string()
    .min(1, "Vendor ID is required")
    .uuid("Vendor ID must be a valid UUID"),
  ratings: z
    .number()
    .int("Ratings must be an integer")
    .min(0, "Ratings cannot be negative")
    .max(5, "Ratings cannot exceed 5"),
  follower: z
    .number()
    .int("Followers must be an integer")
    .min(0, "Followers cannot be negative"),
});

export default shopValidationSchema;
