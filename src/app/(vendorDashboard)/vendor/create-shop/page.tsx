"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import PForm from "@/components/PForm/PForm";
import PInput from "@/components/PForm/PInput";

import shopValidationSchema from "@/schema/shopValidationSchema";
import { useCreateShopMutation } from "@/hook/shop.hook";
import { useUser } from "@/context/userProvider";
import { shop } from "@/types";

const CreateShopPage = () => {
  const { user } = useUser();
  const [isSubmitting] = useState(false);
  const { mutate: createShop } = useCreateShopMutation();

  const handleShopCreation = async (data: shop) => {
    data.vendorId = user?.id;
    createShop(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Create Shop
        </h2>

        <PForm
          resolver={zodResolver(shopValidationSchema)}
          onSubmit={handleShopCreation}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shop Name */}
            <PInput label="Shop Name" name="name" type="text" />

            {/* Location */}
            <PInput label="Location" name="location" type="text" />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              className="button-primary w-full"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Shop"}
            </button>
          </div>
        </PForm>
      </div>
    </div>
  );
};

export default CreateShopPage;
