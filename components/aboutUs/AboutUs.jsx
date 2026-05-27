"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef([]);
  const [activeTab, setActiveTab] = useState('story');

  const founderStory = {
    name: 'Nikhilesh Mishra',
    role: 'Founder & Performance Marketer',
    story: `Not every journey is planned.

I began with a Master’s degree in Political Science — studying power, systems, and how influence shapes the world. At that time, I had no idea my career would revolve around influence in a completely different way.

In 2022, a simple conversation with a friend introduced me to digital marketing. What seemed like a small suggestion quietly changed the direction of my life.

I stepped into the world of algorithms, strategy, psychology, and performance. I completed a six-month course, followed by an internship where I experienced the real battlefield — campaigns that failed, budgets that drained, and experiments that didn’t work.

But I stayed.

I learned.

I improved.

Over the next four years, I worked with multiple businesses — understanding their struggles, their ambitions, and their desire to grow. I wasn’t just running ads; I was helping founders build sustainable growth through paid media, social media marketing, and strategic branding.

Every campaign taught me something.
Every loss made me sharper.
Every win made me grateful.

Today, I don’t see digital marketing as just clicks, impressions, or ROAS.

I see it as leverage.
I see it as growth.
I see it as the bridge between ambition and achievement.

From Political Science to Performance Marketing — my journey wasn’t linear, but it was intentional.

And this is just the beginning.`,

    quote: "Marketing is not just about running ads — it's about helping businesses grow with clarity and confidence.",
    image: './about.png',
    signature: 'Nikhilesh Mishra'
  };
  const missionVision = {
    mission: {
      title: 'Our Mission',
      description: 'To help brands grow faster through performance-driven paid media, strategic social media marketing, and powerful brand positioning.',
      icon: '🎯',
      points: [
        'Deliver measurable ROI from paid media campaigns',
        'Build strong brand presence across digital platforms',
        'Create long-term partnerships with growing businesses'
      ]
    },
    vision: {
      title: 'Our Vision',
      description: 'To become a trusted growth partner for modern brands by delivering innovative marketing strategies that combine creativity, data, and performance.',
      icon: '🚀',
      points: [
        'Scale brands through performance marketing',
        'Set new benchmarks in digital growth strategies',
        'Build impactful and recognizable brands'
      ]
    }
  };

  const excellencePillars = [
    {
      id: 1,
      title: 'Paid Media Expertise',
      description: 'We create high-performing advertising campaigns that maximize ROI across platforms like Meta and Google.',
      icon: '📢',
      color: 'primary',
      stats: '1000+',
      statLabel: 'Ad campaigns managed'
    },
    {
      id: 2,
      title: 'Social Media Growth',
      description: 'Our strategies help brands build strong engagement and loyal audiences across social platforms.',
      icon: '📱',
      color: 'purple',
      stats: '5M+',
      statLabel: 'Audience reached'
    },
    {
      id: 3,
      title: 'Creative Branding',
      description: 'We craft compelling brand identities that help businesses stand out in competitive markets.',
      icon: '🎨',
      color: 'orange',
      stats: '300+',
      statLabel: 'Brands scaled'
    },
    {
      id: 4,
      title: 'Performance Focus',
      description: 'Every strategy we create is focused on measurable growth, lead generation, and revenue impact.',
      icon: '📈',
      color: 'teal',
      stats: '95%',
      statLabel: 'Client satisfaction'
    }
  ];

  const timeline = [
    { year: '2022', event: 'Discovered digital marketing and began professional training', icon: '🚀' },
    { year: '2023', event: 'Completed intensive digital marketing course and internship', icon: '📚' },
    { year: '2024', event: 'Worked with multiple brands managing paid media and growth campaigns', icon: '📈' },
    { year: '2025', event: 'Focused on scaling businesses through paid ads, social media, and branding', icon: '🌍' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    contentRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getColorClass = (color) => {
    switch (color) {
      case 'primary': return styles.primary;
      case 'purple': return styles.purple;
      case 'orange': return styles.orange;
      case 'teal': return styles.teal;
      default: return styles.primary;
    }
  };

  return (
    <section className={styles.wrapperAboutSection} ref={sectionRef}>
      <div className={styles.wrapperBackgroundPattern}>
        <div className={styles.wrapperPatternGrid}></div>
        <div className={styles.wrapperPatternGradient}></div>
      </div>

      <div className={styles.wrapperContainer}>
        <div className={styles.wrapperSectionHeader}>
          <span className={styles.wrapperSectionSubtitle}>About Us</span>
          <h2 className={styles.wrapperSectionTitle}>
            Building Brands with <span className={styles.wrapperHighlight}>Strategic Marketing</span>
          </h2>
          <p className={styles.wrapperSectionDescription}>
            We help businesses grow through powerful paid media campaigns,
            social media marketing, and strong brand positioning.
          </p>
        </div>

        {/* Founder Story */}
        <div
          className={styles.wrapperFounderCard}
          ref={(el) => (contentRef.current[0] = el)}
        >
          <div className={styles.wrapperFounderContent}>
            <div className={styles.wrapperFounderImage}>
              <img src={founderStory.image} alt={founderStory.name} />
            </div>
            <div className={styles.wrapperFounderText}>
              <h3 className={styles.wrapperFounderName}>{founderStory.name}</h3>
              <p className={styles.wrapperFounderRole}>{founderStory.role}</p>
              <p className={styles.wrapperFounderStory}>{founderStory.story}</p>
              <blockquote className={styles.wrapperFounderQuote}>
                "{founderStory.quote}"
              </blockquote>
              <div className={styles.wrapperFounderSignature}>
                <span className={styles.wrapperSignatureLine}></span>
                <span className={styles.wrapperSignatureText}>{founderStory.signature}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Tabs */}
        <div
          className={styles.wrapperMissionVision}
          ref={(el) => (contentRef.current[1] = el)}
        >
          <div className={styles.wrapperTabsHeader}>
            <button
              className={`${styles.wrapperTabButton} ${activeTab === 'story' ? styles.active : ''}`}
              onClick={() => setActiveTab('story')}
            >
              <span className={styles.wrapperTabIcon}>📖</span>
              Our Story
            </button>
            <button
              className={`${styles.wrapperTabButton} ${activeTab === 'mission' ? styles.active : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              <span className={styles.wrapperTabIcon}>🎯</span>
              Mission & Vision
            </button>
          </div>

          <div className={styles.wrapperTabsContent}>
            {activeTab === 'story' ? (
              <div className={styles.wrapperTimelineContainer}>
                <h3 className={styles.wrapperTimelineTitle}>Our Journey</h3>
                <div className={styles.wrapperTimeline}>
                  {timeline.map((item, index) => (
                    <div key={index} className={styles.wrapperTimelineItem}>
                      <div className={styles.wrapperTimelineIcon}>{item.icon}</div>
                      <div className={styles.wrapperTimelineContent}>
                        <span className={styles.wrapperTimelineYear}>{item.year}</span>
                        <p className={styles.wrapperTimelineEvent}>{item.event}</p>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className={styles.wrapperTimelineLine}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.wrapperMissionVisionGrid}>
                <div className={styles.wrapperMissionCard}>
                  <div className={styles.wrapperMissionIcon}>{missionVision.mission.icon}</div>
                  <h4 className={styles.wrapperMissionTitle}>{missionVision.mission.title}</h4>
                  <p className={styles.wrapperMissionDescription}>{missionVision.mission.description}</p>
                  <ul className={styles.wrapperMissionPoints}>
                    {missionVision.mission.points.map((point, index) => (
                      <li key={index} className={styles.wrapperMissionPoint}>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.wrapperVisionCard}>
                  <div className={styles.wrapperVisionIcon}>{missionVision.vision.icon}</div>
                  <h4 className={styles.wrapperVisionTitle}>{missionVision.vision.title}</h4>
                  <p className={styles.wrapperVisionDescription}>{missionVision.vision.description}</p>
                  <ul className={styles.wrapperVisionPoints}>
                    {missionVision.vision.points.map((point, index) => (
                      <li key={index} className={styles.wrapperVisionPoint}>
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Our Key to Excellence */}
        <div
          className={styles.wrapperExcellenceSection}
          ref={(el) => (contentRef.current[2] = el)}
        >
          <h3 className={styles.wrapperExcellenceTitle}>Our Key to Excellence</h3>
          <p className={styles.wrapperExcellenceSubtitle}>
            The pillars that make us different and drive exceptional results
          </p>

          <div className={styles.wrapperExcellenceGrid}>
            {excellencePillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`${styles.wrapperExcellenceCard} ${getColorClass(pillar.color)}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperExcellenceIcon}>{pillar.icon}</div>
                <h4 className={styles.wrapperExcellenceCardTitle}>{pillar.title}</h4>
                <p className={styles.wrapperExcellenceDescription}>{pillar.description}</p>
                <div className={styles.wrapperExcellenceStat}>
                  <span className={styles.wrapperStatNumber}>{pillar.stats}</span>
                  <span className={styles.wrapperStatLabel}>{pillar.statLabel}</span>
                </div>
                <div className={styles.wrapperExcellenceLine}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        {/* <div
          className={styles.wrapperStatsBanner}
          ref={(el) => (contentRef.current[3] = el)}
        >
          <div className={styles.wrapperStatsGrid}>
            <div className={styles.wrapperStatItem}>
              <span className={styles.wrapperStatBig}>15+</span>
              <span className={styles.wrapperStatDesc}>Countries Served</span>
            </div>
            <div className={styles.wrapperStatItem}>
              <span className={styles.wrapperStatBig}>500+</span>
              <span className={styles.wrapperStatDesc}>Projects Completed</span>
            </div>
            <div className={styles.wrapperStatItem}>
              <span className={styles.wrapperStatBig}>98%</span>
              <span className={styles.wrapperStatDesc}>Client Satisfaction</span>
            </div>
            <div className={styles.wrapperStatItem}>
              <span className={styles.wrapperStatBig}>50+</span>
              <span className={styles.wrapperStatDesc}>Team Experts</span>
            </div>
          </div>
        </div> */}

        
      </div>
    </section>
  );
};

export default AboutUs;