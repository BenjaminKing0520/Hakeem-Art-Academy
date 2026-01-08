import NavbarMain from "@/components/nevbarSection/NavbarMain";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Event1 from "../assets/Images/Event1.jpeg";
import Event2 from "../assets/Images/Event2.jpeg";
import Event3 from "../assets/Images/Event3.jpeg";
import Event4 from "../assets/Images/Event4.jpeg";
import Award from "../assets/Images/Award.jpeg";
import Award1 from "../assets/Images/Award1.jpeg";
import Award2 from "../assets/Images/Award2.jpeg";
import Award3 from "../assets/Images/Award3.jpeg";
import Footer from "@/components/footer/FooterMain";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const events = [
  {
    title: "First Steps Toward Becoming an Ulama",
    date: "2025-11-15",
    description:
      "Our first Religious Writing Introductory class was held at our religious education center, East Ceylon Arabic College, where I studied religious education and made myself an ulama. Alhamdulillah",
    images: [Event1, Event2, Event3, Event4],
  },
  {
    title: "Honored with the International World Record of Asia",
    date: "2025-10-12",
    description:
      "Honored and humbled to receive this Award, the International World Record of Asia, at the prestigious Hilton Colombo! A milestone moment that reflects dedication, passion, and the power of perseverance. Thank you to everyone who supported this journey — this one's for all of us!",
    images: [Award, Award1, Award2, Award3],
  },
  {
    title: "#",
    date: "#",
    description: "#",
    images: [],
  },
];

function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (event) => {
    setActiveEvent(event);
    setActiveIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveEvent(null);
  };

  const prevImage = () => {
    setActiveIndex(
      activeIndex === 0 ? activeEvent.images.length - 1 : activeIndex - 1
    );
  };

  const nextImage = () => {
    setActiveIndex(
      activeIndex === activeEvent.images.length - 1 ? 0 : activeIndex + 1
    );
  };

  // Auto-scroll effect for modal carousel
  useEffect(() => {
    if (!modalOpen || !activeEvent || activeEvent.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === activeEvent.images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [modalOpen, activeEvent]);

  return (
    <>
      <main className="w-full min-h-screen px-6 py-12 bg-gray-100 font-body relative">
        <NavbarMain />

        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-900 mb-12"
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
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(event)}
            >
              <img
                src={event.images[0]}
                alt={event.title}
                className="w-full h-56 sm:h-48 md:h-52 lg:h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-500 mb-2">
                  {event.date !== "#" &&
                    new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {modalOpen && activeEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-800 hover:text-red-500 text-2xl z-50"
            >
              <FaTimes />
            </button>

            {/* Carousel Image */}
            <img
              src={activeEvent.images[activeIndex]}
              alt={activeEvent.title}
              className="w-full h-96 object-cover"
            />

            {/* Left/Right Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
            >
              <FaArrowRight />
            </button>

            {/* Caption */}
            <div className="p-6 bg-gray-100">
              <h2 className="text-xl font-semibold">{activeEvent.title}</h2>
              <p className="text-gray-600 mb-2">
                {activeEvent.date !== "#" &&
                  new Date(activeEvent.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{activeEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Events;
