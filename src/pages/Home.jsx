import React from "react";
import NavbarMain from "../components/nevbarSection/NavbarMain";
import HeroMain from "../components/heroSection/HeroMain";
import CountSection from "@/components/CountSection/CountSection";
import PmMain from "../components/presidentMess/PmMain";
import Crousal from "../components/Crousal/Crousal";
import Footer from "../components/footer/FooterMain";

const Home = () => {
  return (
    <main className="font-body flex-col items-center">
      <NavbarMain />
      <HeroMain />
      <CountSection />
      <Crousal />
      <PmMain />
      <Footer />
    </main>
  );
};

export default Home;
