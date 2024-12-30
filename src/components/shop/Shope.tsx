"use client";
import React, { useState } from "react";
import BestSellerShopCard from "../home/BestSellerCard";
import { useGetAllShopsQuery } from "@/hook/shop.hook";
import CustomPagination from "../products/CustomPgination";
import { shop } from "@/types";

const ShopPage = () => {
  const [selectedCategory] = useState<string | "">("");

  const [selectedRating] = useState<number | "">("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption] = useState<string | "">("Best Match");
  const [searchTerms] = useState<string | "">();
  const itemsPerPage = 6;

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

  console.log(allShops);

  const totalPages = Math.ceil((allShops?.meta.total || 0) / itemsPerPage);
  console.log(totalPages);
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
          totalPages={allShops?.meta?.totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ShopPage;
