/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { createShop, getAllShops, getMyShops, getSingleShop } from "@/service/shopsServices";

// Hook for fetching all shops with query parameters
export const useGetAllShopsQuery = (queryParams: {
  page: number;
  limit: number;
  category?: string;
  location?: string;
  minRating?: number | "";
  maxRating?: number | "";
  sort?: string | "";
  searchTerm?: string | "";
}) => {
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-shops", queryParams],
    queryFn: async () => {
      const data = await getAllShops(queryParams);
      return data;
    },
  });

  return { data, refetch, isLoading, isError };
};

// Hook for fetching a single shop by ID
export const useGetSingleShopQuery = (shopId: string) => {
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-single-shop", shopId],
    queryFn: async () => {
      const data = await getSingleShop(shopId);
      return data;
    },
    enabled: Boolean(shopId),
  });

  return { data, refetch, isLoading, isError };
};

// Hook for fetching related shops by category
export const useGetMyShopsQuery = (vendorId: string) => {
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-my-shops", vendorId],
    queryFn: async () => {
      const data = await getMyShops(vendorId);
      return data;
    },
    enabled: Boolean(vendorId),
  });

  return { data, refetch, isLoading, isError };
};

// Hook for creating a new shop
export const useCreateShopMutation = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["create-shop"],
    mutationFn: async (shopData) => {
      await createShop(shopData);
    },
    onSuccess: () => {
      toast.success("Shop created successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create shop.");
    },
  });
};
