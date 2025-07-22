import React from "react";
import tasksImg from "/tasks-image.svg";
import styles from "./Start.module.css";

const Start: React.FC = () => {
  return (
    <section className={`${styles.start} ${styles.container}`}>
      <div className={styles.startLeft}>
        <h1>Your everyday tasks, automated.</h1>
        <p>
          Whirl lets you design and streamline your everyday tasks and workflows
          in just a few clicks.
        </p>
        <button className={styles.startButton}>Book a demo</button>
        <a href="">Learn more &#707;</a>
      </div>
      <div className="startRight">
        <img src={tasksImg} alt="tasks" />
      </div>
    </section>
  );
};

export default Start;
