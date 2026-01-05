import React from "react";
import { BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/footer/FooterMain";
import NavbarMain from "@/components/nevbarSection/NavbarMain";

const courses = [
  { title: "Web Development", duration: "3 Months", students: 120, description: "Learn front-end and back-end development with modern tools." },
  { title: "Graphic Design", duration: "2 Months", students: 85,  description: "Master design principles, Photoshop, Illustrator, and Figma." },
  { title: "Digital Marketing", duration: "1.5 Months", students: 100,  description: "Learn SEO, social media marketing, and ad campaigns." },
  { title: "Python Programming", duration: "3 Months", students: 150,  description: "Learn Python programming for web, data science, and automation." },
  { title: "UI/UX Design", duration: "2 Months", students: 90,  description: "Design user-friendly interfaces and enhance user experience." },
];

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hover: { scale: 1.05, backgroundColor: "#16a34a", transition: { duration: 0.3 } },
};

export default function Course() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavbarMain/>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          All Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-lg md:text-xl"
        >
          Explore our popular courses and boost your skills today!
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
              {/* Course Image */}
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
                className="absolute inset-0 bg-black/60 opacity-0 rounded-2xl flex flex-col justify-center items-center text-center px-4"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white text-sm md:text-base">{course.description}</p>
              </motion.div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-emerald-500 text-white p-2 rounded-full">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{course.title}</h3>
                </div>

                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <span>Duration: {course.duration}</span>
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {course.students}
                  </span>
                </div>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="mt-auto bg-emerald-500 text-white py-2 rounded-xl transition"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
