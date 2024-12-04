import Image from "next/image";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

type TShop = {
  id: string;
  name: string;
  location: string;
  bannerImage: string;
  logo: string;
  rating: number;
  topCategories: string[];
};

const BestSellerShopCard = ({ shop }: { shop: TShop }) => {
  return (
    <div className="border rounded-lg overflow-hidden group  transition-all duration-300">
      {/* Banner Image */}
      <div className="relative">
        <Image
          src={shop.bannerImage}
          alt={`${shop.name} Banner`}
          className="w-full h-40 object-cover"
          width={400}
          height={160}
        />
        {/* Shop Logo */}
        <div className="absolute -bottom-6 left-4 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={shop.logo}
            alt={`${shop.name} Logo`}
            className="w-full h-full object-cover"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div className="pt-10 px-4 pb-4">
        <h3 className="text-xl font-semibold">{shop.name}</h3>
        <div className="flex items-center space-x-2 text-gray-600 text-sm mt-2">
          <FaMapMarkerAlt className="text-red-500" />
          <p>{shop.location}</p>
        </div>
        <div className="flex items-center space-x-1 text-yellow-400 mt-2">
          <FaStar />
          <p className="text-gray-700">{shop.rating.toFixed(1)}</p>
        </div>
        <div className="mt-3">
          <h4 className="font-medium text-sm text-gray-500">Top Categories:</h4>
          <ul className="list-disc list-inside text-gray-700 text-sm">
            {shop.topCategories.map((category, idx) => (
              <li key={idx}>{category}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-4 py-3 flex items-center justify-between">
        <button className="button-primary">Follow Store</button>
        <button className="button-secondary">Visit Store</button>
      </div>
    </div>
  );
};

export default BestSellerShopCard;
