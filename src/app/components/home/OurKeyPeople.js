/* eslint-disable @next/next/no-img-element */
import styles from "./OurKeyPeople.module.css";

const dataPeople = [
  {
    id: 1,
    image: "/people/1.png",
    name: "Shri. N. Rangachary",
    position: "Trustee",
  },
  {
    id: 2,
    image: "/people/2.png",
    name: "Padma Shri Dr. V. R. Gowrishankar",
    position: "Pillar Of Support",
  },
  {
    id: 3,
    image: "/people/3.png",
    name: "Padma Bhushan Subramanian Ramadorai",
    position: "Trustee",
  },
  {
    id: 4,
    image: "/people/4.png",
    name: "Shri. P. N. Vasudevan",
    position: "Managing Trustee",
  },
  {
    id: 5,
    image: "/people/5.png",
    name: "Dr. Hemanth Raj",
    position: "Trustee",
  },
  {
    id: 6,
    image: "/people/6.png",
    name: "Dr. C. K. Gariyali, IAS (Retd)",
    position: "Trustee",
  },
  {
    id: 7,
    image: "/people/7.png",
    name: "Shri PA Murali",
    position: "Pillar Of Support",
  },
  {
    id: 8,
    image: "/people/8.png",
    name: "Mr. Arcot Sravanakumar",
    position: "Program Director",
  },
  {
    id: 9,
    image: "/people/9.png",
    name: "Dr. Vaithiswaran Velayoudam",
    position: "Medical Director",
  },
  {
    id: 10,
    image: "/people/10.png",
    name: "Dr. Stephen Mathew",
    position: "Chief Operating Officer",
  },
];

function OurKeyPeople() {
  return (
    <section className={styles.ourKeyPeople}>
      <div className="container">
        <div className={styles.ourKeyPeople__mainRow}>
          <h2 className="h1">Our Key People</h2>
          <div className={styles.ourKeyPeople__row}>
            {dataPeople.map((item) => (
              <div className={styles.ourKeyPeople__column} key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className={styles.ourKeyPeople__columnContent}>
                  <h3 className="h4">{item.name}</h3>
                  <p>{item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurKeyPeople;
