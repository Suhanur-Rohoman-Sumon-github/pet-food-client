"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import PForm from "@/components/PForm/PForm";
import PInput from "@/components/PForm/PInput";
import PSelect from "@/components/PForm/PSelect";
import PTextArea from "@/components/PForm/PTextArea";
import Image from "next/image";
import { AiOutlineClose, AiOutlineUpload } from "react-icons/ai";
import { FieldValues, useForm } from "react-hook-form";
import {
  useCreateProductMutation,
  useGetCategoryQuery,
} from "@/hook/products.hook";
import { useGetMyShopsQuery } from "@/hook/shop.hook";
import { useUser } from "@/context/userProvider";
import productValidationSchema from "@/schema/productValidationSchema";
import { shop } from "@/types";
import Loading from "@/components/ui/Loading";
import generateDescription from "@/service/GenareteDescriptionsWitheAi";
import { Button } from "@/components/ui/button";
import { TbBrandOpenai } from "react-icons/tb";

const CreateProductPage = () => {
  const methods = useForm();
  const { user } = useUser();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const { mutate: handleCreateProduct, isPending } = useCreateProductMutation();
  const { data: categories } = useGetCategoryQuery();
  const { data: shopData } = useGetMyShopsQuery(user?.id as string);

  // Transform category data for options
  const categoriesOptions =
    categories?.map((category: any) => ({
      key: category.id,
      label: category.name,
    })) || [];

  // Transform shop data for options
  const myShopsOptions =
    shopData?.map((shop: shop) => ({
      key: shop.id,
      label: shop.name,
    })) || [];

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
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreview((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (data: FieldValues): void => {
    const formData = new FormData();

    // Add product data
    formData.append("data", JSON.stringify(data));

    // Add image files
    imageFiles.forEach((image) => {
      formData.append("images", image);
    });

    // Handle product creation
    handleCreateProduct(formData);
  };

  const handleDescriptions = async () => {
    setIsLoading(true);
    try {
      const response = await generateDescription(
        imagePreview[0],
        `Analyze the uploaded pet food image and generate an engaging product description, including: key ingredients, nutritional benefits, target pet type, flavor, and why pet owners would love it. 🐾✨`
      );

      setDescription(response);
      console.log(response);

      methods.setValue("content", response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isPending && <Loading />}
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

          <button
            className="button-secondary my-4 text-center"
            onClick={() => handleDescriptions()}
          >
            <TbBrandOpenai />
            {isLoading ? "generating" : "generate description withe ai"}
          </button>

          <PForm
            resolver={zodResolver(productValidationSchema)}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Inputs */}
              <PInput label="Product Name" name="name" type="text" />
              <PInput label="Price" name="price" type="number" />
              <PInput
                label="Stock Quantity"
                name="stock_quantity"
                type="number"
              />
              <PInput
                label="Discount Price"
                name="discount_price"
                type="number"
              />

              {/* Category & Shop Selects */}
              <PSelect
                options={categoriesOptions}
                name="category_id"
                label="Category"
              />
              <PSelect options={myShopsOptions} name="shop_id" label="Shop" />
            </div>

            {/* Description */}
            <div className="mt-6">
              <PTextArea
                descriptions={description}
                label="Description"
                name="description"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                className={`w-full button-primary ${
                  isPending ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Creating..." : "Create Product"}
              </button>
            </div>
          </PForm>
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;
