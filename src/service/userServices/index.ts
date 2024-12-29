"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInostance";
import axios from "axios";

// Create Admin
export const createAdmin = async (payload: {
  name: string;
  email: string;
  password: string;
  location: string;
  designation: string;
  contactNo: string;
}) => {
  try {
    const { data } = await axiosInstance.post("/user/create-admin", payload);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Create Vendor
export const createVendor = async (payload: {
  name: string;
  email: string;
  password: string;
  businessName: string;
  contactNo: string;
}) => {
  try {
    const { data } = await axiosInstance.post("/user/create-vendor", payload);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Fetch All Users
export const getAllUsers = async (queryParams: {
  page?: number;
  limit?: number;
  role?: string;
  status?: string;
  searchTerm?: string;
}) => {
  try {
    const { page, limit, role, status, searchTerm } = queryParams;

    const query = new URLSearchParams();

    if (page) query.append("page", page.toString());
    if (limit) query.append("limit", limit.toString());
    if (role) query.append("role", role);
    if (status) query.append("status", status);
    if (searchTerm) query.append("searchTerm", searchTerm);

    const { data } = await axiosInstance.get(`/user?${query.toString()}`);
    

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Fetch Single User
export const getSingleUser = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(`/user/${userId}`);
    return data;
  } catch (error: any) {
    
     if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message)}
  }
};

// Update User
export const updateUser = async (userId: string, payload: { [key: string]: any }) => {
  try {
    const { data } = await axiosInstance.put(`/users/${userId}`, payload);
    return data;
  } catch (error: any) {
     if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message)}
  }
};
export const makeUserBlocked = async (userId: string ) => {
  try {
    const { data } = await axiosInstance.patch(`/user/block-user/${userId}`);
    return data;
  } catch (error: any) {
     if (axios.isAxiosError(error)) {
      
      throw new Error(error.response?.data.message)}
      
  }
};


// Delete User
export const deleteUser = async (userId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/user/delete-user/${userId}`);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};