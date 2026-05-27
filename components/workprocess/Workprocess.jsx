"use client";
import React, { useEffect, useRef } from "react";
import styles from "./WorkProcess.module.scss";

const WorkProcess = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const statRefs = useRef([]);

  const processSteps = [
    { id: 1, number: "01", title: "Not Getting Results from Your Marketing", description: "You may be running campaigns, posting content, or boosting ads, but the traffic is not turning into leads or sales. We help fix the gaps that stop your marketing from performing.", metric: "Boost ROI", metricValue: "250%", metricLabel: "Average increase", icon: "📈", color: "primary" },
    { id: 2, number: "02", title: "Getting Traffic, But Not Leads", description: "Your website may get visitors, but if they aren't converting, you're missing qualified inquiries, sales, and real business results. We optimize your funnel to turn interest into action.", metric: "Conversion Rate", metricValue: "3.5x", metricLabel: "Higher conversion", icon: "🔄", color: "purple" },
    { id: 3, number: "03", title: "No Clear Digital Strategy", description: "Trying SEO, social media, paid ads, or content without a plan leads to wasted effort and slow progress. We create data-driven, goal-oriented strategies that guide your long-term growth.", metric: "Strategic Clarity", metricValue: "100%", metricLabel: "Clear roadmap", icon: "🎯", color: "orange" },
    { id: 4, number: "04", title: "Low Visibility in AI-Powered Search", description: "AI platforms are reshaping how customers discover brands. If your business is not optimised for AI-driven search & LLM visibility, you risk being overlooked. We ensure your brand stays visible.", metric: "AI-Ready Brand", metricValue: "24/7", metricLabel: "AI visibility", icon: "🤖", color: "teal" },
  ];

  const stats = [
    { value: "250%", label: "Average ROI Boost", icon: "🚀" },
    { value: "3.5x", label: "Conversion Increase", icon: "📊" },
    { value: "100%", label: "Strategy Clarity", icon: "✅" },
    { value: "24/7", label: "AI Visibility", icon: "🌐" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add(styles.visible); }); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
    statRefs.current.forEach((stat) => { if (stat) observer.observe(stat); });
    return () => observer.disconnect();
  }, []);

  const getColorClass = (color) => {
    const map = { primary: styles.primary, purple: styles.purple, orange: styles.orange, teal: styles.teal };
    return map[color] || styles.primary;
  };

  return (
    <section className={styles.wrapperWorkProcessSection} ref={sectionRef}>
      <div className={styles.wrapperBackgroundPattern}>
        <div className={styles.wrapperPatternCircle}></div>
        <div className={styles.wrapperPatternDots}></div>
      </div>
      <div className={styles.wrapperContainer}>
        <div className={styles.wrapperSectionHeader}>
          <span className={styles.wrapperSectionSubtitle}>Our Work Process</span>
          <h2 className={styles.wrapperSectionTitle}>From <span className={styles.wrapperHighlight}>Challenges</span> to Solutions</h2>
          <p className={styles.wrapperSectionDescription}>We identify your marketing gaps and transform them into measurable results through our proven 4-step process.</p>
        </div>
        <div className={styles.wrapperProcessGrid}>
          {processSteps.map((step, index) => (
            <div key={step.id} className={`${styles.wrapperProcessCard} ${getColorClass(step.color)}`} ref={(el) => (cardsRef.current[index] = el)} style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className={styles.wrapperCardHeader}>
                <span className={styles.wrapperCardNumber}>{step.number}</span>
                <span className={styles.wrapperCardIcon}>{step.icon}</span>
              </div>
              <h3 className={styles.wrapperCardTitle}>{step.title}</h3>
              <p className={styles.wrapperCardDescription}>{step.description}</p>
              <div className={styles.wrapperMetricContainer}>
                <div className={styles.wrapperMetricBadge}>
                  <span className={styles.wrapperMetricValue}>{step.metricValue}</span>
                  <span className={styles.wrapperMetricLabel}>{step.metric}</span>
                </div>
                <span className={styles.wrapperMetricSubtext}>{step.metricLabel}</span>
              </div>
              <div className={styles.wrapperCardLine}></div>
            </div>
          ))}
        </div>
        <div className={styles.wrapperStatsContainer}>
          <h3 className={styles.wrapperStatsTitle}>Proven Results That Matter</h3>
          <div className={styles.wrapperStatsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.wrapperStatCard} ref={(el) => (statRefs.current[index] = el)} style={{ transitionDelay: `${index * 0.1 + 0.6}s` }}>
                <span className={styles.wrapperStatIcon}>{stat.icon}</span>
                <div className={styles.wrapperStatContent}>
                  <span className={styles.wrapperStatValue}>{stat.value}</span>
                  <span className={styles.wrapperStatLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.wrapperCtaBanner}>
          <div className={styles.wrapperCtaContent}>
            <h4 className={styles.wrapperCtaTitle}>Ready to Transform Your Marketing Results?</h4>
            <p className={styles.wrapperCtaText}>Let's identify your gaps and create a custom strategy that delivers real ROI.</p>
            <button className={styles.wrapperCtaButton}>
              Start Your Journey
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
