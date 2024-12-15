import React from "react";
import Image from "next/image"; // If you're using Next.js
import Link from "next/link";

const EmtyCartDegain = () => {
  return (
    <div className="flex items-center justify-center py-32 bg-gray-100">
      <div className="text-center">
        {/* Empty cart image */}
        <div className="mb-6">
          <Image
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png?f=webp" // Replace with your image path
            alt="Empty Cart"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        {/* Empty cart text */}
        <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
        <Link href={"/products"}>
          {" "}
          <button className="button-primary mt-4">Back to product page</button>
        </Link>
      </div>
    </div>
  );
};

export default EmtyCartDegain;
