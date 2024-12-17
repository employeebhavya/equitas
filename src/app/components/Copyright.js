import Image from "next/image";
import styles from "./Copyright.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";

function Copyright() {
  return (
    <section className={styles.copyright}>
      <div className="container">
        <div className={styles.copyright__mainRow}>
          <div className={styles.copyright__row}>
            <div className={styles.copyright__column}>
              <Image
                className={styles.copyright__logo}
                src="/logo.png"
                alt="Equitas Hospital"
                width={100}
                height={100}
              />
              <p>
                Door No 175, Velachery Road, Gowrivakkam,<br></br> Chennai,
                Tamil Nadu-600073
              </p>
              <p className={styles.copyright__phone}>
                <span>
                  <FaPhoneVolume />
                </span>
                617-632-3000
              </p>
            </div>
            <div className={styles.copyright__column}>
              <Image
                src="/nabh.png"
                alt="Equitas Hospital"
                width={100}
                height={100}
              />
              <div className={styles.copyright__columnLink}>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms of Use</Link>
                <Link href="#">Accessibility</Link>
                <Link href="#">Price Transparency</Link>
              </div>
            </div>
          </div>
          <div className={styles.copyright__row}>
            <p>Copyright © 2024 Tectra Techbologies. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Copyright;
