import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import flex from "../all_assets/flex_print.jpeg";
import vnyl from "../all_assets/Vinyl-Printing-Process.jpg";
import new_d from "../all_assets/3d_printings.jpg";
import hoarding from "../all_assets/hoarding.webp";
import light_board from "../all_assets/light_board.jpeg";
import stand_board from "../all_assets/stand_board.jpeg";
import shadi_card from "../all_assets/shadi_card.jpg";
import visiting from "../all_assets/visiting_card.avif";
import all_card from "../all_assets/all_cards.avif";
import pamplet from "../all_assets/pamplets.jpg";
import sticker from "../all_assets/sticker.avif";
import digital from "../all_assets/digital_p.jpeg";
import bdayCard from '../all_assets/birthdayCard.jpg'
import letterhead from "../all_assets/letter_head.jpg";
import drFile from '../all_assets/doctor_file.jpg'
import calendar from "../all_assets/letter_head.jpg";
import notebook from "../all_assets/letter_head.jpg";
import mug from "../all_assets/letter_head.jpg";
import tshirt from "../all_assets/letter_head.jpg";
import canopy from '../all_assets/canopy.jpg'
import engagementCard from '../all_assets/engagementCard.jpg'
import envelopPri from '../all_assets/envelopPrint.jpg'
import memo from  '../all_assets/cash_memo.jpg'
import offsetPri from '../all_assets/offsetnew.jpg'

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();
  const scrollRefs = {
    outdoor: useRef(null),
    invitation: useRef(null),
    business: useRef(null),
    specialty: useRef(null),
    signage: useRef(null),
    promotional: useRef(null)
  };

  // Complete services data with categories
  const serviceCategories = [
    {
      id: 'outdoor',
      name: ' Outdoor & Large Format',
      icon: '',
      description: 'High-impact printing for outdoor advertising and events',
      services: [
        { title: "Flex Printing", description: "Large-format prints perfect for outdoor advertising & events.", image: flex, tag: "Popular", keywords: "flex printing, outdoor advertising", popular: true },
        { title: "Vinyl Printing", description: "High-quality vinyl prints that withstand harsh weather conditions.", image: vnyl, tag: "", keywords: "vinyl printing, weather resistant", popular: false },
        { title: "Hoarding", description: "Bold, eye-catching hoarding prints for outdoor brand promotions.", image: hoarding, tag: "", keywords: "hoarding printing, billboard", popular: false },
        // { title: "Banner Printing", description: "Custom banners for events, shops, and promotions.", image: banner || flex, tag: "", keywords: "banner printing, event banner", popular: true },
        { title: "Canopy Tent", description: "Custom printed tents for exhibitions and outdoor events.", image: canopy, tag: "New", keywords: "canopy tent, outdoor tent", popular: false },
      ]
    },
    {
      id: 'invitation',
      name: ' Wedding & Invitations',
      icon: '',
      description: 'Elegant and personalized invitations for special occasions',
      services: [
        { title: "Shadi Card", description: "Elegant personalized wedding invitations with premium finish.", image: shadi_card, tag: "Trending", keywords: "wedding cards, shadi card", popular: true },
        { title: "Invitation Cards", description: "All types of invitation cards for weddings, birthdays & events.", image: all_card, tag: "", keywords: "invitation cards, event invitations", popular: true },
        { title: "Birthday Invitation", description: "Fun and creative birthday party invitations.", image: bdayCard, tag: "", keywords: "birthday invitation, party cards", popular: false },
        { title: "Engagement Card", description: "Beautiful engagement and roka ceremony invitations.", image: engagementCard, tag: "", keywords: "engagement card, roka card", popular: false },
      ]
    },
    {
      id: 'business',
      name: ' Business Printing',
      icon: '',
      description: 'Professional printing solutions for your business',
      services: [
        { title: "Visiting Card", description: "Professional cards that leave a lasting brand impression.", image: visiting, tag: "", keywords: "visiting card, business card", popular: true },
        { title: "Letterhead", description: "Professional letterheads for official communication.", image: letterhead || visiting, tag: "", keywords: "letterhead, official stationery", popular: false },
        { title: "Envelope Printing", description: "Custom printed envelopes for business correspondence.", image: envelopPri || visiting, tag: "", keywords: "envelope printing, business envelope", popular: false },
        { title: "Doctor File", description: "Customized professional files for clinics and healthcare.", image: drFile, tag: "", keywords: "doctor file, medical file", popular: false },
        { title: "Cash Memo", description: "Custom cash memo and invoice books for shops.", image: memo, tag: "", keywords: "cash memo, invoice book", popular: false },
      ]
    },
    {
      id: 'specialty',
      name: ' Specialty Printing',
      icon: '',
      description: 'Unique and custom printing solutions',
      services: [
        { title: "3D Printing", description: "Unique custom prints and designs for any special occasion.", image: new_d, tag: "New", keywords: "3D printing, custom 3D prints", popular: false },
        { title: "Digital Printing", description: "On-demand vibrant printing for brochures, posters & more.", image: digital, tag: "", keywords: "digital printing, on-demand printing", popular: true },
        { title: "Offset Printing", description: "High-quality bulk printing with cost-effective results.", image: offsetPri, tag: "", keywords: "offset printing, bulk printing", popular: false },
        { title: "Screen Printing", description: "Durable screen printing for fabrics and promotional items.", image: tshirt || digital, tag: "", keywords: "screen printing, fabric printing", popular: false },
        { title: "Poster Printing", description: "Eye-catching posters for events and promotions.", image: digital, tag: "", keywords: "poster printing, event poster", popular: false },
      ]
    },
    {
      id: 'signage',
      name: ' Signage & Display',
      icon: '',
      description: 'Attractive signage solutions for shops and events',
      services: [
        { title: "Light Board", description: "Vibrant, durable light boards ideal for shops & showrooms.", image: light_board, tag: "", keywords: "light board, illuminated signage", popular: false },
        { title: "Standee Frame", description: "Portable stand boards perfect for events & storefront displays.", image: stand_board, tag: "", keywords: "standee, stand board", popular: false },
        { title: "Shop Board", description: "Custom shop front signage and name boards.", image: light_board, tag: "", keywords: "shop board, name board", popular: false },
        { title: "Acrylic Signage", description: "Premium acrylic signs for modern businesses.", image: light_board, tag: "", keywords: "acrylic signage, modern sign", popular: false },
      ]
    },
    {
      id: 'promotional',
      name: ' Promotional Items',
      icon: '',
      description: 'Branded merchandise and marketing materials',
      services: [
        { title: "Pamphlets & Brochures", description: "Professionally designed pamphlets for marketing.", image: pamplet, tag: "", keywords: "pamphlet, brochure", popular: true },
        { title: "Sticker Printing", description: "Custom sticker prints for any purpose or occasion.", image: sticker, tag: "", keywords: "sticker printing, custom stickers", popular: false },
        { title: "Calendar Printing", description: "Custom calendars for branding and gifting.", image: calendar || sticker, tag: "", keywords: "calendar printing, custom calendar", popular: false },
        { title: "Notebook Printing", description: "Branded notebooks and diaries for corporate gifting.", image: notebook || sticker, tag: "", keywords: "notebook printing, diary printing", popular: false },
        { title: "Mug Printing", description: "Custom printed mugs for promotions and gifts.", image: mug || sticker, tag: "", keywords: "mug printing, custom mug", popular: false },
        { title: "T-Shirt Printing", description: "Custom t-shirt printing for events and branding.", image: tshirt || sticker, tag: "", keywords: "t-shirt printing, custom apparel", popular: false },
      ]
    }
  ];

  // Flatten services for structured data
  const allServices = serviceCategories.flatMap(cat => cat.services);

  const handleOrderNow = (serviceTitle) => {
    navigate('/order', { state: { serviceType: serviceTitle } });
  };

  const scrollHorizontal = (categoryId, direction) => {
    const ref = scrollRefs[categoryId];
    if (ref && ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Balajee Printing and Flex Services",
    "description": "Comprehensive printing services including outdoor printing, wedding cards, business printing, specialty printing, signage, and promotional items.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Balajee Printing and Flex",
      "telephone": "+917645980320"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Printing Services",
      "itemListElement": allServices.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Balajee Printing Services | Flex, Wedding Cards, Business Printing & More</title>
        <meta name="description" content="Comprehensive printing services in Dhanbad: Flex printing, wedding cards, visiting cards, digital printing, hoarding, signage, and promotional items. Quality guaranteed since 2010." />
        <meta name="keywords" content="flex printing Dhanbad, wedding cards, visiting cards, digital printing, hoarding, banner printing, offset printing, screen printing, 3D printing, sticker printing, pamphlet printing" />
        <meta name="author" content="Balajee Printing and Flex" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Balajee Printing Services | Complete Printing Solutions" />
        <meta property="og:description" content="All your printing needs under one roof - from flex printing to wedding cards to business stationery." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={flex} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <section id="services" className="py-8 sm:py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              What We Offer
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Printing Services</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
              From outdoor advertising to elegant wedding cards — we deliver premium quality for every printing need
            </p>
          </div>

          {/* Categories - Horizontal Scroll Sections */}
          {serviceCategories.map((category, catIdx) => (
            <div key={category.id} className="mb-12 sm:mb-16">
              
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl">{category.icon}</span>
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                      {category.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">{category.description}</p>
                  </div>
                </div>
                
                {/* Scroll Buttons - Desktop only */}
                <div className="hidden md:flex gap-2">
                  <button
                    onClick={() => scrollHorizontal(category.id, 'left')}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-200"
                    aria-label="Scroll left"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollHorizontal(category.id, 'right')}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-200"
                    aria-label="Scroll right"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="relative">
                <div
                  ref={scrollRefs[category.id]}
                  className="flex overflow-x-auto gap-4 pb-4 scroll-smooth hide-scrollbar"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {category.services.map((service, idx) => (
                    <article
                      key={`${category.id}-${idx}`}
                      onMouseEnter={() => setHoveredCard(`${category.id}-${idx}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                      itemScope
                      itemType="https://schema.org/Service"
                    >
                      <meta itemProp="name" content={service.title} />
                      <meta itemProp="description" content={service.description} />
                      
                      {/* Image Container */}
                      <div className="relative h-40 sm:h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Tag Badge */}
                        {service.tag && (
                          <span className="absolute top-2 left-2 z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md">
                            {service.tag}
                          </span>
                        )}
                        
                        {/* Popular Badge */}
                        {service.popular && !service.tag && (
                          <span className="absolute top-2 left-2 z-10 bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md">
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-gray-800 font-bold text-base sm:text-lg leading-tight mb-2 group-hover:text-blue-700 transition-colors duration-200 line-clamp-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3">
                          {service.description}
                        </p>
                        
                        {/* Order Button */}
                        <button
                          onClick={() => handleOrderNow(service.title)}
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-600 hover:to-blue-700 text-blue-700 hover:text-white font-semibold text-xs sm:text-sm py-2 rounded-xl transition-all duration-200 group/btn"
                        >
                          <span>Order Now</span>
                          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
                
                {/* Gradient Fade Indicators */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none md:hidden" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none md:hidden" />
              </div>
              
              {/* Scroll Hint for Mobile */}
              <p className="text-center text-xs text-gray-400 mt-3 md:hidden">
                ← Swipe to see more →
              </p>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8">
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                Need something custom? We've got you covered!
              </p>
              <button
                onClick={() => handleOrderNow('Custom Service')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold text-sm sm:text-base uppercase tracking-widest px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-lg hover:shadow-blue-400/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Custom Quote
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Add this CSS in your global CSS file or component */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Services;




// //odrepage
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // ADD THIS IMPORT
// import { Helmet } from 'react-helmet-async'; // Add this package if not already installed
// import flex from "../all_assets/flex_print.jpeg";
// import vnyl from "../all_assets/Vinyl-Printing-Process.jpg";
// import new_d from "../all_assets/3d_printings.jpg";
// import hoarding from "../all_assets/hoarding.webp";
// import light_board from "../all_assets/light_board.jpeg";
// import stand_board from "../all_assets/stand_board.jpeg";
// import shadi_card from "../all_assets/shadi_card.jpg";
// import visiting from "../all_assets/visiting_card.avif";
// import all_card from "../all_assets/all_cards.avif";
// import pamplet from "../all_assets/pamplets.jpg";
// import sticker from "../all_assets/sticker.avif";
// import digital from "../all_assets/digital_p.jpeg";

// const Services = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const navigate = useNavigate(); // ADD THIS - for navigation

//   const services = [
//     { 
//       title: "Flex Printing", 
//       description: "Large-format prints perfect for outdoor advertising & events.", 
//       image: flex, 
//       tag: "Popular",
//       keywords: "flex printing, outdoor advertising, large format printing, banner printing",
//       category: "Outdoor Printing"
//     },
//     { 
//       title: "Vinyl Printing", 
//       description: "High-quality vinyl prints that withstand harsh weather conditions.", 
//       image: vnyl, 
//       tag: "",
//       keywords: "vinyl printing, weather resistant prints, durable printing, outdoor vinyl",
//       category: "Outdoor Printing"
//     },
//     { 
//       title: "3D Printing", 
//       description: "Unique custom prints and designs for any special occasion.", 
//       image: new_d, 
//       tag: "New",
//       keywords: "3D printing, custom 3D prints, 3D design, additive manufacturing",
//       category: "Specialty Printing"
//     },
//     { 
//       title: "Hoarding", 
//       description: "Bold, eye-catching hoarding prints for outdoor brand promotions.", 
//       image: hoarding, 
//       tag: "",
//       keywords: "hoarding printing, billboard printing, outdoor hoarding, brand promotion",
//       category: "Outdoor Advertising"
//     },
//     { 
//       title: "Light Board", 
//       description: "Vibrant, durable light boards ideal for shops & showrooms.", 
//       image: light_board, 
//       tag: "",
//       keywords: "light board printing, illuminated signage, LED light board, shop signage",
//       category: "Signage"
//     },
//     { 
//       title: "Standee Frame", 
//       description: "Portable stand boards perfect for events & storefront displays.", 
//       image: stand_board, 
//       tag: "",
//       keywords: "standee printing, stand board, event display, portable signage",
//       category: "Event Printing"
//     },
//     { 
//       title: "Shadi Card", 
//       description: "Elegant personalized wedding invitations with premium finish.", 
//       image: shadi_card, 
//       tag: "Trending",
//       keywords: "wedding cards, shadi card, marriage invitation, wedding printing",
//       category: "Invitation Cards"
//     },
//     { 
//       title: "Visiting Card", 
//       description: "Professional cards that leave a lasting brand impression.", 
//       image: visiting, 
//       tag: "",
//       keywords: "visiting card, business card, professional cards, corporate printing",
//       category: "Business Printing"
//     },
//     { 
//       title: "Invitation Cards", 
//       description: "All types of invitation cards for weddings, birthdays & events.", 
//       image: all_card, 
//       tag: "",
//       keywords: "invitation cards, event invitations, custom invitations, party cards",
//       category: "Invitation Cards"
//     },
//     { 
//       title: "Pamphlets & Brochures", 
//       description: "Professionally designed pamphlets for marketing & promotions.", 
//       image: pamplet, 
//       tag: "",
//       keywords: "pamphlet printing, brochure printing, marketing materials, flyers",
//       category: "Marketing Materials"
//     },
//     { 
//       title: "Sticker Printing", 
//       description: "Custom sticker prints for any purpose or occasion.", 
//       image: sticker, 
//       tag: "",
//       keywords: "sticker printing, custom stickers, label printing, vinyl stickers",
//       category: "Specialty Printing"
//     },
//     { 
//       title: "Digital Printing", 
//       description: "On-demand vibrant printing for brochures, posters & more.", 
//       image: digital, 
//       tag: "",
//       keywords: "digital printing, on-demand printing, poster printing, brochure printing",
//       category: "Digital Printing"
//     },
//   ];

//   // Handle Order Now click
//   const handleOrderNow = (serviceTitle) => {
//     // Navigate to order page with service name in state (optional)
//     navigate('/order', { state: { serviceType: serviceTitle } });
//   };

//   // Generate structured data for services
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "Service",
//     "name": "Balajee Printing and Flex Services",
//     "description": "Comprehensive printing services including flex printing, vinyl printing, 3D printing, hoarding, light boards, standee frames, wedding cards, visiting cards, invitation cards, pamphlets, stickers, and digital printing.",
//     "provider": {
//       "@type": "LocalBusiness",
//       "name": "Balajee Printing and Flex",
//       "telephone": "+917645980320",
//       "contactPoint": {
//         "@type": "ContactPoint",
//         "telephone": "+917645980320",
//         "contactType": "customer service",
//         "availableLanguage": ["English", "Hindi"]
//       }
//     },
//     "hasOfferCatalog": {
//       "@type": "OfferCatalog",
//       "name": "Printing Services",
//       "itemListElement": services.map((service, index) => ({
//         "@type": "Offer",
//         "itemOffered": {
//           "@type": "Service",
//           "name": service.title,
//           "description": service.description
//         },
//         "position": index + 1
//       }))
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         {/* Meta Tags */}
//         <title>Balajee Printing and Flex Services | Professional Printing Solutions</title>
//         <meta name="description" content="Balajee Printing and Flex offers premium printing services including flex printing, vinyl printing, 3D printing, hoarding, wedding cards, visiting cards, and more. Quality printing with fast turnaround." />
//         <meta name="keywords" content="printing services, flex printing, vinyl printing, 3D printing, hoarding printing, wedding cards, visiting cards, invitation cards, sticker printing, digital printing, Balajee Printing" />
//         <meta name="author" content="Balajee Printing and Flex" />
//         <meta name="robots" content="index, follow" />
//         <meta name="language" content="English" />
        
//         {/* Open Graph Meta Tags */}
//         <meta property="og:title" content="Balajee Printing and Flex Services | Professional Printing Solutions" />
//         <meta property="og:description" content="Premium printing services for all your needs - flex, vinyl, 3D printing, wedding cards, visiting cards, and more. Quality guaranteed with fast delivery." />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content={flex} />
//         <meta property="og:url" content={window.location.href} />
        
//         {/* Twitter Card Meta Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Balajee Printing and Flex Services | Professional Printing Solutions" />
//         <meta name="twitter:description" content="Premium printing services - flex, vinyl, 3D printing, wedding cards, visiting cards, and more. Quality printing with fast turnaround." />
//         <meta name="twitter:image" content={flex} />
        
//         {/* Canonical URL */}
//         <link rel="canonical" href={window.location.href} />
        
//         {/* Structured Data */}
//         <script type="application/ld+json">
//           {JSON.stringify(structuredData)}
//         </script>
//       </Helmet>

//       <section 
//         id="services" 
//         className="py-6 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-gray-50 to-white"
//         aria-label="Our Services"
//       >
//         <div className="max-w-7xl mx-auto">

//           {/* Section Header */}
//           <div className="text-center mb-12">
//             <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
//               What We Offer
//             </span>
//             <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
//               Our <span className="text-blue-700">Services</span>
//             </h1>
//             <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
//               From flex printing to invitation cards — we deliver premium quality for every printing need.
//             </p>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
//             {services.map((service, index) => (
//               <article
//                 key={index}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
//                 itemScope
//                 itemType="https://schema.org/Service"
//               >
//                 {/* Hidden meta data for SEO */}
//                 <meta itemProp="name" content={service.title} />
//                 <meta itemProp="description" content={service.description} />
//                 <meta itemProp="serviceType" content={service.category} />
//                 <meta itemProp="keywords" content={service.keywords} />
                
//                 {/* Tag Badge */}
//                 {service.tag && (
//                   <span className="absolute top-2 left-2 z-10 bg-yellow-400 text-yellow-900 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow">
//                     {service.tag}
//                   </span>
//                 )}

//                 {/* Image */}
//                 <div className="h-32 sm:h-36 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={`${service.title} service at Balajee Printing and Flex - ${service.description}`}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     loading="lazy"
//                     itemProp="image"
//                   />
//                 </div>

//                 {/* Overlay on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

//                 {/* Content */}
//                 <div className="p-3 sm:p-4 relative z-10">
//                   <h2 className="text-gray-900 font-bold text-sm sm:text-base leading-tight mb-1 group-hover:text-blue-700 transition-colors duration-200">
//                     {service.title}
//                   </h2>
//                   <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Bottom CTA strip - UPDATED to use navigate */}
//                 <div className="px-3 sm:px-4 pb-3">
//                   <button
//                     onClick={() => handleOrderNow(service.title)}
//                     className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 text-xs font-bold uppercase tracking-wider transition-colors duration-200 group/link"
//                     aria-label={`Order ${service.title} service`}
//                   >
//                     <span>Order Now</span>
//                     <svg className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Bottom CTA - UPDATED to use navigate */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-500 text-sm mb-4">Need something custom? We've got you covered!</p>
//             <button
//               onClick={() => handleOrderNow('Custom Service')}
//               className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg hover:shadow-blue-400/40 hover:-translate-y-0.5 transition-all duration-200"
//               aria-label="Contact us for custom printing services"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//               </svg>
//               Order Now
//             </button>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Services;


