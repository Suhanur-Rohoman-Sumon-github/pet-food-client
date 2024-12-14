"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import PForm from "@/components/PForm/PForm";
import PInput from "@/components/PForm/PInput"; // Replace with your product schema
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import PTextArea from "@/components/PForm/PTextArea";
import Image from "next/image";
import { AiOutlineClose, AiOutlineUpload } from "react-icons/ai";
import { FieldValues } from "react-hook-form";
import { useCreateProductMutation } from "@/hook/products.hook";
import productValidationSchema from "@/schema/productValidationSchema";

const CreateProductPage = () => {
  const router = useRouter();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const { mutate: handleCreateProduct, isPending } = useCreateProductMutation(); // Handle loading state

  const handleSubmit = (data: FieldValues): void => {
    const formData = new FormData();

    // Add product data (make sure it's a stringified JSON)
    formData.append("data", JSON.stringify(data));

    // Add image files to form data
    imageFiles.forEach((image) => {
      formData.append("images", image);
    });

    // Send data via mutation hook
    handleCreateProduct(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const newFiles = Array.from(files);
      setImageFiles((prev) => [...prev, ...newFiles]);

      // Generate image previews
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    const updatedFiles = imageFiles.filter((_, i) => i !== index);
    setImageFiles(updatedFiles);

    const updatedPreviews = imagePreview.filter((_, i) => i !== index);
    setImagePreview(updatedPreviews);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Product
        </h2>

        {/* Image Uploader Section */}
        <div className="mb-6 text-center">
          <label
            htmlFor="image-upload"
            className="inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-lg shadow-md focus:ring-2 cursor-pointer"
          >
            <AiOutlineUpload className="mr-2 text-lg" />
            Upload Images
          </label>
          <input
            id="image-upload"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          {/* Image Previews */}
          {imagePreview.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              {imagePreview.map((image, index) => (
                <div key={index} className="relative">
                  <Image
                    alt={`Preview ${index + 1}`}
                    className="border-2 border-dashed h-32 rounded"
                    height={100}
                    src={image}
                    width={100}
                  />
                  <button
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    onClick={() => removeImage(index)}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <PForm
          resolver={zodResolver(productValidationSchema)}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <PInput label="Product Name" name="name" type="text" />

            {/* Price Input */}
            <PInput label="Price" name="price" type="number" />

            {/* Stock Quantity Input */}
            <PInput
              label="Stock Quantity"
              name="stock_quantity"
              type="number"
            />

            {/* Discount Price Input */}
            <PInput
              label="Discount Price"
              name="discount_price"
              type="number"
            />

            {/* Category ID Input */}
            <PInput label="Category ID" name="category_id" type="text" />

            {/* Shop ID Input */}
            <PInput label="Shop ID" name="shop_id" type="text" />
          </div>

          {/* Description TextArea */}
          <div className="mt-6">
            <PTextArea label="Description" name="description" />
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <Button
              className={`w-full button-primary ${
                isPending ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={isPending} // Disable button when submitting
            >
              {isPending ? "Creating..." : "Create Product"}
            </Button>
          </div>
        </PForm>
      </div>
    </div>
  );
};

export default CreateProductPage;
