"use client";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

type TSpecialProduct = {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  timer: string;
};

const SpecialProductCard = ({ product }: { product: TSpecialProduct }) => {
  const [timeLeft, setTimeLeft] = useState<string>(product.timer);

  const timeToSeconds = (time: string): number => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const secondsToTime = (seconds: number): string => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };
  useEffect(() => {
    let seconds = timeToSeconds(timeLeft);

    const interval = setInterval(() => {
      if (seconds > 0) {
        seconds -= 1;
        setTimeLeft(secondsToTime(seconds));
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="md:flex items-center border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div
        className="w-1/2 h-[280px] bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      />

      <div className="md:w-1/2 p-6 relative flex flex-col justify-between">
        <div>
          <h4 className="text-sm text-gray-500">{product.category}</h4>
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-lg font-semibold text-[#f85606] mt-4 line-through">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-lg font-semibold text-[#f85606] mt-1">
            ${product.price.toFixed(2)}
          </p>
          <p className="mb-4 text-xl my-4">
            Time Remaining: <span className="text-[#f85606]">{timeLeft}</span>
          </p>
        </div>
        <button className="button-primary flex items-center">
          {" "}
          <FaShoppingCart />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SpecialProductCard;
