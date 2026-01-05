import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CounterBox = ({ title, end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  // 👀 screen-la visible aana once mattum true
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const interval = 30;
    const increment = Math.ceil(end / (duration / interval));

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {count.toLocaleString()}+
      </h2>
      <p className="text-white/80 mt-2 text-lg">{title}</p>
    </motion.div>
  );
};

export default CounterBox;
