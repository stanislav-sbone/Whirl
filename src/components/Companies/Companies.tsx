import React from "react";
import styles from "./Companies.module.css";
import focusFox from "/focusfox.svg";
import nowintech from "/nowintech.svg";
import optimer from "/optimer.svg";
import carded from "/carded.svg";

const Companies: React.FC = () => {
  return (
    <section className={`${styles.companies} ${styles.container}`}>
      <h3>Trusted by 50,000+ companies</h3>
      <div>
        <img src={focusFox} alt="focusfox" />
        <img src={nowintech} alt="nowintech" />
        <img src={optimer} alt="optimer" />
        <img src={carded} alt="carded" />
      </div>
    </section>
  );
};

export default Companies;
