import { motion } from "framer-motion";
import CounterBox from "./CounterBox";

export default function CountSection() {
  return (
    <section className="py-20 bg-[#073C0A]">
      <div className="max-w-5xl mx-auto px-4">
  

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CounterBox title="Students" end={500} />
          <CounterBox title="Courses" end={10} />
        </div>
      </div>
    </section>
  );
}
