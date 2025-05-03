import React from "react";
import {
  FaFlag,
  FaNewspaper,
  FaImage,
  FaAddressCard,
  FaPrint,
  FaBorderStyle,
} from "react-icons/fa";
const MainServices = () => {
  return (
    <div className="relative py-20 bg-gradient-to-b from-[#004080] to-[#002954]">
      {/* Background */}
      <div className="absolute inset-0 bg-blue-900 opacity-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Headings */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-300 mb-4">
            MAIN SERVICES
          </h2>
          <h3 className="text-6xl font-semibold text-white">
            QUALITY PRINTING
          </h3>
        </div>

        {/* Cards Grid - Now with max-width and centered */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Left Side Cards */}
          <div className="space-y-8">
            {/* Banner Printing Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="bg-blue-100 p-4 rounded-full mr-6">
                <FaFlag className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Banner Printing
                </h4>
                <p className="text-gray-600">
                  We use state-of-the-art printers and premium materials to
                  produce sharp, vibrant prints that meet your specifications.
                </p>
              </div>
            </div>

            {/* Flyer Printing Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="bg-blue-100 p-4 rounded-full mr-6">
                <FaNewspaper className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Shadi Card
                </h4>
                <p className="text-gray-600">
                  Elegant and personalized wedding cards that reflect your
                  unique love story. From traditional to modern designs, we
                  craft invitations that leave a lasting impression.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="bg-blue-100 p-4 rounded-full mr-6">
                <FaPrint className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Digital Printing
                </h4>
                <p className="text-gray-600">
                  We specialize in high-quality digital printing of wedding
                  cards, offering custom designs, vibrant colors, and fast
                  turnaround to make your special day truly unforgettable.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="space-y-8">
            {/* Poster Printing Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="bg-blue-100 p-4 rounded-full mr-6">
                <FaImage className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Poster Printing
                </h4>
                <p className="text-gray-600">
                  Every print job goes through a quality control check to ensure
                  the final product meets our high standards.
                </p>
              </div>
            </div>

            {/* Business Card Printing */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="bg-blue-100 p-4 rounded-full mr-6">
                <FaAddressCard className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Business Card
                </h4>
                <p className="text-gray-600">
                  We carefully package your prints to avoid damage during
                  transit. Your order will be delivered to the specified
                  address.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
              <div className="bg-blue-100 p-4 rounded-full mr-6">
                <FaBorderStyle className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Framing
                </h4>
                <p className="text-gray-600">
                  Expert in banner framing and all types of custom framing
                  solutions — perfect for weddings, events, photos, and more..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
