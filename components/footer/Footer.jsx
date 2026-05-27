"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const footerRef = useRef(null);
  const columnsRef = useRef([]);

  const footerLinks = {
    services: [
      { name: "Social Media Marketing", url: "/social-media-marketing" },
      { name: "PPC Management", url: "/ppc" },
      { name: "Paid Advertising", url: "/paid-advertising" },
      { name: "Web Development", url: "/web-development" },
    ],
    company: [
      { name: "About Us", url: "/about" },
      { name: "Contact Us", url: "/contact-us" },
    ],
    resources: [
      { name: "Blog", url: "/blogs" },
      { name: "Case Studies", url: "#" },
      { name: "E-books & Guides", url: "#" },
      { name: "Webinars", url: "#" },
      { name: "Tools & Templates", url: "#" },
      { name: "Help Center", url: "#" },
      { name: "API Documentation", url: "#" },
    ],
    legal: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms of Service", url: "/term-and-condition" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: "/facebook.png", url: "#", color: "#4267b2" },
    {
      name: "Instagram",
      icon: "/instagram.png",
      url: "https://www.instagram.com/click.grows",
      color: "#e4405f",
    },
  ];

  const contactInfo = {
    email: "clickgrows1@gmail.com",
    phone: "+91 7065887777",
    address:
      "Plot B-24 U G/F Kh No105/7 Gali No 6 , Raja Puri Uttam Nagar Near Pathak Clinic New Delhi -110059",
    hours: "Mon - Fri: 9:00 AM - 9:00 PM IST",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    columnsRef.current.forEach((column) => {
      if (column) observer.observe(column);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className={styles.wrapperFooter} ref={footerRef}>
      {/* Main Footer */}
      <div className={styles.wrapperFooterMain}>
        <div className={styles.wrapperFooterContainer}>
          {/* Brand Column */}
          <div
            className={styles.wrapperFooterColumn}
            ref={(el) => (columnsRef.current[0] = el)}
          >
            <div className={styles.wrapperBrandContent}>
              <div className={styles.wrapperLogo}>
                <span className={styles.wrapperLogoIcon}>
                  <img src="/logo.png" alt="ClickGrows Logo" />
                </span>
                <span className={styles.wrapperLogoText}>ClickGrows</span>
              </div>
              <p className={styles.wrapperBrandDescription}>
                Transforming businesses through innovative digital marketing strategies that
                drive growth, engagement, and measurable results.
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div
            className={styles.wrapperFooterColumn}
            ref={(el) => (columnsRef.current[1] = el)}
          >
            <h3 className={styles.wrapperColumnTitle}>Services</h3>
            <ul className={styles.wrapperLinkList}>
              {footerLinks.services.map((link, index) => (
                <li key={index} className={styles.wrapperLinkItem}>
                  <a href={link.url} className={styles.wrapperLink}>
                    <span className={styles.wrapperLinkDot}></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div
            className={styles.wrapperFooterColumn}
            ref={(el) => (columnsRef.current[2] = el)}
          >
            <h3 className={styles.wrapperColumnTitle}>Company</h3>
            <ul className={styles.wrapperLinkList}>
              {footerLinks.company.map((link, index) => (
                <li key={index} className={styles.wrapperLinkItem}>
                  <a href={link.url} className={styles.wrapperLink}>
                    <span className={styles.wrapperLinkDot}></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div
            className={styles.wrapperFooterColumn}
            ref={(el) => (columnsRef.current[3] = el)}
          >
            <h3 className={`${styles.wrapperColumnTitle} ${styles.wrapperSecondTitle}`}>
              Legal
            </h3>
            <ul className={styles.wrapperLinkList}>
              {footerLinks.legal.map((link, index) => (
                <li key={index} className={styles.wrapperLinkItem}>
                  <a href={link.url} className={styles.wrapperLink}>
                    <span className={styles.wrapperLinkDot}></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className={styles.wrapperContactBar}>
        <div className={styles.wrapperContactContainer}>
          <div className={styles.wrapperContactInfo}>
            <div className={styles.wrapperContactItem}>
              <span className={styles.wrapperContactIcon}>📧</span>
              <a href={`mailto:${contactInfo.email}`} className={styles.wrapperContactLink}>
                {contactInfo.email}
              </a>
            </div>
            <div className={styles.wrapperContactItem}>
              <span className={styles.wrapperContactIcon}>📞</span>
              <a
                href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                className={styles.wrapperContactLink}
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className={styles.wrapperContactItem}>
              <span className={styles.wrapperContactIcon}>📍</span>
              <span className={styles.wrapperContactText}>{contactInfo.address}</span>
            </div>
            <div className={styles.wrapperContactItem}>
              <span className={styles.wrapperContactIcon}>🕒</span>
              <span className={styles.wrapperContactText}>{contactInfo.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.wrapperFooterBottom}>
        <div className={styles.wrapperBottomContainer}>
          <div className={styles.wrapperBottomContent}>
            <div className={styles.wrapperCopyright}>
              <p>© {new Date().getFullYear()} DigiMark. All rights reserved.</p>
              <p className={styles.wrapperMadeWith}>
                Made with <span className={styles.wrapperHeart}>❤️</span> for ClickGrows.
              </p>
            </div>

            {/* Social Links */}
            <div className={styles.wrapperSocialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={styles.wrapperSocialLink}
                  style={{ "--social-color": social.color }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span className={styles.wrapperSocialIcon}>
                    <img src={social.icon} alt={social.name} />
                  </span>
                  <span className={styles.wrapperSocialName}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        className={styles.wrapperBackToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
