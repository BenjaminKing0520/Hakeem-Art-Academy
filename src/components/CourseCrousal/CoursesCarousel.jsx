import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaBook } from "react-icons/fa"; // Suitable icon

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
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.scrollWidth;
        const visibleWidth = carouselRef.current.offsetWidth;
        setCarouselWidth(totalWidth - visibleWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const loopCourses = [...courses, ...courses];

  return (
    <section className="py-16 bg-[#073C0A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={carouselRef}
          className="overflow-hidden cursor-grab relative"
        >
          <motion.div
            className="flex gap-6 flex-nowrap"
            drag="x"
            dragConstraints={{ left: -carouselWidth, right: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {loopCourses.map((course, index) => (
              <div
                key={index}
                className="min-w-[250px] h-[150px] sm:h-[180px] md:h-[200px]
                           rounded-2xl flex items-center justify-start gap-4
                           shadow-lg hover:shadow-emerald-500/50
                           hover:scale-105 transition-transform duration-300 flex-shrink-0
                           bg-white px-6"
              >
                <FaBook className="text-[#073C0A] text-2xl" />
                <p className="text-[#073C0A] text-left text-lg md:text-xl font-semibold">
                  {course}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
