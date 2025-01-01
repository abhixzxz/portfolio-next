import Image from "next/image";
import React from "react";
import styles from "./3d-carousel.module.css";

const images = [
  "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp",
  "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp",
  "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722160/AbhirajK/Abhirajk4.webp",
  "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk5.webp",
  "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk6.webp",
  "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk7.webp",
  "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722158/AbhirajK/Abhirajk8.webp",
  "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722157/AbhirajK/Abhirajkfootball.webp",
  "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722156/AbhirajK/Abhirajk10.webp",
];

const ThreeDCarousel: React.FC = () => {
  const rotationAngles = [0, 40, 80, 120, 160, 200, 240, 280, 320];

  return (
    <section className={styles["slideshow-section"]}>
      <div className={styles["carousel-container"]}>
        <div className={styles["carousel-content"]}>
          {images.map((src, index) => (
            <figure
              key={src}
              className={styles["carousel-figure"]}
              style={{
                transform: `rotateY(${rotationAngles[index]}deg) translateZ(300px)`,
              }}
            >
              <Image
                src={src}
                alt={`Abhiraj K - Portfolio Image ${index + 1}`}
                width={940}
                height={650}
                className={styles["carousel-image"]}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeDCarousel;
