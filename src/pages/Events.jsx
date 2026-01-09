import NavbarMain from "@/components/nevbarSection/NavbarMain";
import React, { useState, useEffect } from "react";
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
import Diamon from "../assets/Images/Diamon.jpeg";
import Diamon1 from "../assets/Images/Diamon1.jpeg";
import Diamon2 from "../assets/Images/Diamon2.jpeg";
import Diamon3 from "../assets/Images/Diamon3.jpeg";

// ================= EVENTS DATA =================
const events = [
  {
    title: "First Steps Toward Becoming an Ulama",
    date: "2025-11-15",
    description:
      "Our first religious writing introductory class was held at our religious education center, East Ceylon Arabic College, where I studied religious education and made myself an ulama.",
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
    date: "2025-07-30",
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
    title: "Diamond Excellence Awards 2025",
    date: "2025-08-17",
    description:
      "The Diamond Excellence Awards 2025 is Sri Lanka’s premier platform honoring exceptional leaders, innovators, educators, entrepreneurs, and artists who have made a meaningful impact on society. Celebrating excellence, innovation, and cultural pride, the awards recognize inspiring individuals and organizations shaping the nation’s future.",
    images: [Diamon1, Diamon, Diamon2, Diamon3],
  },
];

// ================= EVENTS COMPONENT =================
function Events() {
  // ================= MODAL =================
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

        {/* ================= EVENTS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full cursor-pointer group"
              onClick={() => openModal(event)} // Card click opens modal
            >
              {/* Image */}
              <div className="h-48 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-md font-semibold mb-1 text-green-900">
                  {event.title}
                </h2>
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-700 flex-1 line-clamp-3">
                  {event.description}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent double click
                    openModal(event);
                  }}
                  className="mt-1 text-md text-green-900 hover:underline self-start"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* ================= MODAL ================= */}
      {modalOpen && activeEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3">
          <div className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden">
            {/* Header */}
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

            {/* Image Slider */}
            <div className="h-[60vh] flex items-center justify-center bg-black relative">
              <img
                src={activeEvent.images[activeImage]}
                alt={activeEvent.title}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 bg-black/60 p-3 rounded-full text-white -translate-y-1/2"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 bg-black/60 p-3 rounded-full text-white -translate-y-1/2"
              >
                <FaArrowRight />
              </button>
            </div>

            {/* Full Description */}
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
