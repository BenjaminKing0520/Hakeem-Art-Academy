import React from "react";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants"; // ✅ same fadeIn you used before

// ✅ Example course images (replace with your own)
import WebDImg from "../../assets/Images/course/WebD.jpg";
import GraphicImg from "../../assets/Images/course/Graphic.jpg";

const courses = [
  { title: "Web Development", duration: "3 Months", students: 120, img: WebDImg },
  { title: "Graphic Design", duration: "2 Months", students: 85, img: GraphicImg },
  { title: "Digital Marketing", duration: "1.5 Months", students: 100, img: WebDImg },
  { title: "Python Programming", duration: "3 Months", students: 150, img: WebDImg },
  { title: "UI/UX Design", duration: "2 Months", students: 90, img: WebDImg },
];

export default function PopularCourses() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          variants={fadeIn("down")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-emerald-700 mb-12"
        >
          Popular Courses
        </motion.h2>

        {/* Scrollable Course Cards */}
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide"
        >
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="min-w-[260px] sm:min-w-[280px] bg-white rounded-2xl shadow-lg 
                flex-shrink-0 hover:shadow-2xl transition-all duration-300"
            >
              {/* Course Image */}
              <div className="relative h-40 w-full rounded-t-2xl overflow-hidden">
                <motion.img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Course Details */}
              <div className="p-6 flex flex-col">
                <div className="bg-emerald-500 text-white p-3 rounded-full w-fit mb-3 shadow-md">
                  <BookOpen size={22} />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  Duration: <span className="font-medium">{course.duration}</span>
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Students: <span className="font-medium">{course.students}</span>
                </p>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto bg-emerald-500 text-white px-4 py-2 rounded-xl 
                    hover:bg-emerald-600 shadow-md transition-all duration-300"
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
