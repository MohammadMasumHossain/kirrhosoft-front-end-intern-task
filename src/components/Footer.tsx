import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2d1f1a] bg-cover bg-center py-16 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-24 text-center md:text-left">

        {/* Section 1: Brand */}
        <div>
          <img
            src="/src/assets/more/logo1.png"
            alt="Coffee Logo"
            className="w-16 h-16 mx-auto md:mx-0 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-3 text-white">
            Espresso Emporium
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Always ready to be your friend. Come & contact us to share your
            memorable moments, to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a className="hover:text-yellow-400 transition" href="https://www.facebook.com/hm.rana.161" aria-label="Facebook"><Facebook size={22} /></a>
            <a className="hover:text-yellow-400 transition" href="https://x.com/" aria-label="Twitter"><Twitter size={22} /></a>
            <a className="hover:text-yellow-400 transition" href="https://www.instagram.com/masum3883/" aria-label="Instagram"><Instagram size={22} /></a>
            <a className="hover:text-yellow-400 transition" href="https://www.linkedin.com/in/mohammad-masum-hossain/" aria-label="LinkedIn"><Linkedin size={22} /></a>
          </div>
        </div>

        {/* Section 2: Links */}
        <div>
          <h3 className="text-xl font-semibold mt-18 mb-4 text-white">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
            <a href="#privacy" className="hover:text-yellow-400 transition">Privacy Policy</a>
          </nav>
        </div>

        {/* Section 3: Contact */}
        <div>
          <h3 className="text-xl font-semibold mt-18 mb-4 text-white">Get in Touch</h3>
          <div className="text-sm space-y-3 text-gray-300">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={18} className="text-yellow-400" /> +88 01533 333 333
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <Mail size={18} className="text-yellow-400" /> info@gmail.com
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={18} className="text-yellow-400" /> 72, Wall Street, King Road, Dhaka
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <p className="text-xs text-center mt-10 text-gray-400">
        © {new Date().getFullYear()} Espresso Emporium. All rights reserved.
      </p>
    </footer>
  );
}
