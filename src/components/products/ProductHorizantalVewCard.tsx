import { useUser } from "@/context/userProvider";
import { useAddToCartMutation } from "@/hook/card.hook";
import { useAddWishListMutation } from "@/hook/wishlist.hook";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

const HorazentalCard = ({ product }: { product: TProduct }) => {
   const { user } = useUser();
   const { mutate: addToCart } = useAddToCartMutation(
     user?.id ? user?.id : "",
     product.id
   );
   const { mutate: addToWishList } = useAddWishListMutation(
     user?.id ? user?.id : "",
     product.id
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
     } else {
       addToCart();
     }
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

  return (
    <div className="relative my-4">
      {" "}
      {/* Container is now relative */}
      <Link href={`/products/${product.id}`}>
        <div className="flex flex-row border border-gray-200 rounded-lg overflow-hidden group shadow-sm hover:shadow-lg transition-shadow bg-white">
          {/* Left Side: Product Image */}
          <div className="relative w-1/3 overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:opacity-0 transition-opacity duration-300 p-2"
              width={200}
              height={200}
            />
            <Image
              src={product.images[1]}
              alt={`${product.name} (hover)`}
              className="absolute top-0 left-0 w-full h-48 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              width={200}
              height={200}
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="w-2/3 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-xl font-semibold text-[#f85606] mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">
              {product.details}
            </p>
          </div>
        </div>
      </Link>
      {/* Add to Cart Button */}
      <div className="flex items-center gap-8">
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-6 p-2 bg-[#f85606] text-white rounded-full shadow-lg hover:bg-orange-500 transition-colors"
        >
          <FaShoppingCart />
        </button>
        <button
          onClick={handleFavorite}
          className="absolute bottom-4 right-20 p-2 bg-[#f85606] text-white rounded-full shadow-lg hover:bg-orange-500 transition-colors"
        >
          <FaHeart className="text-lg" />
        </button>
        {/* Compare Icon (Always Visible) */}
        <button
          onClick={handleCompare}
          className="absolute bottom-4 right-32 p-2 bg-[#f85606] text-white rounded-full shadow-lg hover:bg-orange-500 transition-colors"
        >
          <FaExchangeAlt className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default HorazentalCard;
