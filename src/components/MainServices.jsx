import React from "react";
import {
  FaFlag,
  FaNewspaper,
  FaImage,
  FaAddressCard,
  FaPrint,
  FaBorderStyle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaFlag className="text-blue-600 text-xl" aria-hidden="true" />,
    title: "Banner Printing",
    description: "State-of-the-art printers and premium materials to produce sharp, vibrant prints that meet your exact specifications.",
    keywords: "banner printing Dhanbad, flex banner, outdoor banner printing",
    category: "Outdoor Printing"
  },
  {
    icon: <FaImage className="text-blue-600 text-xl" aria-hidden="true" />,
    title: "Poster Printing",
    description: "Every print job goes through strict quality control to ensure the final product meets our high standards.",
    keywords: "poster printing Dhanbad, custom posters, digital poster printing",
    category: "Digital Printing"
  },
  {
    icon: <FaNewspaper className="text-blue-600 text-xl" aria-hidden="true" />,
    title: "Shadi Card",
    description: "Elegant personalized wedding cards — from traditional to modern designs crafted to leave a lasting impression.",
    keywords: "wedding cards Dhanbad, shadi card printing, marriage invitation cards",
    category: "Invitation Cards"
  },
  {
    icon: <FaAddressCard className="text-blue-600 text-xl" aria-hidden="true" />,
    title: "Business Card",
    description: "Premium business cards carefully packaged and delivered — designed to reflect your brand with quality finish.",
    keywords: "business card printing Dhanbad, visiting cards, professional cards",
    category: "Business Printing"
  },
  {
    icon: <FaPrint className="text-blue-600 text-xl" aria-hidden="true" />,
    title: "Digital Printing",
    description: "High-quality digital printing with custom designs, vibrant colors, and fast turnaround for every occasion.",
    keywords: "digital printing Dhanbad, on-demand printing, custom printing",
    category: "Digital Printing"
  },
  {
    icon: <FaBorderStyle className="text-blue-600 text-xl" aria-hidden="true" />,
    title: "Framing",
    description: "Expert banner and custom framing solutions — perfect for weddings, events, photos, and more.",
    keywords: "photo framing Dhanbad, banner framing, custom frames",
    category: "Framing Services"
  },
];

const MainServices = () => {
  return (
    <section 
      className="relative py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#003a75] via-[#004080] to-[#002954] overflow-hidden"
      aria-label="Main Printing Services"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Hidden metadata for SEO */}
      <meta itemProp="name" content="Shree Balajee Printing & Flex - Main Services" />
      <meta itemProp="description" content="Professional printing services in Dhanbad including banner printing, poster printing, wedding cards, business cards, digital printing, and framing services." />
      <meta itemProp="provider" content="Shree Balajee Printing & Flex" />
      <meta itemProp="areaServed" content="Dhanbad, Jharkhand, India" />

      {/* Decorative blobs - adding aria-hidden for accessibility */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-7">
          <span className="inline-block bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-[0.2em] px-5 py-1.5 rounded-full mb-4">
            What We Do Best
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-300 uppercase tracking-wide mb-3">
            Main Services
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/80 uppercase tracking-widest">
            Quality Printing
          </h3>
          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-yellow-400/40" aria-hidden="true" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" aria-hidden="true" />
            <div className="h-px w-16 bg-yellow-400/40" aria-hidden="true" />
          </div>
        </div>

        {/* Swipe hint - mobile only */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:hidden" aria-label="Swipe horizontally to view more services">
          <svg className="w-4 h-4 text-yellow-400/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-yellow-400/60 text-xs font-medium tracking-wider">Swipe to explore</span>
        </div>

        {/* Cards Horizontal Scroll */}
        <div 
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [scrollbar-color:#facc15_rgba(255,255,255,0.1)]"
          role="region"
          aria-label="Services list - swipe horizontally to view all services"
        >
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative flex-shrink-0 w-[280px] sm:w-[300px] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-400/40 backdrop-blur-sm rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 snap-start"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Hidden SEO data */}
              <meta itemProp="name" content={service.title} />
              <meta itemProp="description" content={service.description} />
              <meta itemProp="serviceType" content={service.category} />
              <meta itemProp="keywords" content={service.keywords} />
              
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 bg-blue-100 group-hover:bg-yellow-400/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                <span className="group-hover:text-yellow-400 transition-colors duration-300">
                  {service.icon}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-1.5 group-hover:text-yellow-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" aria-hidden="true" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-7 text-center">
          <p className="text-white/50 text-sm mb-5">
            Looking for a service not listed? We handle custom orders too!
          </p>
          <a
            href="https://wa.me/917645980320?text=I'm%20interested%20in%20your%20printing%20services.%20Please%20share%20details%20and%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-lg shadow-yellow-400/25 hover:-translate-y-0.5 hover:shadow-yellow-400/40 transition-all duration-200"
            aria-label="Get a free quote on WhatsApp"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get a Free Quote
          </a>
        </div>

      </div>
      
      {/* Add structured data for services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Main Printing Services - Shree Balajee Printing & Flex",
          "description": "Professional printing services in Dhanbad",
          "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Shree Balajee Printing & Flex",
                "telephone": "+917645980320"
              }
            }
          }))
        })}
      </script>
    </section>
  );
};

export default MainServices;