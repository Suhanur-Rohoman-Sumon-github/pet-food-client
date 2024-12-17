"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import PForm from "@/components/PForm/PForm";
import PInput from "@/components/PForm/PInput";
import shopValidationSchema from "@/schema/shopValidationSchema";
import { useCreateShopMutation } from "@/hook/shop.hook";
import { useUser } from "@/context/userProvider";
import { useCreateCategoryMutations } from "@/hook/products.hook";

const CreateCategoryPrice = () => {
  const { user } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { mutate: createCategory } = useCreateCategoryMutations();

  const handleShopCreation = async (data: any) => {
    createCategory(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Create category
        </h2>

        <PForm
          resolver={zodResolver(shopValidationSchema)}
          onSubmit={handleShopCreation}
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <PInput label="Category name" name="name" type="text" />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              className="button-primary w-full"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create category"}
            </button>
          </div>
        </PForm>
      </div>
    </div>
  );
};

export default CreateCategoryPrice;
