import React from "react";
import SpecialProductCard from "./SpecialProductsCard";
import Title from "../title/Title";

const SpecialProducts = () => {
  const specialProducts = [
    {
      _id: "1",
      name: "Gourmet Cat Food",
      category: "Special Deals",
      price: 19.99,
      image:
        "https://marten-2.myshopify.com/cdn/shop/products/banner-2_480X370_crop_center.png?v=1534240218",
      description: "Delicious and nutritious gourmet meals for your cat.",
      timer: "12:30:45",
    },
  ];
  return (
    <div className="">
      <Title title="Special" subTitle="Products" />
      <div className="">
        {specialProducts.map((product) => (
          <SpecialProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;
