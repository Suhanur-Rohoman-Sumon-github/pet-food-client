"use client";
import React from "react";
import ProductCard from "./ProductsCard";
import { useGetAllProductsQuery } from "@/hook/products.hook";


const Products = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="p-4 w-64 bg-white shadow-md border-r border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-gray-700">Category</h3>
          <ul className="space-y-2">
            {["Dog", "Cat", "Bird", "Small Animal", "All"].map((category) => (
              <li
                key={category}
                className="cursor-pointer p-2 rounded text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-gray-700">
            Price Range
          </h3>
          <ul className="space-y-2">
            {["Under $10", "$10 - $20", "$20 - $30", "Over $30"].map(
              (range) => (
                <li
                  key={range}
                  className="cursor-pointer p-2 rounded text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                >
                  {range}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Sorting Options */}
        <div>
          <h3 className="text-lg font-medium mb-2 text-gray-700">Sort By</h3>
          <ul className="space-y-2">
            {["Price: Low to High", "Price: High to Low"].map((sortOption) => (
              <li
                key={sortOption}
                className="cursor-pointer p-2 rounded text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              >
                {sortOption}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Product Display */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Pet Food Products
        </h1>

        {isLoading && <p>Loading products...</p>}
        {isError && <p className="text-red-600">Failed to fetch products</p>}

        {data && data.length > 0 ? (
          <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          !isLoading && <p className="text-gray-600">No products found</p>
        )}
      </main>
    </div>
  );
};

export default Products;
