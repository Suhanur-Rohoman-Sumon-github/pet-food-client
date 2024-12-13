"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import PForm from "@/components/PForm/PForm";
import PInput from "@/components/PForm/PInput";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import shopValidationSchema from "@/schema/shopValidationSchema";
import { AiOutlineClose, AiOutlineUpload } from "react-icons/ai";
import Image from "next/image";

const CreateShopPage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    null
  );
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(
    null
  );

  const handleShopCreation = async (data: any) => {
    setIsSubmitting(true);
    console.log(data);

    // Uncomment the following code to handle the API request
    // try {
    //   const response = await fetch("/api/products", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) throw new Error("Failed to create product");

    //   router.push("/admin/products");
    // } catch (error) {
    //   console.error("Error creating product:", error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "profile" | "cover"
  ) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      if (type === "profile") {
        setProfileImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfileImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else if (type === "cover") {
        setCoverImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setCoverImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const removeImage = (type: "profile" | "cover") => {
    if (type === "profile") {
      setProfileImage(null);
      setProfileImagePreview(null);
    } else if (type === "cover") {
      setCoverImage(null);
      setCoverImagePreview(null);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Create Shop
        </h2>

        {/* Profile Picture Upload */}
        <div className="flex item-center gap-8 justify-center">
          <div className="mb-6 text-center">
            <label
              htmlFor="profile-upload"
              className="inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-lg shadow-md focus:ring-2 cursor-pointer"
            >
              <AiOutlineUpload className="mr-2 text-lg" />
              Upload Profile Picture
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, "profile")}
            />

            <div>
              {profileImagePreview && (
                <div className="relative mt-3">
                  <Image
                    alt="Profile Preview"
                    className="border-2 border-dashed h-32 rounded"
                    height={100}
                    src={profileImagePreview}
                    width={100}
                  />
                  <button
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    onClick={() => removeImage("profile")}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Cover Photo Upload */}
          <div className="mb-6 text-center">
            <label
              htmlFor="cover-upload"
              className="inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-lg shadow-md focus:ring-2 cursor-pointer"
            >
              <AiOutlineUpload className="mr-2 text-lg" />
              Upload Cover Photo
            </label>
            <input
              id="cover-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, "cover")}
            />

            {coverImagePreview && (
              <div className="relative mt-3">
                <Image
                  alt="Cover Photo Preview"
                  className="border-2 border-dashed h-32 rounded"
                  height={100}
                  src={coverImagePreview}
                  width={100}
                />
                <button
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                  onClick={() => removeImage("cover")}
                >
                  <AiOutlineClose />
                </button>
              </div>
            )}
          </div>
        </div>

        <PForm
          resolver={zodResolver(shopValidationSchema)}
          onSubmit={handleShopCreation}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shop Name */}
            <PInput label="Shop Name" name="name" type="text" />

            {/* Location */}
            <PInput label="Location" name="location" type="text" />

            {/* Cover Photo URL */}
            <PInput label="Cover Photo URL" name="cover_photo" type="url" />

            {/* Profile Picture URL */}
            <PInput
              label="Profile Picture URL"
              name="profile_picture"
              type="url"
            />

            {/* Vendor ID */}
            <PInput label="Vendor ID" name="vendorId" type="text" />

            {/* Ratings */}
            <PInput label="Ratings" name="ratings" type="number" />

            {/* Followers */}
            <PInput label="Followers" name="follower" type="number" />
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
