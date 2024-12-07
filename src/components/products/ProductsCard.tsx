import Image from "next/image";
import Link from "next/link";
import { FaExchangeAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
export type TProduct = {
  _id: string;
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
  return (
    <Link href={`/products/${product._id}`}>
      <div className="border rounded-lg overflow-hidden relative group transition-all duration-300 transform ">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <Image
            src={product?.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-48 my-4  object-cover group-hover:opacity-0 transition-opacity duration-300"
            width={460}
            height={460}
          />
          <Image
            src={product?.images[1]}
            alt={`${product.name} (hover)`}
            className="absolute inset-0 w-full h-48 my-4  object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            width={460}
            height={460}
          />
        </div>
        <div className="absolute top-2 right-2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
          <FaHeart className="text-[#f85606] hover:text-red-500 cursor-pointer transition-colors duration-200" />
          <FaExchangeAlt className="text-[#f85606] hover:text-blue-500 cursor-pointer transition-colors duration-200" />
        </div>
        {/* Product Info */}
        <div className="transition-opacity duration-300 opacity-100 group-hover:opacity-0 ml-4 mb-4">
          <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">{product.category}</p>
          <p className="mt-2 text-[#f85606] font-semibold">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <button className="button-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 left-4 right-4 flex item-center">
          <FaShoppingCart />
          Add To Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
