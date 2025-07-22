import React from "react";
import styles from "./Care.module.css";

interface CareProps {
  id: number;
  image: string;
  title: string;
  text: string;
  arrowDown: string;
  isOpened: boolean;
  toggleCare: (id: number) => void;
}

const Care: React.FC<CareProps> = ({
  id,
  image,
  title,
  text,
  arrowDown,
  isOpened,
  toggleCare,
}) => {
  return (
    <div className={styles.care}>
      <img className={styles.image} src={image} alt="anti-loss" />
      <div className={styles.main}>
        <button className={styles.careHeader} onClick={() => toggleCare(id)}>
          <div>
            {title}
            <img
              className={
                isOpened
                  ? `${styles.careArrow} ${styles.arrowDown}`
                  : styles.careArrow
              }
              src={arrowDown}
              alt="arrow-down"
            />
          </div>
        </button>
        <div
          className={
            isOpened ? `${styles.content} ${styles.active}` : styles.content
          }
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Care;
