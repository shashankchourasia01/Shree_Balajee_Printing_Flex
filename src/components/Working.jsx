import React from 'react';
import { FaRegCalendarCheck, FaRegEnvelope, FaRegCheckCircle, FaPrint } from 'react-icons/fa';

const Working = () => {
  return (
    <div id='works' className="relative py-20 bg-gray-50">
      {/* Background */}
      <div className="absolute inset-0 bg-blue-900 opacity-5"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Headings */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Working Process</h2>
          <h3 className="text-2xl font-semibold text-blue-600">HOW IT WORKS</h3>
        </div>
        
        {/* Process Steps */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Step 1: Booking Online */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaRegCalendarCheck className="text-blue-600 text-2xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Booking Offline/Online</h4>
            <p className="text-gray-600">
              Submit your project details and receive a personalized quote.
            </p>
          </div>
          
          {/* Step 2: Received Work */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaRegEnvelope className="text-blue-600 text-2xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Received Work</h4>
            <p className="text-gray-600">
              Our design team creates and sends you a proof for approval. Revisions can be made until you're satisfied.
            </p>
          </div>
          
          {/* Step 3: Satisfied Design */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaRegCheckCircle className="text-blue-600 text-2xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Satisfied Design</h4>
            <p className="text-gray-600">
              Confirm your design, and we prepare for the printing process.
            </p>
          </div>
          
          {/* Step 4: Start Printing */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaPrint className="text-blue-600 text-2xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Start Printing</h4>
            <p className="text-gray-600">
              Your prints are produced using top-of-the-line technology, then packaged and gives to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;