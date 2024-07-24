import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as L } from "react-scroll";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const [isHome, setIsHome] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location.pathname]);

  return (
    <nav className="bg-teal-600 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl flex items-center">
          <img
            src="images/logo.jpeg"
            alt="school logo"
            className="inline w-10 h-10 mr-2 rounded-full"
          />
          Springdale Public School
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`lg:flex lg:items-center lg:space-x-4 absolute lg:static top-14 right-0 lg:top-0 lg:right-0 bg-teal-500 lg:bg-transparent transition-transform transform ${
            isOpen ? "block z-50" : "hidden"
          } lg:block max-h-56 w-[40%] lg:w-auto rounded-md overflow-y-scroll overflow-x-hidden lg:overflow-visible`}
        >
          <li className="lg:inline-block text-center">
            <Link
              to="/"
              className="text-white block p-4 lg:inline-block hover:text-coral-400 hover:scale-110 hover:underline transition-transform duration-200"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          {isHome && (
            <li className="lg:inline-block text-center cursor-pointer">
              <L
                to="about"
                smooth="true"
                className="text-white block p-4 lg:inline-block hover:text-coral-400 hover:scale-110 hover:underline transition-transform duration-200"
                onClick={closeMenu}
              >
                About
              </L>
            </li>
          )}
          <li className="lg:inline-block text-center">
            <Link
              to="/academics"
              smooth="true"
              className="text-white block p-4 lg:inline-block hover:text-coral-400 hover:scale-110 hover:underline transition-transform duration-200"
              onClick={closeMenu}
            >
              Academics
            </Link>
          </li>
          <li className="lg:inline-block text-center">
            <Link
              to="/admissions"
              className="text-white block p-4 lg:inline-block hover:text-coral-400 hover:scale-110 hover:underline transition-transform duration-200"
              onClick={closeMenu}
            >
              Admissions
            </Link>
          </li>
          <li className="lg:inline-block text-center">
            <Link
              to="/faculty"
              className="text-white block p-4 lg:inline-block hover:text-coral-400 hover:scale-110 hover:underline transition-transform duration-200"
              onClick={closeMenu}
            >
              Faculty
            </Link>
          </li>
          <li className="lg:inline-block text-center">
            <Link
              to="/students"
              className="text-white block p-4 lg:inline-block hover:text-coral-400 hover:scale-110 hover:underline transition-transform duration-200"
              onClick={closeMenu}
            >
              Students
            </Link>
          </li>
          <li className="lg:inline-block text-center">
            <Link
              to="/gallery"
              className="text-white block p-4 lg:inline-block hover:text-coral-400 hover:scale-110 hover:underline transition-transform duration-200"
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
          {isHome && (
            <li className="lg:inline-block text-center">
              <L
                to="contact"
                smooth="true"
                className="text-white block p-4 cursor-pointer lg:inline-block hover:text-coral-400 hover:scale-110 hover:underline transition-transform duration-200"
                onClick={closeMenu}
              >
                Contact
              </L>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
