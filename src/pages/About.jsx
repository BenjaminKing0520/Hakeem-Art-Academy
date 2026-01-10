import NavbarMain from '@/components/nevbarSection/NavbarMain';
import React from 'react';
import { motion } from "framer-motion";
import aboutImage from "../assets/Images/About.jpg";
import Footer from '@/components/footer/FooterMain';

function AboutUs() {
  return (
    <>
      <main className="w-full min-h-screen px-6 py-12 bg-gray-100 font-body">
        <NavbarMain />

        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-900 mb-12"
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
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
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
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="w-full md:w-1/2 text-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
            <p className="mb-4">
              After a decade of dedication and struggle in mastering Arabic
              calligraphy, this academy was born as a humble yet determined
              effort to share that knowledge with others. Hakeem Art Workshop is
              my personal college, founded with the vision of nurturing
              creativity and preserving the beauty of Arabic calligraphy.
              Alhamdulillah, we have developed a wide range of courses with
              special emphasis on this noble art. Today, more than 500 students
              from various countries are part of this journey — a testament to
              faith, perseverance, and purpose.
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
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2">Mission Statement Style</h3>
            <p>
              An educational institution dedicated to creating a better future
              for artists through learning and creativity.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2">
              Inspirational Academy Tagline
            </h3>
            <p>
              We create talent. We inspire creativity. We build a better future
              for artists.
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
          "العِلْمُ نُورٌ (Al-‘Ilmu Nūr)" “Knowledge is Light”
        </motion.section>
      </main>

      <Footer />
    </>
  );
}

export default AboutUs;
