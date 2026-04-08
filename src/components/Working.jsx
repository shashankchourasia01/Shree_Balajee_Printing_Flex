import React from 'react';
import { FaRegCalendarCheck, FaRegEnvelope, FaRegCheckCircle, FaPrint } from 'react-icons/fa';

const steps = [
  {
    icon: <FaRegCalendarCheck className="text-2xl" aria-hidden="true" />,
    step: "01",
    title: "Booking Offline / Online",
    description: "Submit your project details via WhatsApp, call, or walk in — and receive a personalized quote instantly.",
    color: "from-blue-500 to-blue-700",
    light: "bg-blue-50 text-blue-600 border-blue-100",
    keywords: "booking printing services, online booking Dhanbad, printing shop booking"
  },
  {
    icon: <FaRegEnvelope className="text-2xl" aria-hidden="true" />,
    step: "02",
    title: "Received Work",
    description: "Our design team reviews your requirements and sends a proof for approval. Revisions until you're 100% satisfied.",
    color: "from-yellow-400 to-orange-400",
    light: "bg-yellow-50 text-yellow-600 border-yellow-100",
    keywords: "design approval, printing proof, design review"
  },
  {
    icon: <FaRegCheckCircle className="text-2xl" aria-hidden="true" />,
    step: "03",
    title: "Satisfied Design",
    description: "Once you approve the final design, we lock it in and prepare everything for the printing process.",
    color: "from-green-500 to-emerald-600",
    light: "bg-green-50 text-green-600 border-green-100",
    keywords: "design approval, final design, printing preparation"
  },
  {
    icon: <FaPrint className="text-2xl" aria-hidden="true" />,
    step: "04",
    title: "Start Printing",
    description: "Your prints are produced using top-of-the-line technology, then carefully packaged and handed over to you.",
    color: "from-purple-500 to-indigo-600",
    light: "bg-purple-50 text-purple-600 border-purple-100",
    keywords: "printing process, high quality printing, packaging delivery"
  },
];

const Working = () => {
  return (
    <section 
      id="works" 
      className="relative py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden"
      aria-label="Our Working Process - 4 Easy Steps"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Hidden metadata for SEO */}
      <meta itemProp="name" content="Shree Balajee Printing & Flex - Working Process" />
      <meta itemProp="description" content="Simple 4-step printing process from booking to delivery. Fast, reliable, and quality printing services in Dhanbad." />
      <meta itemProp="totalTime" content="P2D" />
      <meta itemProp="estimatedCost" content="₹" />

      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] px-5 py-1.5 rounded-full mb-4">
            Simple & Fast
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Working <span className="text-blue-700">Process</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            From booking to delivery — just 4 easy steps to get your perfect print.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5" aria-hidden="true">
            <div className="h-px w-16 bg-blue-200" />
            <div className="w-2 h-2 rounded-full bg-blue-600" />
            <div className="h-px w-16 bg-blue-200" />
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="relative group"
              itemScope
              itemProp="step"
              itemType="https://schema.org/HowToStep"
            >
              {/* Hidden SEO data */}
              <meta itemProp="name" content={item.title} />
              <meta itemProp="text" content={item.description} />
              <meta itemProp="position" content={item.step} />
              <meta itemProp="keywords" content={item.keywords} />

              {/* Connector line desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-8px)] w-full h-px border-t-2 border-dashed border-blue-200 z-0" aria-hidden="true" />
              )}

              {/* Card */}
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col items-center">

                {/* Step badge */}
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-black uppercase tracking-widest text-white bg-gradient-to-r ${item.color} px-3 py-0.5 rounded-full shadow`}>
                  Step {item.step}
                </span>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mt-3 border ${item.light} transition-all duration-300 group-hover:scale-110`}>
                  {item.icon}
                </div>

                <h3 className="text-gray-900 font-extrabold text-base sm:text-lg mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className={`mt-5 h-1 w-12 rounded-full bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Uncommented and improved */}
        {/* <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/917645980320?text=I%20want%20to%20start%20my%20printing%20order.%20Please%20guide%20me%20through%20the%20process."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-lg hover:shadow-blue-400/40 hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Start your printing order on WhatsApp"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Start Your Order
          </a>
          <a
            href="tel:+917645980320"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-400 text-gray-800 font-bold text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-sm hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Call us for printing services"
          >
            <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Now
          </a>
        </div> */}

      </div>
      
      {/* Add HowTo structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Order Printing Services from Shree Balajee Printing & Flex",
          "description": "Simple 4-step process to get your perfect prints",
          "totalTime": "P2D",
          "step": steps.map((item, index) => ({
            "@type": "HowToStep",
            "name": item.title,
            "text": item.description,
            "position": index + 1
          })),
          "provider": {
            "@type": "LocalBusiness",
            "name": "Shree Balajee Printing & Flex",
            "telephone": "+917645980320",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dhanbad",
              "addressRegion": "Jharkhand",
              "addressCountry": "IN"
            }
          }
        })}
      </script>
    </section>
  );
};

export default Working;