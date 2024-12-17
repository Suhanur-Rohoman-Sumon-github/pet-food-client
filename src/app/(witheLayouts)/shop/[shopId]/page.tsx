"use client";
import React from "react";
import Image from "next/image";
import { useGetSingleShopQuery } from "@/hook/shop.hook";
import { useParams } from "next/navigation";
import ProductCard, { TProduct } from "@/components/products/ProductsCard";
import { Badge } from "@/components/ui/badge";

const SingleShopPage = () => {
  const { shopId } = useParams(); // Get the shopId from the route parameters

  // Fetch shop data using the custom hook
  const { data: shop, isLoading: isLoadingProducts } = useGetSingleShopQuery(
    shopId as string
  );

  // Fallback loading state
  if (isLoadingProducts) {
    return <div>Loading...</div>;
  }

  // Check if shop data is available
  if (!shop) {
    return <div>Shop not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Banner Section */}
      <div className="relative mb-8">
        <Image
          src={shop?.cover_photo} // Fallback if no banner image
          alt="Shop Banner"
          width={1600}
          height={400}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Profile Picture Section */}
      <div className="mt-[-70px] flex justify-center items-center">
        <div className="relative">
          <Image
            src={shop?.profile_picture} // Fallback if no profile picture
            alt={`${shop?.shopName}'s profile`}
            width={150}
            height={150}
            className="w-36 h-36 rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Shop Details */}
      <div className="text-center mt-4">
        <h1 className="text-4xl font-bold">{shop?.name}</h1>
        <p className="text-gray-600 mt-2">{shop?.location}</p>
        <div className="flex gap-4 justify-center items-center mt-4">
          <Badge className="bg-[#f85606]">{`Followers ${shop?.follower.length}`}</Badge>
          <Badge className="bg-[#f85606]">{`Total products ${shop?.products?.length}`}</Badge>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shop?.products?.map((product: TProduct) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleShopPage;
