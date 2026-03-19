import React from "react";
import {
  FaFlag,
  FaNewspaper,
  FaImage,
  FaAddressCard,
  FaPrint,
  FaBorderStyle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaFlag className="text-blue-600 text-xl" />,
    title: "Banner Printing",
    description:
      "State-of-the-art printers and premium materials to produce sharp, vibrant prints that meet your exact specifications.",
  },
  {
    icon: <FaImage className="text-blue-600 text-xl" />,
    title: "Poster Printing",
    description:
      "Every print job goes through strict quality control to ensure the final product meets our high standards.",
  },
  {
    icon: <FaNewspaper className="text-blue-600 text-xl" />,
    title: "Shadi Card",
    description:
      "Elegant personalized wedding cards — from traditional to modern designs crafted to leave a lasting impression.",
  },
  {
    icon: <FaAddressCard className="text-blue-600 text-xl" />,
    title: "Business Card",
    description:
      "Premium business cards carefully packaged and delivered — designed to reflect your brand with quality finish.",
  },
  {
    icon: <FaPrint className="text-blue-600 text-xl" />,
    title: "Digital Printing",
    description:
      "High-quality digital printing with custom designs, vibrant colors, and fast turnaround for every occasion.",
  },
  {
    icon: <FaBorderStyle className="text-blue-600 text-xl" />,
    title: "Framing",
    description:
      "Expert banner and custom framing solutions — perfect for weddings, events, photos, and more.",
  },
];

const MainServices = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#003a75] via-[#004080] to-[#002954] overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-[0.2em] px-5 py-1.5 rounded-full mb-4">
            What We Do Best
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-300 uppercase tracking-wide mb-3">
            Main Services
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/80 uppercase tracking-widest">
            Quality Printing
          </h3>
          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-yellow-400/40" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="h-px w-16 bg-yellow-400/40" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/40 backdrop-blur-sm rounded-2xl p-5 sm:p-6 flex gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 bg-blue-100 group-hover:bg-yellow-400/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                <span className="group-hover:text-yellow-400 transition-colors duration-300">
                  {service.icon}
                </span>
              </div>

              {/* Text */}
              <div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 group-hover:text-yellow-300 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-white/50 text-sm mb-5">
            Looking for a service not listed? We handle custom orders too!
          </p>
          <a
            href="https://wa.me/917645980320"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg shadow-yellow-400/25 hover:-translate-y-0.5 hover:shadow-yellow-400/40 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get a Free Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default MainServices;