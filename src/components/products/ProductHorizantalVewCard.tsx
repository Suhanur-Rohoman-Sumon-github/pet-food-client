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

const HorazentalCard = ({ product }: { product: TProduct }) => {
  return (
    <Link href={`/products/${product._id}`}>
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
          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <FaShoppingCart className="text-[#f85606]" />
            </button>
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <FaHeart className="text-[#f85606]" />
            </button>
            <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
              <FaExchangeAlt className="text-[#f85606]" />
            </button>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-2/3 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
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
  );
};

export default HorazentalCard;
