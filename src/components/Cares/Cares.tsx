import React, { useState } from "react";
import styles from "./Cares.module.css";
import computer from "/computer.svg";
import { CARES as cr } from "../../DATA";
import Care from "../Care/Care";

const Cares: React.FC = () => {
  const [cares, setCares] = useState(cr);

  const toggleCare = (id: number) => {
    setCares(
      cares.map((care) =>
        care.id === id
          ? { ...care, isOpened: !care.isOpened }
          : { ...care, isOpened: false }
      )
    );
  };

  return (
    <section className={styles.cares}>
      <div className={`${styles.caresCard} ${styles.container}`}>
        <h3>
          We will take care of everything,
          <br />
          <span>so you can get back to relaxing.</span>
        </h3>
        <div className={styles.caresSubcard}>
          <div className={styles.caresAccordion}>
            {cares.map((care) => (
              <Care
                key={care.id}
                id={care.id}
                image={care.image}
                title={care.title}
                text={care.text}
                arrowDown={care.arrowDown}
                isOpened={care.isOpened}
                toggleCare={toggleCare}
              />
            ))}
          </div>
          <img className={styles.caresImage} src={computer} alt="computer" />
        </div>
      </div>
    </section>
  );
};

export default Cares;
