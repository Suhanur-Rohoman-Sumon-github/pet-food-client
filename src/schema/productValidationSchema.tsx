import { z } from "zod";

const productValidationSchema = z.object({
  name: z
    .string()
    .min(3, "Product name must be at least 3 characters long")
    .max(100, "Product name must be less than 100 characters"),
  price: z.preprocess(
    (val) => (typeof val === "string" ? parseFloat(val) : val),
    z
      .number({ invalid_type_error: "Price must be a number" })
      .positive("Price must be a positive number")
  ),
  stock_quantity: z.preprocess(
    (val) => (typeof val === "string" ? parseInt(val, 10) : val),
    z
      .number({ invalid_type_error: "Stock quantity must be a number" })
      .int("Stock quantity must be an integer")
      .min(0, "Stock quantity cannot be negative")
  ),
  discount_price: z
    .preprocess(
      (val) => (typeof val === "string" ? parseFloat(val) : val),
      z
        .number({ invalid_type_error: "Discount price must be a number" })
        .nonnegative("Discount price cannot be negative")
    )
    .optional(),
  category_id: z
    .string()
    .min(1, "Category ID is required")
    .regex(/^[a-zA-Z0-9_-]+$/, "Category ID must be alphanumeric"),
  shop_id: z
    .string()
    .min(1, "Shop ID is required")
    .regex(/^[a-zA-Z0-9_-]+$/, "Shop ID must be alphanumeric"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(1000, "Description must be less than 1000 characters"),
});

export default productValidationSchema;
