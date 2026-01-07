import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

// 🖼 Images
import SLIBE from "@/assets/programs/SLIBE-01.jpg";
import EROC from "@/assets/programs/eroc-01.jpg";
import IAF from "@/assets/programs/IAF-01-01.jpg";
import ISO from "@/assets/programs/ISO-01-01.jpg";
import MMGI from "@/assets/programs/MMGI-01.jpg";
import UBE from "@/assets/programs/UBE-01.jpg";

const programs = [
  { image: SLIBE },
  { image: EROC },
  { image: IAF },
  { image: ISO },
  { image: MMGI },
  { image: UBE },
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

        {/* Carousel */}
        <motion.div className="cursor-grab overflow-hidden">
          <motion.div
            className="flex gap-8"
            drag="x"
            dragConstraints={{ left: -1400, right: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20, // faster scroll
              ease: "linear",
            }}
          >
            {[...programs, ...programs].map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[350px]
                           h-[220px] md:h-[250px]
                           rounded-2xl overflow-hidden
                           shadow-lg hover:shadow-emerald-500/50
                           hover:scale-105 transition-transform duration-300
                           relative group"
              >
                {/* Only Image */}
                <img
                  src={item.image}
                  alt={`Program ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
