import React from "react";
import styles from "./Tasks.module.css";
import learn from "/learn.svg";
import stay from "/stay.svg";
import automate from "/automate.svg";
import informed from "/informed.svg";

const Tasks: React.FC = () => {
  return (
    <section className={`${styles.tasks} ${styles.container}`}>
      <h3>Your tasks, automated.</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={styles.tasksCards}>
        <div className={styles.cardsItem}>
          <img src={learn} alt="learn" />
          <h4>Learn your options.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className={styles.cardsItem}>
          <img src={stay} alt="stay" />
          <h4>Stay informed.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et doloretro.
          </p>
        </div>
        <div className={styles.cardsItem}>
          <img src={automate} alt="automate" />
          <h4>Automate it all.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ipsum.
          </p>
        </div>
        <div className={styles.cardsItem}>
          <img src={informed} alt="informed" />
          <h4>Stay informed.</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et consectetur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
