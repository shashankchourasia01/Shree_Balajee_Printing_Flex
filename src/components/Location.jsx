import React from "react";
import { FaMapMarkerAlt, FaStar, FaPhone, FaClock, FaWhatsapp, FaDirections } from "react-icons/fa";

const Location = () => {
  // Structured data for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shree Balajee Printing & Flex",
    "description": "Premium printing services in Dhanbad - Flex printing, vinyl printing, wedding cards, visiting cards, and more.",
    "image": "https://www.balajeeflex.com/og-image.jpg",
    "telephone": "+917645980320",
    "email": "balajeeflex@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Katras Bazar, Near BOI, Rajganj Road",
      "addressLocality": "Dhanbad",
      "addressRegion": "Jharkhand",
      "postalCode": "828114",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.8169002",
      "longitude": "86.2936481"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "502",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.instagram.com/balajeeflex",
      "https://www.facebook.com/balajeeflex"
    ]
  };

  return (
    <section 
      id="contact" 
      className="bg-gradient-to-b from-gray-50 to-white py-4 px-4 sm:px-6 lg:px-10"
      aria-label="Contact and Location Information"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="max-w-6xl mx-auto">

        {/* Hidden metadata for SEO */}
        <meta itemProp="name" content="Shree Balajee Printing & Flex" />
        <meta itemProp="description" content="Premium printing services in Dhanbad. Visit our shop at Katras Bazar for flex printing, vinyl printing, wedding cards, visiting cards, and more. Open 10 AM to 7 PM." />
        <meta itemProp="telephone" content="+917645980320" />
        <meta itemProp="priceRange" content="₹₹" />
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" aria-hidden="true" />
            Find Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Our <span className="text-blue-700">Location</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4" aria-hidden="true">
            <div className="h-1 w-10 bg-blue-700 rounded-full" />
            <div className="h-1 w-4 bg-yellow-400 rounded-full" />
          </div>
        </div>

        {/* ── MAIN CARD ── */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">

            {/* ── LEFT: Info Panel ── */}
            <div className="lg:w-2/5 bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-yellow-400/10 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

              <div className="relative z-10">
                {/* Shop Name */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                    <FaMapMarkerAlt className="text-blue-900 text-lg" />
                  </div>
                  <div>
                    <h2 className="text-white font-extrabold text-xl sm:text-2xl leading-tight">
                      Shree Balajee
                    </h2>
                    <p className="text-yellow-300 font-semibold text-sm uppercase tracking-widest">
                      Printing & Flex
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6 bg-white/10 rounded-xl px-4 py-3 w-fit" itemScope itemProp="aggregateRating" itemType="https://schema.org/AggregateRating">
                  <meta itemProp="ratingValue" content="4.6" />
                  <meta itemProp="reviewCount" content="502" />
                  <meta itemProp="bestRating" content="5" />
                  <div className="flex gap-0.5" aria-label={`Rating: 4.6 out of 5 stars`}>
                    {[1,2,3,4].map(i => <FaStar key={i} className="text-yellow-400 text-sm" aria-hidden="true" />)}
                    <FaStar className="text-yellow-400/40 text-sm" aria-hidden="true" />
                  </div>
                  <span className="text-white font-bold text-sm" aria-label="4.6 out of 5 stars">4.6</span>
                  <span className="text-blue-200 text-xs" aria-label="502 customer reviews">• 502 reviews</span>
                </div>

                {/* Address */}
                <div className="mb-6 p-4 bg-white/8 rounded-2xl border border-white/10" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">Address</p>
                  <p className="text-white font-semibold text-sm leading-relaxed">
                    <span itemProp="streetAddress">Katras Bazar, Near BOI, Rajganj Road</span><br />
                    <span itemProp="addressLocality">Dhanbad</span>, <span itemProp="addressRegion">Jharkhand</span><br />
                    <span itemProp="postalCode">828114</span>, <span itemProp="addressCountry">India</span>
                  </p>
                </div>

                {/* Phone */}
                <a
                  href="tel:+917645980320"
                  className="flex items-center gap-3 mb-4 p-4 bg-white/8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-200 group"
                  aria-label="Call us at 7645980320"
                >
                  <div className="w-9 h-9 bg-white/15 group-hover:bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200" aria-hidden="true">
                    <FaPhone className="text-yellow-300 text-sm" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-white font-bold text-sm" itemProp="telephone">7645980320</p>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-center gap-3 p-4 bg-white/8 rounded-2xl border border-white/10" itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                  <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <FaClock className="text-yellow-300 text-sm" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-wider">Timing</p>
                    <p className="text-white font-bold text-sm">
                      <meta itemProp="dayOfWeek" content="Monday,Tuesday,Wednesday,Thursday,Friday,Saturday" />
                      <meta itemProp="opens" content="10:00" />
                      <meta itemProp="closes" content="19:00" />
                      10:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col gap-3 mt-8">
                <a
                  href="https://wa.me/917645980320?text=I'm%20interested%20in%20your%20printing%20services.%20I%20found%20you%20on%20your%20website.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm uppercase tracking-widest px-5 py-3 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="Contact us on WhatsApp"
                >
                  <FaWhatsapp className="text-base" aria-hidden="true" />
                  WhatsApp Us
                </a>
                <a
                  href="https://www.google.com/maps/place/Shree+Balajee+Printing+%26+Flex/@23.8169002,86.2936481,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm uppercase tracking-widest px-5 py-3 rounded-xl hover:-translate-y-0.5 transition-all duration-200"
                  aria-label="Get directions to our shop on Google Maps"
                >
                  <FaDirections className="text-base" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>

            {/* ── RIGHT: Map ── */}
            <div className="lg:w-3/5 relative">
              {/* Map top bar */}
              <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 border-b border-gray-100" aria-hidden="true">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-gray-400 text-xs ml-2 font-medium">maps.google.com</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0477727480497!2d86.2936481!3d23.8169002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a72b0b8e8e4f%3A0x24d7416b068158dd!2sShree%20Balajee%20Printing%20%26%20Flex!5e0!3m2!1sen!2sin!4v1746271484743!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ minHeight: "420px", border: "0", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location of Shree Balajee Printing and Flex at Katras Bazar, Dhanbad"
                aria-label="Map showing Shree Balajee Printing and Flex location at Katras Bazar, Dhanbad"
              />
            </div>

          </div>
        </div>

        {/* ── QUICK INFO STRIP ── */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: <FaMapMarkerAlt className="text-blue-600" aria-hidden="true" />, label: "Katras Bazar, Dhanbad", ariaLabel: "Location: Katras Bazar, Dhanbad" },
            { icon: <FaPhone className="text-blue-600" aria-hidden="true" />, label: "7645980320", ariaLabel: "Phone: 7645980320", href: "tel:+917645980320" },
            { icon: <FaClock className="text-blue-600" aria-hidden="true" />, label: "10 AM – 7 PM", ariaLabel: "Opening hours: 10 AM to 7 PM" },
            { icon: <FaStar className="text-yellow-500" aria-hidden="true" />, label: "4.6 ★ (502 reviews)", ariaLabel: "Rating: 4.6 out of 5 stars from 502 reviews" },
          ].map((item, i) => (
            item.href ? (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 group"
                aria-label={item.ariaLabel}
              >
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-sm group-hover:bg-blue-100 transition-colors duration-200">
                  {item.icon}
                </div>
                <span className="text-gray-700 font-semibold text-xs leading-tight">{item.label}</span>
              </a>
            ) : (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm"
                aria-label={item.ariaLabel}
              >
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-sm">
                  {item.icon}
                </div>
                <span className="text-gray-700 font-semibold text-xs leading-tight">{item.label}</span>
              </div>
            )
          ))}
        </div>

      </div>

      {/* Add structured data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Add additional review schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Shree Balajee Printing & Flex",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Katras Bazar, Near BOI, Rajganj Road",
            "addressLocality": "Dhanbad",
            "addressRegion": "Jharkhand",
            "postalCode": "828114",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.8169002",
            "longitude": "86.2936481"
          },
          "openingHours": "Mo-Sa 10:00-19:00, Su 10:00-17:00",
          "telephone": "+917645980320"
        })}
      </script>
    </section>
  );
};

export default Location;