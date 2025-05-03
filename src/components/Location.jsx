import React from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const Location = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans bg-white rounded-lg shadow-sm">
      <div className="lg:flex lg:gap-8">
        {/* Left Column - Main Info */}
        <div className="lg:w-1/2">
          {/* Shop Name Heading */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Shree Balajee Printing and Flex
          </h1>

          {/* Address */}
          <div className="text-gray-600 mb-4">
            <p>Katras Bazar Near BOI </p>
            <p>Rajganj Road: Dhanbad 828114</p>
          </div>

          {/* Directions Heading */}
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Directions
          </h2>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
            </div>
            <span className="ml-2 text-gray-600">4.6***** 502 reviews</span>
          </div>

          {/* View Larger Map Link */}
          <a
            href="https://www.google.com/maps/place/Shree+Balajee+Printing+%26+Flex/@23.8169002,86.2936481,15z/data=!4m6!3m5!1s0x39f6a72b0b8e8e4f:0x24d7416b068158dd!8m2!3d23.8169002!4d86.2936481!16s%2Fg%2F11sx5w0m0y?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mb-6 flex items-center"
          >
            <FaMapMarkerAlt className="mr-1" />
            View larger map
          </a>
          <h2>
            Shop Phone No - <a href="tel:7645980320">7645980320</a>
          </h2>
          <h2>Hours - 10 AM to 7 PM</h2>
        </div>

        {/* Right Column - Map */}
        <div className="lg:w-1/2">
          <div className="h-full w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0477727480497!2d86.2936481!3d23.8169002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a72b0b8e8e4f%3A0x24d7416b068158dd!2sShree%20Balajee%20Printing%20%26%20Flex!5e0!3m2!1sen!2sin!4v1746271484743!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Balajee Printing and Flex Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
