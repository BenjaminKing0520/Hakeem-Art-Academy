// NavbarMain.jsx
import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LogoImage from "../../assets/Images/Logo.jpg";

const links = [
  { name: "Home", path: "#home" },
  { name: "About Us", path: "#about" },
  { name: "Courses", path: "#" },
  { name: "Events", path: "#events" },
  { name: "Contact", path: "#contact" },
];

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const [progress, setProgress] = useState(0);

  /* Scroll & navbar behavior */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Navbar hide/reveal
      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setShowNav(false); // scroll down -> hide
      } else {
        setShowNav(true); // scroll up -> show
      }
      lastScrollY.current = currentScroll;

      setScrolled(currentScroll > 10);

      // Scroll progress
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((currentScroll / total) * 100);

      // Section-based active link
      links.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveLink(link.path);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = dark ? "#073C0A" : "#0B4D12";

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] z-[60] bg-white"
        style={{ width: `${progress}%` }}
      />

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ backgroundColor: bgColor }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-500
        ${scrolled ? "py-1.5 shadow-2xl" : "py-3"}`}
      >
        {/* Arabic Calligraphy Watermark */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,
              <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
                <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                  font-size='30' fill='white' fill-opacity='0.03' font-family='Amiri, serif' transform='rotate(-15)'>
                  &#xFDFB;
                </text>
              </svg>")`,
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "80px 80px",
          }}
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center gap-3">
            <motion.img
              src={LogoImage}
              alt="Logo"
              className="w-12 h-12 rounded-full border-2 border-white"
              animate={{
                y: [0, -4, 0],
                boxShadow: [
                  "0 0 0px rgba(255,255,255,0.4)",
                  "0 0 20px rgba(255,255,255,0.7)",
                  "0 0 0px rgba(255,255,255,0.4)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h1 className="text-white font-bold text-lg sm:text-xl">
              Hakeem Art Academy
            </h1>
          </RouterLink>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-9 items-center">
            {links.map((link, i) => (
              <RouterLink
                key={i}
                to={link.path}
                className={`relative font-medium transition ${
                  activeLink === link.path
                    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                    activeLink === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </RouterLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="text-white text-xl p-2 rounded-full hover:bg-white/10"
            >
              {dark ? <HiSun /> : <HiMoon />}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-3xl p-2"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              style={{ backgroundColor: bgColor }}
              className="md:hidden overflow-hidden shadow-xl"
            >
              <div className="flex flex-col gap-5 p-6">
                {links.map((link, i) => (
                  <RouterLink
                    key={i}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-white text-lg font-medium ${
                      activeLink === link.path
                        ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                        : ""
                    }`}
                  >
                    {link.name}
                  </RouterLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-20 md:h-24" />
    </>
  );
};

export default NavbarMain;
