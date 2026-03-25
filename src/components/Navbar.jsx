import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import flex_mac from "../all_assets/Digital-Printing.jpg";
import logo from "../all_assets/logo.jpeg";

const NAV_LINKS = [
  { label: "Home",      href: "#"        },
  { label: "How Works", href: "#works"   },
  { label: "Services",  href: "#services"},
  { label: "Project",   href: "#project" },
  { label: "Contact",   href: "#contact" },
];

const PHONE      = "7645980320";
const PHONE_HREF = "tel:+917645980320";
const WA_HREF    = "https://wa.me/917645980320";

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const BagIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const NavbarWithHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled]                 = useState(false);

  // Passive scroll listener — no jank
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Close sidebar on Escape key (accessibility)
  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === "Escape") setIsMobileMenuOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeSidebar = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleSidebar = useCallback(() => setIsMobileMenuOpen((p) => !p), []);

  return (
    <>
      {/* ── SEO HEAD ── */}
      <Helmet>
        <title>Shree Balajee Printing & Flex | Katras Bazar, Dhanbad</title>
        <meta name="description" content="Shree Balajee Printing & Flex — Dhanbad ka sabse trusted printing shop. Flex printing, banner, hoarding, visiting card, shadi card, digital printing. Katras Bazar, Dhanbad. Call: 7645980320" />
        <meta name="keywords" content="Balajee Flex, Shree Balajee Printing, flex printing Dhanbad, banner printing Dhanbad, hoarding Dhanbad, visiting card Dhanbad, shadi card Dhanbad, digital printing Dhanbad, Katras Bazar printing, printing shop Dhanbad, balajeeflex" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.balajeeflex.com" />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://www.balajeeflex.com" />
        <meta property="og:title"       content="Shree Balajee Printing & Flex | Dhanbad" />
        <meta property="og:description" content="Dhanbad ka #1 printing shop — flex, banner, hoarding, visiting card, shadi card. Call: 7645980320" />
        <meta property="og:image"       content="https://www.balajeeflex.com/og-image.jpg" />
        <meta property="og:locale"      content="en_IN" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Shree Balajee Printing & Flex",
          alternateName: "Balajee Flex",
          url: "https://www.balajeeflex.com",
          telephone: "+917645980320",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Katras Bazar, Bhagat Singh Chowk, Near Bank of India",
            addressLocality: "Dhanbad",
            addressRegion: "Jharkhand",
            postalCode: "828114",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 23.8169002, longitude: 86.2936481 },
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            opens: "10:00", closes: "19:00",
          }],
          sameAs: [
            "https://www.facebook.com/balajeekatras",
            "https://www.instagram.com/balajeekatras",
          ],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "502" },
        })}</script>
      </Helmet>

      <div className="relative">

        {/* ── NAVBAR ── */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 transition-all duration-300
            ${scrolled
              ? "h-14 bg-[#002954]/95 backdrop-blur-md shadow-lg shadow-black/30"
              : "h-16 bg-gradient-to-r from-[#003a75] via-[#004080] to-[#002954] shadow-md"
            }`}
        >
          {/* Logo */}
          <a href="/" aria-label="Shree Balajee Printing & Flex — Home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Shree Balajee Printing & Flex logo"
              width={40} height={40}
              className="h-10 w-10 rounded-full object-cover border-2 border-blue-700 shadow-md hover:scale-105 transition-transform duration-300"
            />
            <div className="leading-tight">
              <p className="text-yellow-300 font-extrabold text-sm uppercase tracking-wider">Shree Balajee</p>
              <p className="text-yellow-400/80 font-semibold text-[10px] uppercase tracking-[0.15em]">Printing & Flex</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0" role="menubar">
            {NAV_LINKS.map((link) => (
              <li key={link.label} role="none">
                <a
                  href={link.href}
                  role="menuitem"
                  className="relative text-white/90 hover:text-yellow-300 font-bold text-sm uppercase tracking-wider group transition-colors duration-200"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              aria-label={`Call us at ${PHONE}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-400/60 text-white font-bold text-sm px-4 py-2 rounded-full transition-all duration-200"
            >
              <PhoneIcon />
              {PHONE}
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order now on WhatsApp"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm uppercase tracking-widest px-5 py-2.5 rounded-lg shadow-lg hover:-translate-y-0.5 hover:shadow-yellow-400/40 transition-all duration-200"
            >
              <BagIcon />
              Order Now
            </a>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            onClick={toggleSidebar}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-sidebar"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl z-[200] transition-all duration-200"
          >
            <span className={`block w-5 h-[2.5px] bg-yellow-300 rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""}`} />
            <span className={`block w-5 h-[2.5px] bg-yellow-300 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[2.5px] bg-yellow-300 rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`} />
          </button>
        </nav>

        {/* ── BACKDROP ── */}
        <div
          onClick={closeSidebar}
          aria-hidden="true"
          className={`lg:hidden fixed inset-0 z-[150] transition-all duration-300
            ${isMobileMenuOpen
              ? "backdrop-blur-sm bg-black/40 pointer-events-auto"
              : "backdrop-blur-none bg-transparent pointer-events-none"
            }`}
        />

        {/* ── RIGHT SLIDE SIDEBAR ── */}
        <div
          id="mobile-sidebar"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className={`lg:hidden fixed top-0 right-0 h-full w-72 z-[200] flex flex-col
            bg-gradient-to-b from-[#002954] via-[#003a75] to-[#004080]
            shadow-2xl transition-transform duration-500 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Shree Balajee logo" width={36} height={36} className="h-9 w-9 rounded-full object-cover border-2 border-yellow-400" />
              <div>
                <p className="text-yellow-300 font-extrabold text-sm uppercase tracking-wide leading-tight">Shree Balajee</p>
                <p className="text-yellow-400/70 font-semibold text-[10px] uppercase tracking-widest">Printing & Flex</p>
              </div>
            </div>
            <button onClick={closeSidebar} aria-label="Close navigation menu" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200">
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-col px-4 py-5 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeSidebar}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-white/80 hover:text-yellow-300 font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all duration-200 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                {link.label}
              </a>
            ))}

            <div className="mt-5 flex flex-col gap-3 px-1">
              <a href={PHONE_HREF} aria-label={`Call ${PHONE}`} className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/15 hover:border-yellow-400/50 text-white font-bold text-sm px-4 py-3 rounded-xl transition-all duration-200">
                <PhoneIcon />
                {PHONE}
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeSidebar}
                aria-label="Order now on WhatsApp"
                className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm uppercase tracking-widest px-4 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-yellow-400/30 transition-all duration-200"
              >
                <BagIcon className="w-4 h-4" />
                Order Now
              </a>
            </div>
          </nav>
        </div>

        {/* ── HERO SECTION ── */}
        <div className="pt-16 bg-white px-3 sm:px-5 lg:px-8 py-3 sm:py-4 mt-2">
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: "clamp(220px, 42vw, 420px)" }}>

            <img
              src={flex_mac}
              alt="Shree Balajee Printing & Flex — digital flex printing machine Dhanbad"
              width={1200} height={420}
              loading="eager"
              fetchpriority="high"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" aria-hidden="true" />

            <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-6 sm:pb-10 w-full">
              <div className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase px-3 sm:px-5 py-1.5 rounded-full mb-2 sm:mb-4 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" aria-hidden="true" />
                Premium Quality Printing
              </div>

              <h1 className="text-yellow-300 font-black uppercase tracking-wide leading-none mb-1 sm:mb-2 drop-shadow-2xl" style={{ fontSize: "clamp(1.5rem, 6vw, 4.5rem)" }}>
                SHREE BALAJEE
              </h1>

              <p className="text-white font-semibold uppercase tracking-[0.25em] mb-3 sm:mb-6" style={{ fontSize: "clamp(0.65rem, 2vw, 1.2rem)" }}>
                Printing &amp;{" "}<span className="text-orange-400 font-bold">Flex</span>
              </p>

              <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="Order now on WhatsApp" className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-[11px] sm:text-sm uppercase tracking-widest px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-xl hover:-translate-y-0.5 hover:shadow-yellow-400/40 transition-all duration-200">
                  <BagIcon className="w-3.5 h-3.5" />
                  Order Now
                </a>
                <a href="#services" aria-label="View our printing services" className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/35 text-white font-bold text-[11px] sm:text-sm uppercase tracking-widest px-4 sm:px-6 py-2 sm:py-3 rounded-xl backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default NavbarWithHero;




// import React, { useState, useEffect } from "react";
// import flex_mac from "../all_assets/Digital-Printing.jpg";
// import logo from "../all_assets/logo.jpeg";

// const NavbarWithHero = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isMobileMenuOpen]);

//   const navLinks = [
//     { label: "Home", href: "#" },
//     { label: "How Works", href: "#works" },
//     { label: "Services", href: "#services" },
//     { label: "Project", href: "#project" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <div className="relative">

//       {/* ── NAVBAR ── */}
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 transition-all duration-300
//           ${scrolled
//             ? "h-14 bg-[#002954]/95 backdrop-blur-md shadow-lg shadow-black/30"
//             : "h-16 bg-gradient-to-r from-[#003a75] via-[#004080] to-[#002954] shadow-md"
//           }`}
//       >
//         {/* Logo */}
//         <a href="#" className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-10 w-10 rounded-full object-cover border-2 border-blue-700 shadow-md hover:scale-105 transition-transform duration-300"
//           />
//           <div className="leading-tight">
//             <p className="text-yellow-300 font-extrabold text-sm uppercase tracking-wider">Shree Balajee</p>
//             <p className="text-yellow-400/80 font-semibold text-[10px] uppercase tracking-[0.15em]">Printing & Flex</p>
//           </div>
//         </a>

//         {/* Desktop Nav Links */}
//         <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
//           {navLinks.map((link) => (
//             <li key={link.label}>
//               <a
//                 href={link.href}
//                 className="relative text-white/90 hover:text-yellow-300 font-bold text-sm uppercase tracking-wider group transition-colors duration-200"
//               >
//                 {link.label}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full" />
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop CTA */}
//         <div className="hidden lg:flex items-center gap-3">
//           <a
//             href="tel:+917645980320"
//             className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-yellow-400/60 text-white font-bold text-sm px-4 py-2 rounded-full transition-all duration-200"
//           >
//             <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//             </svg>
//             7645980320
//           </a>
//           <a
//             href="https://wa.me/917645980320"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm uppercase tracking-widest px-5 py-2.5 rounded-lg shadow-lg hover:-translate-y-0.5 hover:shadow-yellow-400/40 transition-all duration-200"
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//             </svg>
//             Order Now
//           </a>
//         </div>

