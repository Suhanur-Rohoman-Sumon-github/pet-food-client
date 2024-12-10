"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import {
  FaBars,
  FaCat,
  FaDog,
  FaDove,
  FaFish,
  FaHamburger,
  FaHorse,
} from "react-icons/fa";
import { LucideRabbit, LucideTurtle } from "lucide-react";
import { GiReptileTail } from "react-icons/gi";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [pathname]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const categories = [
    { name: "Dog Food", slug: "dog-food", icon: <FaDog /> },
    { name: "Cat Food", slug: "cat-food", icon: <FaCat /> },
    { name: "Bird Food", slug: "bird-food", icon: <FaDove /> },
    { name: "Fish Food", slug: "fish-food", icon: <FaFish /> },
    { name: "Rabbit Food", slug: "rabbit-food", icon: <LucideRabbit /> },
    { name: "Hamster Food", slug: "hamster-food", icon: <FaHamburger /> },
    { name: "Turtle Food", slug: "turtle-food", icon: <LucideTurtle /> },
    { name: "Horse Feed", slug: "horse-feed", icon: <FaHorse /> },
    { name: "Reptile Food", slug: "reptile-food", icon: <GiReptileTail /> },
  ];

  return (
    <div className="relative border shadow-md mb-4">
      <div className="flex md:gap-10 gap-4 items-center bg-white md:justify-between">
        <div className="lg:w-[400px] flex items-center gap-2 py-2 rounded-md">
          <div className="relative hidden md:block">
            {pathname !== "/products" && (
              <button
                onClick={toggleDropdown}
                className="button-primary flex items-center gap-2 ml-2"
              >
                Shop Categories
                <FaBars />
              </button>
            )}
            {isOpen && pathname !== "/products" && (
              <div className="absolute mt-2 w-52 bg-white border border-gray-200 shadow-md transform translate-x-0 duration-200">
                <ul className="flex flex-col">
                  {categories.map((category) => (
                    <li
                      key={category.slug}
                      className="hover:bg-[#f85606] flex items-center gap-2 px-4 py-1  hover:text-[#fff] rounded-md mx-2 mt-2 "
                    >
                      <Link
                        href={`/products?category=${category.slug}`}
                        className="flex items-center gap-2 w-full p-2  text-center"
                      >
                        <p className="hover:text-[#fff]">{category.icon}</p>
                        <span>{category.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative md:hidden">
            {pathname !== "/products" && (
              <button
                onClick={toggleDropdown}
                className="button-primary flex items-center gap-2 ml-2"
              >
                Categories
                <FaBars />
              </button>
            )}
            {isOpen && pathname !== "/products" && (
              <div className="absolute mt-2 w-52 bg-white border border-gray-200 shadow-md transform translate-x-0 duration-200">
                <ul className="flex flex-col">
                  {categories.map((category) => (
                    <li
                      key={category.slug}
                      className="hover:bg-[#f85606] flex items-center gap-2 px-4 py-1  hover:text-[#fff] rounded-md mx-2 mt-2 "
                    >
                      <Link
                        href={`/products?category=${category.slug}`}
                        className="flex items-center gap-2 w-full p-2  text-center"
                      >
                        <p className="hover:text-[#fff]">{category.icon}</p>
                        <span>{category.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex md:gap-8 gap-4 ml-[30px] items-center">
          <Link
            className={`px-4 py-2 rounded ${
              pathname === "/" ? "bg-[#f85606] text-white" : "hover:bg-gray-200"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`px-4 py-2 rounded ${
              pathname === "/shop"
                ? "bg-[#f85606] text-white"
                : "hover:bg-gray-200"
            }`}
          >
            Shops
          </Link>
          <Link
            className={`px-4 py-2 rounded ${
              pathname === "/products"
                ? "bg-[#f85606] text-white"
                : "hover:bg-gray-200"
            }`}
            href="/products"
          >
            Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
