"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ScrollImageData {
  imageUrl: string;
  title: string;
  description: string;
}

const ScrollImageBox = ({ data }: { data: ScrollImageData[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  const sectionHeight = 80;
  const totalHeight = data.length * sectionHeight;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollingDown = currentScrollY > lastScrollY;

      setDirection(scrollingDown ? "up" : "down");

      const scrollProgress =
        currentScrollY / (windowHeight * (sectionHeight / 100));
      const newIndex = Math.min(
        Math.max(0, Math.round(scrollProgress)),
        data.length - 1
      );

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [lastScrollY, activeIndex, sectionHeight]);

  return (
    <>
      <div style={{ height: `${totalHeight}vh` }} />

      <div className="fixed inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-20 h-screen">
        <div className="w-full md:w-1/2 relative h-[250px] md:h-[600px] overflow-hidden">
          <div
            className={`absolute border-[20px]  border-white bg-transparent inset-0 transition-all duration-1000 ease-in-out ${
              direction === "up"
                ? "-translate-y-full opacity-0 rotate-[-180deg] scale-75"
                : "translate-y-0 opacity-100 rotate-0 scale-100"
            }`}
          >
            <div className="relative  w-full h-full   overflow-hidden">
              <Image
                src={data[activeIndex].imageUrl}
                alt={data[activeIndex].title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              direction === "up"
                ? "translate-y-0 opacity-100 rotate-0 scale-100"
                : "translate-y-full opacity-0 rotate-[180deg] scale-75"
            }`}
          >
            <div className="relative border-[20px] border-white w-full h-full overflow-hidden">
              <Image
                src={data[activeIndex].imageUrl}
                alt={data[activeIndex].title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 md:p-10">
          <div className="transition-all duration-700 ease-in-out bg-black/60 p-4 md:p-6 rounded-lg backdrop-blur-md">
            <h2
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
              className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-cyan-400 text-center md:text-left"
            >
              {data[activeIndex].title}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
              className="text-sm md:text-lg text-white/90 text-center md:text-left leading-relaxed"
            >
              {data[activeIndex].description}
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="flex flex-col items-center text-cyan-400/70">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollImageBox;
