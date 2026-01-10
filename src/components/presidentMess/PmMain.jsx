import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../../assets/Images/About.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const PmMain = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl shadow-xl flex flex-col md:flex-row items-center overflow-hidden">
        {/* Image */}
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="w-full md:w-2/5 p-6 flex justify-center"
        >
          <motion.img
            src={AboutImg}
            alt="Our Journey"
            className="w-64 md:w-full h-auto object-cover rounded-2xl shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* Text */}
        <div className="w-full md:w-3/5 p-8 md:p-12">
          <motion.h2
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-[#0B3B14] mb-3"
          >
            Our Journey
          </motion.h2>

          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="w-24 h-1 bg-[#0B3B14] mb-6 rounded-full"
          ></motion.div>

          <motion.p
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="text-gray-600 leading-relaxed mb-8 text-justify"
          >
            After a decade of dedication and struggle in mastering Arabic
            calligraphy, this academy was born as a humble yet determined effort
            to share that knowledge with others. Hakeem Art Workshop is my
            personal college, founded with the vision of nurturing creativity
            and preserving the beauty of Arabic calligraphy. Alhamdulillah, we
            have developed a wide range of courses with special emphasis on this
            noble art. Today, more than 500 students from various countries are
            part of this journey — a testament to faith, perseverance, and
            purpose.
          </motion.p>

          {/* ✅ Button instead of name */}
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <Link
              to="/about"
              className="inline-block bg-[#0B3B14] text-white px-6 py-3 rounded-full font-medium tracking-wide shadow-md hover:bg-[#0a3412] transition-all duration-300"
            >
              Read More About Us →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PmMain;
