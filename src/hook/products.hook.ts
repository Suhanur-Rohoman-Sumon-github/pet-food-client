/* eslint-disable @typescript-eslint/no-explicit-any */
import { getALlProducts, getRelatedProducts, getSIngleProducts } from "@/service/productsServices";
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


export const useGetSingleProductQuery = (productId: string) => {
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
       queryKey: ["get-single-products", productId],
    queryFn: async () => {
      const data = await getSIngleProducts(productId);

      return data;
    },
    enabled: Boolean(productId),
  });

  return { data, refetch, isLoading, isError };
};
export const useGetRelatedProductsQuery = (categoryID: string) => {
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
       queryKey: ["get-related-products", categoryID],
    queryFn: async () => {
      const data = await getRelatedProducts(categoryID);

      return data;
    },
    enabled: Boolean(categoryID),
  });

  return { data, refetch, isLoading, isError };
};