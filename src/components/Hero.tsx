import React from "react";
import heroBg from "../assets/more/3.png";

type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

const Hero: React.FC<HeroSectionProps> = ({
  title = "Would you like a Cup of Delicious Coffee?",
  subtitle = "It’s coffee time — Sip & Savor — Relaxation in every sip! Get the nostalgia back!! Your companion of every moment! Enjoy the beautiful moments and make them memorable.",
  buttonText = "Order A cup of Coffee",
}) => {
  return (
    <div
      className="w-full h-[80vh] md:h-[90vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative  max-w-2xl text-center text-white px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          {title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 leading-relaxed">
          {subtitle}
        </p>

        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-600 hover:bg-yellow-700 rounded-md font-medium transition-all duration-300 text-sm sm:text-base">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Hero;
