import React from "react";

type PlanType = {
  name: string;
  price: string;
  desc: string;
  button: string;
  highlight?: boolean;
};

const Plan: React.FC = () => {
  const plans: PlanType[] = [
    {
      name: "Starter",
      price: "$5",
      desc: "Perfect for a quick morning boost.",
      button: "Choose Starter",
    },
    {
      name: "Pro",
      price: "$12",
      desc: "Ideal for regular coffee lovers.",
      button: "Choose Pro",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$25",
      desc: "Great for sharing and coffee enthusiasts.",
      button: "Choose Enterprise",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-5 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Pricing Plans
      </h2>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl border p-6 shadow-md transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl ${
              plan.highlight
                ? "bg-gradient-to-br from-amber-500 to-yellow-500 text-white scale-105"
                : "bg-white text-gray-800"
            }`}
          >
            {/* Optional Badge */}
            {plan.highlight && (
              <span className="absolute top-3 right-3 bg-white text-amber-700 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                Most Popular
              </span>
            )}

            <h3
              className={`text-xl font-semibold mb-3 ${
                plan.highlight ? "text-white" : "text-gray-800"
              }`}
            >
              {plan.name}
            </h3>

            <p
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                plan.highlight ? "text-white" : "text-amber-600"
              }`}
            >
              {plan.price}
            </p>

            <p
              className={`mb-6 text-sm md:text-base opacity-90 ${
                plan.highlight ? "text-white" : "text-gray-600"
              }`}
            >
              {plan.desc}
            </p>

            <button
              className={`w-full font-semibold py-2 rounded-md transition transform duration-300 hover:scale-105 ${
                plan.highlight
                  ? "bg-white text-amber-700 hover:bg-gray-100"
                  : "bg-amber-600 text-white hover:bg-amber-700"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plan;
