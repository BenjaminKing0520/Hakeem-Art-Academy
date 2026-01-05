// NavbarMain.jsx
import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LogoImage from "../../assets/Images/Logo.jpg";

// Navbar Links
const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/course" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "font-medium text-white relative group transition-all duration-300";

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }} // ⚡ fast load animation
        style={{
          backgroundColor: scrolled ? "#0B3B14E6" : "#0B3B14B3",
        }}
        className={`fixed w-full top-0 left-0 z-50 backdrop-blur-md transition-all duration-500 ${
          scrolled ? "shadow-lg py-1.5" : "py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center gap-3">
            <motion.img
              src={LogoImage}
              alt="Logo"
              loading="lazy" // ✅ faster load
              className="w-12 h-12 rounded-full object-cover border-2 border-white/80 shadow-sm"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }} // ⚡ light animation
              whileHover={{ scale: 1.08 }} // subtle hover
            />
            <h1 className="text-white font-bold text-lg sm:text-xl whitespace-nowrap">
              Hakeem Art Academy
            </h1>
          </RouterLink>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.08 }}>
                <RouterLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={linkClass}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </RouterLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-3xl p-2 focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }} // ⚡ quick
              style={{ backgroundColor: "#0B3B14F2" }}
              className="md:hidden absolute top-full left-0 w-full backdrop-blur-md flex flex-col gap-4 p-5 shadow-lg z-40"
            >
              {links.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <RouterLink
                    to={link.path}
                    onClick={handleLinkClick}
                    className="font-medium text-white relative group transition-all duration-300"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </RouterLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default NavbarMain;
