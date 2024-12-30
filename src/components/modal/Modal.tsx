import React, { useState } from "react";

type ModalProps = {
  title: string;
  onClose: () => void;
  onSave: (data: { newName: string; newLocation: string }) => void;
};

const Modal: React.FC<ModalProps> = ({ title, onClose, onSave }) => {
  const [newName, setNewName] = useState<string>("");
  const [newLocation, setNewLocation] = useState<string>("");

  const handleSave = () => {
    onSave({ newName, newLocation });
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div>
          <label className="block mb-2">Shop Name:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md mb-4"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />

          <label className="block mb-2">Location:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
