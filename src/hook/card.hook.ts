/* eslint-disable @typescript-eslint/no-explicit-any */
import { addToCard, getMyCard, removeFromCard } from "@/service/cardServices";
import { TNewProduct } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";



export const useGetMyCardQuery = (userId: string) => {
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
       queryKey: ["get-card", userId],
    queryFn: async () => {
      const data = await getMyCard(userId);

      return data;
    },
    enabled: Boolean(userId),
  });

  return { data, refetch, isLoading, isError };
};


export const useAddToCartMutation = (userID: string,productId: string) => {
  const queryClient = useQueryClient();

  return useMutation<any, Error>({
    mutationKey: ["add to cart"],
    mutationFn: async () => {
      return await addToCard(userID, productId);
    },
    onSuccess: () => {
      toast.success("product added successfully");
     
      queryClient.refetchQueries({
        queryKey: ["get-card"],
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

  });
};

export const useRemoveCardMutation = (userID: string,productId: string ,newProducts:TNewProduct) => {
 
  const queryClient = useQueryClient();

return useMutation<any, Error>({
  mutationKey: ["remove from cart"],
  mutationFn: async () => {
    await removeFromCard(userID, productId, newProducts);
  },
  onSuccess: () => {
    toast.success("Product removed successfully");
    queryClient.refetchQueries({
      queryKey: ["get-card"], 
    });
  },
  onError: (error) => {
    toast.error(error.message);
  },
});

};
