import React from "react";
import AboutImg from "../../assets/Images/About.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const PmMain = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden">
        {/* Image */}
        <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          className="w-full md:w-2/5 flex justify-center md:justify-start"
        >
          <motion.img
            src={AboutImg}
            alt="President"
            className="w-64 md:w-full h-auto object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Text */}
        <div className="w-full md:w-3/5 p-8">
          <motion.h2
            variants={fadeIn("right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4"
          >
            Our Story
          </motion.h2>

          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="w-24 h-1 bg-gray-800 mb-4"
          ></motion.div>

          <motion.p
            variants={fadeIn("left")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="text-gray-600 leading-relaxed mb-6 text-justify"
          >
            “Our Journey After a decade of dedication and struggle in mastering
            Arabic calligraphy, this academy was born as a humble yet determined
            effort to share that knowledge with others. Hakeem Art Workshop is
            my personal college, founded with the vision of nurturing creativity
            and preserving the beauty of Arabic calligraphy. Alhamdulillah, we
            have designed and developed a wide range of courses within this
            institution, with special emphasis on Arabic calligraphy as a core
            discipline. Today, Alhamdulillah, it is a matter of pride to mention
            that over 500 students from various countries are currently studying
            humanities and art-related courses at our academy. This journey
            stands as a testament to perseverance, faith, and a deep commitment
            to creating a better future for artists..”
          </motion.p>

          <div className="text-gray-800 font-semibold text-lg">
            <span className="block text-3xl mb-1 font-cursive">
              ✍️ Dr. John Doe
            </span>
            <span className="text-gray-500 text-sm">Founder & President</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PmMain;
