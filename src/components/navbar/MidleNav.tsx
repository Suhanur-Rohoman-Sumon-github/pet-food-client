/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { Input } from "../ui/input";
import { useUser } from "@/context/userProvider";
import { LiaSearchSolid } from "react-icons/lia";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/service/authServices";
import { FaShoppingCart } from "react-icons/fa";
import { useGetMyCardQuery } from "@/hook/card.hook";
import { useEffect, useState } from "react";

const MiddleNav = () => {
  const { setIsLoading: userLoading, setUser, user } = useUser();
  const [searchData, setSearchData] = useState("");
  const { data: MyCart, refetch } = useGetMyCardQuery(user?.id ? user?.id : "");

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleLogout = () => {
    logout();
    userLoading(true);
    setUser(null);
  };

  return (
    <div className="flex flex-wrap justify-between items-center py-6 text-white container mx-auto md:px-[125px] gap-2 ">
      {/* Brand Name */}
      <div className="mb-4 md:mb-0">
        <p className="text-xl md:text-3xl font-semibold text-center hidden md:block">
          <Link href={"/"}>Pet-Haven</Link>
        </p>
        <p className="text-xl md:hidden font-semibold text-center">
          <Link href={"/"}>PH</Link>
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex items-center relative mb-4 md:mb-0 md:mx-8">
        <Input
          placeholder="Search products"
          className="bg-slate-100 rounded-e-none py-2 md:py-5 text-black w-full"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <Link href={`/products?searchTerm=${searchData}`}>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border bg-[#f85606] px-4 py-2 md:px-8 md:py-3">
            <LiaSearchSolid className="text-lg" />
          </button>
        </Link>
      </div>

      {/* User Actions */}
      <div className="flex gap-4 md:gap-8 items-center">
        {user ? (
          <div className="flex items-center gap-4 md:gap-8">
            {/* Cart */}
            <div className="relative">
              <Link href={"/cart"}>
                <FaShoppingCart className="h-6 w-6 md:h-8 md:w-8" />
                <p className="absolute bottom-5 -right-3 md:-right-4 text-xs bg-[#FF3838] px-2 border rounded-full text-white">
                  {MyCart?.products?.length}
                </p>
              </Link>
            </div>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.avatar || "https://github.com/shadcn.png"}
                  />
                  <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white text-black">
                <DropdownMenuItem>
                  {user.role === "ADMIN" && (
                    <Link href="/admin/admin-home">My Account</Link>
                  )}
                  {user.role === "VENDOR" && (
                    <Link href="/vendor/vendor-home">My Account</Link>
                  )}
                  {user.role === "USER" && (
                    <Link href="/account">My Account</Link>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/orders">Order History</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href={"/login"}>
              <button className="button-primary py-2 px-4 md:py-3 md:px-6">
                Login
              </button>
            </Link>
            <Link href={"/register"}>
              <button className="button-secondary py-2 px-4 md:py-3 md:px-6">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiddleNav;
