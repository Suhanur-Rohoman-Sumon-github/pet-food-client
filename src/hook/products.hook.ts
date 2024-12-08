/* eslint-disable @typescript-eslint/no-explicit-any */
import { getALlProducts } from "@/service/productsServices";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProductsQuery = (queryParams: {
  page: number;
  limit: number;
  category?: string;
  minPrice?: number | "";
  maxPrice?: number | "";
  rating?: number | "";
  sort?: string | "";
}) => {
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-products", queryParams],
    queryFn: async () => {
      const data = await getALlProducts(queryParams);
      return data;
    },
  });

  return { data, refetch, isLoading, isError };
};
