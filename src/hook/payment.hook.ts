/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  createPaymentsIntent,
  updateUserPlane,
} from "../service/paymentServices";

export const useCretePaymentIntentMutations = () => {
  return useMutation<any, Error, number>({
    mutationKey: ["create payment intent"],
    mutationFn: async (price) => {
     

      return await createPaymentsIntent(price);
    },
    
    onError: (error) => {
      toast.error(error.message);
      
    },
  });
};
export const useUpdateUserPlaneMutations = (userId: string) => {
  return useMutation<any, Error, string>({
    mutationKey: ["create payment intent"],
    mutationFn: async () => {
      return await updateUserPlane(userId);
    },
    
    onError: (error) => {
      toast.error(error.message);
      
    },
  });
};