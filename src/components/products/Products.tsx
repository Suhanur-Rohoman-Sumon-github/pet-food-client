import React from "react";
import ProductCard from "./ProductsCard";

const Products = () => {
  // Dummy product data
  const petFoodData = [
    {
      _id: "1",
      name: "Premium Dog Food",
      category: "Dog",
      price: 29.99,
      image:
        "https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-4.jpg",
    },
    {
      _id: "2",
      name: "Cat Tuna Delight",
      category: "Cat",
      price: 24.99,
      image:
        "https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-1.jpg",
    },
    {
      _id: "3",
      name: "Bird Seed Mix",
      category: "Bird",
      price: 15.99,
      image:
        "https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-2.jpg",
    },
    {
      _id: "4",
      name: "Small Animal Pellets",
      category: "Small Animal",
      price: 12.99,
      image:
        "https://htmldemo.net/petmark/petmark/image/product/product-details/product-details-3.jpg",
    },
  ];

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
        {petFoodData && petFoodData.length > 0 ? (
          <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {petFoodData.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No products found</p>
        )}
      </main>
    </div>
  );
};

export default Products;
