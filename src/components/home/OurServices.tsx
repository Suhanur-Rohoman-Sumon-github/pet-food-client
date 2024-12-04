import React from "react";
import {
  FaExchangeAlt,
  FaHeadset,
  FaMoneyBillWave,
  FaTags,
  FaTruck,
} from "react-icons/fa";

const OurServices = () => {
  const features = [
    {
      id: 1,
      icon: <FaTruck className="text-3xl text-blue-600" />,
      title: "Home Delivery",
      description: "Fast and secure delivery to your doorstep.",
    },
    {
      id: 2,
      icon: <FaHeadset className="text-3xl text-green-600" />,
      title: "24/7 Support",
      description: "Always available to assist you anytime.",
    },
    {
      id: 3,
      icon: <FaTags className="text-3xl text-red-600" />,
      title: "Big Savings",
      description: "Great deals on all your favorite products.",
    },
    {
      id: 4,
      icon: <FaMoneyBillWave className="text-3xl text-yellow-600" />,
      title: "Money Back",
      description: "Guaranteed refunds for returns.",
    },
    {
      id: 5,
      icon: <FaExchangeAlt className="text-3xl text-purple-600" />,
      title: "Exchange Offer",
      description: "Easy exchanges on eligible products.",
    },
  ];
  return (
    <div>
      <section className="py-8 mt-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col items-center text-center p-4 bg-white ${
                feature.id !== 5 ? "border-e-2" : ""
              }`}
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
