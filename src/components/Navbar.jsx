import React, { useState, useEffect } from "react";
import flex_mac from "../all_assets/Digital-Printing.jpg";
import logo from "../all_assets/logo.jpeg";

const NavbarWithHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "How Works", href: "#works" },
    { label: "Services", href: "#services" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative">

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 transition-all duration-300
          ${scrolled
            ? "h-14 bg-yellow-300/90 backdrop-blur-md shadow-lg"
            : "h-16 bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 shadow-md"
          }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover border-2 border-blue-700 shadow-md hover:scale-105 transition-transform duration-300"
          />
          <div className="leading-tight">
            <p className="text-blue-900 font-extrabold text-sm uppercase tracking-wider">Shree Balajee</p>
            <p className="text-blue-700 font-semibold text-[10px] uppercase tracking-[0.15em]">Printing & Flex</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-blue-900 font-bold text-sm uppercase tracking-wider group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+917645980320"
            className="flex items-center gap-2 bg-white/40 hover:bg-white/70 border border-blue-200 hover:border-blue-600 text-blue-900 font-bold text-sm px-4 py-2 rounded-full transition-all duration-200"
          >
            <svg className="w-4 h-4 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            7645980320
          </a>
          <a
            href="https://wa.me/917645980320"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-widest px-5 py-2.5 rounded-lg shadow-lg hover:-translate-y-0.5 hover:shadow-blue-400/50 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Order Now
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-white/40 hover:bg-white/65 border border-blue-200 rounded-xl z-[200] transition-all duration-200"
        >
          <span
            className={`block w-5 h-[2.5px] bg-blue-900 rounded-full transition-all duration-300 origin-center
              ${isMobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-[2.5px] bg-blue-900 rounded-full transition-all duration-300
              ${isMobileMenuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-5 h-[2.5px] bg-blue-900 rounded-full transition-all duration-300 origin-center
              ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`}
          />
        </button>
      </nav>

      {/* ── BACKDROP ── */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-[150] transition-all duration-300
          ${isMobileMenuOpen
            ? "backdrop-blur-sm bg-black/40 pointer-events-auto"
            : "backdrop-blur-none bg-transparent pointer-events-none"
          }`}
      />

      {/* ── RIGHT SLIDE SIDEBAR ── */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 z-[200] flex flex-col
          bg-gradient-to-b from-yellow-100 via-yellow-300 to-orange-200
          shadow-2xl transition-transform duration-500 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-blue-100">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-9 w-9 rounded-full object-cover border-2 border-blue-700" />
            <div>
              <p className="text-blue-900 font-extrabold text-sm uppercase tracking-wide leading-tight">Shree Balajee</p>
              <p className="text-blue-700 font-semibold text-[10px] uppercase tracking-widest">Printing & Flex</p>
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/40 hover:bg-white/70 border border-blue-200 text-blue-900 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Nav Links + Buttons */}
        <nav className="flex flex-col px-4 py-5 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-blue-900 font-bold text-sm uppercase tracking-wider hover:bg-white/50 transition-all duration-200 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
              {link.label}
            </a>
          ))}

          {/* Phone + Order Now — Contact ke just niche, IVR widget ke upar visible */}
          <div className="mt-5 flex flex-col gap-3 px-1">
            <a
              href="tel:+917645980320"
              className="flex items-center gap-3 bg-white/45 hover:bg-white/70 border border-blue-200 hover:border-blue-600 text-blue-900 font-bold text-sm px-4 py-3 rounded-xl transition-all duration-200"
            >
              <svg className="w-4 h-4 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              7645980320
            </a>
            <a
              href="https://wa.me/917645980320"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-widest px-4 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-blue-400/40 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Order Now
            </a>
          </div>
        </nav>
      </div>

      {/* ── HERO SECTION ── */}
      <div className="relative h-screen min-h-[560px] w-full overflow-hidden flex items-end justify-center">
        {/* BG Image */}
        <img
          src={flex_mac}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 pb-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/40 text-yellow-300 text-xs font-bold tracking-[0.18em] uppercase px-5 py-2 rounded-full mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" />
            Premium Quality Printing
          </div>

          {/* Title */}
          <h1
            className="text-yellow-300 font-black uppercase tracking-wide leading-none mb-3 drop-shadow-2xl"
            style={{ fontSize: "clamp(2.8rem, 9vw, 6.5rem)" }}
          >
            SHREE BALAJEE
          </h1>

          {/* Subtitle */}
          <p
            className="text-white font-semibold uppercase tracking-[0.3em] mb-8"
            style={{ fontSize: "clamp(1rem, 3.5vw, 2rem)" }}
          >
            Printing &amp;{" "}
            <span className="text-orange-400 font-bold">Flex</span>
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://wa.me/917645980320"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-xl hover:-translate-y-1 hover:shadow-blue-500/50 transition-all duration-250"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Order Now
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/35 text-white font-bold text-sm uppercase tracking-widest px-7 py-3.5 rounded-xl backdrop-blur-sm hover:-translate-y-1 transition-all duration-250"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarWithHero;
