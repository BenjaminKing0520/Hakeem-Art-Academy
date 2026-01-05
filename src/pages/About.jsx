import NavbarMain from '@/components/nevbarSection/NavbarMain';
import React from 'react';
import { motion } from "framer-motion";
import aboutImage from "../assets/Images/About.jpg";
import Footer from '@/components/footer/FooterMain';

function AboutUs() {
  return (
    <>
      <main className="w-full min-h-screen px-6 py-12 bg-gray-100 font-body">
        <NavbarMain/>

        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          About Us
        </motion.h1>

        {/* Intro Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          {/* Image */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            className="w-full md:w-1/2"
          >
            <img
              src={aboutImage}
              alt="About Islamic College"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            className="w-full md:w-1/2 text-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Islamic College was founded with the vision of providing quality education that
              combines academic excellence with strong moral and ethical values. Our mission
              is to nurture students into responsible, knowledgeable, and compassionate citizens.
            </p>
            <p>
              We offer a holistic learning environment, where students are encouraged to
              explore, innovate, and develop skills that prepare them for the modern world.
            </p>
          </motion.div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-2 gap-8 text-gray-800"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p>
              To provide a nurturing environment for students to achieve academic excellence
              while instilling strong Islamic values, leadership qualities, and social responsibility.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p>
              To be a leading institution recognized for academic excellence, moral integrity,
              and the holistic development of students, preparing them for lifelong success.
            </p>
          </motion.div>
        </motion.section>

        {/* Optional Quote */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center text-gray-600 italic"
        >
          "Education is the most powerful weapon which you can use to change the world." – Nelson Mandela
        </motion.section>
      </main>

      <Footer/>
    </>
  );
}

export default AboutUs;
