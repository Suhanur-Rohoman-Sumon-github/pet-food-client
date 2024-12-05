"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

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
  return (
    <div className="relative   border shadow-md mb-4">
      <div className=" flex  gap-10 items-center   bg-white ">
        <div className="lg:w-[400px] flex items-center gap-2 py-2 rounded-md">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="button-primary flex items-center gap-2"
            >
              Shop Categories
              <FaBars />
            </button>
            {isOpen && (
              <div className="absolute mt-2 w-52 bg-white   border border-gray-200 shadow-md transform translate-x-0 duration-200">
                <ul className="flex flex-col">
                  <li className="hover:bg-gray-100">
                    <Link href="/" className="block px-4 py-2">
                      Home
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/products" className="block px-4 py-2">
                      Products
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/shop" className="block px-4 py-2">
                      Shops
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/contact" className="block px-4 py-2">
                      Contact
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/contact" className="block px-4 py-2">
                      Contact
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/contact" className="block px-4 py-2">
                      Contact
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/contact" className="block px-4 py-2">
                      Contact
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/contact" className="block px-4 py-2">
                      Contact
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/contact" className="block px-4 py-2">
                      Contact
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/contact" className="block px-4 py-2">
                      Contact
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/contact" className="block px-4 py-2">
                      Contact
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/contact" className="block px-4 py-2">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-8  ml-[30px] items-center">
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
