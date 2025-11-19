import React from "react";

type InstaItem = {
  id: number;
  image: string;
};

const FollowOnInstagram: React.FC = () => {
  const images: InstaItem[] = [
    { id: 1, image: "/assets/cups/Rectangle 10.png" },
    { id: 2, image: "/assets/cups/Rectangle 11.png" },
    { id: 3, image: "/assets/cups/Rectangle 12.png" },
    { id: 4, image: "/assets/cups/Rectangle 13.png" },
    { id: 5, image: "/assets/cups/Rectangle 14.png" },
    { id: 6, image: "/assets/cups/Rectangle 15.png" },
    { id: 7, image: "/assets/cups/Rectangle 16.png" },
    { id: 8, image: "/assets/cups/Rectangle 9.png" },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      {/* Section Title */}
      <h4 className="text-center text-gray-500 text-sm tracking-wide mb-1">
        Follow Us Now
      </h4>
      <h2 className="text-center text-2xl md:text-4xl font-serif font-bold text-[#4b2c2b] mb-8 md:mb-12">
        Follow on Instagram
      </h2>

      {/* Responsive Image Grid */}
      <div
        className="
          max-w-6xl mx-auto grid
          gap-4 sm:gap-5 md:gap-6 px-4
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4
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
              className="
                w-full object-cover 
                h-32 sm:h-40 md:h-52 lg:h-60
                hover:scale-105 transition duration-500
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FollowOnInstagram;
