import React from 'react';
import strategyImage from '../all_assets/circle_img.webp'; 

const Strategy = () => {
  // Sample data for the progress bars
  const progressData = [
    { title: 'Customer Satisfaction', percentage: 92, color: 'bg-blue-600' },
    { title: 'Print Quality', percentage: 95, color: 'bg-green-600' },
    { title: 'On-Time Delivery', percentage: 89, color: 'bg-yellow-500' },
    { title: 'Repeat Business', percentage: 85, color: 'bg-purple-600' },
    { title: 'Innovation', percentage: 90, color: 'bg-red-500' },
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 w-full">
            <img 
              src={strategyImage} 
              alt="Our Strategy" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 w-full">
            {/* Main Heading */}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">OUR STRATEGY</h2>
            
            {/* Sub Heading */}
            <h3 className="text-3xl font-semibold text-blue-600 mb-6">ENERGY QUALITY COMMITMENT</h3>
            
            {/* Description Text */}
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Outcome satisfaction is our top priority. Your feedback helps us
              continue to improve and deliver even better service: 100%
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              {progressData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-base font-medium text-gray-700">{item.title}</span>
                    <span className="text-sm font-medium text-gray-500">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`${item.color} h-3 rounded-full`} 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;