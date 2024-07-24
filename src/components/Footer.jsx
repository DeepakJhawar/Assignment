import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-2">Springdale Public School</h2>
          <p className="text-sm mb-2">© {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
          <p className="text-sm mb-2">1234 School St, City, State, ZIP</p>
          <p className="text-sm">Phone: (123) 456-7890 | Email: <a href="mailto:contact@springdale.edu" className="text-coral-400 hover:underline">contact@springdale.edu</a></p>
        </div>
        <div className="flex flex-row items-center space-y-0 space-x-6">
          <button href="#" className="text-white hover:text-zinc-900 hover:bg-white transition-colors duration-300 rounded-full p-1.5" aria-label="Facebook">
            <FaFacebookF size={24} />
          </button>
          <button href="#" className="text-white hover:text-zinc-900 hover:bg-white transition-colors duration-300 rounded-full p-1.5" aria-label="Twitter">
            <FaTwitter size={24} />
          </button>
          <button href="#" className="text-white hover:text-zinc-900 hover:bg-white transition-colors duration-300 rounded-full p-1.5" aria-label="LinkedIn">
            <FaLinkedinIn size={24} />
          </button>
          <button href="#" className="text-white hover:text-zinc-900 hover:bg-white transition-colors duration-300 rounded-full p-1.5" aria-label="Instagram">
            <FaInstagram size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
