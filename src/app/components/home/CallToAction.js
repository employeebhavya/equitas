import Link from "next/link";
import styles from "./CallToAction.module.css";

function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className="container">
        <div className={styles.callToAction__Row}>
          <h2 className="h1">Get the help you need today.</h2>
          <div className={styles.callToAction__btn}>
            <Link href="#">
              <button>Book an Appointment</button>
            </Link>
            <Link href="#">
              <button className={styles.callToAction__btn2}>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
