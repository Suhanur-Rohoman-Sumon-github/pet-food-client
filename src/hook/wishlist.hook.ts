/* eslint-disable @typescript-eslint/no-explicit-any */
import { addToWishList, getMyWishList } from "@/service/wishlistServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const useAddWishListMutation = (userID: string,productId: string) => {
  const queryClient = useQueryClient();

  return useMutation<any, Error>({
    mutationKey: ["add-to-wishList"],
    mutationFn: async () => {
      return await addToWishList(productId,userID );
    },
    onSuccess: () => {
      toast.success("product added successfully");
     
      queryClient.refetchQueries({
        queryKey: ["add-to-wishList"],
      });
    },
       onError: (error) => {

  if (axios.isAxiosError(error)) {
 
    if (error.response?.data?.message) {
     
      toast.error(error.response.data.message);
    } else {
   
      toast.error("An unexpected error occurred.");
    }
  } else {
    
    
    toast.error(error?.message || "An unknown error occurred.");
  }
},
  
})}

export const useGetMyWishListQuery = (userId: string) => {
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
       queryKey: ["add-to-wishList", userId],
    queryFn: async () => {
      const data = await getMyWishList(userId);

      return data.data;
    },
    enabled: Boolean(userId),
  });

  return { data, refetch, isLoading, isError };
};