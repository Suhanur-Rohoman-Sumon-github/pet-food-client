"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useGetSingleShopQuery } from "@/hook/shop.hook";
import { useParams } from "next/navigation";
import ProductCard, { TProduct } from "@/components/products/ProductsCard";
import { Badge } from "@/components/ui/badge";
import ShopOverview from "@/components/shop/ShopOverView";

const SingleShopPage = () => {
  const { shopId } = useParams(); // Get the shopId from the route parameters
  const [activeTab, setActiveTab] = useState("Overview"); // Manage active tab
  const [message, setMessage] = useState(""); // State for the input message
  const [chatHistory, setChatHistory] = useState<string[]>([]); // Stores chat messages

  // Fetch shop data using the custom hook
  const { data: shop, isLoading: isLoadingProducts } = useGetSingleShopQuery(
    shopId as string
  );

  // Fallback loading state
  if (isLoadingProducts) {
    return <div>Loading...</div>;
  }

  // Check if shop data is available
  if (!shop) {
    return <div>Shop not found.</div>;
  }

  // Handle sending a message
  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory((prev) => [...prev, message]); // Add message to chat history
      setMessage(""); // Clear the input field
    }
  };

  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <div className="relative h-[300px] lg:h-[400px]">
        <Image
          src={shop?.cover_photo}
          alt="Shop Banner"
          width={1600}
          height={400}
          className="w-full h-full object-cover rounded-b-lg shadow-md"
        />
        <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2">
          <Image
            src={shop?.profile_picture}
            alt={`${shop?.shopName}'s profile`}
            width={150}
            height={150}
            className="w-36 h-36 lg:w-40 lg:h-40 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className="mt-16 bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-3xl font-bold">{shop?.name}</h1>
        <p className="text-gray-600">{shop?.location}</p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <Badge className="">{`Followers: ${shop?.follower.length}`}</Badge>
          <Badge className="button-secendorary">
            {`Products: ${shop?.products?.length}`}
          </Badge>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex justify-center items-center gap-6 mt-8 bg-gray-100 p-4 rounded-lg shadow-inner">
        {["Overview", "Products", "Contact"].map((tab) => (
          <button
            key={tab}
            className={`button-primary ${
              activeTab === tab ? "button-secondary" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === "Overview" && <ShopOverview />}
        {activeTab === "Products" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">All Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {shop?.products?.map((product: TProduct) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Contact" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Message Us</h2>
            <div className="flex flex-col gap-4">
              {/* Chat History */}
              <div className="h-64 overflow-y-auto p-4 border border-gray-300 rounded-lg bg-gray-50">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg mb-2 ${
                      index % 2 === 0
                        ? "bg-blue-100 self-start"
                        : "bg-green-100 self-end"
                    }`}
                  >
                    {msg}
                  </div>
                ))}
                {chatHistory.length === 0 && (
                  <p className="text-gray-500 text-center">No messages yet.</p>
                )}
              </div>
              {/* Input Field */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Send Button */}
              <button onClick={handleSendMessage} className="button-primary">
                Send Message
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleShopPage;
