"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import PForm from "@/components/PForm/PForm";
import PInput from "@/components/PForm/PInput";
import adminValidationSchema from "@/schema/adminValidationSchema";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CreateVendorPage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVendorCreation = async (data: any) => {
    setIsSubmitting(true);
    console.log(data);
    // Uncomment the following code to handle the API request
    // try {
    //   const response = await fetch("/api/admin", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) throw new Error("Failed to create admin");

    //   router.push("/admin/userManagement");
    // } catch (error) {
    //   console.error("Error creating admin:", error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
          Create Vendor
        </h2>
        <PForm
          resolver={zodResolver(adminValidationSchema)}
          onSubmit={handleVendorCreation}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Input */}
            <PInput label="Name" name="name" type="text" />

            {/* Email Input */}
            <PInput label="Email" name="email" type="email" />

            {/* Contact Number Input */}
            <PInput label="Contact Number" name="contactNo" type="text" />

            {/* Designation Input */}
            <PInput label="Designation" name="designation" type="text" />

            {/* Location Input */}
            <PInput label="Location" name="location" type="text" />
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              className="button-primary w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create Vendor"}
            </button>
          </div>
        </PForm>
      </div>
    </div>
  );
};

export default CreateVendorPage;
