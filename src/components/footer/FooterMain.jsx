import {
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import devImg from "../../assets/Images/Logo.jpg";

// X Icon
const XIcon = ({ className }) => <span className={className}>X</span>;

export default function FooterMain() {
  const [typed, setTyped] = useState("");

  const text = `© ${new Date().getFullYear()} Hakeem Art Academy. All Rights Reserved.`;

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
    glow: "from-white/20 via-white/10 to-white/20",
    text: "text-white",
    icon: "text-white transition-all duration-300",
  };

  const socialLinks = [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=61585860912759",
    },
    { icon: FaWhatsapp, link: "https://wa.me/94752258847" },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/hakeem_art_academy_?igsh=bDQyajNmZHcya3hn&utm_source=qr",
    },
    { icon: XIcon, link: "https://x.com/artworkeshop?s=21" },
    { icon: FaEnvelope, link: "mailto:mailhakeemahmed94@gmail.com" },
    { icon: FaPhoneAlt, link: "tel:+94752258847" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#073C0A] py-10 border-t-4 border-green-600">
      {/* Glow Background */}
      <div
        className={`absolute inset-0 opacity-20 blur-3xl animate-gradient-x bg-gradient-to-r ${fbTheme.glow} -z-10`}
      />

      <motion.div className="relative p-6 md:p-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section: Social icons above address */}
          <div className="flex flex-col md:w-1/3 items-center md:items-start gap-3">
            {/* Social Icons with hover effect */}
            <div className="flex gap-5 justify-center md:justify-start">
              {socialLinks.map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white rounded-full p-3 bg-white/10 shadow-lg hover:bg-white/20 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.25, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="text-2xl" />
                </motion.a>
              ))}
            </div>

            {/* Address under social icons */}
            <p className="text-white text-sm text-center md:text-left font-semibold mt-1">
              118, Iqrah School Road, Addalaichenai -13
            </p>
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
              Melbourne Techy good boyu to code  gjdjv
            </p>
          </div>

          {/* Logo / Image */}
          <div className="md:w-1/3 flex justify-end">
            <motion.img
              whileHover={{ scale: 1.15, rotate: 3 }}
              src={devImg}
              alt="Logo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-xl transition-shadow"
            />
          </div>
        </div>

        {/* Back-to-top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-2 rounded-full shadow-2xl z-50 hover:scale-110 transition-all duration-300 bg-white/20"
        >
          <FaArrowUp className="text-white" />
        </motion.button>
      </motion.div>
    </footer>
  );
}
