/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteUser, getAllUsers, getSingleUser, makeUserBlocked } from "@/service/userServices";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { createAdmin, createVendor } from "@/service/userServices";
import { toast } from "sonner";
import { AdminPayload, VendorPayload } from "@/types";
// Hook to fetch all users
export const useGetAllUsersQuery = (queryParams: {
  page: number;
  limit: number;
  role?: string; 
  status?: string;
  searchTerm?: string | "";
}) => {
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-users", queryParams],
    queryFn: async () => {
      const data = await getAllUsers(queryParams);
      return data;
    },
  });

  return { data, refetch, isLoading, isError };
};

// Hook to fetch a single user
export const useGetSingleUserQuery = (userId: string) => {
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-single-user", userId],
    queryFn: async () => {
      const data = await getSingleUser(userId);
      return data;
    },
    enabled: Boolean(userId),
  });

  return { data, refetch, isLoading, isError };
};

// Hook to fetch all vendors
export const useGetAllVendorsQuery = (queryParams: {
  page: number;
  limit: number;
  status?: string;
  searchTerm?: string | "";
}) => {
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-vendors", queryParams],
    queryFn: async () => {
      const data = await getAllUsers({ ...queryParams, role: "vendor" }); // Pass `role: vendor`
      return data;
    },
  });

  return { data, refetch, isLoading, isError };
};

// Hook to fetch all admins
export const useGetAllAdminsQuery = (queryParams: {
  page: number;
  limit: number;
  status?: string;
  searchTerm?: string | "";
}) => {
  const { data, refetch, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["get-admins", queryParams],
    queryFn: async () => {
      const data = await getAllUsers({ ...queryParams, role: "admin" }); // Pass `role: admin`
      return data;
    },
  });

  return { data, refetch, isLoading, isError };
};








export const useCreateAdminMutation = () => {
  return useMutation<any, Error, AdminPayload>({
    mutationKey: ["create admin"],
    mutationFn: async (adminData) => {
      await createAdmin(adminData);
    },
    onSuccess: () => {
      toast.success("Admin created successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create admin.");
    },
  });
};

// Mutation for Vendor Creation
export const useCreateVendorMutation = () => {
  return useMutation<any, Error, VendorPayload>({
    mutationKey: ["create vendor"],
    mutationFn: async (vendorData) => {
      await createVendor(vendorData);
    },
    onSuccess: () => {
      toast.success("Vendor created successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create vendor.");
    },
  });
};
export const useUserBlockMutation = () => {
  return useMutation<any, Error,string>({
    mutationKey: ["make-user-blocked"],
    mutationFn: async (userID) => {
      await makeUserBlocked(userID);
    },
    onSuccess: () => {
      toast.success("user  blocked successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create vendor.");
    },
  });
};
export const useDeleteUserMutations = () => {
  return useMutation<any, Error,string>({
    mutationKey: ["make-user-delete"],
    mutationFn: async (userID) => {
      await deleteUser(userID);
    },
    onSuccess: () => {
      toast.success("user  deleted successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create vendor.");
    },
  });
};


