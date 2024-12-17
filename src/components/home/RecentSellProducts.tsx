"use client";
import React from "react";
import ProductCard, { TProduct } from "../products/ProductsCard";
import { useGetRecentProductsQuery } from "@/hook/products.hook";
import { useUser } from "@/context/userProvider";

const BestSellerSection = () => {
  const { user } = useUser();
  const { data: recentlyViewedProducts } = useGetRecentProductsQuery(
    user?.id as string
  );

  console.log(recentlyViewedProducts);

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#f85606]">
        Recently viewed Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {recentlyViewedProducts?.map((product: TProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellerSection;
