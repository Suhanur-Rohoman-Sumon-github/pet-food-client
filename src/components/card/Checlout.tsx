"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { zodResolver } from "@hookform/resolvers/zod";
import { userValidationSchema } from "@/schema/userValidationSchema";
import PInput from "../PForm/PInput";
import PForm from "../PForm/PForm";
import CheckoutForm from "./CheckoutForm";
import { useUser } from "@/context/userProvider";
import { Button } from "../ui/button";
import { useGetMyCardQuery } from "@/hook/card.hook";

const stripePromise = loadStripe(
  "pk_test_51Q6wvwF9KoYQU66VV99jrgUnGwIk0NUWA5UcSrkaw5RQuKI5DfgFXrJv74NJ2SmL4vLIukf71purwYKsIsTwJMYS00rSM4YY8s"
);

const CheckoutPage = () => {
  const { user } = useUser();
  const { data: MyCart } = useGetMyCardQuery(user?.id ? user?.id : "");
  console.log(MyCart);
  const [isPendingUser, setIsPendingUser] = useState(false);
  const [isUserInfoComplete, setIsUserInfoComplete] = useState(false);
  const [isPendingPayment, setIsPendingPayment] = useState(false);
  const [address, setAdress] = useState("");

  const handleUserInfoSubmit = async (data: any) => {
    setIsPendingUser(true);
    console.log("User Information:", data);
    const combinedAddress = `${data.address}, ${data.city}, ${data.postal_code}, ${data.country}`;
    setAdress(combinedAddress);
    setIsUserInfoComplete(true);
    setIsPendingUser(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-6">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg flex gap-8">
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            User Information
          </h2>
          <PForm
            resolver={zodResolver(userValidationSchema)}
            onSubmit={handleUserInfoSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* User Inputs */}
              <PInput label="Full Name" name="full_name" type="text" />
              <PInput label="Email" name="email" type="email" />
              <PInput label="Phone Number" name="phone" type="tel" />
              <PInput label="Address" name="address" type="text" />
              <PInput label="City" name="city" type="text" />
              <PInput label="Postal Code" name="postal_code" type="text" />
              <PInput label="Country" name="country" type="text" />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                className={`button-primary w-full ${
                  isPendingUser ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={isPendingUser}
              >
                {isPendingUser ? "Processing..." : "Submit Information"}
              </button>
            </div>
          </PForm>
        </div>

        {/* Right Side: Stripe Payment Form */}
        <div className="w-1/2 pl-8 border-l">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Payment Details
          </h2>
          <div className="space-y-6">
            {!isUserInfoComplete ? (
              <p className="text-red-500 text-lg">
                Please complete the user information form before making a
                payment.
              </p>
            ) : (
              <>
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    price={Number(MyCart?.totalPrice)}
                    MyCart={MyCart}
                    combinedAddress={address}
                  />
                </Elements>
                <div className="text-sm text-gray-500 mt-4">
                  <p>Your payment will be processed securely.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
