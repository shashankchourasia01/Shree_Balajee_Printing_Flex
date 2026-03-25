import React from "react";
import shopImage from "../all_assets/circle_img.webp";
import {
  FaPrint,
  FaTshirt,
  FaRuler,
  FaPalette,
  FaShippingFast,
} from "react-icons/fa";

const machines = [
  {
    id: 1,
    name: "Digital Press",
    description: "High-speed digital printing for vibrant, precise prints on various materials.",
    icon: <FaPrint className="text-2xl text-blue-600" aria-hidden="true" />,
    iconBg: "bg-blue-50",
    border: "hover:border-blue-400",
    specs: ["1200 dpi resolution", "Up to 100 pages/min", "CMYK+ color system"],
    keywords: "digital printing press, high-speed printer, Dhanbad printing"
  },
  {
    id: 2,
    name: "Large Format Printer",
    description: "Wide-format printer for banners, posters, and outdoor signage.",
    icon: <FaRuler className="text-2xl text-emerald-600" aria-hidden="true" />,
    iconBg: "bg-emerald-50",
    border: "hover:border-emerald-400",
    specs: ['Up to 60" width', "Eco-solvent inks", "Outdoor durability"],
    keywords: "large format printer, banner printer, wide format printing Dhanbad"
  },
  {
    id: 3,
    name: "Screen Printing",
    description: "Traditional screen printing for apparel and specialty items.",
    icon: <FaTshirt className="text-2xl text-red-500" aria-hidden="true" />,
    iconBg: "bg-red-50",
    border: "hover:border-red-400",
    specs: ["6-color station", "Automatic press", "Flash dryer"],
    keywords: "screen printing, apparel printing, custom t-shirt printing Dhanbad"
  },
  {
    id: 4,
    name: "Color Matching System",
    description: "Advanced color calibration for brand-consistent results.",
    icon: <FaPalette className="text-2xl text-purple-600" aria-hidden="true" />,
    iconBg: "bg-purple-50",
    border: "hover:border-purple-400",
    specs: ["Pantone certified", "Spectrophotometer", "Spot color mixing"],
    keywords: "color matching, Pantone printing, brand color accuracy"
  },
  {
    id: 5,
    name: "Finishing Equipment",
    description: "Professional finishing tools for perfect final products.",
    icon: <FaShippingFast className="text-2xl text-yellow-600" aria-hidden="true" />,
    iconBg: "bg-yellow-50",
    border: "hover:border-yellow-400",
    specs: ["Auto cutter", "Laminator", "Perfect binding"],
    keywords: "finishing equipment, lamination, cutting binding Dhanbad"
  },
];

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rush Delivery",
    desc: "24-hour turnaround available for urgent orders.",
    keywords: "urgent printing, fast delivery, 24 hour printing"
  },
  {
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Eco-Friendly",
    desc: "Environmentally friendly inks and sustainable materials.",
    keywords: "eco-friendly printing, sustainable printing, green printing"
  },
  {
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Quality Control",
    desc: "Strict quality checks at every production stage.",
    keywords: "quality control, printing quality check, quality assurance"
  },
  {
    icon: (
      <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Expert Team",
    desc: "Skilled technicians with years of printing experience.",
    keywords: "expert printers, skilled technicians, experienced team"
  },
];

const stats = [
  { value: "5+", label: "Years Experience", description: "Over 5 years of printing excellence" },
  { value: "500+", label: "Happy Clients", description: "More than 500 satisfied customers" },
  { value: "1000+", label: "Projects Done", description: "Over 1000 successful printing projects" },
  { value: "24hr", label: "Rush Turnaround", description: "24-hour emergency printing service" },
];

