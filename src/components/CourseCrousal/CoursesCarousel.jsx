import React, { useState } from "react";
import { motion } from "framer-motion";

// ========== COURSES DATA ==========
const courses = [
  "Arabic Calligraphy (Children Male & Female, Adults)",
  "Quran & Tajweeth for Adults & Women",
  "Quran & Tajweeth for Children",
  "Canva & Photoshop",
  "AL QURAN TRAINING PROGRAM",
  "Primary Sources of Islamic Sharia",
  "Quran & Tajweeth for Men",
];

export default function CoursesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? courses.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === courses.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#010204] px-6 md:px-20 py-24">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
        Courses
      </h1>

      {/* Carousel Container */}
      <div className="relative w-full max-w-xl flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-3 bg-black/50 rounded-full hover:bg-black/80 transition text-white text-2xl"
        >
          &#10094;
        </button>

        {/* Slide */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-[#073C0A] w-full p-8 rounded-2xl shadow-xl flex items-center justify-center"
        >
          <p className="text-white text-center text-xl md:text-2xl font-semibold">
            {courses[currentIndex]}
          </p>
        </motion.div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-3 bg-black/50 rounded-full hover:bg-black/80 transition text-white text-2xl"
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {courses.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              idx === currentIndex ? "bg-green-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
