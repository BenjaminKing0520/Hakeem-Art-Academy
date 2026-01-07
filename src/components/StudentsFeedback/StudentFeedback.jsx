import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const feedbacks = [
  {
    name: "MOHAMED HASSIM",
    role: "Arabic Calligraphy Student",
    rating: 5,
    image: "", // /students/hassim.jpg
    message:
      "Alhamdulillah, I had a beautiful experience learning Arabic calligraphy in Hakeem Art Academy. The teacher explains every stroke patiently and clearly. My writing skills and confidence improved a lot.",
  },
  {
    name: "N. SUMAIYA NISHA (AZMIYA)",
    role: "Arabic Calligraphy Student",
    rating: 5,
    image: "", ///students/sumaiya.jpg
    message:
      "Assalamu Alaikum. Before joining this class, I depended only on Google. After attending the classes, I started writing confidently on my own. This course is very useful and truly worth it.",
  },
];

export default function StudentFeedback() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 6000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ backgroundColor: "#073C0A" }}
    >
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-14 tracking-wide text-white"
        >
          Student Testimonials
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -40 }}
            transition={{ duration: 0.6 }}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-white/30"
          >
            {/* Quote icon */}
            <FaQuoteLeft
              className="absolute -top-5 left-6 text-4xl opacity-20"
              style={{ color: "#073C0A" }}
            />

            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <img
                src={feedbacks[index].image}
                alt={feedbacks[index].name}
                className="w-20 h-20 rounded-full object-cover border-4"
                style={{ borderColor: "#073C0A" }}
              />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(feedbacks[index].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg mx-0.5" />
              ))}
            </div>

            {/* Message */}
            <p
              className="text-lg leading-relaxed mb-8 italic"
              style={{
                color: "#073C0A",
                fontFamily: "'Amiri', serif",
              }}
            >
              “{feedbacks[index].message}”
            </p>

            {/* Name */}
            <h3 className="text-xl font-bold" style={{ color: "#073C0A" }}>
              {feedbacks[index].name}
            </h3>

            {/* Role */}
            <p className="text-sm opacity-70 mt-1">{feedbacks[index].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {feedbacks.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === i
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
