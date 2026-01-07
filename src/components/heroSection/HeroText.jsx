import React from 'react';
import { fadeIn } from '@/framerMotion/variants';
import { motion } from 'framer-motion';

const HeroText = () => {
  return (
    <div className="text-white mb-6">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-bold 
          mb-3 
          leading-snug sm:leading-tight md:leading-tight lg:leading-[1.1]
        "
      >
        Welcome to <br />
        Hakeem Art Academy
      </motion.h1>

      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="
          text-base sm:text-lg md:text-xl lg:text-2xl 
          text-white/90 
          mt-2 sm:mt-3 md:mt-4
        "
      >
        Providing quality Logo Designing,Wall art & <br></br>Painting,weeding
        invitation Wedding Gifts<br></br>Arabic Calligraphy canvas Arabic
        calligraphy Class and Arts Class
      </motion.p>
    </div>
  );
};

export default HeroText;
