//sleleton screen code
// src/components/Project.jsx

import React, { useState, useEffect } from 'react';
import ProjectSkeleton from './ProjectSkeleton'; // ← 1. IMPORT

import cash_memo     from "../all_assets/cash_memo.jpg";
import visiting_card from "../all_assets/new_visiting.jpg";
import menu          from "../all_assets/restaurent_img.jpg";
import stand_board   from "../all_assets/stand_board.jpeg";
import light_frame   from "../all_assets/light_frame.jpg";
import offset        from "../all_assets/offset.jpg";
import dr_file       from "../all_assets/doctor_file.jpg";
import letter_head   from "../all_assets/letter_head.jpg";
import screen_pr     from "../all_assets/screen_printing.jpg";
import canopy        from "../all_assets/canopy.jpg";
import hoarding      from "../all_assets/hoarding.webp";
import shield        from "../all_assets/shield.webp";

const projects = [
  { image: cash_memo,      title: 'Cash Memo',         tag: 'Stationery',  description: 'Custom cash memo design for stationery stores & businesses.' },
  { image: visiting_card,  title: 'Visiting Card',     tag: 'Branding',    description: 'Perfect for professionals, businesses, and personal branding.' },
  { image: menu,           title: 'Restaurant Menu',   tag: 'Food & Dine', description: 'Customizable menus for restaurants, cafes & dhabas.' },
  { image: offset,         title: 'Offset Printing',   tag: 'Bulk Print',  description: 'High-quality offset for bulk orders — sharp details, vibrant colors.' },
  { image: dr_file,        title: 'Doctor File',       tag: 'Healthcare',  description: 'Professional branded files for clinics, hospitals & healthcare.' },
  { image: letter_head,    title: 'Letter Head',       tag: 'Corporate',   description: 'Ideal for official communication, invoices & correspondence.' },
  { image: screen_pr,      title: 'Screen Printing',   tag: 'Fabric',      description: 'Durable vibrant prints on fabrics, packaging & promo items.' },
  { image: canopy,         title: 'Canopy Tent',       tag: 'Outdoor',     description: 'Custom canopy tents for events, exhibitions & outdoor branding.' },
  { image: shield,         title: 'Shield / Award',    tag: 'Awards',      description: 'Elegant shields for achievements, awards & special recognitions.' },
  { image: stand_board,    title: 'Banner Framing',    tag: 'Display',     description: 'Framed promotional banners for product launches & stores.' },
  { image: light_frame,    title: 'Light Photo Frame', tag: 'Framing',     description: 'High-quality illuminated frames for menus & portraits.' },
  { image: hoarding,       title: 'Hoardings',         tag: 'Outdoor Ads', description: 'Bold eye-catching hoardings for maximum outdoor visibility.' },
];

const tagColors = {
  'Stationery':  'bg-pink-100 text-pink-700',
  'Branding':    'bg-purple-100 text-purple-700',
  'Food & Dine': 'bg-orange-100 text-orange-700',
  'Bulk Print':  'bg-blue-100 text-blue-700',
  'Healthcare':  'bg-emerald-100 text-emerald-700',
  'Corporate':   'bg-gray-100 text-gray-700',
  'Fabric':      'bg-red-100 text-red-700',
  'Outdoor':     'bg-green-100 text-green-700',
  'Awards':      'bg-yellow-100 text-yellow-700',
  'Display':     'bg-cyan-100 text-cyan-700',
  'Framing':     'bg-indigo-100 text-indigo-700',
  'Outdoor Ads': 'bg-rose-100 text-rose-700',
};

const allTags = ['All', ...new Set(projects.map(p => p.tag))];

