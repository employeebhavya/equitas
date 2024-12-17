import Image from "next/image";
import styles from "./LogoHeader.module.css";
import SearchBox from "./SearchBox";
import Link from "next/link";
import { CiStethoscope } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

function LogoHeader() {
  return (
    <section className={styles.logoHeader}>
      <div className="container">
        <div className={styles.logoHeader__content}>
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Equitas Hospital"
            width={289}
            height={101}
          />
          <SearchBox />
          <div className={styles.logoHeader__link}>
            <Link href="#">
              <span>
                <CiStethoscope color="var(--primary)" />
              </span>
              Find a Doctor
            </Link>
            <Link href="#">
              <span>
                <MdDateRange color="var(--primary)" />
              </span>
              Appointments and Second Opinions
            </Link>
            <Link href="#">
              <span>
                <CiLocationOn color="var(--primary)" />
              </span>
              Find a Location
            </Link>
            <Link href="#">
              <span>
                <FaRegUser color="var(--primary)" />
              </span>
              Patient Portals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoHeader;
