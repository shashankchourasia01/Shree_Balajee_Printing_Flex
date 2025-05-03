import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-12 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p>Katras Bazar Bhagat Singh Chowk,</p>
              <p>Near Bank of India.</p>
            </address>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:7645980320" className="hover:underline">
                  7645980320
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:9835121320" className="hover:underline">
                  9835121320
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:sbpf3114@gmail.com" className="hover:underline">
                  sbpf3114@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Our Service</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">&gt;</span> Shop Board
              </li>
              <li className="flex items-center">
                <span className="mr-2">&gt;</span> Wedding Card
              </li>
              <li className="flex items-center">
                <span className="mr-2">&gt;</span> Stand Board
              </li>
              <li className="flex items-center">
                <span className="mr-2">&gt;</span> Vinyl Prints
              </li>
              <li className="flex items-center">
                <span className="mr-2">&gt;</span> Flex Barrow
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Download The App</h3>
            <p className="mb-2">Available on</p>
            <p className="font-bold mb-4">www.sbpf.com</p>

            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
              >
                <FaGooglePlay size={20} /> Google Play
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2"
              >
                <FaApple size={20} /> App Store
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/balajeekatras"
                className="text-white hover:text-blue-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/balajeekatras?igsh=eWYyYjFnNXE2YXVz"
                className="text-white hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/917645980320"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-500"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>
            Copyright © 2025{" "}
            <span className="font-bold">Shree Balajee Printing & Flex.</span>
            Designed and Developed by Shashank-9304637399
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
