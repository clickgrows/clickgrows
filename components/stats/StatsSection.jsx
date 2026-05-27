import React from "react";
import styles from "./StatsSection.module.scss";

const StatsSection = () => {
  const statsData = [
    { value: "6.8X", description: "Average ROAS generated from high-performance paid media campaigns" },
    { value: "210%", description: "Average growth in brand visibility and audience reach" },
    { value: "145%", description: "Increase in qualified leads through social media marketing" },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsSection__header}>
          <div className={styles.statsSection__badge}>
            <span className={styles.statsSection__badge_text}>RESULTS THAT DRIVE REAL BUSINESS GROWTH</span>
          </div>
          <h2 className={styles.statsSection__title}>Performance Metrics That Define Our Marketing Impact</h2>
          <p className={styles.statsSection__subtitle}>Proven Results Across Paid Media, Social Media Marketing & Branding</p>
        </div>
        <div className={styles.statsSection__grid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statsSection__card} style={{ animationDelay: `${index * 0.15}s` }}>
              <h3 className={styles.statsSection__value}>{stat.value}</h3>
              <p className={styles.statsSection__description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
