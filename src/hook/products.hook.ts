/* eslint-disable @typescript-eslint/no-explicit-any */
import { createCategory, getALlProducts, getCateGory, getRelatedProducts, getSIngleProducts } from "@/service/productsServices";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "@/service/productsServices"; 
import { FieldValues } from "react-hook-form";

export const useGetAllProductsQuery = (queryParams: {
  page: number;
  limit: number;
  category?: string;
  minPrice?: number | "";
  maxPrice?: number | "";
  rating?: number | "";
  sort?: string | "";
  searchTerm?:string|""
}) => {
  
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    
    queryKey: ["get-products", queryParams],
    queryFn: async () => {
      const data = await getALlProducts(queryParams);
      console.log(data);
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
export const useGetCategoryQuery = () => {
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
       queryKey: ["get-related-products"],
    queryFn: async () => {
      const data = await getCateGory();

      return data;
    },
  });

  return { data, refetch, isLoading, isError };
};
export const useCreateProductMutation = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["create-product"],
    mutationFn: async (productData) => {
      await createProduct(productData); 
    },
    onSuccess: () => {
      toast.success("Product created successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create product.");
    },
  });
};
export const useCreateCategoryMutations = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["create-category"],
    mutationFn: async (categoryData) => {
      await createCategory(categoryData); 
    },
    onSuccess: () => {
      toast.success("Category  created successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create category.");
    },
  });
};