const Project = () => {
  const [activeTag, setActiveTag]       = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoading, setIsLoading]       = useState(true); // ← 2. LOADING STATE

  // Page load hone ke baad 1.5s skeleton dikhao
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.tag === activeTag);

  return (
    <section id="project" className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" />
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Recent <span className="text-blue-700">Projects</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mb-2">
            Real work. Real clients. Premium quality — every single time.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-1 w-10 bg-blue-700 rounded-full" />
            <div className="h-1 w-4 bg-yellow-400 rounded-full" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-200
                ${activeTag === tag
                  ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-300/40'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ← 3. SKELETON YA REAL CARDS — BAS YAHI HAI POORA MAGIC */}
        {isLoading ? (
          <ProjectSkeleton count={8} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filtered.map((project, index) => (
              <article
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                <div className="relative h-36 sm:h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — Shree Balajee Printing Dhanbad`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className={`absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${tagColors[project.tag]} shadow-sm`}>
                    {project.tag}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href="https://wa.me/917645980320"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Order ${project.title} on WhatsApp`}
                      className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                      onClick={e => e.stopPropagation()}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Order This
                    </a>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-gray-900 font-bold text-sm sm:text-base leading-tight mb-1 group-hover:text-blue-700 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-yellow-400 transition-all duration-500" />
              </article>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-6 sm:px-12 py-10 text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Let's Work Together
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Kya aapko bhi aisi <span className="text-yellow-300">printing</span> chahiye?
            </h3>
            <p className="text-blue-200 text-sm sm:text-base max-w-xl mx-auto mb-7">
              Abhi WhatsApp pe message karo — design se delivery tak sab kuch hum handle karte hain!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/917645980320"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-xl hover:shadow-yellow-400/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                WhatsApp Now
              </a>
              <a
                href="tel:+917645980320"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm uppercase tracking-widest px-8 py-3.5 rounded-xl backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;





// import React, { useState } from 'react';
// import cash_memo from "../all_assets/cash_memo.jpg";
// import visiting_card from "../all_assets/new_visiting.jpg";
// import menu from "../all_assets/restaurent_img.jpg";
// import stand_board from "../all_assets/stand_board.jpeg";
// import light_frame from "../all_assets/light_frame.jpg";
// import offset from "../all_assets/offset.jpg";
// import dr_file from "../all_assets/doctor_file.jpg";
// import letter_head from "../all_assets/letter_head.jpg";
// import screen_pr from "../all_assets/screen_printing.jpg";
// import canopy from "../all_assets/canopy.jpg";
// import hoarding from "../all_assets/hoarding.webp";
// import shield from "../all_assets/shield.webp";

// const projects = [
//   { 
//     image: cash_memo,      
//     title: 'Cash Memo',          
//     tag: 'Stationery',   
//     description: 'Custom cash memo design for stationery stores & businesses.',
//     keywords: 'cash memo printing, stationery printing, bill book printing Dhanbad'
//   },
//   { 
//     image: visiting_card,  
//     title: 'Visiting Card',      
//     tag: 'Branding',     
//     description: 'Perfect for professionals, businesses, and personal branding.',
//     keywords: 'visiting card printing, business card Dhanbad, professional cards'
//   },
//   { 
//     image: menu,           
//     title: 'Restaurant Menu',    
//     tag: 'Food & Dine',  
//     description: 'Customizable menus for restaurants, cafes & dhabas.',
//     keywords: 'restaurant menu printing, cafe menu, food menu design Dhanbad'
//   },
//   { 
//     image: offset,         
//     title: 'Offset Printing',    
//     tag: 'Bulk Print',   
//     description: 'High-quality offset for bulk orders — sharp details, vibrant colors.',
//     keywords: 'offset printing, bulk printing, commercial printing Dhanbad'
//   },
//   { 
//     image: dr_file,        
//     title: 'Doctor File',        
//     tag: 'Healthcare',   
//     description: 'Professional branded files for clinics, hospitals & healthcare.',
//     keywords: 'doctor file printing, medical file, healthcare stationery Dhanbad'
//   },
//   { 
//     image: letter_head,    
//     title: 'Letter Head',        
//     tag: 'Corporate',    
//     description: 'Ideal for official communication, invoices & correspondence.',
//     keywords: 'letterhead printing, corporate stationery, official letter pad'
//   },
//   { 
//     image: screen_pr,      
//     title: 'Screen Printing',    
//     tag: 'Fabric',       
//     description: 'Durable vibrant prints on fabrics, packaging & promo items.',
//     keywords: 'screen printing, fabric printing, t-shirt printing Dhanbad'
//   },
//   { 
//     image: canopy,         
//     title: 'Canopy Tent',        
//     tag: 'Outdoor',      
//     description: 'Custom canopy tents for events, exhibitions & outdoor branding.',
//     keywords: 'canopy tent printing, event tent, outdoor branding Dhanbad'
//   },
//   { 
//     image: shield,         
//     title: 'Shield / Award',     
//     tag: 'Awards',       
//     description: 'Elegant shields for achievements, awards & special recognitions.',
//     keywords: 'award shield printing, trophy printing, recognition awards'
//   },
//   { 
//     image: stand_board,    
//     title: 'Banner Framing',     
//     tag: 'Display',      
//     description: 'Framed promotional banners for product launches & stores.',
//     keywords: 'banner framing, display banner, promotional banner Dhanbad'
//   },
//   { 
//     image: light_frame,    
//     title: 'Light Photo Frame',  
//     tag: 'Framing',      
//     description: 'High-quality illuminated frames for menus & portraits.',
//     keywords: 'light frame printing, illuminated frame, photo frame Dhanbad'
//   },
//   { 
//     image: hoarding,       
//     title: 'Hoardings',          
//     tag: 'Outdoor Ads',  
//     description: 'Bold eye-catching hoardings for maximum outdoor visibility.',
//     keywords: 'hoarding printing, billboard, outdoor advertising Dhanbad'
//   },
// ];

// const tagColors = {
//   'Stationery':  'bg-pink-100 text-pink-700',
//   'Branding':    'bg-purple-100 text-purple-700',
//   'Food & Dine': 'bg-orange-100 text-orange-700',
//   'Bulk Print':  'bg-blue-100 text-blue-700',
//   'Healthcare':  'bg-emerald-100 text-emerald-700',
//   'Corporate':   'bg-gray-100 text-gray-700',
//   'Fabric':      'bg-red-100 text-red-700',
//   'Outdoor':     'bg-green-100 text-green-700',
//   'Awards':      'bg-yellow-100 text-yellow-700',
//   'Display':     'bg-cyan-100 text-cyan-700',
//   'Framing':     'bg-indigo-100 text-indigo-700',
//   'Outdoor Ads': 'bg-rose-100 text-rose-700',
// };

// const allTags = ['All', ...new Set(projects.map(p => p.tag))];

// const Project = () => {
//   const [activeTag, setActiveTag] = useState('All');
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const filtered = activeTag === 'All' ? projects : projects.filter(p => p.tag === activeTag);

//   // Structured data for projects
//   const projectsStructuredData = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     "name": "Printing Projects Portfolio - Shree Balajee Printing & Flex",
//     "description": "Complete portfolio of printing projects including cash memos, visiting cards, menus, hoardings, and more.",
//     "numberOfItems": projects.length,
//     "itemListElement": projects.map((project, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "item": {
//         "@type": "CreativeWork",
//         "name": project.title,
//         "description": project.description,
//         "keywords": project.keywords,
//         "about": project.tag
//       }
//     }))
//   };

//   return (
//     <section 
//       id="project" 
//       className="bg-gradient-to-b from-white via-gray-50 to-white py-8 px-4 sm:px-6 lg:px-10"
//       aria-label="Our Printing Projects Portfolio"
//       itemScope
//       itemType="https://schema.org/CollectionPage"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Hidden metadata */}
//         <meta itemProp="name" content="Shree Balajee Printing & Flex - Project Portfolio" />
//         <meta itemProp="description" content="View our completed printing projects in Dhanbad - cash memos, visiting cards, restaurant menus, hoardings, and more. Quality printing since 2019." />

//         {/* ── SECTION HEADER ── */}
//         <div className="text-center mb-10">
//           <span className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-4">
//             <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" aria-hidden="true" />
//             Our Work
//           </span>
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
//             Recent <span className="text-blue-700">Projects</span>
//           </h1>
//           <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mb-2">
//             Real work. Real clients. Premium quality — every single time.
//           </p>
//           <div className="flex items-center justify-center gap-3 mt-4" aria-hidden="true">
//             <div className="h-1 w-10 bg-blue-700 rounded-full" />
//             <div className="h-1 w-4 bg-yellow-400 rounded-full" />
//           </div>
//         </div>

//         {/* ── FILTER TABS ── */}
//         <div className="flex gap-2 flex-wrap justify-center mb-10" role="tablist" aria-label="Project categories">
//           {allTags.map(tag => (
//             <button
//               key={tag}
//               onClick={() => setActiveTag(tag)}
//               role="tab"
//               aria-selected={activeTag === tag}
//               aria-label={`Filter projects by ${tag}`}
//               className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-200
//                 ${activeTag === tag
//                   ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-300/40'
//                   : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700'
//                 }`}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>

//         {/* ── PROJECT CARDS ── */}
//         <div 
//           className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5"
//           role="region"
//           aria-label="Project portfolio grid"
//         >
//           {filtered.map((project, index) => (
//             <article
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
//               itemScope
//               itemType="https://schema.org/CreativeWork"
//             >
//               {/* Hidden metadata */}
//               <meta itemProp="name" content={project.title} />
//               <meta itemProp="description" content={project.description} />
//               <meta itemProp="keywords" content={project.keywords} />
//               <meta itemProp="about" content={project.tag} />
              
//               {/* Image */}
//               <div className="relative h-36 sm:h-44 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={`${project.title} - Shree Balajee Printing & Flex portfolio project in Dhanbad`}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   loading="lazy"
//                   width="300"
//                   height="200"
//                   itemProp="image"
//                 />
//                 {/* Dark overlay on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

//                 {/* Tag badge */}
//                 <span className={`absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${tagColors[project.tag]} shadow-sm`}>
//                   {project.tag}
//                 </span>

//                 {/* Hover CTA on image */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//                   <a
//                     href={`https://wa.me/917645980320?text=I'm%20interested%20in%20your%20${encodeURIComponent(project.title)}%20printing%20service.%20Please%20share%20details%20and%20pricing.`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
//                     onClick={e => e.stopPropagation()}
//                     aria-label={`Order ${project.title} printing service on WhatsApp`}
//                   >
//                     <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                     </svg>
//                     Order This
//                   </a>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-3 sm:p-4">
//                 <h2 className="text-gray-900 font-bold text-sm sm:text-base leading-tight mb-1 group-hover:text-blue-700 transition-colors duration-200">
//                   {project.title}
//                 </h2>
//                 <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
//                   {project.description}
//                 </p>
//               </div>

//               {/* Bottom accent */}
//               <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-yellow-400 transition-all duration-500" aria-hidden="true" />
//             </article>
//           ))}
//         </div>

//         {/* ── BOTTOM CTA BANNER ── */}
//         <div className="mt-16 relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 px-6 sm:px-12 py-10 text-center shadow-2xl">
//           {/* Decorative circles */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" aria-hidden="true" />
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

//           <div className="relative z-10">
//             <span className="inline-block bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
//               Let's Work Together
//             </span>
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
//               Kya aapko bhi aisi{" "}
//               <span className="text-yellow-300">printing</span> chahiye?
//             </h3>
//             <p className="text-blue-200 text-sm sm:text-base max-w-xl mx-auto mb-7">
//               Abhi WhatsApp pe message karo — design se delivery tak sab kuch hum handle karte hain!
//             </p>
//             <div className="flex flex-wrap items-center justify-center gap-4">
//               <a
//                 href="https://wa.me/917645980320?text=I'm%20interested%20in%20your%20printing%20services.%20Please%20share%20details%20and%20portfolio."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-xl hover:shadow-yellow-400/30 hover:-translate-y-0.5 transition-all duration-200"
//                 aria-label="Contact us on WhatsApp for printing services"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                 </svg>
//                 WhatsApp Now
//               </a>
//               <a
//                 href="tel:+917645980320"
//                 className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm uppercase tracking-widest px-8 py-3.5 rounded-xl backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
//                 aria-label="Call us for printing services"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 Call Us
//               </a>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Add structured data */}
//       <script type="application/ld+json">
//         {JSON.stringify(projectsStructuredData)}
//       </script>

//       {/* Add portfolio schema */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "CollectionPage",
//           "name": "Printing Portfolio - Shree Balajee Printing & Flex",
//           "description": "Complete collection of printing projects completed in Dhanbad",
//           "numberOfItems": projects.length,
//           "about": {
//             "@type": "LocalBusiness",
//             "name": "Shree Balajee Printing & Flex",
//             "telephone": "+917645980320"
//           }
//         })}
//       </script>
//     </section>
//   );
// };

// export default Project;