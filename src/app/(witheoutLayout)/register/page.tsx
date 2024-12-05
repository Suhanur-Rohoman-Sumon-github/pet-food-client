/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const Register = () => {
  //   const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  //   const [userRegister, { data: userRes, error: errorRes }] =
  //     useUserRegisterMutation();
  const imgbbApiKey = "08dea360d9faac6a8de4cf6f88727008"; // Replace with your actual ImgBB API key

  //   const uploadImageToImgBB = async (file: File) => {
  //     const formData = new FormData();
  //     formData.append("image", file);

  //     setIsUploading(true);
  //     try {
  //       const response = await fetch(
  //         `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
  //         {
  //           method: "POST",
  //           body: formData,
  //         }
  //       );
  //       const data = await response.json();
  //       setImageUrl(data.data.url); // Save the returned URL
  //       setIsUploading(false);
  //     } catch (error) {
  //       console.error("Error uploading image:", error);
  //       setIsUploading(false);
  //     }
  //   };

  const onSubmit = async (data: FieldValues) => {
    // const userInfo = {
    //   ...data,
    //   image: imageUrl,
    //   role: "user",
    //   status: "active",
    //   isDeleted: false,
    // };

    // Submit form data with image URL
    // await userRegister(userInfo);
    console.log(data);
  };
  //   useEffect(() => {
  //     if (userRes?.success) {
  //       toast.success(userRes?.message);

  //       navigate("/login");
  //     }
  //     if (errorRes) {
  //       // @ts-ignore
  //       toast.error(errorRes?.data?.errorSources[0].message);
  //     }
  //   }, [userRes, errorRes, navigate]);
  return (
    <div>
      <Link href={"/"}>
        {" "}
        <button className="mt-12 button-primary ">
          {" "}
          <FaArrowLeft /> Back to Home
        </button>
      </Link>
      <div className="my-12 lg:flex justify-between gap-10 ">
        <div className="lg:w-1/2">
          <Image
            className="w-[500px] h-[500px]"
            src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt=""
            width={450}
            height={450}
          />
        </div>
        <div className="flex justify-center lg:w-2/5 mx-auto items-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-lg shadow-md w-full"
          >
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Pet Haven Registration
            </h2>

            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>

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

            {/* Address Field */}

            {/* Phone Field */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                disabled={isUploading}
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message as string}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="button-primary w-full"
              disabled={isUploading}
            >
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
