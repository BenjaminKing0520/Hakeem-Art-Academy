import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const feedbacks = [
  {
    name: "MOHAMED HASSIM",
    role: "Arabic Calligraphy Student",
    rating: 5,
    message:
      "Alhamdulillah, I had a beautiful experience learning Arabic calligraphy in Hakeem Art Academy. The teacher explains every stroke patiently and clearly. My writing skills and confidence improved a lot. Highly recommended for beginners.",
  },
  {
    name: "N. SUMAIYA NISHA (AZMIYA)",
    role: "Arabic Calligraphy Student",
    rating: 5,
    message:
      "Assalamu Alaikum. Before joining this class, I used to depend only on Google. After attending the classes, I started writing confidently on my own. This course is very useful and truly worth it.",
  },
];

export default function StudentFeedback() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-[#073C0A] via-[#073C0A] to-[#021f05] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.25),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-14 tracking-wide"
        >
          Student Testimonials
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="backdrop-blur-xl bg-white/90 rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20"
            >
              {/* Stars */}
              <div className="flex justify-center mb-5">
                {[...Array(feedbacks[index].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <FaStar className="text-yellow-400 text-xl mx-0.5 drop-shadow" />
                  </motion.span>
                ))}
              </div>

              {/* Feedback text */}
              <p
                className="text-gray-700 text-lg leading-relaxed mb-8 italic"
                style={{ fontFamily: "'Amiri', serif" }}
              >
                “{feedbacks[index].message}”
              </p>

              {/* Student name */}
              <h3 className="text-xl font-bold text-[#0b4a11]">
                {feedbacks[index].name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500 mt-1">
                {feedbacks[index].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {feedbacks.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === i ? "bg-#073C0A scale-125" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
