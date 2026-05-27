"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Services.module.scss";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    { id: 1, title: "Search Engine Optimization", description: "Boost your website visibility and rank higher in search results with our data-driven SEO strategies.", icon: "🔍", color: "success", features: ["Keyword Research", "On-Page SEO", "Link Building"] },
    { id: 2, title: "Social Media Marketing", description: "Engage your audience and build brand loyalty across all major social media platforms.", icon: "📱", color: "purple", features: ["Content Creation", "Community Management", "Paid Advertising"] },
    { id: 3, title: "Content Marketing", description: "Create compelling content that tells your story and converts visitors into customers.", icon: "✍️", color: "orange", features: ["Blog Writing", "Video Content", "Infographics"] },
    { id: 4, title: "Email Marketing", description: "Nurture leads and drive conversions with personalized email campaigns.", icon: "📧", color: "teal", features: ["Newsletter Design", "Automation", "Analytics"] },
    { id: 5, title: "PPC Advertising", description: "Maximize ROI with targeted pay-per-click campaigns across search and social platforms.", icon: "💰", color: "yellow", features: ["Keyword Strategy", "Ad Copy", "Conversion Tracking"] },
    { id: 6, title: "Analytics & Reporting", description: "Make data-driven decisions with comprehensive analytics and actionable insights.", icon: "📊", color: "success", features: ["Custom Dashboards", "Conversion Analysis", "ROI Tracking"] },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    cardsRef.current.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  const getColorClass = (color) => {
    const map = { primary: styles.primary, purple: styles.purple, orange: styles.orange, teal: styles.teal, yellow: styles.yellow, success: styles.success };
    return map[color] || styles.primary;
  };

  return (
    <section className={styles.wrapperServicesSection} ref={sectionRef}>
      <div className={styles.wrapperServicesContainer}>
        <div className={styles.wrapperSectionHeader}>
          <span className={styles.wrapperSectionSubtitle}>Our Services</span>
          <h2 className={styles.wrapperSectionTitle}>Digital Marketing <span className={styles.wrapperHighlight}>Solutions</span></h2>
          <p className={styles.wrapperSectionDescription}>Transform your digital presence with our comprehensive marketing strategies designed to drive growth and engagement.</p>
        </div>

        <div className={styles.wrapperServicesGrid}>
          {services.map((service, index) => (
            <div key={service.id} className={`${styles.wrapperServiceCard} ${getColorClass(service.color)}`} ref={(el) => (cardsRef.current[index] = el)} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className={styles.wrapperCardIcon}><span className={styles.wrapperIconEmoji}>{service.icon}</span></div>
              <h3 className={styles.wrapperCardTitle}>{service.title}</h3>
              <p className={styles.wrapperCardDescription}>{service.description}</p>
              <div className={styles.wrapperCardFeatures}>
                {service.features.map((feature, idx) => (
                  <span key={idx} className={styles.wrapperFeatureItem}>
                    <svg className={styles.wrapperFeatureIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.wrapperCtaContainer}>
          <div className={styles.wrapperCtaContent}>
            <h3 className={styles.wrapperCtaTitle}>Ready to grow your business?</h3>
            <p className={styles.wrapperCtaDescription}>Let's create a customized digital marketing strategy for your brand.</p>
            <Link href="/contact-us">
              <button className={styles.wrapperCtaButton}>
                Get Started Today
                <svg className={styles.wrapperButtonArrow} viewBox="0 0 20 20" fill="#ffffff">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
