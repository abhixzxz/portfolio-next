"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CropperLaptopBglessImage from "../../../public/images/laptoptransparent.png";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderImages = [
    {
      url: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp",
      alt: "Abhiraj Portrait",
    },
    {
      url: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722146/AbhirajK/abhirajkdark.webp",
      alt: "Abhiraj Dark Theme",
    },
    {
      url: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722144/AbhirajK/abhirajksun.webp",
      alt: "Abhiraj Sunset",
    },
    {
      url: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722148/AbhirajK/Abhirajkchruch.webp",
      alt: "Abhiraj Blue Theme",
    },
    {
      url: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722150/AbhirajK/Abhirajk17.webp",
      alt: "Abhiraj Red Theme",
    },
    {
      url: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722146/AbhirajK/abhirajkbacksideview.webp",
      alt: "Abhiraj Green Theme",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1000);
      }, 100);
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <div className="w-full  flex flex-col md:flex-row items-center p-9">
      <div className="w-full mb-6 md:mb-0">
        <div className="relative">
          <Image src={CropperLaptopBglessImage} alt="Abhiraj.k Photo" />
          <div
            className="absolute w-[45.4%] h-[44.9%] top-[18.8%] left-[17.8%] overflow-hidden rounded-[20px]"
            style={{
              clipPath: "polygon(3% 4%, 87% 8%, 100% 91%, 13% 98%)",
            }}
          >
            <div className="relative w-full h-full">
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full 
                    ${
                      index === currentIndex
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }
                    ${isTransitioning ? "animate-glassShatter" : ""}`}
                  style={{
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className={isTransitioning ? "animate-imageCrack" : ""}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