//         {/* Hamburger (Mobile) */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl z-[200] transition-all duration-200"
//         >
//           <span
//             className={`block w-5 h-[2.5px] bg-yellow-300 rounded-full transition-all duration-300 origin-center
//               ${isMobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""}`}
//           />
//           <span
//             className={`block w-5 h-[2.5px] bg-yellow-300 rounded-full transition-all duration-300
//               ${isMobileMenuOpen ? "opacity-0 scale-x-0" : ""}`}
//           />
//           <span
//             className={`block w-5 h-[2.5px] bg-yellow-300 rounded-full transition-all duration-300 origin-center
//               ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`}
//           />
//         </button>
//       </nav>

//       {/* ── BACKDROP ── */}
//       <div
//         onClick={() => setIsMobileMenuOpen(false)}
//         className={`lg:hidden fixed inset-0 z-[150] transition-all duration-300
//           ${isMobileMenuOpen
//             ? "backdrop-blur-sm bg-black/40 pointer-events-auto"
//             : "backdrop-blur-none bg-transparent pointer-events-none"
//           }`}
//       />

//       {/* ── RIGHT SLIDE SIDEBAR ── */}
//       <div
//         className={`lg:hidden fixed top-0 right-0 h-full w-72 z-[200] flex flex-col
//           bg-gradient-to-b from-[#002954] via-[#003a75] to-[#004080]
//           shadow-2xl transition-transform duration-500 ease-in-out
//           ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
//           <div className="flex items-center gap-3">
//             <img src={logo} alt="Logo" className="h-9 w-9 rounded-full object-cover border-2 border-yellow-400" />
//             <div>
//               <p className="text-yellow-300 font-extrabold text-sm uppercase tracking-wide leading-tight">Shree Balajee</p>
//               <p className="text-yellow-400/70 font-semibold text-[10px] uppercase tracking-widest">Printing & Flex</p>
//             </div>
//           </div>
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200"
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Sidebar Nav Links + Buttons */}
//         <nav className="flex flex-col px-4 py-5 gap-1">
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-white/80 hover:text-yellow-300 font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-all duration-200 group"
//             >
//               <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
//               {link.label}
//             </a>
//           ))}

