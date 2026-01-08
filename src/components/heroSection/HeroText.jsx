import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const texts = [
  "Logo Designing",
  "Wall Art & Painting",
  "Wedding Invitations & Gifts",
  "Arabic Calligraphy",
  "Arts & Calligraphy Classes",
];

const HeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white mb-6">
      {/* Heading with Blur Animation */}
      <AnimatePresence mode="wait">
        <motion.h1
          key="hero-heading"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-bold
            mb-4
            leading-snug lg:leading-[1.1]
          "
        >
          Welcome to <br />
          Hakeem Art Academy
        </motion.h1>
      </AnimatePresence>

      {/* Morphing Dynamic Text */}
      <div className="h-12 sm:h-14 md:h-16 lg:h-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              font-semibold
              text-white/90
            "
          >
            {texts[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroText;
