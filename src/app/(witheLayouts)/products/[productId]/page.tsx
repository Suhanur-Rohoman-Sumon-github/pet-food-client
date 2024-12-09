"use client";
import SingleProducts from "@/components/products/SingleProducts";
import { useParams } from "next/navigation";

import React from "react";

const ProductPage = () => {
  const { productId } = useParams();
  return (
    <div>
      <SingleProducts productId={productId} />
    </div>
  );
};

export default ProductPage;
