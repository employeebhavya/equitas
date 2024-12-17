import Image from "next/image";
import styles from "./Sharadamba.module.css";

function Sharadamba() {
  return (
    <section className={styles.sharadamba}>
      <div className="container">
        <div className={styles.sharadamba__mainROw}>
          <div className={styles.sharadamba__row}>
            <div className={styles.sharadamba__column}>
              <h2 className="h1">
                With the blessings of Sri Sharadamba <br></br> & their holiness
              </h2>
              <p>
                With the grace of Goddess Sri Sharadamba and blessings from his
                holiness Shri Jagadguru Aadi Shankaracharya, Sri Bharati Tirtha
                Mahasannidhanam & Sannidhanam our non-profit organization is on
                a mission to provide the highest quality healthcare to all
                people, regardless of their background or circumstances. We
                believe that everyone deserves to live a healthy and fulfilling
                life, and we are committed to making that happen.
              </p>
            </div>
            <div className={styles.sharadamba__column}>
              <Image
                src="/sharadamba1.png"
                alt="Sharadamba"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sharadamba;
