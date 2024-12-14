import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  FaUser,
  FaUsers,
  FaProductHunt,
  FaPlus,
  FaEdit,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { FaArrowLeft } from "react-icons/fa6";

export function AdminSidebar() {
  return (
    <Sidebar className="w-64 bg-white text-gray-800 shadow-lg border-r border-gray-200">
      {/* Sidebar Header */}
      <SidebarHeader>
        <h1 className="text-xl font-semibold text-center py-5 tracking-wide border-b border-gray-300">
          Admin Panel
        </h1>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        {/* Dashboard Link */}
        <SidebarMenuItem>
          <Link
            href="/admin/admin-home"
            className="flex items-center gap-3 px-5 py-3 text-gray-800 hover:bg-gray-100 rounded-md transition"
          >
            <SiGoogleanalytics className="text-blue-600" size={18} />
            <span>Dashboard</span>
          </Link>
        </SidebarMenuItem>

        {/* User Management Section */}
        <SidebarGroup>
          <h2 className="px-5 pt-6 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            User Management
          </h2>
          <SidebarMenuItem>
            <Link
              href="/admin/userManagement/users"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <FaUsers className="text-blue-500" size={18} />
              <span>All Users</span>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link
              href="/admin/userManagement/create-admin"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <FaUser className="text-yellow-500" size={18} />
              <span>Create Admin</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link
              href="/admin/userManagement/create-vendor"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <FaUser className="text-yellow-500" size={18} />
              <span>Create Vendor</span>
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
              href="/admin/productManagement/all-products"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <FaProductHunt className="text-purple-500" size={18} />
              <span>All Products</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link
              href="/admin/productManagement/create-products"
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 rounded-md transition"
            >
              <FaPlus className="text-green-500" size={18} />
              <span>Create Product</span>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link
              href="/admin/productManagement/update-products"
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
              href="/admin/settings"
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
