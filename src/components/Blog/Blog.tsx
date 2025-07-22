import React from "react";
import styles from "./Blog.module.css";
import automating from "/automating.svg";
import learning from "/learning.svg";
import investors from "/investors.svg";

const Blog: React.FC = () => {
  return (
    <section className={styles.blog}>
      <div className={`${styles.blogScreen} ${styles.container}`}>
        <div className={styles.blogTitle}>
          <h3>Get smarter, with our blog.</h3>
          <a href="#">See All Posts</a>
        </div>
        <div className={styles.blogCards}>
          <div className={styles.cardItem}>
            <img src={automating} alt="automating" />
            <div className={styles.cardContent}>
              <div className={styles.topic}>Improvements</div>
              <h4>Automating Daily Tasks from Your Phone</h4>
              <p>
                Dicta nihil ratione corrupti. Aut dolorem dolores omnis
                laboriosam ratione sequi. Provident ad sed velit. Est ea ab.
              </p>
              <div className={styles.blogDate}>April 24, 2022</div>
            </div>
          </div>
          <div className={styles.cardItem}>
            <img src={learning} alt="learning" />
            <div className={styles.cardContent}>
              <div className={styles.topic}>Tips & Tricks</div>
              <h4>Can You Automate Group Learning?</h4>
              <p>
                Dicta nihil ratione corrupti. Aut dolorem dolores omnis
                laboriosam ratione sequi. Provident ad sed velit. Est ea ab.
              </p>
              <div className={styles.blogDate}>April 24, 2022</div>
            </div>
          </div>
          <div className={styles.cardItem}>
            <img src={investors} alt="investors" />
            <div className={styles.cardContent}>
              <div className={styles.topic}>News</div>
              <h4>Our $3,000,000 B Round Investors</h4>
              <p>
                Eos ipsum et est quis neque cum. Quis autem est eligendi amet
                animi eaque. Itaque minus illo delectus vel vitae dolores minus.
              </p>
              <div className={styles.blogDate}>April 24, 2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
