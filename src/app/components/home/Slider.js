/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import styles from "./Slider.module.css";

// Slide data
const slides = [
  { id: 1, title: "Gastrointestinal Oncology", image: "/slide1.png" },
  { id: 2, title: "Physiotherapy & Lymphedema Clinic", image: "/slide2.png" },
  { id: 3, title: "General Medicine", image: "/slide3.png" },
  { id: 4, title: "Genecology & Gynae-Oncology", image: "/slide4.png" },
  { id: 5, title: "Medical Oncology", image: "/slide5.png" },
];

// Extend the slides array for seamless looping
const extendedSlides = [...slides, ...slides.slice(0, 2)];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const gap = 15; // Gap between slides in pixels

  // Update slides per view based on window width
  const updateSlidesPerView = () => {
    if (window.innerWidth <= 480) {
      setSlidesPerView(1);
    } else if (window.innerWidth <= 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth <= 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(5);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Calculate slide width including gaps
  const totalGap = (slidesPerView - 1) * gap;
  const slideWidth = `calc((100% - ${totalGap}px) / ${slidesPerView})`;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= extendedSlides.length - slidesPerView ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? extendedSlides.length - slidesPerView : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.buttonContainer}>
        <button onClick={prevSlide} className={styles.arrowButton}>
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className={styles.arrowButton}>
          <FaChevronRight />
        </button>
      </div>
      {/* Slide Wrapper */}
      <div className={styles.slideWrapper}>
        <div
          className={styles.slideTrack}
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            gap: `${gap}px`,
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className={styles.slide}
              style={{
                minWidth: slideWidth,
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.image}
              />
              <p>{slide.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
