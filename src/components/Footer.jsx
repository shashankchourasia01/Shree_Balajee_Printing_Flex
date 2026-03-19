import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    "Shop Board",
    "Wedding Card",
    "Stand Board",
    "Vinyl Prints",
    "Flex Printing",
    "Visiting Card",
    "Hoarding",
    "Digital Print",
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-14 pb-6 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        {/* ── TOP BRAND BAR ── */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10 mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-wide">
              Shree <span className="text-yellow-400">Balajee</span>
            </h2>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.15em]">Printing & Flex</p>
          </div>
          <a
            href="https://wa.me/917645980320"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm uppercase tracking-widest px-6 py-2.5 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <FaWhatsapp className="text-base" />
            Order on WhatsApp
          </a>
        </div> */}

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-10">

          {/* Contact — always LEFT */}
          <div className="col-span-1">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-yellow-400 rounded-full" />
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-0.5 flex-shrink-0 text-sm" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Katras Bazar, Bhagat Singh Chowk,<br />
                  Near Bank of India,<br />
                  Dhanbad — 828114
                </p>
              </div>
              <a href="tel:7645980320" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-200 group">
                <FaPhone className="text-yellow-400 flex-shrink-0 text-sm" />
                <span className="text-sm font-medium">7645980320</span>
              </a>
              <a href="tel:9835121320" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <FaPhone className="text-yellow-400 flex-shrink-0 text-sm" />
                <span className="text-sm font-medium">9835121320</span>
              </a>
              <a href="mailto:sbpf3114@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <FaEnvelope className="text-yellow-400 flex-shrink-0 text-sm" />
                <span className="text-sm font-medium break-all">sbpf3114@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Services — always RIGHT on mobile */}
          <div className="col-span-1">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-yellow-400 rounded-full" />
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200 cursor-pointer group">
                  <span className="w-1 h-1 rounded-full bg-yellow-400/60 group-hover:bg-yellow-400 flex-shrink-0 transition-colors duration-200" />
                  <span className="text-sm font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timing + Social — full width on mobile, 3rd col on desktop */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-yellow-400 rounded-full" />
              Shop Hours
            </h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between items-center bg-white/5 rounded-xl px-4 py-2.5 border border-white/8">
                <span className="text-gray-400 text-sm">Mon – Sat</span>
                <span className="text-white font-bold text-sm">10 AM – 7 PM</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 rounded-xl px-4 py-2.5 border border-white/8">
                <span className="text-gray-400 text-sm">Sunday</span>
                <span className="text-yellow-400 font-bold text-sm">Call First</span>
              </div>
            </div>

            {/* Social */}
            <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-yellow-400 rounded-full" />
              Follow Us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/balajeekatras"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/8 hover:bg-blue-600 border border-white/10 hover:border-blue-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaFacebook className="text-base" />
              </a>
              <a
                href="https://www.instagram.com/balajeekatras?igsh=eWYyYjFnNXE2YXVz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/8 hover:bg-pink-600 border border-white/10 hover:border-pink-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaInstagram className="text-base" />
              </a>
              <a
                href="https://wa.me/917645980320"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/8 hover:bg-green-600 border border-white/10 hover:border-green-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-base" />
              </a>
            </div>
          </div>

        </div>

        {/* ── COPYRIGHT ── */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 <span className="text-white font-bold">Shree Balajee Printing & Flex.</span> All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed by{" "}
            <a href="tel:9304637399" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Shashank — 9304637399
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;