"use client";
import React, { useEffect, useRef } from 'react';
import styles from './Ppc.module.scss';
import Link from "next/link";

const PPCAdsPage = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef([]);

  // Page Overview
  const overview = {
    title: 'Pay-Per-Click Advertising',
    subtitle: 'Drive Instant, Measurable Results',
    description: 'Get your brand in front of high-intent customers exactly when they\'re searching for what you offer. Our data-driven PPC campaigns maximize ROI across Google and Meta platforms.',
    stats: [
      { value: '200%+', label: 'Avg. ROI Increase' },
      { value: '50%', label: 'Lower CPA' },
      { value: '24/7', label: 'Campaign Optimization' },
      { value: '100%', label: 'Transparent Reporting' }
    ]
  };

  // Platform Cards
  const platforms = [
    {
      name: 'Google Ads',
      icon: '🔍',
      description: 'Capture high-intent traffic from users actively searching for your products or services.',
      features: ['Search Ads', 'Display Network', 'Shopping Ads', 'YouTube Ads', 'Performance Max'],
      color: 'google',
      stats: '3.5B+ daily searches'
    },
    {
      name: 'Meta Ads',
      icon: '📱',
      description: 'Reach your ideal audience with precision targeting across Facebook and Instagram.',
      features: ['Feed Ads', 'Stories Ads', 'Reels Ads', 'Messenger Ads', 'Retargeting'],
      color: 'meta',
      stats: '2.9B+ monthly users'
    }
  ];

  // Benefits
  const benefits = [
    {
      id: 1,
      title: 'Instant Visibility',
      description: 'Appear at the top of search results immediately—no waiting for organic growth.',
      icon: '⚡',
      color: 'primary'
    },
    {
      id: 2,
      title: 'Precise Targeting',
      description: 'Reach the right audience by demographics, interests, behaviors, and search intent.',
      icon: '🎯',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Full Control',
      description: 'Set your budget, adjust bids, pause underperforming ads, and scale winners in real-time.',
      icon: '🎮',
      color: 'orange'
    },
    {
      id: 4,
      title: 'Measurable ROI',
      description: 'Track every dollar spent with detailed analytics and conversion attribution.',
      icon: '📊',
      color: 'teal'
    }
  ];

  // Google Ads Features
  const googleFeatures = [
    {
      type: 'Search Ads',
      description: 'Text ads that appear when users search for your keywords.',
      icon: '🔤',
      bestFor: 'High-intent traffic, direct response'
    },
    {
      type: 'Display Ads',
      description: 'Visual ads across millions of websites and apps.',
      icon: '🖼️',
      bestFor: 'Brand awareness, retargeting'
    },
    {
      type: 'Shopping Ads',
      description: 'Product listings with images and prices for e-commerce.',
      icon: '🛍️',
      bestFor: 'E-commerce, retail products'
    },
    {
      type: 'YouTube Ads',
      description: 'Video ads before, during, or after YouTube content.',
      icon: '▶️',
      bestFor: 'Video content, brand stories'
    },
    {
      type: 'Performance Max',
      description: 'AI-powered campaigns across all Google channels.',
      icon: '🤖',
      bestFor: 'Maximum reach, automated optimization'
    }
  ];

  // Meta Ads Features
  const metaFeatures = [
    {
      type: 'Feed Ads',
      description: 'Native ads that appear in Facebook and Instagram feeds.',
      icon: '📰',
      bestFor: 'Engagement, conversions'
    },
    {
      type: 'Stories Ads',
      description: 'Full-screen vertical ads between user stories.',
      icon: '📖',
      bestFor: 'Immersive experiences, quick attention'
    },
    {
      type: 'Reels Ads',
      description: 'Short-form video ads in the Reels section.',
      icon: '🎬',
      bestFor: 'Viral potential, younger audiences'
    },
    {
      type: 'Messenger Ads',
      description: 'Ads that appear in Facebook Messenger inbox.',
      icon: '💬',
      bestFor: 'Direct conversations, customer service'
    },
    {
      type: 'Retargeting',
      description: 'Re-engage users who visited your website.',
      icon: '🔄',
      bestFor: 'Abandoned carts, past visitors'
    }
  ];

  // Targeting Options
  const targetingOptions = {
    google: [
      'Keywords & Search Intent',
      'Location & Radius',
      'Device & Schedule',
      'Audience Affinities',
      'Remarketing Lists'
    ],
    meta: [
      'Demographics (Age, Gender, Location)',
      'Interests & Behaviors',
      'Custom Audiences',
      'Lookalike Audiences',
      'Connections & Engagement'
    ]
  };

  // Ad Formats
  const adFormats = [
    {
      platform: 'Google',
      formats: ['Text Ads', 'Responsive Search Ads', 'Image Ads', 'Video Ads', 'Product Listing Ads']
    },
    {
      platform: 'Meta',
      formats: ['Single Image', 'Carousel', 'Collection', 'Video', 'Slideshow', 'Stories', 'Reels']
    }
  ];

  // Process Steps (simplified)
  const processSteps = [
    {
      step: '01',
      title: 'Strategy & Research',
      description: 'Keyword research, audience analysis, and competitor benchmarking.'
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Ad creation, landing page optimization, and conversion tracking.'
    },
    {
      step: '03',
      title: 'Launch & Monitor',
      description: 'Go live with daily monitoring and A/B testing.'
    },
    {
      step: '04',
      title: 'Optimize & Scale',
      description: 'Data-driven adjustments to improve performance and scale winners.'
    }
  ];

  // Pricing Models
  const pricingModels = [
    {
      model: 'CPC (Cost Per Click)',
      description: 'Pay only when someone clicks your ad',
      bestFor: 'Traffic & conversions'
    },
    {
      model: 'CPM (Cost Per Mille)',
      description: 'Pay per 1,000 impressions',
      bestFor: 'Brand awareness'
    },
    {
      model: 'CPA (Cost Per Action)',
      description: 'Pay only when a specific action is completed',
      bestFor: 'Performance-based campaigns'
    },
    {
      model: 'CPV (Cost Per View)',
      description: 'Pay per video view',
      bestFor: 'Video campaigns'
    }
  ];

  // FAQ (simplified)
  const faqs = [
    {
      question: 'How much budget do I need to start?',
      answer: 'We recommend a minimum of $1,000/month for Google Ads and $500/month for Meta Ads to gather meaningful data.'
    },
    {
      question: 'How soon will I see results?',
      answer: 'You can see traffic immediately, but optimal results typically take 4-6 weeks of testing and optimization.'
    },
    {
      question: 'Which platform is better for my business?',
      answer: 'Google Ads is ideal for capturing active searchers, while Meta Ads excels at building awareness and targeting interests.'
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    contentRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getPlatformColor = (color) => {
    switch (color) {
      case 'google': return styles.google;
      case 'meta': return styles.meta;
      default: return '';
    }
  };

  const getBenefitColor = (color) => {
    switch (color) {
      case 'primary': return styles.primary;
      case 'purple': return styles.purple;
      case 'orange': return styles.orange;
      case 'teal': return styles.teal;
      default: return styles.primary;
    }
  };

  return (
    <div className={styles.wrapperPpcPage} ref={sectionRef}>
      {/* Hero Section */}
      <section className={styles.wrapperHeroSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperHeroContent}>
            <div className={styles.wrapperHeroText}>
              <span className={styles.wrapperHeroBadge}>PPC Advertising</span>
              <h1 className={styles.wrapperHeroTitle}>{overview.title}</h1>
              <p className={styles.wrapperHeroSubtitle}>{overview.subtitle}</p>
              <p className={styles.wrapperHeroDescription}>{overview.description}</p>
              
              <div className={styles.wrapperHeroStats}>
                {overview.stats.map((stat, index) => (
                  <div key={index} className={styles.wrapperHeroStat}>
                    <span className={styles.wrapperStatValue}>{stat.value}</span>
                    <span className={styles.wrapperStatLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>
            <div className={styles.wrapperHeroImage}>
              <div className={styles.wrapperImageCircle}>
                <span className={styles.wrapperImageEmoji}>💰</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.wrapperBenefitsSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Why <span className={styles.wrapperHighlight}>PPC?</span></h2>
          </div>

          <div className={styles.wrapperBenefitsGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`${styles.wrapperBenefitCard} ${getBenefitColor(benefit.color)}`}
                ref={(el) => (contentRef.current[index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperBenefitIcon}>{benefit.icon}</div>
                <h3 className={styles.wrapperBenefitTitle}>{benefit.title}</h3>
                <p className={styles.wrapperBenefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Overview */}
      <section className={styles.wrapperPlatformsSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Two Powerful <span className={styles.wrapperHighlight}>Platforms</span></h2>
          </div>

          <div className={styles.wrapperPlatformsGrid}>
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`${styles.wrapperPlatformCard} ${getPlatformColor(platform.color)}`}
                ref={(el) => (contentRef.current[benefits.length + index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperPlatformHeader}>
                  <span className={styles.wrapperPlatformIcon}>{platform.icon}</span>
                  <h3 className={styles.wrapperPlatformName}>{platform.name}</h3>
                </div>
                <p className={styles.wrapperPlatformDescription}>{platform.description}</p>
                <p className={styles.wrapperPlatformStats}>{platform.stats}</p>
                <div className={styles.wrapperPlatformFeatures}>
                  {platform.features.map((feature, idx) => (
                    <span key={idx} className={styles.wrapperPlatformFeature}>{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Ads Details */}
      <section className={styles.wrapperGoogleSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Google <span className={styles.wrapperHighlight}>Ads</span></h2>
            <p className={styles.wrapperSectionDescription}>Reach customers actively searching for your business</p>
          </div>

          <div className={styles.wrapperFeaturesGrid}>
            {googleFeatures.map((feature, index) => (
              <div
                key={index}
                className={styles.wrapperFeatureCard}
                ref={(el) => (contentRef.current[benefits.length + platforms.length + index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperFeatureIcon}>{feature.icon}</div>
                <h4 className={styles.wrapperFeatureTitle}>{feature.type}</h4>
                <p className={styles.wrapperFeatureDescription}>{feature.description}</p>
                <span className={styles.wrapperFeatureTag}>{feature.bestFor}</span>
              </div>
            ))}
          </div>

          <div className={styles.wrapperTargetingBox}>
            <h4 className={styles.wrapperTargetingTitle}>🎯 Targeting Options</h4>
            <div className={styles.wrapperTargetingList}>
              {targetingOptions.google.map((item, index) => (
                <span key={index} className={styles.wrapperTargetingItem}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meta Ads Details */}
      <section className={styles.wrapperMetaSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Meta <span className={styles.wrapperHighlight}>Ads</span></h2>
            <p className={styles.wrapperSectionDescription}>Connect with your audience on Facebook & Instagram</p>
          </div>

          <div className={styles.wrapperFeaturesGrid}>
            {metaFeatures.map((feature, index) => (
              <div
                key={index}
                className={styles.wrapperFeatureCard}
                ref={(el) => (contentRef.current[benefits.length + platforms.length + googleFeatures.length + index] = el)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.wrapperFeatureIcon}>{feature.icon}</div>
                <h4 className={styles.wrapperFeatureTitle}>{feature.type}</h4>
                <p className={styles.wrapperFeatureDescription}>{feature.description}</p>
                <span className={styles.wrapperFeatureTag}>{feature.bestFor}</span>
              </div>
            ))}
          </div>

          <div className={styles.wrapperTargetingBox}>
            <h4 className={styles.wrapperTargetingTitle}>🎯 Targeting Options</h4>
            <div className={styles.wrapperTargetingList}>
              {targetingOptions.meta.map((item, index) => (
                <span key={index} className={styles.wrapperTargetingItem}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ad Formats */}
      <section className={styles.wrapperFormatsSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Ad <span className={styles.wrapperHighlight}>Formats</span></h2>
          </div>

          <div className={styles.wrapperFormatsGrid}>
            {adFormats.map((format, index) => (
              <div key={index} className={styles.wrapperFormatCard}>
                <h3 className={styles.wrapperFormatPlatform}>{format.platform}</h3>
                <div className={styles.wrapperFormatList}>
                  {format.formats.map((item, idx) => (
                    <span key={idx} className={styles.wrapperFormatItem}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.wrapperProcessSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Simple <span className={styles.wrapperHighlight}>Process</span></h2>
          </div>

          <div className={styles.wrapperProcessSteps}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.wrapperProcessStep}>
                <span className={styles.wrapperStepNumber}>{step.step}</span>
                <h4 className={styles.wrapperStepTitle}>{step.title}</h4>
                <p className={styles.wrapperStepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className={styles.wrapperPricingSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Pricing <span className={styles.wrapperHighlight}>Models</span></h2>
          </div>

          <div className={styles.wrapperPricingGrid}>
            {pricingModels.map((model, index) => (
              <div key={index} className={styles.wrapperPricingCard}>
                <h4 className={styles.wrapperPricingModel}>{model.model}</h4>
                <p className={styles.wrapperPricingDescription}>{model.description}</p>
                <span className={styles.wrapperPricingTag}>{model.bestFor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.wrapperFaqSection}>
        <div className={styles.wrapperContainer}>
          <div className={styles.wrapperSectionHeader}>
            <h2 className={styles.wrapperSectionTitle}>Quick <span className={styles.wrapperHighlight}>Questions</span></h2>
          </div>

          <div className={styles.wrapperFaqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.wrapperFaqItem}>
                <h4 className={styles.wrapperFaqQuestion}>{faq.question}</h4>
                <p className={styles.wrapperFaqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default PPCAdsPage;