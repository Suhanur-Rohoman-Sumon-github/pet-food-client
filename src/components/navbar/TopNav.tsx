"use client";
import { CgMail } from "react-icons/cg";
import { LiaPagerSolid } from "react-icons/lia";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FaHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import Image from "next/image";
import { useUser } from "@/context/userProvider";
import { useGetMyWishListQuery } from "@/hook/wishlist.hook";
import Link from "next/link";

const TopNav = () => {
  const { user } = useUser();
  const { data: wishlist } = useGetMyWishListQuery(user?.id || "");

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center container  pb-2 mt-1 mx-auto">
        <div className="w-fit flex items-center gap-1 container ">
          <LiaPagerSolid className="text-2xl" />
          <span className="text-sm">
            Wants to Explore Upcoming Deals on Weekends?
          </span>
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <li className="flex items-center gap-1">
              <CgMail className="text-2xl" />
              <span>support@gmail.com</span>
            </li>
            <li className="bg-slate-200 w-[2px] h-4"></li>
            <li>
              <Select defaultValue="USD">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="USD">
                      <div className="flex items-center gap-2">
                        <Image
                          className="w-4 h-[11px]"
                          src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
                          alt=""
                          width={460}
                          height={460}
                        />
                        <span>USD</span>
                      </div>
                    </SelectItem>
                    {/* Add other currencies */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </li>
            <li className="bg-slate-200 w-[2px] h-4"></li>
            <Link href="/wishList">
              <li className="flex items-center gap-2">
                <FaHeart className="text-red-500" />
                <span>Wishlist</span>
                <span className="text-[#f85606] rounded-full">
                  {wishlist?.length}
                </span>
              </li>
            </Link>
            <li className="bg-slate-200 w-[2px] h-4"></li>
            <li className="flex items-center gap-2">
              <GoGitCompare />
              <span>Compare</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden justify-between items-center container mx-auto pb-2 mt-1">
        <div className="flex items-center gap-2">
          <LiaPagerSolid className="text-2xl" />
          {/* Remove the text in mobile view */}
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <CgMail className="text-xl" />
          </li>
          <Link href="/wishList">
            <li className="flex items-center gap-1">
              <FaHeart className="text-red-500" />
              <span className="text-[#f85606] rounded-full">
                {wishlist?.length}
              </span>
            </li>
          </Link>
          <li>
            <GoGitCompare className="text-xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
