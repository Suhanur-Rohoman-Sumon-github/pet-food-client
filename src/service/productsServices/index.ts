"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInostance";

export const getALlProducts = async (queryParams: {
  page?: number;
  limit?: number;
  category?: string;
  minPrice?: number | "";
  maxPrice?: number | "";
  rating?: number | "";
  sort?: string | "";
}) => {
  try {
    const { page, limit, category, minPrice, maxPrice, rating, sort } =
      queryParams;

    // Build query string
    const query = new URLSearchParams();

    if (page) query.append("page", page.toString());
    if (limit) query.append("limit", limit.toString());
    if (category) query.append("category", category);
    if (minPrice !== "") query.append("minPrice", minPrice!.toString());
    if (maxPrice !== "") query.append("maxPrice", maxPrice!.toString());
    if (rating) query.append("rating", rating.toString());
    if (sort) query.append("sort", sort);

    const { data } = await axiosInstance.get(`/products?${query.toString()}`);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
