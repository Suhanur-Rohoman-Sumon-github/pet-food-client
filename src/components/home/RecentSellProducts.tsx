import React from "react";
import ProductCard, { TProduct } from "../products/ProductsCard";

const BestSellerSection = () => {
  const dummyProducts: TProduct[] = [
    {
      id: "1",
      name: "Premium Dog Food",
      category: "Pet Food",
      price: 29.99,
      images: [
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
      ],
      isDeleted: false,
      details: "High-quality food for your canine friends.",
      stock: 10,
      rating: 4.5,
      stock_quantity: 0,
      created_at: undefined,
      shop_id: "",
    },
    {
      id: "2",
      name: "Cat Tree Deluxe",
      category: "Pet Accessories",
      price: 89.99,
      images: [
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
      ],
      isDeleted: false,
      details: "A fun and sturdy tree for your cats to climb and rest.",
      stock: 5,
      rating: 4.8,
      stock_quantity: 0,
      created_at: undefined,
      shop_id: "",
    },
    {
      id: "3",
      name: "Bird Seed Mix",
      category: "Pet Food",
      price: 15.49,
      images: [
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
      ],
      isDeleted: false,
      details: "A nutritious seed mix for all types of birds.",
      stock: 20,
      rating: 4.3,
      stock_quantity: 0,
      created_at: undefined,
      shop_id: "",
    },
    {
      id: "4",
      name: "Reptile Habitat",
      category: "Pet Supplies",
      price: 199.99,
      images: [
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
      ],
      isDeleted: false,
      details: "A comfortable and safe habitat for reptiles.",
      stock: 2,
      rating: 4.7,
      stock_quantity: 0,
      created_at: undefined,
      shop_id: "",
    },
    {
      id: "8",
      name: "Reptile Habitat",
      category: "Pet Supplies",
      price: 199.99,
      images: [
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
      ],
      isDeleted: false,
      details: "A comfortable and safe habitat for reptiles.",
      stock: 2,
      rating: 4.7,
      stock_quantity: 0,
      created_at: undefined,
      shop_id: "",
    },
    {
      id: "9",
      name: "Reptile Habitat",
      category: "Pet Supplies",
      price: 199.99,
      images: [
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
      ],
      isDeleted: false,
      details: "A comfortable and safe habitat for reptiles.",
      stock: 2,
      rating: 4.7,
      stock_quantity: 0,
      created_at: undefined,
      shop_id: "",
    },
    {
      id: "10",
      name: "Reptile Habitat",
      category: "Pet Supplies",
      price: 199.99,
      images: [
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
        "https://theme-biggmarket.myshopify.com/cdn/shop/products/19-02_d955ec2d-2bd8-4b47-b344-f13d27fc7df9_279x363.jpg?v=1601987087",
      ],
      isDeleted: false,
      details: "A comfortable and safe habitat for reptiles.",
      stock: 2,
      rating: 4.7,
      stock_quantity: 0,
      created_at: undefined,
      shop_id: "",
    },
  ];

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#f85606]">
        Trending Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellerSection;
