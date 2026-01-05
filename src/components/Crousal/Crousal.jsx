import {
  BookOpen,
  PenTool,
  GraduationCap,
  Palette,
  ScrollText,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const programs = [
  {
    icon: PenTool,
    title: "Arabic Calligraphy",
    desc: "For Children, Male & Female Adults",
  },
  { icon: BookOpen, title: "Quran & Thajweeth", desc: "For Adult Women" },
  { icon: BookOpen, title: "Quran & Thajweeth", desc: "For Children" },
  {
    icon: Palette,
    title: "Canva & Photoshop",
    desc: "Creative design skill training",
  },
  {
    icon: GraduationCap,
    title: "Al Quran Training Program",
    desc: "Structured Quranic education",
  },
  {
    icon: ScrollText,
    title: "Primary Sources of Islamic Sharia",
    desc: "Foundations of Islamic law",
  },
  { icon: User, title: "Quran & Thajweeth", desc: "For Men" },
];

export default function SubhMain() {
  return (
    <section className="py-16 bg-[#073C0A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Our Programs
        </motion.h2>

        {/* Carousel Wrapper */}
        <motion.div
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          {/* Track */}
          <motion.div
            className="flex gap-8"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...programs, ...programs].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="min-w-[260px] md:min-w-[300px]
                             bg-white/10 backdrop-blur-lg
                             rounded-2xl p-6
                             flex flex-col items-center text-center gap-4
                             shadow-lg hover:scale-105
                             transition-transform duration-300"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-white/20 rounded-full">
                    <Icon size={38} className="text-white" />
                  </div>

                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
