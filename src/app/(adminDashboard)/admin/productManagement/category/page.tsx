"use client";
import {
  useDeleteCategoryMutations,
  useGetCategoryQuery,
} from "@/hook/products.hook";
import { Category } from "@/types";
import React, { useState } from "react";

const Page = () => {
  const { data } = useGetCategoryQuery();

  const { mutate: deleteCategory } = useDeleteCategoryMutations();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleDelete = (id: string) => {
    deleteCategory(id);
    
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">This is Category</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-4">
        {data?.map((category: Category, index: number) => (
          <div
            key={category.id}
            className="relative p-4 border rounded-md shadow-lg bg-white"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Category Name */}
            <p className="text-lg font-semibold">{category.name}</p>

            {/* Delete Button - Show on Hover */}
            {hoveredIndex === index && (
              <button
                onClick={() => handleDelete(category.id)}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
