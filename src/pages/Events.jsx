import NavbarMain from "@/components/nevbarSection/NavbarMain";
import React from "react";
import { motion } from "framer-motion";
import Event1 from "../assets/Images/Event1.jpg";
import Footer from "@/components/footer/FooterMain";

const events = [
  {
    title: "Annual Sports Day",
    date: "2025-11-15",
    description:
      "Our students showcased their athletic talents and sportsmanship during the Annual Sports Day.",
    image: Event1,
  },
  {
    title: "Science Exhibition",
    date: "2025-10-20",
    description:
      "Students presented innovative projects and experiments, demonstrating creativity and scientific thinking.",
    image: Event1,
  },
  {
    title: "Cultural Fest",
    date: "2025-09-10",
    description:
      "A celebration of our diverse culture with music, dance, and traditional performances by students.",
    image: Event1,
  },
];

function Events() {
  return (
    <>
      <main className="w-full min-h-screen px-6 py-12 bg-gray-100 font-body">
        <NavbarMain />

        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Events
        </motion.h1>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 sm:h-48 md:h-52 lg:h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-500 mb-2">
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Events;
