"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import style from "./Navbar.module.scss";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { isDarkMode, toggleTheme } = useTheme();

  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  useEffect(() => {
    const handleClickOutsideMobile = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutsideMobile);
    }
    return () => document.removeEventListener("mousedown", handleClickOutsideMobile);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const serviceLinks = [
    { to: "/social-media-marketing", label: "Social Media Marketing" },
    { to: "/ppc", label: "PPC Management" },
    { to: "/paid-advertising", label: "Paid Advertising" },
    { to: "/web-development", label: "Web Development" },
  ];

  const mobileLinks = [
    { to: "/social-media-marketing", label: "Social Media Marketing" },
    { to: "/ppc", label: "PPC Management" },
    { to: "/paid-advertising", label: "Paid Advertising" },
    { to: "/web-development", label: "Web Development" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav
      className={`${style.navbar} ${isScrolled ? style.navbar__scrolled : ""} ${
        isDarkMode ? style.navbar__dark : style.navbar__light
      }`}
    >
      <div className={style.container}>
        <div className={style.navbar__wrapper} ref={navbarRef}>
          {/* Logo */}
          <div className={style.navbar__logo}>
            <Link href="/" className={style.navbar__logo_link}>
              <img
                src="/logo.png"
                alt="ClickGrows - Your digital partner"
                className={style.navbar__logo_image}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className={style.navbar__menu}>
            <li className={`${style.navbar__item} ${style.navbar__item__dropdown}`}>
              <button
                className={style.navbar__link}
                onClick={() => handleDropdownToggle("services")}
              >
                Services
                <span className={style.navbar__arrow}>
                  <img src="/down-arrow.svg" alt="" className={style.navbar__arrow_image} />
                </span>
              </button>
              {activeDropdown === "services" && (
                <div className={style.navbar__dropdown}>
                  {serviceLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.to}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li className={style.navbar__item}>
              <Link href="/about" className={style.navbar__link}>
                About
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <div className={style.navbar__actions}>
            <div className={style.navbar__cta}>
              <Link href="/contact-us" className={style.navbar__cta_btn}>
                <span className={style.navbar__cta_icon}>→</span>
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            ref={toggleButtonRef}
            className={`${style.navbar__toggle} ${
              isMobileMenuOpen ? style.navbar__toggle__active : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={style.navbar__mobile_menu} ref={mobileMenuRef}>
            <ul className={style.navbar__mobile_list}>
              {mobileLinks.map((link, index) => (
                <li key={index} className={style.navbar__mobile_item}>
                  <Link href={link.to} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className={style.navbar__mobile_item}>
                <Link
                  href="/contact-us"
                  className={style.navbar__mobile_cta}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
