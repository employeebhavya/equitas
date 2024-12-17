"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./VideoSectionHome.module.css";

export default function VideoSectionHome() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.videoSection}>
        {/* Video Thumbnail (Left Side) */}
        <div className={styles.videoThumbnail} onClick={openPopup}>
          <img
            src="/video-thumb.png"
            alt="Video Thumbnail"
            className={styles.thumbnailImage}
          />
          <button className={styles.playButton}>
            {/* <img
              src="/play-icon.png"
              alt="Play Video"
              className={styles.playIcon}
            /> */}
          </button>
        </div>

        {/* Text Content (Right Side) */}
        <div className={styles.contentSection}>
          <h2 className="h1">
            How patients and families built the Care Center for Cancer Care
          </h2>
          <p>
            Will give access to the latest experimental treatments which are
            otherwise unavailable for patients who have exhausted all options.
            Supportive care trials help to advance the field of oncology and
            improve patient care. Currently, we do not have any ongoing clinical
            trials in the department.
          </p>
        </div>
      </div>

      {/* Video Popup */}
      {isOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <button className={styles.closeButton} onClick={closePopup}>
              <FaTimes />
            </button>
            <iframe
              src="https://www.youtube.com/embed/nPtqxLSicdk"
              title="Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className={styles.videoFrame}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
