import React from "react";
import styles from "./Footer.module.css";
import logo from "/logo.svg";
import twitter from "/twitter.svg";
import linkedin from "/linkedin.svg";
import facebook from "/facebook.svg";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerTop}>
        <div className={styles.footerLeft}>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <p>
            Built by <a href="#">XXXX XXXX</a>
          </p>
          <p>
            Powered by <a href="#">Webflow</a>
          </p>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerCard}>
            <h4>Info</h4>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCard}>
            <h4>Admin</h4>
            <ul>
              <li>
                <a href="#">Style Guide</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
              <li>
                <a href="#">Instructions</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Password</a>
              </li>
              <li>
                <a href="#">404</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.footerCard} ${styles.newsletter}`}>
            <h4>Newsletter</h4>
            <p>
              Sign up for the latest news, company insights, and Whirl updates.
            </p>
            <form action="">
              <div className={styles.emailInputContainer}>
                <input
                  type="email"
                  id="email"
                  className={styles.emailInput}
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className={styles.emailLabel}>
                  Your email
                </label>
              </div>
              <button className={`${styles.emailBtn} ${styles.demoBtn}`}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footerBottom}>
        <p>
          © 2025 Whirl. All Rights Reserved. Illustrations by
          <a href="#"> Streamline</a>.
        </p>
        <div className={styles.socialMedia}>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
