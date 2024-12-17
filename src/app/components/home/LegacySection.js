import Image from "next/image";
import styles from "./LegacySection.module.css";
import { FaCircleCheck } from "react-icons/fa6";

function LegacySection() {
  return (
    <section className={styles.legacySection}>
      <div className="container">
        <div className={styles.legacySection__content}>
          <Image
            className={styles.legacySection__image}
            src="/legacy.png"
            alt="Legacy"
            width={500}
            height={500}
          />
          <div className={styles.legacySection__overlay}>
            <h2 className="h1">
              A Legacy of Excellence in Patient-Centered Care
            </h2>
            <p>
              At Equitas Hospital, we combine expert medical care with
              compassionate service to enhance the health and well-being of our
              community.
            </p>
            <ul className="ul">
              <li>
                <span>
                  <FaCircleCheck color="var(--primary)" size={15} />
                </span>
                Experienced medical professionals
              </li>
              <li>
                <span>
                  <FaCircleCheck color="var(--primary)" size={15} />
                </span>
                Patient-centered approach to care
              </li>
              <li>
                <span>
                  <FaCircleCheck color="var(--primary)" size={15} />
                </span>
                State-of-the-art facilities and technology
              </li>
              <li>
                <span>
                  <FaCircleCheck color="var(--primary)" size={15} />
                </span>
                Commitment to community health and well-being
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegacySection;
