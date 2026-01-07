import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Calculate total scroll width
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.offsetWidth;
      setWidth(scrollWidth - clientWidth);
    }

    // Recalculate on window resize
    const handleResize = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = carouselRef.current.offsetWidth;
        setWidth(scrollWidth - clientWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 bg-[#073C0A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Carousel */}
        <motion.div ref={carouselRef} className="overflow-hidden cursor-grab">
          <motion.div
            className="flex gap-6 flex-nowrap"
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {programs.map((item, index) => (
              <div
                key={index}
                className="min-w-[220px] sm:min-w-[250px] md:min-w-[300px] h-[150px] sm:h-[180px] md:h-[250px]
                           rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-500/50
                           hover:scale-105 transition-transform duration-300 relative group flex-shrink-0"
              >
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
