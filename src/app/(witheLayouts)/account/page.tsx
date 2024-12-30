"use client";
import React, { useState } from "react";
import Link from "next/link";

const MyAccountPage = () => {
  // State to track the selected section
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4  border p-6">
        <h2 className="text-2xl font-bold mb-6">My Account</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveSection("profile")}
              className="block py-2 px-4 rounded-lg hover:border bg-gray-50 "
            >
              My Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("password")}
              className="block py-2 px-4 rounded-lg hover:border bg-gray-50 "
            >
              Change Password
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("order-history")}
              className="block py-2 px-4 rounded-lg hover:border bg-gray-50 "
            >
              Order History
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        {/* Conditionally render content based on the active section */}
        {activeSection === "profile" && (
          <div id="profile" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">My Profile</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  defaultValue="johndoe@example.com"
                />
              </div>
              <button type="submit" className="button-primary w-full ">
                Update Profile
              </button>
            </form>
          </div>
        )}

        {activeSection === "password" && (
          <div id="password" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Change Password</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <button type="submit" className="w-full button-primary">
                Update Password
              </button>
            </form>
          </div>
        )}

        {activeSection === "order-history" && (
          <div id="order-history" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-4">Order History</h2>
            <ul className="space-y-4">
              <li className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-bold">Order #12345</p>
                  <p className="text-gray-500">Placed on: 2024-12-01</p>
                </div>
                <button className="button-primary py-1 px-3 rounded-lg text-sm">
                  View Details
                </button>
              </li>
              <li className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-bold">Order #12346</p>
                  <p className="text-gray-500">Placed on: 2024-12-15</p>
                </div>
                <button className="button-primary py-1 px-3 rounded-lg text-sm">
                  View Details
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAccountPage;
