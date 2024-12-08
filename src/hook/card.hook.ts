/* eslint-disable @typescript-eslint/no-explicit-any */
import { addToCard, getMyCard, removeFromCard } from "@/service/cardServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

 // Update the path to match your file structure

// Hook to fetch the user's card
export const useGetMyCardQuery = (userId: string) => {
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get single posts", userId],
    queryFn: async () => {
      const data = await getMyCard(userId);

      return data;
    },
    enabled: Boolean(userId),
  });

  return { data, refetch, isLoading, isError };
};

// Hook to add a product to the card
export const useAddToCartMutation = (userID: string,productId: string) => {
  const queryClient = useQueryClient();

  return useMutation<any, Error>({
    mutationKey: ["add to cart"],
    mutationFn: async () => {
      return await addToCard(userID, productId);
    },
    onSuccess: () => {
      toast.success("product added successfully");
      // Refetch posts after creating
      queryClient.refetchQueries({
        queryKey: ["get-card"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useRemoveCardMutation = (userID: string,productId: string) => {
  const queryClient = useQueryClient();

  return useMutation<any, Error>({
    mutationKey: ["add to cart"],
    mutationFn: async () => {
      await removeFromCard(userID,productId);
    },
    onSuccess: () => {
      toast.success("product added successfully");
      // Refetch posts after creating
      queryClient.refetchQueries({
        queryKey: ["get-card"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
