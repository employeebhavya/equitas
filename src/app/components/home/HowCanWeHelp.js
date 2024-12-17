/* eslint-disable @next/next/no-img-element */
import styles from "./HowCanWeHelp.module.css";
import { BiSolidRightArrow } from "react-icons/bi";

const dataHowCanWeHelp = [
  {
    id: 1,
    image: "/help/1.png",
    title: "Operation Theatres",
  },
];
const dataHowCanWeHelp1 = [
  {
    id: 2,
    image: "/help/2.png",
    title: "Daycare (Chemotherapy ward) ",
  },
  {
    id: 3,
    image: "/help/3.png",
    title: "Intensive Care Unit",
  },
  {
    id: 4,
    image: "/help/4.png",
    title: "Radiation Therapy",
  },
  {
    id: 5,
    image: "/help/5.png",
    title: "Radiation Therapy",
  },
];

function HowCanWeHelp() {
  return (
    <section className={styles.howCanWeHelp}>
      <div className="container">
        <div className={styles.howCanWeHelp__mainRow}>
          <h2 className="h1">How can we Help</h2>
          <div className={styles.howCanWeHelp__row}>
            <div className={styles.howCanWeHelp__columnMain0}>
              {dataHowCanWeHelp.map((item) => (
                <div className={styles.howCanWeHelp__column} key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.howCanWeHelp__columnContent}>
                    <h3 className="h4">{item.title}</h3>
                    <BiSolidRightArrow />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.howCanWeHelp__columnMain1}>
              {dataHowCanWeHelp1.map((item) => (
                <div className={styles.howCanWeHelp__column} key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.howCanWeHelp__columnContent}>
                    <h3 className="h4">{item.title}</h3>
                    <BiSolidRightArrow />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowCanWeHelp;
