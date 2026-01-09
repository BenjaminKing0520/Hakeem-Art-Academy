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

/* ================= EVENTS DATA ================= */
const events = [
  {
    title: "First Steps Toward Becoming an Ulama",
    date: "2025-11-15",
    description:
      "our first religious writing introductory class was held at our religious education center, East Ceylon Arabic College, where I studied religious education and made myself an ulama.",
    images: [Event1, Event2, Event3, Event4],
  },
  {
    title: "Honored with the International World Record of Asia",
    date: "2025-10-12",
    description:
      "Honored to receive the International World Record of Asia at Hilton Colombo.",
    images: [Award, Award1, Award2, Award3],
  },
  {
    title: "Annual Mosque Visit",
    date: "30 July 2025",
    description:
      "The Centre for Islamic Studies Harmony Centre in Association with the Muslim Majlis of Law College and the Muslim Women's Research and Action Forum supported by Diakonia conducted yet another Mosque Tour for the Students of the Sri Lanka Law College.",
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
  {
    title: "Community Awareness Program",
    date: "2026-02-10",
    description:
      "An awareness and outreach program conducted for the community.",
    images: [Event1, Event2, Event3], // ✅ safe images
  },
];

function Events() {
  /* ================= EVENT CAROUSEL ================= */
  const [eventIndex, setEventIndex] = useState(0);

  const nextEvent = () => {
    setEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setEventIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  useEffect(() => {
    const auto = setInterval(nextEvent, 4000);
    return () => clearInterval(auto);
  }, []);

  /* ================= MODAL ================= */
  const [modalOpen, setModalOpen] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openModal = (event) => {
    setActiveEvent(event);
    setActiveImage(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveEvent(null);
  };

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === activeEvent.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? activeEvent.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!modalOpen) return;
    const autoImg = setInterval(nextImage, 3500);
    return () => clearInterval(autoImg);
  }, [modalOpen]);

  return (
    <>
      <NavbarMain />

      <main className="w-full min-h-screen px-4 sm:px-8 py-12 bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-green-900 mb-10">
          Events
        </h1>

        {/* ================= EVENTS CAROUSEL ================= */}
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <motion.div
            animate={{ x: `-${eventIndex * 100}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex"
          >
            {events.map((event, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div
                    className="h-64 bg-black flex items-center justify-center cursor-pointer"
                    onClick={() => openModal(event)}
                  >
                    <img
                      src={event.images[0]}
                      alt=""
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
                </div>
              </div>
            ))}
          </motion.div>

          {/* ARROWS */}
          <button
            onClick={prevEvent}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full text-white"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextEvent}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </main>

      <Footer />

      {/* ================= MODAL ================= */}
      {modalOpen && activeEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3">
          <div className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3 text-white border-b border-white/20">
              <div>
                <h2 className="font-semibold">{activeEvent.title}</h2>
                <p className="text-xs text-gray-400">
                  {new Date(activeEvent.date).toLocaleDateString()}
                </p>
              </div>
              <button onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="h-[60vh] flex items-center justify-center bg-black">
              <img
                src={activeEvent.images[activeImage]}
                alt=""
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 bg-black/60 p-3 rounded-full text-white"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 bg-black/60 p-3 rounded-full text-white"
            >
              <FaArrowRight />
            </button>

            <div className="p-5 bg-gray-100">
              <p className="text-gray-700">{activeEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Events;
