import React from "react";
import { motion } from "framer-motion";
import NavbarMain from "@/components/nevbarSection/NavbarMain";
import Footer from "@/components/footer/FooterMain";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Contact() {
  const socialLinks = [
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/mohammed-saraf-khan-5404682b8",
    },
    {
      icon: FaFacebookSquare,
      link: "https://www.facebook.com/saraf.musammil",
    },
    {
      icon: FaTwitterSquare,
      link: "https://twitter.com/saraf_musammil",
    },
    {
      icon: FaInstagramSquare,
      link: "https://www.instagram.com/saraf.musammil",
    },
  ];

  return (
    <>
      <NavbarMain />

      <main className="w-full min-h-screen px-4 sm:px-6 md:px-12 py-12 bg-gray-100 font-body">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center text-green-900 mb-10"
        >
          Contact Us
        </motion.h1>

        {/* MAP FIRST */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-64 sm:h-80 md:h-[450px] rounded-xl overflow-hidden shadow-lg mb-12"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9999999999995!2d81.839999!3d7.383333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5000000000001%3A0x0000000000000000!2sAttalachenai%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v0000000000"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </motion.div>

        {/* CONTACT DETAILS */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-2">
              <strong>Phone:</strong>0752258847
            </p>
            <p className="mb-2">
              <strong>Email:</strong> mailhakeemahmed94@gmail.com
            </p>
            <p>
              <strong>Address:</strong> College of Melbourne, Attalachenai
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Follow Us the rohan benjam dfvkmodfvkmo</h2>

            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                  whileTap={{ scale: 0.9 }}
                  className="h-12 w-12 flex items-center justify-center border rounded-full text-2xl text-green-900 hover:text-emerald-700 transition-all"
                >
                  <item.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
