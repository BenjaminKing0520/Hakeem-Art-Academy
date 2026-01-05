import React from "react";
import HeroBackground from "./HeroBackground";
import HeroText from "./HeroText";

function HeroMain() {
  return (
    <section className="relative w-full -mt-9 md:-mt-9 ">
      {/* Hero Section */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
        <HeroBackground />
        <div
          className="absolute inset-0 flex flex-col items-center md:items-start justify-center 
          px-4 sm:px-8 z-10 text-center md:text-left"
        >
          <HeroText />
        </div>
      </div>
    </section>
  );
}


export default HeroMain;
