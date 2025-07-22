import React from "react";
import styles from "./About.module.css";
import search from "/search.svg";
import monitoring from "/monitoring.svg";

const About: React.FC = () => {
  return (
    <section className={`${styles.about} ${styles.container}`}>
      <div className={styles.aboutTitle}>
        <h3>
          What's Whirl
          <br />
          <span>all about?</span>
        </h3>
      </div>
      <div className={styles.aboutCards}>
        <div className={styles.aboutCard}>
          <h4>All on one place.</h4>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={styles.aboutCard}>
          <img src={search} alt="search" />
          <h4>Get daily alerts.</h4>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={styles.aboutCard}>
          <img src={monitoring} alt="monitoring" />
          <h4>Safe and secure.</h4>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
