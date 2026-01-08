import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamic subtexts
const texts = [
  "Logo Designing",
  "Wall Art & Painting",
  "Wedding Invitations & Gifts",
  "Arabic Calligraphy",
  "Arts & Calligraphy Classes",
];

// TrueFocus component for part of heading
const TrueFocus = ({
  sentence = "Hakeem Art Academy",
  blurAmount = 6,
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [words.length, animationDuration, pauseBetweenAnimations]);

  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="relative flex gap-2 flex-wrap justify-center"
    >
      {words.map((word, idx) => {
        const isActive = idx === currentIndex;
        return (
          <span
            key={idx}
            ref={(el) => (wordRefs.current[idx] = el)}
            className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
          >
            {word}
          </span>
        );
      })}

      {/* Focus Glow Box */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none rounded-lg border-2 border-green-500"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: 1,
        }}
        transition={{ duration: animationDuration }}
      />
    </div>
  );
};

// HeroText component
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
      {/* Heading */}
      <div className="text-left max-w-3xl mx-auto">
        {/* Static part */}
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Welcome to
        </div>

        {/* Animated part */}
        <TrueFocus
          sentence="Hakeem Art Academy"
          blurAmount={6}
          animationDuration={0.5}
          pauseBetweenAnimations={0.5}
        />
      </div>

      {/* Morphing Subtext - Left aligned */}
      <div className="h-12 sm:h-14 md:h-16 lg:h-20 overflow-hidden mt-4 text-left max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white/90"
          >
            {texts[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroText;
