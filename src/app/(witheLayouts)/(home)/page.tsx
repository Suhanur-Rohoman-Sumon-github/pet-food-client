import Banner from "@/components/home/Banner";
import BestSellers from "@/components/home/BestSellers";
import CollectionSection from "@/components/home/CulllectionSection";
import OurServices from "@/components/home/OurServices";
import BestSellerSection from "@/components/home/RecentSellProducts";
import SpecialProducts from "@/components/home/SpecialProducts";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner />
      <OurServices />
      <BestSellerSection />
      <CollectionSection />
      <SpecialProducts />
      <BestSellers />
    </div>
  );
};

export default page;
