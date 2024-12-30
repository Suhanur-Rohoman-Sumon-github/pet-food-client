"use client";
import React, { useState } from "react";
import BestSellerShopCard from "./BestSellerCard";
import { useGetAllShopsQuery } from "@/hook/shop.hook";
import { shop } from "@/types";
import Title from "../title/Title";
import Link from "next/link";
import { GrView } from "react-icons/gr";

const BestSellers = () => {
  const [selectedCategory] = useState<string | "">("");

  const [selectedRating] = useState<number | "">("");
  const [currentPage] = useState<number>(1);
  const [sortOption] = useState<string | "">("Best Match");
  const [searchTerms] = useState<string | "">();
  const itemsPerPage = 12;

  const { data: allShops } = useGetAllShopsQuery({
    page: currentPage,
    limit: itemsPerPage,
    category: selectedCategory,
    location: searchTerms,
    minRating: selectedRating || "",
    maxRating: selectedRating || "",
    sort: sortOption || "",
  });

  const slicedShops = allShops?.data?.slice(0, 3);

  return (
    <div>
      <Title title="Best" subTitle="Sellers" />
      <div className="my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {slicedShops?.map((shop: shop) => (
          <BestSellerShopCard key={shop.id} shop={shop} />
        ))}
      </div>
      <div className="mb-32">
        <Link href={`/shop`}>
          <button className="button-primary flex items-center float-right mb-24 ">
            {" "}
            <GrView />
            view All Shops
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BestSellers;
