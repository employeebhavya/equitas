import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.footer__row}>
          <div className={styles.footer__column}>
            <h3 className="h4">Stay in touch with us</h3>
            <p>
              Discoveries, workshops, stories of hope and triumph can be found
              in the pages of Dana- Farber’s free digital newsletters and
              publications.
            </p>
            <Link href="#">
              <button className={styles.footer__btn}>Subscribe</button>
            </Link>
            <div className={styles.footer__social}>
              <Link href="#">
                <span>
                  <FaFacebookF color="var(--primary)" size={20} />
                </span>
              </Link>
              <Link href="#">
                <span>
                  <FaLinkedinIn color="var(--primary)" size={20} />
                </span>
              </Link>
              <Link href="#">
                <span>
                  <BsTwitterX color="var(--primary)" size={20} />
                </span>
              </Link>
              <Link href="#">
                <span>
                  <FaInstagram color="var(--primary)" size={20} />
                </span>
              </Link>
              <Link href="#">
                <span>
                  <FaYoutube color="var(--primary)" size={20} />
                </span>
              </Link>
            </div>
          </div>
          <div className={styles.footer__column}>
            <h3 className="h4">Quick Links</h3>
            <Link href="#">Home</Link>
            <Link href="#">Our Services</Link>
            <Link href="#">Our Doctors</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Careers</Link>
          </div>
          <div className={styles.footer__column}>
            <h3 className="h4">Locations</h3>
            <Link href="#">+91 89258 33176</Link>
            <Link href="#">044-49944444</Link>
            <Link href="#">044-49944400</Link>
            <Link href="#">info@equitashospital.org</Link>
          </div>
          <div className={styles.footer__column}>
            <h3 className="h4">Discovery and Insights</h3>
            <Link href="#">Newsroom</Link>
            <Link href="#">Insight Blog</Link>
            <Link href="#">Newsletters</Link>
            <Link href="#">Publications</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
