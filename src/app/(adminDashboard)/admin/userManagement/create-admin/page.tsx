"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import PForm from "@/components/PForm/PForm";
import PInput from "@/components/PForm/PInput";
import adminValidationSchema from "@/schema/adminValidationSchema";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CreateAdminPage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAdminCreation = async (data: any) => {
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="w-full max-w-4xl p-8 bg-white rounded-xl ">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
          New Admin Registration
        </h2>
        <PForm
          resolver={zodResolver(adminValidationSchema)}
          onSubmit={handleAdminCreation}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Name Input */}
            <PInput label="Full Name" name="name" type="text" />

            {/* Email Input */}
            <PInput label="Email Address" name="email" type="email" />

            {/* Contact Number Input */}
            <PInput label="Phone Number" name="contactNo" type="text" />

            {/* Designation Input */}
            <PInput label="Job Title" name="designation" type="text" />

            {/* Location Input */}
            <PInput label="Office Location" name="location" type="text" />
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex  w-full">
            <button
              className=" button-primary w-full"
              color="primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Register Admin"}
            </button>
          </div>
        </PForm>
      </div>
    </div>
  );
};

export default CreateAdminPage;
