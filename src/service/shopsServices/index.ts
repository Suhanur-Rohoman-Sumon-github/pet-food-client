"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInostance";
import axios from "axios";


// Fetch all shops with optional query parameters
export const getAllShops = async (queryParams: {
  page?: number;
  limit?: number;
  category?: string;
  location?: string;
  minRating?: number | "";
  maxRating?: number | "";
  sort?: string | "";
  searchTerm?: string | "";
}) => {
  try {
    const {
      page,
      limit,
      category,
      location,
      minRating,
      maxRating,
      sort,
      searchTerm,
    } = queryParams;

    const query = new URLSearchParams();

    if (page) query.append("page", page.toString());
    if (limit) query.append("limit", limit.toString());
    if (category) query.append("category", category);
    if (location) query.append("location", location);
    if (minRating !== "") query.append("minRating", minRating!.toString());
    if (maxRating !== "") query.append("maxRating", maxRating!.toString());
    if (sort) query.append("sort", sort);
    if (searchTerm) query.append("searchTerm", searchTerm);

    const { data } = await axiosInstance.get(`/shops?${query.toString()}`);
    return data;
  } catch (error: any) {
     if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message)}
  }
};

// Fetch a single shop by its ID
export const getSingleShop = async (shopId: string) => {
  try {
    const { data } = await axiosInstance.get(`/shops/${shopId}`);
    return data.data;
  } catch (error: any) {
     if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message)}
  }
};

// Create a new shop
export const createShop = async (shopData: any) => {
   console.log("Form data being sent:", shopData);
  try {
    const { data } = await axiosInstance.post("/shops", shopData);
    return data.data;
  } catch (error: any) {
     if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message)}
  }
    
};

// Fetch related shops by category or vendor
export const getMyShops = async (vendorId: string) => {
  try {
    const { data } = await axiosInstance.get(
      `/shops/${vendorId}`
    );
    return data.data;
  } catch (error: any) {
     if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message)}
  }
  
};
