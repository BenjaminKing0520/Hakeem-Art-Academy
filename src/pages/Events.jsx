import NavbarMain from "@/components/nevbarSection/NavbarMain";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer/FooterMain";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

// Images
import Event1 from "../assets/Images/Event1.jpeg";
import Event2 from "../assets/Images/Event2.jpeg";
import Event3 from "../assets/Images/Event3.jpeg";
import Event4 from "../assets/Images/Event4.jpeg";
import Award from "../assets/Images/Award.jpeg";
import Award1 from "../assets/Images/Award1.jpeg";
import Award2 from "../assets/Images/Award2.jpeg";
import Award3 from "../assets/Images/Award3.jpeg";
import MosqueVisit from "../assets/Images/MosqueVisit.jpeg";
import MosqueVisit1 from "../assets/Images/MosqueVisit1.jpeg";
import MosqueVisit2 from "../assets/Images/MosqueVisit2.jpeg";
import MosqueVisit3 from "../assets/Images/MosqueVisit3.jpeg";
import MosqueVisit4 from "../assets/Images/MosqueVisit4.jpeg";
import MosqueVisit5 from "../assets/Images/MosqueVisit5.jpeg";
import MosqueVisit6 from "../assets/Images/MosqueVisit6.jpeg";

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
      "Honored and humbled to receive this Award, the International World Record of Asia, at the prestigious Hilton Colombo!",
    images: [Award, Award1, Award2, Award3],
  },
  {
    title: "Annual Mosque Visit",
    date: "30 July 2025",
    description:
      "The Centre for Islamic Studies Harmony Centre, in association with the Muslim Majlis of Sri Lanka Law College and the Muslim Women’s Research and Action Forum, with the support of Diakonia, conducted a Special Mosque Tour for Sri Lanka Law College students.",
    images: [
      MosqueVisit,
      MosqueVisit1,
      MosqueVisit2,
      MosqueVisit3,
      MosqueVisit4,
      MosqueVisit5,
      MosqueVisit6,
    ],
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
    setActiveIndex((prev) =>
      prev === 0 ? activeEvent.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === activeEvent.images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (!modalOpen || !activeEvent) return;
    const interval = setInterval(nextImage, 3500);
    return () => clearInterval(interval);
  }, [modalOpen, activeEvent]);

  return (
    <>
      <NavbarMain />

      <main className="w-full min-h-screen px-4 sm:px-8 py-12 bg-gray-100">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-green-900 mb-12"
        >
          Events
        </motion.h1>

        {/* EVENTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div
                className="w-full h-56 bg-black flex items-center justify-center cursor-pointer"
                onClick={() => openModal(event)}
              >
                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold">{event.title}</h2>
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(event.date).toLocaleDateString()}
                </p>

                <p className="text-sm text-gray-700 line-clamp-3">
                  {event.description}
                </p>

                <button
                  onClick={() => openModal(event)}
                  className="mt-3 text-green-700 font-semibold hover:underline"
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />

      {/* MODAL */}
      {modalOpen && activeEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3">
          <div className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden">
            {/* HEADER BAR */}
            <div className="flex items-center justify-between px-4 py-3 bg-black text-white border-b border-white/20">
              <div>
                <h2 className="text-sm sm:text-lg font-semibold">
                  {activeEvent.title}
                </h2>
                <p className="text-xs text-gray-400">
                  {new Date(activeEvent.date).toLocaleDateString()}
                </p>
              </div>

              <button
                onClick={closeModal}
                className="text-xl hover:text-red-500"
              >
                <FaTimes />
              </button>
            </div>

            {/* IMAGE */}
            <div className="w-full h-[55vh] sm:h-[65vh] bg-black flex items-center justify-center">
              <img
                src={activeEvent.images[activeIndex]}
                alt=""
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* ARROWS */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full text-white"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full text-white"
            >
              <FaArrowRight />
            </button>

            {/* DESCRIPTION */}
            <div className="p-5 bg-gray-100">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {activeEvent.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Events;
