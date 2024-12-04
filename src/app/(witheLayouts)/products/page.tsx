import Products from "@/components/products/Products";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-red-500">
        <Products />
      </h1>
    </div>
  );
};

export default page;
