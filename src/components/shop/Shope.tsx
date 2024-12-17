"use client";
import React, { useState } from "react";
import BestSellerShopCard from "../home/BestSellerCard";
import { useGetAllShopsQuery } from "@/hook/shop.hook";
import CustomPagination from "../products/CustomPgination";
import { shop } from "@/types";

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
  const [selectedCategory] = useState<string | "">("");

  const [selectedRating] = useState<number | "">("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption] = useState<string | "">("Best Match");
  const [searchTerms] = useState<string | "">();
  const itemsPerPage = 12;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const { data: allShops } = useGetAllShopsQuery({
    page: currentPage,
    limit: itemsPerPage,
    category: selectedCategory,
    location: searchTerms,
    minRating: selectedRating || "",
    maxRating: selectedRating || "",
    sort: sortOption || "",
  });

  const totalPages = Math.ceil((allShops?.meta.total || 0) / itemsPerPage);
  return (
    <div>
      <div className="flex  ">
        {/* Left Sidebar for Filtering */}

        {/* Shop Cards Section */}
        <main className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allShops?.data?.map((shop: shop) => (
              <BestSellerShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        </main>
      </div>
      <div className="mt-6">
        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ShopPage;
