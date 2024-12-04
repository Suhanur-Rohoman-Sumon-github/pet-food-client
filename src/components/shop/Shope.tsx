import React from "react";
import BestSellerShopCard from "../home/BestSellerCard";

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
  {
    id: "4",
    name: "Fashion Forward",
    location: "New York, NY",
    bannerImage:
      "https://theme-biggmarket.myshopify.com/cdn/shop/files/04_6dd86306-c72f-456c-a8a6-133bf93cf4aa_80x80.png?v=1613699837",
    logo: "https://theme-biggmarket.myshopify.com/cdn/shop/files/04_6dd86306-c72f-456c-a8a6-133bf93cf4aa_80x80.png?v=1613699837",
    rating: 4.9,
    topCategories: ["Clothing", "Footwear", "Accessories"],
  },
  {
    id: "5",
    name: "Fashion Forward",
    location: "New York, NY",
    bannerImage:
      "https://theme-biggmarket.myshopify.com/cdn/shop/files/04_6dd86306-c72f-456c-a8a6-133bf93cf4aa_80x80.png?v=1613699837",
    logo: "https://theme-biggmarket.myshopify.com/cdn/shop/files/04_6dd86306-c72f-456c-a8a6-133bf93cf4aa_80x80.png?v=1613699837",
    rating: 4.9,
    topCategories: ["Clothing", "Footwear", "Accessories"],
  },
  {
    id: "6",
    name: "Fashion Forward",
    location: "New York, NY",
    bannerImage:
      "https://theme-biggmarket.myshopify.com/cdn/shop/files/04_6dd86306-c72f-456c-a8a6-133bf93cf4aa_80x80.png?v=1613699837",
    logo: "https://theme-biggmarket.myshopify.com/cdn/shop/files/04_6dd86306-c72f-456c-a8a6-133bf93cf4aa_80x80.png?v=1613699837",
    rating: 4.9,
    topCategories: ["Clothing", "Footwear", "Accessories"],
  },
];

const ShopPage = () => {
  return (
    <div className="flex  ">
      {/* Left Sidebar for Filtering */}
      <aside className="w-1/4 bg-white shadow-md rounded-lg p-4 space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Filters</h3>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Shops"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        {/* Categories */}
        <div className="space-y-4">
          <h4 className="font-medium">Categories</h4>
          <ul className="space-y-2">
            <li>
              <input type="checkbox" id="electronics" />
              <label htmlFor="electronics" className="ml-2">
                Electronics
              </label>
            </li>
            <li>
              <input type="checkbox" id="fashion" />
              <label htmlFor="fashion" className="ml-2">
                Fashion
              </label>
            </li>
            <li>
              <input type="checkbox" id="home-decor" />
              <label htmlFor="home-decor" className="ml-2">
                Home Decor
              </label>
            </li>
          </ul>
        </div>
        {/* Ratings */}
        <div className="space-y-4">
          <h4 className="font-medium">Ratings</h4>
          <input type="range" min="1" max="5" step="0.5" className="w-full" />
        </div>
        {/* Price Range */}
        <div className="space-y-4">
          <h4 className="font-medium">Price Range</h4>
          <input type="range" min="0" max="1000" step="10" className="w-full" />
        </div>
        {/* Sort By */}
        <div className="space-y-4">
          <h4 className="font-medium">Sort By</h4>
          <select className="w-full p-2 border rounded-lg">
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </aside>

      {/* Shop Cards Section */}
      <main className="w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {shops.map((shop) => (
            <BestSellerShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
