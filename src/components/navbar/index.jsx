import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <nav className="bg-[#2B2B2B] sticky top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-40 cursor-pointer" />
        </div>

        {/* Hamburger Icon */}
        <div
          className="text-white text-2xl md:hidden cursor-pointer z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Items */}
        <div
          className={`${
            isMenuOpen ? "right-0" : "-right-full"
          } fixed top-0 h-screen w-full md:w-auto md:static md:h-auto md:flex bg-[#2B2B2B] md:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center justify-center h-full md:flex-row md:space-x-6 text-white">
            <li
              className="text-sm sm:text-base font-semibold px-3 py-3 cursor-pointer hover:text-gray-400"
              onClick={closeMenu}
            >
              Marketplace
            </li>
            <li
              className="text-sm sm:text-base font-semibold px-3 py-2 cursor-pointer hover:text-gray-400"
              onClick={closeMenu}
            >
              Rankings
            </li>
            <li
              className="text-sm sm:text-base font-semibold px-3 py-2 cursor-pointer hover:text-gray-400"
              onClick={closeMenu}
            >
              Connect a wallet
            </li>
            <li className="mt-4 md:mt-0">
              <button
                onClick={closeMenu}
                className="bg-[#A259FF] text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-xl hover:bg-purple-700"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
