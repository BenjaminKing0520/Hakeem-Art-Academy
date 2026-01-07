import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const feedbacks = [
  {
    name: "MOHAMED HASSIM",
    role: "Arabic Calligraphy Student",
    message:
      "Alhamdulillah, I had a beautiful experience learning Arabic calligraphy in Hakeem Art Workshop. The teacher teaches with patience, passion, and sincerity. He gives personal attention to every student and demonstrates techniques slowly and clearly. My writing and confidence improved a lot. Highly recommended for beginners. Number one – Hakeem Art Academy.",
  },
  {
    name: "N. SUMAIYA NISHA (AZMIYA)",
    role: "Arabic Calligraphy Student",
    message:
      "Assalamu Alaikum. You teach many valuable things, sir. Earlier, I used to write only by checking Google, but after attending your class, I started writing on my own. This class is very useful and truly worth it.",
  },
];

export default function StudentFeedback() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#073C0A" }}>
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide">
          Student Testimonials
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              {/* Feedback text */}
              <p
                className="text-gray-700 text-lg leading-relaxed mb-8"
                style={{
                  fontFamily: "'Amiri', serif",
                }}
              >
                “{feedbacks[index].message}”
              </p>

              {/* Student name */}
              <h3 className="text-xl font-semibold text-[#073C0A]">
                {feedbacks[index].name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500">{feedbacks[index].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {feedbacks.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  index === i ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
