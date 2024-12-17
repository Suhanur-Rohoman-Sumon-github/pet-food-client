"use client";

import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { useUserRegistrationsMutation } from "@/hook/auth.hook";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: handleUserRegistration } = useUserRegistrationsMutation();

  const onSubmit = async (data: FieldValues) => {
    const userInfo = {
      ...data,
      role:"USER"
    };

    await handleUserRegistration(userInfo);
  };

  return (
    <div>
      <Link href={"/"}>
        <button className="mt-12 button-primary">
          <FaArrowLeft /> Back to Home
        </button>
      </Link>
      <div className="my-12 lg:flex justify-between gap-10">
        <div className="lg:w-1/2">
          <Image
            className="w-[500px] h-[500px]"
            src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt=""
            width={450}
            height={450}
          />
        </div>
        <div className="flex justify-center lg:w-2/5 mx-auto items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-lg shadow-md w-full"
          >
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Pet Haven Registration
            </h2>

            {/* Name Field */}

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-4 relative">
              <label className="block text-gray-600 mb-2" htmlFor="password">
                Password
              </label>
              <input
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register("password", { required: "Password is required" })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-12 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="button-primary w-full">
              Register
            </button>

            {/* Login Link */}
            <p className="text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
