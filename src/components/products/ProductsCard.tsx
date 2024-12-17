"use client";
import { useUser } from "@/context/userProvider";

import { useAddWishListMutation } from "@/hook/wishlist.hook";
import Image from "next/image";
import Link from "next/link";
import { FaExchangeAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Alert from "../alert/Alert";
import { useState } from "react";
import {
  useAddToCartMutation,
  useGetMyCardQuery,
  useRemoveCardMutation,
} from "@/hook/card.hook";

export type TProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  isDeleted: boolean;
  details: string;
  stock: number;
  rating: number;
  stock_quantity: number;
  created_at?: Date;
  shop_id: string;
};

const ProductCard = ({ product }: { product: TProduct }) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [actionType, setActionType] = useState("");
  const { user } = useUser();
  const { data: MyCart } = useGetMyCardQuery(user?.id ? user?.id : "");
  console.log(actionType);

  const { mutate: addToCart } = useAddToCartMutation(
    user?.id ? user?.id : "",
    product.id
  );
  const { mutate: addToWishList } = useAddWishListMutation(
    user?.id ? user?.id : "",
    product.id
  );
  const newProducts = {
    replaceCartWithNewItem: true,
    newProductId: product.id,
  };
  const { mutate: removeFromCart } = useRemoveCardMutation(
    user?.id ? user?.id : "",
    product.id,
    newProducts
  );
  const router = useRouter();

  const handleRedirectToLogin = (action: string) => {
    const currentPath = window.location.pathname;

    router.push(
      `/login?redirect=${encodeURIComponent(currentPath)}&action=${action}`
    );
  };

  const handleAddToCart = () => {
    if (!user) {
      handleRedirectToLogin("add-to-cart");
      return;
    }

    if (MyCart?.products?.length > 0) {
      const existingShopId = MyCart.products[0].shop_id;
      if (product.shop_id !== existingShopId) {
        setActionType("add-to-cart");
        setAlertOpen(true);
        return;
      }
    }

    // Add to cart if no conflicts
    addToCart();
  };

  const handleFavorite = () => {
    if (!user) {
      handleRedirectToLogin("add-to-favorite");
    } else {
      addToWishList();
    }
  };

  const handleCompare = () => {
    console.log(`Compare clicked for product ${product.id}`);
  };

  const handleAlertConfirm = async () => {
    removeFromCart();
    // addToCart();
    setAlertOpen(false);
  };

  const handleAlertCancel = () => {
    setAlertOpen(false);
  };

  return (
    <div className="relative border rounded-lg overflow-hidden group transition-all duration-300 transform">
      <div className="absolute top-2 right-2 flex flex-col items-center space-y-2 z-10">
        <button
          onClick={handleFavorite}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#f85606] hover:text-red-500"
        >
          <FaHeart className="text-lg" />
        </button>

        <button
          onClick={handleCompare}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#f85606] hover:text-red-500"
        >
          <FaExchangeAlt className="text-lg" />
        </button>
      </div>

      <div >
        <Link href={`/products/${product.id}`}>
          <div>
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <Image
                src={product?.images[0]}
                alt={product.name}
                className="absolute inset-0 w-full h-48  object-cover group-hover:opacity-0 transition-opacity duration-300"
                width={460}
                height={460}
              />
              <Image
                src={product?.images[1]}
                alt={`${product.name} (hover)`}
                className="absolute inset-0 w-full h-48  object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                width={460}
                height={460}
              />
            </div>
            <div className="transition-opacity duration-300 opacity-100 group-hover:opacity-0 ml-4 mb-4">
              <h3 className="mt-2 text-lg font-bold text-[#09090b]">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="mt-2 text-[#f85606] font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        </Link>
        <button
          onClick={handleAddToCart}
          className="button-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-4 right-4 flex items-center justify-center"
        >
          <FaShoppingCart />
          Add To Cart
        </button>
      </div>
      <Alert
        isOpen={alertOpen}
        onClose={handleAlertCancel}
        title="Different Vendor Detected"
        description="You are trying to add products from a different vendor. Do you want to replace the cart with the new product(s) or retain the current cart?"
        onConfirm={handleAlertConfirm}
        cancelText="Retain the current cart and cancel the addition."
      />
    </div>
  );
};

export default ProductCard;
