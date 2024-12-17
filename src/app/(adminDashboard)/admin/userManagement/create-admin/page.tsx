"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import PForm from "@/components/PForm/PForm";
import PInput from "@/components/PForm/PInput";
import adminValidationSchema from "@/schema/adminValidationSchema";
import { useCreateAdminMutation } from "@/hook/user.hook";
import Loading from "@/components/ui/Loading";
import { AdminPayload } from "@/types";

const CreateAdminPage = () => {
  const [isSubmitting] = useState(false);
  const { mutate: crateAdmin, isPending } = useCreateAdminMutation();

  const handleAdminCreation = async (data: AdminPayload) => {
    const adminData = {
      ...data,
    };
    adminData.role = "ADMIN";

    crateAdmin(adminData);
  };

  return (
    <div>
      {isPending && <Loading />}
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

              <PInput label="Password" name="password" type="password" />

              {/* Contact Number Input */}
              <PInput label="Phone Number" name="contactNo" type="text" />

              {/* Designation Input */}
              <PInput label="Designation" name="designation" type="text" />

              {/* Location Input */}
              <PInput label="Location" name="location" type="text" />
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex  w-full">
              <button
                className=" button-primary w-full"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                create admin
              </button>
            </div>
          </PForm>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminPage;
