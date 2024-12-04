import React from "react";
import BestSellerShopCard from "./BestSellerCard";

const BestSellers = () => {
  const shops = [
    {
      id: "1",
      name: "Tech Bazaar",
      location: "San Francisco, CA",
      bannerImage:
        "https://theme-biggmarket.myshopify.com/cdn/shop/files/slider-02_0ceeffd7-72cf-4565-9b32-f0b7f9c19040_1280x.jpg?v=1613706853",
      logo: "https://theme-biggmarket.myshopify.com/cdn/shop/files/04_6dd86306-c72f-456c-a8a6-133bf93cf4aa_80x80.png?v=1613699837",
      rating: 4.7,
      topCategories: ["Laptops", "Smartphones", "Accessories"],
    },
    {
      id: "2",
      name: "Nature's Delight",
      location: "Austin, TX",
      bannerImage:
        "https://theme-biggmarket.myshopify.com/cdn/shop/files/slider-02_0ceeffd7-72cf-4565-9b32-f0b7f9c19040_1280x.jpg?v=1613706853",
      logo: "https://theme-biggmarket.myshopify.com/cdn/shop/files/04_6dd86306-c72f-456c-a8a6-133bf93cf4aa_80x80.png?v=1613699837",
      rating: 4.8,
      topCategories: ["Organic Foods", "Vitamins", "Skincare"],
    },
    {
      id: "3",
      name: "Fashion Forward",
      location: "New York, NY",
      bannerImage:
        "https://theme-biggmarket.myshopify.com/cdn/shop/files/04_6dd86306-c72f-456c-a8a6-133bf93cf4aa_80x80.png?v=1613699837",
      logo: "https://theme-biggmarket.myshopify.com/cdn/shop/files/04_6dd86306-c72f-456c-a8a6-133bf93cf4aa_80x80.png?v=1613699837",
      rating: 4.9,
      topCategories: ["Clothing", "Footwear", "Accessories"],
    },
  ];
  return (
    <div className="my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {shops.map((shop) => (
        <BestSellerShopCard key={shop.id} shop={shop} />
      ))}
    </div>
  );
};

export default BestSellers;
