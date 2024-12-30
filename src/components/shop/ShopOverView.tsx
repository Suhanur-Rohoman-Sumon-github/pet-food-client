import React from "react";
import Image from "next/image";

const ShopOverview = () => {
  // Fake data for the shop
  const shop = {
    name: "Gadget Haven",
    description: "Your one-stop shop for the latest gadgets and accessories.",
    ownerName: "John Doe",
    contactEmail: "contact@gadgethaven.com",
    phoneNumber: "+1-800-555-1234",
    location: "San Francisco, CA, USA",
    establishedDate: "2015-08-20",
    uniqueTags: ["Electronics", "Innovative", "High-Tech"],
    rating: 4.8,
    coverPhoto: "https://via.placeholder.com/1600x400?text=Shop+Cover+Photo",
    profilePicture: "https://via.placeholder.com/150?text=Shop+Profile",
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold text-gray-800">{shop.name}</h1>
        <p className="text-gray-500 text-lg">{shop.description}</p>
        <p className="text-gray-600 mt-2">
          Located at: <span className="font-medium">{shop.location}</span>
        </p>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Owner</h2>
          <p className="text-gray-600">{shop.ownerName}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Contact</h2>
          <p className="text-gray-600">Email: {shop.contactEmail}</p>
          <p className="text-gray-600">Phone: {shop.phoneNumber}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Established</h2>
          <p className="text-gray-600">{shop.establishedDate}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Rating</h2>
          <p className="text-gray-600 text-lg font-bold">{shop.rating} ★</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Unique Tags</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {shop.uniqueTags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopOverview;
