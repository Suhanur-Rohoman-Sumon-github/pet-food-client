"use client";
import { Button } from "@/components/ui/button";
import { useDeleteShopMutations, useGetAllShopsQuery } from "@/hook/shop.hook";
import { shop } from "@/types";
import React from "react";

const AllShops = () => {
  const { mutate: deleteShop } = useDeleteShopMutations();
  const { data, isLoading, isError } = useGetAllShopsQuery({
    page: 1,
    limit: 10,
    category: "",
    location: "",
    searchTerm: "",
  });
  const handleDeleteShop = (id: string) => {
    deleteShop(id);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">All Shops</h1>

      {/* Table */}
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p className="text-red-500">Error loading shops.</p>
      ) : (
        <table className="w-full border-collapse border ">
          <thead>
            <tr className="">
              <th className="border p-2">Shop Name</th>

              <th className="border p-2">Location</th>

              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((shop: shop) => (
              <tr key={shop.id}>
                <td className="border p-2">{shop.name}</td>

                <td className="border p-2">{shop.location}</td>

                <td className="border p-2">
                  <Button
                    onClick={() => handleDeleteShop(shop.id)}
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllShops;
