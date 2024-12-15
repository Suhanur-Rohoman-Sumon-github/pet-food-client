"use client";

import React from "react";
import { Skeleton } from "../ui/skeleton";

const SingleProductsSkeleton = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row gap-8 border-b pb-8">
        {/* Product Image Skeleton */}
        <div className="lg:w-[50%] flex items-center gap-4">
          <Skeleton className="w-full h-[300px]" />
        </div>

        {/* Product Information Skeleton */}
        <div className="md:w-1/2 p-4 h-full md:ml-9">
          <Skeleton className="w-1/2 h-6 mb-4" />
          <Skeleton className="w-1/4 h-6 mb-4" />

          <div className="flex justify-between items-center my-4 border p-4">
            <Skeleton className="w-1/3 h-8" />
            <Skeleton className="w-1/2 h-6" />
          </div>

          <div className="flex items-center justify-between mt-4">
            <Skeleton className="w-2/3 h-8" />
          </div>

          <Skeleton className="w-3/4 h-6 mt-2 mb-4" />

          <div className="flex space-x-4 my-4">
            <button className="w-full py-2 bg-gray-300 rounded-md">
              <Skeleton className="w-1/3 h-6" />
            </button>
          </div>

          <div className="flex space-x-4 my-4 border">
            <button className="w-full py-2 bg-gray-300 rounded-md">
              <Skeleton className="w-1/3 h-6" />
            </button>
          </div>

          <div className="flex justify-between mt-4 w-full gap-4">
            <div className="p-4 border w-full border-gray-300 rounded bg-[#F3EDFF]">
              <Skeleton className="w-2/3 h-6" />
              <Skeleton className="w-4/5 h-6 mt-4" />
            </div>
            <div className="p-4 border w-full bg-[#F3EDFF] border-gray-300 rounded">
              <Skeleton className="w-2/3 h-6" />
              <Skeleton className="w-4/5 h-6 mt-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-b pb-8">
        {/* Product Description Skeleton */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            <Skeleton className="w-1/2 h-8" />
          </h2>
          <Skeleton />
        </div>

        {/* Customer Reviews Skeleton */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            <Skeleton className="w-1/2 h-8" />
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded shadow">
              <div className="flex items-center mb-2">
                <Skeleton />
                <div>
                  <Skeleton className="w-24 h-6" />
                  <Skeleton className="w-16 h-4 mt-2" />
                </div>
              </div>

              <div className="ml-12">
                <Skeleton />
                <div className="mt-2 flex items-center">
                  <Skeleton className="w-32 h-6" />
                  <Skeleton className="w-20 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <Skeleton className="w-full h-[350px]" />
      </div>
    </div>
  );
};

export default SingleProductsSkeleton;
