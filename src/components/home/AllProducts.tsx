"use client";
import { useGetMyFollowingShopQuery } from "@/hook/products.hook";

import ProductCard from "../products/ProductsCard";
import Title from "../title/Title";
import { GrView } from "react-icons/gr";
import { useUser } from "@/context/userProvider";
import Link from "next/link";

const AllProducts = () => {
  const { user } = useUser();
  const { data } = useGetMyFollowingShopQuery(user?.id as string);
  console.log(data);
  return (
    <div className="">
      <Title title="Products" subTitle="From your following shop" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link href={`/products`}>
        <button className="button-primary flex items-center float-right mt-4 ">
          {" "}
          <GrView />
          view All Products
        </button>
      </Link>
    </div>
  );
};

export default AllProducts;