//           {/* Phone + Order Now — Contact ke just niche, IVR widget ke upar visible */}
//           <div className="mt-5 flex flex-col gap-3 px-1">
//             <a
//               href="tel:+917645980320"
//               className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/15 hover:border-yellow-400/50 text-white font-bold text-sm px-4 py-3 rounded-xl transition-all duration-200"
//             >
//               <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               7645980320
//             </a>
//             <a
//               href="https://wa.me/917645980320"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-sm uppercase tracking-widest px-4 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-yellow-400/30 transition-all duration-200"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//               </svg>
//               Order Now
//             </a>
//           </div>
//         </nav>
//       </div>

//       {/* ── HERO SECTION ── */}
//       <div className="pt-16 bg-white px-3 sm:px-5 lg:px-8 py-3 sm:py-4 mt-2 ">
//         <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-2xl"
//           style={{ height: "clamp(220px, 42vw, 420px)" }}>

//           {/* BG Image */}
//           <img
//             src={flex_mac}
//             alt="Background"
//             className="absolute inset-0 w-full h-full object-cover object-center"
//           />
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

//           {/* Content */}
//           <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-6 sm:pb-10 w-full">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase px-3 sm:px-5 py-1.5 rounded-full mb-2 sm:mb-4 backdrop-blur-sm">
//               <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" />
//               Premium Quality Printing
//             </div>

