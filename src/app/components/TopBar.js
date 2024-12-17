import Link from "next/link";
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <section className={styles.topBar}>
      <div className="container">
        <div className={styles.topBar__content}>
          <Link href="#">Careers</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#" className={styles.topBar__donate}>
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
