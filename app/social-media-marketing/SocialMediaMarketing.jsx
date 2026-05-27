"use client";
import React, { useEffect, useRef } from 'react';
import styles from "./SocialMediaMarketing.module.scss";
import Link from "next/link";

const OrganicSocialMediaPage = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef([]);

  // Service Overview
  const serviceOverview = {
    title: 'Organic Social Media Marketing',
    subtitle: 'Build Authentic Connections That Drive Long-Term Growth',
    description: 'In today\'s digital landscape, organic social media is the cornerstone of authentic brand building. We help you create meaningful conversations, foster loyal communities, and establish your brand as an industry authority—without relying on paid advertising.',
    image: '📱',
    stats: [
      { value: '3x', label: 'Higher Engagement' },
      { value: '80%', label: 'Prefer Authentic Brands' },
      { value: '54%', label: 'Use Social to Research' },
      { value: '71%', label: 'More Likely to Recommend' }
    ]
  };

  // Key Benefits
  const benefits = [
    {
      id: 1,
      title: 'Authentic Brand Building',
      description: 'Create genuine connections with your audience through consistent, value-driven content that reflects your brand\'s personality and values.',
      icon: '💝',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Community Engagement',
      description: 'Foster a loyal community of brand advocates who actively engage with your content and promote your brand organically.',
      icon: '👥',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Cost-Effective Growth',
      description: 'Build sustainable long-term growth without the ongoing costs of paid advertising, maximizing your marketing ROI.',
      icon: '📈',
      color: 'orange'
    },
    {
      id: 4,
      title: 'Enhanced Credibility',
      description: 'Establish thought leadership and industry authority through valuable content that positions your brand as a trusted resource.',
      icon: '🏆',
      color: 'teal'
    }
  ];

  // Platform Strategy
  const platforms = [
    {
      name: 'Instagram',
      icon: '📸',
      audience: '1.4B+ monthly active users',
      bestFor: 'Visual storytelling, lifestyle brands, B2C',
      strategy: 'High-quality imagery, Reels, Stories, carousel posts',
      color: 'instagram'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      audience: '900M+ professionals',
      bestFor: 'B2B, thought leadership, professional services',
      strategy: 'Industry insights, company updates, long-form content',
      color: 'linkedin'
    },
    {
      name: 'Facebook',
      icon: '👤',
      audience: '2.9B+ monthly active users',
      bestFor: 'Community building, local businesses, all demographics',
      strategy: 'Group engagement, live videos, event promotion',
      color: 'facebook'
    },
    {
      name: 'Twitter/X',
      icon: '🐦',
      audience: '450M+ monthly active users',
      bestFor: 'Real-time updates, customer service, news',
      strategy: 'Conversation starters, threads, timely responses',
      color: 'twitter'
    },
    {
      name: 'Pinterest',
      icon: '📌',
      audience: '450M+ monthly active users',
      bestFor: 'Visual discovery, DIY, fashion, food, home decor',
      strategy: 'Rich pins, idea pins, SEO-optimized content',
      color: 'pinterest'
    }
  ];

  // Content Types
  const contentTypes = [
    {
      category: 'Educational Content',
      items: ['How-to guides', 'Industry tips', 'Tutorials', 'FAQs', 'Infographics'],
      icon: '📚',
      color: 'primary'
    },
    {
      category: 'Engagement Content',
      items: ['Polls & surveys', 'Questions', 'Quizzes', 'Contests', 'User-generated content'],
      icon: '💬',
      color: 'purple'
    },
    {
      category: 'Behind-the-Scenes',
      items: ['Team spotlights', 'Office culture', 'Product creation', 'Events', 'Day in the life'],
      icon: '🎬',
      color: 'orange'
    },
    {
      category: 'Storytelling',
      items: ['Customer success stories', 'Brand history', 'Case studies', 'Testimonials', 'Milestones'],
      icon: '📖',
      color: 'teal'
    }
  ];

  // Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Audit & Strategy',
      description: 'We analyze your current social presence, competitors, and audience to create a data-driven organic strategy.',
      deliverables: ['Audience analysis', 'Competitor research', 'Content pillars', 'Platform selection']
    },
    {
      step: '02',
      title: 'Content Planning',
      description: 'Our creative team develops a comprehensive content calendar aligned with your brand voice and business goals.',
      deliverables: ['Content calendar', 'Theme development', 'Visual guidelines', 'Hashtag strategy']
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'We produce high-quality, platform-optimized content that resonates with your target audience.',
      deliverables: ['Custom graphics', 'Video content', 'Copywriting', 'Story templates']
    },
    {
      step: '04',
      title: 'Community Management',
      description: 'We actively engage with your audience, respond to comments, and foster meaningful conversations.',
      deliverables: ['Daily engagement', 'Comment responses', 'Community building', 'Crisis management']
    },
    {
      step: '05',
      title: 'Analytics & Optimization',
      description: 'Continuous monitoring and optimization based on performance data to improve results.',
      deliverables: ['Performance reports', 'Insights analysis', 'Strategy refinement', 'ROI tracking']
    }
  ];

  // Best Practices
  const bestPractices = [
    {
      category: 'Content Quality',
      tips: [
        'Post consistently (3-5x per week minimum)',
        'Use high-quality visuals and video content',
        'Optimize for each platform\'s specifications',
        'Create platform-native content, don\'t cross-post identical content'
      ]
    },
    {
      category: 'Engagement Strategy',
      tips: [
        'Respond to comments within 24 hours',
        'Engage with other accounts in your niche',
        'Use interactive features (polls, questions, quizzes)',
        'Share and celebrate user-generated content'
      ]
    },
    {
      category: 'Growth Tactics',
      tips: [
        'Use relevant hashtags (5-10 per post)',
        'Collaborate with complementary brands',
        'Optimize posting times for your audience',
        'Leverage trending topics and sounds'
      ]
    },
    {
      category: 'Measurement',
      tips: [
        'Track engagement rate, not just followers',
        'Monitor sentiment and brand mentions',
        'Analyze top-performing content patterns',
        'Set and track meaningful KPIs'
      ]
    }
  ];

  // Success Metrics
  const metrics = [
    { metric: 'Engagement Rate', target: '3-6%', description: 'Likes, comments, shares per post' },
    { metric: 'Follower Growth', target: '5-10% monthly', description: 'Organic audience increase' },
    { metric: 'Reach', target: '20-30% of followers', description: 'Unique accounts seeing content' },
    { metric: 'Click-Through Rate', target: '1-2%', description: 'Traffic to website/landing page' },
    { metric: 'Amplification Rate', target: '2-5%', description: 'Shares per post / total followers' },
    { metric: 'Sentiment Score', target: '80%+ positive', description: 'Brand mentions sentiment analysis' }
  ];

  // FAQ
  const faqs = [
    {
      question: 'How long does it take to see results from organic social media?',
      answer: 'Organic social media is a long-term strategy. While you may see initial engagement within weeks, significant results typically take 3-6 months of consistent, quality content and community engagement.'
    },
    {
      question: 'How many platforms should we be active on?',
      answer: 'We recommend focusing on 2-3 platforms where your target audience is most active, rather than spreading resources too thin across multiple platforms. Quality over quantity is key.'
    },
    {
      question: 'Do I still need paid advertising if I have organic social?',
      answer: 'Organic and paid social work best together. While organic builds authentic relationships, paid can amplify your best content and reach new audiences. We recommend a balanced approach.'
    },
    {
      question: 'What type of content performs best organically?',
      answer: 'Video content, especially short-form (Reels, TikToks), consistently outperforms other formats. Educational content, behind-the-scenes, and user-generated content also drive high engagement.'
    }
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
      case 'instagram': return styles.instagram;
      case 'linkedin': return styles.linkedin;
      case 'tiktok': return styles.tiktok;
      case 'facebook': return styles.facebook;
      case 'twitter': return styles.twitter;
      case 'pinterest': return styles.pinterest;
      default: return styles.primary;
    }
  };

  return (
    <div className={styles.wrapperOrganicSocialPage} ref={sectionRef}>
      {/* Hero Section */}
      <section className={styles.wrapperHeroSection}>
        <div className={styles.wrapperBackgroundPattern}>
          <div className={styles.wrapperPatternGradient}></div>
          <div className={styles.wrapperPatternDots}></div>
        </div>

        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperHeroContent}>
            <div className={styles.wrapperHeroText}>
              {/* <span className={styles.wrapperHeroBadge}>Organic Social Media</span> */}
              <h1 className={styles.wrapperHeroTitle}>
                {serviceOverview.title}
              </h1>
              <p className={styles.wrapperHeroSubtitle}>{serviceOverview.subtitle}</p>
              <p className={styles.wrapperHeroDescription}>{serviceOverview.description}</p>
              
              <div className={styles.wrapperHeroStats}>
                {serviceOverview.stats.map((stat, index) => (
                  <div key={index} className={styles.wrapperHeroStat}>
                    <span className={styles.wrapperStatValue}>{stat.value}</span>
                    <span className={styles.wrapperStatLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.wrapperHeroImage}>
              <div className={styles.wrapperImageCircle}>
                <span className={styles.wrapperImageEmoji}>{serviceOverview.image}</span>
              </div>
              <div className={styles.wrapperFloatingIcons}>
                <span className={styles.wrapperFloatingIcon}>❤️</span>
                <span className={styles.wrapperFloatingIcon}>💬</span>
                <span className={styles.wrapperFloatingIcon}>🔄</span>
                <span className={styles.wrapperFloatingIcon}>📊</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.wrapperBenefitsSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            {/* <span className={styles.wrapperSectionSubtitle}>Why Go Organic?</span> */}
            <h2 className={styles.wrapperSectionTitle}>Key <span className={styles.wrapperHighlight}>Benefits</span></h2>
            <p className={styles.wrapperSectionDescription}>
              Discover why organic social media is essential for building a sustainable, authentic brand presence.
            </p>
          </div>

          <div className={styles.wrapperBenefitsGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`${styles.wrapperBenefitCard} ${getColorClass(benefit.color)}`}
                ref={(el) => (contentRef.current[index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperBenefitIcon}>{benefit.icon}</div>
                <h3 className={styles.wrapperBenefitTitle}>{benefit.title}</h3>
                <p className={styles.wrapperBenefitDescription}>{benefit.description}</p>
                <div className={styles.wrapperBenefitLine}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      {/* <section className={styles.wrapperPlatformsSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <span className={styles.wrapperSectionSubtitle}>Platforms We Master</span>
            <h2 className={styles.wrapperSectionTitle}>Multi-Platform <span className={styles.wrapperHighlight}>Strategy</span></h2>
            <p className={styles.wrapperSectionDescription}>
              We tailor our approach to each platform's unique characteristics and audience.
            </p>
          </div>

          <div className={styles.wrapperPlatformsGrid}>
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`${styles.wrapperPlatformCard} ${getColorClass(platform.color)}`}
                ref={(el) => (contentRef.current[benefits.length + index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperPlatformHeader}>
                  <span className={styles.wrapperPlatformIcon}>{platform.icon}</span>
                  <h3 className={styles.wrapperPlatformName}>{platform.name}</h3>
                </div>
                <div className={styles.wrapperPlatformContent}>
                  <p className={styles.wrapperPlatformAudience}>
                    <strong>Audience:</strong> {platform.audience}
                  </p>
                  <p className={styles.wrapperPlatformBest}>
                    <strong>Best for:</strong> {platform.bestFor}
                  </p>
                  <p className={styles.wrapperPlatformStrategy}>
                    <strong>Strategy:</strong> {platform.strategy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Content Types Section */}
      <section className={styles.wrapperContentSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            {/* <span className={styles.wrapperSectionSubtitle}>Content That Connects</span> */}
            <h2 className={styles.wrapperSectionTitle}>Content <span className={styles.wrapperHighlight}>Categories</span></h2>
            <p className={styles.wrapperSectionDescription}>
              Diverse content types that keep your audience engaged and coming back for more.
            </p>
          </div>

          <div className={styles.wrapperContentGrid}>
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className={`${styles.wrapperContentCard} ${getColorClass(type.color)}`}
                ref={(el) => (contentRef.current[benefits.length + platforms.length + index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperContentHeader}>
                  <span className={styles.wrapperContentIcon}>{type.icon}</span>
                  <h3 className={styles.wrapperContentCategory}>{type.category}</h3>
                </div>
                <ul className={styles.wrapperContentList}>
                  {type.items.map((item, idx) => (
                    <li key={idx} className={styles.wrapperContentItem}>
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.wrapperProcessSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            {/* <span className={styles.wrapperSectionSubtitle}>How We Work</span> */}
            <h2 className={styles.wrapperSectionTitle}>Our <span className={styles.wrapperHighlight}>Process</span></h2>
            <p className={styles.wrapperSectionDescription}>
              A systematic approach to building and growing your organic social presence.
            </p>
          </div>

          <div className={styles.wrapperProcessTimeline}>
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={styles.wrapperProcessStep}
                ref={(el) => (contentRef.current[benefits.length + platforms.length + contentTypes.length + index] = el)}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.wrapperStepNumber}>{step.step}</div>
                <div className={styles.wrapperStepContent}>
                  <h3 className={styles.wrapperStepTitle}>{step.title}</h3>
                  <p className={styles.wrapperStepDescription}>{step.description}</p>
                  <div className={styles.wrapperStepDeliverables}>
                    {step.deliverables.map((item, idx) => (
                      <span key={idx} className={styles.wrapperDeliverableTag}>{item}</span>
                    ))}
                  </div>
                </div>
                {index < processSteps.length - 1 && <div className={styles.wrapperStepLine}></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className={styles.wrapperPracticesSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            {/* <span className={styles.wrapperSectionSubtitle}>Expert Insights</span> */}
            <h2 className={styles.wrapperSectionTitle}>Best <span className={styles.wrapperHighlight}>Practices</span></h2>
            <p className={styles.wrapperSectionDescription}>
              Proven strategies and tactics for organic social media success.
            </p>
          </div>

          <div className={styles.wrapperPracticesGrid}>
            {bestPractices.map((practice, index) => (
              <div
                key={index}
                className={styles.wrapperPracticeCard}
                ref={(el) => (contentRef.current[benefits.length + platforms.length + contentTypes.length + processSteps.length + index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className={styles.wrapperPracticeCategory}>{practice.category}</h3>
                <ul className={styles.wrapperPracticeList}>
                  {practice.tips.map((tip, idx) => (
                    <li key={idx} className={styles.wrapperPracticeItem}>
                      <span className={styles.wrapperPracticeBullet}>•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className={styles.wrapperMetricsSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            {/* <span className={styles.wrapperSectionSubtitle}>Measuring Success</span> */}
            <h2 className={styles.wrapperSectionTitle}>Key <span className={styles.wrapperHighlight}>Metrics</span></h2>
            <p className={styles.wrapperSectionDescription}>
              The numbers that matter most for organic social media performance.
            </p>
          </div>

          <div className={styles.wrapperMetricsGrid}>
            {metrics.map((item, index) => (
              <div
                key={index}
                className={styles.wrapperMetricCard}
                ref={(el) => (contentRef.current[benefits.length + platforms.length + contentTypes.length + processSteps.length + bestPractices.length + index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperMetricHeader}>
                  <span className={styles.wrapperMetricName}>{item.metric}</span>
                  <span className={styles.wrapperMetricTarget}>{item.target}</span>
                </div>
                <p className={styles.wrapperMetricDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.wrapperFaqSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            {/* <span className={styles.wrapperSectionSubtitle}>Got Questions?</span> */}
            <h2 className={styles.wrapperSectionTitle}>Frequently Asked <span className={styles.wrapperHighlight}>Questions</span></h2>
          </div>

          <div className={styles.wrapperFaqGrid}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={styles.wrapperFaqItem}
                ref={(el) => (contentRef.current[benefits.length + platforms.length + contentTypes.length + processSteps.length + bestPractices.length + metrics.length + index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className={styles.wrapperFaqQuestion}>{faq.question}</h3>
                <p className={styles.wrapperFaqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default OrganicSocialMediaPage;