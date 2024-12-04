import React from "react";
import ProductCard, { TProduct } from "../products/ProductsCard";

const BestSellerSection = () => {
  // Dummy data for products
  const dummyProducts: TProduct[] = [
    {
      _id: "1",
      name: "Premium Dog Food",
      category: "Pet Food",
      price: 29.99,
      image:
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/15-02_a37a4238-8626-4927-9e62-02579bd3b16d_279x363.jpg?v=1601987124",
      isDeleted: false,
      details: "High-quality food for your canine friends.",
      stock: 10,
      rating: 4.5,
    },
    {
      _id: "2",
      name: "Cat Tree Deluxe",
      category: "Pet Accessories",
      price: 89.99,
      image:
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
      isDeleted: false,
      details: "A fun and sturdy tree for your cats to climb and rest.",
      stock: 5,
      rating: 4.8,
    },
    {
      _id: "3",
      name: "Bird Seed Mix",
      category: "Pet Food",
      price: 15.49,
      image:
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/08-02_31b9e151-12e0-460a-90dd-d38a303b76fc_279x363.jpg?v=1601987044",
      isDeleted: false,
      details: "A nutritious seed mix for all types of birds.",
      stock: 20,
      rating: 4.3,
    },
    {
      _id: "4",
      name: "Reptile Habitat",
      category: "Pet Supplies",
      price: 199.99,
      image:
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/07_60aead31-6892-4950-bf8e-744af85a6084_279x363.jpg?v=1601986994",
      isDeleted: false,
      details: "A comfortable and safe habitat for reptiles.",
      stock: 2,
      rating: 4.7,
    },
    {
      _id: "8",
      name: "Reptile Habitat",
      category: "Pet Supplies",
      price: 199.99,
      image:
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/06-02_b5895089-911d-44e5-8fb8-9b6a15e816e2_279x363.jpg?v=1601986829",
      isDeleted: false,
      details: "A comfortable and safe habitat for reptiles.",
      stock: 2,
      rating: 4.7,
    },
    {
      _id: "9",
      name: "Reptile Habitat",
      category: "Pet Supplies",
      price: 199.99,
      image:
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/06-02_b5895089-911d-44e5-8fb8-9b6a15e816e2_279x363.jpg?v=1601986829",
      isDeleted: false,
      details: "A comfortable and safe habitat for reptiles.",
      stock: 2,
      rating: 4.7,
    },
    {
      _id: "10",
      name: "Reptile Habitat",
      category: "Pet Supplies",
      price: 199.99,
      image:
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/06-02_b5895089-911d-44e5-8fb8-9b6a15e816e2_279x363.jpg?v=1601986829",
      isDeleted: false,
      details: "A comfortable and safe habitat for reptiles.",
      stock: 2,
      rating: 4.7,
    },
  ];

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#f85606]">
        Trending Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dummyProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellerSection;
