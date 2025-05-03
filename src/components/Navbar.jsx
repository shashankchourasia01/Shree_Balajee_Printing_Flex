import React, { useState } from "react";
import flex_mac from "../all_assets/Digital-Printing.jpg";
import logo from "../all_assets/logo.jpeg";

const NavbarWithHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-yellow-300 shadow-md py-4 px-6 flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
        </div>

        {/* Middle - Navigation links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">
            Home
          </a>
          <a
            href="#works"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            How Works
          </a>
          <a
            href="#services"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Services
          </a>
          <a
            href="#project"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Project
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-blue-600 font-medium"
          >
            Contact
          </a>
        </div>

        {/* Right side - Contact and Button (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href="tel:+917645980320" className="flex items-center gap-2">
              <span className="ml-2 text-gray-800 font-medium">7645980320</span>
            </a>
          </div>
          <a
            href="https://wa.me/917645980320"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300">
              ORDER NOW
            </button>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-yellow-300 via-orange-200 to-yellow-400 px-6 py-6 shadow-md animate-slide-down">
          <div className="flex flex-col items-center space-y-4 text-lg font-semibold">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              Home
            </a>
            <a
              href="#works"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              How Works
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              Services
            </a>
            <a
              href="#project"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              Contact
            </a>
          </div>

          {/* Centered Contact and Button in Mobile */}
          <div className="flex flex-col items-center mt-6 space-y-4">
            <div className="flex items-center">
              <a
                href="tel:+917645980320"
                className="text-gray-800 font-medium text-lg"
              >
                <span className="ml-2">7645980320</span>
              </a>
            </div>
            <a
              href="https://wa.me/917645980320"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300">
                ORDER NOW
              </button>
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-[550px] w-full overflow-hidden">
        <img
          src={flex_mac}
          alt="Background"
          className="absolute inset-0 w-full h-[500px] object-cover object-center"
        />
        <div className="relative h-full flex flex-col items-center text-yellow-300 justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 mt-56">
            SHREE BALAJEE
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl">
            <span className="font-medium">PRINTING AND </span>
            <span className="font-medium">FLEX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithHero;
