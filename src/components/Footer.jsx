import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    "Shop Board",
    "Wedding Card",
    "Stand Board",
    "Vinyl Prints",
    "Flex Printing",
    "Visiting Card",
    "Hoarding",
    "Digital Print",
  ];

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shree Balajee Printing & Flex",
    "url": "https://www.balajeeflex.com",
    "logo": "https://www.balajeeflex.com/logo.png",
    "description": "Premium printing services in Dhanbad offering flex printing, wedding cards, visiting cards, hoarding, and digital printing.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Katras Bazar, Bhagat Singh Chowk, Near Bank of India",
      "addressLocality": "Dhanbad",
      "addressRegion": "Jharkhand",
      "postalCode": "828114",
      "addressCountry": "IN"
    },
    "telephone": "+917645980320",
    "email": "sbpf3114@gmail.com",
    "openingHours": "Mo-Su 10:00-19:00",
    "sameAs": [
      "https://www.facebook.com/balajeekatras",
      "https://www.instagram.com/balajeekatras",
      "https://wa.me/917645980320"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+917645980320",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+919835121320",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "priceRange": "₹₹"
  };

  // Structured data for services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Printing Services Offered",
    "description": "Complete list of printing services available at Shree Balajee Printing & Flex",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service,
      "item": {
        "@type": "Service",
        "name": service,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Shree Balajee Printing & Flex"
        }
      }
    }))
  };

  return (
    <footer 
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-14 pb-6 px-4 sm:px-6 lg:px-10"
      aria-label="Footer with contact information and services"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-6xl mx-auto">

        {/* Hidden metadata for SEO */}
        <meta itemProp="name" content="Shree Balajee Printing & Flex" />
        <meta itemProp="description" content="Premium printing services in Dhanbad. Flex printing, wedding cards, visiting cards, hoarding, and digital printing. Open 10 AM to 7 PM." />
        <meta itemProp="telephone" content="+917645980320" />
        <meta itemProp="email" content="sbpf3114@gmail.com" />
        <meta itemProp="priceRange" content="₹₹" />

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-10">

          {/* Contact — always LEFT */}
          <div className="col-span-1">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-yellow-400 rounded-full" aria-hidden="true" />
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3" itemScope itemProp="address" itemType="https://schema.org/PostalAddress">
                <FaMapMarkerAlt className="text-yellow-400 mt-0.5 flex-shrink-0 text-sm" aria-hidden="true" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  <span itemProp="streetAddress">Katras Bazar, Bhagat Singh Chowk, Near Bank of India</span>,<br />
                  <span itemProp="addressLocality">Dhanbad</span> — <span itemProp="postalCode">828114</span>, <span itemProp="addressRegion">Jharkhand</span><br />
                  <meta itemProp="addressCountry" content="IN" />
                </p>
              </div>
              <a 
                href="tel:+917645980320" 
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-200 group"
                aria-label="Call us at 7645980320"
                itemProp="telephone"
              >
                <FaPhone className="text-yellow-400 flex-shrink-0 text-sm" aria-hidden="true" />
                <span className="text-sm font-medium">7645980320</span>
              </a>
              <a 
                href="tel:+919835121320" 
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Alternate phone number: 9835121320"
              >
                <FaPhone className="text-yellow-400 flex-shrink-0 text-sm" aria-hidden="true" />
                <span className="text-sm font-medium">9835121320</span>
              </a>
              <a 
                href="mailto:sbpf3114@gmail.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Email us at sbpf3114@gmail.com"
                itemProp="email"
              >
                <FaEnvelope className="text-yellow-400 flex-shrink-0 text-sm" aria-hidden="true" />
                <span className="text-sm font-medium break-all">sbpf3114@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Services — always RIGHT on mobile */}
          <div className="col-span-1">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-yellow-400 rounded-full" aria-hidden="true" />
              Services
            </h3>
            <ul className="space-y-2.5" aria-label="List of printing services">
              {services.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200 cursor-pointer group">
                  <span className="w-1 h-1 rounded-full bg-yellow-400/60 group-hover:bg-yellow-400 flex-shrink-0 transition-colors duration-200" aria-hidden="true" />
                  <span className="text-sm font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timing + Social — full width on mobile, 3rd col on desktop */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-yellow-400 rounded-full" aria-hidden="true" />
              Shop Hours
            </h3>
            <div className="space-y-2 mb-6" itemScope itemProp="openingHoursSpecification" itemType="https://schema.org/OpeningHoursSpecification">
              <div className="flex justify-between items-center bg-white/5 rounded-xl px-4 py-2.5 border border-white/8">
                <span className="text-gray-400 text-sm">Mon – Sun</span>
                <span className="text-white font-bold text-sm">
                  <meta itemProp="dayOfWeek" content="Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday" />
                  <meta itemProp="opens" content="10:00" />
                  <meta itemProp="closes" content="19:00" />
                  10 AM – 7 PM
                </span>
              </div>
              <div className="flex justify-between items-center bg-white/5 rounded-xl px-4 py-2.5 border border-white/8">
                <span className="text-gray-400 text-sm">NOTE - Order Receiving</span>
                <span className="text-yellow-400 font-bold text-sm">Call First</span>
              </div>
            </div>

            {/* Social */}
            <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-yellow-400 rounded-full" aria-hidden="true" />
              Follow Us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/balajeekatras"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/8 hover:bg-blue-600 border border-white/10 hover:border-blue-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Follow us on Facebook"
                itemProp="sameAs"
              >
                <FaFacebook className="text-base" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/balajeekatras?igsh=eWYyYjFnNXE2YXVz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/8 hover:bg-pink-600 border border-white/10 hover:border-pink-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Follow us on Instagram"
                itemProp="sameAs"
              >
                <FaInstagram className="text-base" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/917645980320"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/8 hover:bg-green-600 border border-white/10 hover:border-green-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Contact us on WhatsApp"
                itemProp="sameAs"
              >
                <FaWhatsapp className="text-base" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

        {/* ── COPYRIGHT ── */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 <span className="text-white font-bold">Shree Balajee Printing & Flex.</span> All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Designed by{" "}
            <a 
              href="tel:+919304637399" 
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 font-medium"
              aria-label="Contact designer Shashank at 9304637399"
            >
              Shashank — 9304637399
            </a>
          </p>
        </div>

      </div>

      {/* Add structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>

      {/* Add breadcrumb schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.balajeeflex.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://www.balajeeflex.com/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Contact",
              "item": "https://www.balajeeflex.com/#contact"
            }
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;