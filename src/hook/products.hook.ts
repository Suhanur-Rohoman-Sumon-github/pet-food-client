
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getALlProducts } from "@/service/productsServices";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProductsQuery = () => {
  
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-products"], 
    queryFn: async () => {
      const data = await getALlProducts();
        console.log(data);
      return data?.data;
    },
    
  });

  return { data, refetch, isLoading, isError };
};