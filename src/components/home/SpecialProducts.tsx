import React from "react";
import SpecialProductCard from "./SpecialProductsCard";

const SpecialProducts = () => {
  const specialProducts = [
    {
      _id: "1",
      name: "Gourmet Cat Food",
      category: "Special Deals",
      price: 19.99,
      image:
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19_d19e4418-9848-4350-acd9-8a9c5bca9714_grande.jpg?v=1601987094",
      description: "Delicious and nutritious gourmet meals for your cat.",
      timer: "12:30:45", // HH:MM:SS format
    },
    {
      _id: "2",
      name: "Luxury Dog Bed",
      category: "Limited Edition",
      price: 129.99,
      image:
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/08_76cdaf6e-0252-4226-b099-901accf0a39a_390x.jpg?v=1601986999",
      description: "A cozy and stylish bed for your canine companions.",
      timer: "05:12:30",
    },
  ];
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#f85606]">
        Flash sell
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {specialProducts.map((product) => (
          <SpecialProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;
