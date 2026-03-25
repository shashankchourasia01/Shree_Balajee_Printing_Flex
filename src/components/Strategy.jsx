import React, { useEffect, useRef, useState } from 'react';
import strategyImage from '../all_assets/circle_img.webp';

const progressData = [
  { 
    title: 'Customer Satisfaction', 
    percentage: 92, 
    color: 'bg-blue-600', 
    light: 'bg-blue-100', 
    text: 'text-blue-600',
    description: 'High customer satisfaction rate from Dhanbad and surrounding areas'
  },
  { 
    title: 'Print Quality',         
    percentage: 95, 
    color: 'bg-yellow-400', 
    light: 'bg-yellow-50', 
    text: 'text-yellow-500',
    description: 'Premium quality printing using advanced technology'
  },
  { 
    title: 'On-Time Delivery',      
    percentage: 89, 
    color: 'bg-emerald-500', 
    light: 'bg-emerald-50', 
    text: 'text-emerald-600',
    description: 'Reliable delivery within promised timelines'
  },
  { 
    title: 'Repeat Business',       
    percentage: 85, 
    color: 'bg-purple-500', 
    light: 'bg-purple-50', 
    text: 'text-purple-600',
    description: 'Trusted by clients for recurring printing needs'
  },
  { 
    title: 'Innovation',            
    percentage: 90, 
    color: 'bg-orange-500', 
    light: 'bg-orange-50', 
    text: 'text-orange-500',
    description: 'Latest printing techniques and modern designs'
  },
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

  // Structured data for business metrics
  const businessMetrics = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shree Balajee Printing & Flex",
    "description": "Premium printing services in Dhanbad with 24+ years experience",
    "foundingDate": "2000",
    "numberOfEmployees": "15",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhanbad",
      "addressRegion": "Jharkhand",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "makesOffer": progressData.map(item => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": item.title,
        "description": item.description
      }
    }))
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-white py-10 px-4 sm:px-6 lg:px-10 overflow-hidden"
      aria-label="Our Strategy and Quality Metrics"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Hidden metadata for SEO */}
      <meta itemProp="name" content="Shree Balajee Printing & Flex Strategy" />
      <meta itemProp="description" content="24+ years of printing excellence in Dhanbad. 95% print quality, 92% customer satisfaction, and 50000+ happy clients." />
      <meta itemProp="foundingDate" content="2000" />
      <meta itemProp="numberOfEmployees" content="15" />

      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Image ── */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Decorative ring behind image */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-100 via-yellow-100 to-blue-50 blur-sm" aria-hidden="true" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={strategyImage}
                  alt="Shree Balajee Printing & Flex - 24+ years of printing excellence in Dhanbad"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                  itemProp="image"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center justify-between shadow-lg">
                  <div className="text-center" itemScope itemProp="statistics">
                    <meta itemProp="name" content="Years Experience" />
                    <p className="text-blue-700 font-extrabold text-xl" aria-label="24 years of experience">24+</p>
                    <p className="text-gray-500 text-xs font-medium">Years Experience</p>
                  </div>
                  <div className="w-px h-8 bg-gray-200" aria-hidden="true" />
                  <div className="text-center" itemScope itemProp="statistics">
                    <meta itemProp="name" content="Happy Clients" />
                    <p className="text-blue-700 font-extrabold text-xl" aria-label="Over 50000 happy clients">50000+</p>
                    <p className="text-gray-500 text-xs font-medium">Happy Clients</p>
                  </div>
                  <div className="w-px h-8 bg-gray-200" aria-hidden="true" />
                  <div className="text-center" itemScope itemProp="statistics">
                    <meta itemProp="name" content="Projects Completed" />
                    <p className="text-blue-700 font-extrabold text-xl" aria-label="Over 10000 projects completed">10000+</p>
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
            <div className="flex items-center gap-3 mb-5" aria-hidden="true">
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
                <div key={index} className="group" itemScope itemProp="hasOfferCatalog">
                  <meta itemProp="name" content={item.title} />
                  <meta itemProp="description" content={item.description} />
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${item.color} flex-shrink-0`} aria-hidden="true" />
                      <span className="text-sm font-semibold text-gray-700">{item.title}</span>
                    </div>
                    <span className={`text-sm font-extrabold ${item.text}`} aria-label={`${item.percentage} percent`}>{item.percentage}%</span>
                  </div>
                  <div className={`w-full ${item.light} rounded-full h-2.5 overflow-hidden`}>
                    <div
                      className={`${item.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: animated ? `${item.percentage}%` : '0%', transitionDelay: `${index * 120}ms` }}
                      aria-label={`Progress bar: ${item.title} at ${item.percentage}%`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Hidden stats for SEO */}
            <div className="hidden" aria-hidden="true">
              <span itemProp="ratingValue">4.8</span>
              <span itemProp="ratingCount">1250</span>
            </div>

          </div>
        </div>
      </div>

      {/* Add structured data for business metrics */}
      <script type="application/ld+json">
        {JSON.stringify(businessMetrics)}
      </script>

      {/* Add additional review schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Shree Balajee Printing & Flex"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.8",
            "bestRating": "5"
          },
          "author": {
            "@type": "Organization",
            "name": "Shree Balajee Printing & Flex Customers"
          },
          "positiveNotes": "High quality printing, on-time delivery, excellent customer service"
        })}
      </script>
    </section>
  );
};

export default Strategy;