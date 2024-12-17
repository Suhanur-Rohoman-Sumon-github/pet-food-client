"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInostance";
import axios from "axios";

export const getALlProducts = async (queryParams: {
  page?: number;
  limit?: number;
  category?: string;
  minPrice?: number | "";
  maxPrice?: number | "";
  rating?: number | "";
  sort?: string | "";
  searchTerm?: string | "";
}) => {
  try {
    const { page, limit, category, minPrice, maxPrice, rating, sort,searchTerm } =
      queryParams;

    const query = new URLSearchParams();

    if (page) query.append("page", page.toString());
    if (limit) query.append("limit", limit.toString());
    if (category) query.append("category", category);
    if (minPrice !== "") query.append("minPrice", minPrice!.toString());
    if (maxPrice !== "") query.append("maxPrice", maxPrice!.toString());
    if (rating) query.append("rating", rating.toString());
    if (sort) query.append("sort", sort);
    if (searchTerm) query.append("searchTerm", searchTerm);

    const { data } = await axiosInstance.get(`/products?${query?.toString()}`);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getSIngleProducts = async (productId:string) => {
  const { data } = await axiosInstance.get(`/products/${productId}`);
  return data.data; 
};
export const getRelatedProducts = async (categoryId:string) => {
  const { data } = await axiosInstance.get(`/products/related-products/${categoryId}`);
  return data.data; 
};
export const getCateGory = async () => {
 try {
   const { data } = await axiosInstance.get(`/products/categories/category`);
  return data.data; 
 } catch (error) {
   if (axios.isAxiosError(error)) {
    console.log(error.response);
      throw new Error(error.response?.data.message)}
 }
};
export const createCategory = async (categoryData:any) => {
  const { data } = await axiosInstance.post(`/products/category`,categoryData);
  return data.data; 
};
export const addReview = async (reviewData:any ,productId:string ) => {
  const { data } = await axiosInstance.post(`/products/add-review/${productId}`,reviewData);
  return data.data; 
};
export const deleteCategory = async (categoryId:any  ) => {
 try {
  const { data } = await axiosInstance.delete(`/products/categories/category/${categoryId}`);
  return data.data; 
 } catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(error.response);
      throw new Error(error.response?.data.message)}
 }
};
export const addRecentProduct = async (productId:string ,userId : string  ) => {
  console.log(`Making request to /products/add-recent-product/${productId}/${userId}`);
 try {
  const { data } = await axiosInstance.post(`/products/add-products/add-recent-product/${productId}/${userId}`);
  return data.data; 
 } catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(error?.response?.data);
      throw new Error(error.response?.data.message)}
 }
};
export const getRecentPRoduct = async (userId : string  ) => {
  
 try {
  const { data } = await axiosInstance.get(`/products/get-product/get-recent-product/${userId}`);
  return data.data; 
 } catch (error) {
  if (axios.isAxiosError(error)) {
    console.log(error?.response?.data);
      throw new Error(error.response?.data.message)}
 }
};


export const createProduct = async (productData: any) => {
 try {
     const { data } = await axiosInstance.post('/products', productData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      }});
  return data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
      throw new Error(error.response?.data.message)}
  }
};