//seo 
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'; // Add this package if not already installed
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

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { 
      title: "Flex Printing", 
      description: "Large-format prints perfect for outdoor advertising & events.", 
      image: flex, 
      tag: "Popular",
      keywords: "flex printing, outdoor advertising, large format printing, banner printing",
      category: "Outdoor Printing"
    },
    { 
      title: "Vinyl Printing", 
      description: "High-quality vinyl prints that withstand harsh weather conditions.", 
      image: vnyl, 
      tag: "",
      keywords: "vinyl printing, weather resistant prints, durable printing, outdoor vinyl",
      category: "Outdoor Printing"
    },
    { 
      title: "3D Printing", 
      description: "Unique custom prints and designs for any special occasion.", 
      image: new_d, 
      tag: "New",
      keywords: "3D printing, custom 3D prints, 3D design, additive manufacturing",
      category: "Specialty Printing"
    },
    { 
      title: "Hoarding", 
      description: "Bold, eye-catching hoarding prints for outdoor brand promotions.", 
      image: hoarding, 
      tag: "",
      keywords: "hoarding printing, billboard printing, outdoor hoarding, brand promotion",
      category: "Outdoor Advertising"
    },
    { 
      title: "Light Board", 
      description: "Vibrant, durable light boards ideal for shops & showrooms.", 
      image: light_board, 
      tag: "",
      keywords: "light board printing, illuminated signage, LED light board, shop signage",
      category: "Signage"
    },
    { 
      title: "Standee Frame", 
      description: "Portable stand boards perfect for events & storefront displays.", 
      image: stand_board, 
      tag: "",
      keywords: "standee printing, stand board, event display, portable signage",
      category: "Event Printing"
    },
    { 
      title: "Shadi Card", 
      description: "Elegant personalized wedding invitations with premium finish.", 
      image: shadi_card, 
      tag: "Trending",
      keywords: "wedding cards, shadi card, marriage invitation, wedding printing",
      category: "Invitation Cards"
    },
    { 
      title: "Visiting Card", 
      description: "Professional cards that leave a lasting brand impression.", 
      image: visiting, 
      tag: "",
      keywords: "visiting card, business card, professional cards, corporate printing",
      category: "Business Printing"
    },
    { 
      title: "Invitation Cards", 
      description: "All types of invitation cards for weddings, birthdays & events.", 
      image: all_card, 
      tag: "",
      keywords: "invitation cards, event invitations, custom invitations, party cards",
      category: "Invitation Cards"
    },
    { 
      title: "Pamphlets & Brochures", 
      description: "Professionally designed pamphlets for marketing & promotions.", 
      image: pamplet, 
      tag: "",
      keywords: "pamphlet printing, brochure printing, marketing materials, flyers",
      category: "Marketing Materials"
    },
    { 
      title: "Sticker Printing", 
      description: "Custom sticker prints for any purpose or occasion.", 
      image: sticker, 
      tag: "",
      keywords: "sticker printing, custom stickers, label printing, vinyl stickers",
      category: "Specialty Printing"
    },
    { 
      title: "Digital Printing", 
      description: "On-demand vibrant printing for brochures, posters & more.", 
      image: digital, 
      tag: "",
      keywords: "digital printing, on-demand printing, poster printing, brochure printing",
      category: "Digital Printing"
    },
  ];

  // Generate structured data for services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Balajee Printing and Flex Services",
    "description": "Comprehensive printing services including flex printing, vinyl printing, 3D printing, hoarding, light boards, standee frames, wedding cards, visiting cards, invitation cards, pamphlets, stickers, and digital printing.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Balajee Printing and Flex",
      "telephone": "+917645980320",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917645980320",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Printing Services",
      "itemListElement": services.map((service, index) => ({
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
        {/* Meta Tags */}
        <title>Balajee Printing and Flex Services | Professional Printing Solutions</title>
        <meta name="description" content="Balajee Printing and Flex offers premium printing services including flex printing, vinyl printing, 3D printing, hoarding, wedding cards, visiting cards, and more. Quality printing with fast turnaround." />
        <meta name="keywords" content="printing services, flex printing, vinyl printing, 3D printing, hoarding printing, wedding cards, visiting cards, invitation cards, sticker printing, digital printing, Balajee Printing" />
        <meta name="author" content="Balajee Printing and Flex" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Balajee Printing and Flex Services | Professional Printing Solutions" />
        <meta property="og:description" content="Premium printing services for all your needs - flex, vinyl, 3D printing, wedding cards, visiting cards, and more. Quality guaranteed with fast delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={flex} />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Balajee Printing and Flex Services | Professional Printing Solutions" />
        <meta name="twitter:description" content="Premium printing services - flex, vinyl, 3D printing, wedding cards, visiting cards, and more. Quality printing with fast turnaround." />
        <meta name="twitter:image" content={flex} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section 
        id="services" 
        className="py-6 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-gray-50 to-white"
        aria-label="Our Services"
      >
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              What We Offer
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Our <span className="text-blue-700">Services</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              From flex printing to invitation cards — we deliver premium quality for every printing need.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {services.map((service, index) => (
              <article
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Hidden meta data for SEO */}
                <meta itemProp="name" content={service.title} />
                <meta itemProp="description" content={service.description} />
                <meta itemProp="serviceType" content={service.category} />
                <meta itemProp="keywords" content={service.keywords} />
                
                {/* Tag Badge */}
                {service.tag && (
                  <span className="absolute top-2 left-2 z-10 bg-yellow-400 text-yellow-900 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow">
                    {service.tag}
                  </span>
                )}

                {/* Image */}
                <div className="h-32 sm:h-36 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} service at Balajee Printing and Flex - ${service.description}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 via-blue-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Content */}
                <div className="p-3 sm:p-4 relative z-10">
                  <h2 className="text-gray-900 font-bold text-sm sm:text-base leading-tight mb-1 group-hover:text-blue-700 transition-colors duration-200">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA strip */}
                <div className="px-3 sm:px-4 pb-3">
                  <a
                    href="https://wa.me/917645980320?text=I'm%20interested%20in%20your%20{encodeURIComponent(service.title)}%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 text-xs font-bold uppercase tracking-wider transition-colors duration-200 group/link"
                    aria-label={`Order ${service.title} service on WhatsApp`}
                  >
                    <span>Order Now</span>
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm mb-4">Need something custom? We've got you covered!</p>
            <a
              href="https://wa.me/917645980320?text=I%20need%20a%20custom%20printing%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg hover:shadow-blue-400/40 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Contact us on WhatsApp for custom printing services"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;
