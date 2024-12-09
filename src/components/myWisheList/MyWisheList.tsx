"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { useGetMyWishListQuery } from "@/hook/wishlist.hook";
import { useUser } from "@/context/userProvider";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyWishList = () => {
  const { user } = useUser();

  const { data: wishlist } = useGetMyWishListQuery(user?.id || "");

  if (!wishlist || wishlist.length === 0) {
    return <p className="text-center text-gray-600">Your wishlist is empty.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-4">Product Image</th>
              <th className="border p-4">Product Name</th>
              <th className="border p-4">Description</th>
              <th className="border p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product: any) => (
              <tr key={product.id} className="hover:bg-gray-50">
                {/* Product Image */}
                <td className="border p-4">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="rounded"
                  />
                </td>

                {/* Product Name */}
                <td className="border p-4 font-semibold">{product.name}</td>

                {/* Product Description */}
                <td className="border p-4 text-gray-600">
                  {product.description.length > 50
                    ? product.description.substring(0, 50) + "..."
                    : product.description}
                </td>

                {/* See Product Button */}
                <td className="border p-4 text-center">
                  <Link href={`/products/${product.id}`}>
                    {" "}
                    <button className="button-primary">See Product</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWishList;
