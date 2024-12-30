/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import LightGelary from "./LightGelary";
import { MdShoppingCart } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import {
  useAddRecentProductMutations,
  useGetRelatedProductsQuery,
  useGetSingleProductQuery,
} from "@/hook/products.hook";
import ProductCard from "./ProductsCard";
import { useUser } from "@/context/userProvider";
import { useAddToCartMutation } from "@/hook/card.hook";
import { useAddWishListMutation } from "@/hook/wishlist.hook";
import { useRouter } from "next/navigation";
import SingleProductsSkeleton from "../skeleton/SingleProductSkeleton";

const SingleProducts = ({ productId }: { productId: string }) => {
  const { user } = useUser();
  const router = useRouter();
  const { data: singleProducts, isLoading } = useGetSingleProductQuery(
    productId ? productId : ""
  );

  const { mutate: recentProducts } = useAddRecentProductMutations(
    user?.id ? user?.id : "",
    productId
  );

  useEffect(() => {
    if (user?.id && productId) {
      recentProducts();
    }
  }, [recentProducts, user?.id, productId]);

  const { data } = useGetRelatedProductsQuery(singleProducts?.category_id);

  const { mutate: addToCart } = useAddToCartMutation(
    user?.id ? user?.id : "",
    productId
  );

  const { mutate: addToWishList } = useAddWishListMutation(
    user?.id ? user?.id : "",
    productId
  );

  if (!singleProducts) {
    return <p>No product found.</p>;
  }
  const { images, description, name } = singleProducts;

  const handleRedirectToLogin = (action: string) => {
    const currentPath = window.location.pathname;

    router.push(
      `/login?redirect=${encodeURIComponent(currentPath)}&action=${action}`
    );
  };

  const handleAddToCart = () => {
    if (!user) {
      handleRedirectToLogin("add-to-cart");
    } else {
      addToCart();
    }
  };

  const handleFavorite = () => {
    if (!user) {
      handleRedirectToLogin("add-to-favorite");
    } else {
      addToWishList();
    }
  };

  return (
    <div>
      {isLoading && <SingleProductsSkeleton />}
      <div className="container mx-auto p-6">
        {/* Product Details Section */}
        <div className="flex flex-col lg:flex-row gap-8 border-b pb-8">
          {/* Product Image */}
          <div className="lg:w-[50%] flex items-center gap-4 ">
            <LightGelary images={images} />
          </div>

          {/* Product Information */}
          <div className="md:w-1/2 p-4 h-full md:ml-9">
            <p className=""> {"brand"}</p>
            <h1 className="text-2xl font-bold">{name}</h1>

            <div className="flex justify-between items-center my-4 border p-4">
              <p className="text-xl font-semibold text-[#f85606]">{199}</p>
              <p className="flex items-center">
                <FaCheck className="mr-2 text-green-500" />
                In Stock
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <p className="text-xl font-bold">Quantity</p>
            </div>
            <p className="border p-1 mt-2 text-center">
              4-interest free payments of $18.75 with Klama.{" "}
              <span className="underline text-[#f85606]">Learn more</span>
            </p>
            <div className="flex space-x-4 my-4">
              <button
                onClick={handleAddToCart}
                className="button-primary w-full text-center mx-auto"
              >
                <MdShoppingCart /> Add to Cart
              </button>
            </div>
            <div className="flex space-x-4 my-4 border">
              {" "}
              <button
                onClick={handleFavorite}
                className="w-full text-center mx-auto p-2 flex items-center justify-center gap-2"
              >
                <GrFavorite /> Favourite
              </button>
            </div>
            <div className="flex justify-between mt-4 w-full gap-4">
              <div className="p-4 border w-full border-gray-300 rounded bg-[#F3EDFF]">
                <p className="font-bold flex items-center gap-2">
                  <FaLocationDot className="text-red-500" />
                  Find in Store
                </p>
                <p>
                  Use our Find in Store feature to locate nearby stores carrying
                  this product.
                </p>
              </div>
              <div className="p-4 border w-full bg-[#F3EDFF] border-gray-300 rounded">
                <p className="font-bold flex items-center gap-2">
                  <IoMdHome className="text-red-500" /> Find Delivery
                </p>
                <p>Choose the best shipping method that suits your needs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-b pb-8">
          {/* Product Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
            <p className="text-gray-700">{description}</p>
          </div>

          {/* Customer Reviews */}
          {/* Customer Reviews */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

            {singleProducts.reviews && singleProducts.reviews.length > 0 ? (
              <div className="space-y-4">
                {singleProducts.reviews.map((review: any, index: number) => (
                  <div key={index} className="p-4 bg-gray-100 rounded shadow">
                    {/* Reviewer Info */}
                    <div className="flex items-center mb-2">
                      <Image
                        src={review.userProfilePicture || "/default-avatar.png"}
                        alt={`${review.userName}'s profile`}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full  mr-2 "
                      />
                      <div>
                        <p className="font-bold">{review.userName}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(review.timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="ml-12">
                      <p className="text-gray-800">{review.comment}</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-yellow-400 text-sm">
                          {"⭐".repeat(review.ratings)}
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                          {review.ratings}/5
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">
                No reviews available for this product.
              </p>
            )}
          </div>
        </div>

        {/* Recommended Products Section */}
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No related products available.</p>
        )}
      </div>
    </div>
  );
};

export default SingleProducts;
