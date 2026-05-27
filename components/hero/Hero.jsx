"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import style from "./Hero.module.scss";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const statsData = [
    {
      icon: "📢",
      title: "PAID MEDIA PERFORMANCE",
      range: "3X to 7X",
      description: "Higher ROI from optimized ad campaigns",
      gradient: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
    },
    {
      icon: "🎯",
      title: "QUALIFIED LEAD GENERATION",
      range: "2X to 6X",
      description: "More high-intent leads from targeted ads",
      gradient: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
    },
    {
      icon: "📱",
      title: "SOCIAL MEDIA GROWTH",
      range: "4X to 9X",
      description: "Stronger engagement and audience growth",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
    },
    {
      icon: "🎨",
      title: "BRAND VISIBILITY",
      range: "200%+",
      description: "Build a powerful and recognizable brand",
      gradient: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
    },
  ];

  return (
    <section
      className={`${style.hero} ${isVisible ? style.hero__visible : ""}`}
      ref={heroRef}
    >
      <div className={style.container}>
        <div className={style.hero__content}>
          {/* Left Badge */}
          <div className={`${style.hero__badge} ${style.hero__badge__left}`}>
            <span className={style.hero__badge_icon}>📈</span>
            <span className={style.hero__badge_text}>Revenue Growth</span>
          </div>

          {/* Main Content */}
          <div className={style.hero__main}>
            <div className={style.hero__tag}>DIGITAL GROWTH AGENCY</div>

            <h1 className={style.hero__title}>
              <span className={style.hero__title_highlight}>Paid Media</span>
              <br />
              <span className={style.hero__title_subtitle}>Social Media Marketing</span>
              <br />
              <span className={style.hero__title_main}>
                Scaling Brands with Strategic Advertising
              </span>
            </h1>

            <Link href="/contact-us">
              <button className={style.hero__cta}>
                <span className={style.hero__cta_icon}>→</span>
                Connect with Our Experts
              </button>
            </Link>

            <div className={style.hero__rating}>
              <p className={style.hero__rating_text}>
                Trusted by 500+ Brands for Marketing & Growth
              </p>
              <div className={style.hero__stars}>
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={style.hero__star}>
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Badge */}
          <div className={`${style.hero__badge} ${style.hero__badge__right}`}>
            <span className={style.hero__badge_icon}>🚀</span>
            <span className={style.hero__badge_text}>Performance Focused</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className={style.hero__stats}>
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={style.hero__stat_card}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div
                className={style.hero__stat_icon}
                style={{ background: stat.gradient }}
              >
                {stat.icon}
              </div>
              <div className={style.hero__stat_content}>
                <p className={style.hero__stat_title}>{stat.title}</p>
                <h3 className={style.hero__stat_range}>{stat.range}</h3>
                <p className={style.hero__stat_description}>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className={style.hero__bg_shapes}>
        <div className={`${style.hero__shape} ${style.hero__shape__1}`}></div>
        <div className={`${style.hero__shape} ${style.hero__shape__2}`}></div>
        <div className={`${style.hero__shape} ${style.hero__shape__3}`}></div>
      </div>
    </section>
  );
};

export default Hero;
