/* eslint-disable @typescript-eslint/no-explicit-any */
import { addToWishList, getMyWishList } from "@/service/wishlistServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
      toast.error(`${error.message}`);
    }
  
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