import React from "react";
import styles from "./Advantages.module.css";
import fast from "/fast.svg";
import bucks from "/bucks.svg";
import safe from "/safe.svg";

const Advantages: React.FC = () => {
  return (
    <section className={`${styles.advantages} ${styles.container}`}>
      <div className={`${styles.advantage} ${styles.fast}`}>
        <img src={fast} alt="fast" />
        <h3>Fast. Really fast.</h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={`${styles.advantage} ${styles.buck}`}>
        <img src={bucks} alt="bucks" />
        <h3>More bang for buck.</h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={`${styles.advantage} ${styles.safe}`}>
        <img src={safe} alt="safe" />
        <h3>Safe and secure.</h3>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};

export default Advantages;
