"use client";
import React, { useState } from "react";

import Image from "next/image";
import { shop } from "@/types";

const UpdateShopPage = () => {
  const [shop, setShop] = useState<shop>({
    id: "1",
    name: "Best Pet Shop",
    location: "123 Main Street, City",
    cover_photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTLRC8Q2CHzfjB3HF-6QpGr5B9KGLxDancA&s",
    profile_picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmu97XQ8T7AglouJJvJnf_tDN5YzlwGuqwlA&s",
    ratings: 4,
    follower: [],
    products: [],
    created_at: new Date(),
    status: "open",
    vendorId: "vendor123",
    
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showCoverModal, setShowCoverModal] = useState(false);

  const handleUpdateProfilePicture = (newPicture: string) => {
    setShop({ ...shop, profile_picture: newPicture });
    setShowProfileModal(false);
  };

  const handleUpdateCoverPhoto = (newPhoto: string) => {
    setShop({ ...shop, cover_photo: newPhoto });
    setShowCoverModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto py-6">
        {/* Cover Photo */}
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image
            src={shop.cover_photo || ""}
            alt="Cover Photo"
            fill
            className="object-cover"
          />
          <button
            onClick={() => setShowCoverModal(true)}
            className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update Cover Photo
          </button>
        </div>

        {/* Profile Picture */}
        <div className="relative w-32 h-32 mt-[-4rem] rounded-full mx-auto border-4 border-white overflow-hidden">
          <Image
            src={shop.profile_picture || ""}
            alt="Profile Picture"
            fill
            className="object-cover"
          />
          <button
            onClick={() => setShowProfileModal(true)}
            className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-full"
          >
            Edit
          </button>
        </div>

        {/* Shop Info */}
        <div className="text-center mt-6">
          <h1 className="text-3xl font-semibold">{shop.name}</h1>
          <p className="text-gray-600">{shop.location}</p>
          <p className="text-yellow-500">⭐ {shop.ratings} Ratings</p>
        </div>

        {/* Modals */}
        {showProfileModal && (
          <Modal
            title="Update Profile Picture"
            onClose={() => setShowProfileModal(false)}
            onSave={(newImage: string) => handleUpdateProfilePicture(newImage)}
          />
        )}
        {showCoverModal && (
          <Modal
            title="Update Cover Photo"
            onClose={() => setShowCoverModal(false)}
            onSave={(newImage: string) => handleUpdateCoverPhoto(newImage)}
          />
        )}
      </div>
    </div>
  );
};

interface ModalProps {
  title: string;
  onClose: () => void;
  onSave: (newImage: string) => void;
}

const Modal = ({ title, onClose, onSave }: ModalProps) => {
  const [newImage, setNewImage] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <input
          type="text"
          placeholder="Enter image URL"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(newImage)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateShopPage;