const Shop = () => {
  // Structured data for facility
  const facilityStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shree Balajee Printing & Flex Facility",
    "description": "State-of-the-art printing facility in Dhanbad with advanced equipment and expert team",
    "image": shopImage,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhanbad",
      "addressRegion": "Jharkhand",
      "addressCountry": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Printing Equipment & Services",
      "itemListElement": machines.map((machine, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": machine.name,
          "description": machine.description,
          "keywords": machine.keywords
        }
      }))
    }
  };

  return (
    <div 
      className="bg-gray-50"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Hidden metadata */}
      <meta itemProp="name" content="Shree Balajee Printing & Flex - Printing Facility" />
      <meta itemProp="description" content="Premium printing facility in Dhanbad with digital press, large format printers, screen printing, and finishing equipment. Quality printing since 2019." />
      <meta itemProp="priceRange" content="₹₹" />
      <meta itemProp="telephone" content="+917645980320" />

      {/* ── HERO ── */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden">
        <img
          src={shopImage}
          alt="Shree Balajee Printing & Flex - Modern printing facility in Dhanbad with advanced equipment"
          className="w-full h-full object-cover object-center"
          loading="eager"
          width="1200"
          height="600"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10 flex flex-col items-center justify-end pb-10 px-4 text-center">
          <span className="inline-block bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-3">
            Shree Balajee
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wide mb-2 drop-shadow-xl">
            Our Printing <span className="text-yellow-300">Facility</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-xl">
            State-of-the-art equipment producing quality prints with precision and care.
          </p>
        </div>
      </div>

      {/* Hidden stats for SEO - visible only to search engines */}
      <div className="hidden" aria-hidden="true">
        {stats.map((stat, i) => (
          <div key={i}>
            <span itemProp="statistics">{stat.value}</span>
            <span itemProp="statisticName">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100 mb-3">
            Our Equipment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Premium <span className="text-blue-700">Printing</span> Services
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4" aria-hidden="true">
            <div className="h-1 w-10 bg-blue-700 rounded-full" />
            <div className="h-1 w-4 bg-yellow-400 rounded-full" />
          </div>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            We combine cutting-edge machinery with traditional craftsmanship to deliver exceptional results — every project, big or small.
          </p>
        </div>

        {/* ── MACHINES HORIZONTAL SCROLL ── */}
        <div className="sm:hidden flex items-center gap-2 mb-3" aria-label="Swipe horizontally to view more equipment">
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-xs text-gray-400 font-medium">Swipe to explore</span>
        </div>

        <div 
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [scrollbar-color:#93c5fd_#f3f4f6]"
          role="region"
          aria-label="Printing equipment and machinery list"
        >
          {machines.map((machine) => (
            <article
              key={machine.id}
              className={`group flex-shrink-0 w-[300px] sm:w-[320px] bg-white rounded-2xl border-2 border-transparent ${machine.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden snap-start`}
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* Hidden SEO metadata */}
              <meta itemProp="name" content={machine.name} />
              <meta itemProp="description" content={machine.description} />
              <meta itemProp="keywords" content={machine.keywords} />
              
              <div className="p-5 sm:p-6">
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-xl ${machine.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {machine.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg leading-tight">
                    {machine.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {machine.description}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5" aria-label={`${machine.name} specifications`}>
                  {machine.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent bar */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-yellow-400 transition-all duration-500 rounded-b-2xl" aria-hidden="true" />
            </article>
          ))}
        </div>

        {/* ── WHY CHOOSE US ── */}
        <div className="mt-6 rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100">
          <div className="flex flex-col lg:flex-row">

            {/* Left — highlights */}
            <div className="lg:w-3/5 p-8 sm:p-10">
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100 mb-4">
                Why Choose Us
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                We Print With <span className="text-blue-700">Passion</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <div 
                    key={i} 
                    className="flex gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all duration-200 group"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <meta itemProp="name" content={h.title} />
                    <meta itemProp="description" content={h.desc} />
                    <meta itemProp="keywords" content={h.keywords} />
                    
                    <div className="w-9 h-9 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      {h.icon}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-sm mb-0.5">{h.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Add structured data */}
      <script type="application/ld+json">
        {JSON.stringify(facilityStructuredData)}
      </script>

      {/* Add equipment list schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Printing Equipment at Shree Balajee Printing & Flex",
          "description": "Complete list of printing machinery and equipment",
          "itemListElement": machines.map((machine, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": machine.name,
            "description": machine.description,
            "url": `#machine-${machine.id}`
          }))
        })}
      </script>
    </div>
  );
};

export default Shop;