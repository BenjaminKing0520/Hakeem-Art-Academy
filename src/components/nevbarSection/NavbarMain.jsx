// NavbarMain.jsx
import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LogoImage from "../../assets/Images/Logo.jpg";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/" },
  { name: "Courses", path: "/" },
  { name: "Events", path: "/" },
  { name: "Contact", path: "/" },
];

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  /* Scroll effects */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        style={{ backgroundColor: bgColor }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-500
        ${scrolled ? "py-1.5 shadow-2xl" : "py-3"}`}
      >
        {/* Arabic Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 12px)",
          }}
        />

        {/* Shimmer line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] w-full bg-white/30"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
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
            {links.map((link, i) => {
              const active = location.pathname === link.path;
              return (
                <motion.div key={i} whileHover={{ y: -2 }}>
                  <RouterLink
                    to={link.path}
                    className={`relative font-medium transition ${
                      active
                        ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </RouterLink>
                </motion.div>
              );
            })}
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
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <RouterLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-lg font-medium"
                    >
                      {link.name}
                    </RouterLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-20 md:h-24" />
    </>
  );
};

export default NavbarMain;
