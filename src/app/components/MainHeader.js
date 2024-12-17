/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import styles from "./MainHeader.module.css";

const MneuLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Services",
    href: "#",
  },
  {
    title: "Doctors",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

function MainHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <section className={styles.mainHeader}>
      <div className="container">
        <div className={styles.mainHeader__bg}>
          <div className={styles.logoMobile}>
            <img src="logo.png" alt="Logo" />
          </div>
          {/* Hamburger Icon */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <CiMenuFries size={30} />
          </div>

          {/* Menu Links */}
          <div
            className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
          >
            <div className={styles.mobileMenuTop}>
              {/* <div className={styles.logoMobile}>
                <img src="logo.png" alt="Logo" />
              </div> */}
              {/* Close Icon */}
              <div className={styles.closeButton} onClick={closeMenu}>
                <FaTimes size={30} />
              </div>
            </div>

            {MneuLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={pathname === link.href ? styles.activeLink : ""}
                onClick={closeMenu} // Close menu when a link is clicked
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHeader;
