"use client";
import { useUser } from "@/context/userProvider";
import { useAddToCartMutation } from "@/hook/card.hook";
import Image from "next/image";
import Link from "next/link";
import { FaExchangeAlt, FaHeart, FaShoppingCart } from "react-icons/fa";

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
};

const ProductCard = ({ product }: { product: TProduct }) => {
  const { user } = useUser();
  const { mutate: addToCart } = useAddToCartMutation(
    user?.id ? user?.id : "",
    product.id
  );

  const handleAddToCart = () => {
    console.log(`Add to cart clicked for product ${product.id}`);
    addToCart();
  };

  const handleFavorite = () => {
    console.log(`Favorite clicked for product ${product.id}`);
  };

  const handleCompare = () => {
    console.log(`Compare clicked for product ${product.id}`);
  };

  return (
    <div className="relative border rounded-lg overflow-hidden group transition-all duration-300 transform">
      {/* Favorite and Compare Icons */}
      <div className="absolute top-2 right-2 flex flex-col items-center space-y-2 z-10">
        {/* Favorite Icon (Shows on Hover) */}
        <button
          onClick={handleFavorite}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#f85606] hover:text-red-500"
        >
          <FaHeart className="text-lg" />
        </button>
        {/* Compare Icon (Always Visible) */}
        <button
          onClick={handleCompare}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#f85606] hover:text-red-500"
        >
          <FaExchangeAlt className="text-lg" />
        </button>
      </div>

      {/* Product Content */}
      <div>
        <Link href={`/products/${product.id}`}>
          <div>
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <Image
                src={product?.images[0]}
                alt={product.name}
                className="absolute inset-0 w-full h-48 my-4 object-cover group-hover:opacity-0 transition-opacity duration-300"
                width={460}
                height={460}
              />
              <Image
                src={product?.images[1]}
                alt={`${product.name} (hover)`}
                className="absolute inset-0 w-full h-48 my-4 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                width={460}
                height={460}
              />
            </div>
            <div className="transition-opacity duration-300 opacity-100 group-hover:opacity-0 ml-4 mb-4">
              <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="mt-2 text-[#f85606] font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        </Link>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="button-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-4 right-4 flex items-center justify-center"
        >
          <FaShoppingCart />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
