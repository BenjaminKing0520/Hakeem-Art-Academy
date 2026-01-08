import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage1 from "../../assets/Images/Home.jpeg";
import heroImage2 from "../../assets/Images/Home1.jpeg";

const HeroBackground = () => {
  const images = [heroImage1, heroImage2];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };


  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Dots (Indicators) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-white" : "bg-[#073C0A]"
            } transition-all`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroBackground;
