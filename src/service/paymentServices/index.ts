import axiosInstance from "@/lib/AxiosInostance";
import axios from "axios";

// Create Payments Intent function
export const createPaymentsIntent = async (price: number) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/payments",
      { price }, 
    );

    return data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

// Update User Plan function
export const updateUserPlane = async (userId: string) => {
  try {
    const { data } = await axiosInstance.patch(
      `https://express-server-startar-pack-main.vercel.app/api/v1/payments/update-user-plane/${userId}`,
    );

    return data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};