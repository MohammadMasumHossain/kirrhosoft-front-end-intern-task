import React from "react";
import {
  FaChartBar,
  FaMobileAlt,
  FaReceipt,
  FaSyncAlt,
  FaUsersCog,
  FaBoxOpen,
} from "react-icons/fa";

type FeatureItem = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeaturesSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 1,
      icon: <FaChartBar size={30} />,
      title: "Real-Time Sales Tracking",
      description:
        "Monitor revenue, orders, and growth instantly with live dashboards.",
    },
    {
      id: 2,
      icon: <FaMobileAlt size={30} />,
      title: "Works Across All Devices",
      description:
        "Use your POS on tablets, phones, laptops, or desktops with seamless syncing.",
    },
    {
      id: 3,
      icon: <FaReceipt size={30} />,
      title: "Smart Billing & Invoicing",
      description:
        "Generate quick bills, print receipts, and manage modern digital invoices.",
    },
    {
      id: 4,
      icon: <FaSyncAlt size={30} />,
      title: "Cloud Sync & Backup",
      description:
        "Your data is automatically synced and backed up securely in the cloud.",
    },
    {
      id: 5,
      icon: <FaUsersCog size={30} />,
      title: "Role-Based Access",
      description:
        "Create admin, cashier, or manager roles with flexible permissions.",
    },
    {
      id: 6,
      icon: <FaBoxOpen size={30} />,
      title: "Inventory Management",
      description:
        "Track stock levels, get low-stock alerts, and sync product updates instantly.",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 px-4">
        <h4 className="text-gray-500 tracking-widest uppercase text-sm md:text-base">
          Powerful Features
        </h4>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2">
          Why Our POS System Stands Out
        </h2>
      </div>

      {/* Feature Cards */}
      <div
        className="
          max-w-7xl mx-auto px-4
          grid gap-6 sm:gap-8
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        "
      >
        {features.map((feature) => (
          <div
            key={feature.id}
            className="
              bg-white p-6 md:p-7 rounded-xl border shadow-sm 
              hover:shadow-xl hover:-translate-y-2
              transition duration-300 cursor-default
            "
          >
            <div className="text-rose-600 mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
