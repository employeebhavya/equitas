import Image from "next/image";
import styles from "./HeroSection.module.css";
import { FaPhoneVolume } from "react-icons/fa6";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSection__column}>
        <video
          className={styles.heroSection__image}
          src="/hero.mp4" // Path to your local video file
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className={styles.heroSection__column}>
        <h2 className="h1">
          The Most Affordable Cancer cum Multi Specialty Hospital
        </h2>
        <p>
          Equitas Hospital is dedicated to providing high-quality,
          patient-centered care with a focus on innovation, compassion, and
          community well-being.
        </p>
        <div className={styles.heroSection__button}>
          <button>Our Services</button>
          <button>
            <span>
              <FaPhoneVolume />
            </span>
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
