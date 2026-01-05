import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import devImg from "../../assets/Images/Logo.jpg";

export default function FooterMain() {
  const [typed, setTyped] = useState("");

  const text = `© ${new Date().getFullYear()} Hakeem Art Online. All Rights Reserved.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  const fbTheme = {
    gradient: "from-white via-white/70 to-white",
    border: "border-white/50",
    glow: "from-white/20 via-white/10 to-white/20",
    text: "text-white",
    icon: "text-white hover:text-[#073C0A]", // Facebook hover blue
  };

  return (
    <footer className="relative overflow-hidden bg-[#073C0A]">
      {/* Glow Background */}
      <div
        className={`absolute inset-0 opacity-20 blur-3xl animate-gradient-x bg-gradient-to-r ${fbTheme.glow} -z-10`}
      ></div>

      <motion.div
        className={`relative border rounded-3xl shadow-2xl p-6 md:p-10 border-opacity-50 ${fbTheme.border}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Icons */}
          <div className="flex gap-5 md:w-1/3 justify-center md:justify-start">
            {[FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaPhoneAlt].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className={`text-2xl hover:scale-125 hover:-translate-y-1 transition-all duration-300 ${fbTheme.icon}`}
                />
              )
            )}
          </div>

          {/* Center Text */}
          <div className="text-center md:w-1/3">
            <p className={`text-sm font-mono opacity-80 ${fbTheme.text}`}>
              {typed}
            </p>
            <p className={`mt-3 text-sm ${fbTheme.text}`}>Developed by</p>
            <p
              className={`font-extrabold text-lg bg-clip-text text-transparent bg-gradient-to-r ${fbTheme.gradient}`}
            >
              Melbourne Techy
            </p>
          </div>

          {/* Developer Image */}
          <div className="md:w-1/3 flex justify-end">
            <motion.img
              whileHover={{ scale: 1.15, rotate: 3 }}
              src={devImg}
              alt="Developer"
              className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-4 shadow-xl transition-shadow ${fbTheme.border}`}
            />
          </div>
        </div>

        {/* Back-to-top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 p-2 rounded-full shadow-2xl z-50 hover:scale-110 transition-all duration-300 text-white bg-white/20`}
        >
          <FaArrowUp className="text-white" />
        </motion.button>
      </motion.div>
    </footer>
  );
}
