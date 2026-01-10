import React from "react";
import { BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/footer/FooterMain";
import NavbarMain from "@/components/nevbarSection/NavbarMain";

// Course Images
import ArabicImg from "../assets/Images/arabic-calligraphy.jpg";
import QuranImg from "../assets/Images/quran.jpg";
import DesignImg from "../assets/Images/design.jpg";
import IslamicImg from "../assets/Images/islamic-study.jpg";

// Courses Data
const courses = [
  {
    title: "Arabic Calligraphy",
    img: ArabicImg,
    description:
      "Arabic Calligraphy for Children (Male & Female) and Adults with classical styles.",
  },
  {
    title: "Quran & Tajweeth (Adults & Women)",
    img: QuranImg,
    description:
      "Learn Quran recitation with correct Tajweeth rules for adults and women.",
  },
  {
    title: "Quran & Tajweeth (Children)",
    img: QuranImg,
    description:
      "Special Quran and Tajweeth classes designed exclusively for children.",
  },
  {
    title: "Canva & Photoshop",
    img: DesignImg,
    description: "Learn graphic design using Canva and Adobe Photoshop tools.",
  },
  {
    title: "Al Quran Training Program",
    img: QuranImg,
    description:
      "Comprehensive Quran training program with memorization and understanding.",
  },
  {
    title: "Primary Sources of Islamic Sharia",
    img: IslamicImg,
    description:
      "Study Quran, Sunnah, Ijma, and Qiyas as primary sources of Islamic Sharia.",
  },
  {
    title: "Quran & Tajweeth (Men)",
    img: QuranImg,
    description:
      "Dedicated Quran and Tajweeth classes specially designed for men.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { scale: 1.03 },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#16a34a",
    transition: { duration: 0.3 },
  },
};

export default function Course() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
        >
          Our Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-green-900 text-lg md:text-xl"
        >
          Learn, grow, and master skills that shape your future
        </motion.p>
      </div>

      {/* Courses Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-4 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden rounded-t-2xl">
                <motion.img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/60 opacity-0 flex items-center justify-center text-center px-4"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-sm md:text-base">
                  {course.description}
                </p>
              </motion.div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-900 text-white p-2 rounded-full">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {course.title}
                  </h3>
                </div>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="mt-auto bg-emerald-900 text-white py-2 rounded-xl font-medium"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
