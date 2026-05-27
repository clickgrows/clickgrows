"use client";
import React, { useEffect, useState } from "react";
import styles from "./WhoAreWe.module.scss";

const WhoAreWe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const strategicPoints = [
    "High-Performance Paid Media Campaigns Across Meta, Google & More",
    "Strategic Social Media Marketing to Grow and Engage Your Audience",
    "Strong Brand Positioning That Builds Trust and Recognition",
  ];

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          <div className={`${styles.hero__content} ${isVisible ? styles["hero__content--visible"] : ""}`}>
            <div className={styles.hero__badge}><span>ABOUT OUR AGENCY</span></div>
            <h1 className={styles.hero__title}>
              <span className={styles["hero__title--blue"]}>Paid Media & Social Media</span>
              <span className={styles["hero__title--blue"]}> Marketing Experts</span>
              <span className={styles["hero__title--blue"]}> Focused on Scaling Modern Brands</span>
            </h1>
            <p className={styles.hero__description}>
              We help brands grow faster with strategic paid media, social media marketing,
              and powerful branding. Our team focuses on performance-driven campaigns,
              audience targeting, and creative strategies that increase visibility,
              generate high-quality leads, and drive consistent business growth.
            </p>
            <div className={styles.hero__approach}>
              <h3 className={styles["hero__approach-title"]}>Our Strategic Approach Includes:</h3>
              <ul className={styles.hero__list}>
                {strategicPoints.map((point, index) => (
                  <li key={index} className={styles.hero__list_item} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                    <div className={styles.hero__list_icon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#C2A68C"/>
                        <path d="M7 12L10.5 15.5L17 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.hero__footer_text}>
              By combining paid media expertise, social media growth strategies,
              and strong branding, we create a powerful marketing ecosystem that
              helps businesses attract the right audience, increase engagement,
              and scale sustainably in competitive markets.
            </p>
          </div>
          <div className={`${styles.hero__visual} ${isVisible ? styles["hero__visual--visible"] : ""}`}>
            <img src="/funnel.png" alt="Digital Marketing Growth Strategy" className={styles.hero__image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;