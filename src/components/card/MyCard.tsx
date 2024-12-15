"use client";
import React from "react";
import Image from "next/image";
import { useGetMyCardQuery } from "@/hook/card.hook";
import { useUser } from "@/context/userProvider";
import { item } from "@/types";

const MyCart = () => {
  const { user } = useUser();
  const { data: MyCart } = useGetMyCardQuery(user?.id ? user?.id : "");
  console.log(MyCart);

  const handleCheckout = () => {};

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left Side - Cart Products */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {MyCart?.products.map((item: item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 border rounded-lg"
            >
              {/* Product Image */}
              <Image
                src={item.images[0]}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
                width={460}
                height={460}
              />
              {/* Product Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500">
                  {item.description.slice(0, 500)}
                </p>
                <p className="font-bold mt-2">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Cart Summary */}
      <div className="w-full md:w-1/3 p-6 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <div className="space-y-4">
          {/* Total Price */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Subtotal:</p>
            <p className="font-semibold">${MyCart?.totalPrice.toFixed(2)}</p>
          </div>

          {/* Taxes */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Taxes:</p>
            <p className="font-semibold">$5.00</p>
          </div>

          {/* Coupon Input */}
          <div>
            <label htmlFor="coupon" className="text-gray-600">
              Apply Coupon:
            </label>
            <input
              type="text"
              id="coupon"
              placeholder="Enter coupon code"
              className="w-full p-2 border rounded-lg mt-2"
            />
          </div>

          {/* Grand Total */}
          <div className="flex justify-between items-center font-bold text-lg">
            <p>Total:</p>
            <p>${(MyCart?.totalPrice + 5).toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <button onClick={handleCheckout} className="button-primary w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
