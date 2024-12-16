"use client";

import Image from "next/image";
import React from "react";
import styles from "./3d-carousel.module.css";

const images = [
  "https://images.pexels.com/photos/758733/pexels-photo-758733.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/21261/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/567973/pexels-photo-567973.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/54630/japanese-cherry-trees-flowers-spring-japanese-flowering-cherry-54630.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/131046/pexels-photo-131046.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/302515/pexels-photo-302515.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/301682/pexels-photo-301682.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
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
                alt={`Carousel image ${index + 1}`}
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
