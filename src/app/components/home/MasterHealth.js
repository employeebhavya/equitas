/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./MasterHealth.module.css";

const data = [
  {
    id: 1,
    title: "Executive Package 1",
    image: "/master/1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    id: 2,
    title: "Executive Package 2",
    image: "/master/2.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    id: 3,
    title: "Women Wellness",
    image: "/master/3.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    id: 4,
    title: "Cancer Screening",
    image: "/master/4.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
];

function MasterHealth() {
  return (
    <section className={styles.masterHealth}>
      <div className="container">
        <div className={styles.masterHealth__mainROW}>
          <h2 className="h1"> Master Health Checkup Packages</h2>
          <div className={styles.masterHealth__row}>
            {data.map((item) => (
              <div className={styles.masterHealth__column} key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className={styles.masterHealth__columnContent}>
                  <h3 className="h2">{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link className={styles.masterHealth__btn} href={item.link}>
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MasterHealth;
