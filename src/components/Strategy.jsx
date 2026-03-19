import React, { useEffect, useRef, useState } from 'react';
import strategyImage from '../all_assets/circle_img.webp';

const progressData = [
  { title: 'Customer Satisfaction', percentage: 92, color: 'bg-blue-600', light: 'bg-blue-100', text: 'text-blue-600' },
  { title: 'Print Quality',         percentage: 95, color: 'bg-yellow-400', light: 'bg-yellow-50', text: 'text-yellow-500' },
  { title: 'On-Time Delivery',      percentage: 89, color: 'bg-emerald-500', light: 'bg-emerald-50', text: 'text-emerald-600' },
  { title: 'Repeat Business',       percentage: 85, color: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600' },
  { title: 'Innovation',            percentage: 90, color: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-500' },
];

const Strategy = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-20 px-4 sm:px-6 lg:px-10 overflow-hidden">

      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Image ── */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Decorative ring behind image */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-100 via-yellow-100 to-blue-50 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={strategyImage}
                  alt="Our Strategy"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center justify-between shadow-lg">
                  <div className="text-center">
                    <p className="text-blue-700 font-extrabold text-xl">24+</p>
                    <p className="text-gray-500 text-xs font-medium">Years Experience</p>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-blue-700 font-extrabold text-xl">50000+</p>
                    <p className="text-gray-500 text-xs font-medium">Happy Clients</p>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-blue-700 font-extrabold text-xl">10000+</p>
                    <p className="text-gray-500 text-xs font-medium">Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="w-full lg:w-1/2">

            {/* Badge */}
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full border border-blue-100 mb-4">
              Why Choose Us
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase tracking-wide mb-2">
              Our <span className="text-blue-700">Strategy</span>
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-yellow-500 uppercase tracking-widest mb-4">
              Energy · Quality · Commitment
            </h3>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-1 w-10 bg-blue-700 rounded-full" />
              <div className="h-1 w-4 bg-yellow-400 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
              Outcome satisfaction is our top priority. Your feedback helps us
              continue to improve and deliver even better service — every single time, with <span className="text-blue-700 font-bold">100% dedication.</span>
            </p>

            {/* Progress Bars */}
            <div className="space-y-4">
              {progressData.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.color} flex-shrink-0`} />
                      <span className="text-sm font-semibold text-gray-700">{item.title}</span>
                    </div>
                    <span className={`text-sm font-extrabold ${item.text}`}>{item.percentage}%</span>
                  </div>
                  <div className={`w-full ${item.light} rounded-full h-2.5 overflow-hidden`}>
                    <div
                      className={`${item.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: animated ? `${item.percentage}%` : '0%', transitionDelay: `${index * 120}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>

           

          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;