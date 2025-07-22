import React from "react";
import styles from "./Header.module.css";
import logo from "/logo.svg";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <div className={styles.headerLeft}>
          <a className={styles.logo} href="#">
            <img className={styles.logoImg} src={logo} alt="logo" />
          </a>
          <nav>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Integrations</a>
            <a href="#">Learn</a>
          </nav>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.signInBtn}>Sign in</button>
          <button className={styles.demoBtn}>Book a demo</button>
        </div>
      </header>
    </>
  );
};

export default Header;
