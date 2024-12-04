import Banner from "@/components/home/Banner";
import CollectionSection from "@/components/home/CulllectionSection";
import OurServices from "@/components/home/OurServices";
import BestSellerSection from "@/components/home/RecentSellProducts";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner />
      <OurServices />
      <BestSellerSection />
      <CollectionSection />
    </div>
  );
};

export default page;
