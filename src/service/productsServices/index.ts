"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInostance";


export const getALlProducts = async () => {
  try {
      const {data} = await axiosInstance.get(`/products`);
      
    return data;
      
      

  } catch (error: any) {
    throw new Error(error);
  }
};