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

const MiddleNav = () => {
  const { setIsLoading: userLoading, setUser, user } = useUser();
  const handleLogout = () => {
    logout();
    userLoading(true);
    setUser(null);
  };

  return (
    <div className="flex justify-between items-center py-6 text-white container mx-auto">
      <div>
        {" "}
        <p className="text-3xl font-semibold text-center">
          {" "}
          <Link href={"/"}>Pet-Haven</Link>
        </p>
      </div>
      <div className="flex-1 flex items-center mx-24 relative">
        <Input
          placeholder="Search products"
          className="bg-slate-100 rounded-e-none py-5"
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border bg-[#f85606] px-8 py-3">
          <LiaSearchSolid />
        </button>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-8">
              <div className="relative">
                <FaShoppingCart className="h-8 w-8" />
                <p className="absolute bottom-5 -right-4 text-xs bg-[#FF3838] px-2 border rounded-full  text-[#FFF]">
                  {4}
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      className=""
                      src={user?.avatar || "https://github.com/shadcn.png"}
                    />
                    <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white text-black">
                  <DropdownMenuItem>
                    <Link href="/account">My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/orders">Order History</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href={"/login"}>
                <button className="button-primary">Login</button>
              </Link>
              <Link href={"/register"}>
                <button className="button-secondary">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