//             {/* Title */}
//             <h1
//               className="text-yellow-300 font-black uppercase tracking-wide leading-none mb-1 sm:mb-2 drop-shadow-2xl"
//               style={{ fontSize: "clamp(1.5rem, 6vw, 4.5rem)" }}
//             >
//               SHREE BALAJEE
//             </h1>

//             {/* Subtitle */}
//             <p
//               className="text-white font-semibold uppercase tracking-[0.25em] mb-3 sm:mb-6"
//               style={{ fontSize: "clamp(0.65rem, 2vw, 1.2rem)" }}
//             >
//               Printing &amp;{" "}
//               <span className="text-orange-400 font-bold">Flex</span>
//             </p>

//             {/* Buttons */}
//             <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
//               <a
//                 href="https://wa.me/917645980320"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-[11px] sm:text-sm uppercase tracking-widest px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-xl hover:-translate-y-0.5 hover:shadow-yellow-400/40 transition-all duration-200"
//               >
//                 <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                 </svg>
//                 Order Now
//               </a>
//               <a
//                 href="#services"
//                 className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/35 text-white font-bold text-[11px] sm:text-sm uppercase tracking-widest px-4 sm:px-6 py-2 sm:py-3 rounded-xl backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
//               >
//                 Our Services
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavbarWithHero;