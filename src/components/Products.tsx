import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

type Product = {
  id: number;
  name: string;
  chef: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Americano Coffee",
    chef: "Mr. Matin Paul",
    price: "890 Taka",
    image: "/assets/1.png",
  },
  {
    id: 2,
    name: "Black Coffee",
    chef: "Mr. Nibra Sweden",
    price: "890 Taka",
    image: "/assets/2.png",
  },
  {
    id: 3,
    name: "Espresso Coffee",
    chef: "Mrs. Morisha",
    price: "890 Taka",
    image: "/assets/3.png",
  },
  {
    id: 4,
    name: "Cappuccino Coffee",
    chef: "Mr. Moruti",
    price: "890 Taka",
    image: "/assets/4.png",
  },
  {
    id: 5,
    name: "Macchiato",
    chef: "Mr. Moruti",
    price: "890 Taka",
    image: "/assets/5.png",
  },
  {
    id: 6,
    name: "Decaf Coffee",
    chef: "Mr. Moruti",
    price: "890 Taka",
    image: "/assets/6.png",
  },
];

const Products: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-sm text-gray-400">--- Sip & Savor ---</h2>
      <h1 className="text-center text-4xl font-bold font-serif text-[#4b2c2b] mb-8">
        Our Popular Products
      </h1>

      <div className="text-center mb-10">
        <button className="bg-[#d2b48c] text-[#4b2c2b] font-medium px-4 py-2 rounded-md hover:bg-[#c5a178] duration-300">
          Add Coffee
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 px-4
      sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#f7efea] rounded-xl p-6 flex justify-between items-center shadow 
            hover:-translate-y-1 hover:shadow-md transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-28 object-contain"
            />

            <div className="flex-1 px-5">
              <p className="font-semibold">
                <span className="font-bold">Name:</span> {product.name}
              </p>
              <p>
                <span className="font-bold">Chef:</span> {product.chef}
              </p>
              <p>
                <span className="font-bold">Price:</span> {product.price}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="bg-[#e0cc9f] p-2 rounded-md hover:bg-[#d6bc8e] transition">
                <Eye size={18} />
              </button>
              <button className="bg-[#4b2c2b] text-white p-2 rounded-md hover:bg-[#351e1d] transition">
                <Edit size={18} />
              </button>
              <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
                <Trash2 size={18} />
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
