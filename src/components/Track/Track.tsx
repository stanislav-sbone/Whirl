import React from "react";
import styles from "./Track.module.css";
import track from "/track.svg";

const Track: React.FC = () => {
  return (
    <section className={styles.track}>
      <div className={`${styles.trackScreen} ${styles.container}`}>
        <div>
          <img src={track} alt="track" />
        </div>
        <div className={styles.trackDescription}>
          <h3>Set, forget, and then track.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className={styles.markers}>
            <li>Understand your options</li>
            <li>No lock-ins</li>
            <li>You own the shares</li>
          </ul>
          <button className={`${styles.trackBtn} ${styles.demoBtn}`}>
            <span>Book a demo</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Track;
