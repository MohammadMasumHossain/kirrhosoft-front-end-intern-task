import React from "react";

type InstaItem = {
  id: number;
  image: string;
};

const FollowOnInstagram: React.FC = () => {
  const images: InstaItem[] = [
    { id: 1, image: "/src/assets/cups/Rectangle 10.png" },
    { id: 2, image: "/src/assets/cups/Rectangle 11.png" },
    { id: 3, image: "/src/assets/cups/Rectangle 12.png" },
    { id: 4, image: "/src/assets/cups/Rectangle 13.png" },
    { id: 5, image: "/src/assets/cups/Rectangle 14.png" },
    { id: 6, image: "/src/assets/cups/Rectangle 15.png" },
    { id: 7, image: "/src/assets/cups/Rectangle 16.png" },
    { id: 8, image: "/src/assets/cups/Rectangle 9.png" },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Section Title */}
      <h4 className="text-center text-gray-500 tracking-wide mb-1">
        Follow Us Now
      </h4>
      <h2 className="text-center text-4xl font-serif font-bold text-[#4b2c2b] mb-10">
        Follow on Instagram
      </h2>

      {/* Image Grid */}
      <div
        className="
          max-w-6xl mx-auto grid gap-6 px-4
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4
        "
      >
        {images.map((item) => (
          <div
            key={item.id}
            className="
              overflow-hidden rounded-xl shadow-md
              hover:shadow-lg bg-white
              transition duration-300
            "
          >
            <img
              src={item.image}
              alt="Instagram Coffee"
              className="w-full h-52 object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FollowOnInstagram;
