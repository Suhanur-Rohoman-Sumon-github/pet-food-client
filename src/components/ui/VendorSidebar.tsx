import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { FaProductHunt, FaPlus, FaEdit, FaCog } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { TbShoppingCartDiscount } from "react-icons/tb";

import { FaArrowLeft } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";

export function VendorSidebar() {
  return (
    <Sidebar className="w-64 bg-white text-gray-800 shadow-lg border-r border-gray-200">
      <SidebarHeader>
        <h1 className="text-xl font-semibold text-center py-5 tracking-wide border-b border-gray-300">
          Vendor Dashboard
        </h1>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenuItem>
          <Link
            href="/vendor/vendor-home"
            className="flex items-center gap-3 px-5 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition"
          >
            <SiGoogleanalytics className="text-blue-600" size={18} />
            <span>Dashboard</span>
          </Link>
        </SidebarMenuItem>

        <SidebarGroup>
          <h2 className="px-5 pt-6 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Shop Management
          </h2>
          <SidebarMenuItem>
            <Link
              href="/vendor/create-shop"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <CiShop className="text-blue-500" size={18} />
              <span>create shops </span>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link
              href="/vendor/update-shop"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <TbShoppingCartDiscount className="text-yellow-500" size={18} />
              <span>update shop</span>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link
              href="/vendor/my-shop"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <TbShoppingCartDiscount className="text-yellow-500" size={18} />
              <span>my shops</span>
            </Link>
          </SidebarMenuItem>
        </SidebarGroup>

        {/* Product Management Section */}
        <SidebarGroup>
          <h2 className="px-5 pt-6 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Product Management
          </h2>
          <SidebarMenuItem>
            <Link
              href="/vendor/all-products"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <FaProductHunt className="text-purple-500" size={18} />
              <span>All Products</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link
              href="/vendor/create-products"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <FaPlus className="text-green-500" size={18} />
              <span>Create Product</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link
              href="/vendor/update-products"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <FaEdit className="text-orange-500" size={18} />
              <span>Update Product</span>
            </Link>
          </SidebarMenuItem>
        </SidebarGroup>

        {/* Settings Section */}
        <SidebarGroup>
          <h2 className="px-5 pt-6 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Settings
          </h2>
          <SidebarMenuItem>
            <Link
              href="/vendor/settings"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <FaCog className="text-gray-600" size={18} />
              <span>General Settings</span>
            </Link>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="mt-auto border-t border-gray-300">
        <Link href={"/"}>
          <button className="button-secondary">
            {" "}
            <FaArrowLeft /> back to home
          </button>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
