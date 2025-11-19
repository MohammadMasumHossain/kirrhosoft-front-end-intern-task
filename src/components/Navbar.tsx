
import { Menu } from "lucide-react";



const Navbar = () => {
  return (
    <nav className="w-full bg-[#2d1f1a] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6  py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/more/logo1.png" // update path accordingly
            alt="Espresso Emporium Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-semibold tracking-wide">
            Espresso Emporium
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">Menu</a>
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden p-2 hover:bg-white/10 rounded-lg">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
