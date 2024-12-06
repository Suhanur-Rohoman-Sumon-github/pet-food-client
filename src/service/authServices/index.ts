"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import {jwtDecode} from "jwt-decode";
import axiosInstance from "@/lib/AxiosInostance";

// Note: Use `cookies().set` and `cookies().delete` in API routes or client-side

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      "/auth/register",
      userData
    );

    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
    console.log(userData);
  try {
    const  {data}  = await axiosInstance.post("/auth/login", userData);
  const cookieStore = await cookies();
    if (data.success) {
       
      cookieStore.set("accessToken", data.data.accessToken);
      cookieStore.set("refreshToken", data.data.refreshToken);
    }

    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
   console.log(error)
  }
};

export const logout =async () => {
  // Remove cookies client-side or via an API route
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies(); // Read-only cookies
  const accessToken = cookieStore.get("accessToken")?.value;

  if (accessToken) {
    const decodedToken = jwtDecode(accessToken) as {
      _id: string;
      name: string; 
      username: string;
      email: string;
      role: string;
      status: string;
      profilePicture: string;
    };

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      username: decodedToken.username,
      email: decodedToken.email,
      role: decodedToken.role,
      status: decodedToken.status,
      profilePicture: decodedToken.profilePicture,
    };
  }

  return null;
};

export const getNewAccessToken = async () => {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!refreshToken) {
      throw new Error("No refresh token found.");
    }

    const { data } = await axiosInstance.post("/auth/refresh-token", null, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    // Update cookies if the refresh token is successful
    document.cookie = `accessToken=${data.accessToken}; path=/; HttpOnly;`;

    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
