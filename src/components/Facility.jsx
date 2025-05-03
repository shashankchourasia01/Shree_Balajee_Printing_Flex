import React from "react";
import shopImage from "../all_assets/circle_img.webp";
import {
  FaPrint,
  FaTshirt,
  FaRuler,
  FaPalette,
  FaShippingFast,
} from "react-icons/fa";

const Shop = () => {
  const machines = [
    {
      id: 1,
      name: "Digital Press",
      description:
        "High-speed digital printing machine for vibrant, precise prints on various materials.",
      icon: <FaPrint className="text-3xl text-blue-600" />,
      specs: [
        "1200 dpi resolution",
        "Up to 100 pages/min",
        "CMYK+ color system",
      ],
    },
    {
      id: 2,
      name: "Large Format Printer",
      description:
        "Professional-grade wide-format printer for banners, posters, and signage.",
      icon: <FaRuler className="text-3xl text-green-600" />,
      specs: ['Up to 60" width', "Eco-solvent inks", "Outdoor durability"],
    },
    {
      id: 3,
      name: "Screen Printing",
      description:
        "Traditional screen printing setup for apparel and specialty items.",
      icon: <FaTshirt className="text-3xl text-red-600" />,
      specs: ["6-color station", "Automatic press", "Flash dryer"],
    },
    {
      id: 4,
      name: "Color Matching System",
      description: "Advanced color calibration for brand-consistent results.",
      icon: <FaPalette className="text-3xl text-purple-600" />,
      specs: ["Pantone certified", "Spectrophotometer", "Spot color mixing"],
    },
    {
      id: 5,
      name: "Finishing Equipment",
      description: "Professional finishing tools for perfect final products.",
      icon: <FaShippingFast className="text-3xl text-yellow-600" />,
      specs: ["Auto cutter", "Laminator", "Perfect binding"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={shopImage}
          alt="Our Printing Shop"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Printing Facility
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              State-of-the-art equipment producing quality prints with precision
              and care
            </p>
          </div>
        </div>
      </div>

      {/* Shop Description */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Premium Printing Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Shop facility house the latest printing technology operated by
            skilled technicians. We combine cutting-edge machinery with
            traditional craftsmanship to deliver exceptional results for every
            project, big or small.
          </p>
        </div>

        {/* Machines Grid - Horizontal scroll on mobile */}
        <div className="relative">
          {/* Regular grid layout for larger screens */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine) => (
              <div
                key={machine.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* ... rest of your machine card content ... */}
              </div>
            ))}
          </div>

          {/* Horizontal scroll for mobile */}
          <div className="md:hidden pb-6">
            <div className="flex overflow-x-auto space-x-4 py-4 px-1 -mx-4">
              {machines.map((machine) => (
                <div
                  key={machine.id}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{machine.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {machine.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{machine.description}</p>
                    <ul className="space-y-2">
                      {machine.specs.map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Facility Highlights */}
        <div className="mt-20 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Why Choose Our Shop?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    24-hour turnaround available for rush jobs
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Environmentally friendly inks and materials
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Quality control at every production stage
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-100 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">24+</div>
                <div className="text-xl font-semibold text-gray-700">
                  Years Experience
                </div>
                <div className="w-24 h-1 bg-blue-400 mx-auto my-4"></div>
                <div className="text-gray-600">
                  Serving businesses and creatives since 2002
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
