import React from "react";
import { FaCashRegister, FaMobileAlt, FaUserFriends, FaChartBar, FaClipboardList, FaBox } from "react-icons/fa";

const POSFeatures: React.FC = () => {
  const features = [
    {
      title: "Smart Order Management",
      icon: <FaClipboardList size={32} />,
      description:
        "Easily manage dine-in, takeaway, and online orders with a fast and clean interface.",
    },
    {
      title: "Real-Time Sales Tracking",
      icon: <FaChartBar size={32} />,
      description:
        "View daily and monthly sales summaries with auto-generated analytics.",
    },
    {
      title: "Multi-Device Sync",
      icon: <FaMobileAlt size={32} />,
      description:
        "Access your POS from desktop, tablet, or mobile with real-time synchronization.",
    },
    {
      title: "Inventory & Stock Alerts",
      icon: <FaBox size={32} />,
      description:
        "Automatically track stock usage and receive low-stock warnings to avoid shortages.",
    },
    {
      title: "Customer Loyalty & Rewards",
      icon: <FaUserFriends size={32} />,
      description:
        "Store customer profiles and offer points or discounts to keep customers coming back.",
    },
    {
      title: "Staff & Shift Management",
      icon: <FaCashRegister size={32} />,
      description:
        "Manage staff roles, access permissions, and monitor shift performance easily.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Why Our POS System Stands Out
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-brown-600 mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default POSFeatures;
