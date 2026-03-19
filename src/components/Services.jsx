import React, { useState } from 'react';
import flex from "../all_assets/flex_print.jpeg";
import vnyl from "../all_assets/Vinyl-Printing-Process.jpg";
import new_d from "../all_assets/3d_printings.jpg";
import hoarding from "../all_assets/hoarding.webp";
import light_board from "../all_assets/light_board.jpeg";
import stand_board from "../all_assets/stand_board.jpeg";
import shadi_card from "../all_assets/shadi_card.jpg";
import visiting from "../all_assets/visiting_card.avif";
import all_card from "../all_assets/all_cards.avif";
import pamplet from "../all_assets/pamplets.jpg";
import sticker from "../all_assets/sticker.avif";
import digital from "../all_assets/digital_p.jpeg";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { title: "Flex Printing", description: "Large-format prints perfect for outdoor advertising & events.", image: flex, tag: "Popular" },
    { title: "Vinyl Printing", description: "High-quality vinyl prints that withstand harsh weather conditions.", image: vnyl, tag: "" },
    { title: "3D Printing", description: "Unique custom prints and designs for any special occasion.", image: new_d, tag: "New" },
    { title: "Hoarding", description: "Bold, eye-catching hoarding prints for outdoor brand promotions.", image: hoarding, tag: "" },
    { title: "Light Board", description: "Vibrant, durable light boards ideal for shops & showrooms.", image: light_board, tag: "" },
    { title: "Standee Frame", description: "Portable stand boards perfect for events & storefront displays.", image: stand_board, tag: "" },
    { title: "Shadi Card", description: "Elegant personalized wedding invitations with premium finish.", image: shadi_card, tag: "Trending" },
    { title: "Visiting Card", description: "Professional cards that leave a lasting brand impression.", image: visiting, tag: "" },
    { title: "Invitation Cards", description: "All types of invitation cards for weddings, birthdays & events.", image: all_card, tag: "" },
    { title: "Pamphlets & Brochures", description: "Professionally designed pamphlets for marketing & promotions.", image: pamplet, tag: "" },
    { title: "Sticker Printing", description: "Custom sticker prints for any purpose or occasion.", image: sticker, tag: "" },
    { title: "Digital Printing", description: "On-demand vibrant printing for brochures, posters & more.", image: digital, tag: "" },
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Our <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            From flex printing to invitation cards — we deliver premium quality for every printing need.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Tag Badge */}
              {service.tag && (
                <span className="absolute top-2 left-2 z-10 bg-yellow-400 text-yellow-900 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow">
                  {service.tag}
                </span>
              )}

              {/* Image */}
              <div className="h-32 sm:h-36 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Content */}
              <div className="p-3 sm:p-4 relative z-10">
                <h3 className="text-gray-900 font-bold text-sm sm:text-base leading-tight mb-1 group-hover:text-blue-700 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Bottom CTA strip */}
              <div className="px-3 sm:px-4 pb-3">
                <a
                  href="https://wa.me/917645980320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 text-xs font-bold uppercase tracking-wider transition-colors duration-200 group/link"
                >
                  <span>Order Now</span>
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Need something custom? We've got you covered!</p>
          <a
            href="https://wa.me/917645980320"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg hover:shadow-blue-400/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;