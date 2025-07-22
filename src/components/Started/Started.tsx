import React from "react";
import styles from "./Started.module.css";

const Started: React.FC = () => {
  return (
    <section className={`${styles.started} ${styles.container}`}>
      <div className={styles.startedScreen}>
        <h3>Get started with Whirl</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <button className={`${styles.startedBtn} ${styles.demoBtn}`}>
          <span>Book a demo</span>
        </button>
        <ul className={styles.startedList}>
          <li>Free 30-day trial</li>
          <li>No credit-card required</li>
        </ul>
      </div>
    </section>
  );
};

export default Started;
