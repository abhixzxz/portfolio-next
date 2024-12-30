import React from "react";
import "./hero.css";
import Image from "next/image";
import ImageMain from "../../../public/og-image.jpg";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center p-9">
      <div className="w-full md:w-6/12 mb-6 md:mb-0">
        <Image src={ImageMain} alt="Abhiraj.k Photo" />
      </div>
      <div className="hero-container w-full md:w-4/12 text-center md:text-left">
        <h1
          style={{
            fontFamily: "var(--font-bangers)",
            letterSpacing: "0.07em",
          }}
          className="hero-title text-cyan-400"
          data-shadow="ABHI RAJ.K"
        >
          ABHI RAJ.K
        </h1>
        <h1
          style={{
            fontFamily: "var(--font-bangers)",
            letterSpacing: "0.07em",
          }}
          className="hero-title text-cyan-400"
          data-shadow="FULL STACK"
        >
          FULL STACK
        </h1>
        <h1
          style={{
            fontFamily: "var(--font-bangers)",
            letterSpacing: "0.07em",
          }}
          className="hero-title text-cyan-400"
          data-shadow="DEVELOPER"
        >
          DEVELOPER
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
