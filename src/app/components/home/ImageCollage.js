import Image from "next/image";
import styles from "./ImageCollage.module.css";

function ImageCollage() {
  return (
    <section className={styles.imageCollage}>
      <div className="container">
        <div className={styles.imageCollage__mainRow}>
          <h2 className="h1">
            Your Fight, Our Commitment - Curing Cancer, Bringing Joy
          </h2>
          <div className={styles.imageCollage__row}>
            <Image
              src="/collage.png"
              alt="Equitas Hospital"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageCollage;
