// NavbarMain.jsx
import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LogoImage from "../../assets/Images/Logo.jpg";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/course" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const NavbarMain = () => {
  const { pathname } = useLocation(); // 🎯 route sync
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [showNav, setShowNav] = useState(true);
  const [progress, setProgress] = useState(0);

  const lastScrollY = useRef(0);
  const linkRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowNav(!(y > lastScrollY.current && y > 100));
      lastScrollY.current = y;
      setScrolled(y > 10);

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((y / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = dark ? "#073C0A" : "#0B4D12";

  const activeIndex = links.findIndex((l) => l.path === pathname);
  const currentIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] z-[60]
        bg-gradient-to-r from-lime-300 via-green-400 to-white"
        style={{ width: `${progress}%` }}
      />

      {/* Navbar */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.35 }}
        style={{ backgroundColor: bgColor }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl ${
          scrolled ? "py-1.5 shadow-2xl" : "py-3"
        }`}
      >
        <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <RouterLink to="/" className="flex items-center gap-3">
            <motion.img
              src={LogoImage}
              alt="Logo"
              className="w-11 h-11 rounded-full border-2 border-white"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h1 className="text-white font-bold text-base sm:text-lg">
              Hakeem Art Academy
            </h1>
          </RouterLink>

          {/* Desktop links */}
          <div className="hidden md:flex gap-9 items-center relative">
            {links.map((link, i) => (
              <RouterLink
                key={i}
                ref={(el) => (linkRefs.current[i] = el)}
                to={link.path}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`font-medium transition ${
                  pathname === link.path
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </RouterLink>
            ))}

            {/* 🔥 Neon + 🌊 Continuous wave underline */}
            {linkRefs.current[currentIndex] && (
              <motion.div
                className="absolute -bottom-2 h-[4px] rounded-full
                bg-gradient-to-r from-lime-300 via-green-400 to-white"
                animate={{
                  width: linkRefs.current[currentIndex].offsetWidth,
                  x: linkRefs.current[currentIndex].offsetLeft,
                  y: [0, -4, 0], // 🌊 wave
                }}
                transition={{
                  x: { type: "spring", stiffness: 320, damping: 22 },
                  y: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  boxShadow: `
                    0 0 8px rgba(144,238,144,0.9),
                    0 0 18px rgba(0,255,128,0.9),
                    0 0 32px rgba(0,255,128,0.8)
                  `,
                }}
              />
            )}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="text-white text-xl p-2 rounded-full hover:bg-white/10"
            >
              {dark ? <HiSun /> : <HiMoon />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl p-2 rounded-md hover:bg-white/10"
            >
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                {isOpen ? <HiX /> : <HiMenu />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden"
              style={{ backgroundColor: bgColor }}
            >
              <div className="flex flex-col gap-6 p-6">
                {links.map((link) => (
                  <div key={link.path}>
                    <RouterLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium ${
                        pathname === link.path ? "text-white" : "text-white/80"
                      }`}
                    >
                      {link.name}
                    </RouterLink>

                    {/* Mobile neon underline */}
                    {pathname === link.path && (
                      <motion.div
                        layoutId="mobile-underline"
                        className="h-[3px] mt-1 w-12 rounded-full
                        bg-gradient-to-r from-lime-300 via-green-400 to-white"
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{
                          boxShadow: "0 0 14px rgba(0,255,128,1)",
                        }}
                      />
                    )}
                  </div>
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
