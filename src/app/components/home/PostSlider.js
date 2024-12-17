"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import styles from "./PostSlider.module.css";

const PostSlider = () => {
  const posts = [
    {
      id: 1,
      title: "Radiation Therapy Inauguration",
      description: "Launching radiation oncology services with blessings.",
      date: "12/12/2024",
      image: "/post/3.png",
    },
    {
      id: 2,
      title: "Cancer Survival Story",
      description: "Multidisciplinary tumour board meetings conducted.",
      date: "15/12/2024",
      image: "/post/1.png",
    },
    {
      id: 3,
      title: "CNE-STOMA Care Workshop",
      description: "Exposure to nursing programs for skill development.",
      date: "20/12/2024",
      image: "/post/2.png",
    },
    {
      id: 4,
      title: "Community Health Checkup",
      description: "Health services offered to rural communities.",
      date: "25/12/2024",
      image: "/post/1.png",
    },
    {
      id: 5,
      title: "Annual Medical Camp",
      description: "Free health camp with experienced professionals.",
      date: "01/01/2025",
      image: "/post/2.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Adjust slides based on screen width
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setSlidesToShow(1); // Mobile
    } else if (width <= 1024) {
      setSlidesToShow(2); // Tablet
    } else {
      setSlidesToShow(3); // Desktop
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return (
    <section className={styles.postSlider}>
      <div className="container">
        <div className={styles.postSLiderMainRow}>
          <h2 className="h1">News and Discovery</h2>
          <div className={styles.sliderContainer}>
            {/* Left Arrow */}
            <button className={styles.arrowLeft} onClick={prevSlide}>
              &#8249;
            </button>

            {/* Slides */}
            <div
              className={styles.slider}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {posts.map((post) => (
                <div
                  key={post.id}
                  className={styles.slide}
                  style={{
                    flex: `0 0 ${100 / slidesToShow}%`,
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.postImage}
                  />
                  <div className={styles.postContent}>
                    <div className={styles.dateDiv}>
                      <p className={styles.news}>News</p>
                      <p className={styles.date}>{post.date}</p>
                    </div>
                    <h3 className="h4">{post.title}</h3>
                    <p>{post.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button className={styles.arrowRight} onClick={nextSlide}>
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSlider;
