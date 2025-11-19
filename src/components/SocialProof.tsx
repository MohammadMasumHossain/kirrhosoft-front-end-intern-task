import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  photo: string;
  feedback: string;
};

const SocialProof: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Alice Johnson",
      role: "Coffee Lover",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      feedback: "The coffee here is amazing! I can’t start my day without it.",
    },
    {
      name: "Mark Thompson",
      role: "Regular Customer",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback: "Friendly staff and cozy atmosphere. Highly recommend!",
    },
    {
      name: "Sophie Lee",
      role: "Barista Enthusiast",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
      feedback: "Best espresso in town. I always bring my friends here!",
    },
    {
      name: "Daniel Smith",
      role: "Remote Worker",
      photo: "https://randomuser.me/api/portraits/men/54.jpg",
      feedback: "Perfect spot to work and enjoy coffee. Great Wi-Fi too!",
    },
    {
      name: "Emma Watson",
      role: "Coffee Connoisseur",
      photo: "https://randomuser.me/api/portraits/women/12.jpg",
      feedback: "I love trying different brews here. Quality is always top-notch.",
    },
    {
      name: "James Wilson",
      role: "Student",
      photo: "https://randomuser.me/api/portraits/men/65.jpg",
      feedback: "Affordable and delicious coffee. My go-to place for study sessions!",
    },
    {
      name: "Olivia Brown",
      role: "Food Blogger",
      photo: "https://randomuser.me/api/portraits/women/22.jpg",
      feedback: "The ambiance and coffee make it perfect for my content creation.",
    },
  ];

   const logos = ["/assets/more/logo1.png"];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
  };

  return (
    <section className="bg-gray-50 py-10 px-5 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Trusted by Coffee Lovers
      </h2>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Logo ${idx}`}
            className="h-12 md:h-16 object-contain filter grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>

      {/* Horizontal scrolling testimonials */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }} // move left by 50% of content width
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {/* Duplicate testimonials to make loop seamless */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 shrink-0 w-80 flex flex-col items-center text-center transform transition hover:-translate-y-2 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 mb-4">"{t.feedback}"</p>
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
